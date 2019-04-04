import { useState, useRef } from "react";
import shortid from "shortid";
import Tab from "../components/Tab";

const Tabs = props => {
  let { children } = props;

  // Declare a new state variable, which we'll call "count"
  const tabLabel = children[0].props.label;
  const [activeTab, setActiveTab] = useState(tabLabel);

  const underline = useRef(null);

  let onClickTabItem = (tab, element) => {
    let left = element.offsetLeft;
    let width = element.offsetWidth;
    underline.current.style.setProperty("--left-position", `${left}px`);
    underline.current.style.setProperty("--line-width", `${width}px`);
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
      <ol className="tab-list">
        <div className="underline" ref={underline} />
        {children.map(child => {
          const key = shortid.generate();
          const { label } = child.props;
          return (
            <Tab
              activeTab={activeTab}
              key={key}
              label={label}
              onClick={onClickTabItem}
            />
          );
        })}
      </ol>
      <div className="tab-content">
        {children.map(child => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
      <style jsx>
        {`
          .tabs {
            grid-row: 5/6;
            grid-column: 3/4;
            background: #19191f;
            border-radius: 5px 5px 0 0;
            top: 10px;
            margin-top: 30px;
            position: relative;
          }
          .tab-list {
            background: #19191f;
            padding: 5px 0 5px 4px;
            margin-top: 0;
            position: sticky;
            transform: translate3d(0, 0, 0);
            top: 10px;
            z-index: 2;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
          }
          .tab-list:after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: -10px;
            height: 10px;
            background: #1f202c;
          }
          .underline {
            --left-position: 16px;
            --line-width: 66px;
            position: absolute;
            left: var(--left-position);
            bottom: 0;
            height: 2px;
            width: var(--line-width);
            background: #ffffff;
            transition: left ease 200ms, width ease-in-out 100ms;
          }
          @media (max-width: 768px) {
            .tabs {
              grid-row: 4/5;
              grid-column: 1/5;
              margin-top: 40px;
            }
            .tab-list {
              grid-column: 2/4;
              top: 0px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Tabs;
