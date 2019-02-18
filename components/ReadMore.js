import react, { useState } from "react";

const ReadMore = props => {
  const [toggleState, setToggleState] = useState("off");

  function toggle() {
    setToggleState(toggleState === "off" ? "on" : "off");
  }

  return (
    <div>
      <div />
      <p>{props.synopsis}</p>
      <p onClick={toggle}>read more</p>
      <style jsx global>{`
        p {
          color: #ffffff;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default ReadMore;
