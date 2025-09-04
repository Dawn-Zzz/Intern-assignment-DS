import { Card, CardContent, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"

export interface Contact {
  name: string
  visits: number
  color: string
}

interface ContactTableProps {
  title: string
  contacts: Contact[]
}

export function ContactTable({ title, contacts }: ContactTableProps) {
  return (
    <Card>
      <CardContent>
        <CardTitle className="text-sm md:text-base font-medium">{title}</CardTitle>
        <Table>
          <TableBody>
            {contacts.map((contact, index) => (
              <TableRow key={index}>
                <TableCell className="flex items-center space-x-2 md:space-x-3 py-1 md:py-2">
                  <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${contact.color}`}></div>
                  <span className="font-medium text-xs sm:text-sm md:text-base truncate">
                    {contact.name}
                  </span>
                </TableCell>
                <TableCell className="text-right font-medium text-xs sm:text-sm md:text-base">
                  {contact.visits}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
