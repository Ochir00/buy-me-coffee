import { UserProfileimage } from "@/components/pfp-no-image";
import Profile from "@/components/profile";
import { Button } from "@/components/ui/button";

export function RegisterProfile() {
  return (
      <div className="w-[510px] m-auto">
        <h3 className="font-semibold text-2xl">Complete your profile page</h3>
        <UserProfileimage />
        <Profile />
        <div className="pt-3 flex justify-end">
          <Button className="w-[246px] h-[40px] rounded-b-md">Continue</Button>
        </div>
      </div>
  );
}
