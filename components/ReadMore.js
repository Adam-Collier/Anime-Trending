import react, { useState } from "react";

const ReadMore = props => {
  const [toggleState, setToggleState] = useState("off");

  function toggle() {
    setToggleState(toggleState === false ? true : false);
  }

  return (
    <div>
      <div />
      <p className={`synopsis ${!toggleState ? "expand" : ""}`}>
        {props.synopsis}
      </p>
      <p onClick={toggle}>{toggleState ? `read more` : `read less`}</p>
      <style jsx>{`
        p {
          color: #ffffff;
          cursor: pointer;
        }
        .synopsis {
          position: relative;
          height: 109px;
          overflow: hidden;
        }
        .synopsis:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, #1f202c 20%, rgba(0, 0, 0, 0));
          height: 70px;
        }
        .expand {
          height: 100%;
        }
        .expand:after {
          background: linear-gradient(
            to top,
            rgba(31, 32, 41, 0) 20%,
            rgba(0, 0, 0, 0)
          );
        }
      `}</style>
    </div>
  );
};

export default ReadMore;
