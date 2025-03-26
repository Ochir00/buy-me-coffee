import { NormalHeader } from "@/components/header";
import { UserProfileimage } from "@/components/pfp-no-image";

export default function Page() {
    return (
        <div className="w-[100vw] h-[100vh]">
            <h3>Complete your profile page</h3>
            <NormalHeader/>
            <div className="w-[510px] m-auto bg-amber-900 ">
            <UserProfileimage />
            </div>
        </div>
    )
}