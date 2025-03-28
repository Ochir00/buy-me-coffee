import { CoffeePage } from "./_components/donateCreator";
import { ProfilePage } from "./_components/profilepage";

export default function DonationFeed() {
  return (
    <div>
      <div className="flex space-x-4">
        <ProfilePage />
        <CoffeePage />
      </div>
    </div>
  );
}
