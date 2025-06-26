import { Armchair, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer>
      <div className="footer_top mx-h-[343px] w-full border-t border-b border-[#e1e3e5] pt-[80px] pb-[60px]">
        <div className="lg:container mx-auto">
          <div className="grid grid-cols-4">
            <div>
              {/* logo wrapper  */}
              <div className="logo_wrapper mb-7">
                <Link
                  to="/"
                  className="text-3xl text-black font-inter font-medium capitalize flex items-center gap-2"
                >
                  <Armchair size="2rem" color="#029fae" /> YOTO
                </Link>
              </div>

              <p className="text-base text-[#535355] font-inter font-normal mb-4 max-w-[350px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus repellat vero nulla! Quibusdam, reiciendis maiores
                fugiat atque aliquam molestiae vero?
              </p>

              <div className="flex items-center gap-x-4">
                <a href="https://www.facebook.com" target="_blank">
                  <span className="socialLink">
                    <Facebook />
                  </span>
                </a>
                <a href="https://www.Instagram.com" target="_blank">
                  <span className="socialLink">
                    <Instagram />
                  </span>
                </a>
                <a href="https://www.Twitter.com" target="_blank">
                  <span className="socialLink">
                    <Twitter />
                  </span>
                </a>
                <a href="https://www.youtube.com" target="_blank">
                  <span className="socialLink">
                    <Youtube />
                  </span>
                </a>
              </div>
            </div>

            <div className="footer_wrapper">
              <h3 className="text-xl text-[#9a9caa] font-inter font-medium uppercase">
                category
              </h3>
              <ul className="space-y-2 mt-4">
                <li>
                  <Link className="text-base text-[#535355] font-inter font-normal capitalize">
                    sofa
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#535355] font-inter font-normal capitalize">
                    armchair
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#535355] font-inter font-normal capitalize">
                    wing chair
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#535355] font-inter font-normal capitalize">
                    desk chair
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#535355] font-inter font-normal capitalize">
                    wooden chair
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#535355] font-inter font-normal capitalize">
                    park bench
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer_wrapper">
              <h3 className="text-xl text-[#9a9caa] font-inter font-medium uppercase">
                Support
              </h3>
              <ul className="space-y-2 mt-4">
                <li>
                  <Link className="text-base text-[#535355] font-inter font-normal capitalize">
                    Help & support
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#535355] font-inter font-normal capitalize">
                    Tearms & condition
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#535355] font-inter font-normal capitalize">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#535355] font-inter font-normal capitalize">
                    Help
                  </Link>
                </li>
              </ul>
            </div>

            <div className="newsletter">
              <h3 className="text-xl text-[#9a9caa] font-inter font-medium uppercase">
                Newsletter
              </h3>
              <form
                action="#"
                className="max-w-[424px] w-full flex items-center gap-2"
              >
                <input
                  type="email"
                  placeholder="Your Email.."
                  className="max-w-[285px] w-full h-[46px] border-[#e1e3e5] border-[1px] rounded-lg pl-2"
                />
                <button
                  type="submit"
                  className="text-base text-white font-semibold capitalize w-[127px] h-[46px] bg-[#007580] rounded-lg cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_bottom w-full h-[75px] flex items-center justify-center ">
        <div className="lg:container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-base text-[#9a9caa] font-normal font-inter">
                @ 2025 UNC- Designed & Develop{" "}
                <span className="text-[#6752f5]">Chandraprakashchaudhary</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
