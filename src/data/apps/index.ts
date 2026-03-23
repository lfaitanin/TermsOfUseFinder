import { pokemonGo } from "./pokemon-go";
import { tiktok } from "./tiktok";
import { whatsapp } from "./whatsapp";
import { instagram } from "./instagram";
import { spotify } from "./spotify";
import { chatgpt } from "./chatgpt";
import { uber } from "./uber";
import type { AnalyzedApp } from "../types";

export const apps: AnalyzedApp[] = [
  pokemonGo,
  tiktok,
  whatsapp,
  instagram,
  spotify,
  chatgpt,
  uber,
];
