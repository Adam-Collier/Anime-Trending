import React from "react";

const Tab = props => {
  const { label, activeTab } = props;

  let onClick = () => {
    const { label, onClick } = props;
    onClick(label);
  };

  let isActive = activeTab === label && "tab-list-active"

  return (
    <li className="tab-list-item" onClick={onClick}>
      <div className={isActive}>{label}</div>
      <style jsx>
        {`
          .tab-list-item {
            text-align: center;
            display: inline-block;
            list-style: none;
            margin-bottom: -1px;
            padding: 0.5rem 0.75rem;
            cursor: pointer;
            border-radius: 3px 3px 0 0;
          }
          .tab-list-active {
            padding-bottom: 6px;
            border-bottom: 2px solid white;
          }
        `}
      </style>
    </li>
  );
};

export default Tab;
