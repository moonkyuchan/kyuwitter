import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { storageService, dbService } from "fbase";

const KyuwittFactory = ({ userObj }) => {
  const [kyuWitt, setKyuWitt] = useState("");
  const [imgFile, setImgFile] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    if (kyuWitt === "") {
      return;
    }
    let imgFileUrl = "";
    if (imgFile !== "") {
      const imgFileRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      const imgFileResponse = await imgFileRef.putString(imgFile, "data_url");
      imgFileUrl = await imgFileResponse.ref.getDownloadURL();
    }
    const kyuwittObj = {
      text: kyuWitt,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      imgFileUrl,
    };

    await dbService.collection("kyuwitter").add(kyuwittObj);
    setKyuWitt("");
    setImgFile("");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setKyuWitt(value);
  };

  const onImgChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishEvent) => {
      const {
        currentTarget: { result },
      } = finishEvent;
      setImgFile(result);
    };
    if (Boolean(theFile)) {
      reader.readAsDataURL(theFile);
    }
  };

  const onDeleteImgClick = () => {
    setImgFile("");
  };
  return (
    <form onSubmit={onSubmit} className="factoryForm">
      <div className="factoryInput__container">
        <input
          type="text"
          placeholder="what's on your mind?"
          value={kyuWitt}
          onChange={onChange}
          maxLength={120}
          className="factoryInput__input"
        />
        <input type="submit" value="yes" className="factoryInput__arrow" />
      </div>
      <label for="attach-file" className="factoryInput__label">
        <span>Add Photo</span>
      </label>
      <input
        id="attach-file"
        type="file"
        accept="imgage/*"
        onChange={onImgChange}
        style={{
          opacity: 0,
        }}
      />
      {imgFile && (
        <div className="factoryForm__attachment">
          <img
            src={imgFile}
            alt=""
            style={{
              backgroundImage: imgFile,
            }}
          />
          <div className="factoryForm__clear" onClick={onDeleteImgClick}>
            <span>Romove</span>
          </div>
        </div>
      )}
    </form>
  );
};

export default KyuwittFactory;
