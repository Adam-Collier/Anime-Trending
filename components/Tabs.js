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
    </div>
  );
};

export default Tabs;