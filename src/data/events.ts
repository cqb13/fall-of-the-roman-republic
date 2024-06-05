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
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Eugene_Guillaume_-_the_Gracchi_%28cropped%29.jpg/800px-Eugene_Guillaume_-_the_Gracchi_%28cropped%29.jpg",
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
  {
    name: "Tiberius Gracchus' land reform",
    description:
      "Tiberius Gracchus proposed the Lex Agraria, a law aimed at redistributing public land to benefit the middle and lower classes. The goal was to increase the number of land-owning citizens, which in turn would increase the pool of eligible soldiers. This was a response to the growing inequality in Roman society. The law was passed, but it was not enforced, leading to further unrest.",
    date: "133 BCE",
  },
  {
    name: "Troubles with the constitution",
    description:
      "Rome did not have a written constitution, but one that had been passed down over time. In 133 BCE the consensus around the passed down Roman constitution, that all participants work together through cooperation instead of using their full legal power, was destroyed as the senate continually blocked sensible reforms. In order to overcome this the Tribune of the Plebs deposed their colleague from office.",
    date: "133 BCE",
  },
  {
    name: "Tiberius Gracchus assassinated",
    description:
      "Tiberius and about 300 of his supporters were killed in a violent confrontation initiated by a group of senators led by Scipio Nasica. This marked the beginning of a series of violent political conflicts that ultimately contributed to the fall of the Roman Republic. The attack took place during an electoral assembly, signaling a breakdown in traditional Roman political processes.",
    date: "133 BCE",
    image: "https://farm9.staticflickr.com/8126/8637277265_e653c6364c_z.jpg",
  },
];

export default events;
