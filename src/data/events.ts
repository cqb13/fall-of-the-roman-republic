export type Event = {
  name: string;
  description: string;
  date: string;
  additionalDate?: string;
  image?: string;
  link?: Link[];
  index?: number;
};

type Link = {
  url: string;
  name: string;
};

const events: Event[] = [
  {
    name: "Tiberius Gracchus was born",
    description: "",
    date: "163 BCE",
    link: [
      {
        url: "https://en.wikipedia.org/wiki/Tiberius_Gracchus",
        name: "wikipedia/Tiberius_Gracchus",
      },
    ],
  },
  {
    name: "Roman defeat at Numantia",
    description:
      "As quaestor Tiberius Gracchus played a critical role in a major roman defeat at Numantia.",
    date: "137 BCE",
  },
  {
    name: "Tiberius Gracchus elected Tribune of the Plebs",
    description:
      "Tiberius Gracchus, a Roman politician, is elected as a tribune of the plebs. He will go on to propose a series of land reforms that will lead to his assassination.",
    date: "134 BCE",
    additionalDate: "December 10th,",
  },
];

export default events;
