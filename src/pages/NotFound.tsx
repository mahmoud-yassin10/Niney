import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="container max-w-2xl text-center">
          <h1 className="font-display text-6xl md:text-8xl text-gold mb-4">404</h1>
          <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">Page Not Found</h2>
          <p className="text-muted-foreground text-body-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist.
          </p>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-gold hover:text-burgundy-900">
            <Link to="/"><Home className="mr-2 h-4 w-4" />Go Home</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
