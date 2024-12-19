/* eslint-disable react-refresh/only-export-components */

import React, { createContext, useState, useEffect, ReactElement } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";

// Define ProductItem type
export type ProductItem = {
  id: string;
  name: string;
  colors: string[];
  images: string[];
  types: string;
  shapes: string;
  category: string;
  bestDesign?: boolean;
  newDesign?: boolean;
  createdAt: number;
};

// UseProduct type
export type UseProduct = {
  products: ProductItem[];
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  submitProduct: (e: React.FormEvent<HTMLFormElement>) => void;
  colorInput: string;
  setColorInput: React.Dispatch<React.SetStateAction<string>>;
  colors: string[];
  setColors: React.Dispatch<React.SetStateAction<string[]>>;
  imageUrls: string[];
  setImageUrls: React.Dispatch<React.SetStateAction<string[]>>;
  types: string;
  setTypes: React.Dispatch<React.SetStateAction<string>>;
  shapes: string;
  setShapes: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  bestDesign: boolean;
  setBestDesign: React.Dispatch<React.SetStateAction<boolean>>;
  newDesign: boolean;
  setNewDesign: React.Dispatch<React.SetStateAction<boolean>>;
  EditProduct: (
    id: string,
    bestDesign: boolean,
    newDesign: boolean
  ) => Promise<boolean>;
  DeleteProdcut: (id: string) => Promise<void>;
  handleAddColor: () => void;
  handleColorInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemoveColor: (color: string) => void;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const initContext: UseProduct = {
  name: "",
  setName: () => {},
  products: [],
  submitProduct: () => {},
  colorInput: "",
  setColorInput: () => {},
  colors: [],
  setColors: () => {},
  imageUrls: [],
  setImageUrls: () => {},
  types: "gel",
  setTypes: () => {},
  shapes: "rounded",
  setShapes: () => {},
  category: "nails",
  setCategory: () => {},
  bestDesign: false,
  setBestDesign: () => {},
  newDesign: false,
  setNewDesign: () => {},
  EditProduct: () => Promise.resolve(false),
  DeleteProdcut: () => Promise.resolve(),
  handleAddColor: () => {},
  handleColorInputChange: () => {},
  handleRemoveColor: () => {},
  handleImageChange: () => {},
};

export const ShopContext = createContext<UseProduct>(initContext);

const ShopContextProvider = ({
  children,
}: {
  children?: ReactElement | ReactElement[];
}): ReactElement => {
  const [name, setName] = useState<string>("");
  const [colorInput, setColorInput] = useState<string>("");
  const [colors, setColors] = useState<string[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [types, setTypes] = useState<string>("");
  const [shapes, setShapes] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [bestDesign, setBestDesign] = useState<boolean>(false);
  const [newDesign, setNewDesign] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductItem[]>([]);

  const handleColorInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorInput(e.target.value);
  };

  const handleAddColor = () => {
    if (colorInput && !colors.includes(colorInput.toLowerCase())) {
      setColors((prevColors) => [...prevColors, colorInput.trim()]);
      setColorInput(""); // Clear the input field
    }
  };

  const handleRemoveColor = (color: string) => {
    setColors((prevColors) => prevColors.filter((c) => c !== color));
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const uploadPromises = Array.from(files).map(async (file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "martin");

      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dlu80k3sn/image/upload",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        return response.data.secure_url;
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Error uploading image.");
        return null;
      }
    });

    const imageUrls = await Promise.all(uploadPromises);
    setImageUrls(imageUrls.filter((url) => url !== null) as string[]);
  };

  const resetForm = () => {
    setName("");
    setColors([]);
    setImageUrls([]);
    setTypes("gel");
    setShapes("rounded");
    setCategory("nails");
    setBestDesign(false);
    setNewDesign(false);
  };

  const submitProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !category) {
      toast.error("Please fill in all required fields.");

      return;
    }

    if (imageUrls.length === 0) {
      toast.error("Please upload at least one image.");

      return;
    }

    try {
      await addDoc(collection(db, "products"), {
        name,
        colors,
        images: imageUrls,
        types,
        shapes,
        category,
        bestDesign,
        newDesign,
        createdAt: serverTimestamp(),
      });
      resetForm();
      toast.success("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Error adding product.");
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsList: ProductItem[] = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name,
          colors: data.colors || [],
          images: data.images || [],
          types: data.types,
          shapes: data.shapes,
          category: data.category || "nails",
          bestDesign: data.bestDesign || false,
          newDesign: data.newDesign || false,
          createdAt: data.createdAt?.seconds || 0,
        };
      });

      setProducts(
        productsList.sort(
          (a: ProductItem, b: ProductItem) => b.createdAt - a.createdAt
        )
      );
    };

    fetchProducts();
  }, [products]);

  const DeleteProdcut = async (id: string) => {
    const productDoc = doc(db, "products", id);
    await deleteDoc(productDoc);
  };

  const EditProduct = async (
    id: string,
    bestDesign: boolean,
    newDesign: boolean
  ) => {
    if (!id) {
      toast.error("Product ID is missing.");
      return false;
    }

    const productDoc = doc(db, "products", id);
    const updatedFields = { bestDesign, newDesign };

    try {
      await updateDoc(productDoc, updatedFields);
      toast.success("Product updated successfully!");
      return true;
    } catch (error) {
      console.error("Error updating product:", error);
      navigate("/dashboard");
      toast.error("Error updating product.");
      return false;
    }
  };

  const navigate = useNavigate();

  const value = {
    products,
    EditProduct,
    DeleteProdcut,
    submitProduct,
    handleAddColor,
    handleColorInputChange,
    handleRemoveColor,
    handleImageChange,
    name,
    setName,
    colorInput,
    setColorInput,
    colors,
    setColors,
    imageUrls,
    setImageUrls,
    types,
    setTypes,
    shapes,
    setShapes,
    category,
    setCategory,
    bestDesign,
    setBestDesign,
    newDesign,
    setNewDesign,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
