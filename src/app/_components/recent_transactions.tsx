"use client";

import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface DonationOption {
  value: string;
  label: string;
}

export function DonationSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState("$1");

  const donationOptions: DonationOption[] = [
    { value: "$1", label: "$1" },
    { value: "$2", label: "$2" },
    { value: "$5", label: "$5" },
    { value: "$10", label: "$10" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: DonationOption) => {
    setSelectedAmount(option.value);
    setIsOpen(false);
  };

  return (
    <div className="relative w-[905px] flex justify-between mt-[20px]">
      <div className="h-24px text-[16px] font-bold flex items-center">
        <h3>Recent transactions</h3>
      </div>

      {/* Select Header */}
      <div
        onClick={toggleDropdown}
        className={cn(
          "flex items-center justify-between px-4 py-2 border border-dashed border-gray-300 rounded-lg cursor-pointer",
          isOpen ? "rounded-b-none" : ""
        )}
      >
        <div className="flex items-center gap-2">
          <ChevronDown
            className={cn(
              "h-5 w-5 transition-transform",
              isOpen ? "rotate-180" : ""
            )}
          />
          <span className="font-medium">Amount</span>
        </div>
        <span className="font-medium">{selectedAmount}</span>
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute z-10 w-[198px] bg-white border border-gray-200 rounded-b-lg shadow-lg left-[710px] top-[45px]">
          {donationOptions.map((option) => (
            <div
              key={option.value}
              onClick={() => selectOption(option)}
              className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer"
            >
              <div
                className={cn(
                  "w-5 h-5 border border-gray-300 rounded flex items-center justify-center mr-3",
                  selectedAmount === option.value
                    ? "bg-black border-black"
                    : "bg-white"
                )}
              >
                {selectedAmount === option.value && (
                  <Check className="h-4 w-4 text-white" />
                )}
              </div>
              <span className="font-medium">{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
