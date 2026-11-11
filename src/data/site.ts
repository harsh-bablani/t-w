export const site = {
  name: "Tripex World",
  tagline: "Your passport to the world",
  url: "https://www.tripexworld.com",
  description:
    "Tripex World plans international and domestic journeys — flights, hotels, visas, cruises, honeymoons, group tours and fully customised holidays, arranged around you.",
};

/**
 * Contact details are intentionally left blank.
 * Fill these in when the business confirms its official details;
 * every component that shows contact info reads from here.
 */
export const contact = {
  phone: "",
  email: "",
  address: "",
  businessHours: "",
};

export type SocialKey = "instagram" | "facebook" | "linkedin" | "youtube";

/** Social profile URLs — blank until confirmed. Empty entries render as placeholders. */
export const socials: { key: SocialKey; label: string; href: string }[] = [
  { key: "instagram", label: "Instagram", href: "" },
  { key: "facebook", label: "Facebook", href: "" },
  { key: "linkedin", label: "LinkedIn", href: "" },
  { key: "youtube", label: "YouTube", href: "" },
];

export type NavItem = { label: string; href: string; menu?: "destinations" | "services" };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about/" },
  { label: "Destinations", href: "/destinations/", menu: "destinations" },
  { label: "Services", href: "/services/", menu: "services" },
  { label: "Tour Packages", href: "/packages/" },
  { label: "Contact Us", href: "/contact/" },
];
