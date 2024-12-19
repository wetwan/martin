// import { doc, updateDoc } from "firebase/firestore";
// import { toast } from "react-toastify";
// import { db } from "../firebase/firebase";

// import { useState } from "react";
// import { useNavigate } from "react-router";

// export type ProdcutItem = {
//   id: string;
//   name: string;
//   colors: string[];
//   images: string[];
//   types: string;
//   shapes: string;
//   category: string;
//   bestDesign?: boolean;
//   newDesign?: boolean;
// };
// const EditItem = ({ id }: ProdcutItem) => {
//   const [bestDesign, setBestDesign] = useState<boolean>(false);
//   const [newDesign, setNewDesign] = useState<boolean>(false);

//   const naviagte = useNavigate();

//   const EditProduct = async (
//     id: string,
//     bestDesign: boolean,
//     newDesign: boolean
//   ) => {
//     const productDoc = doc(db, "products", id);
//     const newField = { bestDesign, newDesign };

//     try {
//       await updateDoc(productDoc, newField);
//       toast.success("Product updated successfully!");
//     } catch (error) {
//       console.error("Error updating product:", error);
//       toast.error("Error updating product.");
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     EditProduct(id, bestDesign, newDesign);
//     toast.success("Edit sucessfull");

//     naviagte("/dashboard");
//   };

//   return (
//     <section>
//       <div className="flex items-center justify-center py-40 border px-28 border-black">
//         <form
//           className="flex flex-col items-start justify-center px-16 py-14 shadow-xl rounded-lg w-[500px]"
//           onSubmit={handleSubmit}
//         >
//           <h2 className="text-primary-300 text-lg uppercase font-bold mb-10">
//             edit Items in your Catalog
//           </h2>
//           <div className="flex gap-3 w-full mb-5">
//             <div className="flex items-center gap-2">
//               <label className="capitalize text-secondary-200">
//                 Best Design
//               </label>
//               <input
//                 type="checkbox"
//                 checked={bestDesign}
//                 onChange={() => setBestDesign((prev) => !prev)}
//               />
//             </div>

//             <div className="flex items-center gap-2">
//               <label className="capitalize text-secondary-200">
//                 New Design
//               </label>
//               <input
//                 type="checkbox"
//                 checked={newDesign}
//                 onChange={() => setNewDesign((prev) => !prev)}
//               />
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="bg-primary-300 text-white py-2 px-6 rounded-full mt-8"
//           >
//             edit Product
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default EditItem;

import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export type ProdcutItem = {
  id: string;
  name: string;
  colors: string[];
  images: string[];
  types: string;
  shapes: string;
  category: string;
  bestDesign?: boolean;
  newDesign?: boolean;
};

const EditItem = ({ id }: ProdcutItem) => {
  const { bestDesign, setBestDesign, newDesign, EditProduct, setNewDesign } =
    useContext(ShopContext);

  return (
    <section>
      <div className="flex items-center justify-center py-40 border px-28 border-black">
        <form
          className="flex flex-col items-start justify-center px-16 py-14 shadow-xl rounded-lg w-[500px]"
          onSubmit={() => EditProduct(id, bestDesign, newDesign)}
        >
          <h2 className="text-primary-300 text-lg uppercase font-bold mb-10">
            Edit Items in your Catalog
          </h2>
          <div className="flex gap-3 w-full mb-5">
            <div className="flex items-center gap-2">
              <label className="capitalize text-secondary-200">
                Best Design
              </label>
              <input
                type="checkbox"
                checked={bestDesign}
                onChange={() => setBestDesign((prev) => !prev)}
              />
            </div>

            <div className="flex items-center gap-2">
              <label className="capitalize text-secondary-200">
                New Design
              </label>
              <input
                type="checkbox"
                checked={newDesign}
                onChange={() => setNewDesign((prev) => !prev)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-primary-300 text-white py-2 px-6 rounded-full mt-8"
          >
            Edit Product
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditItem;
