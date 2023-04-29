import React from "react";

export default function Test1(props) {
  console.log("helllllo", props);
  return (
    <div>
      <div>
        Hi my name is {props?.userInfo?.name ?? "Stan"} and age is {props?.age?.id}
      </div>
      <div>
        {/* Hi my name is {props?.userInfo?.name ? "Mickey" : "Stan"} */}
      </div>
    </div>
  );
}
