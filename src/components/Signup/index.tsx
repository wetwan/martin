
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useState } from "react";
// import { auth, db } from "../firebase/firebase";
// import { setDoc, doc } from "firebase/firestore";
// import { toast } from "react-toastify";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const SignUP = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    setEmail,
    email,
    password,
    setPassword,
    SignUP,
  } = useContext(AuthContext);
  // const [firstName, setFirstName] = useState<string>("");
  // const [lastName, setLastName] = useState<string>("");
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");

  const handlesubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    SignUP();
  };
  return (
    <section className=" ">
      <div className="flex items-center py-48 justify-center">
        <form
          onClick={handlesubmit}
          className=" px-5 py-10 rounded-md shadow-xl  border w-[450px]"
        >
          <h2 className="text-primary-300 text-lg uppercase font-bold mb-10">
            {" "}
            add user to add catalogue
          </h2>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="first-name" className="capitalize ">
              {" "}
              first-name
            </label>
            <input
              type="text"
              name=""
              id="first-name"
              className="border placeholder-shown:capitalize border-primary-300 px-3 py-4 rounded-md outline-none"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="first-name"
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="last-name" className="capitalize ">
              {" "}
              last-name
            </label>
            <input
              type="text"
              name=""
              id="last-name"
              className="border placeholder-shown:capitalize border-primary-300 px-3 py-4 rounded-md outline-none"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="last-name"
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="email" className="capitalize ">
              {" "}
              email
            </label>
            <input
              type="email"
              name=""
              id="email"
              className="border placeholder-shown:capitalize border-primary-300 px-3 py-4 rounded-md outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="capitalize " htmlFor="password">
              {" "}
              password
            </label>
            <input
              type="password"
              name=""
              id="password"
              className="border placeholder-shown:capitalize border-primary-300 px-3 py-4 rounded-md outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password
            "
            />
          </div>
          <button className="w-full block mt-6 rounded-lg text-white text-xl uppercase mx-auto text-center px-5 py-6 bg-secondary-200">
            add user
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignUP;
