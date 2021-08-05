import React, { useState, useEffect } from "react";
import { dbService, storageService } from "fbase";
import { v4 as uuidv4 } from "uuid";
import Kyuwitt from "components/Kyuwitt";

const Home = ({ userObj }) => {
  const [kyuWitt, setKyuWitt] = useState("");
  const [mention, setMention] = useState([]);
  const [imgFile, setImgFile] = useState("");

  // const getMention = async () => {
  //   const dbMention = await dbService.collection("kyuwitter").get();
  //   dbMention.forEach((document) => {
  //     const mentionObj = {
  //       ...document.data(),
  //       id: document.id,
  //     };
  //     setMention((prev) => [mentionObj, ...prev]);
  //   });
  // }; !!!!!!멘션을 가져오는 구식의 방식!!!

  useEffect(() => {
    // getMention();
    dbService.collection("kyuwitter").onSnapshot((snapshot) => {
      const mentionArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMention(mentionArray);
    });
  }, []);

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
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="what's on your mind?"
          value={kyuWitt}
          onChange={onChange}
        />
        <input type="submit" value="✅" />
        <input type="file" accept="imgage/*" onChange={onImgChange} />
        {imgFile && (
          <div>
            <img src={imgFile} alt="" width="50px" height="50px" />
            <button onClick={onDeleteImgClick}>Clear</button>
          </div>
        )}
      </form>
      <div>
        {mention.map((mentions) => (
          <Kyuwitt
            key={mentions.id}
            mentions={mentions}
            isOwner={mentions.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
