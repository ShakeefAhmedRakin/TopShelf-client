import { useLoaderData } from "react-router-dom";
import BookCard from "../../components/BookCard";
import { BiBookReader } from "react-icons/bi";

const Books = () => {
  const books = useLoaderData().data;

  return (
    <>
      {books.length > 0 ? (
        <div className="max-w-7xl mx-auto px-2 my-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <BookCard key={book._id} book={book}></BookCard>
          ))}
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-2 my-12 h-96 gap-4 flex flex-col items-center justify-center">
          <BiBookReader className="text-primaryLight text-4xl dark:text-primaryDark"></BiBookReader>
          <h1 className="text-center font-bold text-xl dark:text-white">
            No Books For This Category
          </h1>
        </div>
      )}
    </>
  );
};

export default Books;
