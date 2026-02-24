import type { Metadata } from "next";
import Index from "@/newPage/pages/Index";

export const metadata: Metadata = {
  title: "Мъжество и саможертва - 150 години Априлско въстание",
  description:
    "Присъединете се към НД 'Традиция' за мащабна историческа възстановка на Априлското въстание. 1 май 2026 г.",
  openGraph: {
    type: "website",
    url: "https://nd-traditsiya.com/new-page/",
    title: "Мъжество и саможертва: 150 години Априлско въстание",
    description:
      "Станете свидетели на живата история: Черешовото топче, битките и героите на 1876-та. Програма, карта и детайли за събитието.",
    images: [
      {
        url: "https://nd-traditsiya.com/assets/images/facebook-preview.jpg",
      },
    ],
  },
};

export default function NewPageRoute() {
  return <Index />;
}
