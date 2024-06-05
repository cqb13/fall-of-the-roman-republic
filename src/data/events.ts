export type Event = {
  name: string;
  description: string;
  date: string;
  additionalDate?: string;
  image?: string;
  link?: string[];
  index?: number;
};

const events: Event[] = [
  {
    name: "Tiberius Gracchus Elected Tribune of the Plebs",
    description:
      "Tiberius Gracchus, a Roman politician, is elected as a tribune of the plebs. He will go on to propose a series of land reforms that will lead to his assassination.",
    date: "134 BCE",
    additionalDate: "December 10th,",
  },
];

export default events;
