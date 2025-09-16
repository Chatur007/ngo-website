import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { BookOpen, HeartHandshake, HeartPulse, Leaf, Users } from "lucide-react";

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-banner');

const impactStats = [
  { id: 1, icon: Users, value: "10,000+", label: "Beneficiaries Helped" },
  { id: 2, icon: HeartHandshake, value: "50+", label: "Completed Projects" },
  { id: 3, icon: BookOpen, value: "5,000+", label: "Students Educated" },
  { id: 4, icon: Leaf, value: "1,000+", label: "Trees Planted" },
];

const programs = [
  { id: 1, icon: BookOpen, title: "Education for All", description: "Providing access to quality education for underprivileged children and adults." },
  { id: 2, icon: HeartPulse, title: "Health & Wellness", description: "Offering medical support, health camps, and wellness awareness programs." },
  { id: 3, icon: Leaf, title: "Sustainable Living", description: "Promoting eco-friendly practices and sustainable community development." },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
            Welcome to Hope Harbor
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl">
            Bringing hope and support to communities in need through compassionate action.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/get-involved">Join Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20 bg-transparent">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="impact" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Impact in Numbers</h2>
            <p className="mt-2 text-lg text-muted-foreground">Making a tangible difference, one life at a time.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat) => (
              <Card key={stat.id} className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0 flex flex-col items-center">
                  <stat.icon className="w-12 h-12 mb-4 text-accent" />
                  <p className="text-4xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-muted-foreground mt-1">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section id="programs" className="py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Programs</h2>
            <p className="mt-2 text-lg text-muted-foreground">Focused initiatives to create lasting change.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <Card key={program.id} className="text-center p-6 border-0 shadow-lg hover:translate-y-[-5px] transition-transform duration-300">
                <CardHeader className="p-0 flex flex-col items-center">
                  <div className="bg-accent text-accent-foreground rounded-full p-4 mb-4">
                    <program.icon className="w-8 h-8" />
                  </div>
                  <CardTitle>{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-4">
                  <p className="text-muted-foreground">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="link" className="text-accent text-lg">
              <Link href="/services">Explore All Programs &rarr;</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="get-involved-cta" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Ready to Make a Difference?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Your time, skills, and donations can change lives. Become a part of our mission today.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/get-involved">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
