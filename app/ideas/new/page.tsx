"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { BookOpen, Home, User, Bell, Users, X, Check, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function NewIdeaPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    lookingForCollaborators: true,
  })
  const [tags, setTags] = useState<string[]>([])
  const [currentTag, setCurrentTag] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      category: value,
    })

    // Clear error when user selects
    if (errors.category) {
      setErrors({
        ...errors,
        category: "",
      })
    }
  }

  const handleSwitchChange = (checked: boolean) => {
    setFormData({
      ...formData,
      lookingForCollaborators: checked,
    })
  }

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && currentTag.trim()) {
      e.preventDefault()
      addTag()
    }
  }

  const addTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()])
      setCurrentTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.title.trim()) {
      newErrors.title = "Title is required"
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required"
    }

    if (!formData.category) {
      newErrors.category = "Category is required"
    }

    if (tags.length === 0) {
      newErrors.tags = "At least one tag is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // Here you would typically submit the form data to your API
      console.log("Form submitted:", { ...formData, tags })

      // Show success message
      setIsSubmitted(true)

      // In a real app, you might redirect to the new idea page after submission
      // router.push(`/ideas/${newIdeaId}`)
    }
  }

  const handleCreateAnother = () => {
    setFormData({
      title: "",
      description: "",
      category: "",
      lookingForCollaborators: true,
    })
    setTags([])
    setIsSubmitted(false)
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebar>
          <SidebarHeader className="border-b">
            <div className="flex items-center gap-2 px-4 py-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">PLZ</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard">
                    <Home className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/ideas/teachers">
                    <BookOpen className="h-4 w-4" />
                    <span>Teacher Ideas</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/ideas/students">
                    <Users className="h-4 w-4" />
                    <span>Student Projects</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/my-posts">
                    <User className="h-4 w-4" />
                    <span>My Posts</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/notifications">
                    <Bell className="h-4 w-4" />
                    <span>Notifications</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        {/* Main content */}
        <div className="flex-1 p-6">
          {/* Mobile sidebar trigger */}
          <div className="mb-4 md:hidden">
            <SidebarTrigger className="mb-4" />
          </div>

          <div className="mx-auto max-w-2xl">
            <header className="mb-6">
              <h1 className="text-3xl font-bold">Submit a New Idea</h1>
              <p className="text-muted-foreground">Share your project idea with the PLZ community</p>
            </header>

            {isSubmitted ? (
              <Card>
                <CardContent className="pt-6">
                  <Alert className="bg-primary/10 border-primary/20 mb-6">
                    <Check className="h-4 w-4 text-primary" />
                    <AlertTitle>Success!</AlertTitle>
                    <AlertDescription>Your idea has been submitted successfully.</AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">{formData.title}</h3>
                    <p className="text-muted-foreground">{formData.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          #{tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-medium">Category:</span>
                      <span>{formData.category}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-medium">Looking for collaborators:</span>
                      <span>{formData.lookingForCollaborators ? "Yes" : "No"}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={handleCreateAnother}>
                    Create Another
                  </Button>
                  <Button onClick={() => router.push("/ideas/teachers")}>
                    View All Ideas <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">
                    Title <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Enter a descriptive title"
                    value={formData.title}
                    onChange={handleInputChange}
                  />
                  {errors.title && <p className="text-sm text-destructive">{errors.title}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">
                    Description <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Describe your idea in detail"
                    className="min-h-[150px]"
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                  {errors.description && <p className="text-sm text-destructive">{errors.description}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">
                    Tags <span className="text-destructive">*</span>
                  </Label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="ml-1 rounded-full hover:bg-muted p-0.5"
                        >
                          <X className="h-3 w-3" />
                          <span className="sr-only">Remove {tag}</span>
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      id="tags"
                      placeholder="Add tags (press Enter)"
                      value={currentTag}
                      onChange={(e) => setCurrentTag(e.target.value)}
                      onKeyDown={handleTagKeyDown}
                    />
                    <Button type="button" variant="outline" onClick={addTag} disabled={!currentTag.trim()}>
                      Add
                    </Button>
                  </div>
                  {errors.tags && <p className="text-sm text-destructive">{errors.tags}</p>}
                  <p className="text-xs text-muted-foreground">
                    Add relevant tags to help others find your idea (e.g., Science, Technology, Art)
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">
                    Category <span className="text-destructive">*</span>
                  </Label>
                  <Select value={formData.category} onValueChange={handleSelectChange}>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Teacher Idea">Teacher Idea</SelectItem>
                      <SelectItem value="Student Idea">Student Idea</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.category && <p className="text-sm text-destructive">{errors.category}</p>}
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="collaborators"
                    checked={formData.lookingForCollaborators}
                    onCheckedChange={handleSwitchChange}
                  />
                  <Label htmlFor="collaborators">Looking for Collaborators</Label>
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full">
                    Submit Idea
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}

