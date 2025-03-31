"use client";

import { useState } from "react";
import { Search, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

interface Creator {
  id: string;
  name: string;
  description: string;
  socialUrl: string;
  avatarUrl: string;
}

export function CreatorExplorer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [creators, setCreators] = useState<Creator[]>([
    {
      id: "1",
      name: "Space ranger",
      description:
        "All day, every day, we're watching, listening to, reading and absorbing politics. It's exhausting. We then report on what we've seen in a way that's as chill as possible. None of the sensationalism and division you'll find elsewhere. It's about clarity.",
      socialUrl: "https://buymeacoffee.com/baconpancakes1",
      avatarUrl: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "2",
      name: "Purple monster",
      description:
        "Purple monster is for everyone. It handles all the painful experiences and helps people.",
      socialUrl: "https://buymeacoffee.com/ifmonster23",
      avatarUrl: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "3",
      name: "Alien Conspiracy",
      description:
        "Show your support ❤️and buy me a coffee! & keep project a live!",
      socialUrl: "https://buymeacoffee.com/roooaaaamm",
      avatarUrl: "/placeholder.svg?height=80&width=80",
    },
  ]);

  // Toggle between creators view and empty state for demo purposes
  const [showCreators, setShowCreators] = useState(true);

  const filteredCreators = creators.filter((creator) =>
    creator.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Explore creators</h1>

      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-muted-foreground" />
        </div>
        <Input
          type="text"
          placeholder="Search name"
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Toggle button for demo purposes */}
      <div className="mb-4">
        <Button
          variant="outline"
          onClick={() => setShowCreators(!showCreators)}
          className="text-xs"
        >
          Toggle Demo State
        </Button>
      </div>

      {showCreators && filteredCreators.length > 0 ? (
        <div className="space-y-6">
          {filteredCreators.map((creator) => (
            <Card key={creator.id} className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <img
                      src={creator.avatarUrl || "/placeholder.svg"}
                      alt={creator.name}
                    />
                  </Avatar>
                  <div>
                    <h2 className="text-xl font-bold">{creator.name}</h2>
                  </div>
                </div>
                <div className="ml-auto">
                  <Button variant="outline" className="flex items-center gap-2">
                    View profile <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-semibold mb-2">About {creator.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {creator.description}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Social media URL</h3>
                  <a
                    href={creator.socialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    {creator.socialUrl}
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="bg-muted rounded-full p-8 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">
            No creators have signed up yet
          </h2>
        </div>
      )}
    </div>
  );
}
