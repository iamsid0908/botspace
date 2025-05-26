"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, Zap, Globe, Cpu, Users, Award, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,#4f46e5_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,#0ea5e9_0%,transparent_50%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge variant="outline" className="mb-4 px-4 py-1 border-purple-500 text-purple-300">
              ABOUT QUANTUM NEXUS
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400">
              Pioneering the Future of Technology
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We're a team of visionaries, innovators, and creators building the next generation of digital experiences
              that bridge the gap between imagination and reality.
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-8 py-6 text-lg">
              Our Vision <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                12+
              </p>
              <p className="text-gray-400 mt-2">Years Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                250+
              </p>
              <p className="text-gray-400 mt-2">Team Members</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-400">
                500+
              </p>
              <p className="text-gray-400 mt-2">Projects Completed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
                35+
              </p>
              <p className="text-gray-400 mt-2">Countries Served</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,#4f46e5_0%,transparent_70%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-4 px-3 py-1 border-blue-500 text-blue-300">
                OUR MISSION
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Redefining What's Possible Through Innovation</h2>
              <p className="text-gray-300 mb-6">
                At Quantum Nexus, we're on a mission to push the boundaries of technology and create solutions that
                transform industries and enhance human experiences. We believe in a future where technology serves
                humanity in more intuitive, ethical, and powerful ways.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-900 flex items-center justify-center mr-4">
                    <Zap className="h-4 w-4 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-purple-300">Cutting-edge Innovation</h3>
                    <p className="text-gray-400">Pioneering breakthrough technologies that define new possibilities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-900 flex items-center justify-center mr-4">
                    <Globe className="h-4 w-4 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-blue-300">Global Impact</h3>
                    <p className="text-gray-400">Creating solutions that address worldwide challenges</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-cyan-900 flex items-center justify-center mr-4">
                    <Users className="h-4 w-4 text-cyan-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-cyan-300">Human-Centered Design</h3>
                    <p className="text-gray-400">Building technology that enhances human potential</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-xl opacity-20"></div>
              <div className="relative bg-gray-900 bg-opacity-80 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Our mission visualization"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-3 py-1 border-cyan-500 text-cyan-300">
              OUR TEAM
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet the Visionaries</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience across multiple disciplines to create
              the future of technology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Elara Chen",
                role: "Founder & CEO",
                image: "/placeholder.svg?height=400&width=400",
                color: "from-purple-500 to-pink-500",
              },
              {
                name: "Marcus Reynolds",
                role: "Chief Technology Officer",
                image: "/placeholder.svg?height=400&width=400",
                color: "from-blue-500 to-cyan-500",
              },
              {
                name: "Sophia Nakamura",
                role: "Head of AI Research",
                image: "/placeholder.svg?height=400&width=400",
                color: "from-emerald-500 to-green-500",
              },
              {
                name: "Jamal Washington",
                role: "Design Director",
                image: "/placeholder.svg?height=400&width=400",
                color: "from-amber-500 to-orange-500",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-900 bg-opacity-60 backdrop-blur-sm border-gray-800 overflow-hidden">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-20`}></div>
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-gray-400">{member.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,#0ea5e9_0%,transparent_70%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-3 py-1 border-emerald-500 text-emerald-300">
              OUR JOURNEY
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Path to Innovation</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              From our humble beginnings to becoming a global technology leader, our journey has been defined by bold
              vision and relentless innovation.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 rounded-full"></div>

            {[
              {
                year: "2011",
                title: "The Beginning",
                description: "Founded in a small garage with a team of 5 passionate technologists",
                color: "border-purple-500 bg-purple-500/10",
              },
              {
                year: "2015",
                title: "First Major Breakthrough",
                description:
                  "Launched our revolutionary neural interface technology, securing $50M in Series A funding",
                color: "border-blue-500 bg-blue-500/10",
              },
              {
                year: "2018",
                title: "Global Expansion",
                description: "Opened offices in Tokyo, Berlin, and Singapore, growing our team to over 100 members",
                color: "border-cyan-500 bg-cyan-500/10",
              },
              {
                year: "2023",
                title: "The Next Frontier",
                description: "Unveiled our quantum computing platform, setting new standards for computational power",
                color: "border-emerald-500 bg-emerald-500/10",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-12 ${index % 2 === 0 ? "md:ml-auto md:mr-[50%] md:pr-12" : "md:mr-auto md:ml-[50%] md:pl-12"} md:w-[45%]`}
              >
                <div className={`p-6 rounded-xl border ${item.color}`}>
                  <div
                    className="absolute top-6 hidden md:block h-3 w-3 rounded-full bg-white border-4 border-cyan-500 
                    ${index % 2 === 0 ? 'right-0 translate-x-[calc(50%+1.5rem)]' : 'left-0 -translate-x-[calc(50%+1.5rem)]'}"
                  ></div>
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-gray-800 text-white mb-4">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-3 py-1 border-amber-500 text-amber-300">
              RECOGNITION
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Awards & Achievements</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and organizations worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation Excellence Award",
                organization: "World Technology Forum",
                year: "2023",
                icon: <Award className="h-8 w-8 text-amber-400" />,
              },
              {
                title: "Best Workplace in Tech",
                organization: "Global Employer Awards",
                year: "2022",
                icon: <Users className="h-8 w-8 text-emerald-400" />,
              },
              {
                title: "Breakthrough Technology of the Year",
                organization: "Tech Innovators Alliance",
                year: "2021",
                icon: <Cpu className="h-8 w-8 text-blue-400" />,
              },
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-900 bg-opacity-60 backdrop-blur-sm border-gray-800 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4">{award.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                    <p className="text-gray-400 mb-1">{award.organization}</p>
                    <p className="text-sm text-gray-500">{award.year}</p>
                    <div className="mt-auto pt-4">
                      <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 p-0 flex items-center">
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-blue-900/40"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge variant="outline" className="mb-4 px-4 py-1 border-white text-white">
              JOIN OUR JOURNEY
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Shape the Future Together?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Whether you're looking to partner with us, join our team, or learn more about our vision, we'd love to
              connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg">
                Contact Us
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
              >
                Careers
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default About
