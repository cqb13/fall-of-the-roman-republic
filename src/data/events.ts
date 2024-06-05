export type Event = {
  name: string;
  description: string;
  date: string;
  image?: string;
  link?: string[];
  index?: number;
};

const events: Event[] = [
  {
    name: "Event 4",
    description: "Description 4",
    date: "45 BCE",
  },
  {
    name: "Event 5",
    description: "Description 5",
    date: "45 BCE",
  },
  {
    name: "Event 6",
    description: "Description 6",
    date: "45 BCE",
  },
  {
    name: "Event 1",
    description: "Description 1",
    date: "43 BCE",
  },
  {
    name: "Event 2",
    description: "Description 2",
    date: "43 BCE",
  },
  {
    name: "Event 3",
    description: "Description 3",
    date: "43 BCE",
  },
];

export default events;
