import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login, email, setEmail, password, setPassword } =
    useContext(AuthContext);

  const handlesubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    login();
  };
  return (
    <section className="">
      <div className="flex items-center py-48 justify-center">
        <form
          onClick={handlesubmit}
          className=" px-5 py-16 rounded-md shadow-xl  border w-[350px]"
        >
          <h2 className="text-primary-300 text-lg uppercase font-bold mb-10">
            {" "}
            please login to add catalogue
          </h2>
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
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="password
          "
            />
          </div>
          <button className="w-full block mt-6 rounded-lg text-white text-xl uppercase mx-auto text-center px-5 py-6 bg-secondary-200">
            login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
