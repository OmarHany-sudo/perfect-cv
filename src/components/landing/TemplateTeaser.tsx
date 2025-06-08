import { Button } from "@/components/ui/button";
import { Crown, ArrowRight, Sparkles } from "lucide-react";

const TemplateTeaser = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Templates That Actually
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              Get You Hired
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every template is designed by professionals and tested with real
            recruiters. Start with free templates, upgrade for premium designs.
          </p>
        </div>

        {/* Template preview cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Free Templates Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 relative overflow-hidden">
            <div className="absolute top-6 right-6">
              <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                Free Forever
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Professional Essentials
              </h3>
              <p className="text-gray-600">
                Clean, modern designs perfect for any industry. ATS-optimized
                and recruiter-tested.
              </p>
            </div>

            {/* Mock template previews */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="aspect-[3/4] bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-3">
                <div className="h-full bg-white rounded shadow-sm p-2 space-y-1">
                  <div className="h-2 bg-blue-300 rounded w-3/4"></div>
                  <div className="h-1 bg-gray-200 rounded w-1/2"></div>
                  <div className="space-y-0.5 mt-2">
                    <div className="h-1 bg-gray-300 rounded"></div>
                    <div className="h-1 bg-gray-300 rounded w-4/5"></div>
                    <div className="h-1 bg-gray-300 rounded w-3/5"></div>
                  </div>
                </div>
              </div>
              <div className="aspect-[3/4] bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-3">
                <div className="h-full bg-white rounded shadow-sm p-2 space-y-1">
                  <div className="h-2 bg-green-300 rounded w-3/4"></div>
                  <div className="h-1 bg-gray-200 rounded w-1/2"></div>
                  <div className="space-y-0.5 mt-2">
                    <div className="h-1 bg-gray-300 rounded"></div>
                    <div className="h-1 bg-gray-300 rounded w-4/5"></div>
                    <div className="h-1 bg-gray-300 rounded w-3/5"></div>
                  </div>
                </div>
              </div>
              <div className="aspect-[3/4] bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-3">
                <div className="h-full bg-white rounded shadow-sm p-2 space-y-1">
                  <div className="h-2 bg-purple-300 rounded w-3/4"></div>
                  <div className="h-1 bg-gray-200 rounded w-1/2"></div>
                  <div className="space-y-0.5 mt-2">
                    <div className="h-1 bg-gray-300 rounded"></div>
                    <div className="h-1 bg-gray-300 rounded w-4/5"></div>
                    <div className="h-1 bg-gray-300 rounded w-3/5"></div>
                  </div>
                </div>
              </div>
            </div>

            <ul className="space-y-2 mb-6 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span>15+ professional designs</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span>ATS-friendly formatting</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span>Perfect for entry to mid-level</span>
              </li>
            </ul>

            <Button className="w-full bg-green-600 hover:bg-green-700">
              Start with Free Templates
            </Button>
          </div>

          {/* Premium Templates Card */}
          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-8 shadow-xl text-white relative overflow-hidden">
            <div className="absolute top-6 right-6">
              <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <Crown className="h-3 w-3" />
                Premium
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-3">Executive & Creative</h3>
              <p className="text-purple-100">
                Stand-out designs for senior roles and creative industries. Make
                an unforgettable first impression.
              </p>
            </div>

            {/* Mock template previews - premium */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="aspect-[3/4] bg-gradient-to-br from-yellow-200 to-orange-300 rounded-lg p-3">
                <div className="h-full bg-white rounded shadow-lg p-2 space-y-1">
                  <div className="h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded w-3/4"></div>
                  <div className="h-1 bg-gray-200 rounded w-1/2"></div>
                  <div className="space-y-0.5 mt-2">
                    <div className="h-1 bg-gray-300 rounded"></div>
                    <div className="h-1 bg-gray-300 rounded w-4/5"></div>
                  </div>
                </div>
              </div>
              <div className="aspect-[3/4] bg-gradient-to-br from-pink-200 to-rose-300 rounded-lg p-3">
                <div className="h-full bg-white rounded shadow-lg p-2 space-y-1">
                  <div className="h-2 bg-gradient-to-r from-blue-400 to-teal-400 rounded w-3/4"></div>
                  <div className="h-1 bg-gray-200 rounded w-1/2"></div>
                  <div className="space-y-0.5 mt-2">
                    <div className="h-1 bg-gray-300 rounded"></div>
                    <div className="h-1 bg-gray-300 rounded w-4/5"></div>
                  </div>
                </div>
              </div>
              <div className="aspect-[3/4] bg-gradient-to-br from-blue-200 to-indigo-300 rounded-lg p-3">
                <div className="h-full bg-white rounded shadow-lg p-2 space-y-1">
                  <div className="h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded w-3/4"></div>
                  <div className="h-1 bg-gray-200 rounded w-1/2"></div>
                  <div className="space-y-0.5 mt-2">
                    <div className="h-1 bg-gray-300 rounded"></div>
                    <div className="h-1 bg-gray-300 rounded w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>

            <ul className="space-y-2 mb-6 text-sm text-purple-100">
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>100+ premium designs</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>Executive & creative layouts</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>Advanced customization</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>Priority support</span>
              </li>
            </ul>

            <Button className="w-full bg-white text-purple-600 hover:bg-gray-100">
              Upgrade to Premium
            </Button>

            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Not Sure Which Templates to Choose?
            </h3>
            <p className="text-gray-600 mb-6">
              Start with our free templates and upgrade anytime. Every template
              is mobile-responsive, ATS-optimized, and recruiter-approved.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Browse All Templates
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplateTeaser;
