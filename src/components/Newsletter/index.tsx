const NewLetter = () => {
  return (
    <section className="bg-slide-2 w-full md:h-[40vh]  py-5 my-10 bg-no-repeat text-center bg-cover">
      <div className=" mb-10 w-4/6 mx-auto text-center">
        <h2 className="md:text-[40px] text-[30px] font-bold text-secondary-200 uppercase">
          our Newsletter
        </h2>
      </div>
      <div className="flex w-5/6  m-auto items-center justify-between flex-col lg:flex-row">
        <h3 className="text-primary-100 mb-10 lg:mb-0 md:text-[35px] text-left basis-2/5 uppercase font-extrabold">
          subscribe to get more news from us
        </h3>
        <form className="md:basis-3/6 w-full   flex items-center">
        <input type="email" placeholder="e-mail" className="placeholder-shown:capitalize border placeholder-secondary-200 text-lg  outline-none rounded-l-full px-5 py-7 h-full w-[80%]" />
        <button className="capitalize  border-none outline-none bg-secondary-200 md:w-[20%] w-[30%] text-white py-7 rounded-r-full text-xl font-semibold"> subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default NewLetter;
