import { useState } from "react";
import Tab from "../components/Tab";

const Tabs = props => {
  let { children } = props;

  // Declare a new state variable, which we'll call "count"
  const [activeTab, setActiveTab] = useState(props.children[0].props.label);

  let onClickTabItem = tab => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
      <ol className="tab-list">
        {children.map(child => {
          const { label } = child.props;
          return (
            <Tab
              activeTab={activeTab}
              key={label}
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
            grid-row: 4/5;
            grid-column: 3/4;
            background: #19191f;
            border-radius: 5px 5px 0 0;
            position: sticky;
            top: 10px;
          }
          .tab-list {
            background: #19191f;
            padding: 5px 0 5px 4px;
            margin-top: 0;
            position: -webkit-sticky;
            position: sticky;
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
          @media (max-width: 768px) {
            .tabs {
              grid-row: 4/5;
              grid-column: 1/5;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Tabs;
