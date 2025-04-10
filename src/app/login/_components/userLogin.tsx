import Image from "next/image";

export const Loginstep = () => {
  return (
    <div className="w-1/2 h-[100vh] bg-white flex justify-between">
      <div className="min-w-[100%] bg-amber-400 flex items-center justify-center ">
        <Image
          src="/signup.png"
          width={1000}
          height={1000}
          alt="Image"
          className="w-[455px] h-[370px] "
        />
      </div>
    </div>
  );
};
