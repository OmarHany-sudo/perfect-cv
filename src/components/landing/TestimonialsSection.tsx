import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Software Engineer",
    company: "Google",
    avatar: "SC",
    rating: 5,
    content:
      "CVBuilderPro helped me land my dream job at Google! The templates are modern and ATS-friendly. I got 3x more interview calls after using their platform.",
    featured: true,
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Marketing Director",
    company: "Startup Inc.",
    avatar: "MJ",
    rating: 5,
    content:
      "As someone who hates dealing with formatting, CVBuilderPro was a lifesaver. Created my CV in 10 minutes and got hired within 2 weeks!",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    role: "Research Scientist",
    company: "MIT",
    avatar: "ER",
    rating: 5,
    content:
      "The academic templates are perfect for my field. Multi-language support helped me apply for positions internationally. Highly recommended!",
  },
  {
    id: 4,
    name: "Alex Thompson",
    role: "UX Designer",
    company: "Adobe",
    avatar: "AT",
    rating: 5,
    content:
      "The creative templates really showcase my design skills while maintaining professionalism. The PDF export quality is outstanding.",
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "Recent Graduate",
    company: "Goldman Sachs",
    avatar: "PP",
    rating: 5,
    content:
      "As a new graduate, I was struggling to make my limited experience look impressive. CVBuilderPro's guidance and templates helped me secure a position at Goldman Sachs!",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Project Manager",
    company: "Microsoft",
    avatar: "JW",
    rating: 5,
    content:
      "The LinkedIn integration saved me hours of work. Everything imported seamlessly and the final result looked incredibly professional.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by 50,000+ Job Seekers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how CVBuilderPro has helped professionals land jobs at top
            companies worldwide
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              95%
            </div>
            <div className="text-gray-600">Interview Rate Increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
              2.5x
            </div>
            <div className="text-gray-600">More Job Offers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
              5 min
            </div>
            <div className="text-gray-600">Average Build Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
              4.9★
            </div>
            <div className="text-gray-600">User Rating</div>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className={`${
                testimonial.featured
                  ? "ring-2 ring-blue-500 shadow-xl"
                  : "shadow-lg"
              } hover:shadow-xl transition-all duration-300`}
            >
              <CardContent className="p-6">
                {/* Quote icon */}
                <Quote className="h-8 w-8 text-blue-600 mb-4" />

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Featured badge */}
                {testimonial.featured && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Trusted by professionals at:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              "Google",
              "Microsoft",
              "Apple",
              "Amazon",
              "Meta",
              "Netflix",
              "Tesla",
              "Goldman Sachs",
            ].map((company) => (
              <div
                key={company}
                className="text-lg font-semibold text-gray-700"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
