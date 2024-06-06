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
      "Tiberius Gracchus proposed the Lex Agraria, a law aimed at redistributing public land to benefit the middle and lower classes. The goal was to increase the number of land-owning citizens, which in turn would increase the pool of eligible soldiers. This was a response to the growing inequality in Roman society.",
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
  {
    name: "Formation of Populares and Optimates",
    description:
      "The assassination of Tiberius Gracchus led to the formation of two political factions in Rome: the Populares, who supported the interests of the people, and the Optimates, who represented the interests of the aristocracy. These factions would play a significant role in the political conflicts that followed.",
    date: "133 BCE",
  },
  {
    name: "Gaius Gracchus supports non-Roman citizens",
    description:
      "Gaius Gracchus opposed a proposed law which would prohibit non-citizens from settling in Roman towns and evict those who had done so.",
    date: "126 BCE",
    link: [
      {
        url: "https://en.wikipedia.org/wiki/Gaius_Gracchus",
        name: "wikipedia/Gaius_Gracchus",
      },
    ],
  },
  {
    name: "Gaius Gracchus was elected quaestor",
    description:
      "Gaius was elected quaestor and assigned to the Roman province of Sardinia.",
    date: "126 BCE",
    link: [
      {
        url: "https://en.wikipedia.org/wiki/Gaius_Gracchus",
        name: "wikipedia/Gaius_Gracchus",
      },
    ],
  },
  {
    name: "Gaius Gracchus elected Tribune of the Plebs",
    description:
      "Gaius Gracchus, the younger brother of Tiberius Gracchus, is elected as a tribune of the plebs. ",
    date: "123 BCE",
  },
  {
    name: "First Tribunate of Gaius Gracchus",
    description:
      "Gaius started his political career as part of the commission implementing the agrarian reforms initiated by his brother Tiberius. This commission aimed to redistribute public land to Rome's poorer citizens, increasing the number of small landowners. He continued the focus on land reforms by planning and establishing colonies in Italy and re-founding Carthage, aiming to provide land for Rome’s landless citizens. He introduced significant judicial reforms, including the establishment of a permanent court (quaestio de repetundis) to handle cases of extortion by provincial governors. He transferred jury duties from senators to equestrians, seeking to curb corruption. He also implemented a law providing the urban poor with a regular grain supply at subsidized prices, addressing the critical issue of food security in Rome.",
    date: "123 BCE",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Gaius_Gracchus_Tribune_of_the_People.jpg/450px-Gaius_Gracchus_Tribune_of_the_People.jpg",
  },
  {
    name: "Second Tribunate of Gaius Gracchus",
    description:
      "Gaius continued passing laws to help the poor citizens of Rome.",
    date: "122 BCE",
  },
  {
    name: "Gaius Gracchus is killed",
    description:
      "Gaius Gracchus and his supporters were killed in a violent confrontation with a group of senators and their supporters. Gaius' death marked the beginning of a period of political instability and violence in Rome.",
    date: "121 BCE",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Death_of_Gaius_Gracchus.jpg/450px-Death_of_Gaius_Gracchus.jpg",
  },
  {
    name: "Germanic tribes invade Roman territory",
    description:
      "Germanic tribes crossed into Roman territory and defeated Roman armies.",
    date: "113 BCE",
  },
  {
    name: "Gaius Marius gained consulship",
    description:
      "Gaius gained the consulship by as a result of the war against Jugurtha, king of Numidia.",
    date: "107 BCE",
  },
  {
    name: "Consecutive consulships of Gaius Marius",
    description:
      "Gaius was elected consul and given the office for five consecutive years. While in power he made significant changes to the Roman military, like removing the requirement to own your own equipment, creating a standing army by enlisting people for 16 years, and improving Roman military structures by adding more cavalry, improving formations, and upgrading equipment.",
    date: "104 BCE",
  },
  {
    name: "Veterans get land",
    description:
      "With the help of Lucii Appulei Saturnini, Gaius Marius gave land to the soldiers who had completed military service.",
    date: "103 BCE",
  },
  {
    name: "Teutones are defeated the at Aquae Sextiae.",
    description: "Helped secure Rome from the Germanic tribes.",
    date: "102 BCE",
  },
  {
    name: "Cimbri are defeated at Vercellae.",
    description: "Secured Rome from the Germanic tribes.",
    date: "101 BCE",
  },
  {
    name: "Gaius Marius died",
    description: "",
    date: "86 BCE",
    additionalDate: "January 13th,",
  },
];

export default events;
