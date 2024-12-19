import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router";

const About = () => {
  return (
    <div>
      <div className="py-32 w-full px-20 flex items-center justify-center h-[40vh] bg-slide-1 bg-center bg-no-repeat bg-cover">
        <p className="flex justify-center flex-wrap p-2 capitalize text-white text-center w-full items-center   text-2xl">
          <Link
            className="md:hover:text-secondary-100 hover:text-blue-800 flex "
            to="/"
          >
            home <ChevronRightIcon className="w-9 text-white h-9" />
          </Link>
          about
        </p>
      </div>
    </div>
  );
};

export default About;
