import { useLoaderData } from "react-router-dom";
import { BsFillBookFill } from "react-icons/bs";

const ReadBook = () => {
  const book = useLoaderData().data;

  return (
    <>
      <div className="max-w-7xl mx-auto px-2 my-12">
        <h1 className="text-center md:text-left text-2xl font-bold flex flex-col md:flex-row items-center gap-2 dark:text-white">
          <BsFillBookFill className="text-primaryLight dark:text-primaryDark"></BsFillBookFill>
          {book.book_name}
        </h1>
        <hr className="my-2" />
        <p className="dark:text-gray-300">{book.book_description}</p>
      </div>
    </>
  );
};

export default ReadBook;
