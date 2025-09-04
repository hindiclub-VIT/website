import { useEffect, useState } from "react"
import { Users } from "lucide-react"

type Member = {
  name: string
  regno: string
  batch: string
  role: string
}

type TeamData = Record<string, Member[]>

export default function TeamMembersPage() {
  const [teams, setTeams] = useState<TeamData>({})

  useEffect(() => {
    const data: TeamData = {
      "Cultural Team": [
        { name: "Neha Babel", regno: "24BCY10007", batch: "2024", role: "Core Member" },
        { name: "Aanchal Rath", regno: "24BAI10938", batch: "2024", role: "Core Member" },
        { name: "Kriti Sinha", regno: "24BCE10209", batch: "2024", role: "Core Member" },
        { name: "Kushagra Sharma", regno: "24MEI10148", batch: "2024", role: "Core Member" },
        { name: "Divyansh Agarwal", regno: "25BCE11367", batch: "2025", role: "Core Member" },
        { name: "Murtaza Ansari", regno: "24BAI10109", batch: "2024", role: "Core Member" },
        { name: "Aditi", regno: "24BAI10531", batch: "2024", role: "Core Member" },
        { name: "Anshika Jain", regno: "24BEC10146", batch: "2024", role: "Core Member" },
        { name: "Syed Haider Abbas", regno: "24BAI10449", batch: "2024", role: "Core Member" },
        { name: "Avishi Verma", regno: "24BAI10063", batch: "2024", role: "Core Member" },
        { name: "Madhav Mukund", regno: "24BCG10146", batch: "2024", role: "Core Member" },
        { name: "Aditya Sudan", regno: "23BAI10232", batch: "2023", role: "Core Member" },
        { name: "Kumari sristy", regno: "24BEC10050", batch: "2024", role: "Core Member" },
        { name: "Gaurav Sharma", regno: "23BAI10554", batch: "2023", role: "Lead" },
        { name: "Ayushi Thakur", regno: "23BCE11248", batch: "2023", role: "Core Member" },
        { name: "NOYNIKA ASRANI", regno: "24MIM10237", batch: "2024", role: "Core Member" },
        { name: "Yashvi Kumari", regno: "24BCY10091", batch: "2024", role: "Core Member" }
      ],
      "Content Team": [
        { name: "Rishav Raj", regno: "24BCE11519", batch: "2024", role: "Core Member" },
        { name: "Ishika Jaiswal", regno: "24BCY10251", batch: "2024", role: "Core Member" },
        { name: "Amritesh Sinha", regno: "24BAI10163", batch: "2024", role: "Core Member" },
        { name: "Aditya Singh", regno: "24BSA10344", batch: "2024", role: "Core Member" },
        { name: "Singh bhumija lalitkumar", regno: "24BCE11200", batch: "2024", role: "Core Member" },
        { name: "APRATIM RASHMI", regno: "23BHI10167", batch: "2023", role: "Core Member" }
      ],
      "Event Management": [
        { name: "Amit Bankey", regno: "23BCG10132", batch: "2023", role: "Core Member" },
        { name: "Prince Rajput", regno: "24BCE10966", batch: "2024", role: "Core Member" },
        { name: "Prabal gautam", regno: "23bcy10162", batch: "2023", role: "Core Member" },
        { name: "Mansi Sanodia", regno: "23BCE11837", batch: "2023", role: "Core Member" },
        { name: "Tarun Kumar Singh", regno: "23BCE11421", batch: "2023", role: "Core Member" },
        { name: "Devendra Mewada", regno: "23BCE10089", batch: "2023", role: "Lead" },
        { name: "Muskan sharma", regno: "23BAI11155", batch: "2023", role: "Core Member" },
        { name: "Sarah Sherwani", regno: "24BCY10372", batch: "2024", role: "Lead" },
        { name: "Kushagra Bhargava", regno: "23BAI10987", batch: "2023", role: "Core Member" },
        { name: "Pankaj Shukla", regno: "23bai10047", batch: "2023", role: "Core Member" },
        { name: "Vaishnavi Tiwari", regno: "24BCY10262", batch: "2024", role: "Core Member" },
        { name: "BHUVNESH PRATAP SINGH", regno: "23BCE11261", batch: "2023", role: "Core Member" },
        { name: "Tushar sen", regno: "23mim10171", batch: "2023", role: "Core Member" }
      ],
      "Design Team": [
        { name: "Abhinav Birajdar", regno: "23BCE10820", batch: "2023", role: "Lead" },
        { name: "Mayank Jain", regno: "23MIP10082", batch: "2023", role: "Core Member" },
        { name: "Akshara Singh", regno: "23BAI10392", batch: "2023", role: "Core Member" },
        { name: "Ananya Chaurasia", regno: "23BAI11178", batch: "2023", role: "Core Member" },
        { name: "Rahul Agarwal", regno: "23BCE11000", batch: "2023", role: "Core Member" }
      ],
      "PR & Outreach": [
        { name: "Diyasha Singh", regno: "23BCY10154", batch: "2023", role: "Core Member" },
        { name: "Manas Gursahani", regno: "24BCE11108", batch: "2024", role: "Core Member" },
        { name: "Pragati Kumari", regno: "24BCE10433", batch: "2024", role: "Core Member" },
        { name: "Yuva Bharti", regno: "23BAS10024", batch: "2023", role: "Core Member" },
        { name: "Krish mittal", regno: "23BCE10078", batch: "2023", role: "Lead" },
        { name: "Sarthak patil", regno: "24BCY10017", batch: "2024", role: "Core Member" },
        { name: "Veeti Dewangan", regno: "23BAI10100", batch: "2023", role: "Core Member" }
      ],
      "Tech Team": [
        { name: "Shubham Chaudhari", regno: "23BAI10412", batch: "2023", role: "Core Member" },
        { name: "Gurkirat Singh Dhillon", regno: "23BAI10203", batch: "2023", role: "Core Member" }
      ],
      "Social Media Team": [
        { name: "Somil Asati", regno: "23BCE10364", batch: "2023", role: "Core Member" },
        { name: "Yash Janiyani", regno: "24BCE11394", batch: "2024", role: "Core Member" }
      ]
    }

    setTeams(data)
  }, [])

  const teamColors: Record<string, string> = {
    "Cultural Team": "from-pink-500 to-red-500",
    "Content Team": "from-yellow-500 to-orange-500",
    "Event Management": "from-green-500 to-emerald-500",
    "Design Team": "from-blue-500 to-cyan-500",
    "PR & Outreach": "from-purple-500 to-indigo-500",
    "Tech Team": "from-gray-500 to-slate-500",
    "Social Media Team": "from-teal-500 to-blue-500"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">
      {Object.entries(teams).map(([teamName, members]) => (
        <section key={teamName} className="mb-12">
          <div className={`rounded-lg p-4 text-white bg-gradient-to-r ${teamColors[teamName] || "from-gray-500 to-slate-500"} flex items-center gap-3`}>
            <Users className="w-5 h-5 text-white" />
            <h2 className="text-xl font-bold capitalize">{teamName}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            {members.map((member, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <div className="mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                </div>
                <div className="text-sm text-gray-700 space-y-1">
                  <p><span className="font-medium">Reg. No:</span> {member.regno}</p>
                  <p><span className="font-medium">Batch:</span> {member.batch}</p>
                  <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-gray-100 text-gray-800 border border-gray-300">
                    {member.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}