"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, Info, MoreHorizontal, Plus, Search, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for rooms
const rooms = [
  {
    id: 1,
    roomNumber: "231",
    roomType: "Deluxe twin",
    floor: "Д-31",
    bedType: "Twin bed",
    capacity: 2,
    status: { label: "Бохир", color: "#dc3545" },
    amenities: "Queen Size, Шүршүүр, Жакуз",
  },
  {
    id: 2,
    roomNumber: "100",
    roomType: "Superior twin",
    floor: "Д-02",
    bedType: "Twin bed",
    capacity: 2,
    status: { label: "Бэлэн", color: "#198754" },
    amenities: "Жакуз, Шүршүүр, Mini-Bar",
  },
  {
    id: 3,
    roomNumber: "101",
    roomType: "Executive suite",
    floor: "Д-01",
    bedType: "King size bed",
    capacity: 4,
    status: { label: "Хүлээгдэж", color: "#0d6efd" },
    amenities: "Double Bed, Жакуз, Шүршүүр",
  },
  {
    id: 4,
    roomNumber: "101",
    roomType: "Executive suite",
    floor: "Д-01",
    bedType: "King size bed",
    capacity: 4,
    status: { label: "Хүлээгдэж", color: "#0d6efd" },
    amenities: "Double Bed, Жакуз, Шүршүүр",
  },
  {
    id: 5,
    roomNumber: "675",
    roomType: "Standard Double",
    floor: "Д-02",
    bedType: "Queen size bed",
    capacity: 2,
    status: { label: "Захиалсан", color: "#ffc107" },
    amenities: "Double Bed, Жакуз, Шүршүүр",
  },
  {
    id: 6,
    roomNumber: "2",
    roomType: "Comfort Single",
    floor: "Д-04",
    bedType: "Twin bed",
    capacity: 2,
    status: { label: "Бөр төлөв", color: "#0dcaf0" },
    amenities: "Single Bed, Шүршүүр",
  },
  {
    id: 7,
    roomNumber: "231",
    roomType: "Deluxe suite",
    floor: "Д-31",
    bedType: "Queen size bed",
    capacity: 3,
    status: { label: "Бохир", color: "#dc3545" },
    amenities: "Queen Size, Шүршүүр",
  },
  {
    id: 8,
    roomNumber: "100",
    roomType: "Comfort Single",
    floor: "Д-02",
    bedType: "Twin bed",
    capacity: 2,
    status: { label: "Бэлэн", color: "#198754" },
    amenities: "Жакуз, Шүршүүр, Mini-Bar",
  },
  {
    id: 9,
    roomNumber: "231",
    roomType: "Deluxe king",
    floor: "Д-31",
    bedType: "Twin bed",
    capacity: 2,
    status: { label: "Бохир", color: "#dc3545" },
    amenities: "Queen Size, Шүршүүр",
  },
  {
    id: 10,
    roomNumber: "675",
    roomType: "Superior king",
    floor: "Д-02",
    bedType: "Twin bed",
    capacity: 2,
    status: { label: "Захиалсан", color: "#ffc107" },
    amenities: "Double Bed, Жакуз, Шүршүүр",
  },
]

export default function RoomsPage() {
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
    if (selectedRows.length === rooms.length) {
      setSelectedRows([])
    } else {
      setSelectedRows(rooms.map((room) => room.id))
    }
  }

  return (
    <div className="p-3 sm:p-6">
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold mb-4">Өрөөнүүд</h1>

        <Alert variant="destructive" className="bg-[#fff5f5] border-[#fa5252] text-[#af4d02] mb-4">
          <Info className="h-4 w-4 text-[#fa5252]" />
          <AlertDescription className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <span>Танд дараагийн цэвэрлэгээ хийх шаардлагатай 30 өрөө байна!</span>
            <Button
              variant="outline"
              size="sm"
              className="text-[#404040] border-[#bfbfbf] bg-white hover:bg-gray-50 w-full sm:w-auto"
            >
              Дэлгэрэнгүй
            </Button>
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="all" className="w-full">
          <div className="overflow-x-auto">
            <TabsList className="border-b w-full justify-start rounded-none h-auto p-0 bg-transparent">
              <TabsTrigger
                value="all"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#dfaa5b] data-[state=active]:text-[#dfaa5b] data-[state=active]:shadow-none px-4 py-2 text-[#404040]"
              >
                Бүх өрөөнүүд (496)
              </TabsTrigger>
              <TabsTrigger
                value="clean"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#dfaa5b] data-[state=active]:text-[#dfaa5b] data-[state=active]:shadow-none px-4 py-2 text-[#404040]"
              >
                Сул өрөөнүүд (293)
              </TabsTrigger>
              <TabsTrigger
                value="booked"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#dfaa5b] data-[state=active]:text-[#dfaa5b] data-[state=active]:shadow-none px-4 py-2 text-[#404040]"
              >
                Захиалгатай өрөөнүүд (62)
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 my-4">
            <div className="text-lg font-medium">Бүх өрөөнүүд</div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                <SlidersHorizontal className="h-4 w-4" />
                Шүүх
              </Button>
              <Link href="/dashboard/rooms/add" className="w-full sm:w-auto">
                <Button className="gap-1 bg-[#dfaa5b] hover:bg-[#c99a51] w-full sm:w-auto">
                  <Plus className="h-4 w-4" />
                  Шинэ өрөө нэмэх
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-4 h-4 text-[#8c8c8c]" />
            </div>
            <Input placeholder="Өрөө хайх..." className="pl-10 bg-[#f2f2f2] border-none rounded-md h-10 max-w-sm" />
          </div>

          <TabsContent value="all" className="p-0 mt-0">
            <div className="border rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#f2f2f2] text-[#404040]">
                    <tr>
                      <th className="w-10 p-3 text-left">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300"
                          checked={selectedRows.length === rooms.length}
                          onChange={toggleAllRows}
                        />
                      </th>
                      <th className="p-3 text-left font-medium">Дугаар</th>
                      <th className="p-3 text-left font-medium">Төрөл</th>
                      <th className="p-3 text-left font-medium">Давхар</th>
                      <th className="p-3 text-left font-medium">Орны төрөл</th>
                      <th className="p-3 text-left font-medium">Багтаамж</th>
                      <th className="p-3 text-left font-medium">Төлөв</th>
                      <th className="p-3 text-left font-medium">Тайлбар</th>
                      <th className="p-3 text-left font-medium">Бусад</th>
                      <th className="w-10"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {rooms.map((room) => (
                      <tr key={room.id} className="border-t border-[#f2f2f2]">
                        <td className="p-3">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300"
                            checked={selectedRows.includes(room.id)}
                            onChange={() => toggleRowSelection(room.id)}
                          />
                        </td>
                        <td className="p-3">{room.roomNumber}</td>
                        <td className="p-3">{room.roomType}</td>
                        <td className="p-3">{room.floor}</td>
                        <td className="p-3">{room.bedType}</td>
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
                            <span className="ml-1">{room.capacity}</span>
                          </div>
                        </td>
                        <td className="p-3">
                          <Badge style={{ backgroundColor: room.status.color }}>{room.status.label}</Badge>
                        </td>
                        <td className="p-3">{room.amenities}</td>
                        <td className="p-3">
                          <Button variant="ghost" size="sm" className="p-0 h-auto">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </td>
                        <td className="p-3">
                          <Button variant="ghost" size="sm" className="p-0 h-auto">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between p-4 border-t gap-3">
                <div className="text-sm text-[#737373]">1 - 10 / 100</div>
                <div className="flex flex-col sm:flex-row items-center gap-2">
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
    </div>
  )
}

