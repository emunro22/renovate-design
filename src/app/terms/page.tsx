import type { Metadata } from "next";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms and conditions for using the ${business.name} website and engaging us for renovation work.`,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function Terms() {
  const lastUpdated = "30 August 2026";

  return (
    <section className="pt-24 py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms &amp; Conditions</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: {lastUpdated}</p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 pt-4">Use of this website</h2>
          <p>
            This website is provided by {business.name} to give information about our home
            renovation services across {business.serviceAreas.join(", ")}. By using this site you
            agree to use it only for lawful purposes and not in any way that could damage or
            impair its operation.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">Website content</h2>
          <p>
            We aim to keep the information on this site accurate and up to date, including
            descriptions of our services and example project photography. However, content is
            provided for general information only and does not constitute a formal quote, offer or
            contract. Actual project scope, pricing and timescales are agreed separately with each
            client following a consultation.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">Quotes and estimates</h2>
          <p>
            Any pricing discussed verbally, by email, or during a consultation is an estimate only
            until confirmed in writing. Final costs may vary depending on the condition of the
            property, materials chosen, and any additional work agreed once a project is underway.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">Renovation work</h2>
          <p>
            Where we agree to carry out renovation, joinery, kitchen, bathroom or interior design
            work for you, the specific terms of that job, including price, timescale, materials
            and payment schedule, will be agreed directly with you before work begins. These
            website terms do not replace or override any separate written agreement for project
            work.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">Intellectual property</h2>
          <p>
            The text, images and branding on this site belong to {business.name} unless otherwise
            stated, and may not be copied or reused without our permission.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">Third-party links</h2>
          <p>
            This site links to our social media profiles (Instagram, Facebook and TikTok) and to
            our Google Business Profile. We aren&apos;t responsible for the content or privacy
            practices of those third-party platforms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">Limitation of liability</h2>
          <p>
            We take reasonable care to keep this website accurate and available, but we don&apos;t
            guarantee it will always be error-free or uninterrupted, and we&apos;re not liable for
            any loss arising from use of, or inability to use, this website.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">Changes to these terms</h2>
          <p>
            We may update these terms from time to time. The &quot;last updated&quot; date at the
            top of this page shows when they were last revised.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">Contact us</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${business.email}`} className="text-blue-500 hover:underline">
              {business.email}
            </a>{" "}
            or{" "}
            <a href={business.phoneHref} className="text-blue-500 hover:underline">
              {business.phone}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
