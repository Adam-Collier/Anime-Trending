import { Fragment, useState, useRef, useEffect } from "react";

const ReadMore = props => {
  let { charLimit, data: content, height } = props;

  const [toggleState, setToggleState] = useState("off");

  function toggle() {
    setToggleState(toggleState === false ? true : false);
  }

  return (
    <div>
      {content.length > charLimit ? (
        <Fragment>
          <p className={`description ${!toggleState ? "expand" : ""}`}>
            {!toggleState
              ? content
              : `${content.substr(0, content.lastIndexOf(" ", charLimit))}...`}
          </p>
          <p onClick={toggle}>{toggleState ? `read more` : `read less`}</p>
        </Fragment>
      ) : (
        <Fragment>
          <p>{content}</p>
        </Fragment>
      )}
      <style jsx>{`
        p {
          color: #ffffff;
          cursor: pointer;
        }
        .description {
          position: relative;
        }
        .description:after {
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

  // return (
  //   <div>
  //     <p
  //       className={`${!readMoreState ? "description" : ""} ${
  //         !toggleState ? "expand" : ""
  //       }`}
  //       ref={textInput}
  //     >
  //       {content}
  //     </p>
  //     <p onClick={toggle}>{toggleState ? `read more` : `read less`}</p>
  //     <style jsx>{`
  //       p {
  //         color: #ffffff;
  //         cursor: pointer;
  //       }
  //       .description {
  //         position: relative;
  //         height: ${height ? height : "109px"};
  //         overflow: hidden;
  //       }
  //       .description:after {
  //         content: "";
  //         position: absolute;
  //         bottom: 0;
  //         left: 0;
  //         right: 0;
  //         background: linear-gradient(to top, #1f202c 20%, rgba(0, 0, 0, 0));
  //         height: 70px;
  //       }
  //       .expand {
  //         height: 100%;
  //       }
  //       .expand:after {
  //         background: linear-gradient(
  //           to top,
  //           rgba(31, 32, 41, 0) 20%,
  //           rgba(0, 0, 0, 0)
  //         );
  //       }
  //     `}</style>
  //   </div>
  // );
};

export default ReadMore;
