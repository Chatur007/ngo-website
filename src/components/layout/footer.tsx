import Link from "next/link";
import { Logo } from "@/components/logo";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "../ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Impact", href: "/impact" },
  { name: "Contact Us", href: "/contact" },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-primary/10 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 text-muted-foreground max-w-sm">
              Hope Harbor is a non-profit organization dedicated to bringing hope and support to communities in need.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              123 Hope Avenue, Unity City, 12345
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 font-headline">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 font-headline">Connect With Us</h3>
            <div className="flex space-x-2">
              {socialLinks.map(social => (
                 <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label={social.name}>
                    <social.icon className="h-5 w-5 text-muted-foreground hover:text-accent" />
                  </Button>
                 </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Hope Harbor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
