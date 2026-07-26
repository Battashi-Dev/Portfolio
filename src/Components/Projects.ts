import expensiveTracker from "../assets/ExpensiveTracker.png";
import movie from "../assets/movie.png";
export const PROJECTS = [
  {
    title: "Expensive Tracker",
    image: expensiveTracker,
    githubHref: "https://github.com/Battashi-Dev/expensive-tracker",
    demoHref: "https://expensive-tracker-wheat.vercel.app/",
    description:
      "A React + TypeScript Expense Tracker with localStorage persistence, Zod validation, and React Hook Form. built with custom hooks for state management and Chakra UI for the interface",
    tags: [
      { label: "React", colorScheme: "blue" },
      { label: "TypeScript", colorScheme: "blue" },
      { label: "Zod", colorScheme: "purple" },
      { label: "React hook Form", colorScheme: "pink" },
      { label: "Chakra UI", colorScheme: "gray" },
    ],
  },
  {
    title: "Movies",
    image: movie,
    githubHref: "https://github.com/Battashi-Dev/Movies",
    demoHref: "https://movies-pi-green.vercel.app/",
    description:
      "A React + TypeScript Movie App with APIs using TMDB, it's still in progress",
    tags: [
      { label: "React", colorScheme: "blue" },
      { label: "TypeScript", colorScheme: "blue" },
      { label: "Chakra UI", colorScheme: "gray" },
    ],
  },
  // next project comes here
] as const;
