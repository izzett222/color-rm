"use client"

import { Plus } from "lucide-react"

interface AddButtonProps {
  onClick?: () => void
  variant?: "default" | "completed" | "in-progress"
  size?: "sm" | "md" | "lg"
  disabled?: boolean
}

export default function AddButton({ onClick, variant = "default", size = "md", disabled = false }: AddButtonProps) {
  const sizeClasses = {
    sm: "w-20 h-10",
    md: "w-20 h-12",
    lg: "w-20 h-16",
  }

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  }

  const getVariantClasses = () => {
    if (disabled) {
      return "border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed"
    }

    switch (variant) {
      case "completed":
        return "border-green-200 bg-green-50 text-green-600 hover:bg-green-100 hover:border-green-300"
      case "in-progress":
        return "border-yellow-200 bg-yellow-50 text-yellow-600 hover:bg-yellow-100 hover:border-yellow-300"
      default:
        return "border-gray-200 bg-white text-blue-600 hover:bg-blue-50 hover:border-blue-300"
    }
  }

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={` w-20
        ${sizeClasses[size]}
        ${getVariantClasses()}
        rounded-lg border-2 
        cursor-pointer transition-all duration-200 
        hover:shadow-lg hover:scale-[1.02]
        active:scale-[0.98]
        flex items-center justify-center
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        disabled:hover:shadow-none disabled:hover:scale-100
      `}
    >
      <Plus className={iconSizes[size]} />
    </button>
  )
}
