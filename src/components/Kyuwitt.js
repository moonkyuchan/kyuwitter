import React, { useState } from "react";
import { dbService, storageService } from "fbase";

const Kyuwitt = ({ mentions, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newKyuwitt, setNewKyuwitt] = useState(mentions.text);

  const deleteKyuwitt = async () => {
    const confirm = window.confirm("정말 삭제 하시겠습니까?");
    if (confirm) {
      await dbService.doc(`kyuwitter/${mentions.id}`).delete();
      await storageService.refFromURL(mentions.imgFileUrl);
    }
  };

  const toggleEditing = () => {
    setEditing((prev) => !prev);
  };

  const onChangeEdit = (event) => {
    const {
      target: { value },
    } = event;
    setNewKyuwitt(value);
  };

  const onSubmitEdit = async (event) => {
    event.preventDefault();
    await dbService.doc(`kyuwitter/${mentions.id}`).update({
      text: newKyuwitt,
    });
    setEditing(false);
  };

  return (
    <div className="kyuwitt_wrap">
      <div className="kyuwitt_img_wrap">
        <div className="nweet">
          {editing ? (
            <>
              <form onSubmit={onSubmitEdit} className="container nweetEdit">
                <input
                  type="text"
                  placeholder="EDIT ! ! "
                  value={newKyuwitt}
                  required
                  onChange={onChangeEdit}
                  className="formInput"
                />
                <input type="submit" value="Update ! !" className="formBtn" />
              </form>
              <button onClick={toggleEditing} className="formBtn cancelBtn">
                Cancel
              </button>
            </>
          ) : (
            <>
              <h4>{mentions.text}</h4>
            </>
          )}
        </div>
        {mentions.imgFileUrl && <img src={mentions.imgFileUrl} alt="" />}
      </div>
      <div className="kyuwitt_actions">
        {isOwner && (
          <div className="nweet__actions">
            <button onClick={deleteKyuwitt} className="kyuwitt_btn">
              Delete Kyuwitt
            </button>
            <button
              onClick={toggleEditing}
              className="kyuwitt_btn"
              style={{ marginLeft: "10px" }}
            >
              Edit Kyuwitt
            </button>
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default Kyuwitt;
