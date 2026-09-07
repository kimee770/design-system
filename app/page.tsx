"use client"

import * as React from "react"
import { toast } from "sonner"
import {
  BellIcon,
  CreditCardIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

function Section({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="cn-font-heading text-lg font-medium">{title}</h2>
        {description ? (
          <p className="text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  )
}

export default function Page() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 py-12">
      {/* Header */}
      <header className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Badge>Design System</Badge>
          <Badge variant="secondary">shadcn/ui</Badge>
          <Badge variant="outline">base-rhea</Badge>
        </div>
        <h1 className="cn-font-heading text-3xl font-semibold tracking-tight">
          Component Showcase
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Next.js 16 · React 19 · Tailwind CSS v4 · Base UI. A curated starter
          set of components, themed violet on a neutral base. Press{" "}
          <kbd className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
            d
          </kbd>{" "}
          to toggle dark mode.
        </p>
      </header>

      <Separator />

      {/* Buttons */}
      <Section title="Buttons" description="Six variants and four sizes.">
        <div className="flex flex-wrap items-center gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon" aria-label="Settings">
            <SettingsIcon />
          </Button>
        </div>
      </Section>

      {/* Form */}
      <Section
        title="Form controls"
        description="Inputs, selection and toggles."
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="plan">Plan</Label>
            <Select defaultValue="pro">
              <SelectTrigger id="plan" className="w-full">
                <SelectValue placeholder="Select a plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="pro">Pro</SelectItem>
                <SelectItem value="team">Team</SelectItem>
                <SelectItem value="enterprise">Enterprise</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2 sm:col-span-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Tell us what you think…" />
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <Checkbox id="terms" defaultChecked />
            <Label htmlFor="terms">Accept terms</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="notifications" defaultChecked />
            <Label htmlFor="notifications">Notifications</Label>
          </div>
        </div>
      </Section>

      {/* Overlays */}
      <Section
        title="Overlays & feedback"
        description="Dialog, dropdown menu, tooltip and toasts."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Dialog>
            <DialogTrigger render={<Button>Open dialog</Button>} />
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4 py-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Ada Lovelace" />
                </div>
              </div>
              <DialogFooter>
                <DialogClose render={<Button variant="outline">Cancel</Button>} />
                <DialogClose render={<Button>Save changes</Button>} />
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="outline">Account menu</Button>}
            />
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuLabel>My account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <UserIcon />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCardIcon />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BellIcon />
                Notifications
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <LogOutIcon />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Tooltip>
            <TooltipTrigger render={<Button variant="ghost">Hover me</Button>} />
            <TooltipContent>Helpful hint</TooltipContent>
          </Tooltip>

          <Button
            variant="secondary"
            onClick={() =>
              toast.success("Changes saved", {
                description: "Your preferences have been updated.",
              })
            }
          >
            Show toast
          </Button>
        </div>
      </Section>

      {/* Composition */}
      <Section
        title="Composition"
        description="A card that combines several primitives."
      >
        <Card className="max-w-md">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>AL</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <CardTitle>Ada Lovelace</CardTitle>
                <CardDescription>Product designer</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>
              <TabsContent
                value="overview"
                className="pt-3 text-sm text-muted-foreground"
              >
                Building a cohesive component library with consistent tokens for
                color, radius and spacing.
              </TabsContent>
              <TabsContent
                value="activity"
                className="pt-3 text-sm text-muted-foreground"
              >
                Shipped 12 components this week across two registries.
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="border-t">
            <Button size="sm">View profile</Button>
          </CardFooter>
        </Card>
      </Section>
    </main>
  )
}
