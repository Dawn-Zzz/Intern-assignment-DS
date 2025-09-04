import { Navbar } from './Navbar'
import { LeadGenerationChart, ContactTable, type Contact } from './dashboard'

// Mock data for contacts
const mostVisitedContacts: Contact[] = [
  { name: "Salesforce", visits: 0, color: "bg-blue-500" },
  { name: "Qualcomm", visits: 0, color: "bg-blue-600" },
  { name: "LVMH", visits: 0, color: "bg-black" },
  { name: "Airbnb", visits: 0, color: "bg-red-500" },
  { name: "Microsoft", visits: 0, color: "bg-yellow-500" },
  { name: "United Airlines", visits: 0, color: "bg-purple-600" },
]

const leastVisitedContacts: Contact[] = [
  { name: "United Airlines", visits: 0, color: "bg-purple-600" },
  { name: "Qualcomm", visits: 0, color: "bg-blue-600" },
  { name: "LVMH", visits: 0, color: "bg-black" },
  { name: "Airbnb", visits: 0, color: "bg-red-500" },
  { name: "Microsoft", visits: 0, color: "bg-yellow-500" },
  { name: "Vivian Casey", visits: 0, color: "bg-amber-600" },
]

export function DashboardPage() {
  return (
    <div className="flex flex-col h-screen">
      {/* Fixed Navbar */}
      <div className="flex-shrink-0">
        <Navbar />
      </div>
      
      {/* Scrollable Content */}
      <div className="flex-1 overflow-auto">
        <div className="space-y-4 md:space-y-6 pb-4 md:pb-6">
          {/* Lead Generation Chart */}
          <LeadGenerationChart stats={{ people: 0, companies: 0 }} />

          {/* Contact Tables Section - Responsive */}
          <div className="px-2 md:px-4 lg:px-6 xl:px-8">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
              <ContactTable 
                title="Most visited contacts" 
                contacts={mostVisitedContacts} 
              />
              <ContactTable 
                title="Least visited contacts" 
                contacts={leastVisitedContacts} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
