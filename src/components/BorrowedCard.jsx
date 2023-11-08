import PropTypes from "prop-types";
import { BiSolidBookmarkMinus } from "react-icons/bi";

const BorrowedCard = ({ book, handleReturn }) => {
  return (
    <>
      <div className="flex flex-col h-full">
        <div className="rounded-md">
          <img
            src={book.book_image}
            alt="Book Cover"
            className="w-full h-72 object-contain rounded-md"
          />
        </div>
        <div className="flex flex-col h-full gap-1 mt-2">
          <span className="badge text-white text-xs bg-primaryLight font-medium">
            {book.book_category}
          </span>
          <hr />
          <div className="flex flex-col justify-between h-full">
            <h1 className="font-medium">{book.book_name}</h1>
            <hr className="my-3" />
            <p>Borrowed Date: {book.borrowed_date}</p>
            <p>Return Date: {book.return_date}</p>

            <button
              className="btn bg-transparent text-primaryLight border-none hover:text-white hover:bg-primaryLight mt-3 w-full"
              onClick={() => handleReturn(book.borrowed_id, book._id)}
            >
              Return
              <span>
                <BiSolidBookmarkMinus></BiSolidBookmarkMinus>
              </span>
            </button>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

BorrowedCard.propTypes = {
  book: PropTypes.object,
  handleReturn: PropTypes.func,
};

export default BorrowedCard;
