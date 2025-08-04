"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Clock, MapPin, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const events = [
    {
      id: 1,
      title: "कविता संध्या",
      date: new Date(2024, 1, 15),
      time: "6:00 PM",
      venue: "सभागार A",
      type: "cultural",
      description: "हिंदी कविता की मधुर प्रस्तुति",
    },
    {
      id: 2,
      title: "हिंदी दिवस समारोह",
      date: new Date(2024, 8, 14),
      time: "4:00 PM",
      venue: "मुख्य सभागार",
      type: "celebration",
      description: "राष्ट्रभाषा के सम्मान में विशेष कार्यक्रम",
    },
    {
      id: 3,
      title: "साहित्यिक गोष्ठी",
      date: new Date(2024, 1, 28),
      time: "3:00 PM",
      venue: "पुस्तकालय हॉल",
      type: "literary",
      description: "प्रसिद्ध लेखकों के साथ चर्चा",
    },
    {
      id: 4,
      title: "भाषा प्रतियोगिता",
      date: new Date(2024, 2, 5),
      time: "2:00 PM",
      venue: "सम्मेलन कक्ष",
      type: "competition",
      description: "हिंदी व्याकरण और साहित्य की प्रतियोगिता",
    },
  ]

  const monthNames = ["जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"]

  const dayNames = ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"]

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }

    return days
  }

  const getEventsForDate = (date: Date) => {
    return events.filter((event) => event.date.toDateString() === date.toDateString())
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "cultural":
        return "bg-orange-500"
      case "celebration":
        return "bg-rose-500"
      case "literary":
        return "bg-purple-500"
      case "competition":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  const days = getDaysInMonth(currentDate)

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-rose-50 to-pink-50">
      {/* Header */}
      <header className="relative bg-white/90 backdrop-blur-md shadow-lg border-b-4 border-gradient-to-r from-orange-300 to-rose-300">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/20 to-rose-100/20"></div>
        <div className="container mx-auto px-4 py-6 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link href="/">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  मुख्य पृष्ठ
                </Button>
              </Link>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-rose-500 rounded-full flex items-center justify-center shadow-lg">
                  <CalendarIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent hindi-text">
                    कार्यक्रम कैलेंडर
                  </h1>
                  <p className="text-lg text-gray-700 font-medium">VIT भोपाल हिंदी क्लब</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-3xl hindi-text text-gray-800">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </CardTitle>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigateMonth("prev")}
                      className="border-orange-300 text-orange-600 hover:bg-orange-50"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigateMonth("next")}
                      className="border-rose-300 text-rose-600 hover:bg-rose-50"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Day headers */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {dayNames.map((day) => (
                    <div key={day} className="text-center font-semibold text-gray-600 py-2 hindi-text">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-2">
                  {days.map((day, index) => {
                    if (!day) {
                      return <div key={index} className="h-24"></div>
                    }

                    const dayEvents = getEventsForDate(day)
                    const isToday = day.toDateString() === new Date().toDateString()
                    const isSelected = selectedDate && day.toDateString() === selectedDate.toDateString()

                    return (
                      <div
                        key={index}
                        className={`h-24 p-2 border rounded-lg cursor-pointer transition-all duration-200 ${
                          isToday
                            ? "bg-gradient-to-br from-orange-100 to-rose-100 border-orange-300"
                            : isSelected
                              ? "bg-gradient-to-br from-rose-100 to-pink-100 border-rose-300"
                              : "bg-white hover:bg-gray-50 border-gray-200"
                        }`}
                        onClick={() => setSelectedDate(day)}
                      >
                        <div className={`text-sm font-medium ${isToday ? "text-orange-600" : "text-gray-700"}`}>
                          {day.getDate()}
                        </div>
                        <div className="space-y-1 mt-1">
                          {dayEvents.slice(0, 2).map((event) => (
                            <div
                              key={event.id}
                              className={`text-xs px-1 py-0.5 rounded text-white truncate ${getEventTypeColor(event.type)}`}
                            >
                              {event.title}
                            </div>
                          ))}
                          {dayEvents.length > 2 && (
                            <div className="text-xs text-gray-500">+{dayEvents.length - 2} और</div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Event Details */}
          <div className="space-y-6">
            {/* Legend */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl hindi-text text-gray-800">कार्यक्रम प्रकार</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  <span className="text-sm hindi-text">सांस्कृतिक कार्यक्रम</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-rose-500 rounded"></div>
                  <span className="text-sm hindi-text">उत्सव</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-purple-500 rounded"></div>
                  <span className="text-sm hindi-text">साहित्यिक गोष्ठी</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="text-sm hindi-text">प्रतियोगिता</span>
                </div>
              </CardContent>
            </Card>

            {/* Selected Date Events */}
            {selectedDate && (
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl hindi-text text-gray-800">
                    {selectedDate.getDate()} {monthNames[selectedDate.getMonth()]} के कार्यक्रम
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {getEventsForDate(selectedDate).length > 0 ? (
                    <div className="space-y-4">
                      {getEventsForDate(selectedDate).map((event) => (
                        <div key={event.id} className="p-4 bg-gradient-to-r from-orange-50 to-rose-50 rounded-lg">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-gray-800 hindi-text">{event.title}</h4>
                            <Badge className={`${getEventTypeColor(event.type)} text-white`}>
                              {event.type === "cultural"
                                ? "सांस्कृतिक"
                                : event.type === "celebration"
                                  ? "उत्सव"
                                  : event.type === "literary"
                                    ? "साहित्यिक"
                                    : "प्रतियोगिता"}
                            </Badge>
                          </div>
                          <p className="text-gray-600 text-sm mb-3 hindi-text">{event.description}</p>
                          <div className="space-y-1 text-sm text-gray-600">
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4" />
                              <span className="hindi-text">{event.time}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4" />
                              <span className="hindi-text">{event.venue}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-8 hindi-text">इस दिन कोई कार्यक्रम नहीं है</p>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Upcoming Events */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl hindi-text text-gray-800">आगामी कार्यक्रम</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {events
                    .filter((event) => event.date >= new Date())
                    .sort((a, b) => a.date.getTime() - b.date.getTime())
                    .slice(0, 3)
                    .map((event) => (
                      <div key={event.id} className="p-3 bg-gradient-to-r from-orange-50 to-rose-50 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-1 hindi-text">{event.title}</h4>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div className="flex items-center space-x-2">
                            <CalendarIcon className="w-3 h-3" />
                            <span>
                              {event.date.getDate()} {monthNames[event.date.getMonth()]}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-3 h-3" />
                            <span className="hindi-text">{event.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
