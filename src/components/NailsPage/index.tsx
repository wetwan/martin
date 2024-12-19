import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { ShopContext } from "../context/ShopContext";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { ProdcutItem } from "../../types/type";

import TopDesign from "../Home/TopDesign";

const ProdcutPage = () => {
  const { id } = useParams();
  const { products } = useContext(ShopContext);

  const [productData, setProductData] = useState<ProdcutItem | null>(null); // Set to null initially
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    const foundProduct = products.find((item) => item.id === id);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.images[0]);
    }
  }, [id, products]);

  return productData ? (
    <section>
      {/* Header */}
      <div className="py-32 w-full px-20 flex items-center justify-center h-[40vh] bg-slide-3 bg-center bg-no-repeat bg-cover">
        <p className="flex justify-center flex-wrap p-2 capitalize text-white text-center w-full items-center   text-2xl">
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
            catalogue <ChevronRightIcon className="w-9 h-9 text-white" />
          </Link>
          <Link
            className="md:hover:text-secondary-100 hover:text-blue-800 flex"
            to={`/catalogue/${productData.category}`}
          >
            {productData.category}{" "}
            <ChevronRightIcon className="w-9 h-9 text-white" />
          </Link>
          {productData.name}
        </p>
      </div>

      {/* Product Display */}
      <div className="lg:w-5/6 w-full lg:h-[70vh] min-h-dvh h-dvh mb-20 mx-auto flex flex-col lg:flex-row items-start justify-between px-10 py-2  mt-10">
        <div className="flex items-center flex-col lg:flex-row justify-between gap-6 p-5 lg:w-1/2 w-full h-[90%]">
          {/* Image Thumbnails */}
          <div className="flex lg:w-[25%] w-full flex-wrap lg:flex-nowrap  lg:h-[95%] h-[40%] lg:flex-col items-center gap-2">
            {productData.images.map((pic, i) => (
              <div
                key={i}
                className="lg:h-1/4 h-[48%] lg:w-full w-[48%] mx-auto overflow-hidden"
              >
                <img
                  onClick={() => setImage(pic)}
                  src={pic}
                  className="w-full h-full cursor-pointer"
                  alt={`Thumbnail ${i}`}
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="lg:h-[97%] h-[59%] w-full">
            <img src={image} alt={productData.name} className="w-full h-full" />
          </div>
        </div>

        <div className=" p-5 lg:w-1/2 w-full h-[90%] mx-auto">
          <div className="py-5">
            <h3 className="uppercase  text-[20px] font-bold text-secondary-200">
              {productData.name}
            </h3>
            <h4 className=" text-gray-400 capitalize text-[15px] mt-6">
              category:{" "}
              <span className=" text-primary-300"> {productData.category}</span>
            </h4>
            <h4 className=" text-gray-400 capitalize text-[15px] mt-4">
              {" "}
              shape:
              <span className=" text-primary-300">{productData.shapes}</span>
            </h4>
            <div className=" flex items-center my-5">
              <h4 className=" text-gray-400 capitalize text-[15px]"> color :</h4>
              <div className=" flex items-center flex-wrap gap-3 px-4 ">
                {productData.colors.map((color) => (
                  <span className="capitalize rounded-sm shadow  bg-primary-300 text-white px-4 py-2" key={color}> {color}</span>
                ))}
              </div>
            </div>
            <div className=" mt-5  px-3 py-3">
                <a
              href="https://www.instagram.com/amat_beauty_world_"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 bg-secondary-100 py-3 mt-3 text-white capitalize"
            >
              {" "}
              contact me
            </a>
            </div>
          
          </div>
        </div>
      </div>
      <TopDesign />
     
    </section>
  ) : (
    <>

    </>
  );
};

export default ProdcutPage;
