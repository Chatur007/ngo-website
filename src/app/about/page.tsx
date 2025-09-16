import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const teamMembers = [
  { id: 1, name: "Dr. Evelyn Reed", role: "Founder & CEO", imageId: "team-1" },
  { id: 2, name: "Marcus Thorne", role: "Head of Mentorship", imageId: "team-2" },
  { id: 3, name: "Lena Petrova", role: "Lead Career Counselor", imageId: "team-3" },
  { id: 4, name: "Samuel Green", role: "Workshop Facilitator", imageId: "team-4" },
];

export default function AboutPage() {
  const historyImage = PlaceHolderImages.find(p => p.id === 'about-history');

  return (
    <div>
      <PageHeader
        title="About Skill Brace"
        subtitle="Learn about our mission to help youth and professionals succeed in their careers."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4 text-accent">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-8">
                To bridge the gap between education and employment by providing youth and professionals with the essential tools, skills, and mentorship needed to launch and advance their careers.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4 text-accent">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                We envision a world where every individual has the opportunity to achieve their full career potential, supported by a community that fosters growth, learning, and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {historyImage && (
              <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={historyImage.imageUrl}
                  alt={historyImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={historyImage.imageHint}
                />
              </div>
            )}
            <div className={historyImage ? '' : 'md:col-span-2'}>
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">Our History</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Founded in 2018 by Dr. Evelyn Reed, a veteran HR professional, Skill Brace started as a weekend resume workshop for local college students. Witnessing the immediate impact of targeted career guidance, the initiative quickly grew.</p>
                <p>By 2020, we launched our first mentorship program, connecting students with industry professionals. Today, Skill Brace offers a comprehensive suite of services, empowering hundreds of individuals annually to navigate the job market with confidence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Meet Our Team</h2>
            <p className="mt-2 text-lg text-muted-foreground">The dedicated mentors and volunteers behind our success.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => {
              const memberImage = PlaceHolderImages.find(p => p.id === member.imageId);
              return (
                <Card key={member.id} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0 flex flex-col items-center">
                    <Avatar className="w-24 h-24 mb-4">
                      {memberImage && <AvatarImage src={memberImage.imageUrl} alt={member.name} data-ai-hint="portrait person" />}
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-accent font-medium">{member.role}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-2">NGO Registration Details</h3>
          <p className="text-muted-foreground">Skill Brace is a registered non-governmental organization.</p>
          <p className="font-mono text-sm text-muted-foreground mt-2">Registration No: 987-654-321 | Registered under The Societies Registration Act, 1860</p>
        </div>
      </section>
    </div>
  );
}
