"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { X } from "lucide-react"

interface QRCodeModalProps {
  onClose: (success?: boolean) => void
  amount: string
}

export default function QRCodeModal({ onClose, amount }: QRCodeModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button onClick={() => onClose()} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-xl font-bold mb-4 text-center">Scan QR code</h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Scan this QR code with your phone camera to complete your payment
        </p>

        <div className="flex justify-center mb-6">
          <div className="border border-gray-200 p-2 rounded-lg">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="QR Code"
              width={200}
              height={200}
              className="w-48 h-48"
            />
          </div>
        </div>

        <div className="text-center mb-6">
          <p className="text-sm text-gray-600">Amount: ${amount}</p>
        </div>

        <Button className="w-full" onClick={() => onClose(true)}>
          I've completed payment
        </Button>
      </div>
    </div>
  )
}

