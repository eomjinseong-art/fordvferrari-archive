export type CarVideo = { videoId: string; title: string; channel: string };

/**
 * One YouTube video per car, shown under the car photo.
 * Every videoId was checked against YouTube oEmbed (HTTP 200, title names the car or its film scene);
 * title and channel are the oEmbed title and author_name.
 * A car missing here falls back to a YouTube search link for "<nameEn> review".
 */
export const carVideos: Record<string, CarVideo> = {
  "ford-gt40-mk2": { videoId: "bJztRHjtwHw", title: "When Ford Defeated Ferrari: Lost Footage Discovered from 1966 | Le Mans | Ford Performance", channel: "Ford Racing" },
  "ford-gt40-mk1": { videoId: "wb1ypnFSaV8", title: "The Ford GT40 Mk1 | Extra Gear | Top Gear", channel: "Top Gear" },
  "ferrari-330-p3": { videoId: "X8xRoabtcdk", title: "The world's most beautiful car? Ferrari P3/4 driven by Brian Redman at FOS", channel: "Goodwood Road & Racing" },
  "shelby-cobra": { videoId: "eVxSqnNQR9s", title: "1 of 23: 1965 Shelby 427 Cobra Competition - Jay Leno's Garage", channel: "Jay Leno's Garage" },
  "shelby-daytona-coupe": { videoId: "wAh4npN-nUA", title: "Peter Brock shares the true story behind the Shelby Cobra Daytona", channel: "Hagerty" },
  "ford-mustang-1965": { videoId: "h6nCd2Z0jHo", title: "Here's Why the Original 1965 Ford Mustang Is an Automotive Icon", channel: "Doug DeMuro" },
  "aston-martin-dbr1": { videoId: "a_9GaHzGkoU", title: "1956 Aston Martin DBR1: A British Racing Rarity", channel: "Petrolicious" },
  "ferrari-250-gt-swb": { videoId: "JitnDHuU8TE", title: "The Ferrari 250 GT SWB Deserves a Special Caretaker - Petrolicious", channel: "Petrolicious" },
  "ferrari-250-gto": { videoId: "ewQaikxTUJs", title: "The Ferrari 250 GTO Speaks for Itself", channel: "Petrolicious" },
  "ferrari-275-gtb": { videoId: "4LiuO5IUsRU", title: "Charles Leclerc drives the Ferrari 275 GTB at Fiorano", channel: "Ferrari" },
  "porsche-906": { videoId: "gwYYBlLqUHk", title: "Behind the Last of the Road-Legal Race Cars: The Champion Porsche 906", channel: "RM Sotheby's" },
  "mercedes-benz-600": { videoId: "54j3koXw9qU", title: "Mercedes 600: 60 Years of Germany's Best Car?", channel: "DW REV - Mobility & Innovation" },
  "ford-country-squire": { videoId: "jkOW05a3xwE", title: "1963 Ford Country Squire - Gateway Classic Cars Indianapolis - #461NDY", channel: "GatewayClassicCars" },
};
