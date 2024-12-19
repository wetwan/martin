import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { ProdcutItem } from "../../types/type";
import Card from "./Card";
import { useNavigate } from "react-router";

const NewNails = () => {
  const { products } = useContext(ShopContext);
  
  const [newDesign, setNewDesign] = useState<ProdcutItem[]>([]);
  useEffect(() => {
    const newDesign = products.filter((item) => item.newDesign);
    setNewDesign(newDesign.slice(0, 6));
  }, [products]);
  const navigate = useNavigate();

  return (
    <section className="py-20 w-5/6 mx-auto mt-[100vh]">
      <div className=" mb-20 w-5/6 mx-auto text-center">
        <h2 className="md:text-[40px] text-[30px] font-bold text-secondary-200 uppercase">
          New nails
        </h2>
        <p className="text-primary-100 text-lg uppercase font-medium">
          {" "}
          We give to you new designs from our salon
        </p>
      </div>
      <div className="grid rounded-sm gap-5 items-center justify-between md:grid-cols-2 lg:grid-cols-3">
        {newDesign.map((item, i) => (
          <Card
            key={i}
            id={item.id}
            image={item.images}
            shape={item.shapes}
            type={item.types}
          />
        ))}
      </div>{" "}
      <div className="px-3 w-full mt-5 mx-auto py-3 flex items-center justify-center">
        <button
          onClick={() => {
            navigate("/catalogue");
            scrollTo(0, 0);
          }}
          className="px-10  py-3 rounded-md capitalize bg-secondary-100 text-white"
        >
          more
        </button>
      </div>
    </section>
  );
};

export default NewNails;
