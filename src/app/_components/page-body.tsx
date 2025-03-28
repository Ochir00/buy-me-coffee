import { DonationFeed } from "./dashboard-donate";
import { DashboardProfile } from "./dashboard-Profile";
import { DonationSelector } from "./recent_transactions";

export const UserpageBody = () => {
  return (
    <div className="w-full flex flex-col items-center m-auto">
      <div className="">
        <DashboardProfile />
        <DonationSelector />
        <DonationFeed />
      </div>
    </div>
  );
};
