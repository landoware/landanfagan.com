import { markRaw } from "vue";
import AboutOutput from "@/components/outputs/AboutOutput.vue";
import ProjectsOutput from "@/components/outputs/ProjectsOutput.vue";
import ContactOutput from "@/components/outputs/ContactOutput.vue";
import GithubOutput from "@/components/outputs/GithubOutput.vue";
import CommandsOutput from "./components/outputs/CommandsOutput.vue";
import HelpOutput from "./components/outputs/HelpOutput.vue";

export const commands = [
  { name: "about", icon: "\uf007", color: "text-blue", component: markRaw(AboutOutput) },
  { name: "contact", icon: "\uf0e0", color: "text-green", component: markRaw(ContactOutput) },
  {
    name: "github",
    icon: "\uf09b",
    color: "text-magenta",
    component: markRaw(GithubOutput),
    url: "https://github.com/landoware",
  },
  { name: "projects", icon: "\uf121", color: "text-yellow", component: markRaw(ProjectsOutput) },
  // Hidden commands work but aren't shown in the `ls` listing.
  {
    name: "commands",
    icon: "\uf03a",
    color: "text-blue",
    component: markRaw(CommandsOutput),
    hidden: true,
  },
  { name: "help", component: markRaw(HelpOutput), hidden: true },
];

export function findCommand(input) {
  return commands.find((command) => command.name === input) ?? null;
}
