import { DonationFeed } from "./dashboard-donate"
import { DashboardProfile } from "./dashboard-Profile"
import { DonationSelector } from "./recent_transactions"

export const UserpageBody = () => {
    return (
        <div className="w-[955px]">
            <DashboardProfile />
            <DonationSelector />
            <DonationFeed />
        </div>
    )
}