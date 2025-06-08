import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const queryClient = new QueryClient();

const fetchEducation = async (id: string) => {
  const apiUrl = "https://x8ki-letl-twmt.n7.xano.io/api:iHm_4suj";
  const response = await axios.get(`${apiUrl}/education/${id}`);
  return response.data;
};

const App = () => {
  const { data: education, isLoading, error } = useQuery({
    queryKey: ["education", "1"],
    queryFn: () => fetchEducation("1"),
  });

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
                <Index education={education} isLoading={isLoading} error={error} />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
