import type { Metadata } from "next";
import TradeSupplyContent from "@/components/TradeSupplyContent";

export const metadata: Metadata = {
  title: "Trade Supply in Glasgow",
  description:
    "Renovate Design's trusted network of trades covers plumbing, gas, electrics, plastering, tiling and bricklaying across Glasgow and the West of Scotland.",
  alternates: { canonical: "/trade-supply" },
};

export default function TradeSupply() {
  return <TradeSupplyContent />;
}
