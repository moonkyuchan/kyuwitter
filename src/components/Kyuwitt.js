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
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmitEdit}>
            <input
              type="text"
              placeholder="EDIT ! ! "
              value={newKyuwitt}
              required
              onChange={onChangeEdit}
            />
            <input type="submit" value="Update ! !" />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{mentions.text}</h4>
          {mentions.imgFileUrl && (
            <img
              src={mentions.imgFileUrl}
              alt=""
              width="100px"
              height="100px"
            />
          )}
          {isOwner && (
            <>
              <button onClick={deleteKyuwitt}>Delete Kyuwitt</button>
              <button onClick={toggleEditing}>Edit Kyuwitt</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Kyuwitt;
