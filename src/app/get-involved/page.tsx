import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { UserPlus, Handshake, Heart } from "lucide-react";

const GOOGLE_FORM_URL = "https://forms.google.com/"; // Placeholder URL

export default function GetInvolvedPage() {
  return (
    <div>
      <PageHeader
        title="Get Involved"
        subtitle="Join our programs or volunteer as a mentor. Your participation can change a career."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-lg border-0">
              <CardHeader className="flex-row items-center gap-4">
                <div className="bg-accent text-accent-foreground rounded-full p-3">
                  <Handshake className="w-6 h-6" />
                </div>
                <CardTitle className="text-2xl font-headline">Become a Mentor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Share your industry expertise and experience. As a mentor, you can provide invaluable guidance to young professionals, helping them navigate their career paths and achieve their goals. Your time and knowledge are powerful gifts.
                </p>
                <h4 className="font-bold mb-2">How to start:</h4>
                <ul className="list-decimal list-inside text-muted-foreground space-y-2">
                  <li>Share your professional background with us.</li>
                  <li>Fill out our mentor application form.</li>
                  <li>Our team will contact you for an orientation and matching process.</li>
                </ul>
              </CardContent>
            </Card>

            <div className="flex flex-col items-center justify-center bg-primary/20 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold font-headline mb-4">Ready to Join Our Programs?</h3>
              <p className="text-muted-foreground mb-6">
                Whether you're seeking guidance or ready to build your skills, our programs are for you. Click the button below to submit your details and start your journey with us.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">Join Our Programs</a>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">You will be redirected to a Google Form to sign up.</p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Donate to Our Cause</h2>
            <p className="mt-2 text-lg text-muted-foreground">Every contribution helps us provide free workshops, mentorship, and resources.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardHeader className="flex-row items-center gap-4">
                <div className="bg-accent text-accent-foreground rounded-full p-3">
                  <UserPlus className="w-6 h-6" />
                </div>
                <CardTitle className="text-2xl font-headline">Sponsor a Student</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Your one-time donation can cover the cost of a full workshop series for an aspiring professional, giving them the tools they need to succeed.
                </p>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Sponsor Now</Button>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader className="flex-row items-center gap-4">
                <div className="bg-accent text-accent-foreground rounded-full p-3">
                  <Heart className="w-6 h-6" />
                </div>
                <CardTitle className="text-2xl font-headline">Monthly Giving</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Become a Skill Brace sustainer. Monthly donations provide stable funding for our ongoing mentorship programs and resource development.
                </p>
                <Button variant="secondary" className="w-full">Become a Monthly Donor</Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12 text-muted-foreground">
            <p>For corporate partnerships or other ways to give, please <Link href="/contact" className="text-accent underline">contact us</Link>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
