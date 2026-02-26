import type { Metadata } from "next";
import Index from "@/newPage/pages/Index";

export const metadata: Metadata = {
  title: "Мъжество и саможертва - 150 години Априлско въстание",
  description:
    "Присъединете се към НД 'Традиция' за мащабна историческа възстановка на Априлското въстание. 1 май 2026 г.",
  openGraph: {
    type: "website",
    url: "https://nd-traditsiya.com/april-1876/",
    title: "Мъжество и саможертва: 150 години Априлско въстание",
    description:
      "Станете свидетели на мащабна историческа възстановка. Програма, карта и детайли за събитието.",
    images: [
      {
        url: "https://nd-traditsiya.com/assets/images/facebook-preview.png",
      },
    ],
  },
};

export default function NewPageRoute() {
  return <Index />;
}
