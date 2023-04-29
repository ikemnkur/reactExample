import React, { useState } from "react";

export default function StateMgt2() {
  const [userInfo, setUserInfo] = useState({
    name: "Stanley",
    location: "Nigeria",
  });

  const changeName = (newName, newLocation) => {
    // userInfo.name = "Stan"
    setUserInfo({ name: newName, location: newLocation });
  };

  return (
    <div>
      <div className="app">
        Hello my name is {userInfo.name} and my age is {userInfo.location}
      </div>
      <button type="button" onClick={() => changeName("Mickey", "USA")}>
        Change name
      </button>
    </div>
  );
}
