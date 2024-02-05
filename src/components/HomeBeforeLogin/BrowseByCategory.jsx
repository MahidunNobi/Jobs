import BrowseBycategoryCard from "./BrowseBycategoryCard";

const BrowseByCategory = () => {
  const category = [
    { name: "Development & IT", ratting: 4.85, skills: 1853 },
    { name: "AI Services", ratting: 4.8, skills: 294 },
    { name: "Design & Creative", ratting: 4.91, skills: 968 },
    { name: "Sales & Marketing", ratting: 4.77, skills: 392 },
    { name: "Writing & Translation", ratting: 4.92, skills: 505 },
    { name: "Admin & Customer Support", ratting: 4.77, skills: 508 },
    { name: "Finance & Accounting", ratting: 4.79, skills: 214 },
    { name: "Engineering & Architechture", ratting: 4.85, skills: 605 },
  ];
  return (
    <section className="py-3 lg:py-16">
      <div className="container mx-auto px-3">
        <h1 className="text-4xl lg:text-5xl font-semibold">
          Browse talent by category
        </h1>
        <p className=" mt-2 mb-6">
          Looking for work?
          <span className="text-grn underline cursor-pointer">Browse jobs</span>
        </p>
        {/* Cards Container */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {category.map((cat, i) => (
            <BrowseBycategoryCard
              key={i + 98}
              title={cat.name}
              rating={cat.ratting}
              skill={cat.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
