import { NormalHeader } from "@/components/header";
import { CartRegister } from "@/components/registerCart";
import { RegisterProfile } from "@/components/registerprofile";

export default function Page() {
  return (
    <div className="w-[100vw] h-[100vh]">
      <NormalHeader />
      <RegisterProfile />
      <CartRegister />
    </div>
  );
}
