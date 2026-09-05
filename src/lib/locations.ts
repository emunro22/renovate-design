export interface Town {
  slug: string;
  name: string;
  region: string;
  intro: string;
}

export const towns: Town[] = [
  {
    slug: "erskine",
    name: "Erskine",
    region: "Renfrewshire",
    intro:
      "Erskine sits right on the Clyde by the Erskine Bridge, with a mix of family homes and newer developments that regularly need kitchen, bathroom and joinery work.",
  },
  {
    slug: "paisley",
    name: "Paisley",
    region: "Renfrewshire",
    intro:
      "As the largest town in Renfrewshire, Paisley has a huge range of housing stock, from Victorian terraces to modern builds, and we've worked across most of it.",
  },
  {
    slug: "renfrew",
    name: "Renfrew",
    region: "Renfrewshire",
    intro:
      "Renfrew's close to Glasgow Airport and the Clyde, with plenty of established homes where we regularly fit kitchens, bathrooms and bespoke joinery.",
  },
  {
    slug: "greenock",
    name: "Greenock",
    region: "Inverclyde",
    intro:
      "Greenock's hillside streets and coastal views come with their own renovation challenges, from tenement flats to detached family homes.",
  },
  {
    slug: "port-glasgow",
    name: "Port Glasgow",
    region: "Inverclyde",
    intro:
      "Port Glasgow, just along the Clyde from Greenock, is another town where we regularly carry out kitchen, bathroom and joinery projects.",
  },
  {
    slug: "glasgow",
    name: "Glasgow",
    region: "Glasgow",
    intro:
      "From the West End to the Southside, Glasgow is where a large share of our renovation projects happen: tenements, townhouses and everything in between.",
  },
];

export function getTown(slug: string): Town | undefined {
  return towns.find((t) => t.slug === slug);
}
