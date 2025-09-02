"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
import {
  ArrowLeft,
  Camera,
  Calendar,
  Users,
  Search,
  Filter,
  Download,
  Share2,
  Heart,
  Eye,
  ZoomIn,
  Play,
  ImageIcon,
  Video,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedYear, setSelectedYear] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [viewMode, setViewMode] = useState("grid")

  const galleryItems = [
    {
      id: 1,
      title: "Kavyanjali",
      titleHindi: "हिंदी दिवस महोत्सव 2023",
      description: "A magnificent celebration of our national language with cultural performances",
      descriptionHindi: "सांस्कृतिक प्रस्तुतियों के साथ राष्ट्रभाषा का भव्य समारोह",
      date: "2023-09-14",
      category: "celebration",
      type: "image",
      images: [
        "/hindi-day-celebration-students.png",
        "/cultural-performance-stage.png",
        "/hindi-student-banners.png",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
      ],
      participants: 200,
      photographer: "VIT Media Team",
      likes: 156,
      views: 1240,
      featured: true,
    },
    {
      id: 2,
      title: "Poetry Competition - Words of Wisdom",
      titleHindi: "कविता प्रतियोगिता - ज्ञान के शब्द",
      description: "Students showcasing their poetic talents in Hindi literature",
      descriptionHindi: "छात्रों द्वारा हिंदी साहित्य में अपनी काव्य प्रतिभा का प्रदर्शन",
      date: "2024-01-15",
      category: "competition",
      type: "image",
      images: [
        "/poetry-competition-students.png",
        "/student-reciting-poetry.png",
        "/placeholder-q8lg9.png",
        "/placeholder.svg",
      ],
      participants: 85,
      photographer: "Hindi Club Team",
      likes: 89,
      views: 567,
      featured: false,
    },
    {
      id: 3,
      title: "Cultural Evening - Traditional Performances",
      titleHindi: "सांस्कृतिक संध्या - पारंपरिक प्रस्तुतियां",
      description: "An evening filled with traditional dance, music, and theatrical performances",
      descriptionHindi: "पारंपरिक नृत्य, संगीत और नाट्य प्रस्तुतियों से भरी संध्या",
      date: "2023-11-20",
      category: "cultural",
      type: "video",
      thumbnail: "/cultural-performance-stage.png",
      duration: "45:30",
      participants: 150,
      photographer: "Cultural Team",
      likes: 234,
      views: 1890,
      featured: true,
    },
    {
      id: 4,
      title: "Literary Meet with Renowned Authors",
      titleHindi: "प्रसिद्ध लेखकों के साथ साहित्यिक मेल",
      description: "Interactive session with famous Hindi authors and poets",
      descriptionHindi: "प्रसिद्ध हिंदी लेखकों और कवियों के साथ संवादात्मक सत्र",
      date: "2023-10-05",
      category: "literary",
      type: "image",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      participants: 120,
      photographer: "Literary Committee",
      likes: 67,
      views: 445,
      featured: false,
    },
    {
      id: 5,
      title: "Freshers Welcome - Hindi Style",
      titleHindi: "नवागंतुक स्वागत - हिंदी शैली",
      description: "Welcoming new students with traditional Hindi cultural programs",
      descriptionHindi: "पारंपरिक हिंदी सांस्कृतिक कार्यक्रमों के साथ नए छात्रों का स्वागत",
      date: "2023-08-15",
      category: "welcome",
      type: "image",
      images: ["/hindi-cultural-activities-students.png", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      participants: 300,
      photographer: "Welcome Committee",
      likes: 178,
      views: 892,
      featured: false,
    },
    {
      id: 6,
      title: "Workshop on Hindi Calligraphy",
      titleHindi: "हिंदी सुलेख पर कार्यशाला",
      description: "Learning the art of beautiful Hindi handwriting and calligraphy",
      descriptionHindi: "सुंदर हिंदी लिखावट और सुलेख की कला सीखना",
      date: "2024-02-10",
      category: "workshop",
      type: "image",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      participants: 45,
      photographer: "Workshop Team",
      likes: 34,
      views: 234,
      featured: false,
    },
  ]

  const categories = [
    { value: "all", label: "All Categories", labelHindi: "सभी श्रेणियां", icon: "🎯", count: galleryItems.length },
    { value: "celebration", label: "Celebrations", labelHindi: "समारोह", icon: "🎉", count: 1 },
    { value: "competition", label: "Competitions", labelHindi: "प्रतियोगिताएं", icon: "🏆", count: 1 },
    { value: "cultural", label: "Cultural Events", labelHindi: "सांस्कृतिक कार्यक्रम", icon: "🎭", count: 1 },
    { value: "literary", label: "Literary Meets", labelHindi: "साहित्यिक मेल", icon: "📚", count: 1 },
    { value: "workshop", label: "Workshops", labelHindi: "कार्यशालाएं", icon: "🛠️", count: 1 },
    { value: "welcome", label: "Welcome Events", labelHindi: "स्वागत कार्यक्रम", icon: "👋", count: 1 },
  ]

  const years = [
    { value: "all", label: "All Years" },
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
  ]

  const filteredItems = galleryItems.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    const matchesYear = selectedYear === "all" || new Date(item.date).getFullYear().toString() === selectedYear
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.titleHindi.includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesYear && matchesSearch
  })

  const featuredItems = galleryItems.filter((item) => item.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      {/* Decorative Pattern Overlay */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[url('/indian-mandala-pattern.png')] bg-repeat"></div>
      </div>

      {/* Header */}
      <header className="relative bg-white/95 backdrop-blur-md shadow-lg border-b border-purple-200/50">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/30 to-pink-50/30"></div>
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link href="/">
                <Button
                  variant="outline"
                  className="border-purple-300 text-purple-600 hover:bg-purple-50 bg-transparent font-medium"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Photo Gallery
                  </h1>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hindi-text">
                    फोटो गैलरी
                  </h2>
                  <p className="text-lg text-gray-700 font-medium">VIT Bhopal Hindi Club Memories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Moments</h2>
            <h3 className="text-3xl font-bold text-gray-800 hindi-text mb-6">विशेष क्षण</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Highlighting our most memorable and impactful cultural celebrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredItems.map((item) => (
              <Card
                key={item.id}
                className="group overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative">
                  <Image
                    src={item.type === "video" ? item.thumbnail : item.images[0]}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    Featured
                  </Badge>
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                        <Play className="w-8 h-8 text-purple-600 ml-1" />
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-sm hindi-text">{item.titleHindi}</p>
                  </div>
                  <div className="absolute bottom-4 right-4 flex items-center space-x-4 text-white text-sm">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{item.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{item.views}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Filters and Search */}
        <div className="mb-12">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Filter className="w-6 h-6 mr-3 text-purple-500" />
                Filter & Search Gallery
                <span className="hindi-text ml-4">गैलरी खोजें और फ़िल्टर करें</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search by event name, description, or date..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 text-lg py-3"
                  />
                </div>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="w-full lg:w-32">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year.value} value={year.value}>
                        {year.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="flex gap-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    onClick={() => setViewMode("grid")}
                    className={viewMode === "grid" ? "bg-purple-500 text-white" : ""}
                  >
                    <ImageIcon className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    onClick={() => setViewMode("list")}
                    className={viewMode === "list" ? "bg-purple-500 text-white" : ""}
                  >
                    <Video className="w-4 h-4" />
                  </Button>
                </div>
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
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                        : "border-purple-300 text-purple-600 hover:bg-purple-50 bg-transparent"
                    } font-medium`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.label}
                    <span className="ml-2 hindi-text text-sm">({category.labelHindi})</span>
                    <Badge variant="secondary" className="ml-2">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Gallery Grid */}
        <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-8"}>
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className={`group overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                viewMode === "list" ? "flex" : ""
              }`}
            >
              <div className={`relative ${viewMode === "list" ? "w-1/3" : ""}`}>
                <Image
                  src={item.type === "video" ? item.thumbnail : item.images[0]}
                  alt={item.title}
                  width={400}
                  height={300}
                  className={`object-cover group-hover:scale-105 transition-transform duration-500 ${
                    viewMode === "list" ? "w-full h-full" : "w-full h-48"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-6 h-6 text-purple-600 ml-1" />
                    </div>
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <Badge
                    className={`${
                      item.category === "celebration"
                        ? "bg-gradient-to-r from-yellow-500 to-orange-500"
                        : item.category === "competition"
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                          : item.category === "cultural"
                            ? "bg-gradient-to-r from-purple-500 to-pink-500"
                            : "bg-gradient-to-r from-green-500 to-emerald-500"
                    } text-white`}
                  >
                    {categories.find((c) => c.value === item.category)?.icon}{" "}
                    {categories.find((c) => c.value === item.category)?.label}
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center space-x-3 text-white text-sm">
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>{item.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{item.views}</span>
                  </div>
                </div>
              </div>

              <div className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(item.date).toLocaleDateString("en-IN")}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{item.participants}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                <h4 className="text-lg font-semibold text-gray-700 mb-3 hindi-text">{item.titleHindi}</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                <p className="text-gray-600 mb-6 leading-relaxed hindi-text text-sm">{item.descriptionHindi}</p>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <span>By {item.photographer}</span>
                  </div>
                  <div className="flex space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-purple-300 text-purple-600 hover:bg-purple-50 bg-transparent"
                        >
                          <ZoomIn className="w-4 h-4 mr-1" />
                          View
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <DialogHeader>
                          <DialogTitle>{item.title}</DialogTitle>
                          <DialogDescription className="hindi-text">{item.titleHindi}</DialogDescription>
                        </DialogHeader>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                          {item.images?.map((image, index) => (
                            <Image
                              key={index}
                              src={image || "/placeholder.svg"}
                              alt={`${item.title} ${index + 1}`}
                              width={200}
                              height={150}
                              className="w-full h-32 object-cover rounded-lg"
                            />
                          ))}
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-green-300 text-green-600 hover:bg-green-50 bg-transparent"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Save
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent"
                    >
                      <Share2 className="w-4 h-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📸</div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No Photos Found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or filters</p>
          </div>
        )}

        {/* Statistics */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-2xl">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h3 className="text-4xl font-bold mb-4">Gallery Statistics</h3>
                <h4 className="text-3xl font-bold mb-6 hindi-text">गैलरी आंकड़े</h4>
              </div>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-lg">Photos Captured</div>
                  <div className="text-sm hindi-text">कैप्चर की गई तस्वीरें</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-lg">Events Documented</div>
                  <div className="text-sm hindi-text">प्रलेखित कार्यक्रम</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">25+</div>
                  <div className="text-lg">Video Recordings</div>
                  <div className="text-sm hindi-text">वीडियो रिकॉर्डिंग</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">5K+</div>
                  <div className="text-lg">Total Views</div>
                  <div className="text-sm hindi-text">कुल दृश्य</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <Card className="bg-gradient-to-br from-orange-50 to-rose-50 border-0 shadow-lg">
            <CardContent className="p-12 text-center">
              <div className="mb-6">
                <Camera className="w-16 h-16 mx-auto mb-4 text-purple-500" />
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Share Your Moments</h3>
                <h4 className="text-2xl font-bold text-gray-700 hindi-text mb-6">अपने पल साझा करें</h4>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Have photos from our events? We'd love to feature them in our gallery! Share your captures with the
                  Hindi Club community.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Submit Photos
                </Button>
                <Link href="/events">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 font-semibold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 bg-transparent"
                  >
                    Upcoming Events
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
