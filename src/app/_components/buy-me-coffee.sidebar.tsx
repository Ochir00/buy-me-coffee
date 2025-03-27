import { ExternalLink } from "lucide-react";
export const Sidebar = () => {
  return (
    <div className="w-[250px] h-[100vh] space-y-1 text-[14px] font-medium">
      <div className="flex py-2 px-4 hover:bg-[#F4F4F5] rounded-md cursor-pointer">
        <p>Home</p>
      </div>
      <div className="flex py-2 px-4 hover:bg-[#F4F4F5] rounded-md cursor-pointer">
        <p>Explore</p>
      </div>
      <div className="flex py-2 px-4 hover:bg-[#F4F4F5] rounded-md cursor-pointer">
        <p>View page</p>
        <ExternalLink />
      </div>
      <div className="flex py-2 px-4 hover:bg-[#F4F4F5] rounded-md cursor-pointer">
        <p>Account settings</p>
      </div>
    </div>
  );
};
