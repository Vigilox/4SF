import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const featuredItems = [
  {
    title: "Featured Handgun: Stealth X9",
    image: "/placeholder.svg?width=400&height=300",
    alt: "Stealth X9 Pistol",
    price: "$799.99",
    specs: "9mm, 15+1 Capacity, Optics Ready",
    link: "/products/stealth-x9",
  },
  {
    title: "Featured Rifle: Guardian AR-15",
    image: "/placeholder.svg?width=400&height=300",
    alt: "Guardian AR-15 Rifle",
    price: "$1249.00",
    specs: '5.56 NATO, 16" Barrel, M-LOK Rail',
    link: "/products/guardian-ar15",
  },
  {
    title: "Featured Accessory: Tactical Optic",
    image: "/placeholder.svg?width=400&height=300",
    alt: "Tactical Rifle Optic",
    price: "$299.50",
    specs: "1-4x Magnification, Illuminated Reticle",
    link: "/accessories/tactical-optic-tx400",
  },
]

export function CtaShowcase() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {featuredItems.map((item) => (
            <Card key={item.title} className="overflow-hidden flex flex-col">
              <CardHeader className="p-0">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.alt}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="text-xl lg:text-2xl font-bold mb-2">{item.title}</CardTitle>
                <CardDescription className="text-muted-foreground mb-1 text-lg font-semibold">
                  {item.price}
                </CardDescription>
                <CardDescription className="text-sm text-muted-foreground">{item.specs}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild className="w-full bg-black text-white hover:bg-gray-800 font-semibold">
                  <Link href={item.link}>
                    Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
