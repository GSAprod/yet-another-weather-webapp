import PropTypes from "prop-types";

/**
 * Label on the bottom-left corner, for giving attribution to the author whose
 * picture is displayed on the background of the webpage.
 */
export default function UnsplashCredits({ meta }) {
  return (
    <div className="text-sm">
      <a
        href={meta.imageUrl}
        className="hover:underline"
        target="_blank"
        rel="noreferrer">
        Photo
      </a>
      ,{" "}
      <a
        href={meta.authorUrl}
        className="hover:underline"
        target="_blank"
        rel="noreferrer">
        {meta.authorName}
      </a>
      ,{" "}
      <a
        href="https://unsplash.com/"
        className="hover:underline"
        target="_blank"
        rel="noreferrer">
        Unsplash
      </a>
    </div>
  );
}

UnsplashCredits.propTypes = {
  meta: PropTypes.exact({
    imageUrl: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    authorUrl: PropTypes.string.isRequired,
  }),
};
