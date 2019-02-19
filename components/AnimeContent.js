import React from "react";

const AnimeContent = ({ children }) => {
  return (
    <div>
      {children}
      <style jsx>
        {`
          div {
            padding-top: 80px;
            max-width: 900px;
            margin: 0 auto;
          }
        `}
      </style>
    </div>
  );
};

export default AnimeContent;
