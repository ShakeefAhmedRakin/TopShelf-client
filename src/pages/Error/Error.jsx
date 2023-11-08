import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const error = useRouteError();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <>
      <div className="px-2 h-screen flex items-center justify-center">
        <div className="container mx-auto my-8 border-[1px] border-black">
          <div className="bg-primaryLight dark:bg-primaryDark py-32 text-white space-y-4">
            <h1 className="font-black text-white text-9xl text-center">
              {error.status}
            </h1>
            <p className="text-center text-2xl font-bold tracking-tight text-gray-50 sm:text-4xl">
              Uh-oh!
            </p>

            <p className="text-center mt-4 text-gray-50">
              {`We can't find that page.`}
            </p>
            <div className="flex justify-center">
              <button
                onClick={handleGoBack}
                className="btn hover:scale-[1.02] bg-white hover:bg-white hover:border-none border-black border-none rounded-none font-bold text-black"
              >
                Go Back Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
