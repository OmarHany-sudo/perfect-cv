import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Download, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-20 pb-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
            Create Your Perfect
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block mt-2">
              Professional CV
            </span>
            <span className="text-3xl md:text-5xl lg:text-6xl block mt-2">
              in Minutes
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            CVBuilderPro makes it effortless to create stunning, ATS-friendly
            resumes that land interviews. No design skills required—just your
            experience and our proven templates.
          </p>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-6 mb-10 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>50,000+ users</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>100+ templates</span>
            </div>
            <div className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              <span>Instant PDF export</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
            >
              Start Building for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              View Sample CVs
            </Button>
          </div>

          {/* Trust indicators */}
          <p className="text-sm text-gray-500 mb-8">
            ✓ No credit card required ✓ 5-minute setup ✓ Download instantly
          </p>

          {/* Hero visual */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-2xl p-8 border">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <FileText className="h-8 w-8 text-blue-600" />
                  </div>
                  <p className="text-gray-600 font-medium">
                    Interactive CV Builder Preview
                  </p>
                  <p className="text-sm text-gray-500">
                    Step-by-step guidance • Real-time preview • Multiple formats
                  </p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              ATS-Friendly
            </div>
            <div className="absolute -top-4 -right-4 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
              Multi-Language
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
              PDF Export Ready
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
