import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, User, Star, Heart, ArrowLeft, Quote, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LiteraturePage() {
  const literaryWorks = [
    {
      id: 1,
      title: "गीता के गूढ़ रहस्य",
      author: "आचार्य रामचंद्र शुक्ल",
      category: "धर्म और दर्शन",
      description: "भगवद्गीता के गहन अर्थों की व्याख्या",
      excerpt: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
      readTime: "15 मिनट",
      likes: 234,
      image: "/gita-literature.png",
    },
    {
      id: 2,
      title: "प्रेमचंद की कहानियां",
      author: "मुंशी प्रेमचंद",
      category: "कहानी संग्रह",
      description: "समाज के यथार्थ को दर्शाती अमर कहानियां",
      excerpt: "गोदान में किसान जीवन की वास्तविकता का चित्रण है...",
      readTime: "25 मिनट",
      likes: 456,
      image: "/premchand-stories.png",
    },
    {
      id: 3,
      title: "कबीर के दोहे",
      author: "संत कबीर दास",
      category: "आध्यात्मिक काव्य",
      description: "जीवन के सत्य को उजागर करने वाले दोहे",
      excerpt: "बुरा जो देखन मैं चला, बुरा न मिलिया कोय। जो दिल खोजा आपना, मुझसे बुरा न कोय॥",
      readTime: "10 मिनट",
      likes: 789,
      image: "/kabir-dohe.png",
    },
    {
      id: 4,
      title: "तुलसीदास की रामायण",
      author: "गोस्वामी तुलसीदास",
      category: "महाकाव्य",
      description: "रामचरितमानस के अमर छंद",
      excerpt: "मंगल भवन अमंगल हारी। द्रवहु सो दसरथ अजिर बिहारी॥",
      readTime: "30 मिनट",
      likes: 567,
      image: "/tulsidas-ramayan.png",
    },
  ]

  const poetryCorner = [
    {
      title: "वसंत का स्वागत",
      author: "सुमित्रानंदन पंत",
      poem: "आ रही हिमाचल से पुकार\nहै उदित हो रही भोर\nनव जीवन का संचार\nप्रकृति में छा रहा छोर",
      theme: "प्रकृति",
    },
    {
      title: "मातृभूमि",
      author: "मैथिलीशरण गुप्त",
      poem: "भारत माता का मंदिर यह\nसबसे ऊंचा स्थान\nइसकी महिमा अपरंपार\nइसका अमर सम्मान",
      theme: "देशभक्ति",
    },
  ]

  const authors = [
    {
      name: "मुंशी प्रेमचंद",
      title: "कथा सम्राट",
      works: "गोदान, गबन, निर्मला",
      image: "/premchand-author.png",
      description: "हिंदी साहित्य के महान कथाकार",
    },
    {
      name: "हरिवंश राय बच्चन",
      title: "मधुशाला के कवि",
      works: "मधुशाला, मधुबाला, मधुकलश",
      image: "/bachchan-author.png",
      description: "आधुनिक हिंदी कविता के स्तंभ",
    },
    {
      name: "महादेवी वर्मा",
      title: "आधुनिक मीरा",
      works: "नीहार, रश्मि, नीरजा",
      image: "/mahadevi-author.png",
      description: "छायावाद की प्रमुख कवयित्री",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      {/* Decorative Pattern Overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/sanskrit-pattern.png')] bg-repeat opacity-20"></div>
      </div>

      {/* Header */}
      <header className="relative bg-white/90 backdrop-blur-md shadow-lg border-b-4 border-gradient-to-r from-amber-300 to-orange-300">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/20 to-orange-100/20"></div>
        <div className="container mx-auto px-4 py-6 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link href="/">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-amber-300 text-amber-600 hover:bg-amber-50 bg-transparent"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  मुख्य पृष्ठ
                </Button>
              </Link>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent hindi-text">
                    हिंदी साहित्य
                  </h1>
                  <p className="text-lg text-gray-700 font-medium">VIT भोपाल हिंदी क्लब</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-orange-400/20 to-rose-400/20"></div>
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce">📚</div>
        <div className="absolute top-32 right-20 text-4xl opacity-30 animate-pulse">✍️</div>
        <div className="absolute bottom-20 left-20 text-5xl opacity-25 animate-bounce delay-1000">🪶</div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 hindi-text bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 bg-clip-text text-transparent">
              साहित्य संसार
            </h1>
            <p className="text-2xl md:text-3xl mb-6 text-gray-700 hindi-text">हिंदी साहित्य की अमूल्य धरोहर</p>
            <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-2xl mx-auto leading-relaxed">
              महान लेखकों और कवियों की रचनाओं से भरा यह खजाना
            </p>

            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-amber-400"></div>
              <Quote className="w-8 h-8 text-orange-500" />
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-rose-400"></div>
            </div>

            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
              <p className="text-2xl hindi-text text-amber-800 mb-3 font-semibold">"साहित्य समाज का दर्पण है"</p>
              <p className="text-lg text-amber-700 italic">- आचार्य रामचंद्र शुक्ल</p>
            </div>
          </div>
        </div>
      </section>

      {/* Literary Works Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-amber-400"></div>
              <h2 className="text-5xl font-bold text-gray-800 hindi-text">प्रमुख रचनाएं</h2>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-400"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">हिंदी साहित्य की अमर कृतियों का संग्रह</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {literaryWorks.map((work) => (
              <Card
                key={work.id}
                className="group hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border-0 overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={work.image || "/placeholder.svg"}
                    alt={work.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500">
                    {work.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl hindi-text text-gray-800 group-hover:text-amber-600 transition-colors">
                    {work.title}
                  </CardTitle>
                  <CardDescription className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span className="hindi-text">{work.author}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 hindi-text leading-relaxed">{work.description}</p>
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-700 italic hindi-text text-lg leading-relaxed">"{work.excerpt}"</p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span className="hindi-text">{work.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4 text-red-500" />
                        <span>{work.likes}</span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
                    >
                      पढ़ें
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Poetry Corner */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-rose-400"></div>
              <h2 className="text-5xl font-bold text-gray-800 hindi-text">काव्य कोना</h2>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-pink-400"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">हृदय को छू जाने वाली कविताओं का संग्रह</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {poetryCorner.map((poem, index) => (
              <Card
                key={index}
                className="p-8 bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">🌸</div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 hindi-text">{poem.title}</h3>
                  <p className="text-rose-600 font-medium hindi-text">- {poem.author}</p>
                  <Badge variant="outline" className="mt-2 border-rose-300 text-rose-600">
                    {poem.theme}
                  </Badge>
                </div>
                <div className="bg-gradient-to-r from-rose-100 to-pink-100 p-6 rounded-lg">
                  <p className="text-gray-700 hindi-text text-lg leading-relaxed whitespace-pre-line text-center">
                    {poem.poem}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Authors Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-purple-400"></div>
              <h2 className="text-5xl font-bold text-gray-800 hindi-text">महान लेखक</h2>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-indigo-400"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">हिंदी साहित्य के स्तंभ</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {authors.map((author, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white/80 backdrop-blur-sm border-0 overflow-hidden"
              >
                <CardContent className="pt-8 pb-6">
                  <div className="relative mb-6">
                    <Image
                      src={author.image || "/placeholder.svg"}
                      alt={author.name}
                      width={150}
                      height={150}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center shadow-lg">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 hindi-text">{author.name}</h3>
                  <p className="text-purple-600 font-medium mb-2 hindi-text">{author.title}</p>
                  <p className="text-sm text-gray-600 mb-4 hindi-text">{author.works}</p>
                  <p className="text-gray-700 hindi-text leading-relaxed">{author.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold hindi-text">हिंदी साहित्य</h3>
                <p className="text-sm text-gray-400 hindi-text">VIT भोपाल</p>
              </div>
            </div>
            <p className="text-gray-400 mb-8 hindi-text max-w-2xl mx-auto">
              साहित्य के माध्यम से हम अपनी संस्कृति और भाषा की समृद्धता को आगे बढ़ाते हैं।
            </p>
            <Link href="/">
              <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600">
                <ArrowLeft className="w-4 h-4 mr-2" />
                मुख्य पृष्ठ पर वापस जाएं
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
