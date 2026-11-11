import { u } from "./images";

export type DestinationType = "international" | "domestic";
export type Category = "islands" | "cities" | "mountains" | "heritage" | "desert";

export const categoryLabels: Record<Category, string> = {
  islands: "Beaches & islands",
  cities: "City breaks",
  mountains: "Mountains & lakes",
  heritage: "Culture & heritage",
  desert: "Desert landscapes",
};

export type Destination = {
  slug: string;
  name: string;
  country: string;
  type: DestinationType;
  region: string;
  categories: Category[];
  featured?: boolean;
  tagline: string;
  summary: string;
  overview: string[];
  image: string;
  imageAlt: string;
  gallery: { src: string; alt: string }[];
  bestTime: { months: number[]; note: string };
  idealFor: string[];
  duration: string;
  highlights: string[];
  attractions: { name: string; description: string }[];
  experiences: { title: string; description: string }[];
  itinerary: { days: string; title: string; description: string }[];
};

export const destinations: Destination[] = [
  {
    slug: "thailand",
    name: "Thailand",
    country: "Thailand",
    type: "international",
    region: "Southeast Asia",
    categories: ["islands", "cities", "heritage"],
    featured: true,
    tagline: "Golden temples, island lagoons and the world's favourite street food.",
    summary:
      "From Bangkok's riverside palaces to the limestone islands of the Andaman Sea, Thailand pairs effortless hospitality with remarkable variety.",
    overview: [
      "Thailand rewards every kind of traveller. Bangkok is a city of gilded temples, canal-side neighbourhoods and night markets that hum until late. In the north, Chiang Mai sits among forested hills dotted with centuries-old wats and craft villages.",
      "In the south, the Andaman coast around Phuket and Krabi is famous for limestone karsts rising from emerald water, while the Gulf islands offer softer, quieter beaches. Combine a city stay with island time and you have one of Asia's most complete journeys.",
    ],
    image: u("photo-1552465011-b4e21bf6e79a"),
    imageAlt: "Longtail boats moored in a clear lagoon beneath limestone cliffs in Thailand",
    gallery: [
      { src: u("photo-1528181304800-259b08848526"), alt: "Ornate temple roofs in Thailand" },
      { src: u("photo-1519451241324-20b4ea2c4220"), alt: "Tropical beach with turquoise water in Thailand" },
      { src: u("photo-1508009603885-50cf7c579365"), alt: "Bangkok skyline at sunset" },
    ],
    bestTime: { months: [11, 12, 1, 2], note: "November to February brings the coolest, driest weather. The Andaman coast is calmest from November to April." },
    idealFor: ["Families", "Couples", "First-time travellers"],
    duration: "6–9 days",
    highlights: ["Bangkok's royal and riverside heritage", "Island-hopping on the Andaman Sea", "Northern hill towns and night bazaars", "Some of the world's most celebrated street food"],
    attractions: [
      { name: "Grand Palace & Wat Pho, Bangkok", description: "The former royal residence and the neighbouring temple of the Reclining Buddha — Bangkok's most important historic complex." },
      { name: "Phi Phi Islands", description: "Dramatic limestone islands and sheltered bays, reached by boat from Phuket or Krabi." },
      { name: "Railay Beach, Krabi", description: "A peninsula accessible only by boat, framed by towering cliffs popular with climbers." },
      { name: "Old City, Chiang Mai", description: "A moated old town of more than a hundred temples, with markets and cooking schools close by." },
    ],
    experiences: [
      { title: "Island hopping by longtail boat", description: "Spend a day between hidden coves, snorkelling stops and quiet beaches." },
      { title: "A Thai cooking class", description: "Shop a local market, then learn to balance sweet, sour, salty and spicy." },
      { title: "Bangkok after dark", description: "Rooftop views, riverside dinners and the energy of the night markets." },
      { title: "An ethical elephant sanctuary", description: "Observe rescued elephants at a sanctuary that does not offer riding." },
    ],
    itinerary: [
      { days: "Days 1–2", title: "Bangkok", description: "Temples of the old city, a river journey and an evening in the night markets." },
      { days: "Days 3–4", title: "Phuket or Krabi", description: "Settle into the coast and set out on a full-day island-hopping trip." },
      { days: "Days 5–6", title: "Island time", description: "Unscheduled beach days, spa time or a sunset cruise." },
      { days: "Day 7", title: "Departure", description: "Fly home from Phuket or connect through Bangkok." },
    ],
  },
  {
    slug: "singapore",
    name: "Singapore",
    country: "Singapore",
    type: "international",
    region: "Southeast Asia",
    categories: ["cities"],
    featured: true,
    tagline: "A garden city of futuristic skylines and world-class dining.",
    summary:
      "Compact, immaculate and endlessly inventive, Singapore blends cutting-edge architecture with Chinese, Malay, Indian and Peranakan heritage.",
    overview: [
      "Singapore packs an extraordinary amount into a small island. The Marina Bay waterfront is a showcase of modern design, while neighbourhoods such as Chinatown, Kampong Glam and Little India preserve the city's multicultural roots.",
      "It is one of the easiest places in Asia to travel with children, thanks to excellent public transport and attractions such as Sentosa, the Singapore Zoo and Night Safari. Its hawker centres, recognised by UNESCO as intangible cultural heritage, are a destination in their own right.",
    ],
    image: u("photo-1525625293386-3f8f99389edd"),
    imageAlt: "Marina Bay Sands and the Singapore skyline across the bay",
    gallery: [
      { src: u("photo-1565967511849-76a60a516170"), alt: "Supertree Grove at Gardens by the Bay" },
      { src: u("photo-1496939376851-89342e90adcd"), alt: "Singapore waterfront at night" },
      { src: u("photo-1508964942454-1a56651d54ac"), alt: "Singapore city skyline" },
    ],
    bestTime: { months: [2, 3, 4, 7, 8], note: "Singapore is warm year-round. February to April tends to be drier; July and August host festivals and lively events." },
    idealFor: ["Families", "Short breaks", "Food lovers"],
    duration: "3–5 days",
    highlights: ["Gardens by the Bay and the Supertree Grove", "A day of attractions on Sentosa Island", "Hawker-centre dining across the city", "Easy to combine with Malaysia or Bali"],
    attractions: [
      { name: "Gardens by the Bay", description: "Vast conservatories and the illuminated Supertree Grove beside Marina Bay." },
      { name: "Marina Bay", description: "The city's showpiece waterfront, best seen at night from the promenade." },
      { name: "Sentosa Island", description: "A resort island with beaches, theme parks and an aquarium." },
      { name: "Chinatown & Little India", description: "Historic shophouse streets, temples and some of the city's best food." },
    ],
    experiences: [
      { title: "Night Safari", description: "A nocturnal wildlife park experienced after dark." },
      { title: "A hawker-centre trail", description: "Chicken rice, laksa and satay at local favourites." },
      { title: "Heritage walks", description: "Explore Peranakan architecture in Joo Chiat and Kampong Glam." },
      { title: "Skyline viewpoints", description: "Watch the city light up from an observation deck or rooftop." },
    ],
    itinerary: [
      { days: "Day 1", title: "Marina Bay", description: "Gardens by the Bay in the afternoon and the waterfront light show at night." },
      { days: "Day 2", title: "Sentosa", description: "A full day of beaches and attractions on the island." },
      { days: "Day 3", title: "Neighbourhoods", description: "Chinatown, Little India and Kampong Glam, with lunch at a hawker centre." },
      { days: "Day 4", title: "Wildlife & departure", description: "The zoo or Night Safari, depending on your flight time." },
    ],
  },
  {
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    type: "international",
    region: "Southeast Asia",
    categories: ["islands", "heritage"],
    featured: true,
    tagline: "Rice terraces, clifftop temples and slow tropical mornings.",
    summary:
      "Bali balances spirituality and seclusion — jungle villas in Ubud, surf beaches in the south and temple ceremonies woven into daily life.",
    overview: [
      "Bali's Hindu culture gives the island a rhythm unlike anywhere else in Indonesia. Offerings are placed on doorsteps each morning, temple festivals fill the calendar, and the inland town of Ubud is surrounded by terraced rice fields and river valleys.",
      "The south of the island offers beach clubs, surf breaks and dramatic clifftop temples such as Uluwatu, while nearby Nusa Penida adds wild coastal scenery a short boat ride away. It is a natural choice for honeymoons and wellness-focused holidays.",
    ],
    image: u("photo-1537996194471-e657df975ab4"),
    imageAlt: "Pura Ulun Danu Bratan temple on a lake in the Bali highlands",
    gallery: [
      { src: u("photo-1518548419970-58e3b4079ab2"), alt: "Terraced rice fields in Bali" },
      { src: u("photo-1555400038-63f5ba517a47"), alt: "Traditional Balinese temple gate" },
      { src: u("photo-1573790387438-4da905039392"), alt: "Bali coastline at sunset" },
    ],
    bestTime: { months: [4, 5, 6, 7, 8, 9, 10], note: "The dry season runs from roughly April to October. July and August are the busiest months." },
    idealFor: ["Honeymooners", "Wellness seekers", "Couples"],
    duration: "6–8 days",
    highlights: ["Ubud's rice terraces and art villages", "Sunset at Uluwatu's clifftop temple", "Private pool villas in the jungle or by the sea", "Day trips to Nusa Penida"],
    attractions: [
      { name: "Tegallalang Rice Terraces", description: "Sculpted terraces in the hills north of Ubud, best visited early in the morning." },
      { name: "Uluwatu Temple", description: "A sea temple perched on cliffs above the Indian Ocean, known for its sunset Kecak dance." },
      { name: "Tanah Lot", description: "A temple set on a rock formation surrounded by the sea at high tide." },
      { name: "Nusa Penida", description: "A rugged neighbouring island with viewpoints such as Kelingking Beach." },
    ],
    experiences: [
      { title: "Mount Batur sunrise trek", description: "An early hike up an active volcano for views across the caldera." },
      { title: "Balinese spa rituals", description: "Traditional massage and flower baths in a garden setting." },
      { title: "Temple and craft villages", description: "Discover wood carving, silver work and painting around Ubud." },
      { title: "Snorkelling with manta rays", description: "Seasonal trips from Nusa Penida to known manta cleaning stations." },
    ],
    itinerary: [
      { days: "Days 1–3", title: "Ubud", description: "Rice terraces, temples, a spa afternoon and an optional sunrise trek." },
      { days: "Day 4", title: "Nusa Penida", description: "A day trip by boat to the island's coastal viewpoints." },
      { days: "Days 5–6", title: "Uluwatu or Seminyak", description: "Beach time, clifftop dining and a sunset temple visit." },
      { days: "Day 7", title: "Departure", description: "A relaxed morning before your flight." },
    ],
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    country: "Malaysia",
    type: "international",
    region: "Southeast Asia",
    categories: ["cities", "islands", "heritage"],
    tagline: "Soaring towers, rainforest highlands and island shores.",
    summary:
      "Malaysia moves easily between the energy of Kuala Lumpur, the heritage streets of Penang and the beaches of Langkawi.",
    overview: [
      "Kuala Lumpur is a confident, modern capital crowned by the Petronas Twin Towers, with colonial buildings, street food and the limestone Batu Caves just outside the city. Cooler air awaits in the Cameron Highlands, known for tea plantations and walking trails.",
      "George Town in Penang, a UNESCO World Heritage Site, is celebrated for its shophouses, street art and food culture. For beaches, Langkawi's duty-free archipelago offers rainforest, mangroves and calm bays.",
    ],
    image: u("photo-1596422846543-75c6fc197f07"),
    imageAlt: "Petronas Twin Towers in Kuala Lumpur at night",
    gallery: [
      { src: u("photo-1508062878650-88b52897f298"), alt: "Kuala Lumpur skyline" },
      { src: u("photo-1587825140708-dfaf72ae4b04"), alt: "Tea plantations on green hills" },
      { src: u("photo-1559628233-100c798642d4"), alt: "Tropical island beach" },
    ],
    bestTime: { months: [12, 1, 2, 3, 4], note: "December to April suits Langkawi and Penang on the west coast. East-coast islands are best from March to October." },
    idealFor: ["Families", "Food lovers", "Multi-country trips"],
    duration: "6–8 days",
    highlights: ["Kuala Lumpur's skyline and food scene", "Heritage George Town in Penang", "Langkawi's beaches and cable car", "Tea country in the Cameron Highlands"],
    attractions: [
      { name: "Petronas Twin Towers", description: "Kuala Lumpur's landmark, with a skybridge and observation deck." },
      { name: "Batu Caves", description: "A limestone hill of cave temples reached by a colourful staircase." },
      { name: "George Town, Penang", description: "A UNESCO-listed old town of shophouses, clan houses and street art." },
      { name: "Langkawi Sky Bridge", description: "A curved pedestrian bridge high above the rainforest, reached by cable car." },
    ],
    experiences: [
      { title: "A Penang food trail", description: "Char kway teow, assam laksa and nyonya sweets." },
      { title: "Mangrove kayaking in Langkawi", description: "Paddle through quiet channels in a protected geopark." },
      { title: "Tea estates", description: "Walk among the plantations of the Cameron Highlands." },
      { title: "City lights", description: "Evenings at Kuala Lumpur's rooftop bars and night markets." },
    ],
    itinerary: [
      { days: "Days 1–2", title: "Kuala Lumpur", description: "The Twin Towers, Batu Caves and the city's food streets." },
      { days: "Days 3–4", title: "Penang", description: "Heritage walks and a food-led exploration of George Town." },
      { days: "Days 5–6", title: "Langkawi", description: "Beach days, the Sky Bridge and a mangrove tour." },
      { days: "Day 7", title: "Departure", description: "Fly home via Kuala Lumpur." },
    ],
  },
  {
    slug: "australia",
    name: "Australia",
    country: "Australia",
    type: "international",
    region: "Oceania",
    categories: ["cities", "islands", "desert"],
    featured: true,
    tagline: "Harbour cities, ancient red centre and the Great Barrier Reef.",
    summary:
      "A continent of contrasts — sophisticated cities, coral reefs, coastal drives and the spiritual heart of Uluru.",
    overview: [
      "Australia is best approached as a series of chapters. Sydney's harbour, beaches and Opera House make an unforgettable start, Melbourne offers laneway culture and the Great Ocean Road, and tropical Queensland is the gateway to the Great Barrier Reef.",
      "In the Red Centre, Uluru-Kata Tjuta National Park reveals a landscape of deep cultural significance to the Anangu people. Distances are large, so thoughtful routing and internal flights make all the difference.",
    ],
    image: u("photo-1506973035872-a4ec16b8e8d9"),
    imageAlt: "Sydney Opera House and Harbour Bridge on a clear day",
    gallery: [
      { src: u("photo-1523482580672-f109ba8cb9be"), alt: "Sydney harbour and city skyline" },
      { src: u("photo-1529108190281-9a4f620bc2d8"), alt: "Coastal cliffs in Australia" },
      { src: u("photo-1514395462725-fb4566210144"), alt: "Melbourne city view" },
    ],
    bestTime: { months: [9, 10, 11, 3, 4, 5], note: "Spring (September–November) and autumn (March–May) are pleasant in the south. Tropical north is best from May to October." },
    idealFor: ["Families", "Adventurers", "Longer holidays"],
    duration: "10–14 days",
    highlights: ["Sydney Harbour and its beaches", "Snorkelling the Great Barrier Reef", "The Great Ocean Road", "Sunrise at Uluru"],
    attractions: [
      { name: "Sydney Opera House", description: "A UNESCO-listed icon on the harbour, with tours and performances." },
      { name: "Great Barrier Reef", description: "The world's largest coral reef system, reached from Cairns or the Whitsundays." },
      { name: "Great Ocean Road", description: "A coastal drive west of Melbourne past the limestone Twelve Apostles." },
      { name: "Uluru-Kata Tjuta National Park", description: "A sacred sandstone monolith in the heart of the Northern Territory." },
    ],
    experiences: [
      { title: "Harbour cruise in Sydney", description: "See the Opera House and Harbour Bridge from the water." },
      { title: "Reef snorkelling or diving", description: "A day on the outer reef with experienced operators." },
      { title: "Wildlife encounters", description: "Kangaroos, koalas and native birds in sanctuaries and national parks." },
      { title: "Melbourne laneways", description: "Coffee culture, street art and small dining rooms." },
    ],
    itinerary: [
      { days: "Days 1–3", title: "Sydney", description: "The harbour, Bondi to Coogee walk and a day in the Blue Mountains." },
      { days: "Days 4–6", title: "Melbourne", description: "City laneways and a day on the Great Ocean Road." },
      { days: "Days 7–9", title: "Cairns", description: "The Great Barrier Reef and the Daintree Rainforest." },
      { days: "Days 10–11", title: "Uluru (optional)", description: "Sunrise and sunset at Uluru before flying home." },
    ],
  },
  {
    slug: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    type: "international",
    region: "Middle East",
    categories: ["cities", "desert"],
    featured: true,
    tagline: "Record-breaking skylines, golden dunes and old-world souks.",
    summary:
      "Dubai combines bold modern architecture with desert adventures, luxurious resorts and the historic charm of its creekside quarters.",
    overview: [
      "Dubai is a short-haul favourite for good reason: excellent connections, outstanding hotels and a winter climate that is warm and sunny. Downtown is home to the Burj Khalifa and Dubai Mall, while the Marina and Palm Jumeirah offer beachside living.",
      "Beyond the skyline, the city's origins come alive in the Al Fahidi Historical Neighbourhood and the gold and spice souks across Dubai Creek. A desert safari, dinner under the stars and an easy day trip to Abu Dhabi round out the experience.",
    ],
    image: u("photo-1512453979798-5ea266f8880c"),
    imageAlt: "Dubai skyline with the Burj Khalifa at dusk",
    gallery: [
      { src: u("photo-1518684079-3c830dcef090"), alt: "Dubai city skyline" },
      { src: u("photo-1451337516015-6b6e9a44a8a3"), alt: "Desert sand dunes at sunset" },
      { src: u("photo-1526495124232-a04e1849168c"), alt: "Dubai Marina towers" },
    ],
    bestTime: { months: [11, 12, 1, 2, 3], note: "November to March is the most comfortable time, with warm days and cooler evenings. Summers are very hot." },
    idealFor: ["Families", "Short breaks", "Luxury seekers"],
    duration: "4–6 days",
    highlights: ["The view from the Burj Khalifa", "An evening desert safari", "Creekside souks by abra boat", "Beach resorts on Palm Jumeirah"],
    attractions: [
      { name: "Burj Khalifa", description: "The world's tallest building, with observation decks over the city." },
      { name: "Al Fahidi Historical Neighbourhood", description: "Restored wind-tower houses, galleries and museums by the creek." },
      { name: "Museum of the Future", description: "A striking landmark exploring ideas about tomorrow's world." },
      { name: "Dubai Marina & JBR", description: "Waterfront promenades, dining and a long public beach." },
    ],
    experiences: [
      { title: "Desert safari", description: "Dune drives, a desert camp and dinner beneath the stars." },
      { title: "Abra across the creek", description: "Cross Dubai Creek by traditional boat to the gold and spice souks." },
      { title: "A day in Abu Dhabi", description: "The Sheikh Zayed Grand Mosque and Louvre Abu Dhabi." },
      { title: "Theme parks", description: "Indoor and outdoor parks that make Dubai a family favourite." },
    ],
    itinerary: [
      { days: "Day 1", title: "Downtown", description: "Dubai Mall, the fountain show and the Burj Khalifa at sunset." },
      { days: "Day 2", title: "Old Dubai & the desert", description: "Souks in the morning, desert safari in the evening." },
      { days: "Day 3", title: "Abu Dhabi", description: "A guided day trip to the capital." },
      { days: "Days 4–5", title: "Beach & departure", description: "Resort time on the Palm or Marina before flying home." },
    ],
  },
  {
    slug: "maldives",
    name: "Maldives",
    country: "Maldives",
    type: "international",
    region: "Indian Ocean",
    categories: ["islands"],
    featured: true,
    tagline: "Overwater villas above the clearest lagoons on earth.",
    summary:
      "More than a thousand coral islands scattered across the Indian Ocean — the definitive escape for honeymoons and slow, barefoot luxury.",
    overview: [
      "The Maldives is a chain of 26 atolls where most resorts occupy an island of their own. Days revolve around the lagoon: snorkelling house reefs, paddling at sunrise and dining with your feet in the sand.",
      "Resorts are reached by speedboat, domestic flight or seaplane from Malé, so choosing the right atoll and transfer is as important as choosing the villa. Many travellers pair the Maldives with Dubai or Sri Lanka.",
    ],
    image: u("photo-1514282401047-d79a71a590e8"),
    imageAlt: "Overwater villas above a turquoise lagoon in the Maldives",
    gallery: [
      { src: u("photo-1573843981267-be1999ff37cd"), alt: "Aerial view of a Maldives island" },
      { src: u("photo-1540202404-a2f29016b523"), alt: "Overwater villa deck in the Maldives" },
      { src: u("photo-1544550581-5f7ceaf7f992"), alt: "Clear shallow water on a tropical beach" },
    ],
    bestTime: { months: [11, 12, 1, 2, 3, 4], note: "The dry north-east monsoon, roughly November to April, brings the calmest seas and most sunshine." },
    idealFor: ["Honeymooners", "Couples", "Divers"],
    duration: "4–7 days",
    highlights: ["An overwater or beach villa", "Snorkelling vibrant house reefs", "A seaplane transfer over the atolls", "Private sandbank dining"],
    attractions: [
      { name: "House reefs", description: "Many resorts sit on fringing reefs you can snorkel straight from the beach." },
      { name: "Hanifaru Bay, Baa Atoll", description: "A UNESCO Biosphere Reserve known for seasonal manta ray gatherings." },
      { name: "Malé", description: "The compact capital, with a fish market and the Old Friday Mosque." },
      { name: "Sandbanks", description: "Tiny strips of sand in the open lagoon, perfect for a picnic." },
    ],
    experiences: [
      { title: "Sunset dolphin cruise", description: "Spinner dolphins are frequently seen at dusk." },
      { title: "Seaplane transfer", description: "A once-in-a-lifetime view of the atolls from above." },
      { title: "Diving with rays and turtles", description: "World-class dive sites suitable for many levels." },
      { title: "Spa over the water", description: "Treatment rooms with glass floors above the lagoon." },
    ],
    itinerary: [
      { days: "Day 1", title: "Arrival & transfer", description: "Seaplane or speedboat to your island resort." },
      { days: "Days 2–4", title: "Lagoon life", description: "Snorkelling, a dolphin cruise and unhurried days." },
      { days: "Day 5", title: "Sandbank & spa", description: "A private picnic and an afternoon treatment." },
      { days: "Day 6", title: "Departure", description: "Transfer back to Malé for your flight." },
    ],
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    country: "Switzerland",
    type: "international",
    region: "Europe",
    categories: ["mountains", "cities"],
    featured: true,
    tagline: "Glacier peaks, mirror lakes and the most scenic railways in the world.",
    summary:
      "Alpine villages, lakeside cities and panoramic trains make Switzerland the classic European mountain holiday — in summer or snow.",
    overview: [
      "Switzerland's famously efficient railways turn travel itself into the highlight. Lucerne's lake and old town, Interlaken between two lakes, and the high-alpine Jungfrau region form a natural first circuit.",
      "Further south, Zermatt sits beneath the Matterhorn, and the Glacier Express links it to St. Moritz on one of Europe's most celebrated train journeys. Summer brings wildflower meadows and hiking; winter brings snow-sure skiing and festive markets.",
    ],
    image: u("photo-1530122037265-a5f1f91d3b99"),
    imageAlt: "Snow-capped Swiss Alps above a green valley",
    gallery: [
      { src: u("photo-1476514525535-07fb3b4ae5f1"), alt: "Boats on a calm alpine lake in Switzerland" },
      { src: u("photo-1527668752968-14dc70a27c95"), alt: "The Matterhorn above Zermatt" },
      { src: u("photo-1506905925346-21bda4d32df4"), alt: "Mountain range above the clouds" },
    ],
    bestTime: { months: [6, 7, 8, 9, 12, 1, 2], note: "June to September for lakes, hiking and clear mountain views; December to March for snow and winter sports." },
    idealFor: ["Families", "Honeymooners", "Rail enthusiasts"],
    duration: "7–10 days",
    highlights: ["Jungfraujoch, the 'Top of Europe'", "Lake Lucerne by steamer", "The Matterhorn from Zermatt", "A panoramic train journey"],
    attractions: [
      { name: "Jungfraujoch", description: "A high-alpine saddle reached by cog railway, with glacier views and an ice palace." },
      { name: "Lucerne", description: "A medieval old town and covered bridges on the shore of Lake Lucerne." },
      { name: "Zermatt & the Matterhorn", description: "A car-free village beneath one of the world's most recognisable peaks." },
      { name: "Mount Titlis", description: "A rotating cable car and year-round snow above Engelberg." },
    ],
    experiences: [
      { title: "Glacier Express", description: "A slow, panoramic train between Zermatt and St. Moritz." },
      { title: "Lake cruises", description: "Historic paddle steamers on Lake Lucerne and Lake Geneva." },
      { title: "Alpine hikes", description: "Gentle trails between mountain huts and viewpoints." },
      { title: "Swiss chocolate and cheese", description: "Visit a show dairy or chocolatier in the countryside." },
    ],
    itinerary: [
      { days: "Days 1–2", title: "Zurich & Lucerne", description: "Old towns, a lake cruise and Mount Pilatus or Titlis." },
      { days: "Days 3–5", title: "Interlaken", description: "Jungfraujoch, Grindelwald and the lakes of Thun and Brienz." },
      { days: "Days 6–7", title: "Zermatt", description: "The Matterhorn and the Gornergrat railway." },
      { days: "Day 8", title: "Glacier Express & departure", description: "A scenic rail day before flying home." },
    ],
  },
  {
    slug: "kerala",
    name: "Kerala",
    country: "India",
    type: "domestic",
    region: "South India",
    categories: ["islands", "mountains", "heritage"],
    featured: true,
    tagline: "Backwater houseboats, misty tea hills and the Malabar coast.",
    summary:
      "Kerala's palm-lined backwaters, cool hill stations and spice-scented ports make it one of India's most restorative journeys.",
    overview: [
      "Life slows down on Kerala's backwaters, a network of canals and lagoons best explored by houseboat from Alleppey or Kumarakom. Inland, the hill station of Munnar is blanketed in tea plantations, while Thekkady's Periyar Tiger Reserve shelters elephants and spice gardens.",
      "Fort Kochi adds centuries of trading history — Chinese fishing nets, Portuguese and Dutch architecture and a thriving art scene. Ayurveda retreats and quiet beaches at Varkala and Kovalam complete the picture.",
    ],
    image: u("photo-1602216056096-3b40cc0c9944"),
    imageAlt: "A traditional houseboat on the palm-lined backwaters of Kerala",
    gallery: [
      { src: u("photo-1593693397690-362cb9666fc2"), alt: "Kerala backwaters and coconut palms" },
      { src: u("photo-1580889240912-c39ecefd3d95"), alt: "Tea plantations on rolling hills" },
      { src: u("photo-1609340667249-82e67f1a0a2e"), alt: "Coastal scenery in South India" },
    ],
    bestTime: { months: [10, 11, 12, 1, 2, 3], note: "October to March is pleasant and dry. The monsoon (June–September) is lush and popular for Ayurveda." },
    idealFor: ["Couples", "Families", "Wellness seekers"],
    duration: "6–8 days",
    highlights: ["A night aboard a backwater houseboat", "Tea estates of Munnar", "Heritage Fort Kochi", "Authentic Ayurvedic treatments"],
    attractions: [
      { name: "Alleppey backwaters", description: "Houseboat cruises through canals, paddy fields and village life." },
      { name: "Munnar", description: "A hill station of tea gardens, waterfalls and Eravikulam National Park." },
      { name: "Fort Kochi", description: "Chinese fishing nets, colonial streets and contemporary galleries." },
      { name: "Periyar, Thekkady", description: "A wildlife reserve around a lake, with spice plantations nearby." },
    ],
    experiences: [
      { title: "Houseboat overnight", description: "Drift through the backwaters with meals cooked on board." },
      { title: "Kathakali performance", description: "Kerala's classical dance-drama, with elaborate make-up." },
      { title: "Spice plantation walk", description: "Cardamom, pepper and cinnamon growing in the hills." },
      { title: "Ayurveda", description: "Traditional therapies at a dedicated retreat." },
    ],
    itinerary: [
      { days: "Days 1–2", title: "Kochi", description: "Fort Kochi's heritage streets and an evening Kathakali show." },
      { days: "Days 3–4", title: "Munnar", description: "Tea estates, viewpoints and cool hill air." },
      { days: "Day 5", title: "Thekkady", description: "Spice gardens and a boat ride on Periyar Lake." },
      { days: "Days 6–7", title: "Alleppey", description: "An overnight houseboat cruise before departure." },
    ],
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    country: "India",
    type: "domestic",
    region: "North India",
    categories: ["heritage", "desert"],
    featured: true,
    tagline: "Palace hotels, hilltop forts and the golden Thar Desert.",
    summary:
      "The land of kings — a journey through pink, blue and golden cities, lake palaces and nights beneath desert stars.",
    overview: [
      "Rajasthan is India at its most regal. Jaipur's Amber Fort and Hawa Mahal set the scene, Jodhpur's Mehrangarh Fort towers above a city of blue houses, and Udaipur's lakes and palaces make it one of the country's most romantic cities.",
      "To the west, Jaisalmer's sandstone fort rises from the Thar Desert, where camel rides and desert camps offer a very different pace. Many of the state's historic palaces and havelis now welcome guests as heritage hotels.",
    ],
    image: u("photo-1477587458883-47145ed94245"),
    imageAlt: "Ornate palace architecture in Rajasthan",
    gallery: [
      { src: u("photo-1599661046289-e31897846e41"), alt: "Pink sandstone facade in Jaipur" },
      { src: u("photo-1568322445389-f64ac2515020"), alt: "Udaipur palace beside a lake" },
      { src: u("photo-1609920658906-8223bd289001"), alt: "Desert fort in golden light" },
    ],
    bestTime: { months: [10, 11, 12, 1, 2, 3], note: "October to March is cool and dry. Summers are extremely hot, particularly in the desert." },
    idealFor: ["Couples", "Families", "Culture lovers"],
    duration: "7–10 days",
    highlights: ["Staying in a heritage palace hotel", "Amber Fort and Jaipur's old city", "Sunset on Lake Pichola", "A night in the Thar Desert"],
    attractions: [
      { name: "Amber Fort, Jaipur", description: "A hilltop fort-palace of mirrored halls and courtyards." },
      { name: "Mehrangarh Fort, Jodhpur", description: "One of India's largest forts, overlooking the Blue City." },
      { name: "City Palace, Udaipur", description: "A palace complex on the banks of Lake Pichola." },
      { name: "Jaisalmer Fort", description: "A living sandstone fort, still home to residents and shops." },
    ],
    experiences: [
      { title: "Desert camp", description: "Camel rides at sunset in the dunes outside Jaisalmer." },
      { title: "Bazaar walks", description: "Textiles, gemstones and block prints in Jaipur's old city." },
      { title: "Lake Pichola boat ride", description: "See Udaipur's palaces from the water at golden hour." },
      { title: "Rajasthani cuisine", description: "Dal baati churma, laal maas and royal thali dinners." },
    ],
    itinerary: [
      { days: "Days 1–2", title: "Jaipur", description: "Amber Fort, City Palace, Hawa Mahal and the bazaars." },
      { days: "Days 3–4", title: "Jodhpur", description: "Mehrangarh Fort and the blue lanes below it." },
      { days: "Days 5–6", title: "Jaisalmer", description: "The golden fort and a desert camp overnight." },
      { days: "Days 7–8", title: "Udaipur", description: "Palaces, lakes and a sunset boat ride." },
    ],
  },
  {
    slug: "kashmir",
    name: "Kashmir",
    country: "India",
    type: "domestic",
    region: "North India",
    categories: ["mountains"],
    tagline: "Shikara rides, alpine meadows and snowbound valleys.",
    summary:
      "Kashmir's lakes, pine forests and Himalayan meadows have drawn travellers for centuries — serene in summer, magical under snow.",
    overview: [
      "Srinagar's Dal Lake is the heart of a Kashmir holiday: stay on a carved cedar houseboat, glide past floating markets by shikara and stroll through the terraced Mughal gardens of Nishat and Shalimar.",
      "Beyond the city, Gulmarg's gondola climbs to high alpine slopes, Pahalgam follows the Lidder River through pine valleys, and Sonamarg opens onto glaciers and meadows. Check current travel advisories when planning.",
    ],
    image: u("photo-1595815771614-ade9d652a65d"),
    imageAlt: "Shikara boats on Dal Lake with mountains behind, Kashmir",
    gallery: [
      { src: u("photo-1566837945700-30057527ade0"), alt: "Snow-covered mountains in Kashmir" },
      { src: u("photo-1597074866923-dc0589150358"), alt: "Pine forest valley in the Himalayas" },
      { src: u("photo-1605649487212-47bdab064df7"), alt: "Mountain meadow and river" },
    ],
    bestTime: { months: [4, 5, 6, 7, 8, 9, 10, 12, 1, 2], note: "April to October for gardens and meadows; December to February for snow in Gulmarg." },
    idealFor: ["Honeymooners", "Families", "Nature lovers"],
    duration: "5–7 days",
    highlights: ["A night on a Dal Lake houseboat", "The Gulmarg Gondola", "Mughal gardens of Srinagar", "Pahalgam's river valleys"],
    attractions: [
      { name: "Dal Lake, Srinagar", description: "Houseboats, shikaras and floating gardens framed by mountains." },
      { name: "Gulmarg", description: "A meadow resort with one of the highest cable cars in the world." },
      { name: "Pahalgam", description: "A riverside town surrounded by pine forest and valleys such as Betaab." },
      { name: "Sonamarg", description: "The 'meadow of gold', gateway to the Thajiwas Glacier." },
    ],
    experiences: [
      { title: "Sunrise shikara ride", description: "Visit the floating vegetable market at dawn." },
      { title: "Mughal gardens", description: "Terraced gardens of Nishat, Shalimar and Chashme Shahi." },
      { title: "Snow in Gulmarg", description: "Skiing, sledging and gondola rides in winter." },
      { title: "Kashmiri crafts", description: "Pashmina, papier-mâché and hand-knotted carpets." },
    ],
    itinerary: [
      { days: "Days 1–2", title: "Srinagar", description: "Houseboat stay, Mughal gardens and a shikara ride." },
      { days: "Day 3", title: "Gulmarg", description: "A day trip with the gondola." },
      { days: "Days 4–5", title: "Pahalgam", description: "River valleys, meadows and pine forest walks." },
      { days: "Day 6", title: "Sonamarg & departure", description: "A glacier-side excursion before returning to Srinagar." },
    ],
  },
  {
    slug: "goa",
    name: "Goa",
    country: "India",
    type: "domestic",
    region: "West India",
    categories: ["islands", "heritage"],
    tagline: "Sunset beaches, Portuguese lanes and a famously easy pace.",
    summary:
      "India's smallest state packs in palm-fringed beaches, whitewashed churches and a food culture all its own.",
    overview: [
      "North Goa is known for lively beaches, cafés and markets, while South Goa's long, quiet shores suit those who want space and calm. Between them, the Mandovi River leads to Panaji and its colourful Latin Quarter, Fontainhas.",
      "Old Goa's Basilica of Bom Jesus and Se Cathedral form part of a UNESCO World Heritage Site, and inland, spice farms and the Dudhsagar Falls reveal a greener side to the state.",
    ],
    image: u("photo-1512343879784-a960bf40e7f2"),
    imageAlt: "Palm trees along a golden beach in Goa",
    gallery: [
      { src: u("photo-1587922546307-776227941871"), alt: "Goa beach at sunset" },
      { src: u("photo-1614082242765-7c98ca0f3df3"), alt: "Colonial-era church facade" },
      { src: u("photo-1570168007204-dfb528c6958f"), alt: "Colourful houses in a Goan street" },
    ],
    bestTime: { months: [11, 12, 1, 2], note: "November to February offers sunny, comfortable beach weather. The monsoon brings lush green landscapes." },
    idealFor: ["Couples", "Friends", "Short breaks"],
    duration: "4–6 days",
    highlights: ["Quiet beaches of South Goa", "UNESCO-listed churches of Old Goa", "The Latin Quarter of Fontainhas", "Goan seafood and cuisine"],
    attractions: [
      { name: "Basilica of Bom Jesus", description: "A 16th-century basilica in Old Goa, part of a UNESCO World Heritage Site." },
      { name: "Fontainhas, Panaji", description: "Colourful Portuguese-era houses and narrow lanes." },
      { name: "Palolem Beach", description: "A crescent bay in South Goa, calm and scenic." },
      { name: "Dudhsagar Falls", description: "A tiered waterfall on the Goa–Karnataka border, at its fullest after the monsoon." },
    ],
    experiences: [
      { title: "Sunset river cruise", description: "Evening on the Mandovi with music and views." },
      { title: "Spice farm visit", description: "Guided walks and a traditional lunch inland." },
      { title: "Goan food trail", description: "Xacuti, vindaloo, bebinca and fresh catch of the day." },
      { title: "Beach shacks", description: "Long, unhurried meals with your toes in the sand." },
    ],
    itinerary: [
      { days: "Day 1", title: "North Goa", description: "Settle in, beach time and a sunset café." },
      { days: "Day 2", title: "Panaji & Old Goa", description: "Fontainhas, the basilica and a river cruise." },
      { days: "Day 3", title: "Inland Goa", description: "A spice farm, with Dudhsagar Falls in season." },
      { days: "Days 4–5", title: "South Goa", description: "Quiet beaches before departure." },
    ],
  },
];

export const getDestination = (slug: string) => destinations.find((d) => d.slug === slug);
export const international = destinations.filter((d) => d.type === "international");
export const domestic = destinations.filter((d) => d.type === "domestic");
export const featuredDestinations = destinations.filter((d) => d.featured);
