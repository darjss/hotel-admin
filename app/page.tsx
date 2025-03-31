"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, we would authenticate the user here
    // For this demo, we'll just redirect to the dashboard
    router.push("/dashboard")
  }

  return (
    <div className="flex flex-col md:flex-row h-screen relative overflow-hidden bg-[#EEEEEE]">
      {/* Left side - Hotel Image */}
      <div className="hidden md:block md:w-3/4 relative">
        <Image src="/images/hotel-pool.jpg" alt="Hotel view" fill className="object-scale-down" priority />
      </div>

      {/* Diagonal divider - only visible on md and up
      <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-24 transform -translate-x-1/2 z-10">
        <div className="absolute inset-0 bg-white transform -skew-x-12"></div>
      </div> */}

      {/* Right side - Login Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-4 sm:p-8 bg-[#EEEEEE] rounded-lg">
        <div className="w-full max-w-md">
          <div className="flex justify-between items-center mb-8 md:mb-16">
            <div className="flex items-center">
              <span className="text-xl md:text-2xl font-bold">Marr</span>
              <span className="text-xl md:text-2xl font-bold text-[#dfaa5b]">i</span>
              <span className="text-xl md:text-2xl font-bold">ott</span>
            </div>

          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-[#dfaa5b] mb-6 md:mb-10">ТАВТАЙ МОРИЛ</h1>

          <h2 className="text-lg md:text-xl font-medium mb-6 md:mb-8">НЭВТРЭХ</h2>

          <form onSubmit={handleLogin} className="space-y-4 md:space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#595959]">Нэвтрэх нэр</label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full h-10 md:h-12 bg-[#f6f6f6] border-[#eeeeee] rounded-md"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#595959]">Нууц үг</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-10 md:h-12 bg-[#f6f6f6] border-[#eeeeee] rounded-md"
                required
              />
            </div>

            <div className="text-right">
              <a href="#" className="text-sm text-[#8a8a8a] hover:text-[#dfaa5b]">
                Нууц үг мартсан
              </a>
            </div>

            <Button
              type="submit"
              className="w-full h-10 md:h-12 bg-[#dfaa5b] hover:bg-[#c99a51] text-white font-medium rounded-md mt-4"
            >
              Нэвтрэх
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

