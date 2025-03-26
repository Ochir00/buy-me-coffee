
import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";

export default function Profile() {
  return (
    <div className="space-y-2">
        <Label>Name</Label>
        <Input type="text" placeholder="Enter your name here" className="h-10"/>
        <Label>About</Label>
        <Input type="text" placeholder="Write about yourself here" className="h-[131px]"/>
        <Label>Social media URL</Label>
        <Input type="text" placeholder="https://" className="h-10"/>
    </div>
  );
}
