import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import TemplateTeaser from "@/components/landing/TemplateTeaser";
import CTASection from "@/components/landing/CTASection";

const Index = ({ education, isLoading, error }: { education: any; isLoading: boolean; error: any }) => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <TemplateTeaser />
      <CTASection />
      <div className="p-4">
        {isLoading ? (
          <p className="text-center">جاري التحميل...</p>
        ) : error ? (
          <p className="text-center text-red-500">خطأ: {error.message}</p>
        ) : education ? (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-bold mb-2">بيانات التعليم</h2>
            <pre className="text-sm">{JSON.stringify(education, null, 2)}</pre>
          </div>
        ) : (
          <p className="text-center">لا توجد بيانات متاحة</p>
        )}
      </div>
    </div>
  );
};

export default Index;
