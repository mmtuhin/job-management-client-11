import { FcGoogle } from "react-icons/fc";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="font-workSans w-full ">
      {/* Form Starts Here */}
      <div className="max-w-lg mx-auto">
        <form className="p-4 ">
          {/* <button className="hover:bg-slate-300 flex w-full justify-center rounded-md items-center gap-4 border border-base-300 py-2 px-6 drop-shadow-md">
            <FcGoogle></FcGoogle>Sign in with Google
          </button> */}
          <div className="flex items-center my-4">
            <hr className="w-full" />
            <p className="mx-4">or</p>
            <hr className="w-full" />
          </div>

          <input
            type="text"
            placeholder="Full Name"
            name="name"
            className="w-full py-2 px-6 rounded-md border border-base-900 mb-4"
          />
          <br />
          <input
            type="text"
            placeholder="Photo URL..."
            name="ProfilePhotoUrl"
            className="w-full py-2 px-6 rounded-md border border-base-900 mb-4"
          />
          <br />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            className="w-full py-2 px-6 rounded-md border border-base-900"
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="w-full py-2 px-6 rounded-md my-4 border border-base-900"
          />
          <br />
          <button
            type="submit"
            className="bg-[#171a53] hover:bg-[#454a9b] text-white flex w-full justify-center rounded-md items-center gap-4 border border-base-300 py-2 px-6 drop-shadow-md"
          >
            Submit<FaArrowRightLong></FaArrowRightLong>
          </button>
          <button className="text-sm mt-4 underline">
            <Link to='/login'>
              Have an account?{" "}
              <span className="font-bold text-[#171a53]">Login</span>
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
