import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Banknote, Handshake, Heart } from "lucide-react";

const GOOGLE_FORM_URL = "https://forms.google.com/"; // Placeholder URL

export default function GetInvolvedPage() {
  return (
    <div>
      <PageHeader
        title="Get Involved"
        subtitle="Your support is vital. Discover how you can contribute to our cause and make a real difference."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-lg border-0">
              <CardHeader className="flex-row items-center gap-4">
                <div className="bg-accent text-accent-foreground rounded-full p-3">
                  <Handshake className="w-6 h-6" />
                </div>
                <CardTitle className="text-2xl font-headline">Volunteer With Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Time is one of the most valuable gifts you can give. We have a variety of volunteering opportunities where your skills can help us achieve our goals. Whether it's teaching a class, helping at an event, or providing administrative support, your contribution matters.
                </p>
                <h4 className="font-bold mb-2">How to start:</h4>
                <ul className="list-decimal list-inside text-muted-foreground space-y-2">
                  <li>Explore our current programs to see where you fit.</li>
                  <li>Fill out our volunteer application form.</li>
                  <li>Our team will contact you for an orientation.</li>
                </ul>
              </CardContent>
            </Card>

            <div className="flex flex-col items-center justify-center bg-primary/20 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold font-headline mb-4">Ready to Volunteer?</h3>
              <p className="text-muted-foreground mb-6">
                Join our team of passionate individuals and contribute your skills to a meaningful cause. Click the button below to submit your details and start your journey with us.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">Submit Your Details</a>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">You will be redirected to a Google Form.</p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Donate to Our Cause</h2>
            <p className="mt-2 text-lg text-muted-foreground">Every contribution, big or small, helps us continue our work and expand our reach.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardHeader className="flex-row items-center gap-4">
                <div className="bg-accent text-accent-foreground rounded-full p-3">
                  <Banknote className="w-6 h-6" />
                </div>
                <CardTitle className="text-2xl font-headline">One-Time Donation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Make a single donation to support our ongoing projects. Your gift will be directed to where the need is greatest, ensuring immediate impact.
                </p>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Donate Now</Button>
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
                  Become a Hope Harbor sustainer. Monthly donations provide us with a stable source of funding, allowing us to plan long-term, sustainable projects.
                </p>
                <Button variant="secondary" className="w-full">Become a Monthly Donor</Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12 text-muted-foreground">
            <p>For bank transfers or other ways to give, please <Link href="/contact" className="text-accent underline">contact us</Link>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
