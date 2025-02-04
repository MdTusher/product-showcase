import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start ">
          <a href="/">
            <img src={footerLogo} alt="logo" width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            numquam ab placeat natus dolores atque et ullam laudantium
            dignissimos laboriosam.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => {
              return (
                <div
                  key={icon.id}
                  className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                >
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((fLink) => (
            <div key={fLink.id}>
              <h4 className="text-white font-montserrat text-2xl leading-normal  font-medium mb-6">
                {fLink.title}
              </h4>
              <ul>
                {fLink.links.map((link) => (
                  <li
                    key={link.id}
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray"
                  >
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyright"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>copyright all right reserved</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Condition</p>
      </div>
    </footer>
  );
};

export default Footer;
