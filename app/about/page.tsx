"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-orange-200 flex flex-col items-center justify-center p-6">
      {/* Title */}
      <h1 className="text-4xl font-bold text-orange-900 mb-4">About पृष्ठ</h1>

      {/* Divider */}
      <div className="flex items-center gap-2 mb-6">
        <span className="h-[2px] w-16 bg-orange-900"></span>
        <span className="text-orange-900 text-2xl">✦</span>
        <span className="h-[2px] w-16 bg-orange-900"></span>
      </div>

      {/* Card */}
      <Card className="max-w-3xl border-2 border-orange-800 bg-orange-100 shadow-lg">
        <CardContent className="p-6 text-justify text-lg text-orange-950 leading-relaxed font-medium">
          “यत् भावो = तत् भवति” अर्थात जैसा भाव होता है, वैसा ही भविष्य बनता है। 
          यही विचार हिंदी क्लब: वीआईटी भोपाल की आत्मा है। हम केवल एक क्लब नहीं; 
          बल्कि हिंदी भाषा और भारतीय संस्कृति के संवर्धन और संरक्षण का एक सशक्त मंच हैं। 

          हमारा उद्देश्य न केवल हिंदी के प्रति प्रेम जगाना है, बल्कि इसकी समृद्ध 
          परंपराओं, साहित्यिक विरासत और सांस्कृतिक मूल्यों को जीवंत बनाए रखना है। 

          यदि आपको कविता, नाटक कला, साहित्य, लेखन या भारतीय त्योहारों की जीवंतता 
          आकर्षित करती है, तो यह क्लब आपके लिए है! हम सेमिनार, विचार-विमर्श, 
          प्रतियोगिताएँ और रंगारंग सांस्कृतिक कार्यक्रमों के माध्यम से हिंदी को 
          आधुनिकता के साथ जोड़ते हैं। 

          यहाँ हर शब्द में अभिव्यक्ति की स्वतंत्रता है और हर विचार में सृजनात्मकता 
          की उड़ान। तो आइए, इस खूबसूरत यात्रा का हिस्सा बनें; अपनी जड़ों से जुड़े रहें; 
          और हिंदी की इस समृद्ध धारा को आगे बढ़ाने में योगदान दें। 

          हिंदी क्लब आपका स्वागत करता है — क्योंकि भाषा सिर्फ संवाद का माध्यम नहीं; 
          यह पहचान और अभिव्यक्ति का स्रोत है! हिंदी में कुछ बात है क्योंकि हिंदी में जज़्बात है।
        </CardContent>
      </Card>
    </div>
  )
}
