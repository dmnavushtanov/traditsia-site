import type { Language } from "@/lib/translations";
import { newPageContentBg } from "./content.bg";
import { newPageContentEn } from "./content.en";
import type { NewPageContent } from "./content.types";

export const newPageContents: Record<Language, NewPageContent> = {
  en: newPageContentEn,
  bg: newPageContentBg,
};

export function getNewPageContent(language: Language): NewPageContent {
  return newPageContents[language] ?? newPageContentBg;
}

export const newPageContent = newPageContentBg;
