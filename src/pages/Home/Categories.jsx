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
  console.log(categories);

  return (
    <div className="max-w-7xl mx-auto px-2 my-12">
      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <>
              <div className="text-white bg-primaryLight p-3 rounded-md shadow-lg font-semibold hover:-translate-y-1 duration-300">
                <Link to={`/${category.category_name}`}>
                  <h1>{category.category_name}</h1>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;