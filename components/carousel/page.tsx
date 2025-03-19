"use client"
import Image from "next/image"
import { Card, CardFooter } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const recipes = [ { name: "Grilled Chicken Salad", url: "/grilled-chicken-salad.jpg", }, { name: "Avocado Toast", url: "/avacado-toast.jpg", }, { name: "Chicken Wrap", url: "/chicken-wrap.jpg", }, { name: "Lentil Soup", url: "/lentil-soup.jpg", }, { name: "Noodles", url: "/noodles.jpg", }, { name: "Nut Snack", url: "/nut-snack.jpg", }, { name: "Pineapple Cheese", url: "/pineapple-cottage-cheese.jpg", }, { name: "Quinoa", url: "/quinoa.jpg", }, { name: "Shrimp Taco", url: "/shrimp-taco.jpg", }, { name: "Stuffed Bell Peppers", url: "/stuffed-bell-peppers.jpg", }, ];

export default function RecipeCarousel() {
    return (
      <div className="w-full px-4 py-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Top 10 Food Recipes</h2>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent>
            {recipes.map((recipe, index) => (
              <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-55 w-full top-0">
                    <Image
                      src={recipe.url}
                      alt={recipe.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardFooter className="p-3 border-t bg-card">
                    <h3 className="text-center w-full font-medium text-sm md:text-base">{recipe.name}</h3>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4 gap-2">
            <CarouselPrevious className="static" />
            <CarouselNext className="static" />
          </div>
        </Carousel>
      </div>
    )
  }