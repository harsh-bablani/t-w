export type FaqCategory =
  | "planning"
  | "flights"
  | "hotels"
  | "visas"
  | "international"
  | "domestic"
  | "groups"
  | "custom";

export const faqCategoryLabels: Record<FaqCategory, string> = {
  planning: "Travel planning",
  flights: "Flight bookings",
  hotels: "Hotel reservations",
  visas: "Visa assistance",
  international: "International packages",
  domestic: "Domestic packages",
  groups: "Group tours",
  custom: "Customised holidays",
};

export type Faq = { category: FaqCategory; q: string; a: string; featured?: boolean };

export const faqs: Faq[] = [
  { category: "planning", featured: true, q: "How far in advance should I start planning?", a: "For international trips, three to six months ahead gives you the widest choice of flights and hotels. For peak seasons — school holidays, festivals and year-end — earlier is better. Domestic trips and short breaks can often be arranged with a few weeks' notice, depending on availability." },
  { category: "planning", featured: true, q: "What information do you need to start planning my trip?", a: "Your preferred destination (or ideas), approximate dates, number of travellers and their ages, the style of stay you enjoy and a comfortable budget range. The more we understand how you like to travel, the better the recommendations." },
  { category: "planning", q: "Can you help if I'm not sure where to go?", a: "Yes. Tell us what you enjoy — beaches, mountains, food, culture, adventure — along with your dates, and we can suggest destinations that suit the season and your interests." },
  { category: "flights", q: "Can you book international and domestic flights?", a: "Yes. We can arrange one-way, return and multi-city flights across domestic and international routes, in the cabin class you prefer." },
  { category: "flights", q: "Are flight fares guaranteed when you send options?", a: "No. Airline fares change frequently and are only confirmed once a ticket is issued. We'll always tell you the fare conditions — including baggage and change rules — before you decide." },
  { category: "flights", q: "Can you help with special assistance or meal requests?", a: "We can pass requests such as wheelchair assistance, special meals or travelling with infants to the airline. Final arrangements are subject to the airline's policies." },
  { category: "hotels", featured: true, q: "Can I book only a hotel without a full package?", a: "Absolutely. Hotel bookings are available on their own, whether you need a single night in a city or a week at a resort." },
  { category: "hotels", q: "How do you choose which hotels to recommend?", a: "We consider location, the style of the property, room types, meal plans and how well it suits your trip — for example, family-friendly facilities or a quiet setting for a honeymoon." },
  { category: "visas", featured: true, q: "Can you guarantee my visa will be approved?", a: "No one can guarantee a visa. Decisions are made solely by the relevant embassy, consulate or immigration authority. We help you understand the requirements and prepare a complete, well-organised application." },
  { category: "visas", q: "How long does visa processing take?", a: "It varies by country, visa type and season — from a few days to several weeks. We'll advise on typical timelines so you can apply well before your travel date." },
  { category: "visas", q: "What documents will I usually need?", a: "Commonly a passport with sufficient validity, photographs, a completed application form, travel and accommodation details and financial documents. Exact requirements depend on the destination and your circumstances; we provide a tailored checklist." },
  { category: "international", q: "Are the packages on your website available to book as shown?", a: "The tour packages shown on this website are sample itineraries for inspiration. Every journey is planned and quoted individually based on your dates, travellers and preferences." },
  { category: "international", featured: true, q: "Can an international package include flights, hotels and visas together?", a: "Yes. International journeys can combine flights, hotels, transfers, sightseeing and visa guidance so everything is coordinated in one plan." },
  { category: "international", q: "Do I need travel insurance?", a: "We strongly recommend comprehensive travel insurance for every international trip, and some countries require it for entry. Review the policy to make sure it covers your activities and medical needs." },
  { category: "domestic", q: "Which domestic destinations do you plan trips to?", a: "Popular choices include Kerala, Rajasthan, Kashmir and Goa, and we're happy to plan journeys to other regions of India too." },
  { category: "domestic", q: "What is the best season for travel within India?", a: "It depends on the region. October to March suits much of the country, including Rajasthan, Kerala and Goa. The mountains are often best from April to October, with winter bringing snow to places such as Gulmarg." },
  { category: "groups", q: "What size of group can you plan for?", a: "From small groups of friends to larger family, school and corporate groups. Larger groups benefit from early planning to secure flights and room allocations together." },
  { category: "groups", q: "Can a group trip include different room types or preferences?", a: "Yes. We can plan mixed room types, dietary needs and accessibility requirements within the same group itinerary." },
  { category: "custom", q: "What does a customised holiday include?", a: "Whatever suits you. A customised holiday is designed from scratch around your interests, pace and budget — combining flights, stays, transfers and experiences into one itinerary." },
  { category: "custom", q: "Can I change a sample itinerary?", a: "Yes. The sample itineraries are starting points. Destinations, hotels, duration and activities can all be adjusted to suit you." },
];
