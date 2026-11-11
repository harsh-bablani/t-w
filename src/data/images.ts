/**
 * All remote photography in one place (Unsplash, free to use under the Unsplash License).
 * Swap any ID here to change imagery site-wide. If an image ever fails to load,
 * <SmartImage> falls back to a branded mosaic panel instead of a broken icon.
 */
export const u = (id: string) => `https://images.unsplash.com/${id}`;

export const images = {
  hero: [
    { src: u("photo-1514282401047-d79a71a590e8"), place: "Maldives", alt: "Turquoise lagoon and overwater villas in the Maldives" },
    { src: u("photo-1530122037265-a5f1f91d3b99"), place: "Swiss Alps", alt: "Alpine peaks and green valley in Switzerland" },
    { src: u("photo-1537996194471-e657df975ab4"), place: "Bali", alt: "Lakeside temple in the Bali highlands" },
    { src: u("photo-1512453979798-5ea266f8880c"), place: "Dubai", alt: "Dubai skyline rising above the city at dusk" },
  ],
  experiences: {
    islands: u("photo-1507525428034-b723cf961d3e"),
    mountains: u("photo-1464822759023-fed622ff2c3b"),
    cities: u("photo-1477959858617-67f85cf4f1df"),
    heritage: u("photo-1548013146-72479768bada"),
    desert: u("photo-1509316785289-025f5b846b35"),
  },
  services: {
    flights: u("photo-1436491865332-7a61a109cc05"),
    hotels: u("photo-1566073771259-6a8506099945"),
    visa: u("photo-1488646953014-85cb44e25828"),
    domestic: u("photo-1524492412937-b28074a5d7da"),
    international: u("photo-1469854523086-cc02fe5d8800"),
    cruise: u("photo-1548574505-5e239809ee19"),
    honeymoon: u("photo-1510414842594-a61c69b5ae57"),
    group: u("photo-1527631746610-bca00a040d60"),
    custom: u("photo-1503220317375-aaad61436b1b"),
  },
  about: {
    story: u("photo-1488085061387-422e29b40080"),
    approach: u("photo-1501785888041-af3ef285b470"),
    closing: u("photo-1476514525535-07fb3b4ae5f1"),
  },
  contact: u("photo-1500835556837-99ac94a94552"),
  destinations: u("photo-1506929562872-bb421503ef21"),
  packages: u("photo-1500530855697-b586d89ba3ee"),
};
