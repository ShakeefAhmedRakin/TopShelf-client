import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_apiURL}/categories`).then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-12 px-2">
      <hr className="mb-12" />
      <h1 className="text-center font-bold text-4xl mb-6 bg-secondary text-white py-4 rounded-lg shadowlg">
        Browse by Subject
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <>
              <Link to={`books/${category.category_name}`}>
                <div
                  key={category._id}
                  className="text-white bg-primaryLight p-3 rounded-md shadow-lg font-semibold hover:-translate-y-1 duration-300"
                >
                  <h1>{category.category_name}</h1>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
      <hr className="my-12" />
    </div>
  );
};

export default Categories;
