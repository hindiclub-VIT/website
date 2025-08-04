"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar, Clock, MapPin, Users, ExternalLink, Home, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PublicPortal() {
  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    phone: "",
    rollNumber: "",
    year: "",
  })

  const events = [
    {
      id: 1,
      title: "कविता संध्या",
      description: "An evening of beautiful Hindi poetry and recitations by students and faculty",
      date: "2024-02-15",
      time: "6:00 PM",
      venue: "Auditorium A",
      category: "upcoming",
      registrations: 45,
      capacity: 100,
      image: "/placeholder.svg?height=200&width=300",
      registrationOpen: true,
    },
    {
      id: 2,
      title: "भाषा प्रतियोगिता",
      description: "Hindi language competition testing vocabulary, grammar, and literature knowledge",
      date: "2024-01-28",
      time: "2:00 PM",
      venue: "Conference Room",
      category: "ongoing",
      registrations: 32,
      capacity: 50,
      image: "/placeholder.svg?height=200&width=300",
      registrationOpen: true,
    },
    {
      id: 3,
      title: "हिंदी दिवस समारोह",
      description: "Celebrating Hindi Day with cultural performances, speeches, and awards",
      date: "2024-01-14",
      time: "4:00 PM",
      venue: "Main Hall",
      category: "past",
      registrations: 120,
      capacity: 150,
      image: "/placeholder.svg?height=200&width=300",
      registrationOpen: false,
    },
  ]

  const clubActivities = [
    {
      title: "Weekly Poetry Sessions",
      description: "Every Friday evening, join us for poetry recitation and discussion",
      icon: "📚",
    },
    {
      title: "Hindi Literature Club",
      description: "Monthly book discussions and author interactions",
      icon: "📖",
    },
    {
      title: "Cultural Performances",
      description: "Traditional dance, music, and drama performances",
      icon: "🎭",
    },
    {
      title: "Language Workshops",
      description: "Improve your Hindi writing and speaking skills",
      icon: "✍️",
    },
  ]

  const handleRegistration = (eventId: number) => {
    // Handle event registration logic here
    console.log("Registering for event:", eventId, registrationData)
    // Reset form
    setRegistrationData({
      name: "",
      email: "",
      phone: "",
      rollNumber: "",
      year: "",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Public Portal</h1>
                <p className="text-sm text-gray-600">Hindi Club Events & Registration</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="outline" size="sm">
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </Button>
              </Link>
              <Button variant="outline" size="sm">
                <User className="w-4 h-4 mr-2" />
                Profile
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">स्वागत है</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join the Hindi Club community and participate in our cultural events and activities
          </p>
        </div>

        <Tabs defaultValue="events" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="events">Event Registration</TabsTrigger>
            <TabsTrigger value="activities">Club Activities</TabsTrigger>
          </TabsList>

          {/* Event Registration */}
          <TabsContent value="events" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Available Events</h2>

            {/* Filter Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary" className="px-4 py-2">
                All Events
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                Upcoming
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                Ongoing
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                Past
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge
                      className="absolute top-2 right-2"
                      variant={
                        event.category === "upcoming"
                          ? "default"
                          : event.category === "ongoing"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {event.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(event.date).toLocaleDateString("en-IN")}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.venue}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        {event.registrations}/{event.capacity} registered
                      </div>
                    </div>

                    {event.registrationOpen ? (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full">Register Now</Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle>Register for {event.title}</DialogTitle>
                            <DialogDescription>Fill out the form below to register for this event</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="name">Full Name</Label>
                              <Input
                                id="name"
                                value={registrationData.name}
                                onChange={(e) => setRegistrationData({ ...registrationData, name: e.target.value })}
                                placeholder="Enter your full name"
                              />
                            </div>
                            <div>
                              <Label htmlFor="email">Email</Label>
                              <Input
                                id="email"
                                type="email"
                                value={registrationData.email}
                                onChange={(e) => setRegistrationData({ ...registrationData, email: e.target.value })}
                                placeholder="Enter your email"
                              />
                            </div>
                            <div>
                              <Label htmlFor="phone">Phone Number</Label>
                              <Input
                                id="phone"
                                value={registrationData.phone}
                                onChange={(e) => setRegistrationData({ ...registrationData, phone: e.target.value })}
                                placeholder="Enter your phone number"
                              />
                            </div>
                            <div>
                              <Label htmlFor="rollNumber">Roll Number</Label>
                              <Input
                                id="rollNumber"
                                value={registrationData.rollNumber}
                                onChange={(e) =>
                                  setRegistrationData({ ...registrationData, rollNumber: e.target.value })
                                }
                                placeholder="Enter your roll number"
                              />
                            </div>
                            <div>
                              <Label htmlFor="year">Year of Study</Label>
                              <Input
                                id="year"
                                value={registrationData.year}
                                onChange={(e) => setRegistrationData({ ...registrationData, year: e.target.value })}
                                placeholder="Enter your year of study"
                              />
                            </div>
                            <Button onClick={() => handleRegistration(event.id)} className="w-full">
                              Complete Registration
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    ) : (
                      <Button disabled className="w-full">
                        Registration Closed
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Club Activities */}
          <TabsContent value="activities" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Club Activities</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {clubActivities.map((activity, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{activity.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{activity.title}</h3>
                        <p className="text-gray-600">{activity.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Information */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Join Our Community</CardTitle>
                <CardDescription>
                  Become a part of the Hindi Club and explore the rich heritage of Hindi language and culture
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">What We Offer:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Regular cultural events and competitions</li>
                      <li>• Language learning workshops</li>
                      <li>• Literary discussions and book clubs</li>
                      <li>• Performance opportunities</li>
                      <li>• Networking with like-minded students</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">How to Get Involved:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Register for upcoming events</li>
                      <li>• Attend our weekly meetings</li>
                      <li>• Participate in competitions</li>
                      <li>• Volunteer for event organization</li>
                      <li>• Follow us on social media</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Button size="lg">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Contact Us for More Information
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
