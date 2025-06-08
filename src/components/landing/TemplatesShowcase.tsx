import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Star, Crown } from "lucide-react";

const templates = [
  {
    id: 1,
    name: "Modern Professional",
    category: "Executive",
    isPremium: false,
    rating: 4.9,
    downloads: "12k+",
    preview:
      "A clean, modern design perfect for tech and business professionals",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    name: "Creative Designer",
    category: "Creative",
    isPremium: true,
    rating: 4.8,
    downloads: "8.5k+",
    preview:
      "Eye-catching design ideal for creative professionals and designers",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 3,
    name: "Classic Elegance",
    category: "Traditional",
    isPremium: false,
    rating: 4.7,
    downloads: "15k+",
    preview:
      "Timeless design suitable for conservative industries and senior roles",
    color: "from-gray-600 to-gray-700",
  },
  {
    id: 4,
    name: "Tech Innovator",
    category: "Technology",
    isPremium: true,
    rating: 4.9,
    downloads: "9.2k+",
    preview:
      "Modern tech-focused design with clean lines and technical elements",
    color: "from-green-500 to-teal-600",
  },
  {
    id: 5,
    name: "Academic Scholar",
    category: "Academic",
    isPremium: false,
    rating: 4.6,
    downloads: "6.8k+",
    preview:
      "Professional academic template perfect for researchers and educators",
    color: "from-indigo-500 to-blue-600",
  },
  {
    id: 6,
    name: "Startup Founder",
    category: "Entrepreneurial",
    isPremium: true,
    rating: 4.8,
    downloads: "7.1k+",
    preview: "Dynamic design for entrepreneurs and startup professionals",
    color: "from-orange-500 to-red-600",
  },
];

const TemplatesShowcase = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose from 100+ Professional Templates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Every template is carefully designed by professionals and optimized
            for ATS systems. Free templates to get you started, premium
            templates to make you stand out.
          </p>

          {/* Filter badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge variant="default" className="px-4 py-2">
              All Templates
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Free
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Premium
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Executive
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Creative
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Technology
            </Badge>
          </div>
        </div>

        {/* Templates grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {templates.map((template) => (
            <Card
              key={template.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative">
                {/* Template preview */}
                <div
                  className={`h-64 bg-gradient-to-br ${template.color} p-6 flex flex-col justify-between text-white relative overflow-hidden`}
                >
                  {/* Premium badge */}
                  {template.isPremium && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-yellow-500 text-yellow-900 font-semibold">
                        <Crown className="h-3 w-3 mr-1" />
                        Premium
                      </Badge>
                    </div>
                  )}

                  {/* Mock CV content */}
                  <div className="space-y-3">
                    <div className="h-3 bg-white/30 rounded w-3/4"></div>
                    <div className="h-2 bg-white/20 rounded w-1/2"></div>
                    <div className="space-y-1 mt-6">
                      <div className="h-2 bg-white/25 rounded w-full"></div>
                      <div className="h-2 bg-white/25 rounded w-4/5"></div>
                      <div className="h-2 bg-white/25 rounded w-3/5"></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium">
                        {template.rating}
                      </span>
                    </div>
                    <span className="text-sm opacity-75">•</span>
                    <span className="text-sm opacity-75">
                      {template.downloads} downloads
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg text-gray-900">
                      {template.name}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {template.category}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {template.preview}
                  </p>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      Use Template
                    </Button>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Can't Find the Perfect Template?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're constantly adding new templates based on user feedback and
              industry trends. Request a custom template or suggest improvements
              to existing ones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>Browse All Templates</Button>
              <Button variant="outline">Request Custom Template</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplatesShowcase;
