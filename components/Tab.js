import React from 'react'

const Tab = props => {
  const { label, activeTab } = props

  let onClick = event => {
    const { label, onClick } = props
    onClick(label, event.target)
  }

  let isActive = activeTab === label && 'tab-list-active'

  return (
    <li className="tab-list-item">
      <div className={isActive} onClick={onClick}>
        {label}
      </div>
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
        `}
      </style>
    </li>
  )
}

export default Tab
