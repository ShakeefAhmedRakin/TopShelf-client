import { useLoaderData } from "react-router-dom";
import { BsFillBookFill } from "react-icons/bs";
import { BiSolidBookmarkPlus } from "react-icons/bi";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const BookDetails = () => {
  const book = useLoaderData().data;

  const [remaining, setRemaining] = useState(book.book_quantity);

  return (
    <>
      <div className="max-w-7xl mx-auto px-2 my-12">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="rounded-md">
            <img
              src={book.book_image}
              alt="Book Cover"
              className="w-full h-72 object-contain rounded-md"
            />
          </div>
          <div className="flex flex-col h-full gap-1 mt-2 flex-1">
            <h1 className="font-medium text-xl">{book.book_name}</h1>
            <hr />
            <div className="flex justify-between items-center">
              <div>
                <div className="flex gap-4 items-center mb-2">
                  <span className="badge text-white text-xs bg-primaryLight font-medium">
                    {book.book_author}
                  </span>
                  <span className="badge text-white text-xs bg-primaryLight font-medium">
                    {book.book_category}
                  </span>
                </div>
                <Rating
                  style={{ maxWidth: 120 }}
                  value={book.book_rating}
                  readOnly
                />
              </div>
              <h1 className="text-lg font-bold">Remaining: {remaining}</h1>
            </div>
            <hr />
            <p className="h-24 overflow-y-hidden relative">
              {book.book_description}
              <div className="h-24 absolute bottom-0 w-full bg-gradient-to-t from-white to-transparent"></div>
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Link to={`/read/${book._id}`} className="w-full">
                <button className="btn bg-transparent text-primaryLight border-none hover:text-white hover:bg-primaryLight mt-3 w-full">
                  Read<BsFillBookFill></BsFillBookFill>
                </button>
              </Link>
              <button
                disabled={remaining === 0 ? "disabled" : ""}
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
                className="btn bg-transparent text-primaryLight border-none hover:text-white hover:bg-primaryLight mt-3 w-full"
              >
                Borrow
                <BiSolidBookmarkPlus className="text-xl"></BiSolidBookmarkPlus>
              </button>
              {/* MODAL */}
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">
                    Press ESC key or click the button below to close
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
