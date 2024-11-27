const ScholasticaMoodle = () => {
  return (
    <div className="flex flex-col items-start gap-2 opacity-80">
      <h1 className="font-bricolagrotesque text-[16px] font-bold text-gray-900 lg:text-[13px]">
        Moodle 4.3 and later.
      </h1>
      <h2 className="font-bricolagrotesque text-[34px] font-bold leading-[48px] md:leading-[72px] text-gray-900 lg:text-[51px] md:text-[40px] sm:text-[34px]">
        Scholastica Moodle
        <br />
        Premium Theme
      </h2>
      <div className="flex flex-col items-start gap-3.5">
        <p className="text-[24px] font-normal leading-9 text-gray-900 lg:text-[20px]">
          The Scholastica is dedicated only for Moodle 4.3 and
          <br />
          later.
        </p>
        <p className="text-[12px] font-normal leading-[18px] text-gray-900">
          Need help with theme customization?
          <br />
          or you want to report a bug?
        </p>
      </div>
      <button className="flex min-w-[172px] py-5 items-center justify-center rounded-[24px] bg-[#d3ff24] px-7 text-center text-[12px] hover:bg-lime-400 transition-all duration-200">
        Get this theme!
      </button>
    </div>
  );
};

export default ScholasticaMoodle;
