import { BiSolidBookmarkPlus } from "react-icons/bi";
import PropTypes from "prop-types";

const BorrowBook = ({ user, handleBorrowBook }) => {
  function getDate() {
    const today = new Date();
    let month = today.getMonth() + 1;
    const year = today.getFullYear();
    let date = today.getDate();
    if (date < 10) {
      date = "0" + date.toString();
    }
    if (month < 10) {
      month = "0" + date.toString();
    }
    return `${year}-${month}-${date}`;
  }

  return (
    <>
      <form onSubmit={handleBorrowBook}>
        <div className="my-6">
          <label className="block mb-2 text-sm font-medium text-black dark:text-white">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="bg-gray-300 dark:bg-gray-900 border border-gray-300 dark:border-gray-900 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:text-white"
            required
            defaultValue={user.displayName}
            readOnly
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-black dark:text-white">
            Email
          </label>
          <input
            type="text"
            name="email"
            className="bg-gray-300 dark:bg-gray-900 border border-gray-300 dark:border-gray-900 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:text-white"
            required
            defaultValue={user.email}
            readOnly
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-black dark:text-white">
            Borrow Date
          </label>
          <input
            type="date"
            name="borrowed_date"
            className="bg-gray-300 dark:bg-gray-900 border border-gray-300 dark:border-gray-900 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:text-white"
            required
            readOnly
            defaultValue={getDate()}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-black dark:text-white">
            Return Date
          </label>
          <input
            type="date"
            name="date"
            className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-900 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:text-white"
            required
            min={getDate()}
          />
        </div>
        <button className="btn w-full text-white bg-primaryLight hover:bg-primaryLight">
          Borrow
          <BiSolidBookmarkPlus className="text-xl"></BiSolidBookmarkPlus>
        </button>
      </form>
    </>
  );
};

BorrowBook.propTypes = {
  user: PropTypes.object,
  handleBorrowBook: PropTypes.func,
};

export default BorrowBook;
