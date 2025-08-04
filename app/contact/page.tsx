"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Globe,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      titleHindi: "हमसे मिलें",
      details: [
        "Hindi Club Office",
        "Student Activity Center, 2nd Floor",
        "VIT Bhopal University",
        "Bhopal-Indore Highway",
        "Bhopal, Madhya Pradesh - 466114",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      titleHindi: "फोन करें",
      details: [
        "Main Office: +91 755 2970 100",
        "Hindi Club: +91 755 2970 150",
        "Faculty Coordinator: +91 98765 43210",
        "Student President: +91 98765 43211",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      titleHindi: "ईमेल करें",
      details: [
        "General: hindiclub@vitbhopal.ac.in",
        "Events: events.hindiclub@vitbhopal.ac.in",
        "Membership: join.hindiclub@vitbhopal.ac.in",
        "Media: media.hindiclub@vitbhopal.ac.in",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      titleHindi: "कार्यालय समय",
      details: [
        "Monday - Friday: 9:00 AM - 5:00 PM",
        "Saturday: 10:00 AM - 2:00 PM",
        "Sunday: Closed",
        "Event Days: Extended Hours",
      ],
      color: "from-orange-500 to-red-500",
    },
  ]

  const teamContacts = [
    {
      name: "Dr. Priya Sharma",
      nameHindi: "डॉ. प्रिया शर्मा",
      position: "Faculty Coordinator",
      positionHindi: "संकाय समन्वयक",
      image: "/faculty-coordinator.png",
      email: "priya.sharma@vitbhopal.ac.in",
      phone: "+91 755 2970 101",
      office: "Humanities Department, Room 201",
      availability: "Mon-Fri: 10:00 AM - 4:00 PM",
    },
    {
      name: "Aryan Sharma",
      nameHindi: "आर्यन शर्मा",
      position: "President",
      positionHindi: "अध्यक्ष",
      image: "/indian-student-president.png",
      email: "aryan.sharma2021@vitbhopal.ac.in",
      phone: "+91 98765 43210",
      office: "Hindi Club Office",
      availability: "Mon-Sat: 2:00 PM - 6:00 PM",
    },
    {
      name: "Priya Gupta",
      nameHindi: "प्रिया गुप्ता",
      position: "Vice President",
      positionHindi: "उपाध्यक्ष",
      image: "/indian-student-vice-president.png",
      email: "priya.gupta2021@vitbhopal.ac.in",
      phone: "+91 98765 43211",
      office: "Hindi Club Office",
      availability: "Tue-Thu: 3:00 PM - 7:00 PM",
    },
    {
      name: "Rahul Verma",
      nameHindi: "राहुल वर्मा",
      position: "General Secretary",
      positionHindi: "महासचिव",
      image: "/indian-student-secretary.png",
      email: "rahul.verma2021@vitbhopal.ac.in",
      phone: "+91 98765 43212",
      office: "Hindi Club Office",
      availability: "Mon-Fri: 4:00 PM - 8:00 PM",
    },
  ]

  const socialLinks = [
    {
      platform: "Instagram",
      handle: "@vitbhopal_hindiclub",
      url: "https://instagram.com/vitbhopal_hindiclub",
      icon: <Instagram className="w-5 h-5" />,
      color: "from-pink-500 to-rose-500",
    },
    {
      platform: "Facebook",
      handle: "VIT Bhopal Hindi Club",
      url: "https://facebook.com/vitbhopal.hindiclub",
      icon: <Facebook className="w-5 h-5" />,
      color: "from-blue-500 to-indigo-500",
    },
    {
      platform: "Twitter",
      handle: "@VITBhopalHindi",
      url: "https://twitter.com/VITBhopalHindi",
      icon: <Twitter className="w-5 h-5" />,
      color: "from-sky-500 to-blue-500",
    },
    {
      platform: "LinkedIn",
      handle: "VIT Bhopal Hindi Club",
      url: "https://linkedin.com/company/vit-bhopal-hindi-club",
      icon: <Linkedin className="w-5 h-5" />,
      color: "from-blue-600 to-blue-700",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      category: "",
      message: "",
    })

    setIsSubmitting(false)
    alert("Message sent successfully! We'll get back to you soon.")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Decorative Pattern Overlay */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[url('/indian-mandala-pattern.png')] bg-repeat"></div>
      </div>

      {/* Header */}
      <header className="relative bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-200/50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-indigo-50/30"></div>
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link href="/">
                <Button
                  variant="outline"
                  className="border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent font-medium"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Contact Us
                  </h1>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hindi-text">
                    संपर्क करें
                  </h2>
                  <p className="text-lg text-gray-700 font-medium">Get in touch with VIT Bhopal Hindi Club</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">We'd Love to Hear From You</h2>
          <h3 className="text-4xl font-bold text-gray-800 hindi-text mb-8">हमें आपसे सुनने में खुशी होगी</h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Whether you have questions about our events, want to join our community, or need assistance with anything
            related to Hindi language and culture, we're here to help.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed hindi-text mt-4">
            चाहे आपके पास हमारे कार्यक्रमों के बारे में प्रश्न हों, हमारे समुदाय में शामिल होना चाहते हों, या हिंदी भाषा और संस्कृति से संबंधित
            किसी भी चीज़ में सहायता चाहिए, हम यहाँ मदद के लिए हैं।
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-800 flex items-center">
                  <Send className="w-8 h-8 mr-4 text-blue-500" />
                  Send us a Message
                </CardTitle>
                <div className="text-2xl text-gray-700 hindi-text">हमें संदेश भेजें</div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-lg font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                        className="mt-2 text-lg py-3"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-lg font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email address"
                        required
                        className="mt-2 text-lg py-3"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-lg font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Enter your phone number"
                        className="mt-2 text-lg py-3"
                      />
                    </div>
                    <div>
                      <Label htmlFor="category" className="text-lg font-medium">
                        Category *
                      </Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger className="mt-2 text-lg py-3">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="membership">Membership</SelectItem>
                          <SelectItem value="events">Events</SelectItem>
                          <SelectItem value="collaboration">Collaboration</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="media">Media & Press</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-lg font-medium">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="Enter the subject of your message"
                      required
                      className="mt-2 text-lg py-3"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-lg font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Write your message here..."
                      required
                      rows={6}
                      className="mt-2 text-lg"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-4 text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center text-white`}
                    >
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{info.title}</h3>
                      <h4 className="text-lg font-semibold text-gray-700 mb-3 hindi-text">{info.titleHindi}</h4>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Contacts */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <h3 className="text-3xl font-bold text-gray-800 hindi-text mb-6">हमारी टीम से मिलें</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect directly with our leadership team for specific inquiries and support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamContacts.map((member, index) => (
              <Card
                key={index}
                className="text-center bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2 hindi-text">{member.nameHindi}</h4>
                  <p className="text-blue-600 font-semibold mb-1">{member.position}</p>
                  <p className="text-indigo-600 font-medium mb-4 hindi-text text-sm">{member.positionHindi}</p>

                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span className="truncate">{member.email}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>{member.phone}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-center">{member.office}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-center">{member.availability}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-20">
          <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border-0 shadow-xl">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <Globe className="w-16 h-16 mx-auto mb-4 text-indigo-500" />
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Follow Us on Social Media</h3>
                <h4 className="text-2xl font-bold text-gray-700 hindi-text mb-6">सोशल मीडिया पर हमें फॉलो करें</h4>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Stay updated with our latest events, announcements, and cultural activities through our social media
                  channels
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {socialLinks.map((social, index) => (
                  <Link key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer bg-white/80">
                      <CardContent className="p-6 text-center">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}
                        >
                          {social.icon}
                        </div>
                        <h4 className="text-lg font-bold text-gray-800 mb-2">{social.platform}</h4>
                        <p className="text-sm text-gray-600">{social.handle}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-gray-800">Frequently Asked Questions</CardTitle>
              <div className="text-2xl text-gray-700 hindi-text">अक्सर पूछे जाने वाले प्रश्न</div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">How can I join the Hindi Club?</h4>
                    <p className="text-gray-600">
                      Visit our Student Portal or attend any of our events to register as a member. Membership is open
                      to all VIT Bhopal students.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Are events free for members?</h4>
                    <p className="text-gray-600">
                      Most of our cultural events are free for registered members. Some special workshops may have a
                      nominal fee.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Can non-Hindi speakers join?</h4>
                    <p className="text-gray-600">
                      We welcome students from all linguistic backgrounds who are interested in learning about Hindi
                      culture.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2 hindi-text">क्या मैं कार्यक्रम आयोजित कर सकता हूँ?</h4>
                    <p className="text-gray-600">
                      Yes, members can propose and help organize events. Contact our team with your ideas and we'll
                      support you.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">How often do you meet?</h4>
                    <p className="text-gray-600">
                      We have regular weekly meetings every Friday at 4 PM, plus special events throughout the academic
                      year.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Do you offer Hindi language classes?</h4>
                    <p className="text-gray-600">
                      Yes, we conduct beginner and intermediate Hindi language workshops for interested students.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
