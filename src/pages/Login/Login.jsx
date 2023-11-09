import { FcGoogle } from "react-icons/fc";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const {login, user, googleLogin} = useAuth()
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const navigate = useNavigate()
  console.log(user);

  const handleLogin = async (e) => {
    e.preventDefault()
    const toastId = toast.loading("Logging In...")

    console.log(email, password);
    try{
       await login(email, password)
       console.log(user);
       toast.success("Log In successfull!", {id : toastId})
       navigate('/')
    }
    catch(err){
      toast.err(err.message, {id: toastId})
    }
  }

  const handleSocialSignIn = async (media) => {
    try{
      await media()
      console.log(user);
       toast.success("Log In successfull!")
       navigate('/')
    }
    catch(err){
      toast.error(err.message)
      navigate('/')
    }
  };


    

  return (
    <div className="font-workSans">
      <div className="relative w-full">
        <div className=" h-[100vh] w-full bg-[#171a53] overflow-hidden relative">
          <img
            src="image.webp"
            alt=""
            className="h-full object-cover absolute animate-example"
          />
        </div>
        <div className="top-0 absolute w-full h-full text-white flex justify-center items-center">
          <div className="border p-4">
            {/* <h1 className="text-4xl font-semibold text-center ">Sign in</h1>
            <p className="text-md my-4">Connecting Talent with Opportunity</p> */}
            <button onClick={() => handleSocialSignIn(googleLogin)} className="hover:bg-slate-500 flex w-full justify-center rounded-md items-center gap-4 border border-base-300 py-2">
              <FcGoogle></FcGoogle>Sign in with Google
            </button>
            <form className="p-4 w-full" onSubmit={handleLogin}>
            
            
            <div className="flex items-center my-4">
              <hr className="w-full" />
              <p className="mx-4">or</p>
              <hr className="w-full" />
            </div>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="w-full py-2 px-6 rounded-md border border-base-900"
              onBlur={e => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="w-full py-2 px-6 rounded-md my-4 border border-base-900"
              onBlur={e => setPassword(e.target.value)}
            />
            <br />
            <button type="submit" className="bg-[#219653] hover:bg-[#454a9b] text-white flex w-full justify-center rounded-md items-center gap-4 border border-base-300 py-2 px-6 drop-shadow-md">
              Submit<FaArrowRightLong></FaArrowRightLong>
            </button>
            <button className="text-sm mt-4 underline"><Link to='/register'>New to Applicruit? <span className="font-bold text-[#219653]">Register</span></Link></button>
          </form>
          </div>
        </div>
      </div>
      {/* Form Starts Here */}
      {/* <div className=" flex-grow items-center justify-center flex">
        <div className="max-w-xl border border-blue-600 p-10 drop-shadow-md">
          <form className="p-4 w-full" onSubmit={handleLogin}>
            
            <button className="hover:bg-slate-300 flex w-full justify-center rounded-md items-center gap-4 border border-base-300 py-2 px-6 drop-shadow-md">
              <FcGoogle></FcGoogle>Sign in with Google
            </button>
            <div className="flex items-center my-4">
              <hr className="w-full" />
              <p className="mx-4">or</p>
              <hr className="w-full" />
            </div>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="w-full py-2 px-6 rounded-md border border-base-900"
              onBlur={e => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="w-full py-2 px-6 rounded-md my-4 border border-base-900"
              onBlur={e => setPassword(e.target.value)}
            />
            <br />
            <button type="submit" className="bg-[#171a53] hover:bg-[#454a9b] text-white flex w-full justify-center rounded-md items-center gap-4 border border-base-300 py-2 px-6 drop-shadow-md">
              Submit<FaArrowRightLong></FaArrowRightLong>
            </button>
            <button className="text-sm mt-4 underline"><Link to='/register'>New to Applicruit? <span className="font-bold text-[#171a53]">Register</span></Link></button>
          </form>
        </div>
      </div> */}
    </div>
  );
};

export default Login;
