import PropTypes from 'prop-types'

export default function UnsplashCredits({ meta }) {
  return (
    <div className="text-sm">
      <a href={meta.imageUrl} className="hover:underline">
        Photo
      </a>
      ,{" "}
      <a href={meta.authorUrl} className="hover:underline">
        {meta.authorName}
      </a>
      ,{" "}
      <a href="https://unsplash.com/" className="hover:underline">
        Unsplash
      </a>
    </div>
  );
}

UnsplashCredits.propTypes = {
  meta: PropTypes.exact({
    imageUrl: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    authorUrl: PropTypes.string.isRequired
  })
}