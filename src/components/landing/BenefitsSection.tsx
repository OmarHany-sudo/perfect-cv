import {
  CheckCircle,
  Zap,
  Palette,
  Globe,
  Save,
  Github,
  Download,
} from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Step-by-Step Simplicity",
    description:
      "Our smart form guides you through every section. Just fill in the blanks, and we'll handle the rest.",
    highlight: "5-minute setup",
  },
  {
    icon: Palette,
    title: "Beautiful Templates That Work",
    description:
      "Professional designs that actually get you interviews. All templates are ATS-tested and recruiter-approved.",
    highlight: "100+ templates",
  },
  {
    icon: Globe,
    title: "Works in Any Language",
    description:
      "Building a CV for international opportunities? We support multiple languages with proper formatting.",
    highlight: "Multi-language",
  },
  {
    icon: Save,
    title: "Save & Edit Forever",
    description:
      "Your CV grows with your career. Update anytime, anywhere, and keep multiple versions for different roles.",
    highlight: "Cloud storage",
  },
  {
    icon: Github,
    title: "One-Click Imports",
    description:
      "Connect your LinkedIn and GitHub to auto-fill your experience and projects. No more manual typing!",
    highlight: "Auto-import",
  },
  {
    icon: Download,
    title: "Perfect PDFs, Instantly",
    description:
      "Download print-ready, high-quality PDFs that look amazing on screen and paper. No formatting issues, ever.",
    highlight: "HD quality",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Everyone's Switching to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              CVBuilderPro
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've eliminated every frustration you've ever had with resume
            builders. Here's what makes us different:
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon with gradient background */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    {benefit.highlight}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            );
          })}
        </div>

        {/* Quick wins section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              You'll Love These Quick Wins
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    No More Writer's Block
                  </h4>
                  <p className="text-gray-600">
                    Smart suggestions and examples help you describe your
                    experience perfectly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Beat the Robots
                  </h4>
                  <p className="text-gray-600">
                    All templates pass ATS scans so you actually reach human
                    recruiters.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Mobile Friendly
                  </h4>
                  <p className="text-gray-600">
                    Build and edit your CV on any device, anywhere, anytime.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Data Privacy First
                  </h4>
                  <p className="text-gray-600">
                    Your information is encrypted and never shared. You own your
                    data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
