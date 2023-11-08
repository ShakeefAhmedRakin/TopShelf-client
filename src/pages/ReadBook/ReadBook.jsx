import { useLoaderData } from "react-router-dom";
import { BsFillBookFill } from "react-icons/bs";

const ReadBook = () => {
  const book = useLoaderData().data;

  return (
    <>
      <div className="max-w-7xl mx-auto px-2 my-12">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <BsFillBookFill className="text-primaryLight"></BsFillBookFill>
          {book.book_name}
        </h1>
        <hr className="my-2" />
        <p>{book.book_description}</p>
      </div>
    </>
  );
};

export default ReadBook;
