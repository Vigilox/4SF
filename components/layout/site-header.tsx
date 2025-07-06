import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import {
  ShoppingCart,
  User,
  Search,
  Menu,
  PenIcon as Gun,
  Target,
  ShieldCheck,
  MessageSquare,
  Phone,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react"
import * as React from "react"

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

export function SiteHeader() {
  const menuItems = [
    {
      trigger: "Firearms",
      icon: <Gun className="h-4 w-4 mr-2" />,
      items: [
        { title: "Handguns", href: "/firearms/handguns", description: "Pistols and revolvers for all needs." },
        { title: "Rifles", href: "/firearms/rifles", description: "AR-15s, bolt-actions, and more." },
        { title: "Shotguns", href: "/firearms/shotguns", description: "Tactical, hunting, and sport shotguns." },
        { title: "Used Firearms", href: "/firearms/used", description: "Quality pre-owned firearms." },
      ],
      featured: [
        {
          title: "New Arrivals: G45 Pistol",
          href: "/products/g45",
          description: "Check out the latest Gen5 Glock.",
          image: "/placeholder.svg?width=150&height=100",
        },
        {
          title: "AR-15 Builder Kits",
          href: "/collections/ar15-kits",
          description: "Customize your own AR-15.",
          image: "/placeholder.svg?width=150&height=100",
        },
      ],
    },
    {
      trigger: "Training & Range",
      icon: <Target className="h-4 w-4 mr-2" />,
      items: [
        {
          title: "Gun Safety Classes",
          href: "/training/safety-classes",
          description: "Learn firearm safety fundamentals.",
        },
        {
          title: "Advanced Courses",
          href: "/training/advanced-courses",
          description: "Tactical and skill-building classes.",
        },
        {
          title: "Book Range Time",
          href: "/range/book",
          description: "Reserve your lane at our state-of-the-art facility.",
        },
        { title: "Range Memberships", href: "/range/memberships", description: "Exclusive benefits for members." },
      ],
      featured: [
        {
          title: "Upcoming Basic Pistol Course",
          href: "/training/basic-pistol",
          description: "Enroll now for next month.",
          image: "/placeholder.svg?width=150&height=100",
        },
        {
          title: "New Tactical Carbine Bay",
          href: "/range/carbine-bay",
          description: "Experience our new dynamic range.",
          image: "/placeholder.svg?width=150&height=100",
        },
      ],
    },
    {
      trigger: "Accessories",
      icon: <ShieldCheck className="h-4 w-4 mr-2" />,
      items: [
        { title: "Optics & Sights", href: "/accessories/optics", description: "Red dots, scopes, and iron sights." },
        { title: "Magazines & Ammo", href: "/accessories/magazines-ammo", description: "All calibers and capacities." },
        {
          title: "Holsters & Gear",
          href: "/accessories/holsters-gear",
          description: "Carry solutions and tactical gear.",
        },
        {
          title: "Cleaning & Maintenance",
          href: "/accessories/cleaning",
          description: "Keep your firearms in top condition.",
        },
      ],
      featured: [
        {
          title: "Red Dot Sights Sale",
          href: "/accessories/optics?filter=red-dot",
          description: "Save on top optic brands.",
          image: "/placeholder.svg?width=150&height=100",
        },
        {
          title: "Bulk Ammo Deals",
          href: "/accessories/magazines-ammo?filter=bulk",
          description: "Stock up and save big.",
          image: "/placeholder.svg?width=150&height=100",
        },
      ],
    },
  ]

  const quickLinks = [
    { title: "Gun Safety", href: "/gun-safety", icon: <ShieldCheck className="h-4 w-4" /> },
    { title: "Range Booking", href: "/range/book", icon: <Target className="h-4 w-4" /> },
    { title: "Support", href: "/support", icon: <MessageSquare className="h-4 w-4" /> },
    { title: "Contact Us", href: "/contact", icon: <Phone className="h-4 w-4" /> },
  ]

  const blogPosts = [
    { title: "Choosing Your First Handgun", href: "/blog/first-handgun", date: "May 15, 2025" },
    { title: "AR-15 Maintenance Tips", href: "/blog/ar15-maintenance", date: "May 22, 2025" },
    { title: "Understanding Red Dot Sights", href: "/blog/red-dot-sights", date: "May 28, 2025" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="bg-black text-white py-2">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Gun className="h-8 w-8 text-amber-500" />
            <span className="text-xl font-bold">4 SEASONS FIREARMS</span>
          </Link>
          <div className="hidden md:flex items-center gap-3">
            <Link href="#" aria-label="Twitter" className="text-gray-300 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Facebook" className="text-gray-300 hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Instagram" className="text-gray-300 hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-gray-700">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Shopping Cart</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-gray-700">
              <User className="h-5 w-5" />
              <span className="sr-only">My Account</span>
            </Button>
            <form className="relative ml-auto flex-1 sm:flex-initial">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-gray-800 border-gray-700 text-white focus:bg-gray-700"
              />
            </form>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
                <nav className="flex flex-col gap-4 p-4">
                  {menuItems.map((item) => (
                    <div key={item.trigger} className="flex flex-col">
                      <h3 className="font-semibold text-lg mb-2 flex items-center">
                        {item.icon} {item.trigger}
                      </h3>
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="text-muted-foreground hover:text-foreground py-1 px-2 rounded hover:bg-accent"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <hr />
                  <h3 className="font-semibold text-lg mb-2 mt-4">Quick Links</h3>
                  {quickLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground py-1 px-2 rounded hover:bg-accent flex items-center gap-2"
                    >
                      {link.icon} {link.title}
                    </Link>
                  ))}
                  <hr />
                  <div className="flex items-center gap-3 mt-4">
                    <Link
                      href="#"
                      aria-label="Twitter"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </Link>
                    <Link
                      href="#"
                      aria-label="Facebook"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                    </Link>
                    <Link
                      href="#"
                      aria-label="Instagram"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </Link>
                  </div>
                  <Button variant="outline" className="mt-2 w-full justify-start">
                    <ShoppingCart className="h-5 w-5 mr-2" /> Shopping Cart
                  </Button>
                  <Button variant="outline" className="mt-2 w-full justify-start">
                    <User className="h-5 w-5 mr-2" /> My Account
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <div className="container mx-auto hidden md:flex h-16 items-center justify-center px-4 md:px-6">
        <NavigationMenu>
          <NavigationMenuList>
            {menuItems.map((menu) => (
              <NavigationMenuItem key={menu.trigger}>
                <NavigationMenuTrigger className="text-base font-semibold flex items-center">
                  {menu.icon} {menu.trigger}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[var(--radix-navigation-menu-viewport-width)] gap-3 p-4 md:grid-cols-[1fr_1fr_0.75fr] lg:grid-cols-[.75fr_.75fr_.75fr_1fr]">
                    <div className="flex flex-col space-y-2">
                      <h3 className="font-medium text-lg">{menu.trigger} Categories</h3>
                      <ul className="grid gap-1">
                        {menu.items.map((item) => (
                          <ListItem key={item.title} title={item.title} href={item.href}>
                            {item.description}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <h3 className="font-medium text-lg">Featured {menu.trigger}</h3>
                      <ul className="grid gap-3">
                        {menu.featured?.map((item) => (
                          <li key={item.title} className="rounded-md hover:bg-accent">
                            <Link href={item.href} className="flex gap-3 p-2 items-center">
                              <Image
                                src={item.image || "/placeholder.svg?width=100&height=70&query=featured+product"}
                                alt={item.title}
                                width={100}
                                height={70}
                                className="rounded-md object-cover aspect-[4/3]"
                              />
                              <div>
                                <p className="text-sm font-medium">{item.title}</p>
                                <p className="text-xs text-muted-foreground">{item.description}</p>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <h3 className="font-medium text-lg">Quick Links</h3>
                      <ul className="grid gap-1">
                        {quickLinks.map((link) => (
                          <ListItem
                            key={link.title}
                            title={link.title}
                            href={link.href}
                            className="flex items-center gap-2"
                          >
                            {link.icon}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                    <div className="row-span-3 flex flex-col space-y-2">
                      <h3 className="font-medium text-lg">Recent News & Blog</h3>
                      <ul className="grid gap-3">
                        {blogPosts.map((post) => (
                          <li key={post.title} className="rounded-md hover:bg-accent p-2">
                            <Link href={post.href} className="block">
                              <p className="text-sm font-medium">{post.title}</p>
                              <p className="text-xs text-muted-foreground">{post.date}</p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="mt-auto">
                        View All Posts
                      </Button>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-base font-semibold")}>
                  <Phone className="h-4 w-4 mr-2" />
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
