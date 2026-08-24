import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Renovate Design | Kitchen & Bathroom Renovations in Glasgow",
  description:
    "Renovate Design is a home renovation company serving Glasgow, Renfrewshire and Inverclyde, specialising in kitchens, bathrooms, joinery and interior design from first sketch to final finish.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return <HomeContent />;
}
