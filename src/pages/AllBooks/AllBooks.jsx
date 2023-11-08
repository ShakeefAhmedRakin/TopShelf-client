import { useLoaderData } from "react-router-dom";
import EditBookCard from "../../components/EditBookCard";
import { useState } from "react";

const AllBooks = () => {
  const books = useLoaderData().data;
  const [showNonZeroQuantityBooks, setShowNonZeroQuantityBooks] =
    useState(false);

  const filteredBooks = showNonZeroQuantityBooks
    ? books.filter((book) => book.book_quantity > 0)
    : books;

  return (
    <>
      <div className="max-w-7xl mx-auto px-2 my-12 flex justify-center">
        <button
          className="btn border-none bg-primaryLight hover:bg-primaryLight dark:bg-primaryDark dark:hover:bg-primaryDark font-medium text-white"
          onClick={() => setShowNonZeroQuantityBooks(!showNonZeroQuantityBooks)}
        >
          {showNonZeroQuantityBooks ? "Show All Books" : "Show Available Books"}
        </button>
      </div>
      <div className="max-w-7xl mx-auto px-2 my-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {filteredBooks.map((book) => (
          <EditBookCard key={book._id} book={book}></EditBookCard>
        ))}
      </div>
    </>
  );
};

export default AllBooks;
