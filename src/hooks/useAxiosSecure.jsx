import axios from "axios";
import { useEffect } from "react";
const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("Error In Interceptor", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("LOG OUT");
          // logOut()
          //   .then(() => {
          //     toast.success("Unauthorized, logging out...");
          //     setTimeout(() => {
          //       navigate("/login");
          //     }, 2000);
          //   })
          //   .catch((error) => console.log(error));
        }
      }
    );
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;
