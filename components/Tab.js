import React from "react";

const Tab = props => {
  const { label, activeTab } = props;

  let onClick = () => {
    const { label, onClick } = props;
    onClick(label);
  };

  let className = "tab-list-item";

  if (activeTab === label) {
    className += " tab-list-active";
  }

  return (
    <li className={className} onClick={onClick}>
      {label}
      <style jsx>
        {`
          .tab-list {
            border-bottom: 1px solid #ccc;
            padding-left: 0;
          }

          .tab-list-item {
            display: inline-block;
            list-style: none;
            margin-bottom: -1px;
            padding: 0.5rem 0.75rem;
            cursor: pointer;
          }

          .tab-list-active {
            border: solid #ccc;
            border-width: 1px 1px 0 1px;
            text-decoration: underline;
          }
        `}
      </style>
    </li>
  );
};

export default Tab;
