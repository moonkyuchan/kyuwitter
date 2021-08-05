import React, { useState, useEffect } from "react";
import { dbService } from "fbase";
import Kyuwitt from "components/Kyuwitt";

const Home = ({ userObj }) => {
  const [kyuWitt, setKyuWitt] = useState("");
  const [mention, setMention] = useState([]);

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
    await dbService.collection("kyuwitter").add({
      text: kyuWitt,
      createdAt: Date.now(),
      creatorId: userObj.uid,
    });
    setKyuWitt("");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setKyuWitt(value);
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
