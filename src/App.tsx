import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WhoWeAre from "./pages/WhoWeAre";
import WhatWeDo from "./pages/WhatWeDo";
import AboutUs from "./pages/AboutUs";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Partnerships from "./pages/services/Partnerships";
import ManagementConsulting from "./pages/services/ManagementConsulting";
import CorporateServices from "./pages/services/CorporateServices";
import CompanyFormation from "./pages/services/CompanyFormation";
import AccountingFinancialServices from "./pages/services/AccountingFinancialServices";
import FinancialPlanning from "./pages/services/FinancialPlanning";
import TechnologyConsulting from "./pages/services/TechnologyConsulting";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          {/* Service Pages */}
          <Route path="/services/partnerships" element={<Partnerships />} />
          <Route path="/services/management-consulting" element={<ManagementConsulting />} />
          <Route path="/services/corporate-services" element={<CorporateServices />} />
          <Route path="/services/company-formation" element={<CompanyFormation />} />
          <Route path="/services/accounting-financial-services" element={<AccountingFinancialServices />} />
          <Route path="/services/financial-planning" element={<FinancialPlanning />} />
          <Route path="/services/technology-consulting" element={<TechnologyConsulting />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
