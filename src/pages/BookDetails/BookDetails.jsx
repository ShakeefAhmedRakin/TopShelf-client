import { useLoaderData } from "react-router-dom";
import { BsFillBookFill } from "react-icons/bs";
import { BiSolidBookmarkPlus } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import BorrowBook from "../../components/BorrowBook";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "sonner";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const BookDetails = () => {
  const book = useLoaderData().data;
  const { user } = useContext(AuthContext);
  const [remaining, setRemaining] = useState(book.book_quantity);
  const AxiosSecure = useAxiosSecure();

  const handleBorrowBook = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const date = e.target.date.value;

    const borrowed_date = e.target.borrowed_date.value;

    const borrowedInfo = {
      user_email: email,
      book_id: book._id,
      return_date: date,
      borrowed_date: borrowed_date,
    };

    AxiosSecure.post(`/borrowed`, borrowedInfo, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        const data = response.data;
        setRemaining(remaining - 1);
        if (data.insertedId) {
          toast.success(`Book borrowed`);
        }
        const updatedInfo = {
          book_quantity: remaining - 1,
        };
        AxiosSecure.put(`/book/${book._id}`, updatedInfo, {
          headers: {
            "Content-Type": "application/json",
          },
        })

          .then(() => {})
          .catch((error) => {
            console.error("Error adding product:", error);
          });
      })
      .catch(() => {
        toast.error("Book already borrowed");
      });
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-2 my-12 py-12">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="rounded-md">
            <img
              src={book.book_image}
              alt="Book Cover"
              className="w-full h-72 object-contain rounded-md"
            />
          </div>
          <div className="flex flex-col h-full gap-1 mt-2 flex-1">
            <h1 className="font-medium text-xl dark:text-white">
              {book.book_name}
            </h1>
            <hr />
            <div className="flex justify-between items-center">
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-2">
                  <span className="border-none dark:bg-primaryDark badge text-white text-xs bg-primaryLight font-medium">
                    {book.book_author}
                  </span>
                  <span className="border-none dark:bg-primaryDark badge text-white text-xs bg-primaryLight font-medium">
                    {book.book_category}
                  </span>
                </div>
                <div className="ml-2">
                  <Rating
                    style={{ maxWidth: 120 }}
                    value={book.book_rating}
                    readOnly
                  />
                </div>
              </div>
              <h1 className="text-lg font-bold dark:text-white">
                Remaining: {remaining}
              </h1>
            </div>
            <hr />
            <p className="h-40 overflow-y-hidden relative dark:text-white mb-8">
              {book.book_description}
              <div className="h-24 absolute bottom-0 w-full bg-gradient-to-t from-white to-transparent dark:from-[#111827]"></div>
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Link to={`/read/${book._id}`} className="w-full">
                <button className="btn dark:text-white dark:bg-primaryDark bg-transparent text-primaryLight border-none hover:text-white hover:bg-primaryLight mt-3 w-full">
                  Read<BsFillBookFill></BsFillBookFill>
                </button>
              </Link>
              <button
                disabled={remaining === 0 ? "disabled" : ""}
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
                className="btn bg-transparent disabled:dark:bg-gray-800 disabled:dark:text-gray-300 dark:text-white dark:bg-primaryDark text-primaryLight border-none hover:text-white hover:bg-primaryLight mt-3 w-full"
              >
                Borrow
                <BiSolidBookmarkPlus className="text-xl"></BiSolidBookmarkPlus>
              </button>
              {/* MODAL */}
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box dark:bg-gray-800">
                  <h1 className="flex justify-between items-center text-xl font-bold dark:text-white">
                    Borrow Book
                    <form method="dialog">
                      <button className="btn border-none dark:bg-primaryDark text-white bg-primaryLight hover:bg-primaryLight">
                        <AiOutlineClose></AiOutlineClose>
                      </button>
                    </form>
                  </h1>
                  <BorrowBook
                    user={user}
                    handleBorrowBook={handleBorrowBook}
                  ></BorrowBook>
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
