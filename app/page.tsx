"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Calendar,
  Camera,
  MapPin,
  Clock,
  ExternalLink,
  Instagram,
  Linkedin,
  BookOpen,
  Users,
  Star,
  Heart,
  Sparkles,
  Phone,
  Mail,
  GraduationCap,
  Target,
  Globe,
  Menu,
  X,
  ChevronDown,
  Award,
  Shield,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    const handleSectionChange = () => {
      const sections = ["home", "about", "team", "events", "gallery"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("scroll", handleSectionChange)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("scroll", handleSectionChange)
    }
  }, [])

  const events = [
    {
      id: 1,
      title: "Poetry Evening",
      titleHindi: "कविता संध्या",
      description: "An enchanting evening of Hindi poetry recitation",
      date: "2024-02-15",
      time: "6:00 PM",
      venue: "Auditorium A",
      category: "upcoming",
      registrations: 67,
      capacity: 100,
      culturalTheme: "🌸",
    },
    {
      id: 2,
      title: "Hindi Day Celebration",
      titleHindi: "हिंदी दिवस समारोह",
      description: "Grand celebration honoring our national language",
      date: "2024-09-14",
      time: "4:00 PM",
      venue: "Main Auditorium",
      category: "upcoming",
      registrations: 156,
      capacity: 200,
      culturalTheme: "🏛️",
    },
    {
      id: 3,
      title: "Language Competition",
      titleHindi: "भाषा प्रतियोगिता",
      description: "Inter-departmental Hindi language competition",
      date: "2024-01-28",
      time: "2:00 PM",
      venue: "Conference Hall",
      category: "ongoing",
      registrations: 89,
      capacity: 120,
      culturalTheme: "📚",
    },
  ]

  const coreTeam = [
    {
      name: "Dr. Rajeev Saxena",
      nameHindi: "डॉ. राजीव सक्सेना",
      position: "Faculty Coordinator",
      positionHindi: "संकाय समन्वयक",
      image: "/faculty-coordinator.png",
      department: "Department of Humanities",
      qualification: "Ph.D. in Hindi Literature",
      experience: "15+ years",
      email: "priya.sharma@vitbhopal.ac.in",
      phone: "+91 755 2970 101",
      quote: "Language is the soul of culture",
      quoteHindi: "भाषा संस्कृति की आत्मा है",
      achievements: ["Best Faculty Award 2023", "Published 25+ Research Papers", "Hindi Sahitya Samman"],
    },
    {
      name: "Aryan Sharma",
      nameHindi: "आर्यन शर्मा",
      position: "President",
      positionHindi: "अध्यक्ष",
      image: "/indian-student-president.png",
      branch: "Computer Science Engineering",
      year: "Final Year",
      rollNumber: "21BCE1234",
      email: "aryan.sharma2021@vitbhopal.ac.in",
      phone: "+91 98765 43210",
      quote: "Leadership lies in service",
      quoteHindi: "नेतृत्व सेवा में है",
      achievements: ["Dean's List 2023", "Best Student Leader", "Cultural Excellence Award"],
      social: {
        instagram: "https://instagram.com/aryan",
        linkedin: "https://linkedin.com/in/aryan",
      },
    },
    {
      name: "Dheeraj Saraswat",
      nameHindi: "धीरज सारस्वत",
      position: "Vice President",
      positionHindi: "उपाध्यक्ष",
      image: "/indian-student-vice-president.png",
      branch: "Computer Science & Engineering - Core",
      year: "Third Year",
      rollNumber: "21BEC2345",
      email: "priya.gupta2021@vitbhopal.ac.in",
      phone: "+91 98765 43211",
      quote: "Strength lies in cooperation",
      quoteHindi: "सहयोग में शक्ति है",
      achievements: ["Academic Excellence", "Cultural Ambassador", "Poetry Competition Winner"],
      social: {
        instagram: "https://instagram.com/priya",
        twitter: "https://twitter.com/priya",
      },
    },
    {
      name: "Garv Anand",
      nameHindi: "गर्व आनंद",
      position: "General Secretary",
      positionHindi: "महासचिव",
      image: "/indian-student-secretary.png",
      branch: "Computer Science & Engineering - AI & ML",
      year: "Third Year",
      rollNumber: "23BAI10605",
      email: "garv.23bai10605@vitbhopal.ac.in",
      phone: "+91 8054182892",
      quote: "Success lies in organization",
      quoteHindi: "व्यवस्था में सफलता है",
      achievements: ["Best Organizer Award", "Event Management Excellence", "Student Council Member"],
      social: {
        linkedin: "https://linkedin.com/in/rahul",
        github: "https://github.com/rahul",
      },
    },
  ]

  const photoAlbums = [
    {
      title: "Hindi Day 2023",
      titleHindi: "हिंदी दिवस 2023",
      images: ["/hindi-day-celebration-students.png", "/cultural-performance-stage.png", "/hindi-student-banners.png"],
      description: "Grand celebration honoring our national language",
      eventDate: "September 14, 2023",
      participants: 200,
    },
    {
      title: "Poetry Competition",
      titleHindi: "कविता प्रतियोगिता",
      images: ["/poetry-competition-students.png", "/student-reciting-poetry.png", "/placeholder-q8lg9.png"],
      description: "Showcasing the poetic talents of our students",
      eventDate: "January 15, 2024",
      participants: 85,
    },
  ]

  const achievements = [
    {
      title: "Best Cultural Club",
      count: "2023",
      description: "Awarded by VIT Bhopal",
      icon: <Award className="w-8 h-8" />,
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Active Members",
      count: "500+",
      description: "Growing community",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-400 to-purple-500",
    },
    {
      title: "Events Organized",
      count: "50+",
      description: "Cultural programs",
      icon: <Calendar className="w-8 h-8" />,
      color: "from-green-400 to-emerald-500",
    },
    {
      title: "Years of Excellence",
      count: "5+",
      description: "Serving VIT Bhopal",
      icon: <Star className="w-8 h-8" />,
      color: "from-pink-400 to-rose-500",
    },
  ]

  const navigationItems = [
    {
      title: "About",
      href: "#about",
      description: "Learn about our mission and vision",
      items: [
        { title: "Our Story", href: "#about", description: "History and foundation" },
        { title: "Mission & Vision", href: "#about", description: "Our goals and aspirations" },
        { title: "Achievements", href: "#about", description: "Awards and recognition" },
      ],
    },
    {
      title: "Team",
      href: "#team",
      description: "Meet our leadership and members",
      items: [
        { title: "Leadership", href: "#team", description: "Core team members" },
        { title: "All Members", href: "/team-members", description: "Complete member directory" },
        { title: "Faculty", href: "/team-members", description: "Faculty coordinators" },
      ],
    },
    {
      title: "Events",
      href: "#events",
      description: "Upcoming and past events",
      items: [
        { title: "Upcoming Events", href: "/events", description: "Join our upcoming programs" },
        { title: "Event Calendar", href: "/calendar", description: "View all scheduled events" },
        { title: "Past Events", href: "/events", description: "Our event history" },
      ],
    },
    {
      title: "Resources",
      href: "/literature",
      description: "Literature and learning materials",
      items: [
        { title: "Hindi Literature", href: "/literature", description: "Classic and modern works" },
        { title: "Gallery", href: "#gallery", description: "Event photos and memories" },
        { title: "Publications", href: "/literature", description: "Our published works" },
      ],
    },
  ]

  const portalItems = [
    {
      title: "Admin Portal",
      href: "/portals/admin",
      description: "Administrative dashboard",
      icon: <Shield className="w-4 h-4" />,
    },
    {
      title: "Team Portal",
      href: "/portals/team",
      description: "Team collaboration hub",
      icon: <Users className="w-4 h-4" />,
    },
    {
      title: "Student Portal",
      href: "/portals/public",
      description: "Student registration & info",
      icon: <GraduationCap className="w-4 h-4" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Enhanced Navigation */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
          isScrolled ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50" : "bg-transparent",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="w-15 h-15 bg-gradient-to-br from-orange-500 via-white to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 overflow-hidden">
                  <Image
                    src="/Logo.png"
                    alt="Hindi Club Logo"
                    width={48}
                    height={48}
                    className="object-contain w-13 h-13"
                    priority
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Sparkles className="w-2 h-2 text-orange-600" />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                  Hindi Club
                </h1>
                <p className="text-sm text-gray-600 font-medium">VIT Bhopal</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="space-x-2">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger
                      className={cn(
                        "bg-transparent hover:bg-gray-100/80 data-[state=open]:bg-gray-100/80 transition-all duration-200",
                        activeSection === item.href.replace("#", "") && "text-orange-600 bg-orange-50/80",
                      )}
                    >
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-80 p-6">
                        <div className="mb-4">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        <div className="space-y-3">
                          {item.items.map((subItem) => (
                            <NavigationMenuLink key={subItem.title} asChild>
                              <Link
                                href={subItem.href}
                                className="block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                              >
                                <div className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                                  {subItem.title}
                                </div>
                                <div className="text-sm text-gray-600 mt-1">{subItem.description}</div>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Portal Dropdown & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Portal Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="hidden sm:flex items-center space-x-2 border-gray-300 hover:border-orange-300 hover:bg-orange-50 transition-all duration-200 bg-transparent"
                  >
                    <span>Portals</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64">
                  {portalItems.map((portal) => (
                    <DropdownMenuItem key={portal.title} asChild>
                      <Link href={portal.href} className="flex items-center space-x-3 p-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white">
                          {portal.icon}
                        </div>
                        <div>
                          <div className="font-medium">{portal.title}</div>
                          <div className="text-sm text-gray-600">{portal.description}</div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg">
              <div className="p-6 space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <Link
                      href={item.href}
                      className="block font-medium text-gray-900 hover:text-orange-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                    <div className="pl-4 space-y-1">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block text-sm text-gray-600 hover:text-orange-600 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <div className="space-y-2">
                    {portalItems.map((portal) => (
                      <Link
                        key={portal.title}
                        href={portal.href}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-md flex items-center justify-center text-white">
                          {portal.icon}
                        </div>
                        <span className="font-medium">{portal.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Enhanced Hero Section */}

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-rose-50/30 to-pink-50/50"></div>
          <div className="absolute inset-0 bg-[url('/indian-mandala-pattern.png')] opacity-[0.02] bg-repeat"></div>

          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-300 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-rose-300 rounded-full animate-ping opacity-40"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-pink-300 rounded-full animate-bounce opacity-30"></div>

          {/* Gradient Orbs */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-orange-200/20 to-rose-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Hero Heading with Logo */}
            <div className="flex flex-col items-center mb-12 animate-fade-in-up">
              {/* Logo */}
              
              <br/>
              <br/>
              <br/>
              <div className="inline-flex items-center justify-center w-70 h-25 bg-gradient-to-br from-orange-500 via-rose-500 to-pink-500 rounded-2xl shadow-2xl mb-6 hover:scale-105 transition-transform duration-500">
                <img
                  src="/VIT-Bhopal-logo.png"
                  alt="VIT Bhopal Logo"
                  className="w-70 h-25 object-contain"
                  style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.10))" }}
                />
                
              </div>

              {/* Headings */}
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                Hindi Club
              </h1>
              <h2
                className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-rose-600 to-pink-600 bg-clip-text text-transparent hindi-text"
                style={{
                  fontFamily: "'Samarkan', Arial, sans-serif",
                  lineHeight: "1.5",
                  paddingTop: "0.75rem",
                  paddingBottom: "0.25rem",
                }}
              >
                हिंदी क्लब
              </h2>
              <div className="flex items-center justify-center space-x-4 mt-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400"></div>
                <Star className="w-6 h-6 text-yellow-500" />
                <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-rose-400"></div>
              </div>
            </div>

            {/* Subtitle */}
            <div className="space-y-4 mb-12 animate-fade-in-up delay-500">
              <p className="text-2xl md:text-3xl font-semibold text-gray-800">
                VIT Bhopal University
              </p>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Preserving and promoting Hindi language and culture through innovative
                programs and cultural excellence
              </p>
              <p className="text-base md:text-lg text-gray-500 hindi-text">
                भाषा की शक्ति से जुड़ें, संस्कृति का सम्मान करें
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up delay-700">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Heart className="w-5 h-5 mr-2" />
                Join Our Community
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <div className="w-full flex justify-center px-4">
        <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up delay-900">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="group bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  {achievement.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{achievement.count}</div>
                <div className="text-sm font-medium text-gray-700 mb-1">{achievement.title}</div>
                <div className="text-xs text-gray-500">{achievement.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Enhanced About Section */}
      {/* <section id="about" className="py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-400"></div>
              <h2 className="text-5xl font-bold text-gray-900">About Us</h2>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-purple-400"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fostering Hindi language and cultural excellence at VIT Bhopal University
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Card className="group p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-lg hover:shadow-xl transition-all duration-500">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-blue-800 flex items-center">
                    <Target className="w-6 h-6 mr-3" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    To preserve and promote the rich heritage of Hindi language and Indian culture through innovative
                    educational programs, cultural events, and community engagement at VIT Bhopal University.
                  </p>
                </CardContent>
              </Card>

              <Card className="group p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-lg hover:shadow-xl transition-all duration-500">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-purple-800 flex items-center">
                    <Globe className="w-6 h-6 mr-3" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    To create a vibrant community of Hindi language enthusiasts who appreciate literature, culture, and
                    traditions while embracing modern educational values.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-3xl blur-xl"></div>
              <Image
                src="/vit-bhopal-hindi-club-activities.png"
                alt="VIT Bhopal Hindi Club Activities"
                width={600}
                height={500}
                className="relative rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section> */}



    {/*new about us section */}
      <section id="about" className="py-24 bg-gradient-to-br from-white to-gray-50">
        
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-400"></div>
              <h2 className="text-5xl font-bold text-gray-900">About Us</h2>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-purple-400"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fostering Hindi language and cultural excellence at VIT Bhopal University
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {/* Mission Card */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
              <CardHeader className="pb-6 pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-blue-900">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  To preserve and promote the rich heritage of Hindi language and Indian culture through innovative
                  educational programs, cultural events, and community engagement at VIT Bhopal University.
                </p>
              </CardContent>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-200/30 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
            </Card>

            {/* Vision Card */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-50 via-purple-100 to-pink-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-500"></div>
              <CardHeader className="pb-6 pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-purple-900">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  To create a vibrant community of Hindi language enthusiasts who appreciate literature, culture, and
                  traditions while embracing modern educational values.
                </p>
              </CardContent>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-200/30 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
            </Card>

            {/* Image Card */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-700">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-red-500"></div>
              <div className="p-4">
                <div className="relative overflow-hidden rounded-xl">
                  <div className="absolute -inset-2 bg-gradient-to-r from-amber-200/40 to-red-200/40 rounded-xl blur-lg group-hover:blur-xl transition-all duration-700"></div>
                  <Image
                    src="/vit-bhopal-hindi-club-activities.png"
                    alt="VIT Bhopal Hindi Club Activities"
                    width={400}
                    height={500}
                    className="relative w-full h-80 object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-bold text-orange-900 mb-2">Our Activities</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Experience the vibrant world of Hindi literature, poetry, cultural performances, and literary discussions that bring our community together.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Statistics Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">50+</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Active Members</h4>
              <p className="text-sm text-gray-600">Passionate students</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">25+</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Events Organized</h4>
              <p className="text-sm text-gray-600">Cultural programs</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">10+</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Awards Won</h4>
              <p className="text-sm text-gray-600">Recognition achieved</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">5+</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Years Active</h4>
              <p className="text-sm text-gray-600">Continuous service</p>
            </div>
          </div>
        </div>
      </section>






      {/* Enhanced Team Section */}
      <section id="team" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-green-400"></div>
              <h2 className="text-5xl font-bold text-gray-900">Leadership Team</h2>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-emerald-400"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our distinguished faculty coordinator and dedicated student leaders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreTeam.map((member, index) => (
              <Card
                key={index}
                className="group text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white/90 backdrop-blur-sm border-0 overflow-hidden"
              >
                <CardContent className="pt-8 pb-6">
                  <div className="relative mb-6">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="relative w-28 h-28 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                      {member.position === "Faculty Coordinator" ? (
                        <GraduationCap className="w-4 h-4 text-white" />
                      ) : (
                        <Star className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <h4 className="text-lg font-semibold text-gray-600 mb-2 hindi-text">{member.nameHindi}</h4>
                  <p className="text-blue-600 font-semibold mb-1">{member.position}</p>
                  <p className="text-purple-600 font-medium mb-4 hindi-text text-sm">{member.positionHindi}</p>

                  {member.department && (
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 font-medium">{member.department}</p>
                      {member.qualification && <p className="text-xs text-gray-500">{member.qualification}</p>}
                    </div>
                  )}

                  {member.branch && (
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 font-medium">{member.branch}</p>
                      <p className="text-xs text-gray-500">{member.year}</p>
                    </div>
                  )}

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg mb-4">
                    <p className="text-sm text-gray-700 italic mb-1">"{member.quote}"</p>
                    <p className="text-xs text-gray-600 hindi-text">"{member.quoteHindi}"</p>
                  </div>

                  <div className="flex justify-center space-x-2">
                    <div className="flex items-center text-xs text-gray-600">
                      <Mail className="w-3 h-3 mr-1" />
                      <span>Contact</span>
                    </div>
                    {member.social && (
                      <div className="flex space-x-2">
                        {member.social.instagram && (
                          <Link
                            href={member.social.instagram}
                            className="text-gray-400 hover:text-pink-600 transition-colors"
                          >
                            <Instagram className="w-3 h-3" />
                          </Link>
                        )}
                        {member.social.linkedin && (
                          <Link
                            href={member.social.linkedin}
                            className="text-gray-400 hover:text-blue-600 transition-colors"
                          >
                            <Linkedin className="w-3 h-3" />
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/team-members">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Users className="w-5 h-5 mr-2" />
                View All Members
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Events Section */}
      <section id="events" className="py-24 bg-gradient-to-br from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400"></div>
              <h2 className="text-5xl font-bold text-gray-900">Upcoming Events</h2>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-rose-400"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our cultural events and be part of the Hindi literary tradition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card
                key={event.id}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white/90 backdrop-blur-sm border-0 overflow-hidden"
              >
                <div className="relative p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-4xl">{event.culturalTheme}</div>
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                      {event.category === "upcoming" ? "Upcoming" : "Ongoing"}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2 text-gray-800 group-hover:text-green-600 transition-colors">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4 hindi-text font-medium">
                    {event.titleHindi}
                  </CardDescription>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{event.description}</p>
                </div>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="w-4 h-4 mr-3 text-green-500" />
                      <span>{new Date(event.date).toLocaleDateString("en-IN")}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Clock className="w-4 h-4 mr-3 text-emerald-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-3 text-teal-500" />
                      <span>{event.venue}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Users className="w-4 h-4 mr-3 text-blue-500" />
                      <span>
                        {event.registrations}/{event.capacity} registered
                      </span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-2 rounded-lg transform hover:scale-105 transition-all duration-300">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/events">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Gallery Section */}
      <section id="gallery" className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-pink-400"></div>
              <h2 className="text-5xl font-bold text-gray-900">Photo Gallery</h2>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-purple-400"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Capturing memorable moments from our cultural celebrations
            </p>
          </div>

          <div className="space-y-16">
            {photoAlbums.map((album, index) => (
              <div key={index} className="relative">
                <Card className="p-8 bg-gradient-to-br from-pink-50 to-purple-50 border-0 shadow-lg mb-8">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">{album.title}</h3>
                    <h4 className="text-2xl font-semibold text-gray-700 mb-4 hindi-text">{album.titleHindi}</h4>
                    <p className="text-lg text-gray-600 mb-4">{album.description}</p>
                    <div className="flex justify-center space-x-6 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {album.eventDate}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {album.participants} participants
                      </span>
                    </div>
                  </div>
                </Card>
                <div className="grid md:grid-cols-3 gap-6">
                  {album.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="relative group overflow-hidden rounded-2xl shadow-lg">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${album.title} ${imgIndex + 1}`}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6">
                        <Camera className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg hindi-text">हि</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Hindi Club</h3>
                  <p className="text-gray-400">VIT Bhopal University</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Dedicated to promoting Hindi language and culture through various activities and events.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-orange-400 transition-colors">
                    About Us
                  </Link>

                </li>
                <li>
                  <Link href="#events" className="text-gray-400 hover:text-rose-400 transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link href="/team-members" className="text-gray-400 hover:text-purple-400 transition-colors">
                    All Members
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Portals</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/portals/admin" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Admin Portal
                  </Link>
                </li>
                <li>
                  <Link href="/portals/team" className="text-gray-400 hover:text-rose-400 transition-colors">
                    Team Portal
                  </Link>
                </li>
                <li>
                  <Link href="/portals/public" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Student Portal
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>VIT Bhopal University</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>hindiclub@vitbhopal.ac.in</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 755 2970 100</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Hindi Club, VIT Bhopal University. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
