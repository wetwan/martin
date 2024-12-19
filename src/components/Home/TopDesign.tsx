import { useContext, useEffect, useState } from "react";
import { ProductItem, ShopContext } from "../context/ShopContext";
import Card from "./Card";

const TopDesign = () => {
  const { products } = useContext(ShopContext);

  const [topDesign, setTopDesign] = useState<ProductItem[]>([]);
  useEffect(() => {
    const topDesign = products.filter((item) => item.bestDesign);
    setTopDesign(topDesign.slice(1, 7));
  }, [products]);

  return (
    <section className="py-20 w-5/6 mx-auto">
      <div className=" mb-20 w-4/6 mx-auto text-center">
        <h2 className="md:text-[40px] text-[30px] font-bold text-secondary-200 uppercase">
          top nails
        </h2>
        <p className="text-primary-100 text-lg uppercase font-medium">
          here are the top selling designs from our salon
        </p>
      </div>
      <div className="grid rounded-sm gap-5 items-center justify-between md:grid-cols-2 lg:grid-cols-3">
        {topDesign.map((item, i) => (
          <Card
            key={i}
            id={item.id}
            image={item.images}
            shape={item.shapes}
            type={item.types}
          />
        ))}
      </div>
    </section>
  );
};

export default TopDesign;
