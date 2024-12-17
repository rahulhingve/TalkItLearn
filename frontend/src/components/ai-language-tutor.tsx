import { useState } from "react"
import { Mic, ChevronDown, Flag, MoreHorizontal } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Slider } from "./ui/slider"

const rolePlayOptions = [
  "Medical",
  "Role-play as Girlfriend",
  "Role-play as Boyfriend",
  "Medical boy",
  "Role-play as teacher",
  "Role-play as bank",

]

export default function AILanguageTutor() {
  const [selectedRole, setSelectedRole] = useState("")
  const [input , setInput] = useState("")

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-500  p-4">
      <Card className="w-full max-w-3xl shadow-lg">
        <CardContent className="p-6 bg-gray-700" >
          {/* Instructor Panel */}
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 rounded-full bg-slate-300 mr-4"></div>
            <div>
              <h2 className="text-xl font-semibold">Samantha Williams</h2>
              <div className="flex items-center">
                <Flag className="w-4 h-4 mr-2 text-teal-600" />
                <span className="text-sm text-gray-100">English (US)</span>
              </div>
            </div>
            <Button variant="ghost" className="ml-auto">
              <MoreHorizontal className="w-5 h-5" />
              <span className="sr-only">Switch Teacher</span>
            </Button>
          </div>

          {/* Chat Interface */}
          <Card className="mb-4">
            <CardContent className="p-4 bg-zinc-500 rounded-lg">
              <Button variant="link" className="mb-2 text-xs">
                View More Chat History
              </Button>
              <p className="text-sm">
                Hello! I am Samantha Williams, your personal language tutor. I can help you improve your American English skills and grammar through conversations or role-play. How has your day been so far?
              </p>
              
            </CardContent>
          </Card>

          {/* Interactive Buttons */}
          <div className="mb-4 overflow-x-auto">
            <div className="flex space-x-2 pb-2">
              {rolePlayOptions.map((role) => (
                <Button
                  key={role}
                  variant={selectedRole === role ? "default" : "outline"}
                  onClick={() => setSelectedRole(role)}
                  className="whitespace-nowrap"
                >
                  {role}
                </Button>
              ))}
            </div>
          </div>
<div>
  cheching input here <br/>
  {input}
</div>
          {/* Input box */}

          <div className="w-full  ">
            <textarea onChange={(e)=>{
              setInput(e.target.value)
            }} className="text-white bg-gray-500 text-wrap w-full  placeholder:text-slate-400  text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-purple-500 hover:border-purple-300 shadow-sm focus:shadow" placeholder="Type here..." />
          </div>

          {/* Hold to Speak Button */}
          <div className="flex justify-center mb-4">
            <Button className="rounded-full w-16 h-16 bg-black hover:bg-white">
              <Mic className="w-8 h-8 text-black hover:bg-white" />
              <span className="sr-only text-white">Hold to Speak</span>
            </Button>
          </div>

          {/* Additional Elements */}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-sm font-medium mr-2">Course Training:</span>
              <Button variant="outline" size="sm">
                Basic <ChevronDown className="ml-1 w-4 h-4" />
              </Button>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium mr-2">Speed:</span>
              <Slider className="w-32" defaultValue={[50]} max={100} step={1} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

