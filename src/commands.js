import AboutOutput from "@/components/outputs/AboutOutput.vue";
import ProjectsOutput from "@/components/outputs/ProjectsOutput.vue";
import ContactOutput from "@/components/outputs/ContactOutput.vue";
import GithubOutput from "@/components/outputs/GithubOutput.vue";
import CommandsOutput from "./components/outputs/CommandsOutput.vue";

export const commands = [
  { name: "about", icon: "\uf007", color: "text-blue", component: AboutOutput },
  { name: "contact", icon: "\uf0e0", color: "text-green", component: ContactOutput },
  {
    name: "github",
    icon: "\uf09b",
    color: "text-magenta",
    component: GithubOutput,
    url: "https://github.com/landoware",
  },
  { name: "projects", icon: "\uf121", color: "text-yellow", component: ProjectsOutput },
  // Hidden commands work but aren't shown in the `ls` listing.
  { name: "commands", component: CommandsOutput, hidden: true },
];

export function findCommand(input) {
  return commands.find((command) => command.name === input) ?? null;
}
