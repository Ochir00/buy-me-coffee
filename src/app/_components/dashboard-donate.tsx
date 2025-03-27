"use client"

import Image from "next/image"
import { useState } from "react"

interface Donation {
  id: string
  name: string
  profileUrl: string
  amount: string
  message?: string
  timeAgo: string
  avatar?: string
  initials?: string
}

export function DonationFeed() {
  const [expandedMessages, setExpandedMessages] = useState<Record<string, boolean>>({})

  const donations: Donation[] = [
    {
      id: "1",
      name: "Guest",
      profileUrl: "instagram.com/welesley",
      amount: "$1",
      message:
        "Thank you for being so awesome everyday! You always manage to brighten up my day when I'm feeling down. Although $1 isn't that much money it's all I can contribute at the moment",
      timeAgo: "10 hours ago",
      initials: "CN",
    },
    {
      id: "2",
      name: "John Doe",
      profileUrl: "buymeacoffee.com/bdsadas",
      amount: "$10",
      message: "Thank you for being so awesome everyday!",
      timeAgo: "10 hours ago",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "3",
      name: "Radicals",
      profileUrl: "buymeacoffee.com/gkfgrew",
      amount: "$2",
      timeAgo: "10 hours ago",
      initials: "CN",
    },
    {
      id: "4",
      name: "Guest",
      profileUrl: "facebook.com/penelopeb",
      amount: "$5",
      timeAgo: "10 hours ago",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "5",
      name: "Fan1",
      profileUrl: "buymeacoffee.com/supporterone",
      amount: "$10",
      message:
        "Thank you for being so awesome everyday! You always manage to brighten up my day when I'm feeling down. Although $1 isn't that much money it's all I can contribute at the moment. When I become successful I will be sure to buy you a coffee every day!",
      timeAgo: "10 hours ago",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "6",
      name: "Guest",
      profileUrl: "instagram.com/welesley",
      amount: "$1",
      timeAgo: "10 hours ago",
      initials: "CN",
    },
  ]

  const toggleMessage = (id: string) => {
    setExpandedMessages((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className="w-[903px] border rounded-2xl p-4 bg-white">
      {donations.map((donation, index) => (
        <div key={donation.id} className="py-4">
          <div className="flex items-start gap-3">
            {/* Avatar */}
            <div className="flex-shrink-0">
              {donation.avatar ? (
                <Image
                  src={donation.avatar || "/placeholder.svg"}
                  alt={donation.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              ) : (
                <div className="w-[50px] h-[50px] bg-gray-100 rounded-full flex items-center justify-center text-gray-700 font-medium">
                  {donation.initials}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-base">{donation.name}</h3>
                  <a href={`https://${donation.profileUrl}`} className="text-sm text-gray-500 hover:underline">
                    {donation.profileUrl}
                  </a>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-medium text-base">+ {donation.amount}</span>
                  <span className="text-sm text-gray-500">{donation.timeAgo}</span>
                </div>
              </div>

              {/* Message */}
              {donation.message && (
                <div className="mt-2">
                  <p className="text-base text-gray-800">
                    {expandedMessages[donation.id] || donation.message.length <= 120
                      ? donation.message
                      : `${donation.message.substring(0, 120)}...`}
                    {donation.message.length > 120 && (
                      <button
                        onClick={() => toggleMessage(donation.id)}
                        className="ml-1 font-medium text-gray-900 hover:underline"
                      >
                        {expandedMessages[donation.id] ? "Show less" : "Show more"}
                      </button>
                    )}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Separator (except for last item) */}
          {index < donations.length - 1 && <div className="mt-4 border-b border-gray-100"></div>}
        </div>
      ))}
    </div>
  )
}

