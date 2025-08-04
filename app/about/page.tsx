"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  Target,
  Globe,
  Heart,
  Users,
  Award,
  BookOpen,
  Calendar,
  Star,
  Sparkles,
  Trophy,
  GraduationCap,
  MapPin,
  Clock,
  Mail,
  Phone,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("story")

  const milestones = [
    {
      year: "2019",
      title: "Foundation",
      titleHindi: "स्थापना",
      description: "Hindi Club was established at VIT Bhopal with 25 founding members",
      descriptionHindi: "VIT भोपाल में 25 संस्थापक सदस्यों के साथ हिंदी क्लब की स्थापना",
      icon: <Star className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "2020",
      title: "First Major Event",
      titleHindi: "पहला बड़ा कार्यक्रम",
      description: "Organized the first Hindi Day celebration with 200+ participants",
      descriptionHindi: "200+ प्रतिभागियों के साथ पहला हिंदी दिवस समारोह आयोजित किया",
      icon: <Calendar className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      year: "2021",
      title: "Digital Transformation",
      titleHindi: "डिजिटल परिवर्तन",
      description: "Launched online events and digital literature programs during pandemic",
      descriptionHindi: "महामारी के दौरान ऑनलाइन कार्यक्रम और डिजिटल साहित्य कार्यक्रम शुरू किए",
      icon: <Globe className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "2022",
      title: "National Recognition",
      titleHindi: "राष्ट्रीय मान्यता",
      description: "Received Best Cultural Club Award from VIT University system",
      descriptionHindi: "VIT विश्वविद्यालय प्रणाली से सर्वश्रेष्ठ सांस्कृतिक क्लब पुरस्कार प्राप्त किया",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      year: "2023",
      title: "500+ Members",
      titleHindi: "500+ सदस्य",
      description: "Reached milestone of 500+ active members across all departments",
      descriptionHindi: "सभी विभागों में 500+ सक्रिय सदस्यों का मील का पत्थर हासिल किया",
      icon: <Users className="w-6 h-6" />,
      color: "from-rose-500 to-red-500",
    },
    {
      year: "2024",
      title: "Literary Publications",
      titleHindi: "साहित्यिक प्रकाशन",
      description: "Published first digital magazine featuring student works",
      descriptionHindi: "छात्र कार्यों को प्रदर्शित करने वाली पहली डिजिटल पत्रिका प्रकाशित की",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
    },
  ]

  const values = [
    {
      title: "Cultural Preservation",
      titleHindi: "सांस्कृतिक संरक्षण",
      description: "Safeguarding and promoting the rich heritage of Hindi language and Indian culture",
      descriptionHindi: "हिंदी भाषा और भारतीय संस्कृति की समृद्ध विरासत का संरक्षण और संवर्धन",
      icon: <Heart className="w-8 h-8" />,
      color: "from-red-400 to-pink-500",
    },
    {
      title: "Educational Excellence",
      titleHindi: "शैक्षिक उत्कृष्टता",
      description: "Fostering academic growth through language learning and literary appreciation",
      descriptionHindi: "भाषा सीखने और साहित्यिक प्रशंसा के माध्यम से शैक्षणिक विकास को बढ़ावा देना",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-blue-400 to-indigo-500",
    },
    {
      title: "Community Building",
      titleHindi: "समुदाय निर्माण",
      description: "Creating inclusive spaces for students to connect and celebrate diversity",
      descriptionHindi: "छात्रों के लिए जुड़ने और विविधता का जश्न मनाने के लिए समावेशी स्थान बनाना",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-400 to-emerald-500",
    },
    {
      title: "Innovation & Tradition",
      titleHindi: "नवाचार और परंपरा",
      description: "Blending traditional values with modern educational approaches",
      descriptionHindi: "आधुनिक शैक्षिक दृष्टिकोण के साथ पारंपरिक मूल्यों का मिश्रण",
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-purple-400 to-pink-500",
    },
  ]

  const achievements = [
    {
      title: "Best Cultural Club Award 2023",
      titleHindi: "सर्वश्रेष्ठ सांस्कृतिक क्लब पुरस्कार 2023",
      organization: "VIT University System",
      description: "Recognized for outstanding contribution to cultural activities",
      year: "2023",
    },
    {
      title: "Excellence in Student Engagement",
      titleHindi: "छात्र सहभागिता में उत्कृष्टता",
      organization: "VIT Bhopal University",
      description: "Awarded for highest student participation in cultural events",
      year: "2023",
    },
    {
      title: "Digital Innovation in Culture",
      titleHindi: "संस्कृति में डिजिटल नवाचार",
      organization: "Madhya Pradesh Cultural Council",
      description: "Recognition for innovative digital cultural programs",
      year: "2022",
    },
    {
      title: "Community Impact Award",
      titleHindi: "सामुदायिक प्रभाव पुरस्कार",
      organization: "Hindi Sahitya Sammelan",
      description: "For promoting Hindi language among youth",
      year: "2022",
    },
  ]

  const statistics = [
    { label: "Active Members", labelHindi: "सक्रिय सदस्य", value: 500, suffix: "+" },
    { label: "Events Organized", labelHindi: "आयोजित कार्यक्रम", value: 75, suffix: "+" },
    { label: "Years of Service", labelHindi: "सेवा के वर्ष", value: 5, suffix: "+" },
    { label: "Awards Won", labelHindi: "जीते गए पुरस्कार", value: 12, suffix: "" },
  ]

  const facultyMessage = {
    name: "Dr. Priya Sharma",
    nameHindi: "डॉ. प्रिया शर्मा",
    position: "Faculty Coordinator",
    positionHindi: "संकाय समन्वयक",
    image: "/faculty-coordinator.png",
    message:
      "The Hindi Club at VIT Bhopal represents more than just language learning—it embodies our commitment to preserving cultural heritage while embracing modern educational excellence. Our students don't just learn Hindi; they live it, breathe it, and carry forward the torch of our rich literary tradition.",
    messageHindi:
      "VIT भोपाल में हिंदी क्लब केवल भाषा सीखने से कहीं अधिक का प्रतिनिधित्व करता है—यह आधुनिक शैक्षिक उत्कृष्टता को अपनाते हुए सांस्कृतिक विरासत को संरक्षित करने की हमारी प्रतिबद्धता को दर्शाता है।",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Decorative Pattern Overlay */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[url('/indian-mandala-pattern.png')] bg-repeat"></div>
      </div>

      {/* Header */}
      <header className="relative bg-white/95 backdrop-blur-md shadow-lg border-b border-orange-200/50">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50/30 to-rose-50/30"></div>
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link href="/">
                <Button
                  variant="outline"
                  className="border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent font-medium"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                    About Us
                  </h1>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent hindi-text">
                    हमारे बारे में
                  </h2>
                  <p className="text-lg text-gray-700 font-medium">VIT Bhopal Hindi Club</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Navigation Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: "story", label: "Our Story", labelHindi: "हमारी कहानी" },
              { id: "mission", label: "Mission & Vision", labelHindi: "मिशन और दृष्टि" },
              { id: "values", label: "Our Values", labelHindi: "हमारे मूल्य" },
              { id: "achievements", label: "Achievements", labelHindi: "उपलब्धियां" },
              { id: "message", label: "Faculty Message", labelHindi: "संकाय संदेश" },
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-orange-500 to-rose-500 text-white"
                    : "border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent"
                } font-medium px-6 py-3`}
              >
                {tab.label}
                <span className="ml-2 hindi-text text-sm">({tab.labelHindi})</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Our Story Tab */}
        {activeTab === "story" && (
          <div className="space-y-16 animate-fade-in-up">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Journey</h2>
              <h3 className="text-4xl font-bold text-gray-800 hindi-text mb-8">हमारी यात्रा</h3>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                From humble beginnings to becoming VIT Bhopal's most vibrant cultural organization, our journey has been
                one of passion, dedication, and unwavering commitment to Hindi language and culture.
              </p>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed hindi-text mt-4">
                विनम्र शुरुआत से लेकर VIT भोपाल के सबसे जीवंत सांस्कृतिक संगठन बनने तक, हमारी यात्रा जुनून, समर्पण और हिंदी भाषा और संस्कृति
                के प्रति अटूट प्रतिबद्धता की रही है।
              </p>
            </div>

            {/* Statistics */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {statistics.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent mb-2">
                      {stat.value}
                      {stat.suffix}
                    </div>
                    <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-600 hindi-text">{stat.labelHindi}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-400 to-rose-400 rounded-full"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                      <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-3 mb-4">
                            <div
                              className={`w-12 h-12 bg-gradient-to-r ${milestone.color} rounded-xl flex items-center justify-center text-white`}
                            >
                              {milestone.icon}
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-orange-600">{milestone.year}</div>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                          <h4 className="text-lg font-semibold text-gray-700 mb-3 hindi-text">
                            {milestone.titleHindi}
                          </h4>
                          <p className="text-gray-600 mb-2">{milestone.description}</p>
                          <p className="text-gray-600 hindi-text text-sm">{milestone.descriptionHindi}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="relative z-10">
                      <div className="w-6 h-6 bg-white border-4 border-orange-400 rounded-full"></div>
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mission & Vision Tab */}
        {activeTab === "mission" && (
          <div className="space-y-16 animate-fade-in-up">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="p-10 bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                <CardHeader className="pb-6">
                  <CardTitle className="text-3xl text-blue-800 flex items-center">
                    <Target className="w-8 h-8 mr-4" />
                    Our Mission
                  </CardTitle>
                  <div className="text-2xl text-blue-700 hindi-text">हमारा मिशन</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    To preserve, promote, and celebrate the rich heritage of Hindi language and Indian culture through
                    innovative educational programs, engaging cultural events, and meaningful community initiatives that
                    inspire students to connect with their roots while embracing modern values.
                  </p>
                  <p className="text-gray-700 leading-relaxed hindi-text">
                    हिंदी भाषा और भारतीय संस्कृति की समृद्ध विरासत को संरक्षित करना, बढ़ावा देना और मनाना है। नवाचार शैक्षणिक
                    कार्यक्रमों, आकर्षक सांस्कृतिक कार्यक्रमों और सार्थक सामुदायिक पहलों के माध्यम से।
                  </p>
                  <div className="mt-8 space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Language preservation and promotion</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Cultural education and awareness</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Student engagement and development</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-10 bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                <CardHeader className="pb-6">
                  <CardTitle className="text-3xl text-purple-800 flex items-center">
                    <Globe className="w-8 h-8 mr-4" />
                    Our Vision
                  </CardTitle>
                  <div className="text-2xl text-purple-700 hindi-text">हमारी दृष्टि</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    To become the leading cultural organization that bridges traditional Hindi heritage with
                    contemporary educational excellence, creating a vibrant community where students from all
                    backgrounds can explore, appreciate, and contribute to the rich tapestry of Indian culture.
                  </p>
                  <p className="text-gray-700 leading-relaxed hindi-text">
                    एक अग्रणी सांस्कृतिक संगठन बनना जो पारंपरिक हिंदी विरासत को समकालीन शैक्षिक उत्कृष्टता के साथ जोड़ता है, एक जीवंत
                    समुदाय बनाता है।
                  </p>
                  <div className="mt-8 space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">Cultural leadership and innovation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">Inclusive community building</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">Educational excellence and tradition</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Goals Section */}
            <Card className="p-10 bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-xl">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl text-green-800">Our Strategic Goals</CardTitle>
                <div className="text-2xl text-green-700 hindi-text">हमारे रणनीतिक लक्ष्य</div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Educational Impact</h3>
                    <p className="text-gray-600">Enhance Hindi language learning through innovative teaching methods</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Community Growth</h3>
                    <p className="text-gray-600">Expand membership and engagement across all university departments</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Cultural Excellence</h3>
                    <p className="text-gray-600">Achieve recognition as a premier cultural organization</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Values Tab */}
        {activeTab === "values" && (
          <div className="space-y-16 animate-fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
              <h3 className="text-4xl font-bold text-gray-800 hindi-text mb-8">हमारे मूल मूल्य</h3>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                These fundamental principles guide our actions, decisions, and interactions as we work towards our
                mission of cultural preservation and educational excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="group p-8 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <CardContent>
                    <div className="flex items-start space-x-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                      >
                        {value.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{value.title}</h3>
                        <h4 className="text-xl font-semibold text-gray-700 mb-4 hindi-text">{value.titleHindi}</h4>
                        <p className="text-gray-600 leading-relaxed mb-3">{value.description}</p>
                        <p className="text-gray-600 leading-relaxed hindi-text text-sm">{value.descriptionHindi}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Cultural Philosophy */}
            <Card className="p-12 bg-gradient-to-br from-orange-50 to-rose-50 border-0 shadow-xl">
              <CardContent className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Cultural Philosophy</h3>
                <h4 className="text-2xl font-bold text-gray-700 hindi-text mb-6">हमारा सांस्कृतिक दर्शन</h4>
                <blockquote className="text-2xl text-gray-700 italic mb-4 hindi-text">
                  "भाषा केवल संवाद का माध्यम नहीं, बल्कि संस्कृति की आत्मा है"
                </blockquote>
                <p className="text-xl text-gray-600 italic mb-8">
                  "Language is not just a medium of communication, but the soul of culture"
                </p>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  We believe that language carries within it the wisdom of generations, the beauty of expression, and
                  the power to unite hearts across boundaries. Through Hindi, we don't just communicate—we connect with
                  our heritage, celebrate our identity, and build bridges to the future.
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === "achievements" && (
          <div className="space-y-16 animate-fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Achievements</h2>
              <h3 className="text-4xl font-bold text-gray-800 hindi-text mb-8">हमारी उपलब्धियां</h3>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Recognition and awards that reflect our commitment to excellence in cultural education and community
                service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="group p-8 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <CardContent>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        <Trophy className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                            {achievement.year}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
                        <h4 className="text-lg font-semibold text-gray-700 mb-3 hindi-text">
                          {achievement.titleHindi}
                        </h4>
                        <p className="text-sm text-gray-600 font-medium mb-2">{achievement.organization}</p>
                        <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recognition Timeline */}
            <Card className="p-10 bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-xl">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl text-purple-800">Recognition Timeline</CardTitle>
                <div className="text-2xl text-purple-700 hindi-text">मान्यता समयरेखा</div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { year: "2024", achievement: "Digital Innovation Award", progress: 100 },
                    { year: "2023", achievement: "Best Cultural Club Award", progress: 100 },
                    { year: "2023", achievement: "Excellence in Student Engagement", progress: 100 },
                    { year: "2022", achievement: "Community Impact Award", progress: 100 },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-16 text-center">
                        <span className="text-lg font-bold text-purple-600">{item.year}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-800">{item.achievement}</span>
                          <span className="text-sm text-gray-600">{item.progress}%</span>
                        </div>
                        <Progress value={item.progress} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Faculty Message Tab */}
        {activeTab === "message" && (
          <div className="space-y-16 animate-fade-in-up">
            <Card className="p-12 bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-xl">
              <CardContent>
                <div className="grid lg:grid-cols-3 gap-12 items-center">
                  <div className="text-center">
                    <div className="relative mb-6">
                      <Image
                        src={facultyMessage.image || "/placeholder.svg"}
                        alt={facultyMessage.name}
                        width={200}
                        height={200}
                        className="w-48 h-48 rounded-full mx-auto object-cover border-8 border-white shadow-xl"
                      />
                      <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{facultyMessage.name}</h3>
                    <h4 className="text-xl font-semibold text-gray-700 mb-2 hindi-text">{facultyMessage.nameHindi}</h4>
                    <p className="text-blue-600 font-semibold mb-1">{facultyMessage.position}</p>
                    <p className="text-indigo-600 font-medium hindi-text">{facultyMessage.positionHindi}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="relative">
                      <div className="absolute -top-4 -left-4 text-6xl text-blue-200">"</div>
                      <div className="pl-8">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">{facultyMessage.message}</p>
                        <p className="text-base text-gray-600 leading-relaxed hindi-text italic">
                          {facultyMessage.messageHindi}
                        </p>
                      </div>
                      <div className="absolute -bottom-4 -right-4 text-6xl text-blue-200 transform rotate-180">"</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800 flex items-center">
                    <MapPin className="w-6 h-6 mr-3 text-blue-500" />
                    Visit Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-gray-600">
                    <p className="font-medium">Hindi Club Office</p>
                    <p>Student Activity Center, 2nd Floor</p>
                    <p>VIT Bhopal University</p>
                    <p>Bhopal-Indore Highway</p>
                    <p>Bhopal, Madhya Pradesh - 466114</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800 flex items-center">
                    <Mail className="w-6 h-6 mr-3 text-green-500" />
                    Contact Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-green-500" />
                      <span>hindiclub@vitbhopal.ac.in</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-blue-500" />
                      <span>+91 755 2970 100</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-orange-500" />
                      <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-orange-500 to-rose-500 text-white border-0 shadow-2xl">
            <CardContent className="p-12 text-center">
              <div className="mb-6">
                <Sparkles className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-4xl font-bold mb-4">Join Our Cultural Journey</h3>
                <h4 className="text-3xl font-bold mb-6 hindi-text">हमारी सांस्कृतिक यात्रा में शामिल हों</h4>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                  Be part of a community that celebrates heritage, embraces diversity, and creates lasting memories
                  through the beauty of Hindi language and culture.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/portals/public">
                  <Button
                    size="lg"
                    className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Become a Member
                  </Button>
                </Link>
                <Link href="/events">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 bg-transparent"
                  >
                    Explore Events
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
