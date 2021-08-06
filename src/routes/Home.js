import React, { useState, useEffect } from "react";
import { dbService } from "fbase";
import Kyuwitt from "components/Kyuwitt";
import KyuwittFactory from "components/KyuwittFactory";

const Home = ({ userObj }) => {
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

  return (
    <div>
      <KyuwittFactory userObj={userObj} />
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
