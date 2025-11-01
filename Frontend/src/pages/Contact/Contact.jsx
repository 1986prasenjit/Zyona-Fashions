import { assets } from "../../assets/assets/frontend_assets/assets";
import { Button, NewsLetter, Title } from "../../components";
function Contact() {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title textOne={"CONTACT"} textTwo={"US"} />
      </div>
      <div className="flex flex-col md:flex-row gap-10 mb-28 my-10 justify-center">
        <img
          src={assets.contact_img}
          alt="COntact page Image"
          className="w-full md:max-w-[480px] "
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500 ">
            54709 willms Station <br />
            Suite 350, washington DC
          </p>
          <p>
            Tel: (033) 1235698745 <br />
            Email: admin@zyona.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Zyona
          </p>
          <p>Learn more about our teams and job openings</p>
          <Button children="Explore Jobs" buttonType="black" />
        </div>
      </div>
      <NewsLetter />
    </div>
  );
}

export default Contact;
