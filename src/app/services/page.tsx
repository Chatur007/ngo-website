import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { FileText, Briefcase, UserCheck } from "lucide-react";

const programs = [
  {
    id: "resume-building",
    icon: FileText,
    title: "Resume Building Workshops",
    description: "Our hands-on workshops guide you through crafting a professional resume that highlights your strengths and catches the eye of recruiters.",
    imageId: "program-resume",
    features: ["One-on-One Resume Review", "ATS Optimization Techniques", "Cover Letter Writing", "LinkedIn Profile Enhancement"]
  },
  {
    id: "job-referral",
    icon: Briefcase,
    title: "Job Referral Assistance",
    description: "Leverage our network of corporate partners to get exclusive access to job openings and a direct line to hiring managers.",
    imageId: "program-referral",
    features: ["Access to Partner Network", "Exclusive Job Postings", "Interview Preparation", "Mock Interview Sessions"]
  },
  {
    id: "career-guidance",
    icon: UserCheck,
    title: "Career Guidance & Mentorship",
    description: "Connect with experienced professionals in your desired field for personalized advice, industry insights, and long-term career planning.",
    imageId: "program-guidance",
    features: ["Personalized Career Mapping", "Industry Expert Mentors", "Networking Events", "Soft Skills Development"]
  },
];

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        title="Our Services"
        subtitle="Providing the tools and support you need to build a successful career."
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
