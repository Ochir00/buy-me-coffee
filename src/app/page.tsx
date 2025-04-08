import { Sidebar } from "@/app/_components/buy-me-coffee.sidebar";
import { Header } from "@/components/header";
import { UserpageBody } from "@/app/_components/page-body";

export default function Home() {
  
  return (
    <div>
      <Header initialLoggedIn={false}/>
      <div className="flex w-full ">
        <Sidebar />
        <div className="ml-30 mt-30 w-full">
          <UserpageBody />
        </div>
      </div>
    </div>
  );
}
