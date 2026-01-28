import { SocialLinks } from "./SocialLinks";
import Link from "next/link";
import { navigationItems } from "@/data/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card-bg border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Portfolio</h3>
            <p className="text-muted-foreground text-sm">
              Full-stack engineer who builds excellent digital experiences.
            </p>
            <br />
            <p className="text-muted-foreground text-sm">
              I am open to opportunities and collaborations that will have me
              working with and using any appropriate tool or technology within
              my scope of knowledge and skillset in my utility belt, to deliver
              the best results and get the job done effectively.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <SocialLinks />
            <p className="text-muted-foreground text-sm mt-2">
              <span className="block">obakengtsaagane@gmail.com</span>
              <span className="block">067 630 8354</span>
              <span className="block">Pretoria, Gauteng | South Africa</span>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground text-sm">
            © {currentYear} Tsaagane Obakeng. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
