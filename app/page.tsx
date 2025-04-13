import Image from "next/image";

export default function Home() {
  const clients = [
    {
      name: "ProducedByTyler",
      url: "https://www.producedtyler.com/landing",
      description: "Music Production, Studio Services",
    },
    {
      name: "WanaWork",
      url: "https://www.wanawork.com/",
      description: "Job Matching Platform (SaaS)",
    },
    {
      name: "PR1ME Sports",
      url: "https://www.pr1mesp.com/",
      description: "Sports & Athlete Representation",
    },
    {
      name: "ANE Landscaping",
      url: "https://www.anelandscapingllc.com/",
      description: "Residential & Commercial Landscaping",
    },
    {
      name: "Alpha Edge Tech",
      url: "https://alphaedgetechnologys.com/",
      description: "Tech Services & IT Consulting",
    },
    {
      name: "The Vault THC",
      url: "https://thevaultthc.com/",
      description: "Cannabis Retail (Michigan)",
    },
    {
      name: "Alta Personnel",
      url: "https://alta-personnel.com/",
      description: "Staffing & Recruitment Services",
    },
    {
      name: "The Mint – Florida",
      url: "https://flmint.themintcannabis.com/florida/",
      description: "Cannabis Dispensary (Florida)",
    },
    {
      name: "Mint Deals",
      url: "https://mintdeals.com/",
      description: "Cannabis Deal Aggregator",
    },
    {
      name: "WTF Extracts",
      url: "https://wtfextracts.com/",
      description: "Cannabis Extract Brand",
    },
    {
      name: "Sofa King Edibles",
      url: "https://sofakingedibles.com/",
      description: "Cannabis Edibles Brand",
    },
    {
      name: "Angry Errl",
      url: "https://www.angryerrl.com/",
      description: "Cannabis Concentrates Brand",
    },
    {
      name: "Junior’s Custom Towing",
      url: "https://www.juniorscustomtowing.com/",
      description: "24/7 Emergency Towing Services",
    },
    {
      name: "AZ Preferred Flooring",
      url: "https://demo-temp-three.vercel.app/",
      description: "Flooring Installation & Home Design",
    },
    {
      name: "Mindful Creations",
      url: "https://www.mindful-creations.org/",
      description: "Nonprofit for Grief & Mindfulness Support",
    },
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans bg-black text-white">
      <main className="flex flex-col gap-10 row-start-2 items-center sm:items-start max-w-6xl w-full">
        <Image
          src="/Transparent.webp"
          alt="Full Stack Services LLC"
          width={160}
          height={40}
          className="mb-4"
        />

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center sm:text-left">
          Local Clients — Connected Through Community
        </h1>

        <p className="text-gray-400 text-center sm:text-left text-lg max-w-3xl">
          These businesses represent the strength, hustle, and vision of our local network. Full Stack Services LLC proudly powers their online presence and digital infrastructure.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8">
          {clients.map((client, index) => (
            <a
              key={index}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black rounded-lg p-5 transition hover:shadow-xl hover:scale-[1.02]"
            >
              <h3 className="text-xl font-semibold mb-1">{client.name}</h3>
              <p className="text-sm text-gray-700">{client.description}</p>
            </a>
          ))}
        </div>
      </main>

      <footer className="row-start-3 text-sm text-gray-500 mt-12 text-center">
        <p>&copy; {new Date().getFullYear()} Full Stack Services LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}
