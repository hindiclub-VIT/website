import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowLeft,
  Users,
  Search,
  Filter,
  Mail,
  Phone,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Star,
  Award,
  GraduationCap,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TeamMembersPage() {
  const allMembers = [
    // Core Team
    {
      id: 1,
      name: "Dr. Priya Sharma",
      nameHindi: "डॉ. प्रिया शर्मा",
      position: "Faculty Coordinator",
      positionHindi: "संकाय समन्वयक",
      image: "/faculty-coordinator.png",
      department: "Humanities",
      year: "Faculty",
      email: "priya.sharma@vitbhopal.ac.in",
      phone: "+91 755 2970 101",
      category: "faculty",
      achievements: ["Best Faculty Award 2023", "Published 25+ Research Papers"],
      social: { linkedin: "https://linkedin.com/in/priya-sharma" },
    },
    {
      id: 2,
      name: "Aryan Sharma",
      nameHindi: "आर्यन शर्मा",
      position: "President",
      positionHindi: "अध्यक्ष",
      image: "/indian-student-president.png",
      department: "Computer Science",
      year: "Final Year",
      email: "aryan.sharma2021@vitbhopal.ac.in",
      phone: "+91 98765 43210",
      category: "core",
      achievements: ["Dean's List 2023", "Best Student Leader"],
      social: { instagram: "https://instagram.com/aryan", linkedin: "https://linkedin.com/in/aryan" },
    },
    {
      id: 3,
      name: "Priya Gupta",
      nameHindi: "प्रिया गुप्ता",
      position: "Vice President",
      positionHindi: "उपाध्यक्ष",
      image: "/indian-student-vice-president.png",
      department: "Electronics & Communication",
      year: "Third Year",
      email: "priya.gupta2021@vitbhopal.ac.in",
      phone: "+91 98765 43211",
      category: "core",
      achievements: ["Academic Excellence", "Cultural Ambassador"],
      social: { instagram: "https://instagram.com/priya", twitter: "https://twitter.com/priya" },
    },
    {
      id: 4,
      name: "Rahul Verma",
      nameHindi: "राहुल वर्मा",
      position: "General Secretary",
      positionHindi: "महासचिव",
      image: "/indian-student-secretary.png",
      department: "Mechanical Engineering",
      year: "Third Year",
      email: "rahul.verma2021@vitbhopal.ac.in",
      phone: "+91 98765 43212",
      category: "core",
      achievements: ["Best Organizer Award", "Event Management Excellence"],
      social: { linkedin: "https://linkedin.com/in/rahul", github: "https://github.com/rahul" },
    },
    // Executive Team
    {
      id: 5,
      name: "Anita Singh",
      nameHindi: "अनिता सिंह",
      position: "Cultural Head",
      positionHindi: "सांस्कृतिक प्रमुख",
      image: "/indian-student-cultural-head.png",
      department: "Civil Engineering",
      year: "Fourth Year",
      email: "anita.singh2020@vitbhopal.ac.in",
      phone: "+91 98765 43213",
      category: "executive",
      achievements: ["Poetry Competition Winner", "Cultural Excellence Award"],
      social: { instagram: "https://instagram.com/anita", linkedin: "https://linkedin.com/in/anita" },
    },
    {
      id: 6,
      name: "Vikash Kumar",
      nameHindi: "विकाश कुमार",
      position: "Technical Head",
      positionHindi: "तकनीकी प्रमुख",
      image: "/placeholder.svg",
      department: "Information Technology",
      year: "Third Year",
      email: "vikash.kumar2021@vitbhopal.ac.in",
      phone: "+91 98765 43214",
      category: "executive",
      achievements: ["Tech Innovation Award", "Website Development Lead"],
      social: { github: "https://github.com/vikash", linkedin: "https://linkedin.com/in/vikash" },
    },
    {
      id: 7,
      name: "Sneha Patel",
      nameHindi: "स्नेहा पटेल",
      position: "Event Coordinator",
      positionHindi: "कार्यक्रम समन्वयक",
      image: "/placeholder.svg",
      department: "Biotechnology",
      year: "Second Year",
      email: "sneha.patel2022@vitbhopal.ac.in",
      phone: "+91 98765 43215",
      category: "executive",
      achievements: ["Event Management Certificate", "Team Leadership Award"],
      social: { instagram: "https://instagram.com/sneha", linkedin: "https://linkedin.com/in/sneha" },
    },
    {
      id: 8,
      name: "Amit Joshi",
      nameHindi: "अमित जोशी",
      position: "Media & Publicity Head",
      positionHindi: "मीडिया एवं प्रचार प्रमुख",
      image: "/placeholder.svg",
      department: "Mass Communication",
      year: "Third Year",
      email: "amit.joshi2021@vitbhopal.ac.in",
      phone: "+91 98765 43216",
      category: "executive",
      achievements: ["Social Media Excellence", "Content Creation Award"],
      social: { instagram: "https://instagram.com/amit", twitter: "https://twitter.com/amit" },
    },
    // Active Members
    {
      id: 9,
      name: "Ravi Sharma",
      nameHindi: "रवि शर्मा",
      position: "Active Member",
      positionHindi: "सक्रिय सदस्य",
      image: "/placeholder.svg",
      department: "Electrical Engineering",
      year: "Second Year",
      email: "ravi.sharma2022@vitbhopal.ac.in",
      phone: "+91 98765 43217",
      category: "member",
      achievements: ["Regular Participation", "Volunteer Excellence"],
      social: { linkedin: "https://linkedin.com/in/ravi" },
    },
    {
      id: 10,
      name: "Kavya Reddy",
      nameHindi: "काव्या रेड्डी",
      position: "Active Member",
      positionHindi: "सक्रिय सदस्य",
      image: "/placeholder.svg",
      department: "Chemical Engineering",
      year: "First Year",
      email: "kavya.reddy2023@vitbhopal.ac.in",
      phone: "+91 98765 43218",
      category: "member",
      achievements: ["Fresher's Talent Show Winner", "Active Participant"],
      social: { instagram: "https://instagram.com/kavya" },
    },
    {
      id: 11,
      name: "Deepak Singh",
      nameHindi: "दीपक सिंह",
      position: "Active Member",
      positionHindi: "सक्रिय सदस्य",
      image: "/placeholder.svg",
      department: "Aerospace Engineering",
      year: "Second Year",
      email: "deepak.singh2022@vitbhopal.ac.in",
      phone: "+91 98765 43219",
      category: "member",
      achievements: ["Event Volunteer", "Cultural Enthusiast"],
      social: { linkedin: "https://linkedin.com/in/deepak" },
    },
    {
      id: 12,
      name: "Pooja Agarwal",
      nameHindi: "पूजा अग्रवाल",
      position: "Active Member",
      positionHindi: "सक्रिय सदस्य",
      image: "/placeholder.svg",
      department: "Fashion Design",
      year: "Third Year",
      email: "pooja.agarwal2021@vitbhopal.ac.in",
      phone: "+91 98765 43220",
      category: "member",
      achievements: ["Creative Design Award", "Cultural Program Participant"],
      social: { instagram: "https://instagram.com/pooja", linkedin: "https://linkedin.com/in/pooja" },
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "faculty":
        return "bg-gradient-to-r from-purple-500 to-indigo-500"
      case "core":
        return "bg-gradient-to-r from-orange-500 to-red-500"
      case "executive":
        return "bg-gradient-to-r from-blue-500 to-cyan-500"
      case "member":
        return "bg-gradient-to-r from-green-500 to-emerald-500"
      default:
        return "bg-gradient-to-r from-gray-500 to-slate-500"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "faculty":
        return <GraduationCap className="w-5 h-5 text-white" />
      case "core":
        return <Star className="w-5 h-5 text-white" />
      case "executive":
        return <Award className="w-5 h-5 text-white" />
      case "member":
        return <Users className="w-5 h-5 text-white" />
      default:
        return <Users className="w-5 h-5 text-white" />
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "faculty":
        return { en: "Faculty", hi: "संकाय" }
      case "core":
        return { en: "Core Team", hi: "मुख्य टीम" }
      case "executive":
        return { en: "Executive", hi: "कार्यकारी" }
      case "member":
        return { en: "Member", hi: "सदस्य" }
      default:
        return { en: "Member", hi: "सदस्य" }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Decorative Pattern Overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/indian-mandala-pattern.png')] bg-repeat opacity-20"></div>
      </div>

      {/* Header */}
      <header className="relative bg-white/95 backdrop-blur-md shadow-xl border-b-4 border-gradient-to-r from-blue-300 to-purple-300">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-purple-100/30"></div>
        <div className="container mx-auto px-4 py-6 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link href="/">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent font-medium"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    All Team Members
                  </h1>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hindi-text">
                    सभी टीम सदस्य
                  </h2>
                  <p className="text-lg text-gray-700 font-medium">VIT Bhopal Hindi Club</p>
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
                <Filter className="w-6 h-6 mr-3 text-blue-500" />
                Filter & Search Members
                <span className="hindi-text ml-4">सदस्य खोजें और फ़िल्टर करें</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input placeholder="Search by name, department, or position..." className="pl-10 text-lg py-3" />
                </div>
                <Select>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Filter by Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="faculty">Faculty</SelectItem>
                    <SelectItem value="core">Core Team</SelectItem>
                    <SelectItem value="executive">Executive</SelectItem>
                    <SelectItem value="member">Members</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Filter by Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    <SelectItem value="faculty">Faculty</SelectItem>
                    <SelectItem value="final">Final Year</SelectItem>
                    <SelectItem value="third">Third Year</SelectItem>
                    <SelectItem value="second">Second Year</SelectItem>
                    <SelectItem value="first">First Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {allMembers.filter((m) => m.category === "faculty").length}
              </div>
              <div className="text-gray-600 font-medium">Faculty Members</div>
              <div className="text-gray-600 hindi-text text-sm">संकाय सदस्य</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {allMembers.filter((m) => m.category === "core").length}
              </div>
              <div className="text-gray-600 font-medium">Core Team</div>
              <div className="text-gray-600 hindi-text text-sm">मुख्य टीम</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {allMembers.filter((m) => m.category === "executive").length}
              </div>
              <div className="text-gray-600 font-medium">Executive Team</div>
              <div className="text-gray-600 hindi-text text-sm">कार्यकारी टीम</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {allMembers.filter((m) => m.category === "member").length}
              </div>
              <div className="text-gray-600 font-medium">Active Members</div>
              <div className="text-gray-600 hindi-text text-sm">सक्रिय सदस्य</div>
            </CardContent>
          </Card>
        </div>

        {/* Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allMembers.map((member) => (
            <Card
              key={member.id}
              className="group text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white/90 backdrop-blur-sm border-0 overflow-hidden"
            >
              <CardContent className="pt-8 pb-6">
                <div className="relative mb-6">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="relative w-28 h-28 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                  <div
                    className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg ${getCategoryColor(member.category)}`}
                  >
                    {getCategoryIcon(member.category)}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <h4 className="text-lg font-semibold text-gray-700 mb-2 hindi-text">{member.nameHindi}</h4>

                <Badge className={`${getCategoryColor(member.category)} text-white mb-2`}>
                  {getCategoryLabel(member.category).en}
                </Badge>
                <Badge variant="outline" className="mb-4 hindi-text">
                  {getCategoryLabel(member.category).hi}
                </Badge>

                <p className="text-blue-600 font-semibold mb-1">{member.position}</p>
                <p className="text-purple-600 font-medium mb-3 hindi-text">{member.positionHindi}</p>

                <div className="text-sm text-gray-600 mb-4">
                  <p className="font-medium">{member.department}</p>
                  <p>{member.year}</p>
                </div>

                {member.achievements && member.achievements.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.achievements.slice(0, 2).map((achievement, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-1 mb-4 text-xs text-gray-600">
                  <div className="flex items-center justify-center space-x-1">
                    <Mail className="w-3 h-3" />
                    <span className="truncate">{member.email}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-1">
                    <Phone className="w-3 h-3" />
                    <span>{member.phone}</span>
                  </div>
                </div>

                {member.social && (
                  <div className="flex justify-center space-x-3">
                    {member.social.instagram && (
                      <Link
                        href={member.social.instagram}
                        className="text-gray-400 hover:text-pink-600 transition-colors transform hover:scale-125"
                      >
                        <Instagram className="w-4 h-4" />
                      </Link>
                    )}
                    {member.social.twitter && (
                      <Link
                        href={member.social.twitter}
                        className="text-gray-400 hover:text-blue-600 transition-colors transform hover:scale-125"
                      >
                        <Twitter className="w-4 h-4" />
                      </Link>
                    )}
                    {member.social.linkedin && (
                      <Link
                        href={member.social.linkedin}
                        className="text-gray-400 hover:text-blue-700 transition-colors transform hover:scale-125"
                      >
                        <Linkedin className="w-4 h-4" />
                      </Link>
                    )}
                    {member.social.github && (
                      <Link
                        href={member.social.github}
                        className="text-gray-400 hover:text-gray-800 transition-colors transform hover:scale-125"
                      >
                        <Github className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Us Section */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 shadow-2xl">
            <CardContent className="p-12 text-center">
              <div className="mb-6">
                <Sparkles className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-4xl font-bold mb-4">Want to Join Our Team?</h3>
                <h4 className="text-3xl font-bold mb-6 hindi-text">हमारी टीम में शामिल होना चाहते हैं?</h4>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                  Be part of VIT Bhopal's most vibrant cultural club and help preserve our rich Hindi heritage
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/portals/public">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Apply for Membership
                  </Button>
                </Link>
                <Link href="/events">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 bg-transparent"
                  >
                    Attend Our Events
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
