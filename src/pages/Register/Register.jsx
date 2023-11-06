import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUser, logOut } = useAuth();
  const [name, setName] = useState(null);
  const [photoLink, setPhotoLink] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [err, setErr] = useState();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    //Password Validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/;
    const passwordValid = passwordRegex.test(password);

    if (!passwordValid) {
      const errorMessage =
        "Password must be at least 6 characters long, contain at least one capital letter, and contain at least one special character.";

      setErr(errorMessage);
      toast.error(err);
      return;
    } else {
      console.log(email, password, name, photoLink);
      try {
        await createUser(email, password);
        await updateUser(name, photoLink);
        e.target.reset();
        await logOut();
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="font-workSans w-full ">
      {/* Form Starts Here */}
      <div className="max-w-lg mx-auto">
        <form className="p-4" onSubmit={handleRegister}>
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
            onBlur={(e) => setName(e.target.value)}
            required
          />
          <br />
          <input
            type="text"
            placeholder="Photo URL..."
            name="ProfilePhotoUrl"
            className="w-full py-2 px-6 rounded-md border border-base-900 mb-4"
            onBlur={(e) => setPhotoLink(e.target.value)}
            required
          />
          <br />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            className="w-full py-2 px-6 rounded-md border border-base-900"
            onBlur={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="w-full py-2 px-6 rounded-md my-4 border border-base-900"
            onBlur={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button
            type="submit"
            className="bg-[#171a53] hover:bg-[#454a9b] text-white flex w-full justify-center rounded-md items-center gap-4 border border-base-300 py-2 px-6 drop-shadow-md"
          >
            Register<FaArrowRightLong></FaArrowRightLong>
          </button>
          <button className="text-sm mt-4 underline">
            <Link to="/login">
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
