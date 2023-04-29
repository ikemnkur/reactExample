import React from "react";

export default function Test2({ userInfo, age }) {
  return (
    <div>
      Hi my name is {userInfo?.name ?? "Stan"} and age is {age?.id}
    </div>
  );
}
