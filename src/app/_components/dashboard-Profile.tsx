import { Copy } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const DashboardProfile = () => {
  return (
    <div className="w-[905px]  border-[1px] border-[#E4E4E7] rounded-lg p-space-6 ">
      <Card className="border border-indigo-100 p-6 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-4">
            <div className="relative h-[48px] w-[48px] overflow-hidden rounded-full border">
              <Image
                src="/https://github.com/shadcn.png"
                alt="Profile picture"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-[16px] font-bold">Jake</h2>
              <p className="text-gray-600 text-[14px]">buymeacoffee.com/baconpancakes1</p>
            </div>
          </div>
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-black text-white hover:bg-black/90"
          >
            <Copy size={18} />
            <span>Share page link</span>
          </Button>
        </div>

        <div className="w-full border-b rounded-md"></div>

        <div className="flex items-center justify-between">
          <div>
            <div className="flex gap-5">
              <h3 className="text-[20px] font-bold mb-2">Earnings</h3>
              <div className="flex items-center gap-4">
                <Select defaultValue="30days">
                  <SelectTrigger className="w-[180px] h-[40px] border rounded-md">
                    <SelectValue placeholder="Time period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7days">Last 7 days</SelectItem>
                    <SelectItem value="30days">Last 30 days</SelectItem>
                    <SelectItem value="90days">Last 90 days</SelectItem>
                    <SelectItem value="year">Last year</SelectItem>
                    <SelectItem value="alltime">All time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="text-[36px] font-bold mt-2">$450</div>
          </div>
        </div>
      </Card>
    </div>
  );
};
