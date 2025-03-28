import Image from "next/image";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProfilePage() {
  return (
    <div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Profile Header */}
        <div className="p-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="Profile picture"
                width={60}
                height={60}
                className="rounded-full"
              />
              <h1 className="text-3xl font-bold">Jake</h1>
            </div>
            <Button variant="outline" className="bg-gray-100 hover:bg-gray-200">
              Edit page
            </Button>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* About section */}
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">About Jake</h2>
          <p className="text-gray-800">
            I'm a typical person who enjoys exploring different things. I also
            make music art as a hobby. Follow me along.
          </p>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-bold mb-4">Social media URL</h2>
        <a
          href="https://buymeacoffee.com/spacerulz44"
          className="text-gray-800 hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://buymeacoffee.com/spacerulz44
        </a>
      </div>

      {/* Recent supporters section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-bold mb-4">Recent Supporters</h2>
        <div className="border border-gray-200 rounded-lg p-12 flex flex-col items-center justify-center">
          <Heart className="w-10 h-10 text-black mb-4" fill="black" />
          <p className="text-xl font-medium text-center">
            Be the first one to support Jake
          </p>
        </div>
      </div>
    </div>
  );
}
