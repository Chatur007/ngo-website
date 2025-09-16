import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { BookOpen, HeartPulse, Leaf } from "lucide-react";

const programs = [
  {
    id: "education",
    icon: BookOpen,
    title: "Education & Empowerment",
    description: "We believe education is the key to breaking the cycle of poverty. Our programs provide quality schooling, vocational training, and digital literacy for all ages.",
    imageId: "program-education",
    features: ["Child Sponsorships", "Adult Literacy Programs", "Vocational Skill Training", "Digital Learning Centers"]
  },
  {
    id: "health",
    icon: HeartPulse,
    title: "Health & Nutrition",
    description: "A healthy community is a thriving community. We run mobile clinics, health awareness camps, and nutrition programs to ensure well-being for all.",
    imageId: "program-health",
    features: ["Mobile Medical Units", "Maternal and Child Health", "Nutrition Support", "Hygiene & Sanitation Drives"]
  },
  {
    id: "sustainability",
    icon: Leaf,
    title: "Environmental Sustainability",
    description: "Protecting our planet is protecting our future. We lead initiatives for reforestation, clean water access, and promoting sustainable livelihoods.",
    imageId: "program-sustainability",
    features: ["Reforestation Projects", "Clean Water Solutions", "Renewable Energy Access", "Sustainable Agriculture"]
  },
];

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        title="Our Programs"
        subtitle="Creating sustainable impact through focused, community-centric initiatives."
      />
      <div className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {programs.map((program, index) => {
              const programImage = PlaceHolderImages.find(p => p.id === program.imageId);
              const isReversed = index % 2 !== 0;
              return (
                <div key={program.id} className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center`}>
                  <div className={`relative w-full h-80 rounded-lg overflow-hidden shadow-xl ${isReversed ? 'md:order-last' : ''}`}>
                    {programImage && (
                      <Image
                        src={programImage.imageUrl}
                        alt={programImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={programImage.imageHint}
                      />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-accent text-accent-foreground rounded-full p-3">
                        <program.icon className="w-6 h-6" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold font-headline">{program.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">{program.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {program.features.map(feature => (
                        <li key={feature} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
