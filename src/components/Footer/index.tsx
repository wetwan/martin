import { Link, useNavigate } from "react-router";
import { adminNav, assets, navLink } from "../../assets";
import { User } from "@firebase/auth";

type Props = {
  user: User | null;
};

const Footer = ({user}:Props) => {
  const navigate = useNavigate();
  return (
    <footer className="w-full  py-10 ">
      <div className="w-5/6 mb-5 mx-auto grid lg:grid-cols-3 justify-between items-start">
        <div className="">
          <img
            src={assets.Logo}
            className="w-20"
            onClick={() => {
              navigate("/");
              scrollTo(0, 0);
            }}
            alt="logo"
          />
          <span
            className="text-secondary-200 text-lg"
            onClick={() => {
              navigate("/");
              scrollTo(0, 0);
            }}
          >
            {" "}
            Amatworld
          </span>
          <p className="text-gray-400 text-base">
            We are your one stop for all nail beauty
          </p>
        </div>
        <div className="">
          <h3 className="text-secondary-200 font-bold uppercase  mb-10">
            {" "}
            our store
          </h3>
          {user ? <div className=" flex flex-col capitalize text-primary-300 ">
            {adminNav.map((nav, i) => (
              <Link
                className="hover:text-secondary-100 py-2"
                key={i}
                to={nav.link}
              >
                {nav.label}
              </Link>
            ))}
          </div> : <div className=" flex flex-col capitalize text-primary-300 ">
            {navLink.map((nav, i) => (
              <Link
                className="hover:text-secondary-100 py-2"
                key={i}
                to={nav.link}
              >
                {nav.label}
              </Link>
            ))}
          </div>}
        </div>
        <div className="">
          <h3 className="text-secondary-200 font-bold uppercase  mb-10">
            {" "}
            our contact
          </h3>
          <div className=" flex flex-col capitalize text-primary-300 ">
            <Link
              className="hover:text-secondary-100 mb-2"
              target="blank"
              to="https://api.whatsapp.com/send/?phone=2347038176530&text&type=phone_number&app_absent=0"
            >
              0703817630
            </Link>
            <Link className="hover:text-secondary-100 mb-2" to="mailto:Lereygold@gmail.com"> Lereygold@gmail.com</Link>
            <p className="hover:text-secondary-100">
              Jolanis junction, beside teese grills, underG, ogbomosho
            </p>
          </div>
          <div className="flex gap-3 items-center mt-5">
            <div className="flex items-center justify-center bg-secondary-100 rounded-md w-14 h-14 border-black px-3">
              <img src={assets.Facebook} className="" alt="" />
            </div>
            <div className="flex items-center justify-center bg-secondary-100 rounded-md w-14 h-14 border-black px-3">
              <img src={assets.Twitter} className="" alt="" />
            </div>
            <Link
              target="blank"
              to="https://www.instagram.com/amat_beauty_world_?igsh=MTlhdjdrYWJlYXFubA%3D%3D&utm_source=qr"
              className="flex items-center justify-center bg-secondary-100 rounded-md w-14 h-14 border-black px-3"
            >
              <img src={assets.Instagram} className="" alt="" />
            </Link>
          </div>
        </div>
      </div>
      <hr className="bg-secondary-100 w-4/5 mx-auto" />
      <p className="text-center my-5 text-black uppercase">
        copyright of <span className="text-secondary-200"> amatworld</span>{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
