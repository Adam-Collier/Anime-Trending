import react, { Fragment, useState } from 'react';

const ReadMore = props => {
  const [toggleState, setToggleState] = useState(true);

  function toggle() {
    setToggleState(toggleState === true ? false : true);
  }

  return (
    <Fragment>
      <p className={`description ${toggleState ? '' : 'expand'}`}>
        {props.data}
      </p>
      <p onClick={toggle}>{toggleState ? `read more` : `read less`}</p>
      <style jsx>{`
        p {
          color: #ffffff;
          cursor: pointer;
          margin-bottom: 0px;
        }
        .description {
          position: relative;
          height: ${props.height ? props.height : '118px'};
          overflow: hidden;
        }
        .description:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: var(--gradient-background);
          height: 70px;
        }
        .expand {
          height: auto;
        }
        .expand:after {
          background: linear-gradient(
            to top,
            rgba(31, 32, 41, 0) 20%,
            rgba(0, 0, 0, 0)
          );
        }
        @media (max-width: 768px) {
          .description {
            height: 142px;
          }
          .expand {
            height: auto;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default ReadMore;
