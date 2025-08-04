"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Calendar,
  Users,
  BarChart3,
  QrCode,
  Plus,
  Edit,
  Trash2,
  Eye,
  Download,
  Settings,
  Home,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

export default function AdminPortal() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "कविता संध्या - शब्दों का जादू",
      description: "VIT भोपाल के छात्रों द्वारा हिंदी कविता की मधुर प्रस्तुति",
      date: "2024-02-15",
      status: "upcoming",
      registrations: 67,
      venue: "सभागार A, VIT भोपाल",
    },
    {
      id: 2,
      title: "हिंदी दिवस महोत्सव",
      description: "राष्ट्रभाषा के सम्मान में सांस्कृतिक कार्यक्रम",
      date: "2024-01-14",
      status: "completed",
      registrations: 156,
      venue: "मुख्य सभागार, VIT भोपाल",
    },
    {
      id: 3,
      title: "भाषा प्रतियोगिता - ज्ञान परीक्षा",
      description: "हिंदी व्याकरण और साहित्य की प्रतियोगिता",
      date: "2024-01-28",
      status: "ongoing",
      registrations: 89,
      venue: "सम्मेलन कक्ष, VIT भोपाल",
    },
  ])

  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: "",
    venue: "",
    category: "upcoming",
  })

  const handleCreateEvent = () => {
    const event = {
      id: events.length + 1,
      ...newEvent,
      status: newEvent.category,
      registrations: 0,
    }
    setEvents([...events, event])
    setNewEvent({ title: "", description: "", date: "", venue: "", category: "upcoming" })
  }

  const handleQRScan = () => {
    window.open("https://vercel.com/garvanands-projects/hindi-event-qr", "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-rose-50 to-pink-50">
      {/* Decorative Elements */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/indian-mandala-pattern.png')] bg-repeat opacity-20"></div>
      </div>

      {/* Header */}
      <header className="relative bg-white/90 backdrop-blur-md shadow-lg border-b-4 border-gradient-to-r from-orange-300 to-rose-300">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/20 to-rose-100/20"></div>
        <div className="container mx-auto px-4 py-6 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-rose-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl hindi-text">प्र</span>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-orange-600" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent hindi-text">
                  प्रशासन पोर्टल
                </h1>
                <p className="text-lg text-gray-700 font-medium hindi-text">हिंदी क्लब प्रबंधन</p>
                <p className="text-sm text-orange-600 italic">"व्यवस्था में ही सफलता है"</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  <Home className="w-4 h-4 mr-2" />
                  मुख्य पृष्ठ
                </Button>
              </Link>
              <Button
                variant="outline"
                size="sm"
                className="border-rose-300 text-rose-600 hover:bg-rose-50 bg-transparent"
              >
                <Settings className="w-4 h-4 mr-2" />
                सेटिंग्स
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 hindi-text">कुल कार्यक्रम</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                    {events.length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-rose-500 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 hindi-text">कुल पंजीकरण</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {events.reduce((sum, event) => sum + event.registrations, 0)}
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 hindi-text">सक्रिय सदस्य</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    500
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 hindi-text">आगामी कार्यक्रम</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {events.filter((e) => e.status === "upcoming").length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="events" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/50 backdrop-blur-sm">
            <TabsTrigger
              value="events"
              className="hindi-text data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-rose-500 data-[state=active]:text-white"
            >
              कार्यक्रम प्रबंधन
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="hindi-text data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
            >
              विश्लेषण
            </TabsTrigger>
            <TabsTrigger
              value="sheets"
              className="hindi-text data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white"
            >
              Google Sheets
            </TabsTrigger>
            <TabsTrigger
              value="qr"
              className="hindi-text data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
            >
              QR स्कैनर
            </TabsTrigger>
          </TabsList>

          {/* Event Management */}
          <TabsContent value="events" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-gray-800 hindi-text">कार्यक्रम प्रबंधन</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white shadow-lg">
                    <Plus className="w-4 h-4 mr-2" />
                    नया कार्यक्रम
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md bg-white/95 backdrop-blur-sm">
                  <DialogHeader>
                    <DialogTitle className="hindi-text text-xl">नया कार्यक्रम बनाएं</DialogTitle>
                    <DialogDescription className="hindi-text">हिंदी क्लब कैलेंडर में नया कार्यक्रम जोड़ें</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title" className="hindi-text">
                        कार्यक्रम का नाम
                      </Label>
                      <Input
                        id="title"
                        value={newEvent.title}
                        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                        placeholder="कार्यक्रम का नाम दर्ज करें"
                        className="hindi-text"
                      />
                    </div>
                    <div>
                      <Label htmlFor="description" className="hindi-text">
                        विवरण
                      </Label>
                      <Textarea
                        id="description"
                        value={newEvent.description}
                        onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                        placeholder="कार्यक्रम का विवरण दर्ज करें"
                        className="hindi-text"
                      />
                    </div>
                    <div>
                      <Label htmlFor="date" className="hindi-text">
                        दिनांक
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={newEvent.date}
                        onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="venue" className="hindi-text">
                        स्थान
                      </Label>
                      <Input
                        id="venue"
                        value={newEvent.venue}
                        onChange={(e) => setNewEvent({ ...newEvent, venue: e.target.value })}
                        placeholder="स्थान दर्ज करें"
                        className="hindi-text"
                      />
                    </div>
                    <div>
                      <Label htmlFor="category" className="hindi-text">
                        श्रेणी
                      </Label>
                      <Select
                        value={newEvent.category}
                        onValueChange={(value) => setNewEvent({ ...newEvent, category: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="upcoming" className="hindi-text">
                            आगामी
                          </SelectItem>
                          <SelectItem value="ongoing" className="hindi-text">
                            चालू
                          </SelectItem>
                          <SelectItem value="past" className="hindi-text">
                            संपन्न
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      onClick={handleCreateEvent}
                      className="w-full bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 hindi-text"
                    >
                      कार्यक्रम बनाएं
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid gap-6">
              {events.map((event) => (
                <Card
                  key={event.id}
                  className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-3">
                          <h3 className="text-2xl font-semibold hindi-text text-gray-800">{event.title}</h3>
                          <Badge
                            variant={
                              event.status === "upcoming"
                                ? "default"
                                : event.status === "ongoing"
                                  ? "secondary"
                                  : "outline"
                            }
                            className={`hindi-text ${
                              event.status === "upcoming"
                                ? "bg-gradient-to-r from-green-500 to-emerald-500"
                                : event.status === "ongoing"
                                  ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                                  : "bg-gradient-to-r from-gray-500 to-slate-500"
                            }`}
                          >
                            {event.status === "upcoming" ? "आगामी" : event.status === "ongoing" ? "चालू" : "संपन्न"}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-4 hindi-text leading-relaxed">{event.description}</p>
                        <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-orange-500" />
                            <span>दिनांक: {new Date(event.date).toLocaleDateString("hi-IN")}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-rose-500" />
                            <span className="hindi-text">पंजीकरण: {event.registrations}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl">📍</span>
                            <span className="hindi-text">{event.venue}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-green-300 text-green-600 hover:bg-green-50 bg-transparent"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-red-300 text-red-600 hover:bg-red-50 bg-transparent"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 hindi-text">विश्लेषण डैशबोर्ड</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center hindi-text text-xl">
                    <BarChart3 className="w-5 h-5 mr-3 text-blue-500" />
                    कार्यक्रम सहभागिता
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {events.map((event) => (
                      <div key={event.id} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium hindi-text text-gray-700">{event.title}</span>
                          <span className="text-sm text-gray-600">{event.registrations}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className="bg-gradient-to-r from-orange-500 to-rose-500 h-3 rounded-full transition-all duration-500"
                            style={{ width: `${Math.min((event.registrations / 200) * 100, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="hindi-text text-xl">मासिक आंकड़े</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-orange-50 to-rose-50 rounded-lg">
                      <span className="hindi-text font-medium">इस महीने के कार्यक्रम</span>
                      <span className="text-2xl font-bold text-orange-600">3</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                      <span className="hindi-text font-medium">नए पंजीकरण</span>
                      <span className="text-2xl font-bold text-blue-600">127</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                      <span className="hindi-text font-medium">सक्रिय प्रतिभागी</span>
                      <span className="text-2xl font-bold text-green-600">289</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                      <span className="hindi-text font-medium">प्रतिक्रिया उत्तर</span>
                      <span className="text-2xl font-bold text-purple-600">198</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Google Sheets Integration */}
          <TabsContent value="sheets" className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 hindi-text">Google Sheets एकीकरण</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="hindi-text text-xl">कार्यक्रम पंजीकरण</CardTitle>
                  <CardDescription className="hindi-text">Google Sheets के साथ पंजीकरण डेटा सिंक करें</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white">
                    <Download className="w-4 h-4 mr-2" />
                    पंजीकरण डेटा निर्यात करें
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-green-300 text-green-600 hover:bg-green-50 hindi-text bg-transparent"
                  >
                    Google Sheets के साथ सिंक करें
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="hindi-text text-xl">प्रतिक्रिया डेटा</CardTitle>
                  <CardDescription className="hindi-text">कार्यक्रम प्रतिक्रिया और उत्तरों का प्रबंधन करें</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                    <Download className="w-4 h-4 mr-2" />
                    प्रतिक्रिया डेटा निर्यात करें
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-blue-300 text-blue-600 hover:bg-blue-50 hindi-text bg-transparent"
                  >
                    उत्तर देखें
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* QR Scanner */}
          <TabsContent value="qr" className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 hindi-text">QR कोड स्कैनर</h2>
            <Card className="max-w-md mx-auto bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center hindi-text text-2xl">
                  <QrCode className="w-8 h-8 mr-3 text-purple-500" />
                  कार्यक्रम QR स्कैनर
                </CardTitle>
                <CardDescription className="hindi-text text-base">
                  कार्यक्रम चेक-इन और उपस्थिति ट्रैकिंग के लिए QR कोड स्कैन करें
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="w-40 h-40 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
                  <QrCode className="w-20 h-20 text-purple-400" />
                </div>
                <Button
                  onClick={handleQRScan}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 text-lg hindi-text shadow-lg"
                >
                  QR स्कैनर खोलें
                </Button>
                <p className="text-xs text-gray-500 hindi-text">यह QR स्कैनिंग इंटरफेस पर रीडायरेक्ट करेगा</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
