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
    </div>
  );
};
