import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router";
import { contactInfo } from "../../assets";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    trigger,
    register,
    formState: { errors },
  } = useForm();

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
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
          contact
        </p>
      </div>
      <div className="w-full bg-slate-200 py-5">
        <div className=" gap-5 flex-col sm:flex-row flex items-center justify-between w-5/6 mx-auto my-8">
          {contactInfo.map((item, i) => (
            <div
              key={i}
              className="px-5 py-2 bg-white flex items-start gap-3 border shadow-sm sm:w-1/3 lg:h-20 sm:h-32 w-full md:flex-row flex-col"
            >
              <p className="text-gray-400 text-lg font-semibold capitalize">
                {item.label}
              </p>
              <p className="text-gray-700  text-lg font-medium capitalize">
                {item.passage}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-start justify-between gap-5 w-5/6 mx-auto shadow-lg p-5">
          <div className="w-1/2 p-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.4312041184253!2d4.261240474012831!3d8.159236491871374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10370daf2d14ff23%3A0xeacf0a78619bdb88!2sJolanis%20Guest%20House!5e0!3m2!1sen!2sng!4v1734556377491!5m2!1sen!2sng"
              width="600"
              aria-label="map"
              className="w-full border-none outline-none"
              height="400"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-1/2 p-5">
            <form
              action="https://formsubmit.co/df9cc99ea5a151f63050790051d30317"
              method="POST"
              target="blank"
              onSubmit={onSubmitForm}
            >
              <div className="mb-3 border-primary-300 border transition-all duration-300 focus-within:border-secondary-200">
                <input
                  type="text"
                  placeholder="name"
                  className="px-3 group w-full placeholder-gray-600  bg-transparent py-4 placeholder-shown:capitalize outline-none border-none text-black "
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                  })}
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This feild is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 charx."}
                </p>
              )}
              <div className="mb-3 border-primary-300 border transition-all duration-300 focus-within:border-secondary-200">
                <input
                  type="email"
                  placeholder="email"
                  className="px-3 group w-full placeholder-gray-600  bg-transparent py-4 placeholder-shown:capitalize outline-none border-none text-black "
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
              </div>{" "}
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
              <div className="mb-3 border-primary-300 border transition-all duration-300 focus-within:border-secondary-200">
                <input
                  type="text"
                  placeholder="subject"
                  className="px-3 group w-full placeholder-gray-600  bg-transparent py-4 placeholder-shown:capitalize outline-none border-none text-black "
                  {...register("subject", {
                    required: true,
                    maxLength: 100,
                  })}
                />
              </div>{" "}
              {errors.subject && (
                <p className="mt-1 text-primary-500">
                  {errors.subject.type === "required" &&
                    "This feild is required."}
                  {errors.subject.type === "maxLength" &&
                    "Max length is 100 charx."}
                </p>
              )}
              <div className="mb-3 border-primary-300 border transition-all duration-300 focus-within:border-secondary-200">
                <textarea
                  placeholder="your message"
                  className="max-h-[150px] min-h-[150px] h-full px-3 group w-full placeholder-gray-600  bg-transparent py-2 placeholder-shown:capitalize outline-none border-none text-black "
                  {...register("message", {
                    required: true,
                    maxLength: 2000,
                  })}
                />
              </div>{" "}
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}
              <button
                type="submit"
                className="border py-4 px-12 rounded-sm bg-yellow-700 text-white uppercase "
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
