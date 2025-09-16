import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Users, FileText, Briefcase, UserCheck } from "lucide-react";

const impactStats = [
  { id: 1, icon: Users, value: "1,200+", label: "Students Trained" },
  { id: 2, icon: FileText, value: "800+", label: "Resumes Improved" },
  { id: 3, icon: Briefcase, value: "400+", label: "Jobs Referred" },
  { id: 4, icon: UserCheck, value: "90%", label: "Placement Success Rate" },
];

const successStories = [
  {
    id: 1,
    name: "Anika Sharma",
    story: "Skill Brace's resume workshop was a game-changer. They helped me highlight my skills in a way I never could have on my own. I landed my dream job just two weeks after their guidance!",
    imageId: "impact-story-1"
  },
  {
    id: 2,
    name: "The Aspiring Developers Group",
    story: "The job referral program connected us with top tech companies we couldn't reach otherwise. The mock interviews gave us the confidence to ace the real ones. We are all now working as software engineers.",
    imageId: "impact-story-2"
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    story: "As a recent graduate, I was lost. The mentorship I received from Skill Brace was invaluable. My mentor guided me, helped me network, and ultimately helped me secure my first full-time role.",
    imageId: "impact-story-3"
  }
];

export default function ImpactPage() {
  return (
    <div>
      <PageHeader
        title="Our Impact & Success Stories"
        subtitle="Real results, real careers. See the difference we're making together."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Impact in Numbers</h2>
            <p className="mt-2 text-lg text-muted-foreground">Quantifying our commitment to career success.</p>
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
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Stories of Success</h2>
            <p className="mt-2 text-lg text-muted-foreground">The real-life career transformations enabled by your support.</p>
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
