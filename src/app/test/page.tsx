import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LabelDemo() {
  return (
    <div>
      <div className="">
        <Label htmlFor="terms">Accept terms and conditions</Label>
        <Input />
      </div>
    </div>
  );
}
