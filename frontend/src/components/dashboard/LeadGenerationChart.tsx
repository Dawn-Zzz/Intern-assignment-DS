import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { CardTitle } from "@/components/ui/card"

interface StatsData {
  people: number
  companies: number
}

interface LeadGenerationChartProps {
  stats?: StatsData
}

export function LeadGenerationChart({ stats = { people: 0, companies: 0 } }: LeadGenerationChartProps) {
  return (
    <div className="px-2 md:px-4 lg:px-6 xl:px-8">
      <ResizablePanelGroup
        direction="vertical"
        className="min-h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[450px] border"
      >
        {/* Top Row - 30% height */}
        <ResizablePanel defaultSize={30} minSize={20}>
          <ResizablePanelGroup direction="horizontal" className="h-full">
            {/* Left Panel - Lead generation info (70%) */}
            <ResizablePanel defaultSize={70} minSize={40}>
              <div className="h-full p-2 sm:p-3 md:p-4 lg:p-6 flex flex-col justify-center border-r">
                <CardTitle className="text-sm sm:text-base md:text-lg font-medium mb-1 md:mb-2">
                  Lead generation
                </CardTitle>
                <p className="text-xs sm:text-xs md:text-sm text-muted-foreground">
                  New contacts added to the pool.
                </p>
              </div>
            </ResizablePanel>
            
            <ResizableHandle />
            
            {/* People Panel (15%) */}
            <ResizablePanel defaultSize={15} minSize={10}>
              <div className="h-full text-center p-1 sm:p-2 md:p-3 lg:p-4 border-r bg-muted/20 flex flex-col justify-center">
                <div className="text-xs text-muted-foreground mb-1">People</div>
                <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">
                  {stats.people}
                </div>
              </div>
            </ResizablePanel>
            
            <ResizableHandle />
            
            {/* Companies Panel (15%) */}
            <ResizablePanel defaultSize={15} minSize={10}>
              <div className="h-full text-center p-1 sm:p-2 md:p-3 lg:p-4 bg-muted/20 flex flex-col justify-center">
                <div className="text-xs text-muted-foreground mb-1">Companies</div>
                <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">
                  {stats.companies}
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        
        <ResizableHandle />
        
        {/* Bottom Row - 70% height */}
        <ResizablePanel defaultSize={70} minSize={50}>
          <div className="h-full flex items-center justify-center p-2 sm:p-4 md:p-6 bg-muted/10 border-t">
            <span className="text-muted-foreground text-xs sm:text-sm md:text-base">
              Chart area
            </span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
