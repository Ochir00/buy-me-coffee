"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CoffeeIcon, ChevronDownIcon } from "lucide-react";

interface HeaderProps {
  initialLoggedIn?: boolean;
}

export function Header({ initialLoggedIn = false }: HeaderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(initialLoggedIn);

  return (
    <header className="border-b border-gray-200 py-4 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <CoffeeIcon className="h-5 w-5" />
          <span className="font-medium text-lg">Buy Me Coffee</span>
        </Link>

        <div>
          {isLoggedIn ? (
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg"
                alt="User profile"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="mr-1">Username</span>
              <ChevronDownIcon className="h-4 w-4" />
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link href="/Sign-up">
                <Button
                  variant="default"
                  className="bg-black text-white hover:bg-gray-800"
                >
                  Sign up
                </Button>
              </Link>
              <Link href={"/login"}>
                <Button
                  variant="link"
                  className="text-gray-700"
                >
                  Log in
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
