// import { useState } from "react";
// import { db } from "../firebase/firebase"; // Firestore only
// import { collection, addDoc } from "firebase/firestore";
// import { toast } from "react-toastify";
// import axios from "axios";

import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const AddItem = () => {
  const {
    submitProduct,
    handleAddColor,
    handleColorInputChange,
    handleRemoveColor,
    handleImageChange,
    name,
    setName,
    colors,
    types,
    shapes,
    category,
    bestDesign,
    newDesign,
    setTypes,
    setShapes,
    setCategory,
    setBestDesign,
    setNewDesign,
    colorInput,
  } = useContext(ShopContext);

  return (
    <section className="flex items-center justify-center py-32">
      <form
        className="flex flex-col items-start justify-center px-16 py-14 shadow-xl rounded-lg w-[500px]"
        onSubmit={submitProduct}
      >
        <h2 className="text-primary-300 text-lg uppercase font-bold mb-10">
          Add Item to the Catalog
        </h2>

        {/* Product Name */}
        <div className="flex flex-col gap-3 mb-5 w-full">
          <label htmlFor="name" className="capitalize text-secondary-200">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter product name"
            className="w-full px-4 py-3 capitalize placeholder-primary-300 rounded-sm border outline-none focus:border-primary-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-3 mb-5 w-full">
          <label htmlFor="category" className="capitalize text-secondary-200">
            Product Category
          </label>
          <select
            name="category"
            id="category"
            className="w-full px-4 py-3 capitalize placeholder-primary-300 rounded-sm border outline-none focus:border-primary-300"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="nails">Nails</option>
            <option value="piercing">Piercing</option>
            <option value="make up">Make Up</option>
          </select>
        </div>
        {/* Category, Type, and Shape */}
        <div className="flex gap-3 w-full">
          <div className="flex flex-col w-full">
            <label htmlFor="types" className="capitalize text-secondary-200">
              Product Type
            </label>
            <input
              type="text"
              name="types"
              id="types"
              className="w-full px-4 py-3 capitalize placeholder-primary-300 rounded-sm border outline-none focus:border-primary-300"
              value={types}
              onChange={(e) => setTypes(e.target.value)}
            />
          </div>
          {/* Shape */}
          <div className="flex flex-col w-full mb-5">
            <label htmlFor="shapes" className="capitalize text-secondary-200">
              Product Shape
            </label>
            <input
              type="text"
              name="shapes"
              id="shapes"
              className="w-full px-4 py-3 capitalize placeholder-primary-300 rounded-sm border outline-none focus:border-primary-300"
              value={shapes}
              onChange={(e) => setShapes(e.target.value)}
            />
          </div>
        </div>

        {/* Product Colors */}
        <div className="flex flex-col gap-3 mb-5 w-full">
          <label htmlFor="color" className="capitalize text-secondary-200">
            Product Colors
          </label>
          <input
            type="text"
            id="colorText"
            value={colorInput}
            placeholder="Enter color name (e.g., Green, Blue)"
            className="w-full px-4 py-3 capitalize placeholder-primary-300 rounded-sm border outline-none focus:border-primary-300 mt-2"
            onChange={handleColorInputChange}
          />
          <button
            type="button"
            className="bg-primary-300 text-white py-2 px-4 rounded mt-3"
            onClick={handleAddColor}
          >
            Add Color
          </button>
        </div>

        {colors.length > 0 && (
          <div className="w-full mt-5">
            <h4 className="text-primary-300 text-sm mb-2">Selected Colors:</h4>
            <ul className="flex gap-3 flex-wrap">
              {colors.map((color, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 p-2 bg-gray-200 rounded"
                >
                  <span>{color}</span>
                  <button
                    type="button"
                    className="text-red-500"
                    onClick={() => handleRemoveColor(color)}
                  >
                    &times;
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex flex-col gap-3 mb-5 w-full">
          <label htmlFor="image" className="capitalize text-secondary-200">
            Product Images (URLs)
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            id="image"
            className="w-full px-4 py-3 capitalize placeholder-primary-300 rounded-sm border outline-none focus:border-primary-300"
            onChange={handleImageChange}
          />
        </div>

        <div className="flex gap-3 w-full mb-5">
          <div className="flex items-center gap-2">
            <label className="capitalize text-secondary-200">Best Design</label>
            <input
              type="checkbox"
              checked={bestDesign}
              onChange={() => setBestDesign((prev) => !prev)}
            />
          </div>

          <div className="flex items-center gap-2">
            <label className="capitalize text-secondary-200">New Design</label>
            <input
              type="checkbox"
              checked={newDesign}
              onChange={() => setNewDesign((prev) => !prev)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-primary-300 text-white py-2 px-6 rounded-md uppercase font-bold active:bg-secondary-200 mt-8 w-full text-center"
        >
          Add Product
        </button>
      </form>
    </section>
  );
};

export default AddItem;
