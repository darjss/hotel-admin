"use client"

import { useState } from "react"
import { Eye, MoreHorizontal, Search, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Mock data for room statuses
const roomStatuses = [
  { id: 1, label: "Цэвэрлэсэн", count: 79, color: "#198754" },
  { id: 2, label: "Цэвэрлэж байгаа", count: 45, color: "#ffc107" },
  { id: 3, label: "Бохир", count: 23, color: "#dc3545" },
  { id: 4, label: "Засвартай", count: 2, color: "#adb5bd" },
]

// Mock data for tabs
const tabs = [
  { id: "all", label: "Хувааръг ажиллууд", count: 496 },
  { id: "inProgress", label: "Хийгдэж байгаа", count: 293 },
  { id: "requests", label: "Хүслтүүд", count: 62 },
]

// Mock data for cleaning schedules
const cleaningSchedules = [
  {
    id: 1,
    roomNumber: "231",
    roomType: "Deluxe",
    task: "Ор цэвэрлэх: Орны даавуу, дэрний уутыг солих, хөнжил дэр, хөнжил тэгшлэх.",
    assignee: "Гэрэлээ",
    startTime: "10/12/2025 10.00AM",
    endTime: "10/12/2025 16.00PM",
    status: { label: "Цэвэрлэж байна", color: "#ffc107", textColor: "text-black" },
  },
  {
    id: 2,
    roomNumber: "122",
    roomType: "Single",
    task: "Хогийн савыг хооcлох: Хүт сольж, хог асгах.",
    assignee: "Гэрэлээ",
    startTime: "10/12/2025 10.00AM",
    endTime: "10/12/2025 16.00PM",
    status: { label: "Цэвэрлэж байна", color: "#ffc107", textColor: "text-black" },
  },
  {
    id: 3,
    roomNumber: "2221",
    roomType: "Suite",
    task: "Шүрээний тавцан, шкрээ, сандал, гэрлийн унтраалга, угаалгын өрөөний тавилга арчина.",
    assignee: "Гэрэлээ",
    startTime: "10/12/2025 10.00AM",
    endTime: "10/12/2025 16.00PM",
    status: { label: "Цэвэрлэж байна", color: "#ffc107", textColor: "text-black" },
  },
  {
    id: 4,
    roomNumber: "997",
    roomType: "Single",
    task: "Шал, хивсийг тоос соруулах: Тоос, хог хаягдлыг арилгана.",
    assignee: "Гэрэлээ",
    startTime: "10/12/2025 10.00AM",
    endTime: "10/12/2025 16.00PM",
    status: { label: "Цэвэрлэж байна", color: "#ffc107", textColor: "text-black" },
  },
  {
    id: 5,
    roomNumber: "75",
    roomType: "Suite",
    task: "Ор цэвэрлэх: Орны даавуу, дэрний уутыг солих, хөнжил дэр, хөнжил тэгшлэх.",
    assignee: "Гэрэлээ",
    startTime: "10/12/2025 10.00AM",
    endTime: "10/12/2025 16.00PM",
    status: { label: "Цэвэрлэж байна", color: "#ffc107", textColor: "text-black" },
  },
  {
    id: 6,
    roomNumber: "43",
    roomType: "Deluxe",
    task: "Хогийн савыг хооcлох: Хүт сольж, хог асгах.",
    assignee: "Гэрэлээ",
    startTime: "10/12/2025 10.00AM",
    endTime: "10/12/2025 16.00PM",
    status: { label: "Цэвэрлэж байна", color: "#ffc107", textColor: "text-black" },
  },
  {
    id: 7,
    roomNumber: "3",
    roomType: "Deluxe",
    task: "Шүрээний тавцан, шкрээ, сандал, гэрлийн унтраалга, угаалгын өрөөний тавилга арчина.",
    assignee: "Гэрэлээ",
    startTime: "10/12/2025 10.00AM",
    endTime: "10/12/2025 16.00PM",
    status: { label: "Цэвэрлэж байна", color: "#ffc107", textColor: "text-black" },
  },
  {
    id: 8,
    roomNumber: "90",
    roomType: "Suite",
    task: "Хогийн савыг хооcлох: Хүт сольж, хог асгах.",
    assignee: "Гэрэлээ",
    startTime: "10/12/2025 10.00AM",
    endTime: "10/12/2025 16.00PM",
    status: { label: "Цэвэрлэж байна", color: "#ffc107", textColor: "text-black" },
  },
  {
    id: 9,
    roomNumber: "504",
    roomType: "Single",
    task: "Хогийн савыг хооcлох: Хүт сольж, хог асгах.",
    assignee: "Гэрэлээ",
    startTime: "10/12/2025 10.00AM",
    endTime: "10/12/2025 16.00PM",
    status: { label: "Шалгах байна", color: "#dc3545", textColor: "text-white" },
  },
  {
    id: 10,
    roomNumber: "701",
    roomType: "Deluxe",
    task: "Хогийн савыг хооcлох: Хүт сольж, хог асгах.",
    assignee: "Гэрэлээ",
    startTime: "10/12/2025 10.00AM",
    endTime: "10/12/2025 16.00PM",
    status: { label: "Шалгах байна", color: "#dc3545", textColor: "text-white" },
  },
]

export default function RoomServicePage() {
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
    if (selectedRows.length === cleaningSchedules.length) {
      setSelectedRows([])
    } else {
      setSelectedRows(cleaningSchedules.map((schedule) => schedule.id))
    }
  }

  return (
    <div className="p-6 max-w-[1200px] mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Өрөөний үйлчилгээ</h1>

      {/* Status Chart Card */}
      <div className="bg-white rounded-lg border border-[#f2f2f2] p-6 mb-6">
        <h2 className="text-lg font-medium mb-6">Өрөөний бэлэн байдал</h2>

        <div className="flex items-center gap-8">
          {/* Donut Chart */}
          <div className="relative w-[180px] h-[180px]">
            <svg viewBox="0 0 36 36" className="w-full h-full">
              {/* Calculate stroke dasharray and dashoffset for each segment */}
              {roomStatuses.map((status, index) => {
                const total = roomStatuses.reduce((sum, s) => sum + s.count, 0)
                const percentage = (status.count / total) * 100
                const previousPercentages = roomStatuses
                  .slice(0, index)
                  .reduce((sum, s) => sum + (s.count / total) * 100, 0)

                return (
                  <path
                    key={status.id}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 1.3 31.831 a 15.9155 15.9155 0 0 1 -1.3 -31.831"
                    fill="none"
                    stroke={status.color}
                    strokeWidth="2.8"
                    strokeDasharray={`${percentage}, 100`}
                    strokeDashoffset={`-${previousPercentages}`}
                    strokeLinecap="round"
                  />
                )
              })}
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[120px] h-[120px] bg-white rounded-full"></div>
            </div>
          </div>

          {/* Legend */}
          <div className="grid gap-3">
            {roomStatuses.map((status) => (
              <div key={status.id} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: status.color }}></div>
                <span className="font-medium">{status.count}</span>
                <span className="text-[#6c757d]">{status.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs and Table */}
      <div className="mb-6">
        <div className="flex border-b mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 font-medium text-sm ${activeTab === tab.id ? "text-[#dfaa5b] border-b-2 border-[#dfaa5b]" : "text-[#6c757d]"}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center mb-4">
          <Button variant="outline" size="sm" className="gap-1">
            <SlidersHorizontal className="h-4 w-4" />
            Шүүх
          </Button>
          <Button className="gap-1 bg-[#dfaa5b] hover:bg-[#c99a51]">
            <span className="text-sm">Шинээр хувааръ нэмэх</span>
          </Button>
        </div>

        <div className="bg-white rounded-lg border border-[#f2f2f2] overflow-hidden">
          <div className="p-4">
            <h2 className="text-lg font-medium mb-4">Цэвэрлэгээний хувааръ</h2>

            <div className="relative max-w-sm mb-4">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-4 h-4 text-[#8c8c8c]" />
              </div>
              <Input placeholder="Хувааръ хайх..." className="pl-10 bg-[#f2f2f2] border-none rounded-md h-10" />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead className="bg-[#f2f2f2] text-[#404040]">
                  <tr>
                    <th className="w-10 p-3 text-left">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300"
                        checked={selectedRows.length === cleaningSchedules.length}
                        onChange={toggleAllRows}
                      />
                    </th>
                    <th className="p-3 text-left font-medium">Дугаар</th>
                    <th className="p-3 text-left font-medium">Төрөл</th>
                    <th className="p-3 text-left font-medium">Үйл ажиллагаа</th>
                    <th className="p-3 text-left font-medium">Гүйцэтгэгч</th>
                    <th className="p-3 text-left font-medium">Эхэлсэн</th>
                    <th className="p-3 text-left font-medium">Дуусах</th>
                    <th className="p-3 text-left font-medium">Төлөв</th>
                    <th className="p-3 text-left font-medium">Бусад</th>
                  </tr>
                </thead>
                <tbody>
                  {cleaningSchedules.map((schedule) => (
                    <tr key={schedule.id} className="border-t border-[#f2f2f2]">
                      <td className="p-3">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300"
                          checked={selectedRows.includes(schedule.id)}
                          onChange={() => toggleRowSelection(schedule.id)}
                        />
                      </td>
                      <td className="p-3">{schedule.roomNumber}</td>
                      <td className="p-3">{schedule.roomType}</td>
                      <td className="p-3 max-w-[200px]">
                        <div className="line-clamp-2">{schedule.task}</div>
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-[#6e7491] flex items-center justify-center text-white text-xs">
                            Г
                          </div>
                          <span>{schedule.assignee}</span>
                        </div>
                      </td>
                      <td className="p-3 whitespace-nowrap">{schedule.startTime}</td>
                      <td className="p-3 whitespace-nowrap">{schedule.endTime}</td>
                      <td className="p-3">
                        <Badge
                          className={`${schedule.status.textColor}`}
                          style={{ backgroundColor: schedule.status.color }}
                        >
                          {schedule.status.label}
                        </Badge>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Харах</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Бусад</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between p-4 border-t mt-4">
              <div className="text-sm text-[#737373]">1 - 10 / 100</div>
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
        </div>
      </div>
    </div>
  )
}

