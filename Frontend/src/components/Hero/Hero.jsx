import { assets } from "../../assets/assets/frontend_assets/assets";
const Hero = () => {
  return (
    <>
      <div className="w-full border border-gray-400 flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
          <div className="text-[#414141]">
            <div className="flex items-center gap-2">
              <p className="w-8 md:w-10 h-[2px] bg-[#414141]"></p>
              <p className="font-medium text-sm md:text-base">
                OUR BESTSELLERS
              </p>
            </div>
            <h2 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
              Latest Arrivals
            </h2>
            <div className="flex items-center gap-2">
              <p className="font-medium text-sm md:text-base">SHOP NOW</p>
              <p className="w-8 md:w-10 h-[2px] bg-[#414141]"></p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <img
            src={assets.hero_img}
            alt="Hero section Image of a Girl Model"
            className="w-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
