import React, { Fragment } from 'react'

const HorizontalRule = () => {
  return (
    <Fragment>
      <hr />
      <style jsx>{`
        hr {
          border: none;
          display: block;
          position: absolute;
          bottom: -25px;
          left: 0;
          right: 0;
          background: #292930;
          height: 2px;
          margin: 0;
        }
      `}</style>
    </Fragment>
  )
}

export default HorizontalRule
