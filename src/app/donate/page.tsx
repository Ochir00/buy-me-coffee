import { CoffeePage } from "./_components/donateCreator";
import { ProfilePage } from "./_components/profilepage";

export default function DonationFeed() {
  return (
    <div className="w-[100vw] h-[10vh] flex flex-col items-center ">
      <div className="flex space-x-4 m-auto">
        <ProfilePage />
        <CoffeePage />
      </div>
    </div>
  );
}
