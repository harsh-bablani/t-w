import { u } from "./images";

export type PackageCategory = "family" | "honeymoon" | "adventure" | "group" | "custom";

export const packageCategoryLabels: Record<PackageCategory, string> = {
  family: "Family holidays",
  honeymoon: "Honeymoons",
  adventure: "Adventure",
  group: "Group travel",
  custom: "Customisable",
};

/**
 * SAMPLE ITINERARIES — illustrative only.
 * These are not live offers and carry no prices. They show the kind of journey
 * that can be planned; every real trip is quoted individually.
 */
export type TourPackage = {
  slug: string;
  title: string;
  destination: string; // destination slug
  type: "international" | "domestic";
  categories: PackageCategory[];
  featured?: boolean;
  duration: string;
  image: string;
  imageAlt: string;
  summary: string;
  highlights: string[];
  outline: { days: string; plan: string }[];
};

export const packages: TourPackage[] = [
  {
    slug: "maldives-lagoon-honeymoon",
    title: "Lagoon Honeymoon",
    destination: "maldives",
    type: "international",
    categories: ["honeymoon"],
    featured: true,
    duration: "5 nights",
    image: u("photo-1540202404-a2f29016b523"),
    imageAlt: "Overwater villa in the Maldives",
    summary: "An overwater villa, a seaplane arrival and nothing on the schedule but each other.",
    highlights: ["Overwater villa", "Seaplane transfers", "Sandbank dinner", "Sunset dolphin cruise"],
    outline: [
      { days: "Day 1", plan: "Arrive in Malé and fly by seaplane to your resort." },
      { days: "Days 2–3", plan: "Snorkel the house reef and enjoy a couples' spa ritual." },
      { days: "Day 4", plan: "Sunset dolphin cruise and a private sandbank dinner." },
      { days: "Days 5–6", plan: "Free days, then transfer back for your flight." },
    ],
  },
  {
    slug: "swiss-alpine-classic",
    title: "Swiss Alpine Classic",
    destination: "switzerland",
    type: "international",
    categories: ["family", "honeymoon"],
    featured: true,
    duration: "7 nights",
    image: u("photo-1527668752968-14dc70a27c95"),
    imageAlt: "The Matterhorn above Zermatt",
    summary: "Lakes, peaks and panoramic railways from Lucerne to Zermatt.",
    highlights: ["Jungfraujoch excursion", "Lake Lucerne cruise", "Matterhorn views", "Swiss Travel Pass routing"],
    outline: [
      { days: "Days 1–2", plan: "Zurich arrival and Lucerne, with a cruise and Mount Titlis." },
      { days: "Days 3–5", plan: "Interlaken base for the Jungfraujoch and Grindelwald." },
      { days: "Days 6–7", plan: "Zermatt and the Gornergrat railway." },
      { days: "Day 8", plan: "Train to Zurich or Geneva for departure." },
    ],
  },
  {
    slug: "thailand-islands-and-bangkok",
    title: "Bangkok & the Andaman Islands",
    destination: "thailand",
    type: "international",
    categories: ["family", "group"],
    featured: true,
    duration: "6 nights",
    image: u("photo-1552465011-b4e21bf6e79a"),
    imageAlt: "Longtail boats in a Thai lagoon",
    summary: "Temples and markets in the capital, then island-hopping on Thailand's Andaman coast.",
    highlights: ["Grand Palace & Wat Pho", "Phi Phi island tour", "Phuket beach resort", "Night markets"],
    outline: [
      { days: "Days 1–2", plan: "Bangkok's temples, river and markets." },
      { days: "Days 3–6", plan: "Phuket stay with a full-day island tour." },
      { days: "Day 7", plan: "Departure from Phuket." },
    ],
  },
  {
    slug: "bali-ubud-and-uluwatu",
    title: "Ubud & Uluwatu",
    destination: "bali",
    type: "international",
    categories: ["honeymoon", "adventure"],
    duration: "6 nights",
    image: u("photo-1518548419970-58e3b4079ab2"),
    imageAlt: "Rice terraces in Bali",
    summary: "Jungle villas and rice terraces, then clifftop sunsets in the south.",
    highlights: ["Mount Batur sunrise trek", "Tegallalang terraces", "Uluwatu Kecak dance", "Pool villa stays"],
    outline: [
      { days: "Days 1–3", plan: "Ubud: terraces, temples and an optional sunrise trek." },
      { days: "Day 4", plan: "Day trip to Nusa Penida." },
      { days: "Days 5–6", plan: "Uluwatu beaches and the clifftop temple at sunset." },
      { days: "Day 7", plan: "Departure." },
    ],
  },
  {
    slug: "singapore-family-break",
    title: "Singapore Family Break",
    destination: "singapore",
    type: "international",
    categories: ["family"],
    duration: "4 nights",
    image: u("photo-1565967511849-76a60a516170"),
    imageAlt: "Gardens by the Bay in Singapore",
    summary: "Gardens, Sentosa and the Night Safari — an easy, rewarding city break with children.",
    highlights: ["Gardens by the Bay", "Sentosa Island", "Night Safari", "Hawker-centre dinners"],
    outline: [
      { days: "Day 1", plan: "Arrival and Marina Bay by night." },
      { days: "Day 2", plan: "A full day on Sentosa." },
      { days: "Day 3", plan: "Gardens by the Bay and the Night Safari." },
      { days: "Days 4–5", plan: "Neighbourhood walks and departure." },
    ],
  },
  {
    slug: "dubai-desert-and-skyline",
    title: "Desert & Skyline",
    destination: "dubai",
    type: "international",
    categories: ["family", "group", "adventure"],
    duration: "4 nights",
    image: u("photo-1451337516015-6b6e9a44a8a3"),
    imageAlt: "Desert dunes outside Dubai",
    summary: "The Burj Khalifa, the creek and a night in the dunes, with an optional day in Abu Dhabi.",
    highlights: ["Burj Khalifa", "Desert safari", "Old Dubai souks", "Abu Dhabi day trip"],
    outline: [
      { days: "Day 1", plan: "Downtown Dubai and the fountain show." },
      { days: "Day 2", plan: "Souks by abra, desert safari in the evening." },
      { days: "Day 3", plan: "Abu Dhabi guided tour." },
      { days: "Days 4–5", plan: "Beach time and departure." },
    ],
  },
  {
    slug: "kerala-backwaters-and-hills",
    title: "Backwaters & Tea Hills",
    destination: "kerala",
    type: "domestic",
    categories: ["family", "honeymoon"],
    featured: true,
    duration: "6 nights",
    image: u("photo-1602216056096-3b40cc0c9944"),
    imageAlt: "Houseboat on the Kerala backwaters",
    summary: "Fort Kochi, Munnar's tea estates, Thekkady's spice gardens and a houseboat night.",
    highlights: ["Houseboat overnight", "Munnar tea estates", "Kathakali show", "Spice plantation walk"],
    outline: [
      { days: "Days 1–2", plan: "Fort Kochi heritage and Kathakali." },
      { days: "Days 3–4", plan: "Munnar's tea country." },
      { days: "Day 5", plan: "Thekkady and Periyar Lake." },
      { days: "Days 6–7", plan: "Alleppey houseboat and departure." },
    ],
  },
  {
    slug: "royal-rajasthan",
    title: "Royal Rajasthan",
    destination: "rajasthan",
    type: "domestic",
    categories: ["family", "group"],
    duration: "8 nights",
    image: u("photo-1599661046289-e31897846e41"),
    imageAlt: "Hawa Mahal in Jaipur",
    summary: "Forts, palaces and a desert night across Jaipur, Jodhpur, Jaisalmer and Udaipur.",
    highlights: ["Heritage hotel stays", "Amber Fort", "Thar Desert camp", "Lake Pichola"],
    outline: [
      { days: "Days 1–2", plan: "Jaipur's forts and bazaars." },
      { days: "Days 3–4", plan: "Jodhpur and Mehrangarh Fort." },
      { days: "Days 5–6", plan: "Jaisalmer and a desert camp." },
      { days: "Days 7–9", plan: "Udaipur's palaces and lakes, then departure." },
    ],
  },
  {
    slug: "kashmir-valleys",
    title: "Valleys of Kashmir",
    destination: "kashmir",
    type: "domestic",
    categories: ["honeymoon", "adventure", "family"],
    duration: "5 nights",
    image: u("photo-1595815771614-ade9d652a65d"),
    imageAlt: "Shikara on Dal Lake",
    summary: "Houseboat nights on Dal Lake, the Gulmarg Gondola and the meadows of Pahalgam.",
    highlights: ["Dal Lake houseboat", "Gulmarg Gondola", "Pahalgam valleys", "Mughal gardens"],
    outline: [
      { days: "Days 1–2", plan: "Srinagar houseboat and gardens." },
      { days: "Day 3", plan: "Gulmarg day trip." },
      { days: "Days 4–5", plan: "Pahalgam's valleys." },
      { days: "Day 6", plan: "Return to Srinagar and depart." },
    ],
  },
  {
    slug: "goa-coast-and-culture",
    title: "Goa Coast & Culture",
    destination: "goa",
    type: "domestic",
    categories: ["group", "custom"],
    duration: "4 nights",
    image: u("photo-1512343879784-a960bf40e7f2"),
    imageAlt: "Beach in Goa",
    summary: "Beaches north and south, the churches of Old Goa and an evening on the Mandovi.",
    highlights: ["South Goa beaches", "Old Goa churches", "Fontainhas walk", "River cruise"],
    outline: [
      { days: "Day 1", plan: "North Goa arrival and sunset." },
      { days: "Day 2", plan: "Panaji, Old Goa and a river cruise." },
      { days: "Days 3–4", plan: "South Goa beaches." },
      { days: "Day 5", plan: "Departure." },
    ],
  },
  {
    slug: "australia-east-coast",
    title: "Australia's East Coast",
    destination: "australia",
    type: "international",
    categories: ["adventure", "family", "custom"],
    duration: "10 nights",
    image: u("photo-1523482580672-f109ba8cb9be"),
    imageAlt: "Sydney harbour",
    summary: "Sydney's harbour, Melbourne's laneways and the Great Barrier Reef.",
    highlights: ["Sydney Harbour", "Great Ocean Road", "Great Barrier Reef", "Daintree Rainforest"],
    outline: [
      { days: "Days 1–3", plan: "Sydney and the Blue Mountains." },
      { days: "Days 4–6", plan: "Melbourne and the Great Ocean Road." },
      { days: "Days 7–10", plan: "Cairns, the reef and the rainforest." },
      { days: "Day 11", plan: "Departure." },
    ],
  },
  {
    slug: "malaysia-city-and-islands",
    title: "Kuala Lumpur, Penang & Langkawi",
    destination: "malaysia",
    type: "international",
    categories: ["family", "group", "custom"],
    duration: "6 nights",
    image: u("photo-1596422846543-75c6fc197f07"),
    imageAlt: "Petronas Twin Towers",
    summary: "City energy, heritage food streets and island downtime in one easy loop.",
    highlights: ["Petronas Towers", "George Town food trail", "Langkawi Sky Bridge", "Mangrove kayaking"],
    outline: [
      { days: "Days 1–2", plan: "Kuala Lumpur and Batu Caves." },
      { days: "Days 3–4", plan: "Penang's George Town." },
      { days: "Days 5–6", plan: "Langkawi beaches and Sky Bridge." },
      { days: "Day 7", plan: "Departure." },
    ],
  },
];

export const getPackage = (slug: string) => packages.find((p) => p.slug === slug);
