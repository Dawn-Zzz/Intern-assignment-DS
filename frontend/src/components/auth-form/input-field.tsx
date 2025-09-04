import { forwardRef } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { LucideIcon } from 'lucide-react'
import { cn } from "@/lib/utils"

interface InputFieldProps {
  id: string
  label: string
  type?: string
  placeholder?: string
  icon?: LucideIcon
  rightElement?: React.ReactNode
  error?: string
  className?: string
  required?: boolean
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps & React.InputHTMLAttributes<HTMLInputElement>>(
  ({ id, label, type = "text", placeholder, icon: Icon, rightElement, error, className, required, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <Label htmlFor={id} className="text-sm font-medium">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Label>
        <div className="relative">
          {Icon && (
            <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          )}
          <Input
            ref={ref}
            id={id}
            type={type}
            className={cn(
              "h-12",
              Icon && "pl-10",
              rightElement && "pr-10",
              error && "border-red-500",
              className
            )}
            placeholder={placeholder}
            {...props}
          />
          {rightElement && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {rightElement}
            </div>
          )}
        </div>
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
      </div>
    )
  }
)

InputField.displayName = "InputField"
