import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import BookCard from "../../components/BookCard";
import { BiBookReader } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";

const Books = () => {
  const books = useLoaderData().data;
  const { control, reset, handleSubmit } = useForm();
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (!term) {
      setFilteredBooks(books);
    } else {
      const filtered = books.filter((book) =>
        book.book_name.toLowerCase().includes(term)
      );
      setFilteredBooks(filtered);
    }
  };

  const clearSearch = () => {
    reset({ book_name: "" });
    setSearchTerm("");
    setFilteredBooks(books);
  };

  return (
    <>
      <div
        className={`${
          books.length <= 0 ? "hidden" : "block"
        } max-w-7xl mx-auto px-2 my-4`}
      >
        <form onSubmit={handleSubmit(clearSearch)}>
          <label
            htmlFor="book_name"
            className="block text-lg font-semibold dark:text-white"
          >
            Search by Book Name:
          </label>
          <Controller
            name="book_name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="book_name"
                placeholder="Enter book name..."
                className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring focus:ring-primaryLight"
                onChange={handleInputChange}
                value={searchTerm}
              />
            )}
          />
        </form>
      </div>
      {filteredBooks.length > 0 ? (
        <div className="max-w-7xl mx-auto px-2 my-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book._id} book={book}></BookCard>
          ))}
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-2 my-12 h-96 gap-4 flex flex-col items-center justify-center">
          <BiBookReader className="text-primaryLight text-4xl dark:text-primaryDark"></BiBookReader>
          <h1 className="text-center font-bold text-xl dark:text-white">
            No Books Found
          </h1>
        </div>
      )}
    </>
  );
};

export default Books;
