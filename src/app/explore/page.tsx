import { NormalHeader } from "@/components/header";
import { Sidebar } from "../_components/buy-me-coffee.sidebar";

const Page = () => {
  return (
    <div className="w-[100vw] flex flex-col">
      <NormalHeader />
      <div className="flex w-full h-full">
        <Sidebar />
      </div>
    </div>
  );
};
export default Page;
