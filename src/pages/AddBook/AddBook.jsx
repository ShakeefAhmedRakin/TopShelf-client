import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import axios from "axios";

const AddBook = () => {
  const [categories, setCategories] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_apiURL}/categories`).then((response) => {
      setCategories(response.data);
    });
  }, []);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const book_image = form.image.value;
    const book_name = form.name.value;
    const book_category = form.category.value;
    const book_author = form.author.value;
    const book_quantity = parseInt(form.quantity.value);
    const book_description = form.description.value;
    const book_rating = rating;

    const newBook = {
      book_name,
      book_image,
      book_category,
      book_author,
      book_quantity,
      book_rating,
      book_description,
    };

    axios
      .post(`${import.meta.env.VITE_apiURL}/books`, newBook, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        const data = response.data;
        if (data.insertedId) {
          toast.success(`Book has been added successfully`);
        }
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  return (
    <>
      <div className="container mx-auto px-4 py-15">
        <div className="max-w-5xl mx-auto">
          <div className="px-8 py-4 bg-white dark:bg-gray-800 my-5 rounded-lg">
            <form
              onSubmit={handleAddProduct}
              className="text-black dark:text-white"
            >
              <h1 className="py-5 text-center dark:text-white my-5 font-bold text-2xl md:text-4xl text-black">
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
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4">
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-black dark:text-white">
                    Choose Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-900 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:text-white"
                  >
                    {categories.map((category) => (
                      <option
                        key={category._id}
                        value={category.category_name}
                        className="text-Inter"
                      >
                        {category.category_name}
                      </option>
                    ))}
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
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-black dark:text-white">
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-900 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:text-white"
                    placeholder="Quantity Available"
                    required
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
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-start mb-6">
                <div className="flex-1 w-full">
                  <label className="block mb-2 text-sm font-medium text-black dark:text-white">
                    Short description
                  </label>
                  <textarea
                    type="text"
                    name="description"
                    className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-900 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:text-white"
                    placeholder="Short description"
                    required
                    rows={10}
                  />
                </div>
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
                  className="btn border-none dark:text-white bg-transparent hover:bg-primaryLight dark:bg-primaryDark dark:hover:bg-primaryDark font-bold text-primaryLight hover:text-white w-full"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBook;
