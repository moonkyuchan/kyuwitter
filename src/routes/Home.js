import React, { useState } from "react";
import { dbService } from "fbase";

const Home = () => {
  const [kyuWitt, setKyuWitt] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("kyuwitter").add({
      kyuWitt,
      createdAt: Date.now(),
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
    </div>
  );
};

export default Home;
