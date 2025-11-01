import { assets } from "../../assets/assets/frontend_assets/assets";

function Policies() {
  return (
    <>
      <div className="bg-white flex flex-col sm:flex-row  items-center justify-around text-center gap-12 sm:gap-2 px-4 py-20 text-xs sm:text-sm text-gray-700">
        <div>
          <img
            src={assets.exchange_icon}
            className="w-12 m-auto mb-5"
            alt="Easy exchange policy Logo"
          />
          <p className="font-semibold">Easy Exchange Policy</p>
          <p className="text-gray-400">We offer hassle free exchange policy</p>
        </div>
        <div>
          <img
            src={assets.quality_icon}
            className="w-12 m-auto mb-5"
            alt="Easy exchange policy Logo"
          />
          <p className="font-semibold">7 days Return Policy </p>
          <p className="text-gray-400">We offer 7 days free return policy</p>
        </div>
        <div>
          <img
            src={assets.support_img}
            className="w-12 m-auto mb-5"
            alt="Easy exchange policy Logo"
          />
          <p className="font-semibold">Best customer Support</p>
          <p className="text-gray-400">We provide 24/7 customer support</p>
        </div>
      </div>
      <div className="mt-28"></div>
    </>
  );
}

export default Policies;
