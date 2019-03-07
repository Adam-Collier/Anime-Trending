import React from "react";

const AnimeContent = ({ children, columns, rows }) => {
  return (
    <div>
      {children}
      <style jsx>
        {`
          div {
            display: grid;
            grid-template-columns: minmax(0, 1fr) 250px 700px minmax(0, 1fr);
            grid-template-rows: 150px 74px auto auto auto;
            max-width: 100vw;
          }

          @media (max-width: 768px) {
            div {
              grid-template-columns: 6px 1.4fr 1fr 6px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default AnimeContent;
