const data = [
  {
    Sinhala: "owu",
    English: "yes"
  },
  {
    Sinhala: "nae",
    English: "no"
  },
  {
    Sinhala: "nemeyi",
    English: "(am/are/is) not"
  },
  {
    Sinhala: "haa",
    English: "okay"
  },
  {
    Sinhala: "kan nam",
    English: "(I) will eat"
  },
  {
    Sinhala: "sthoo-thi",
    English: "thank you"
  },
  {
    Sinhala: "dhen na",
    English: "give (command)"
  },
  {
    Sinhala: "en na",
    English: "come"
  },
  {
    Sinhala: "yan na",
    English: "go (command)"
  },
  {
    Sinhala: "me ka ",
    English: "this (thing)"
  },
  {
    Sinhala: "ma gen",
    English: "from me"
  },
  {
    Sinhala: "o yaa gen",
    English: "from you"
  },
  {
    Sinhala: "ma ta",
    English: "to/for me"
  },
  {
    Sinhala: "ka na va",
    English: "eating"
  }
];
const prerender = true;
const ssr = true;
async function load({ fetch, params }) {
  return {
    data
    // imageDataArray: imageDataArray
  };
}
export {
  load,
  prerender,
  ssr
};
