import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, CreditCard, Download } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main CTA headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join 50,000+ professionals who've transformed their careers with
            CVBuilderPro. Start building your winning CV today—completely free!
          </p>

          {/* Urgency/Value props */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10 text-blue-100">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>Ready in 5 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              <span>Instant PDF download</span>
            </div>
          </div>

          {/* Primary CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Start Building Your CV Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 text-lg transition-all duration-300"
            >
              Explore Premium Templates
            </Button>
          </div>

          {/* Money-back guarantee */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto mb-12">
            <h3 className="text-xl font-semibold text-white mb-3">
              30-Day Money-Back Guarantee
            </h3>
            <p className="text-blue-100">
              Not completely satisfied? Get a full refund, no questions asked.
              We're confident CVBuilderPro will help you land more interviews.
            </p>
          </div>

          {/* Secondary CTAs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <h4 className="font-semibold text-white mb-2">
                Free Forever Plan
              </h4>
              <p className="text-blue-100 text-sm mb-4">
                Access basic templates and create unlimited CVs at no cost
              </p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-700 w-full"
              >
                Start Free
              </Button>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-white/30">
              <div className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold mb-2 inline-block">
                Most Popular
              </div>
              <h4 className="font-semibold text-white mb-2">Premium Plan</h4>
              <p className="text-blue-100 text-sm mb-4">
                Access all templates, integrations, and premium features
              </p>
              <Button className="bg-white text-blue-700 hover:bg-gray-100 w-full">
                Upgrade to Premium
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <h4 className="font-semibold text-white mb-2">Enterprise</h4>
              <p className="text-blue-100 text-sm mb-4">
                Bulk licenses and custom branding for organizations
              </p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-700 w-full"
              >
                Contact Sales
              </Button>
            </div>
          </div>

          {/* Final trust signal */}
          <div className="mt-12 text-center">
            <p className="text-blue-200 text-sm">
              ✓ SSL Secured ✓ GDPR Compliant ✓ 99.9% Uptime ✓ 24/7 Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
