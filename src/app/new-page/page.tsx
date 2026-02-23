import type { Metadata } from "next";
import { newPageContentBg } from "@/newPage/content.bg";
import { newPageContentEn } from "@/newPage/content.en";
import Index from "@/newPage/pages/Index";

export const metadata: Metadata = {
  title: `${newPageContentEn.metadata.title} / ${newPageContentBg.metadata.title}`,
  description: `${newPageContentEn.metadata.description} ${newPageContentBg.metadata.description}`,
};

export default function NewPageRoute() {
  return <Index />;
}
