import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import axios from "axios";

const UpdateBook = () => {
  const current_data = useLoaderData().data;
  const [rating, setRating] = useState(current_data.book_rating);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_apiURL}/categories`).then((response) => {
      setCategories(response.data);
    });
  }, []);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const book_image = form.image.value;
    const book_name = form.name.value;
    const book_category = form.category.value;
    const book_author = form.author.value;
    const book_rating = rating;

    const updatedBook = {
      book_name,
      book_image,
      book_category,
      book_author,
      book_rating,
    };

    const apiUrl = import.meta.env.VITE_apiURL;
    const endpoint = `/book-update/${current_data._id}`;

    axios
      .put(`${apiUrl}${endpoint}`, updatedBook, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          console.log(response.data);
          toast.success("Book has been updated successfully.");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  return (
    <>
      <div className="container mx-auto px-4 py-15">
        <div className="max-w-5xl mx-auto">
          <div className="px-8 py-4 bg-white dark:bg-gray-800">
            <form
              onSubmit={handleUpdateProduct}
              className="text-black dark:text-white"
            >
              <h1 className="py-5 text-center my-5 font-bold text-2xl md:text-4xl text-black">
                Add Book
              </h1>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-black dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-900 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:text-white"
                  placeholder="Name"
                  required
                  defaultValue={current_data.book_name}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-black dark:text-white">
                    Choose Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-900 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:text-white"
                  >
                    {categories.map((category) => {
                      if (
                        category.category_name === current_data.book_category
                      ) {
                        return (
                          <option
                            key={category._id}
                            value={category.category_name}
                            selected
                          >
                            {category.category_name}
                          </option>
                        );
                      } else {
                        return (
                          <option
                            key={category._id}
                            value={category.category_name}
                          >
                            {category.category_name}
                          </option>
                        );
                      }
                    })}
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-black dark:text-white">
                    Author
                  </label>
                  <input
                    type="text"
                    name="author"
                    className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-900 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:text-white"
                    placeholder="Author Name"
                    required
                    defaultValue={current_data.book_author}
                  />
                </div>

                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-black dark:text-white">
                    Image Link
                  </label>
                  <input
                    type="text"
                    name="image"
                    className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-900 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:text-white"
                    placeholder="Image Link"
                    required
                    defaultValue={current_data.book_image}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-start mb-6">
                <div className="flex flex-col justify-between">
                  <label className="block text-sm font-medium text-black dark:text-white">
                    Rating
                  </label>

                  <div className="flex items-center h-full">
                    <Rating
                      style={{ maxWidth: 180, minWidth: 110 }}
                      value={rating}
                      onChange={setRating}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="btn border-none bg-transparent hover:bg-primaryLight dark:bg-primaryDark dark:hover:bg-primaryDark font-bold text-primaryLight hover:text-white w-full"
                >
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateBook;
