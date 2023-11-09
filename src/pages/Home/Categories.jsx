import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const AxiosSecure = useAxiosSecure();

  useEffect(() => {
    setLoading(true);
    AxiosSecure.get(`/categories`).then((response) => {
      setCategories(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-12 px-2">
      <hr className="mb-12" />
      <h1 className="text-center font-bold text-4xl mb-6 bg-secondary dark:bg-secondary dark:bg-opacity-70 text-white py-4 rounded-lg shadowlg">
        Browse by Subject
      </h1>
      <div className="flex justify-center items-center">
        {loading ? (
          <>
            <div className="flex items-center justify-center py-36">
              <span className="loading loading-bars loading-xl dark:text-white"></span>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link to={`books/${category.category_name}`} key={category._id}>
                <div className="text-white bg-primaryLight dark:bg-primaryDark p-3 rounded-md shadow-lg font-semibold hover:-translate-y-1 duration-300">
                  <img
                    src={category.category_image}
                    className="rounded-lg aspect-square object-cover w-48"
                  />
                  <h1 className="text-center mt-2 font-semibold">
                    {category.category_name}
                  </h1>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <hr className="my-12" />
    </div>
  );
};

export default Categories;
