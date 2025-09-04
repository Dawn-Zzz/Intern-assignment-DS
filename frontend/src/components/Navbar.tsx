import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Info, Github, CalendarIcon } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import type { DateRange } from "react-day-picker"

const timeRanges = [
  { label: '1d', value: '1d' },
  { label: '3d', value: '3d' },
  { label: '7d', value: '7d' },
  { label: '30d', value: '30d' },
  { label: 'Custom', value: 'custom' }
]

export function Navbar() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('30d')
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2025, 8, 5),
    to: new Date(2025, 9, 4)
  })

  return (
    <div className="space-y-0 pb-4">
      <div className="border-b">
        <div className="flex items-center justify-between py-3 px-4 md:px-8">
          <div className="flex items-center space-x-3">
            <SidebarTrigger />
            <h1 className="text-lg font-semibold">Overview</h1>
            <Info className="h-4 w-4 text-muted-foreground" />
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 flex items-center justify-center cursor-pointer">
              <Github className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="border-b">
        <div className="flex items-center justify-between py-3 px-4 md:px-8">
          <div className="flex items-center space-x-3 w-full">
            {/* Time Range Buttons - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-2">
              {timeRanges.map((range) => (
                <Button
                  key={range.value}
                  variant={selectedTimeRange === range.value ? "default" : "secondary"}
                  size="sm"
                  onClick={() => setSelectedTimeRange(range.value)}
                  className="text-sm cursor-pointer"
                >
                  {range.label}
                </Button>
              ))}
            </div>
            
            {/* Date Picker - Always visible */}
            <div className="flex items-center space-x-2 md:ml-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className={cn(
                      "text-xs sm:text-sm cursor-pointer font-normal",
                      !dateRange?.from && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">
                      {dateRange?.from && dateRange?.to ? (
                        `${format(dateRange.from, "MMM dd, yyyy")} - ${format(dateRange.to, "MMM dd, yyyy")}`
                      ) : (
                        "Pick a date range"
                      )}
                    </span>
                    <span className="sm:hidden">
                      {dateRange?.from && dateRange?.to ? (
                        `${format(dateRange.from, "MMM dd")} - ${format(dateRange.to, "MMM dd")}`
                      ) : (
                        "Date range"
                      )}
                    </span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="range"
                    selected={dateRange}
                    onSelect={(range: DateRange | undefined) => {
                      setDateRange(range)
                    }}
                    numberOfMonths={2}
                    captionLayout="dropdown"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
