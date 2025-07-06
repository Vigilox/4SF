import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { HeroSection } from "@/components/sections/hero-section"
import { CtaShowcase } from "@/components/sections/cta-showcase"
import { CategoryShowcase } from "@/components/sections/category-showcase"
import { SchedulingSection } from "@/components/sections/scheduling-section"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <CtaShowcase />
        <CategoryShowcase />
        <SchedulingSection />
        {/* Additional sections can be added here */}
      </main>
      <SiteFooter />
    </div>
  )
}
