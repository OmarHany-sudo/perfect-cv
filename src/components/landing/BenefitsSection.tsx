import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Zap,
  Palette,
  Globe,
  Save,
  Github,
  Download,
  Target,
  Clock,
  Shield,
} from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Lightning-Fast Builder",
    description:
      "Create professional CVs in under 5 minutes with our intuitive step-by-step process. No more spending hours on formatting.",
    color: "text-yellow-600 bg-yellow-100",
  },
  {
    icon: Palette,
    title: "100+ Premium Templates",
    description:
      "Choose from professionally designed templates that are proven to get results. Free and premium options available.",
    color: "text-purple-600 bg-purple-100",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description:
      "Build your CV in multiple languages with automatic formatting adjustments for different markets and cultures.",
    color: "text-blue-600 bg-blue-100",
  },
  {
    icon: Save,
    title: "Save & Edit Anytime",
    description:
      "Create your account and access your CVs from anywhere. Make updates instantly as your career progresses.",
    color: "text-green-600 bg-green-100",
  },
  {
    icon: Github,
    title: "LinkedIn & GitHub Integration",
    description:
      "Import your professional information directly from LinkedIn and showcase your GitHub projects automatically.",
    color: "text-gray-600 bg-gray-100",
  },
  {
    icon: Download,
    title: "Instant PDF Export",
    description:
      "Download high-quality, print-ready PDFs instantly. Perfect formatting guaranteed for both digital and print applications.",
    color: "text-red-600 bg-red-100",
  },
  {
    icon: Target,
    title: "ATS-Optimized",
    description:
      "Our templates are designed to pass Applicant Tracking Systems, ensuring your CV reaches human recruiters.",
    color: "text-indigo-600 bg-indigo-100",
  },
  {
    icon: Clock,
    title: "Real-Time Preview",
    description:
      "See your changes instantly as you type. What you see is exactly what recruiters will receive.",
    color: "text-orange-600 bg-orange-100",
  },
  {
    icon: Shield,
    title: "Privacy Guaranteed",
    description:
      "Your data is encrypted and secure. We never share your information with third parties. Export and delete anytime.",
    color: "text-teal-600 bg-teal-100",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose CVBuilderPro?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create outstanding CVs that get noticed by
            employers and pass through automated screening systems.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg ${benefit.color} flex items-center justify-center mb-4`}
                  >
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Build Your Perfect CV?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of professionals who've landed their dream jobs
              with CVBuilderPro
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started Free
              </button>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
