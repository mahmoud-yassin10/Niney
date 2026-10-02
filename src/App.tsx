import { Suspense, lazy, useEffect, useState, type TransitionEvent } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PageSkeleton } from "@/components/shared/PageSkeleton";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Routes, Route, useLocation, useParams } from "react-router-dom";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const PortfolioDetail = lazy(() => import("./pages/PortfolioDetail"));
const Blog = lazy(() => import("./pages/Blog"));
const Research = lazy(() => import("./pages/Research"));
const MediaKit = lazy(() => import("./pages/MediaKit"));
const Contact = lazy(() => import("./pages/Contact"));
const Nymp = lazy(() => import("./pages/Nymp"));
const WorkWithMe = lazy(() => import("./pages/WorkWithMe"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AthleticJourney = lazy(() => import("./pages/AthleticJourney"));

function LegacyWorkRedirect() {
  const { id } = useParams();
  return <Navigate to={`/work/${id ?? ""}`} replace />;
}

const queryClient = new QueryClient();

type RouterLocation = ReturnType<typeof useLocation>;

type ScrollToTopProps = {
  location: RouterLocation;
};

const ScrollToTop = ({ location }: ScrollToTopProps) => {
  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname, location.search, location.hash, location.key]);

  return null;
};

const AppRoutes = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState<"fadeIn" | "fadeOut">(
    "fadeIn"
  );
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updatePreference);
      return () => mediaQuery.removeEventListener("change", updatePreference);
    }

    mediaQuery.addListener(updatePreference);
    return () => mediaQuery.removeListener(updatePreference);
  }, []);

  useEffect(() => {
    const samePath =
      location.pathname === displayLocation.pathname &&
      location.search === displayLocation.search;

    if (!samePath) {
      if (prefersReducedMotion) {
        setTransitionStage("fadeIn");
        setDisplayLocation(location);
        return;
      }

      setTransitionStage("fadeOut");
      return;
    }

    if (location.hash !== displayLocation.hash || location.key !== displayLocation.key) {
      setDisplayLocation(location);
    }
  }, [location, displayLocation, prefersReducedMotion]);

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (transitionStage === "fadeOut") {
      setTransitionStage("fadeIn");
      setDisplayLocation(location);
    }
  };

  return (
    <>
      <ScrollToTop location={displayLocation} />
      <div
        className={`page-transition ${transitionStage}`}
        onTransitionEnd={handleTransitionEnd}
      >
        <Suspense fallback={<PageSkeleton />}>
          <Routes location={displayLocation}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Portfolio />} />
            <Route path="/work/:id" element={<PortfolioDetail />} />
            <Route path="/portfolio" element={<Navigate to="/work" replace />} />
            <Route path="/portfolio/:id" element={<LegacyWorkRedirect />} />
            <Route path="/nymp" element={<Nymp />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/writing" element={<Navigate to="/blog" replace />} />
            <Route path="/athletic-journey" element={<AthleticJourney />} />
            <Route path="/research" element={<Research />} />
            <Route path="/work-with-me" element={<WorkWithMe />} />
            <Route path="/services" element={<Navigate to="/work-with-me" replace />} />
            <Route path="/press" element={<MediaKit />} />
            <Route path="/media-kit" element={<Navigate to="/press" replace />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
