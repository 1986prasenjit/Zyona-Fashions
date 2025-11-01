import { useContext, useState } from "react";
import { assets } from "../../assets/assets/frontend_assets/assets";
import { Button, CartTotal, Input, Title } from "../../components";
import { ShopContext } from "../../context/ShopContext";

function PlaceOrder() {
  const { navigate } = useContext(ShopContext);
  const [method, setMethod] = useState("cod");
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between pt-5 sm:pt-14 gap-5 min-h-[80vh]">
        {/*------LEFT SIDE------*/}
        <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
          <div className="text-xl sm:text-2xl my-3">
            <Title textOne={"DELIVERY"} textTwo={"INFORMATION"} />
          </div>
          <div className="flex gap-3">
            <Input type="text" placeholder="First Name" />
            <Input type="text" placeholder="Last Name" />
          </div>
          <Input type="email" placeholder="Email address" />
          <Input type="email" placeholder="Street" />
          <div className="flex gap-3">
            <Input type="text" placeholder="City" />
            <Input type="text" placeholder="State" />
          </div>
          <div className="flex gap-3">
            <Input type="number" placeholder="Zip Code" />
            <Input type="text" placeholder="Country" />
          </div>
          <Input type="number" placeholder="Phone" />
        </div>

        {/*------RIGHT SIDE------*/}
        <div className="mt-8">
          <div className="mt-8 min-w-80 px-2">
            <CartTotal />
          </div>
          <div className="mt-12">
            <Title textOne={"PAYMENT"} textTwo={"METHODS"} />

            <div className="flex flex-col gap-4 items-center sm:flex-row">
              {/*------razor pay payment------*/}
              <div
                onClick={() => setMethod("razorpay")}
                className="w-full sm:w-2/6 px-4 py-2 border border-gray-400 flex items-center gap-3"
              >
                <p
                  className={`min-w-3 h-3 border rounded-full ${
                    method === "razorpay" ? "bg-green-500" : ""
                  }`}
                ></p>
                <img
                  className="w-20"
                  src={assets.razorpay_logo}
                  alt="Razorpay Logo Image"
                />
              </div>

              {/*------stripe payment------*/}
              <div
                onClick={() => setMethod("stripe")}
                className=" w-full sm:w-2/6 px-4 py-2 border border-gray-400 flex items-center gap-3"
              >
                <p
                  className={`min-w-3 h-3 border rounded-full ${
                    method === "stripe" ? "bg-green-500" : ""
                  }`}
                ></p>
                <img
                  className="w-10"
                  src={assets.stripe_logo}
                  alt="Stripe Logo Image"
                />
              </div>

              {/*------cod payment------*/}
              <div
                onClick={() => setMethod("cod")}
                className="w-full sm:w-64 px-4 py-2 border border-gray-400 flex items-center gap-3"
              >
                <p
                  className={`min-w-3 h-3 border rounded-full ${
                    method === "cod" ? "bg-green-500" : ""
                  }`}
                ></p>
                <p className="uppercase text-gray-500 text-sm">
                  cash on delivery
                </p>
              </div>
            </div>

            <div className="w-full text-end mt-4">
              <Button
                children="PLACE ORDER"
                buttonType="black"
                onClickHandler={() => navigate("/orders")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlaceOrder;
