"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

interface SuccessModalProps {
  onClose: () => void
}

export default function SuccessModal({ onClose }: SuccessModalProps) {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50 p-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-emerald-500" />
        </div>

        <h2 className="text-2xl font-bold mb-4">Thank you for your support!</h2>
        <p className="text-gray-600 mb-8">Your contribution means a lot and helps me continue creating content.</p>

        <Button className="w-full max-w-xs mx-auto" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  )
}

