import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Clock } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM0Qjc0RkYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Urgency headline */}
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Zap className="h-4 w-4" />
            Don't let another opportunity slip away
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Dream Job is
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              {" "}
              5 Minutes Away
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
            Stop struggling with complicated resume builders. Join 50,000+
            professionals who've transformed their careers with CVBuilderPro's
            simple, powerful platform.
          </p>
        </div>

        {/* Value props before CTA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-green-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">
              Setup in 5 Minutes
            </h3>
            <p className="text-blue-200 text-sm">Faster than ordering coffee</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">
              No Risk, All Reward
            </h3>
            <p className="text-blue-200 text-sm">Free forever plan available</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-purple-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Instant Results</h3>
            <p className="text-blue-200 text-sm">
              Download your CV immediately
            </p>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
          >
            Build My Winning CV Now
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>

          <p className="text-blue-200 mt-4 text-lg">
            🎉 <strong>Free account</strong> • ⚡{" "}
            <strong>5-minute setup</strong> • 🔒{" "}
            <strong>No credit card needed</strong>
          </p>
        </div>

        {/* Social proof */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Join These Success Stories
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-blue-100">Get More Interviews</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">2.5x</div>
              <div className="text-blue-100">Faster Job Search</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">
                50k+
              </div>
              <div className="text-blue-100">Happy Users</div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-blue-200 text-lg italic">
              "I got 3 interview invitations in the first week after using
              CVBuilderPro. The difference was incredible!"
            </p>
            <p className="text-blue-300 mt-2 font-semibold">
              — Sarah Chen, Software Engineer at Google
            </p>
          </div>
        </div>

        {/* Final push */}
        <div className="text-center mt-12">
          <p className="text-blue-200 text-lg mb-4">
            Still thinking?{" "}
            <strong className="text-white">Here's the thing:</strong>
          </p>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Every day you wait is another day your dream job gets filled by
            someone else.
            <span className="text-yellow-400 font-semibold">
              {" "}
              Start now and be ahead by tonight.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
