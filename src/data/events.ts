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
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Mario_vincitore_dei_Cimbri.jpg/330px-Mario_vincitore_dei_Cimbri.jpg",
  },
  {
    name: "Mithridates VI threatens Roman territory",
    description:
      "Mithridates VI killed 80,000 Roman citizens living in Greece and Asia Minor",
    date: "90 BCE",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Asia_minor_Mithridates.jpg/600px-Asia_minor_Mithridates.jpg",
  },
  {
    name: "Sulla Marches on Rome",
    description:
      "Sulla marched on Rome with his army, against the senate, as he wished to have control over the champaign against Mithridates VI. Sulla was able to seize the governance of Rome and caused Gaius Marius to flee to Africa. Sulla became most well known for his use of physical force to obtain political power.",
    date: "88 BCE",
    image:
      "https://miro.medium.com/v2/resize:fit:900/1*7Yy1a17PQmWn0NRKA-1OXw.jpeg",
  },
  {
    name: "Sulla declares himself dictator",
    description:
      "Sulla made a second journey through the gates of Rome, declaring himself dictator. Sulla created a list of rivals who he declared enemies of the Republic, and ordered Romans to kill the people on the list. Additionally he decreased the power of the tribune of the plebs by taking their veto power and preventing them from running for offices again, and increased the power of the senate, by adding 300 senators and giving them the governance of judges.",
    date: "82 BCE",
  },
  {
    name: "Pompey is Victorious",
    description:
      "Pompey returns to Rome from his command in Spain after defeating Quintus Sertorius.",
    date: "71 BCE",
  },
  {
    name: "Pompey becomes consul",
    description:
      "Pompey and Crassus joined forces to run for consulship. Pompey is able to reach the highest office without serving in the senate.",
    date: "70 BCE",
  },
  {
    name: "Pompey's reforms",
    description:
      "Pompey and Crassus reverted many of Sulla's major reforms, including restoring the power of the tribune of the plebs, electing censors who were able to expel 64 unfit senators, settled the battle over who should serve as jurymen in the courts in compromise.",
    date: "70 BCE",
  },
  {
    name: "Pompey proposes the Lex Gabinia",
    description:
      "Pompey proposed the Lex Gabinia, which gave him control over costal regions and allowed him to successfully fight piracy, putting the Mediterranean Sea into Roman control.",
    date: "67 BCE",
  },
  {
    name: "Pompey dismisses his troops",
    description:
      "Romans feared that upon returning to Rome, Pompey would use his army to take control of the city. However, when Pompey landed in Brundisium, he dismissed his troops and returned to Rome peacefully.",
    date: "62 BCE",
  },
  {
    name: "The First Triumvirate",
    description:
      "Pompey, Crassus, and Caesar came together to form the First Triumvirate, a political alliance that allowed them to consolidate power and influence in Rome. The alliance was not officially recognized by the Roman Senate, but it effectively controlled Roman politics for several years. The First Triumvirate was a significant development in Roman history, as it marked the beginning of the end of the Roman Republic and the rise of autocratic rule.",
    date: "60 BCE",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/The_First_Triumvirate_of_the_Roman_Republic_1200X800.jpg",
  },
  {
    name: "Conference at Luca",
    description:
      "The members of the First Triumvirate met in Luca to discuss their political strategies and goals. The conference solidified the territories which each member would control, with Caesar being given Gaul, Pompey being given Spain, and Crassus being given Syria.",
    date: "56 BCE",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/First_triumvirate_luca56bc.svg/1920px-First_triumvirate_luca56bc.svg.png",
  },
  {
    name: "Caesar crosses the Rubicon",
    description:
      "Caesar crossed the Rubicon with his army, Pompey fled Rome as Caesar got closer to Rome. This marked the beginning of the civil war between Caesar and Pompey.",
    date: "49 BCE",
    image:
      "https://characterlab.org/wp-content/uploads/2022/03/4-3-22-All-In_web-1024x759.png",
    additionalDate: "January 10th,",
  },
  {
    name: "Caesar declares himself dictator",
    description: "Caesar declared himself dictator for life.",
    date: "44 BCE",
  },
  {
    name: "Caesar is assassinated",
    description:
      "Caesar is assassinated by a group of senators, led by Brutus and Cassius. The assassination was motivated by fears that Caesar was becoming too powerful and would undermine the Roman Republic. This event marked the end of the Roman Republic and the beginning of the Roman Empire.",
    date: "44 BCE",
    additionalDate: "March 15th,",
    image:
      "https://www.thoughtco.com/thmb/2G10ck7ajVt1fnvN124Q9mhDJT4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/death-of-julius-caesar-1805-1806-by-vincenzo-camuccini-1771-1844-oil-on-canvas-400x707-cm-165533961-57b4900f5f9b58b5c2c5cf7a.jpg",
  },
];

export default events;
