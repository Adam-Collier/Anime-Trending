import Link from 'next/link'

const AnimeItem = ({ anime }) => {
  return (
    <div className="anime">
      <Link as={`/anime/${anime.id}`} href={`/post?id=${anime.id}`}>
        <a>
          <img
            src={anime.attributes.posterImage.small}
            alt={anime.attributes.canonicalTitle}
          />
        </a>
      </Link>
      <style jsx>{`
        .anime {
          flex: 0 0 auto;
          margin-right: 20px;
          border-radius: 5px;
          width: 200px;
        }
        a {
          cursor: pointer;
        }
        img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          border-radius: 5px;
        }
      `}</style>
    </div>
  )
}

export default AnimeItem
