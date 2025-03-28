"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Send } from "lucide-react"
import Image from "next/image"

interface ChatBubbleProps {
  onClose: () => void
}

export default function ChatBubble({ onClose }: ChatBubbleProps) {
  const [message, setMessage] = useState("")
  const [showReply, setShowReply] = useState(false)

  const handleSend = () => {
    if (message.trim()) {
      setShowReply(true)
      setMessage("")
    }
  }

  return (
    <div className="fixed bottom-16 right-4 w-72 bg-white rounded-lg shadow-lg overflow-hidden z-40">
      <div className="bg-emerald-500 p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-white overflow-hidden flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Support"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <span className="text-white font-medium">Support</span>
        </div>
        <button onClick={onClose} className="text-white hover:text-gray-200">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="h-64 p-3 overflow-y-auto bg-gray-50">
        <div className="flex gap-2 mb-4">
          <div className="h-8 w-8 rounded-full bg-emerald-500 overflow-hidden flex items-center justify-center flex-shrink-0">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Support"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <div className="bg-white p-2 rounded-lg shadow-sm max-w-[80%]">
            <p className="text-sm">Hello! How can I help you today?</p>
          </div>
        </div>

        {showReply && (
          <>
            <div className="flex gap-2 mb-4 justify-end">
              <div className="bg-emerald-100 p-2 rounded-lg shadow-sm max-w-[80%]">
                <p className="text-sm">{message || "Hi, I have a question about donations."}</p>
              </div>
            </div>

            <div className="flex gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-emerald-500 overflow-hidden flex items-center justify-center flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="Support"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div className="bg-white p-2 rounded-lg shadow-sm max-w-[80%]">
                <p className="text-sm">
                  Thanks for reaching out! I'd be happy to help with any questions about the donation process.
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="p-3 border-t">
        <div className="flex gap-2">
          <Input
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="text-sm"
          />
          <Button size="sm" onClick={handleSend}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

