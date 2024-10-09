const ForYou = () => {
  return (
    <section id="new-releases" className="w-[100%] bg-white rounded-[10px]">
      <div
        id="container"
        className="w-[95%] mx-auto pt-[40px] flex-grow flex flex-col gap-y-[2rem] py-[3.5rem] "
      >
        <div id="title" className="flex items-center justify-between">
          <h3 className="font-semibold text-[1.5rem]">For You</h3>
          <button className="bg-[#E6EFFE] text-[#1D62FF] py-[5px] px-[20px] rounded-[10px]">
            See More
          </button>
        </div>
        <div id="cards">
            <div id="card" className=""></div>
        </div>
      </div>
    </section>
  );
};

export default ForYou;
