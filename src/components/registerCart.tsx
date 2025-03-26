import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";
import { Button } from "@/components/ui/button";
export const CartRegister = () => {
  return (
    <div className="w-[510px] m-auto space-y-2">
      <h3 className="text-2xl font-semibold">
        How would you like to be paid?{" "}
      </h3>
      <p className="text-[#71717A] text-[14px]">Enter location and payment details</p>

      <Label>Select country</Label>
      <Input type="select" placeholder="Select" className="h-10" />

      <div className="flex justify-between">
        <div className="w-[48%] space-y-2">
          <Label>First name</Label>
          <Input
            type="text"
            placeholder="Enter your name here"
            className="h-10"
          />
        </div>
        <div className="w-[48%] space-y-2">
          <Label>Last name</Label>
          <Input
            type="text"
            placeholder="Enter your name here"
            className="h-10 "
          />
        </div>
      </div>
      <Label>Enter card number</Label>
      <Input type="text" placeholder="XXXX-XXXX-XXXX-XXXX" className="h-10" />
      <div className="flex justify-between gap-2">
        <div className="space-y-2">
          <Label>Expires</Label>
          <Input type="text" placeholder="Mouth" className="h-10" />
        </div>
        <div className="space-y-2">
          <Label>Year</Label>
          <Input type="number" placeholder="Year" className="h-10" />
        </div>
        <div className="space-y-2">
          <Label>CVC</Label>
          <Input type="number" placeholder="CVC" className="h-10" />
        </div>
      </div>
      <div className="pt-3 flex justify-end">
        <Button className="w-[246px] h-[40px] rounded-b-md">Continue</Button>
      </div>
    </div>
  );
};
