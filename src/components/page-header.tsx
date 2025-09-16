type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-primary/20 py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl font-headline">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
