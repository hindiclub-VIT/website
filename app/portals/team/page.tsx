"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Calendar,
  CheckCircle,
  Clock,
  Users,
  Ticket,
  Home,
  Settings,
  Plus,
  MessageSquare,
  FileText,
  Star,
  AlertCircle,
  Send,
  Paperclip,
  Search,
  Bell,
  Target,
  TrendingUp,
  Award,
  Sparkles,
  User,
} from "lucide-react"
import Link from "next/link"

export default function TeamPortal() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "कविता संध्या के लिए सजावट तैयार करें",
      description: "पारंपरिक सजावट और मंच की व्यवस्था करें",
      assignee: "प्रिया गुप्ता",
      assigneeAvatar: "/indian-student-vice-president.png",
      dueDate: "2024-02-10",
      status: "in-progress",
      priority: "high",
      category: "decoration",
      progress: 65,
      comments: 3,
      attachments: 2,
      collaborators: ["राहुल वर्मा", "अनिता सिंह"],
    },
    {
      id: 2,
      title: "प्रचार सामग्री तैयार करें",
      description: "पोस्टर और सोशल मीडिया कंटेंट डिज़ाइन करें",
      assignee: "राहुल वर्मा",
      assigneeAvatar: "/indian-student-secretary.png",
      dueDate: "2024-02-08",
      status: "completed",
      priority: "medium",
      category: "marketing",
      progress: 100,
      comments: 5,
      attachments: 8,
      collaborators: ["प्रिया गुप्ता"],
    },
    {
      id: 3,
      title: "ऑडियो टीम के साथ समन्वय",
      description: "कार्यक्रम के लिए साउंड सिस्टम की व्यवस्था सुनिश्चित करें",
      assignee: "अनिता सिंह",
      assigneeAvatar: "/indian-student-cultural-head.png",
      dueDate: "2024-02-12",
      status: "pending",
      priority: "high",
      category: "technical",
      progress: 20,
      comments: 1,
      attachments: 0,
      collaborators: ["आर्यन शर्मा"],
    },
    {
      id: 4,
      title: "प्रतिभागियों की सूची तैयार करें",
      description: "कविता पाठ के लिए पंजीकृत प्रतिभागियों की व्यवस्था",
      assignee: "आर्यन शर्मा",
      assigneeAvatar: "/indian-student-president.png",
      dueDate: "2024-02-09",
      status: "in-progress",
      priority: "medium",
      category: "coordination",
      progress: 80,
      comments: 2,
      attachments: 1,
      collaborators: ["प्रिया गुप्ता", "राहुल वर्मा"],
    },
  ])

  const [tickets, setTickets] = useState([
    {
      id: 1,
      title: "सभागार A में माइक्रोफोन काम नहीं कर रहा",
      description: "रिहर्सल के दौरान तकनीकी समस्या की रिपोर्ट",
      priority: "high",
      status: "open",
      assignee: "तकनीकी टीम",
      reporter: "प्रिया गुप्ता",
      createdAt: "2024-02-05",
      category: "technical",
      responses: 2,
    },
    {
      id: 2,
      title: "अतिरिक्त कुर्सियों की आवश्यकता",
      description: "आगामी कार्यक्रम के लिए 50 और कुर्सियों की जरूरत",
      priority: "medium",
      status: "in-progress",
      assignee: "लॉजिस्टिक्स टीम",
      reporter: "राहुल वर्मा",
      createdAt: "2024-02-04",
      category: "logistics",
      responses: 4,
    },
    {
      id: 3,
      title: "प्रोजेक्टर स्क्रीन में समस्या",
      description: "प्रेजेंटेशन के लिए स्क्रीन ठीक से काम नहीं कर रही",
      priority: "medium",
      status: "resolved",
      assignee: "तकनीकी टीम",
      reporter: "अनिता सिंह",
      createdAt: "2024-02-03",
      category: "technical",
      responses: 6,
    },
  ])

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    assignee: "",
    dueDate: "",
    priority: "medium",
    category: "general",
  })

  const [newTicket, setNewTicket] = useState({
    title: "",
    description: "",
    priority: "medium",
    category: "general",
  })

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "आर्यन शर्मा",
      avatar: "/indian-student-president.png",
      message: "कविता संध्या की तैयारी कैसी चल रही है?",
      timestamp: "10:30 AM",
      isOwn: false,
    },
    {
      id: 2,
      sender: "प्रिया गुप्ता",
      avatar: "/indian-student-vice-president.png",
      message: "सजावट का काम 65% पूरा हो गया है। कल तक पूरा हो जाएगा।",
      timestamp: "10:32 AM",
      isOwn: true,
    },
    {
      id: 3,
      sender: "राहुल वर्मा",
      avatar: "/indian-student-secretary.png",
      message: "प्रचार सामग्री तैयार है। सोशल मीडिया पर पोस्ट कर दिया है।",
      timestamp: "10:35 AM",
      isOwn: false,
    },
  ])

  const [newMessage, setNewMessage] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterPriority, setFilterPriority] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const upcomingEvents = [
    {
      title: "कविता संध्या - शब्दों का जादू",
      date: "2024-02-15",
      time: "शाम 6:00 बजे",
      venue: "सभागार A, VIT भोपाल",
      registrations: 67,
      capacity: 100,
      status: "upcoming",
    },
    {
      title: "भाषा प्रतियोगिता - ज्ञान परीक्षा",
      date: "2024-01-28",
      time: "दोपहर 2:00 बजे",
      venue: "सम्मेलन कक्ष, VIT भोपाल",
      registrations: 89,
      capacity: 120,
      status: "ongoing",
    },
  ]

  const teamMembers = [
    {
      name: "आर्यन शर्मा",
      role: "अध्यक्ष",
      avatar: "/indian-student-president.png",
      status: "online",
      tasksCompleted: 12,
      currentTasks: 3,
    },
    {
      name: "प्रिया गुप्ता",
      role: "उपाध्यक्ष",
      avatar: "/indian-student-vice-president.png",
      status: "online",
      tasksCompleted: 8,
      currentTasks: 2,
    },
    {
      name: "राहुल वर्मा",
      role: "सचिव",
      avatar: "/indian-student-secretary.png",
      status: "away",
      tasksCompleted: 15,
      currentTasks: 1,
    },
    {
      name: "अनिता सिंह",
      role: "सांस्कृतिक प्रमुख",
      avatar: "/indian-student-cultural-head.png",
      status: "online",
      tasksCompleted: 10,
      currentTasks: 4,
    },
  ]

  const toggleTaskStatus = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: task.status === "completed" ? "pending" : "completed",
              progress: task.status === "completed" ? 0 : 100,
            }
          : task,
      ),
    )
  }

  const addTask = () => {
    if (newTask.title && newTask.assignee) {
      const task = {
        id: tasks.length + 1,
        ...newTask,
        assigneeAvatar: "/placeholder.svg",
        status: "pending" as const,
        progress: 0,
        comments: 0,
        attachments: 0,
        collaborators: [],
      }
      setTasks([...tasks, task])
      setNewTask({
        title: "",
        description: "",
        assignee: "",
        dueDate: "",
        priority: "medium",
        category: "general",
      })
    }
  }

  const addTicket = () => {
    if (newTicket.title && newTicket.description) {
      const ticket = {
        id: tickets.length + 1,
        ...newTicket,
        status: "open" as const,
        assignee: "सामान्य टीम",
        reporter: "आप",
        createdAt: new Date().toISOString().split("T")[0],
        responses: 0,
      }
      setTickets([...tickets, ticket])
      setNewTicket({
        title: "",
        description: "",
        priority: "medium",
        category: "general",
      })
    }
  }

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        sender: "आप",
        avatar: "/placeholder.svg",
        message: newMessage,
        timestamp: new Date().toLocaleTimeString("hi-IN", { hour: "2-digit", minute: "2-digit" }),
        isOwn: true,
      }
      setMessages([...messages, message])
      setNewMessage("")
    }
  }

  const filteredTasks = tasks.filter((task) => {
    const matchesStatus = filterStatus === "all" || task.status === filterStatus
    const matchesPriority = filterPriority === "all" || task.priority === filterPriority
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesStatus && matchesPriority && matchesSearch
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-gradient-to-r from-green-500 to-emerald-500"
      case "in-progress":
        return "bg-gradient-to-r from-blue-500 to-cyan-500"
      case "pending":
        return "bg-gradient-to-r from-orange-500 to-amber-500"
      default:
        return "bg-gradient-to-r from-gray-500 to-slate-500"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-gradient-to-r from-red-500 to-pink-500"
      case "medium":
        return "bg-gradient-to-r from-yellow-500 to-orange-500"
      case "low":
        return "bg-gradient-to-r from-green-500 to-emerald-500"
      default:
        return "bg-gradient-to-r from-gray-500 to-slate-500"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Decorative Elements */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/indian-mandala-pattern.png')] bg-repeat opacity-20"></div>
      </div>

      {/* Header */}
      <header className="relative bg-white/90 backdrop-blur-md shadow-lg border-b-4 border-gradient-to-r from-blue-300 to-purple-300">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20"></div>
        <div className="container mx-auto px-4 py-6 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl hindi-text">टी</span>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-blue-600" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hindi-text">
                  टीम पोर्टल
                </h1>
                <p className="text-lg text-gray-700 font-medium hindi-text">हिंदी क्लब टीम डैशबोर्ड</p>
                <p className="text-sm text-blue-600 italic">"एकता में शक्ति है"</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent relative"
              >
                <Bell className="w-4 h-4 mr-2" />
                सूचनाएं
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </Button>
              <Link href="/">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-purple-300 text-purple-600 hover:bg-purple-50 bg-transparent"
                >
                  <Home className="w-4 h-4 mr-2" />
                  मुख्य पृष्ठ
                </Button>
              </Link>
              <Button
                variant="outline"
                size="sm"
                className="border-pink-300 text-pink-600 hover:bg-pink-50 bg-transparent"
              >
                <Settings className="w-4 h-4 mr-2" />
                सेटिंग्स
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 hindi-text">सक्रिय कार्य</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {tasks.filter((t) => t.status !== "completed").length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 hindi-text">पूर्ण कार्य</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    {tasks.filter((t) => t.status === "completed").length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 hindi-text">खुले टिकट</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    {tickets.filter((t) => t.status === "open").length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Ticket className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 hindi-text">टीम सदस्य</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {teamMembers.length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="tasks" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white/50 backdrop-blur-sm">
            <TabsTrigger
              value="tasks"
              className="hindi-text data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
            >
              कार्य प्रबंधन
            </TabsTrigger>
            <TabsTrigger
              value="events"
              className="hindi-text data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white"
            >
              कार्यक्रम जानकारी
            </TabsTrigger>
            <TabsTrigger
              value="tickets"
              className="hindi-text data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white"
            >
              टिकट ट्रैकिंग
            </TabsTrigger>
            <TabsTrigger
              value="collaboration"
              className="hindi-text data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
            >
              सहयोग
            </TabsTrigger>
            <TabsTrigger
              value="team"
              className="hindi-text data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-rose-500 data-[state=active]:text-white"
            >
              टीम सदस्य
            </TabsTrigger>
          </TabsList>

          {/* Task Management */}
          <TabsContent value="tasks" className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h2 className="text-3xl font-bold text-gray-800 hindi-text">कार्य प्रबंधन</h2>

              {/* Filters and Search */}
              <div className="flex flex-wrap gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="कार्य खोजें..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-48 hindi-text"
                  />
                </div>

                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all" className="hindi-text">
                      सभी
                    </SelectItem>
                    <SelectItem value="pending" className="hindi-text">
                      लंबित
                    </SelectItem>
                    <SelectItem value="in-progress" className="hindi-text">
                      चालू
                    </SelectItem>
                    <SelectItem value="completed" className="hindi-text">
                      पूर्ण
                    </SelectItem>
                  </SelectContent>
                </Select>

                <Select value={filterPriority} onValueChange={setFilterPriority}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all" className="hindi-text">
                      सभी
                    </SelectItem>
                    <SelectItem value="high" className="hindi-text">
                      उच्च
                    </SelectItem>
                    <SelectItem value="medium" className="hindi-text">
                      मध्यम
                    </SelectItem>
                    <SelectItem value="low" className="hindi-text">
                      निम्न
                    </SelectItem>
                  </SelectContent>
                </Select>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg">
                      <Plus className="w-4 h-4 mr-2" />
                      नया कार्य
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md bg-white/95 backdrop-blur-sm">
                    <DialogHeader>
                      <DialogTitle className="hindi-text text-xl">नया कार्य जोड़ें</DialogTitle>
                      <DialogDescription className="hindi-text">टीम के लिए नया कार्य बनाएं</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="taskTitle" className="hindi-text">
                          कार्य का नाम
                        </Label>
                        <Input
                          id="taskTitle"
                          value={newTask.title}
                          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                          placeholder="कार्य का नाम दर्ज करें"
                          className="hindi-text"
                        />
                      </div>
                      <div>
                        <Label htmlFor="taskDescription" className="hindi-text">
                          विवरण
                        </Label>
                        <Textarea
                          id="taskDescription"
                          value={newTask.description}
                          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                          placeholder="कार्य का विवरण दर्ज करें"
                          className="hindi-text"
                        />
                      </div>
                      <div>
                        <Label htmlFor="taskAssignee" className="hindi-text">
                          जिम्मेदार व्यक्ति
                        </Label>
                        <Select
                          value={newTask.assignee}
                          onValueChange={(value) => setNewTask({ ...newTask, assignee: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="सदस्य चुनें" />
                          </SelectTrigger>
                          <SelectContent>
                            {teamMembers.map((member) => (
                              <SelectItem key={member.name} value={member.name} className="hindi-text">
                                {member.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="taskDueDate" className="hindi-text">
                            समय सीमा
                          </Label>
                          <Input
                            id="taskDueDate"
                            type="date"
                            value={newTask.dueDate}
                            onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="taskPriority" className="hindi-text">
                            प्राथमिकता
                          </Label>
                          <Select
                            value={newTask.priority}
                            onValueChange={(value) => setNewTask({ ...newTask, priority: value })}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="high" className="hindi-text">
                                उच्च
                              </SelectItem>
                              <SelectItem value="medium" className="hindi-text">
                                मध्यम
                              </SelectItem>
                              <SelectItem value="low" className="hindi-text">
                                निम्न
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <Button
                        onClick={addTask}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 hindi-text"
                      >
                        कार्य जोड़ें
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="grid gap-6">
              {filteredTasks.map((task) => (
                <Card
                  key={task.id}
                  className={`bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    task.status === "completed" ? "opacity-75" : ""
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Checkbox
                        checked={task.status === "completed"}
                        onCheckedChange={() => toggleTaskStatus(task.id)}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3
                            className={`text-2xl font-semibold hindi-text ${
                              task.status === "completed" ? "line-through text-gray-500" : "text-gray-800"
                            }`}
                          >
                            {task.title}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <Badge className={`${getPriorityColor(task.priority)} text-white hindi-text`}>
                              {task.priority === "high" ? "उच्च" : task.priority === "medium" ? "मध्यम" : "निम्न"}
                            </Badge>
                            <Badge className={`${getStatusColor(task.status)} text-white hindi-text`}>
                              {task.status === "completed" ? "पूर्ण" : task.status === "in-progress" ? "चालू" : "लंबित"}
                            </Badge>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4 hindi-text leading-relaxed">{task.description}</p>

                        {/* Progress Bar */}
                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-2">
                            <span className="hindi-text text-gray-600">प्रगति</span>
                            <span className="text-gray-600">{task.progress}%</span>
                          </div>
                          <Progress value={task.progress} className="h-2" />
                        </div>

                        {/* Task Details */}
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Avatar className="w-6 h-6">
                              <AvatarImage src={task.assigneeAvatar || "/placeholder.svg"} />
                              <AvatarFallback>{task.assignee.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span className="hindi-text">{task.assignee}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(task.dueDate).toLocaleDateString("hi-IN")}</span>
                          </div>
                        </div>

                        {/* Collaborators */}
                        {task.collaborators.length > 0 && (
                          <div className="mb-4">
                            <p className="text-sm text-gray-600 mb-2 hindi-text">सहयोगी:</p>
                            <div className="flex flex-wrap gap-2">
                              {task.collaborators.map((collaborator, index) => (
                                <Badge key={index} variant="outline" className="hindi-text">
                                  {collaborator}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Task Stats */}
                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <MessageSquare className="w-4 h-4" />
                            <span>{task.comments} टिप्पणियां</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Paperclip className="w-4 h-4" />
                            <span>{task.attachments} अटैचमेंट</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span className="text-2xl">📁</span>
                            <span className="hindi-text">{task.category}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Event Information */}
          <TabsContent value="events" className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 hindi-text">कार्यक्रम जानकारी</h2>

            <div className="grid gap-6">
              {upcomingEvents.map((event, index) => (
                <Card
                  key={index}
                  className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between hindi-text text-2xl">
                      {event.title}
                      <Badge
                        className={`${
                          event.status === "upcoming"
                            ? "bg-gradient-to-r from-green-500 to-emerald-500"
                            : "bg-gradient-to-r from-blue-500 to-cyan-500"
                        } text-white hindi-text`}
                      >
                        {event.status === "upcoming" ? "आगामी" : "चालू"}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-5 h-5 text-green-500" />
                          <span className="text-gray-700">{new Date(event.date).toLocaleDateString("hi-IN")}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-blue-500" />
                          <span className="text-gray-700 hindi-text">{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Users className="w-5 h-5 text-purple-500" />
                          <span className="text-gray-700 hindi-text">{event.venue}</span>
                        </div>
                      </div>
                      <div>
                        <div className="mb-3">
                          <div className="flex justify-between text-sm mb-2">
                            <span className="hindi-text font-medium">पंजीकरण प्रगति</span>
                            <span>
                              {event.registrations}/{event.capacity}
                            </span>
                          </div>
                        </div>
                        <Progress value={(event.registrations / event.capacity) * 100} className="h-3" />
                        <p className="text-xs text-gray-500 mt-2 hindi-text">
                          {Math.round((event.registrations / event.capacity) * 100)}% क्षमता भरी गई
                        </p>

                        {/* Event Tasks */}
                        <div className="mt-4">
                          <p className="text-sm font-medium text-gray-700 mb-2 hindi-text">संबंधित कार्य:</p>
                          <div className="space-y-1">
                            {tasks
                              .filter((task) => task.title.includes("कविता संध्या") || task.title.includes("प्रतियोगिता"))
                              .slice(0, 3)
                              .map((task) => (
                                <div key={task.id} className="flex items-center space-x-2 text-sm">
                                  <div className={`w-2 h-2 rounded-full ${getStatusColor(task.status)}`}></div>
                                  <span className="hindi-text text-gray-600">{task.title}</span>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Ticket Tracking */}
          <TabsContent value="tickets" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-gray-800 hindi-text">टिकट ट्रैकिंग</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg">
                    <Plus className="w-4 h-4 mr-2" />
                    नया टिकट
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md bg-white/95 backdrop-blur-sm">
                  <DialogHeader>
                    <DialogTitle className="hindi-text text-xl">नया टिकट बनाएं</DialogTitle>
                    <DialogDescription className="hindi-text">समस्या या अनुरोध के लिए टिकट बनाएं</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="ticketTitle" className="hindi-text">
                        समस्या का शीर्षक
                      </Label>
                      <Input
                        id="ticketTitle"
                        value={newTicket.title}
                        onChange={(e) => setNewTicket({ ...newTicket, title: e.target.value })}
                        placeholder="समस्या का शीर्षक दर्ज करें"
                        className="hindi-text"
                      />
                    </div>
                    <div>
                      <Label htmlFor="ticketDescription" className="hindi-text">
                        विस्तृत विवरण
                      </Label>
                      <Textarea
                        id="ticketDescription"
                        value={newTicket.description}
                        onChange={(e) => setNewTicket({ ...newTicket, description: e.target.value })}
                        placeholder="समस्या का विस्तृत विवरण दर्ज करें"
                        className="hindi-text"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="ticketPriority" className="hindi-text">
                          प्राथमिकता
                        </Label>
                        <Select
                          value={newTicket.priority}
                          onChange={(value) => setNewTicket({ ...newTicket, priority: value })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high" className="hindi-text">
                              उच्च
                            </SelectItem>
                            <SelectItem value="medium" className="hindi-text">
                              मध्यम
                            </SelectItem>
                            <SelectItem value="low" className="hindi-text">
                              निम्न
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="ticketCategory" className="hindi-text">
                          श्रेणी
                        </Label>
                        <Select
                          value={newTicket.category}
                          onChange={(value) => setNewTicket({ ...newTicket, category: value })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="technical" className="hindi-text">
                              तकनीकी
                            </SelectItem>
                            <SelectItem value="logistics" className="hindi-text">
                              लॉजिस्टिक्स
                            </SelectItem>
                            <SelectItem value="general" className="hindi-text">
                              सामान्य
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button
                      onClick={addTicket}
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 hindi-text"
                    >
                      टिकट बनाएं
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid gap-6">
              {tickets.map((ticket) => (
                <Card
                  key={ticket.id}
                  className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-2xl font-semibold text-gray-800 hindi-text">{ticket.title}</h3>
                          <Badge className={`${getPriorityColor(ticket.priority)} text-white hindi-text`}>
                            {ticket.priority === "high" ? "उच्च" : ticket.priority === "medium" ? "मध्यम" : "निम्न"}
                          </Badge>
                          <Badge
                            variant={
                              ticket.status === "open"
                                ? "destructive"
                                : ticket.status === "in-progress"
                                  ? "default"
                                  : "secondary"
                            }
                            className="hindi-text"
                          >
                            {ticket.status === "open"
                              ? "खुला"
                              : ticket.status === "in-progress"
                                ? "प्रगति में"
                                : "हल हो गया"}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-4 hindi-text leading-relaxed">{ticket.description}</p>
                        <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4" />
                            <span className="hindi-text">जिम्मेदार: {ticket.assignee}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4" />
                            <span className="hindi-text">रिपोर्टर: {ticket.reporter}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(ticket.createdAt).toLocaleDateString("hi-IN")}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 mt-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <MessageSquare className="w-4 h-4" />
                            <span>{ticket.responses} प्रतिक्रियाएं</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span className="text-2xl">🏷️</span>
                            <span className="hindi-text">{ticket.category}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent"
                        >
                          देखें
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-green-300 text-green-600 hover:bg-green-50 bg-transparent"
                        >
                          अपडेट
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Collaboration */}
          <TabsContent value="collaboration" className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 hindi-text">टीम सहयोग</h2>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Team Chat */}
              <div className="lg:col-span-2">
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg h-96">
                  <CardHeader>
                    <CardTitle className="hindi-text text-xl">टीम चैट</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col h-full">
                    <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                      {messages.map((message) => (
                        <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                          <div
                            className={`flex items-start space-x-2 max-w-xs ${message.isOwn ? "flex-row-reverse space-x-reverse" : ""}`}
                          >
                            <Avatar className="w-8 h-8">
                              <AvatarImage src={message.avatar || "/placeholder.svg"} />
                              <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div
                              className={`p-3 rounded-lg ${message.isOwn ? "bg-blue-500 text-white" : "bg-gray-100"}`}
                            >
                              <p className="text-sm font-medium hindi-text">{message.sender}</p>
                              <p className="hindi-text">{message.message}</p>
                              <p className="text-xs opacity-70 mt-1">{message.timestamp}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Input
                        placeholder="संदेश टाइप करें..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                        className="hindi-text"
                      />
                      <Button onClick={sendMessage} size="sm" className="bg-blue-500 hover:bg-blue-600">
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="space-y-6">
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="hindi-text text-xl">त्वरित कार्य</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white">
                      <FileText className="w-4 h-4 mr-2" />
                      रिपोर्ट बनाएं
                    </Button>
                    <Button className="w-full justify-start bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                      <Calendar className="w-4 h-4 mr-2" />
                      मीटिंग शेड्यूल करें
                    </Button>
                    <Button className="w-full justify-start bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      समस्या रिपोर्ट करें
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="hindi-text text-xl">आज की प्राथमिकताएं</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {tasks
                        .filter((task) => task.status !== "completed")
                        .sort((a, b) => (a.priority === "high" ? -1 : 1))
                        .slice(0, 3)
                        .map((task) => (
                          <div key={task.id} className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                            <div className={`w-2 h-2 rounded-full ${getPriorityColor(task.priority)}`}></div>
                            <span className="text-sm hindi-text flex-1">{task.title}</span>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Team Members */}
          <TabsContent value="team" className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 hindi-text">टीम सदस्य</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <CardContent className="pt-6 pb-6">
                    <div className="relative mb-4">
                      <Avatar className="w-20 h-20 mx-auto">
                        <AvatarImage src={member.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="text-xl">{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div
                        className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white ${
                          member.status === "online"
                            ? "bg-green-500"
                            : member.status === "away"
                              ? "bg-yellow-500"
                              : "bg-gray-500"
                        }`}
                      ></div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1 hindi-text">{member.name}</h3>
                    <p className="text-purple-600 font-medium mb-4 hindi-text">{member.role}</p>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                        <div className="text-lg font-bold text-green-600">{member.tasksCompleted}</div>
                        <div className="text-xs text-gray-600 hindi-text">पूर्ण कार्य</div>
                      </div>
                      <div className="text-center p-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">{member.currentTasks}</div>
                        <div className="text-xs text-gray-600 hindi-text">वर्तमान कार्य</div>
                      </div>
                    </div>

                    <div className="flex justify-center space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-green-300 text-green-600 hover:bg-green-50 bg-transparent"
                      >
                        <Users className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Team Performance */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="hindi-text text-2xl flex items-center">
                  <TrendingUp className="w-6 h-6 mr-3 text-green-500" />
                  टीम प्रदर्शन
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                    <Award className="w-12 h-12 text-green-500 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {teamMembers.reduce((sum, member) => sum + member.tasksCompleted, 0)}
                    </div>
                    <div className="text-gray-600 hindi-text">कुल पूर्ण कार्य</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                    <Target className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {teamMembers.reduce((sum, member) => sum + member.currentTasks, 0)}
                    </div>
                    <div className="text-gray-600 hindi-text">सक्रिय कार्य</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                    <Star className="w-12 h-12 text-purple-500 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      {Math.round(
                        (teamMembers.reduce((sum, member) => sum + member.tasksCompleted, 0) /
                          teamMembers.reduce((sum, member) => sum + member.tasksCompleted + member.currentTasks, 0)) *
                          100,
                      )}
                      %
                    </div>
                    <div className="text-gray-600 hindi-text">पूर्णता दर</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
