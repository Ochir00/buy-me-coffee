import Image from "next/image";

export const Loginstep = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-white flex justify-between">
      <div className="min-w-[50%] bg-amber-400 flex items-center justify-center ">
        <Image
          src="/signup.png"
          width={1000}
          height={1000}
          alt="Image"
          className="w-[455px] h-[370px] "
        />
      </div>
      <div className="min-w-[50%] bg-white flex items-center justify-center ">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-4">Welcome Back!</h1>
          <form className="flex flex-col w-full max-w-xs">
            <label htmlFor="email" className="mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email here"
              className="w-[359px] h-[40px] mb-4 p-2 border border-gray-300 rounded"
            />
            <label htmlFor="password" className="mb-2 font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password here"
              className="w-[359px] h-[40px] mb-4 p-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="bg-blue-500 w-[359px] h-[40px] text-white py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
