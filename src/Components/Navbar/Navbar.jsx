import {
  Armchair,
  Check,
  Heart,
  Info,
  Menu,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log("ssdfd", cartItems);
  return (
    <div className="sticky top-0 z-50">
      {/* nabvar top  */}
      <div className="navbar_top flex items-center justify-center bg-[#272343] h-[45px] w-full ">
        <div className="lg:container flex justify-between items-center">
          <p className="flex items-center gap-2 text-sm font-inter font-normal text-white capitalize">
            <Check /> Free Delivery on all orders over $50
          </p>

          <div className="navbar_top_right flex items-center gap-6">
            <select
              defaultValue="Server location"
              className="bg-none h-[30px] w-[70px] text-sm font-inter font-normal capitalize text-white "
            >
              <option>Eng</option>
              <option>Nep</option>
            </select>

            <button>
              <Link className="text-sm text-white font-inter font-normal capitalize">
                Faqs
              </Link>
            </button>
            <button>
              <Link className="flex items-center text-sm text-white font-inter font-normal capitalize">
                <Info /> Need help
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* navbar middle  */}
      <div className="navbar_middle flex items-center justify-center bg-[#f0f2f3] w-full h-[84px] ">
        <div className="lg:container grid grid-cols-3 items-center">
          <div className="logo_wrapper">
            <Link
              to="/"
              className="text-3xl text-black font-inter font-medium capitalize flex items-center gap-2"
            >
              <Armchair size="2rem" color="#029fae" /> YOTO
            </Link>
          </div>

          <div className="search_box  gap-5">
            <form action="#" className="max-w-[443px] h-[44px] relative">
              <input
                type="text"
                placeholder="Search here..."
                className="max-w-[440px] w-full h-full bg-gray-300 rounded-lg  pl-4"
              />

              <button className="absolute to-50% right-3 translate-y-1/2 gap-4">
                <Search size="20px" color="#636270" />
              </button>
            </form>
          </div>

          {/* navbar middle right  */}
          <div className="navbar_middle_right flex items-center gap-5">
            <button className="btn capitalize">
              <ShoppingCart /> cart{" "}
              <div className="badge badge-sm bg-[#029fae]">
                {cartItems.length}
              </div>
            </button>
            <button className="btn capitalize">
              <Heart />
            </button>

            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1">
                <User />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>
                    <Link to="/login">Login</Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link to="/register">Register</Link>
                  </a>
                </li>
                {/* <li>
                  <a>
                    <Link>Logout</Link>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* navbar bottom  */}
      <div className="navbar_bottom flex items-center justify-center w-full h-[75px] bg-white border-b-[1px] border-[#e1e3e5]">
        <div className="lg:container flex items-center justify-between">
          <div className="navbar_bottom_left flex items-center gap-8">
            <div className="dropdown dropdown-start">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 flex items-center gap-5 capitalize"
              >
                {" "}
                <Menu /> All categories
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>Park Bench</a>
                </li>
                <li>
                  <a>Arm Chair</a>
                </li>
                <li>
                  <a>Wing Chair</a>
                </li>
                <li>
                  <a>Desk Chair</a>
                </li>
                <li>
                  <a>Wooden Chair</a>
                </li>
              </ul>
            </div>

            <nav className="flex items-center gap-8">
              <NavLink
                to="/"
                className=" hover:bg-gray-100 py-2 px-4 rounded text-sm text-[#636270] font-inter font-medium capitalize"
              >
                Home
              </NavLink>
              {/* <NavLink className=" hover:bg-gray-100 py-2 px-4 rounded text-sm text-[#636270] font-inter font-medium capitalize">
                Shop
              </NavLink> */}
              <a
                href="#products"
                className=" hover:bg-gray-100 py-2 px-4 rounded text-sm text-[#636270] font-inter font-medium capitalize"
              >
                Product
              </a>
              <a
                href="#recents"
                className=" hover:bg-gray-100 py-2 px-4 rounded  text-sm  text-[#636270] font-inter font-medium capitalize"
              >
                Recent Added
              </a>

              <a
                href="#about"
                className=" hover:bg-gray-100 py-2 px-4 rounded text-sm text-[#636270] font-inter font-medium capitalize"
              >
                About
              </a>
            </nav>
          </div>

          <div className="navbar_bottom_right">
            <p className="text-sm text-[#636270] font-inter font-normal capitalize">
              contact: <span className="text-[#272343]">+9779866663272</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
