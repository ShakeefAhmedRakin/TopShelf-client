import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BorrowedCard from "../../components/BorrowedCard";
import { toast } from "sonner";
import { BiBookReader } from "react-icons/bi";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const BorrowedBooks = () => {
  const [borrowed, setBorrowed] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const AxiosSecure = useAxiosSecure();

  useEffect(() => {
    setLoading(true);
    AxiosSecure.get(`/borrowed/${user.email}`)
      .then((response) => {
        if (response.status === 200) {
          setBorrowed(response.data);
          setLoading(false);
        } else {
          // Handle errors here if needed
          console.error("Request failed with status code: ", response.status);
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, [user.email, AxiosSecure]);

  const handleReturn = (idToBeDeleted, book_id) => {
    AxiosSecure.delete(`/borrowed/${idToBeDeleted}`)
      .then((response) => {
        if (response.data.deletedCount > 0) {
          toast.success("Returned Book Successfully");

          const remaining = borrowed.filter(
            (book) => book.borrowed_id !== idToBeDeleted
          );
          setBorrowed(remaining);

          // UPDATING QUANTITY
          AxiosSecure.get(`/book/${book_id}`).then((res) => {
            const bookInfo = res.data;
            const updatedInfo = {
              book_quantity: bookInfo.book_quantity + 1,
            };

            AxiosSecure.put(`/book/${bookInfo._id}`, updatedInfo, {
              headers: {
                "Content-Type": "application/json",
              },
            });
          });
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  return (
    <>
      {loading ? (
        <>
          <div className="flex items-center justify-center h-screen">
            <span className="loading loading-bars loading-xl dark:text-white"></span>
          </div>
        </>
      ) : borrowed.length > 0 ? (
        <div className="max-w-7xl mx-auto px-2 my-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {borrowed.map((book) => (
            <BorrowedCard
              key={book.borrowed_id}
              book={book}
              handleReturn={handleReturn}
            ></BorrowedCard>
          ))}
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-2 my-12 h-96 gap-4 flex flex-col items-center justify-center">
          <BiBookReader className="text-primaryLight dark:text-primaryDark text-4xl"></BiBookReader>
          <h1 className="text-center font-bold text-xl dark:text-white">
            No Books Borrowed Yet
          </h1>
        </div>
      )}
    </>
  );
};

export default BorrowedBooks;
