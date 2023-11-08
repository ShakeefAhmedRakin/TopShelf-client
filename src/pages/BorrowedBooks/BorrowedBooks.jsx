import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BorrowedCard from "../../components/BorrowedCard";
import { toast } from "sonner";
import axios from "axios";

const BorrowedBooks = () => {
  const [borrowed, setBorrowed] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_apiURL}/borrowed/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBorrowed(data);
      });
  }, [user.email]);

  const handleReturn = (idToBeDeleted, book_id) => {
    fetch(`${import.meta.env.VITE_apiURL}/borrowed/${idToBeDeleted}`, {
      method: "DELETE",
    })
      .then((result) => result.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Returned Book Successfully");

          const remaining = borrowed.filter(
            (book) => book.borrowed_id !== idToBeDeleted
          );
          setBorrowed(remaining);
          // UPDATING QUANTITY
          axios
            .get(`${import.meta.env.VITE_apiURL}/book/${book_id}`)
            .then((res) => {
              const bookInfo = res.data;
              const updatedInfo = {
                book_quantity: bookInfo.book_quantity + 1,
              };
              axios.put(
                `${import.meta.env.VITE_apiURL}/book/${bookInfo._id}`,
                updatedInfo,
                {
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );
            });
        }
      });
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-2 my-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {borrowed.map((book) => (
          <BorrowedCard
            key={book.borrowed_id}
            book={book}
            handleReturn={handleReturn}
          ></BorrowedCard>
        ))}
      </div>
    </>
  );
};

export default BorrowedBooks;
