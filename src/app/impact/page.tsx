import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Users, BookOpen, HeartPulse, Leaf } from "lucide-react";

const impactStats = [
  { id: 1, icon: Users, value: "10,000+", label: "Beneficiaries Annually" },
  { id: 2, icon: BookOpen, value: "500+", label: "Scholarships Awarded" },
  { id: 3, icon: HeartPulse, value: "20+", label: "Medical Camps Conducted" },
  { id: 4, icon: Leaf, value: "1,000+", label: "Trees Planted This Year" },
];

const successStories = [
  {
    id: 1,
    name: "Anika Sharma",
    story: "Thanks to Hope Harbor's scholarship, I am the first in my family to attend university. They didn't just fund my education; they gave me the confidence to dream bigger. I plan to become a teacher and give back to my community.",
    imageId: "impact-story-1"
  },
  {
    id: 2,
    name: "The Village of Sunpur",
    story: "The new well built by Hope Harbor has transformed our lives. We no longer walk miles for clean water. Our children are healthier, and we can now irrigate our farms. It's a gift of life and prosperity.",
    imageId: "impact-story-2"
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    story: "After losing my job, the vocational training from Hope Harbor was a lifeline. I learned carpentry, and now I run my own small workshop. My family is secure, and I feel proud of what I can provide for them.",
    imageId: "impact-story-3"
  }
];

export default function ImpactPage() {
  return (
    <div>
      <PageHeader
        title="Our Impact & Success Stories"
        subtitle="Every number tells a story. See the difference we're making together."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Impact in Numbers</h2>
            <p className="mt-2 text-lg text-muted-foreground">Quantifying our commitment to change.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat) => (
              <Card key={stat.id} className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-primary/10 border-primary">
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

      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Stories of Change</h2>
            <p className="mt-2 text-lg text-muted-foreground">The real-life impact of your support, told by those we've helped.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((item) => {
              const storyImage = PlaceHolderImages.find(p => p.id === item.imageId);
              return (
                <Card key={item.id} className="flex flex-col overflow-hidden shadow-lg hover:translate-y-[-5px] transition-transform duration-300">
                  {storyImage && (
                    <div className="relative w-full h-48">
                      <Image
                        src={storyImage.imageUrl}
                        alt={item.name}
                        fill
                        className="object-cover"
                        data-ai-hint={storyImage.imageHint}
                      />
                    </div>
                  )}
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <blockquote className="text-muted-foreground border-l-4 border-accent pl-4 mb-4 italic flex-1">
                      "{item.story}"
                    </blockquote>
                    <div className="flex items-center gap-4 mt-auto">
                      <Avatar>
                        {storyImage && <AvatarImage src={storyImage.imageUrl} alt={item.name} />}
                        <AvatarFallback>{item.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-foreground">{item.name}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
