import { Header } from "@/components/header";
import { Sidebar } from "../_components/buy-me-coffee.sidebar";
import { CreatorExplorer } from "./_components/creators";

const Page = () => {
  return (
    <div className="w-[100vw] flex flex-col">
      <Header />
      <div className="flex w-full h-full">
        <Sidebar />
        <CreatorExplorer />
      </div>
    </div>
  );
};
export default Page;
