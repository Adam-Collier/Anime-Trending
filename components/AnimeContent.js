import React from "react";

const AnimeContent = ({ children }) => {
  return (
    <div>
      {children}
      <style jsx>
        {`
          div {
            display: grid;
            grid-template-columns: minmax(0, 1fr) 250px 700px minmax(0, 1fr);
            grid-template-rows: 150px 80px auto auto auto auto;
            max-width: 100vw;
          }

          @media (max-width: 768px) {
            div {
              grid-template-columns: 15px 1.4fr 1fr 15px;
              grid-template-rows: 150px auto auto auto auto auto;
            }
          }
        `}
      </style>
    </div>
  );
};

export default AnimeContent;
