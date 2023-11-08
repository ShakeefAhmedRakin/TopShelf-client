import PropTypes from "prop-types";
import { BsFillBookFill } from "react-icons/bs";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <>
      <div className="flex flex-col h-full">
        <div className="rounded-md">
          <img
            src={book.book_image}
            alt="Book Cover"
            className="w-full h-72 object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col h-full gap-1 mt-2">
          <div className="flex justify-between">
            <span className="badge text-white text-xs bg-primaryLight font-medium">
              {book.book_author}
            </span>
            <span className="badge text-white text-xs bg-primaryLight font-medium">
              {book.book_category}
            </span>
          </div>
          <hr />
          <Rating
            style={{ maxWidth: 120 }}
            value={parseInt(book.book_rating)}
            readOnly
          />
          <div className="flex flex-col justify-between h-full">
            <h1 className="font-medium">{book.book_name}</h1>
            <Link to={`details/${book._id}`} className="w-full">
              <button className="btn bg-transparent text-primaryLight border-none hover:text-white hover:bg-primaryLight mt-3 w-full">
                Details<BsFillBookFill></BsFillBookFill>
              </button>
            </Link>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

BookCard.propTypes = {
  book: PropTypes.object,
};

export default BookCard;
