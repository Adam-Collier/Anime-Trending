import { Fragment } from 'react'
import ReactHtmlParser from 'react-html-parser'
import shortid from 'shortid'
import HorizontalRule from '../components/HorizontalRule'

import ReadMore from './ReadMore'

const CharacterList = ({ data }) => (
  <Fragment>
    {data ? (
      data.map(character => {
        const key = shortid.generate()
        return (
          <div className="character" key={key}>
            <div className="image">
              <img
                src={character.attributes.image.original}
                alt={character.attributes.names.en}
              />
            </div>
            <div className="description">
              <h3>{character.attributes.names.en}</h3>
              <h5>{character.attributes.names.ja_jp}</h5>
              <ReadMore
                data={ReactHtmlParser(character.attributes.description)}
                height="92px"
              />
            </div>
            <HorizontalRule />
          </div>
        )
      })
    ) : (
      <div className="character">
        <p>no data available</p>
      </div>
    )}
    <style jsx>
      {`
        .character {
          position: relative;
          display: grid;
          grid-template-columns: 18px 120px auto 18px;
          grid-gap: 15px;
          margin-bottom: 50px;
        }
        .character > p {
          margin-top: 20px;
          margin-bottom: 0px;
        }
        .image {
          grid-column: 2/3;
          width: 100%;
          height: 192px;
          overflow: hidden;
          border-radius: 5px;
          position: sticky;
          top: 60px;
        }
        img {
          width: 100%;
          transform-origin: center center;
          transform: scale(1.1);
        }
        .description {
          padding-left: 20px;
        }
        :global(.description > p:after) {
          grid-column: 3/4;
          --gradient-background: linear-gradient(
            to top,
            rgba(25, 25, 31, 0.8) 10%,
            rgba(25, 25, 31, 0)
          );
        }
        h3 {
          margin-top: 0px;
          margin-bottom: 10px;
        }
        h5 {
          margin: 0px;
          color: #adadad;
        }
        p {
          grid-column: 2/3;
          margin-bottom: 30px;
        }

        @media (max-width: 768px) {
          .character {
            width: 100vw;
            grid-template-columns: 0px 100px auto 0px;
          }
          .description {
            width: calc(100% - 25px);
            padding-left: 0px;
          }
          .image {
            height: 162px;
          }
        }
      `}
    </style>
  </Fragment>
)

export default CharacterList
