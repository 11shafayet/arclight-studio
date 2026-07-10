export const confirmedProjects = [
  {
    title: "Hank + Hirth",
    slug: "hank-hirth",
    index: "[ 01 ]",
    image: "https://framerusercontent.com/images/Ji59S5HRdPuDCP52J2ZL4VLsc.png?width=1080&height=1350",
    alt: "Hank and Hirth website thumbnail",
  },
  {
    title: "MG Executive Coach",
    slug: "mg-executive-coach",
    index: "[ 02 ]",
    image: "https://framerusercontent.com/images/OWdbov1TE4Pa6DW8ymYk1tdVPk.png?width=1080&height=1350",
    alt: "MG Executive Coach website thumbnail",
  },
  {
    title: "Annie Ricci",
    slug: "annie-ricci",
    index: "[ 03 ]",
    image: "https://framerusercontent.com/images/56SSO7llUi7gvuYrl3MnrgGsuQ.png?width=1080&height=1350",
    alt: "Annie Ricci website thumbnail",
  },
  {
    title: "Clicko Digital",
    slug: "clicko-digital",
    index: "[ 04 ]",
    image: "https://framerusercontent.com/images/YiXbrsEktaIQ0NPFj8Hsbk8zXM.png?width=1080&height=1350",
    alt: "Clicko Digital website thumbnail",
  },
  {
    title: "Innovazione Futura",
    slug: "innovazione-futura",
    index: "[ 05 ]",
    image: "https://framerusercontent.com/images/CIU618iblMumzaAeXsi0Rvc7W8.png?width=1080&height=1350",
    alt: "Innovazione Futura website thumbnail",
  },
  {
    title: "Dude's Comic Corner",
    slug: "dudes-comic-corner",
    index: "[ 06 ]",
    image: "https://framerusercontent.com/images/Z4HTxHR3Y1jeegTsGG104FEFIi0.png?width=1080&height=1350",
    alt: "Dude's Comic Corner website thumbnail",
  },
];

const placeholderImages = [
  "https://framerusercontent.com/images/Ji59S5HRdPuDCP52J2ZL4VLsc.png?width=1080&height=1350",
  "https://framerusercontent.com/images/OWdbov1TE4Pa6DW8ymYk1tdVPk.png?width=1080&height=1350",
  "https://framerusercontent.com/images/56SSO7llUi7gvuYrl3MnrgGsuQ.png?width=1080&height=1350",
  "https://framerusercontent.com/images/YiXbrsEktaIQ0NPFj8Hsbk8zXM.png?width=1080&height=1350",
];

export const allProjects = [
  ...confirmedProjects,
  ...Array.from({ length: 21 }, (_, idx) => {
    const number = idx + 7;
    return {
      title: `Project ${String(number).padStart(2, "0")}`,
      slug: `project-${String(number).padStart(2, "0")}`,
      index: `[ ${String(number).padStart(2, "0")} ]`,
      image: placeholderImages[idx % placeholderImages.length],
      alt: `Project ${number} placeholder thumbnail`,
    };
  }),
];

export const clients = [
  "zeitgeistandco",
  "mgexecutivecoach",
  "clickodigital",
  "innovazione-futura.ag",
  "hank-hirth.de",
];
