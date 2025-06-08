import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useQuery } from "@tanstack/react-query"; // لاستخدام react-query
import axios from "axios"; // لجلب البيانات

// تهيئة QueryClient
const queryClient = new QueryClient();

// دالة لجلب بيانات التعليم
const fetchEducation = async (id: string) => {
  const apiUrl = "https://x8ki-letl-twmt.n7.xano.io/api:iHm_4suj";
  try {
    const response = await axios.get(`${apiUrl}/education/${id}`);
    return response.data;
  } catch (error) {
    console.error("خطأ في جلب بيانات التعليم:", error);
    throw error; // إعادة رمي الخطأ ليتم التعامل معه بواسطة useQuery
  }
};

const App = () => {
  // استخدام useQuery لجلب البيانات
  const { data: education, isLoading, error } = useQuery({
    queryKey: ["education", "1"], // المفتاح الفريد للاستعلام، استبدل '1' بالمعرف المناسب
    queryFn: () => fetchEducation("1"), // استبدل '1' بالمعرف المناسب
    enabled: true, // تأكد من تفعيل الاستعلام
  });

  // إضافة تسجيل للتحقق من التحميل
  console.log("App.tsx loaded - Education:", education, "Loading:", isLoading, "Error:", error);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Index
                  education={education}
                  isLoading={isLoading}
                  error={error}
                />
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
