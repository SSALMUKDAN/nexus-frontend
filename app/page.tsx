import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BookOpen, MessageSquare, ChevronRight, Lightbulb, GraduationCap, ArrowRight } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">PLZ</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Success Stories
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4">
              Login
            </Link>
            <Button asChild size="sm">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Bringing Ideas to Life – Together!
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    PLZ connects teachers and students to collaborate on projects, share ideas, and create meaningful
                    learning experiences.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    Get Started <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Collaboration illustration"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How PLZ Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Our platform makes it easy for teachers and students to connect, collaborate, and create amazing
                  projects together.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Teacher Ideas</h3>
                <p className="text-center text-muted-foreground">
                  Teachers post project ideas for students to develop, providing real-world challenges and guidance.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Student Proposals</h3>
                <p className="text-center text-muted-foreground">
                  Students propose projects requiring teacher collaboration, showcasing initiative and creativity.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Interactive Discussions</h3>
                <p className="text-center text-muted-foreground">
                  Engage in meaningful conversations with comments and replies to refine ideas and provide feedback.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Success Stories</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  See how PLZ has transformed the way teachers and students collaborate on projects.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    "PLZ has revolutionized how I engage students in real-world projects. The platform makes it easy to
                    share ideas and provide feedback throughout the development process."
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="rounded-full bg-muted h-10 w-10"></div>
                  <div>
                    <p className="text-sm font-medium">Dr. Sarah Johnson</p>
                    <p className="text-xs text-muted-foreground">Computer Science Professor</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    "As a student, I was able to find a mentor for my robotics project through PLZ. The guidance I
                    received was invaluable, and now my project is being implemented in local schools!"
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="rounded-full bg-muted h-10 w-10"></div>
                  <div>
                    <p className="text-sm font-medium">Miguel Rodriguez</p>
                    <p className="text-xs text-muted-foreground">Engineering Student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Collaborate?</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Join PLZ today and start connecting with teachers and students to bring your ideas to life.
                </p>
              </div>
              <Button size="lg" className="mt-4 gap-1">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="text-lg font-semibold">PLZ</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4">
              Login
            </Link>
            <Link href="/signup" className="text-sm font-medium hover:underline underline-offset-4">
              Sign Up
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} PLZ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

