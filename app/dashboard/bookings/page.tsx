"use client"

import { useState } from "react"
import { CalendarIcon, Filter, MoreHorizontal, Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for bookings
const bookings = [
  {
    id: 1,
    guestName: "Батбаяр Дорж",
    roomNumber: "231",
    roomType: "Deluxe twin",
    checkIn: "2025-03-31",
    checkOut: "2025-04-03",
    nights: 3,
    guests: 2,
    status: { label: "Ирсэн", color: "#198754" },
    payment: { label: "Төлсөн", color: "#198754" },
    source: "Booking.com",
  },
  {
    id: 2,
    guestName: "Оюунчимэг Баяр",
    roomNumber: "122",
    roomType: "Superior twin",
    checkIn: "2025-04-01",
    checkOut: "2025-04-05",
    nights: 4,
    guests: 2,
    status: { label: "Хүлээгдэж буй", color: "#0d6efd" },
    payment: { label: "Төлсөн", color: "#198754" },
    source: "Expedia",
  },
  {
    id: 3,
    guestName: "Энхбаяр Сүхбаатар",
    roomNumber: "305",
    roomType: "Executive suite",
    checkIn: "2025-04-02",
    checkOut: "2025-04-04",
    nights: 2,
    guests: 3,
    status: { label: "Хүлээгдэж буй", color: "#0d6efd" },
    payment: { label: "Хүлээгдэж буй", color: "#ffc107" },
    source: "Website",
  },
  {
    id: 4,
    guestName: "Болормаа Ганбат",
    roomNumber: "410",
    roomType: "Standard Double",
    checkIn: "2025-03-30",
    checkOut: "2025-04-02",
    nights: 3,
    guests: 2,
    status: { label: "Ирсэн", color: "#198754" },
    payment: { label: "Төлсөн", color: "#198754" },
    source: "Direct",
  },
  {
    id: 5,
    guestName: "Баатар Цэрэн",
    roomNumber: "512",
    roomType: "Comfort Single",
    checkIn: "2025-04-03",
    checkOut: "2025-04-05",
    nights: 2,
    guests: 1,
    status: { label: "Хүлээгдэж буй", color: "#0d6efd" },
    payment: { label: "Хүлээгдэж буй", color: "#ffc107" },
    source: "Agoda",
  },
  {
    id: 6,
    guestName: "Сарангэрэл Бат",
    roomNumber: "201",
    roomType: "Deluxe suite",
    checkIn: "2025-04-01",
    checkOut: "2025-04-06",
    nights: 5,
    guests: 2,
    status: { label: "Ирсэн", color: "#198754" },
    payment: { label: "Төлсөн", color: "#198754" },
    source: "Booking.com",
  },
  {
    id: 7,
    guestName: "Ганбаатар Дорж",
    roomNumber: "315",
    roomType: "Superior king",
    checkIn: "2025-04-02",
    checkOut: "2025-04-04",
    nights: 2,
    guests: 2,
    status: { label: "Цуцлагдсан", color: "#dc3545" },
    payment: { label: "Буцаагдсан", color: "#dc3545" },
    source: "Website",
  },
  {
    id: 8,
    guestName: "Мөнхбаяр Баяр",
    roomNumber: "422",
    roomType: "Deluxe king",
    checkIn: "2025-04-03",
    checkOut: "2025-04-07",
    nights: 4,
    guests: 2,
    status: { label: "Хүлээгдэж буй", color: "#0d6efd" },
    payment: { label: "Хүлээгдэж буй", color: "#ffc107" },
    source: "Expedia",
  },
]

export default function BookingsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedRows, setSelectedRows] = useState<number[]>([])

  // Toggle row selection
  const toggleRowSelection = (id: number) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id))
    } else {
      setSelectedRows([...selectedRows, id])
    }
  }

  // Toggle all rows selection
  const toggleAllRows = () => {
    if (selectedRows.length === bookings.length) {
      setSelectedRows([])
    } else {
      setSelectedRows(bookings.map((booking) => booking.id))
    }
  }

  // Format date to display in a more readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Захиалгууд</h1>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="border-b w-full justify-start rounded-none h-auto p-0 bg-transparent">
          <TabsTrigger
            value="all"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#dfaa5b] data-[state=active]:text-[#dfaa5b] data-[state=active]:shadow-none px-4 py-2 text-[#404040]"
          >
            Бүх захиалгууд (156)
          </TabsTrigger>
          <TabsTrigger
            value="upcoming"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#dfaa5b] data-[state=active]:text-[#dfaa5b] data-[state=active]:shadow-none px-4 py-2 text-[#404040]"
          >
            Ирэх захиалгууд (42)
          </TabsTrigger>
          <TabsTrigger
            value="current"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#dfaa5b] data-[state=active]:text-[#dfaa5b] data-[state=active]:shadow-none px-4 py-2 text-[#404040]"
          >
            Одоогийн захиалгууд (28)
          </TabsTrigger>
          <TabsTrigger
            value="past"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#dfaa5b] data-[state=active]:text-[#dfaa5b] data-[state=active]:shadow-none px-4 py-2 text-[#404040]"
          >
            Өнгөрсөн захиалгууд (86)
          </TabsTrigger>
        </TabsList>

        <div className="flex justify-between items-center my-4">
          <div className="text-lg font-medium">Бүх захиалгууд</div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Filter className="h-4 w-4" />
              Шүүх
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <CalendarIcon className="h-4 w-4" />
              Огноо
            </Button>
            <Button className="gap-1 bg-[#dfaa5b] hover:bg-[#c99a51]">
              <Plus className="h-4 w-4" />
              Шинэ захиалга
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-4 h-4 text-[#8c8c8c]" />
          </div>
          <Input
            placeholder="Захиалга хайх..."
            className="pl-10 bg-[#f2f2f2] border-none rounded-md h-10 max-w-sm mb-4"
          />
        </div>

        <TabsContent value="all" className="p-0 mt-0">
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#f2f2f2] text-[#404040]">
                <tr>
                  <th className="w-10 p-3 text-left">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                      checked={selectedRows.length === bookings.length}
                      onChange={toggleAllRows}
                    />
                  </th>
                  <th className="p-3 text-left font-medium">Зочны нэр</th>
                  <th className="p-3 text-left font-medium">Өрөө</th>
                  <th className="p-3 text-left font-medium">Төрөл</th>
                  <th className="p-3 text-left font-medium">Ирэх</th>
                  <th className="p-3 text-left font-medium">Гарах</th>
                  <th className="p-3 text-left font-medium">Хоног</th>
                  <th className="p-3 text-left font-medium">Зочид</th>
                  <th className="p-3 text-left font-medium">Төлөв</th>
                  <th className="p-3 text-left font-medium">Төлбөр</th>
                  <th className="p-3 text-left font-medium">Эх сурвалж</th>
                  <th className="w-10"></th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id} className="border-t border-[#f2f2f2]">
                    <td className="p-3">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300"
                        checked={selectedRows.includes(booking.id)}
                        onChange={() => toggleRowSelection(booking.id)}
                      />
                    </td>
                    <td className="p-3 font-medium">{booking.guestName}</td>
                    <td className="p-3">{booking.roomNumber}</td>
                    <td className="p-3">{booking.roomType}</td>
                    <td className="p-3">{formatDate(booking.checkIn)}</td>
                    <td className="p-3">{formatDate(booking.checkOut)}</td>
                    <td className="p-3 text-center">{booking.nights}</td>
                    <td className="p-3 whitespace-nowrap">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                        </svg>
                        <span className="ml-1">{booking.guests}</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <Badge style={{ backgroundColor: booking.status.color }}>{booking.status.label}</Badge>
                    </td>
                    <td className="p-3">
                      <Badge style={{ backgroundColor: booking.payment.color }}>{booking.payment.label}</Badge>
                    </td>
                    <td className="p-3">{booking.source}</td>
                    <td className="p-3">
                      <Button variant="ghost" size="sm" className="p-0 h-auto">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex items-center justify-between p-4 border-t">
              <div className="text-sm text-[#737373]">1 - 8 / 156</div>
              <div className="flex items-center gap-2">
                <Select defaultValue="10">
                  <SelectTrigger className="w-[80px] h-8">
                    <SelectValue placeholder="10" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-r-none border-r-0"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  >
                    Өмнөх
                  </Button>
                  {[1, 2, 3].map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "outline" : "ghost"}
                      size="sm"
                      className={`rounded-none border-x-0 ${currentPage === page ? "bg-[#dfaa5b] text-white" : ""}`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-l-none border-l-0"
                    onClick={() => setCurrentPage(Math.min(3, currentPage + 1))}
                  >
                    Дараах
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

