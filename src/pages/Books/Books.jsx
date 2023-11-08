import { useLoaderData } from "react-router-dom";
import BookCard from "../../components/BookCard";

const Books = () => {
  const books = useLoaderData().data;

  return (
    <>
      <div className="max-w-7xl mx-auto px-2 my-12 grid grid-cols-5 gap-6">
        {books.map((book) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>
    </>
  );
};

export default Books;
