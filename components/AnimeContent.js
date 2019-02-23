import React from "react";

const AnimeContent = ({ children, columns, rows }) => {
  return (
    <div>
      {children}
      <style jsx>
        {`
          div {
            display: grid;
            grid-template-columns: ${columns};
            grid-template-rows: ${rows};
            max-width: 100vw;
          }
        `}
      </style>
    </div>
  );
};

export default AnimeContent;
