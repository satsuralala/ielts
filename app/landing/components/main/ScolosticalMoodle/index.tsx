// Make sure this path is correct

const ScholasticaMoodle = () => {
  return (
    <div className="flex max-w-[500px] mx-auto flex-col items-start gap-2 ">
      <h1 className=" text-[16px] font-bold text-gray-900 lg:text-[13px] font-serif opacity-75">
        Moodle 4.3 and later.
      </h1>
      <h2 className="bricolage-grotesque text-[34px] leading-[48px]  text-gray-900 lg:text-5xl md:text-[37px] sm:text-[34px] opacity-75">
        Scholastica Moodle
        <br />
        Premium Theme
      </h2>
      <div className="flex flex-col items-start gap-3.5">
        <p className="text-[24px] font-normal leading-9 text-gray-900 lg:text-[20px] font-sans opacity-75">
          The Scholastica is dedicated only for Moodle 4.3 and later.
        </p>
        <p className="text-[12px] font-normal leading-[18px] text-gray-900 font-sans opacity-75">
          Need help with theme customization?
          <br />
          or you want to report a bug?
        </p>
      </div>
      <button className="flex lg:mt-16 md:mt-6 mt-4 text-[#0D0D0D] font-medium text-base font-sans py-[17px] items-center justify-center rounded-[24px] bg-[#D3FF24] px-7 text-center text-[12px] hover:bg-lime-400 transition-all duration-200">
        Get this theme!
      </button>
    </div>
  );
};

export default ScholasticaMoodle;
