/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";

import { ShopContext } from "../context/ShopContext";
import Card from "../Home/Card";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { Link, useNavigate, useParams } from "react-router";
import { ProdcutItem } from "../../types/type";

const Catalogue = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { products } = useContext(ShopContext);
  const [filterProduct, setFilterProduct] = useState<ProdcutItem[]>([]);

  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const applyFilter = () => {
    if (category) {
      setFilterProduct(products.filter((item) => item.category === category)); // Filter by category
    } else {
      setFilterProduct(products);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [products, category]);

  const currentProduct = filterProduct.slice(firstIndex, lastIndex);

  const totalPage = Math.ceil(filterProduct.length / itemsPerPage);

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

  const uniqueCategories = [
    ...new Set(filterProduct.map((item) => item.category)),
  ];

  return (
    <section className="">
      <div className="py-32 w-full px-20 flex items-center justify-center h-[40vh] bg-slide-3 bg-center bg-no-repeat bg-cover">
        <p className="flex justify-center flex-wrap p-2 capitalize text-white text-center w-full items-center text-2xl">
          <Link
            className="md:hover:text-secondary-100 hover:text-blue-800 flex "
            to="/"
          >
            home <ChevronRightIcon className="w-9 text-white h-9" />
          </Link>
          <Link
            className="md:hover:text-secondary-100 hover:text-blue-800 flex"
            to="/catalogue"
          >
            catalogue
          </Link>
        </p>
      </div>
      <div className="py-5 w-5/6 mx-auto">
        <div className="">
          {/* Category filters */}
          <div className="flex items-center gap-4 px-4">
            {uniqueCategories.map((item, i) => (
              <span
                key={i}
                onClick={() =>
                  category === `${item}`
                    ? navigate("/catalogue")
                    : navigate(`/catalogue/${item}`)
                }
                className={`px-5 py-3 border text-primary-200 border-secondary-100 transition-all cursor-pointer ${
                  category === `${item}`
                    ? "border-none bg-secondary-100 text-primary-200"
                    : ""
                } rounded-sm capitalize`}
              >
                {item}
              </span>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid mt-10 rounded-sm gap-5 items-center justify-between md:grid-cols-2 lg:grid-cols-3">
            {currentProduct.map((item, i) => (
              <Card
                key={i}
                id={item.id}
                image={item.images}
                shape={item.shapes}
                type={item.types}
              />
            ))}
          </div>

          {filterProduct.length > itemsPerPage && (
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
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
