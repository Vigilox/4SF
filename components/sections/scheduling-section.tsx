"use client"

import Link from "next/link"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { CalendarIcon, ShieldHalf, MapPinIcon, ClockIcon } from "lucide-react"
import Image from "next/image"
import { format } from "date-fns"

const safetyClasses = [
  {
    id: "sc1",
    name: "Basic Handgun Safety",
    date: "July 10, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Main Training Room",
    instructor: "John Doe",
    instructorBio: "John is a certified NRA instructor with 10+ years of experience.",
    instructorImage: "/placeholder.svg?width=80&height=80",
    price: "$99",
    spotsLeft: 5,
  },
  {
    id: "sc2",
    name: "AR-15 Fundamentals",
    date: "July 15, 2025",
    time: "5:00 PM - 8:00 PM",
    location: "Tactical Bay Alpha",
    instructor: "Jane Smith",
    instructorBio: "Jane is a former law enforcement officer and competitive shooter.",
    instructorImage: "/placeholder.svg?width=80&height=80",
    price: "$149",
    spotsLeft: 3,
  },
  {
    id: "sc3",
    name: "Concealed Carry Permit Class",
    date: "July 22, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Classroom B & Range",
    instructor: "Mike Brown",
    instructorBio: "Mike has extensive experience in self-defense training.",
    instructorImage: "/placeholder.svg?width=80&height=80",
    price: "$120",
    spotsLeft: 8,
  },
]

export function SchedulingSection() {
  const [rangeDate, setRangeDate] = React.useState<Date | undefined>(new Date())
  const [selectedClass, setSelectedClass] = useState<(typeof safetyClasses)[0] | null>(null)

  return (
    <section className="py-12 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
          {/* Gun Range Scheduler */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold">Book Gun Range Time</CardTitle>
              <CardDescription>Reserve your lane at our premium shooting facility.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="range-date" className="text-base font-medium">
                  Select Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="range-date"
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal mt-1",
                        !rangeDate && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {rangeDate ? format(rangeDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={rangeDate}
                      onSelect={setRangeDate}
                      initialFocus
                      disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() - 1))}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Label htmlFor="range-time" className="text-base font-medium">
                  Select Time Slot
                </Label>
                <Select>
                  <SelectTrigger id="range-time" className="w-full mt-1">
                    <SelectValue placeholder="Choose a time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1000">10:00 AM - 11:00 AM</SelectItem>
                    <SelectItem value="1100">11:00 AM - 12:00 PM</SelectItem>
                    <SelectItem value="1300">1:00 PM - 2:00 PM</SelectItem>
                    <SelectItem value="1400">2:00 PM - 3:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="firearm-type" className="text-base font-medium">
                  Firearm Type (Optional)
                </Label>
                <Select>
                  <SelectTrigger id="firearm-type" className="w-full mt-1">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="handgun">Handgun</SelectItem>
                    <SelectItem value="rifle">Rifle</SelectItem>
                    <SelectItem value="shotgun">Shotgun</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button size="lg" className="w-full bg-amber-700 text-black hover:bg-amber-600 font-semibold">
                Book Now
              </Button>
            </CardFooter>
          </Card>

          {/* Gun Safety Class Scheduler */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold">Gun Safety Classes</CardTitle>
              <CardDescription>Enroll in our expert-led safety and training courses.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
              {safetyClasses.map((sClass) => (
                <Dialog key={sClass.id} onOpenChange={(open) => !open && setSelectedClass(null)}>
                  <DialogTrigger asChild>
                    <Card
                      className="hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => setSelectedClass(sClass)}
                    >
                      <CardContent className="p-4 flex items-start gap-4">
                        <ShieldHalf className="h-10 w-10 text-amber-700 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-lg">{sClass.name}</h4>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <ClockIcon className="h-3 w-3" /> {sClass.date} @ {sClass.time}
                          </p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <MapPinIcon className="h-3 w-3" /> {sClass.location}
                          </p>
                          <p className="text-sm font-bold text-amber-800 mt-1">
                            {sClass.price} - {sClass.spotsLeft} spots left
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  {selectedClass && selectedClass.id === sClass.id && (
                    <DialogContent className="sm:max-w-[525px]">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{selectedClass.name}</DialogTitle>
                        <DialogDescription>Confirm your enrollment for this class.</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="flex items-center gap-4">
                          <Image
                            src={selectedClass.instructorImage || "/placeholder.svg"}
                            alt={selectedClass.instructor}
                            width={60}
                            height={60}
                            className="rounded-full"
                          />
                          <div>
                            <p className="font-semibold">Instructor: {selectedClass.instructor}</p>
                            <p className="text-xs text-muted-foreground">{selectedClass.instructorBio}</p>
                          </div>
                        </div>
                        <p>
                          <strong className="font-medium">Date & Time:</strong> {selectedClass.date} @{" "}
                          {selectedClass.time}
                        </p>
                        <p>
                          <strong className="font-medium">Location:</strong> {selectedClass.location}
                        </p>
                        <p>
                          <strong className="font-medium">Price:</strong> {selectedClass.price}
                        </p>
                        <div>
                          <Label htmlFor="name" className="text-right">
                            Full Name
                          </Label>
                          <Input id="name" placeholder="Your Name" className="col-span-3 mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-right">
                            Email
                          </Label>
                          <Input id="email" type="email" placeholder="your@email.com" className="col-span-3 mt-1" />
                        </div>
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button type="button" variant="outline">
                            Cancel
                          </Button>
                        </DialogClose>
                        <Button type="submit" className="bg-amber-700 text-black hover:bg-amber-600">
                          Enroll Now ({selectedClass.price})
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  )}
                </Dialog>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/training/all-classes">View All Classes</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
