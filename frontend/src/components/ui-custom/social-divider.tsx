interface SocialDividerProps {
  text?: string
  className?: string
}

export function SocialDivider({ text = "Or continue with", className }: SocialDividerProps) {
  return (
    <div className={`relative w-full ${className || ''}`}>
      <div className="absolute inset-0 flex items-center">
        <span className="w-full border-t border-gray-200" />
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="bg-white px-4 text-gray-500">{text}</span>
      </div>
    </div>
  )
}
