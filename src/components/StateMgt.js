import React, { useState } from "react";

export default function StateMgt() {
  const [userInfo, setUserInfo] = useState({
    name: "Stanley",
    location: "Nigeria",
  });

  const changeName = () => {
    // userInfo.name = "Stan"
    setUserInfo({ name: "Mickey", location: "USA" });
  };

  return (
    <div>
      <div className="app">Hello my name is {userInfo.name} and my age is {userInfo.location}</div>
      <button type="button" onClick={changeName}>
        Change name
      </button>
    </div>
  );
}
