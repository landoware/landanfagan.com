export const projects = [
  {
    name: "Game Notifications Server",
    url: "https://github.com/landoware/farming-notifications-server",
    tech: ["Go"],
    description: [
      "Backend for a RuneLite plugin that notifies players via Discord when in-game timers finish: REST API to schedule, reschedule, and cancel notifications, driven by an in-process scheduler.",
      "Ingests timer data from the game's wiki; 60+ tests, Dockerized, CI runs the suite on every push.",
    ],
  },
  {
    name: "Debt Deleter",
    url: "https://github.com/landoware/debt-deleter-core",
    tech: ["Go"],
    description: [
      "Algorithm to optimize loan payments given a fixed monthly budget across debts to minimize total interest.",
    ],
  },
  {
    name: "Canasta",
    url: "https://github.com/landoware/canasta-server/tree/develop",
    tech: ["Go", "Vue"],
    status: "in progress",
    description: [
      "Four-deck Canasta rules engine in Go with exhaustive tests, paired with a Vue 3 client.",
      "Docker image builds and cloud deployment via GitHub Actions.",
    ],
  },
];
