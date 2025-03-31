import { ExternalLink } from "lucide-react";
import Link from "next/link";
export const Sidebar = () => {
  return (
    <div className="w-[250px] h-[100vh] space-y-1 text-[14px] font-medium ml-20 mt-30">
      <Link href="/">
        <div className="flex py-2 px-4 hover:bg-[#F4F4F5] rounded-md cursor-pointer">
          <p>Home</p>
        </div>
      </Link>
      <Link href="/explore">
        <div className="flex py-2 px-4 hover:bg-[#F4F4F5] rounded-md cursor-pointer">
          <p>Explore</p>
        </div>
      </Link>
      <Link href="/">
        <div className="flex py-2 px-4 hover:bg-[#F4F4F5] rounded-md cursor-pointer">
          <p>View page</p>
          <ExternalLink />
        </div>
      </Link>
      <Link href="/">
        <div className="flex py-2 px-4 hover:bg-[#F4F4F5] rounded-md cursor-pointer">
          <p>Account settings</p>
        </div>
      </Link>
    </div>
  );
};
