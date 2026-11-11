import { images } from "./images";

export type ServiceIcon = "plane" | "hotel" | "stamp" | "map" | "globe" | "ship" | "heart" | "users" | "sparkles";

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: ServiceIcon;
  image: string;
  imageAlt: string;
  /** Visual treatment for the detail page hero. */
  tone: "abyss" | "atlas" | "lagoon" | "mist";
  intro: string;
  includes: string[];
  process: { title: string; description: string }[];
  goodToKnow: string[];
  relatedDestinations: string[];
};

export const services: Service[] = [
  {
    slug: "flight-tickets",
    title: "Flight Tickets",
    short: "Domestic and international flights, chosen for the right balance of timing, comfort and value.",
    icon: "plane",
    image: images.services.flights,
    imageAlt: "Aircraft wing above the clouds at sunrise",
    tone: "atlas",
    intro:
      "The right flight sets the tone for the whole journey. We compare routes, connections and fare conditions so you arrive rested, on schedule and without surprises.",
    includes: [
      "One-way, return and multi-city itineraries",
      "Economy, premium economy, business and first class options",
      "Comparison of routes, layovers and baggage allowances",
      "Group and family bookings on the same itinerary",
      "Guidance on seat selection, meals and special assistance requests",
      "Help with date changes and rebooking, subject to airline rules",
    ],
    process: [
      { title: "Share your plans", description: "Tell us your dates, departure city, cabin preference and any flexibility." },
      { title: "Compare options", description: "We present suitable routes with timings, fare rules and baggage clearly explained." },
      { title: "Confirm and travel", description: "Once you choose, we handle the booking and share your itinerary details." },
    ],
    goodToKnow: [
      "Fares change frequently and are only guaranteed once ticketed by the airline.",
      "Change and cancellation conditions depend on the fare type you choose.",
      "Check passport validity and transit visa requirements for connecting flights.",
    ],
    relatedDestinations: ["dubai", "singapore", "australia"],
  },
  {
    slug: "hotel-bookings",
    title: "Hotel Bookings",
    short: "Stays matched to how you travel — from city hotels to beach villas and heritage palaces.",
    icon: "hotel",
    image: images.services.hotels,
    imageAlt: "Resort swimming pool surrounded by palms",
    tone: "mist",
    intro:
      "Where you stay shapes how a destination feels. We recommend hotels and resorts for their location, character and suitability for you — not simply their star rating.",
    includes: [
      "City hotels, beach resorts, villas and heritage properties",
      "Room and villa categories explained in plain language",
      "Meal plans compared, from room-only to all-inclusive",
      "Family rooms, connecting rooms and accessibility needs",
      "Honeymoon and special-occasion requests passed to the hotel",
      "Multi-hotel itineraries that flow logically",
    ],
    process: [
      { title: "Define your stay", description: "Budget, style, location and must-haves such as a pool or sea view." },
      { title: "Receive a shortlist", description: "A focused selection with honest notes on each property." },
      { title: "Book with confidence", description: "We confirm your reservation and share all details." },
    ],
    goodToKnow: [
      "Rates vary by season and availability until confirmed.",
      "Some resorts require minimum stays during peak periods.",
      "Island resorts may have separate transfer costs.",
    ],
    relatedDestinations: ["maldives", "bali", "rajasthan"],
  },
  {
    slug: "visa-assistance",
    title: "Visa Assistance",
    short: "Clear guidance on documents, forms and appointments for your destination.",
    icon: "stamp",
    image: images.services.visa,
    imageAlt: "Travel planning with a map and notebook",
    tone: "abyss",
    intro:
      "Visa requirements can be confusing and change often. We help you understand what is needed and prepare a complete, well-organised application.",
    includes: [
      "Guidance on the correct visa type for your trip",
      "A tailored document checklist",
      "Help completing application forms",
      "Support with appointment scheduling where applicable",
      "Review of supporting documents before submission",
      "Advice on processing timelines so you can plan ahead",
    ],
    process: [
      { title: "Tell us your trip", description: "Destination, purpose, dates and your nationality." },
      { title: "Get your checklist", description: "We outline exactly which documents to prepare." },
      { title: "Prepare and submit", description: "We help you complete the application and track next steps." },
    ],
    goodToKnow: [
      "Visa decisions are made solely by the relevant embassy, consulate or immigration authority.",
      "Apply well in advance — processing times vary by country and season.",
      "Most countries require at least six months' passport validity.",
    ],
    relatedDestinations: ["australia", "switzerland", "dubai"],
  },
  {
    slug: "domestic-tours",
    title: "Domestic Tours",
    short: "India's palaces, backwaters, mountains and beaches, planned with care.",
    icon: "map",
    image: images.services.domestic,
    imageAlt: "The Taj Mahal at sunrise",
    tone: "lagoon",
    intro:
      "India deserves to be explored slowly and well. We plan domestic journeys that connect regions sensibly, with comfortable stays and time to enjoy each place.",
    includes: [
      "Tours across Kerala, Rajasthan, Kashmir, Goa and beyond",
      "Flights, trains and private road transfers",
      "Heritage hotels, houseboats and hill-station stays",
      "Local guides for monuments and city tours",
      "Short weekend breaks and longer circuits",
      "Festival and seasonal travel planning",
    ],
    process: [
      { title: "Choose a region", description: "Or let us suggest one based on season and interests." },
      { title: "Shape the route", description: "We balance travel time with time to explore." },
      { title: "Travel with clarity", description: "A clear day-by-day plan before you leave." },
    ],
    goodToKnow: [
      "Peak season in many regions runs from October to March.",
      "Some areas require permits; we will advise where applicable.",
      "Mountain routes can be affected by weather.",
    ],
    relatedDestinations: ["kerala", "rajasthan", "kashmir"],
  },
  {
    slug: "international-tours",
    title: "International Tours",
    short: "Multi-day journeys abroad, from Southeast Asia to Europe and Australia.",
    icon: "globe",
    image: images.services.international,
    imageAlt: "Open road through a scenic landscape",
    tone: "atlas",
    intro:
      "International travel brings more moving parts — flights, visas, transfers, currencies. We bring them together into a single, well-paced journey.",
    includes: [
      "Single and multi-country itineraries",
      "Flights, hotels and airport transfers coordinated together",
      "Sightseeing, excursions and experiences",
      "Visa guidance for each country on your route",
      "Advice on travel insurance and currency",
      "Itineraries for families, couples and groups",
    ],
    process: [
      { title: "Start with the idea", description: "A destination, a season or simply a feeling." },
      { title: "Build the journey", description: "We design a route and refine it with you." },
      { title: "Go", description: "Everything confirmed and documented before departure." },
    ],
    goodToKnow: [
      "Book long-haul trips three to six months ahead for the best choice.",
      "Travel insurance is strongly recommended for every international trip.",
      "Entry rules can change; we recommend checking official sources before travel.",
    ],
    relatedDestinations: ["thailand", "switzerland", "australia"],
  },
  {
    slug: "cruise-bookings",
    title: "Cruise Bookings",
    short: "Ocean and river cruises, with help choosing the right ship, route and cabin.",
    icon: "ship",
    image: images.services.cruise,
    imageAlt: "Cruise ship sailing on blue water",
    tone: "abyss",
    intro:
      "A cruise lets you wake up somewhere new without unpacking. We help you compare cruise lines, itineraries and cabins to find the right fit.",
    includes: [
      "Ocean cruises across Asia, the Mediterranean and beyond",
      "Cabin categories compared — interior to suites",
      "Pre- and post-cruise hotel stays",
      "Flights to and from the port",
      "Shore excursion guidance",
      "Advice for families and first-time cruisers",
    ],
    process: [
      { title: "Pick your waters", description: "Region, season and length of voyage." },
      { title: "Choose the ship", description: "We explain the style and audience of each line." },
      { title: "Set sail", description: "Booking, documents and connecting travel arranged." },
    ],
    goodToKnow: [
      "Popular sailings and cabin types sell out early.",
      "Port fees, gratuities and excursions may be charged separately.",
      "Visa requirements apply for some ports of call.",
    ],
    relatedDestinations: ["singapore", "dubai", "malaysia"],
  },
  {
    slug: "honeymoon-packages",
    title: "Honeymoon Packages",
    short: "Romantic escapes designed around the two of you.",
    icon: "heart",
    image: images.services.honeymoon,
    imageAlt: "Couple walking on a tropical beach",
    tone: "lagoon",
    intro:
      "Your honeymoon should feel effortless. We plan romantic journeys with the right balance of adventure and rest, and pass your special requests to every hotel.",
    includes: [
      "Island, mountain and city honeymoon ideas",
      "Private villas and overwater stays",
      "Candlelit dinners, spa experiences and private tours",
      "Celebration requests communicated to hotels",
      "Combined destinations, such as Dubai and the Maldives",
      "Timing advice around wedding dates and seasons",
    ],
    process: [
      { title: "Tell us your story", description: "What you both love, and what you want to feel." },
      { title: "Receive ideas", description: "A few destinations and stays that suit you." },
      { title: "Celebrate", description: "Every detail arranged so you can simply enjoy it." },
    ],
    goodToKnow: [
      "Peak wedding seasons fill quickly — plan early.",
      "Some hotels require proof of marriage for honeymoon amenities.",
      "Consider names on tickets and passports if travelling after a name change.",
    ],
    relatedDestinations: ["maldives", "bali", "switzerland"],
  },
  {
    slug: "group-tours",
    title: "Group Tours",
    short: "Families, friends, schools and corporate groups — travelling together, organised properly.",
    icon: "users",
    image: images.services.group,
    imageAlt: "Group of friends travelling together",
    tone: "mist",
    intro:
      "Group travel works best with careful coordination. We plan journeys for families, friends and organisations, keeping logistics simple for everyone.",
    includes: [
      "Family reunions and multi-generation trips",
      "Friends' getaways and celebration trips",
      "Corporate offsites and incentive travel",
      "Group flight and hotel allocations",
      "Private coaches and guided sightseeing",
      "Dietary and accessibility planning",
    ],
    process: [
      { title: "Size up the group", description: "Number of travellers, ages and priorities." },
      { title: "Plan the logistics", description: "Rooms, transport and a schedule that suits everyone." },
      { title: "Travel together", description: "Clear information shared with the whole group." },
    ],
    goodToKnow: [
      "Group fares and room blocks usually need early confirmation.",
      "Names for flights are often required well before departure.",
      "Flexible free time keeps larger groups happy.",
    ],
    relatedDestinations: ["thailand", "dubai", "goa"],
  },
  {
    slug: "customised-travel",
    title: "Customised Travel Packages",
    short: "A journey built entirely around you — your pace, your interests, your budget.",
    icon: "sparkles",
    image: images.services.custom,
    imageAlt: "Traveller looking out over a mountain landscape",
    tone: "atlas",
    intro:
      "No two travellers are alike. Customised travel starts with a conversation and ends with an itinerary that could only belong to you.",
    includes: [
      "Fully tailored itineraries from scratch",
      "Flights, stays, transfers and experiences combined",
      "Special interests: food, wildlife, wellness, photography",
      "Slow travel and longer stays",
      "Adjustments until the plan feels right",
      "Single destinations or multi-country routes",
    ],
    process: [
      { title: "A conversation", description: "We listen to how you like to travel." },
      { title: "A draft itinerary", description: "A first version to react to and refine." },
      { title: "Your journey", description: "Finalised, confirmed and ready to go." },
    ],
    goodToKnow: [
      "The more flexible your dates, the more options there are.",
      "Tailored trips are priced according to the final itinerary.",
      "Allow time for refinements before booking deadlines.",
    ],
    relatedDestinations: ["switzerland", "kerala", "australia"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
