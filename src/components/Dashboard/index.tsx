import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import { AuthContext } from "../context/AuthContext";

const DashBoard = () => {
  const { products, DeleteProdcut } = useContext(ShopContext);
  const { userDetails } = useContext(AuthContext);
  const itemsPerPage = 25;
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const currentProduct = products.slice(firstIndex, lastIndex);

  const totalPage = Math.ceil(products.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const greeting = () => {
    const hours = new Date().getHours();

    if (hours < 12) {
      return <span>Good morning!</span>;
    } else if (hours < 18) {
      return <span>Good afternoon!</span>;
    } else {
      return <span>Good evening!</span>;
    }
  };

  return (
    <section className=" ">
      <div className="bg-slide-1  bg-no-repeat bg-center bg-cover">
        <div className="md:w-5/6 w-full mx-auto py-20 md:px-32 px-20">
          <h1 className="text-4xl text-white  uppercase font-bold mt-10 ">
            welcome {userDetails?.firstName}
          </h1>
          <span className="text-primary-300 text-2xl font-semibold mt-5">
            {" "}
            {new Date().getHours()}hours :{new Date().getMinutes()}mint:{" "}
            {new Date().getSeconds()}sec
          </span>
          <p className=" text-gray-800 text-3xl font-semibold mt-5">
            {greeting()}
          </p>
        </div>
      </div>
      <div className="w-5/6 gap-5 mt-12  mx-auto grid lg:grid-cols-5  sm:grid-cols-3 grid-cols-2">
        {currentProduct.map((item) => (
          <div
            className="relative md:w-[200px] w-[150px] h-[150px] md:h-[200px] mb-4"
            key={item.id}
          >
            <img src={item.images[0]} alt="" className="w-full h-full" />
            <div
              onClick={() => {
                DeleteProdcut(item.id);
              }}
              className="group w-10 rounded-full p bg-white shadow-xl h-10 border flex items-center justify-center absolute bottom-4 right-4"
            >
              <TrashIcon className="w-5 h-5 group-hover:text-red-600 text-yellow-400" />
            </div>
          </div>
        ))}
      </div>
      {currentProduct.length > itemsPerPage && (
        <div className="flex items-center mt-5 gap-5 justify-center py-5">
          <button
            className="border border-black p-3"
            onClick={() => {
              prevPage();
              scrollTo(0, 0);
            }}
            disabled={currentPage === 1}
          >
            <ChevronLeftIcon className="text-yellow-600 rounded-md w-10" />
          </button>

          <div className="flex items-center mx-4">
            <span>{currentPage}</span> / <span>{totalPage}</span>
          </div>

          <button
            className="border border-black p-3"
            onClick={() => {
              nextPage();
              scrollTo(0, 0);
            }}
            disabled={currentPage === totalPage}
          >
            <ChevronRightIcon className="text-yellow-600 rounded-md w-10" />
          </button>
        </div>
      )}
    </section>
  );
};

export default DashBoard;
