"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Users,
  Search,
  Filter,
  ExternalLink,
  Star,
  Heart,
  Trophy,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    phone: "",
    rollNumber: "",
    department: "",
  })

  const events = [
    {
      id: 1,
      title: "हिंदी दिवस - Hindi Diwas'25",
      titleHindi: "हिंदी दिवस",
      description: "An honor for words, a festival of culture - A memorable evening of Hindi Diwas in the VIT Bhopal campus",
      descriptionHindi: "शब्दों का सम्मान, संस्कृति का उत्सव - वी.आई.टी. भोपाल के प्रांगण में हिंदी दिवस की एक यादगार शाम",
      date: "2025-09-18",
      time: "TBA",
      venue: "TBA",
      venueHindi: "TBA",
      category: "celebration",
      status: "upcoming",
      registrations: 0,
      capacity: 100,
      image: "/poetry-event-banner.png",
      registrationLink: "https://forms.google.com/poetry-evening",
      culturalTheme: "🎉",
      highlights: ["Student Poetry Recitation", "Faculty Participation", "Cultural Performances", "Refreshments"],
      highlightsHindi: ["छात्र कविता पाठ", "संकाय सहभागिता", "सांस्कृतिक प्रस्तुति", "जलपान"],
      coordinator: "Dr. Priya Sharma",
      coordinatorHindi: "डॉ. प्रिया शर्मा",
      prizes: ["Best Poetry Award", "Audience Choice Award", "Participation Certificates"],
    },
    {
      id: 2,
      title: "काव्यांजलि 3.0 - Kavyanjali 3.0",
      titleHindi: "काव्यांजलि 3.0",
      description: "Some unsaid feelings will once again become words. Welcome to Kavyanjali 3.0",
      descriptionHindi: "कुछ अनकहे एहसास, फिर बनेंगे अल्फ़ाज़। काव्यांजलि 3.0 में आपका स्वागत है",
      date: "December 2025 (Tentative)",
      time: "TBA",
      venue: "TBA",
      venueHindi: "TBA",
      category: "poetry",
      status: "upcoming",
      registrations: 0,
      capacity: 200,
      image: "/hindi-day-banner.png",
      registrationLink: "https://forms.google.com/hindi-day",
      culturalTheme: "🌸",
      highlights: ["Cultural Performances", "Speech Competition", "Traditional Dance", "Award Ceremony"],
      highlightsHindi: ["सांस्कृतिक प्रस्तुति", "भाषण प्रतियोगिता", "पारंपरिक नृत्य", "पुरस्कार समारोह"],
      coordinator: "Aryan Sharma",
      coordinatorHindi: "आर्यन शर्मा",
      prizes: ["Hindi Excellence Award", "Cultural Performance Trophy", "Best Speaker Award"],
    },
    {
      id: 3,
      title: "रंगोत्सव - Rangotsav'26",
      titleHindi: "रंगोत्सव",
      description: "The campus is preparing for its most colorful chapter yet. Get ready for Rangotsav'26",
      descriptionHindi: "कैंपस अपने सबसे रंगीन अध्याय के लिए तैयारी कर रहा है। रंगोत्सव'26 के लिए तैयार हो जाइए",
      date: "March 2026 (Tentative)",
      time: "TBA",
      venue: "TBA",
      venueHindi: "TBA",
      category: "celebration",
      status: "upcoming",
      registrations: 0,
      capacity: 120,
      image: "/language-competition-banner.png",
      registrationLink: "https://forms.google.com/language-competition",
      culturalTheme: "🎉",
      highlights: ["Grammar Quiz", "Literature Questions", "Vocabulary Test", "Essay Writing"],
      highlightsHindi: ["व्याकरण प्रश्नोत्तरी", "साहित्य प्रश्न", "शब्द भंडार परीक्षा", "निबंध लेखन"],
      coordinator: "Priya Gupta",
      coordinatorHindi: "प्रिया गुप्ता",
      prizes: ["Winner Trophy", "Runner-up Medal", "Participation Certificates"],
    },
    {
      id: 4,
      title: "काव्यमंच - Kavyamanch",
      titleHindi: "काव्यमंच",
      description: "A community for poetry lovers, where everyone can share their compositions",
      descriptionHindi: "कविता-प्रेमियों का समुदाय, जहाँ सब अपनी रचनाएँ साझा कर सकते हैं",
      date: "2025-02-20",
      time: "3:00 PM",
      venue: "Library Auditorium, VIT Bhopal",
      venueHindi: "पुस्तकालय सभागार, VIT भोपाल",
      category: "literary",
      status: "completed",
      registrations: 45,
      capacity: 80,
      image: "/literary-meet-banner.png",
      registrationLink: "https://forms.google.com/literary-meet",
      culturalTheme: "📖",
      highlights: ["Author Interaction", "Book Discussion", "Q&A Session", "Book Signing"],
      highlightsHindi: ["लेखक संवाद", "पुस्तक चर्चा", "प्रश्नोत्तर सत्र", "पुस्तक हस्ताक्षर"],
      coordinator: "Rahul Verma",
      coordinatorHindi: "राहुल वर्मा",
      prizes: ["Book Collection", "Author Signed Books", "Literary Appreciation Certificates"],
    },
    {
      id: 5,
      title: "रंगोत्सव - Rangotsav'25",
      titleHindi: "रंगोत्सव",
      description: "Rangotsav'25: One festival, countless memories",
      descriptionHindi: "रंगोत्सव'25: एक उत्सव, अनगिनत यादें",
      date: "2025-03-19",
      time: "7:00 PM",
      venue: "Open Air Theatre, VIT Bhopal",
      venueHindi: "खुला हवा रंगमंच, VIT भोपाल",
      category: "cultural",
      status: "completed",
      registrations: 123,
      capacity: 150,
      image: "/cultural-evening-banner.png",
      registrationLink: "https://forms.google.com/cultural-evening",
      culturalTheme: "🎉",
      highlights: ["Traditional Dance", "Folk Songs", "Drama Performance", "Cultural Fashion Show"],
      highlightsHindi: ["पारंपरिक नृत्य", "लोक गीत", "नाटक प्रस्तुति", "सांस्कृतिक फैशन शो"],
      coordinator: "Anita Singh",
      coordinatorHindi: "अनिता सिंह",
      prizes: ["Best Performance Award", "Cultural Ambassador Title", "Traditional Gifts"],
    },
  ]

  const categories = [
    { value: "all", label: "All Events", labelHindi: "सभी कार्यक्रम", icon: "🎯" },
    { value: "poetry", label: "Poetry", labelHindi: "कविता", icon: "🌸" },
    { value: "competition", label: "Competition", labelHindi: "प्रतियोगिता", icon: "🏆" },
    { value: "celebration", label: "Celebration", labelHindi: "समारोह", icon: "🎉" },
    { value: "literary", label: "Literary", labelHindi: "साहित्यिक", icon: "📚" },
    { value: "cultural", label: "Cultural", labelHindi: "सांस्कृतिक", icon: "🎭" },
    { value: "entertainment", label: "Entertainment", labelHindi: "मनोरंजन", icon: "😄" },
  ]

  const filteredEvents = events.filter((event) => {
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory
    const matchesStatus = selectedStatus === "all" || event.status === selectedStatus
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.titleHindi.includes(searchTerm) ||
      event.descriptionHindi.includes(searchTerm)
    return matchesCategory && matchesStatus && matchesSearch
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-gradient-to-r from-green-500 to-emerald-500"
      case "ongoing":
        return "bg-gradient-to-r from-blue-500 to-cyan-500"
      case "completed":
        return "bg-gradient-to-r from-gray-500 to-slate-500"
      default:
        return "bg-gradient-to-r from-gray-500 to-slate-500"
    }
  }

  const getCategoryIcon = (category: string) => {
    const cat = categories.find((c) => c.value === category)
    return cat ? cat.icon : "🎯"
  }

  const handleRegistration = (eventId: number) => {
    // Handle registration logic here
    console.log("Registering for event:", eventId, registrationData)
    // Reset form
    setRegistrationData({
      name: "",
      email: "",
      phone: "",
      rollNumber: "",
      department: "",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Decorative Pattern Overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/indian-mandala-pattern.png')] bg-repeat opacity-20"></div>
      </div>

      {/* Header */}
      <header className="relative bg-white/95 backdrop-blur-md shadow-xl border-b-4 border-gradient-to-r from-green-300 to-emerald-300">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100/30 to-emerald-100/30"></div>
        <div className="container mx-auto px-4 py-6 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link href="/">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-green-300 text-green-600 hover:bg-green-50 bg-transparent font-medium"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    All Events
                  </h1>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent hindi-text">
                    सभी कार्यक्रम
                  </h2>
                  <p className="text-lg text-gray-700 font-medium">VIT Bhopal Hindi Club Events</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Filters and Search */}
        <div className="mb-12">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Filter className="w-6 h-6 mr-3 text-green-500" />
                Filter & Search Events
                <span className="hindi-text ml-4">कार्यक्रम खोजें और फ़िल्टर करें</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search events by name, description, or coordinator..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 text-lg py-3"
                  />
                </div>
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="w-full lg:w-48">
                    <SelectValue placeholder="Filter by Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="upcoming">Upcoming</SelectItem>
                    <SelectItem value="ongoing">Ongoing</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Category Filter Buttons */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Button
                    key={category.value}
                    variant={selectedCategory === category.value ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`${
                      selectedCategory === category.value
                        ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                        : "border-green-300 text-green-600 hover:bg-green-50 bg-transparent"
                    } font-medium`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.label}
                    <span className="ml-2 hindi-text text-sm">({category.labelHindi})</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <Card
              key={event.id}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white/90 backdrop-blur-sm border-0 overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge className={`${getStatusColor(event.status)} text-white font-semibold`}>
                    {event.status === "upcoming" ? "Upcoming" : event.status === "ongoing" ? "Ongoing" : "Completed"}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 text-4xl">{event.culturalTheme}</div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(event.date).toLocaleDateString("en-IN")}</span>
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-green-600 transition-colors leading-tight">
                  {event.title}
                </CardTitle>
                <CardDescription className="hindi-text text-base font-medium text-gray-700">
                  {event.titleHindi}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 mb-2 leading-relaxed">{event.description}</p>
                <p className="text-gray-600 mb-4 leading-relaxed hindi-text text-sm">{event.descriptionHindi}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-3 text-green-500" />
                    <span className="font-medium">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-3 text-emerald-500" />
                    <div>
                      <p className="font-medium">{event.venue}</p>
                      <p className="text-sm hindi-text">{event.venueHindi}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-3 text-teal-500" />
                    <span className="font-medium">
                      {event.registrations}/{event.capacity} registered
                    </span>
                  </div>
                </div>

                {/* Registration Progress */}
                {event.status !== "completed" && (
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-gray-600">Registration Progress</span>
                      <span className="text-gray-600">{Math.round((event.registrations / event.capacity) * 100)}%</span>
                    </div>
                    <Progress value={(event.registrations / event.capacity) * 100} className="h-2" />
                  </div>
                )}

                {/* Event Highlights */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Event Highlights:</p>
                  <div className="grid grid-cols-2 gap-1">
                    {event.highlights.slice(0, 4).map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-600">
                        <Star className="w-3 h-3 mr-1 text-yellow-500" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Coordinator */}
                <div className="mb-6 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                  <p className="text-sm font-semibold text-gray-700 mb-1">Event Coordinator:</p>
                  <p className="text-sm text-green-600 font-medium">{event.coordinator}</p>
                  <p className="text-xs text-green-600 hindi-text">{event.coordinatorHindi}</p>
                </div>

                {/* Action Buttons */}
                {event.status === "upcoming" || event.status === "ongoing" ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 rounded-xl transform hover:scale-105 transition-all duration-300">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Register Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md bg-white/95 backdrop-blur-sm">
                      <DialogHeader>
                        <DialogTitle className="text-xl">Register for {event.titleHindi}</DialogTitle>
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
                            onChange={(e) => setRegistrationData({ ...registrationData, rollNumber: e.target.value })}
                            placeholder="Enter your roll number"
                          />
                        </div>
                        <div>
                          <Label htmlFor="department">Department</Label>
                          <Input
                            id="department"
                            value={registrationData.department}
                            onChange={(e) => setRegistrationData({ ...registrationData, department: e.target.value })}
                            placeholder="Enter your department"
                          />
                        </div>
                        <Button
                          onClick={() => handleRegistration(event.id)}
                          className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                        >
                          Complete Registration
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <Button
                    variant="outline"
                    className="w-full border-2 border-green-300 text-green-600 hover:bg-green-50 font-semibold py-3 rounded-xl bg-transparent"
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Give Feedback
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No Events Found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or filters</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 shadow-2xl">
            <CardContent className="p-12 text-center">
              <div className="mb-6">
                <Trophy className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-4xl font-bold mb-4">Want to Organize an Event?</h3>
                <h4 className="text-3xl font-bold mb-6 hindi-text">कार्यक्रम आयोजित करना चाहते हैं?</h4>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                  Join our organizing committee and help create memorable cultural experiences for the VIT Bhopal
                  community
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/portals/team">
                  <Button
                    size="lg"
                    className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Join Organizing Team
                  </Button>
                </Link>
                <Link href="/portals/public">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 bg-transparent"
                  >
                    Suggest an Event
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
