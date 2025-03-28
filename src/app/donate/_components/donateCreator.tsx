"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import QRCodeModal from "./qr-code-modal";
import SuccessModal from "./success-modal";
import ChatBubble from "./chat-bubble";

export function CoffeePage() {
  const [showQRCode, setShowQRCode] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [amount, setAmount] = useState("5");

  const handlePay = () => {
    setShowQRCode(true);
  };

  const handleQRClose = (success = false) => {
    setShowQRCode(false);
    if (success) {
      setShowSuccess(true);
    }
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="Jake"
            width={32}
            height={32}
            className="object-cover"
          />
        </div>
        <span className="font-medium">Jake</span>
        <div className="ml-auto text-sm text-gray-500">Creator</div>
      </div>

      <h1 className="text-xl font-bold mb-4">Buy Jake a Coffee</h1>

      <div className="grid grid-cols-3 gap-2 mb-4">
        <Button
          variant={amount === "3" ? "default" : "outline"}
          onClick={() => setAmount("3")}
          className="w-full"
        >
          $3
        </Button>
        <Button
          variant={amount === "5" ? "default" : "outline"}
          onClick={() => setAmount("5")}
          className="w-full"
        >
          $5
        </Button>
        <Button
          variant={amount === "10" ? "default" : "outline"}
          onClick={() => setAmount("10")}
          className="w-full"
        >
          $10
        </Button>
      </div>

      <div className="mb-6 text-sm text-gray-600">
        <p>
          Your support means a lot! I love creating and sharing coffee things.
          Your coffee helps me do it!
        </p>
      </div>

      <div className="mb-4">
        <Label htmlFor="email" className="text-sm font-medium mb-1 block">
          Email (optional)
        </Label>
        <Input id="email" type="email" placeholder="your@email.com" />
      </div>

      <div className="mb-6">
        <Label htmlFor="message" className="text-sm font-medium mb-1 block">
          Message (optional)
        </Label>
        <textarea
          id="message"
          className="w-full border rounded-md p-2 h-20 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Say something nice..."
        ></textarea>
      </div>

      <Button
        className="w-full mb-4"
        onClick={handlePay}
        variant={amount === "5" ? "default" : "outline"}
      >
        Support ${amount}
      </Button>

      <div className="flex items-center justify-center gap-1 text-sm text-gray-500 mb-6">
        <Heart className="h-4 w-4" />
        <span>Tip Jar is powered by Kofi</span>
      </div>

      {showQRCode && <QRCodeModal onClose={handleQRClose} amount={amount} />}

      {showSuccess && <SuccessModal onClose={handleSuccessClose} />}

      {showChat && <ChatBubble onClose={() => setShowChat(false)} />}

      <div className="fixed bottom-4 right-4">
        <Button
          variant="outline"
          className="rounded-full h-12 w-12 bg-emerald-500 text-white hover:bg-emerald-600"
          onClick={() => setShowChat(true)}
        >
          <span className="sr-only">Chat</span>
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
            className="lucide lucide-message-circle"
          >
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          </svg>
        </Button>
      </div>
    </div>
  );
}
