// File created at [2023-10-06 14:26:00]
import { CoffeeLogin } from "./_components/login";
import { Loginstep } from "./_components/userLogin";

const page = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-white flex justify-between">
      <Loginstep />
      <div className="w-[50vw] h-[100vh] flex justify-center items-center">
        <CoffeeLogin />
      </div>
    </div>
  );
};
export default page;
