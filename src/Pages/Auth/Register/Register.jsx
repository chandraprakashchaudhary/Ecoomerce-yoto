import { MoveRight } from "lucide-react";
import { Link, useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();

  const submitHandle = () => {
    navigate("/");
  };

  return (
    <div className="lg:container mx-auto p-[80px]">
      <div className="max-w-[648px] w-full min-h-[382px] p-[31px] mx-auto flex items-center justify-center flex-col rounded-lg border-[1px] border-[#9a9caa]">
        <h3 className="text-3xl text-[#b8b7bc] font-semibold font-inter mb-5 capitalize">
          Register{" "}
        </h3>

        <form
          action="#"
          onSubmit={submitHandle}
          className="flex flex-col items-center w-full space-y-4"
        >
          <input
            type="text"
            placeholder="Enter Name"
            className="w-full h-[50px] bg-[#5b7481] rounded-lg pl-3.5"
          />
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full h-[50px] bg-[#5b7481] rounded-lg pl-3.5"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full h-[50px] bg-[#5b7481] rounded-lg pl-3.5"
          />
          <button
            type="submit"
            className="w-full h-[50px] bg-[#007580] rounded-lg pl-3.5 text-base text-white font-semibold font-inter capitalize flex items-center justify-center cursor-pointer gap-2.5"
          >
            Register <MoveRight />
          </button>
        </form>
        <p className="text-base text-[#a7a7ab] font-normal font-inter flex items-center justify-center gap-2.5 mt-4">
          Don't have account{" "}
          <Link to={"/login"} className="text-[#007580]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
