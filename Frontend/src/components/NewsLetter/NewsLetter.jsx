import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-10">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        Subscribe Now & Get up to 20% Off
      </h2>
      <p className="text-gray-600 max-w-lg mb-6">
        By subscribing to our newsletter, you’ll receive the latest updates and
        exclusive offers directly in your inbox.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row w-full max-w-4xl"
      >
        <div className="w-2/3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChangeHandler={handleEmailChange}
            required
          />
        </div>
        <div className="w-[25%]">
          <Button children="Subscribe" type="submit" buttonType="danger" />
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;
