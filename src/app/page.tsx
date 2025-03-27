import { Sidebar } from "@/app/_components/buy-me-coffee.sidebar";
import { NormalHeader } from "@/components/header";
import { UserpageBody } from "@/app/_components/page-body";


export default function Home() {
  return (
    <div>
      <NormalHeader />
      <div className="flex">
        <Sidebar />
        <UserpageBody />
      </div>
    </div>
  );
}
