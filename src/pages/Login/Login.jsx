const Login = () => {
  return (
    <div className="font-workSans">
      <div className="relative max-w-xl">
      <div className=" h-[100vh] bg-[#171a53] overflow-hidden relative">
        <img
          src="image.webp"
          alt=""
          className="h-full object-cover absolute animate-example"
        />
      </div>
      <div className="top-0 absolute w-full h-full text-white flex justify-center items-center">
        <div>
            <h1 className="text-4xl font-semibold text-center ">Sign In</h1>
            <p className="text-md my-4">Connecting Talent with Opportunity</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
