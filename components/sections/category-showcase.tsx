import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

const categories = [
  {
    name: "Handguns",
    value: "handguns",
    image: "/placeholder.svg?width=350&height=250",
    alt: "Handguns category",
    products: [
      {
        id: "hg1",
        name: "Compact Defender 9",
        price: "$549.99",
        image: "/placeholder.svg?width=300&height=200",
        label: "9mm",
      },
      {
        id: "hg2",
        name: "Full-Size Marksman .45",
        price: "$799.00",
        image: "/placeholder.svg?width=300&height=200",
        label: ".45 ACP",
      },
      {
        id: "hg3",
        name: "Pocket Rocket .380",
        price: "$329.50",
        image: "/placeholder.svg?width=300&height=200",
        label: ".380 Auto",
      },
    ],
  },
  {
    name: "Rifles",
    value: "rifles",
    image: "/placeholder.svg?width=350&height=250",
    alt: "Rifles category",
    products: [
      {
        id: "r1",
        name: "AR-15 Tactical Carbine",
        price: "$999.99",
        image: "/placeholder.svg?width=300&height=200",
        label: "5.56 NATO",
      },
      {
        id: "r2",
        name: "Precision Bolt-Action .308",
        price: "$1450.00",
        image: "/placeholder.svg?width=300&height=200",
        label: ".308 Win",
      },
      {
        id: "r3",
        name: "Scout Rifle Package",
        price: "$899.00",
        image: "/placeholder.svg?width=300&height=200",
        label: "Multi-Cal",
      },
    ],
  },
  {
    name: "Shotguns",
    value: "shotguns",
    image: "/placeholder.svg?width=350&height=250",
    alt: "Shotguns category",
    products: [
      {
        id: "sg1",
        name: "Tactical Home Defense 12G",
        price: "$499.99",
        image: "/placeholder.svg?width=300&height=200",
        label: "12 Gauge",
      },
      {
        id: "sg2",
        name: "Over-Under Sporting Clay",
        price: "$1199.00",
        image: "/placeholder.svg?width=300&height=200",
        label: "12 Gauge",
      },
      {
        id: "sg3",
        name: "Compact Pump Action",
        price: "$375.00",
        image: "/placeholder.svg?width=300&height=200",
        label: "20 Gauge",
      },
    ],
  },
  {
    name: "Accessories",
    value: "accessories",
    image: "/placeholder.svg?width=350&height=250",
    alt: "Accessories category",
    products: [
      {
        id: "ac1",
        name: "Red Dot Sight Pro",
        price: "$249.99",
        image: "/placeholder.svg?width=300&height=200",
        label: "Optic",
      },
      {
        id: "ac2",
        name: "Tactical Sling Elite",
        price: "$49.00",
        image: "/placeholder.svg?width=300&height=200",
        label: "Gear",
      },
      {
        id: "ac3",
        name: "High-Capacity Magazine",
        price: "$29.99",
        image: "/placeholder.svg?width=300&height=200",
        label: "Magazine",
      },
    ],
  },
]

export function CategoryShowcase() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Shop by Category</h2>
        <p className="text-lg text-muted-foreground text-center mb-10 md:mb-12 max-w-2xl mx-auto">
          Find exactly what you need from our extensive selection of firearms and accessories.
        </p>
        <Tabs defaultValue="handguns" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 h-auto">
            {categories.map((category) => (
              <TabsTrigger
                key={category.value}
                value={category.value}
                className="py-3 text-base font-semibold data-[state=active]:bg-amber-700 data-[state=active]:text-black"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category.value} value={category.value}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {category.products.map((product) => (
                  <Card key={product.id} className="overflow-hidden flex flex-col">
                    <CardHeader className="p-0 relative">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={200}
                        className="w-full h-auto object-cover aspect-[3/2]"
                      />
                      <Badge className="absolute top-2 right-2 bg-black text-white">{product.label}</Badge>
                    </CardHeader>
                    <CardContent className="p-4 flex-grow">
                      <CardTitle className="text-lg font-semibold mb-1 group-hover:text-amber-700 transition-colors">
                        {product.name}
                      </CardTitle>
                      <p className="text-xl font-bold text-amber-800 mb-2">{product.price}</p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex gap-2">
                      <Button asChild variant="outline" className="flex-1">
                        <Link href={`/products/${product.id}`}>View Details</Link>
                      </Button>
                      <Button asChild className="flex-1 bg-black text-white hover:bg-gray-800">
                        <Link href={`/cart?add=${product.id}`}>Add to Cart</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-10">
                <Button asChild size="lg" className="bg-amber-700 text-black hover:bg-amber-600 font-semibold">
                  <Link href={`/firearms/${category.value}`}>View All {category.name}</Link>
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
