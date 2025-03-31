import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, HelpCircle, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AddRoomPage() {
  return (
    <div className="p-6">
      <div className="mb-4 flex items-center gap-2">
        <Link href="/dashboard/rooms">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-semibold">Шинэ өрөө нэмэх</h1>
      </div>

      <div className="bg-white rounded-lg border border-[#f2f2f2] p-6">
        {/* Room Images */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-lg font-medium">Өрөөний зураг</h2>
            <HelpCircle className="w-4 h-4 text-[#8c8c8c]" />
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="aspect-video rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Room"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Room"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Room"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-video rounded-lg border border-dashed border-[#bfbfbf] flex flex-col items-center justify-center text-[#8c8c8c]">
              <Plus className="w-6 h-6 mb-1" />
              <span className="text-sm">Зураг нэмэх</span>
            </div>
          </div>
        </div>

        {/* Room Details */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-lg font-medium">Дэлгэрэнгүй мэдээлэл</h2>
            <HelpCircle className="w-4 h-4 text-[#8c8c8c]" />
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <Label className="mb-2 block">Өрөөний дугаар *</Label>
              <Input placeholder="Өрөөний дугаар" className="w-full" />
            </div>
            <div>
              <Label className="mb-2 block">Өрөөний давхар *</Label>
              <Input placeholder="Давхарын дугаар" className="w-full" />
            </div>
            <div>
              <Label className="mb-2 block">Захиалгын байдал *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Ирсэн" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="arrived">Ирсэн</SelectItem>
                  <SelectItem value="pending">Хүлээгдэж буй</SelectItem>
                  <SelectItem value="cancelled">Цуцлагдсан</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="mb-2 block">Өрөөний төрөл *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Deluxe suite" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="deluxe">Deluxe suite</SelectItem>
                  <SelectItem value="standard">Standard room</SelectItem>
                  <SelectItem value="premium">Premium suite</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="mb-2 block">Өрөөний багтаамж *</Label>
              <Input placeholder="1-3 зочин" className="w-full" />
            </div>
            <div>
              <Label className="mb-2 block">Өрөөний үнэ *</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="text-[#8c8c8c]">$</span>
                </div>
                <Input placeholder="Үнэ" className="pl-8 w-full" />
              </div>
            </div>
            <div>
              <Label className="mb-2 block">Орны төрөл *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Queen size bed" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="queen">Queen size bed</SelectItem>
                  <SelectItem value="king">King size bed</SelectItem>
                  <SelectItem value="twin">Twin beds</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="mb-2 block">Өрөөний талбай</Label>
              <Input placeholder="50м.кв" className="w-full" />
            </div>
            <div className="col-span-2">
              <Label className="mb-2 block">Өрөөний тухай *</Label>
              <textarea
                placeholder="Өрөөний тухай"
                className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-lg font-medium">Тохижилт</h2>
            <HelpCircle className="w-4 h-4 text-[#8c8c8c]" />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="air-conditioner" id="air-conditioner" />
                  <Label htmlFor="air-conditioner">Тэжээвэр амьтан</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="breakfast" id="breakfast" />
                  <Label htmlFor="breakfast">Утаат тамхи</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="wifi" id="wifi" />
                  <Label htmlFor="wifi">Wi-Fi</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="minibar" id="minibar" />
                  <Label htmlFor="minibar">Mini-bar</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="coffee" id="coffee" />
                  <Label htmlFor="coffee">Кофе чанагч</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="jacuzzi" id="jacuzzi" />
                  <Label htmlFor="jacuzzi">Жакузи</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="shower" id="shower" />
                  <Label htmlFor="shower">Шүршүүр</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="heater" id="heater" />
                  <Label htmlFor="heater">Агааржуулагч</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="iptv" id="iptv" />
                  <Label htmlFor="iptv">IPTV</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        {/* Other Options */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-lg font-medium">Бусад боломж</h2>
            <HelpCircle className="w-4 h-4 text-[#8c8c8c]" />
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="early-checkin" id="early-checkin" />
                  <Label htmlFor="early-checkin">Хөгжлийн бэрхшээлтэй хүн байрлах болох эсэх</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="late-checkout" id="late-checkout" />
                  <Label htmlFor="late-checkout">Нэмэлт өглөөний цай</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="spa" id="spa" />
                  <Label htmlFor="spa">Хүүхдэс үгаалга</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button className="bg-[#dfaa5b] hover:bg-[#c99a51] text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" x2="12" y1="3" y2="15"></line>
            </svg>
            Хадгалах
          </Button>
          <Link href="/dashboard/rooms">
            <Button variant="outline">Буцах</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

