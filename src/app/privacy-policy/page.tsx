import type { Metadata } from "next";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${business.name} collects, uses and protects your personal information.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicy() {
  const lastUpdated = "30 August 2026";

  return (
    <section className="pt-24 py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: {lastUpdated}</p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
          <p>
            This policy explains how {business.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects,
            uses and protects your personal information when you visit {business.siteUrl} or get in
            touch with us about a renovation project.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">Information we collect</h2>
          <p>We collect information you give us directly, such as when you:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Call, email or message us to ask about our services or request a consultation</li>
            <li>Submit a form on this website</li>
            <li>Contact us via Instagram, Facebook or TikTok</li>
          </ul>
          <p>
            This may include your name, phone number, email address, property address and details
            of the project you&apos;d like us to quote for.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">Cookies and similar technologies</h2>
          <p>
            This site uses a small amount of local browser storage to remember your cookie
            preference so we don&apos;t ask again on every visit. We do not currently run analytics
            or advertising cookies. If that changes in future, this policy will be updated and,
            where required, the cookie banner will ask for your consent before anything non-essential
            loads.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">How we use your information</h2>
          <p>We use the information you provide to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to enquiries and provide quotes for renovation work</li>
            <li>Arrange and carry out agreed projects</li>
            <li>Keep records required for accounting and legal purposes</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">Sharing your information</h2>
          <p>
            We may share relevant project details with trades we bring in to help complete your
            job (for example plumbers, electricians or plasterers), and with suppliers where needed
            to order materials on your behalf. We do not share your information with third parties
            for their own marketing purposes.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">How long we keep your information</h2>
          <p>
            We keep enquiry and project information for as long as reasonably necessary to deliver
            our services and meet our legal and accounting obligations, after which it is deleted
            or anonymised.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">Your rights</h2>
          <p>
            Under UK data protection law, you have the right to ask what personal information we
            hold about you, to request a copy of it, to ask us to correct or delete it, and to
            object to how it&apos;s used. To exercise any of these rights, contact us using the
            details below.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">Contact us</h2>
          <p>
            If you have any questions about this policy or how we handle your information, contact
            us at{" "}
            <a href={`mailto:${business.email}`} className="text-blue-500 hover:underline">
              {business.email}
            </a>{" "}
            or{" "}
            <a href={business.phoneHref} className="text-blue-500 hover:underline">
              {business.phone}
            </a>
            . If you&apos;re not satisfied with our response, you can also raise a concern with the
            Information Commissioner&apos;s Office (ICO) at{" "}
            <a
              href="https://ico.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              ico.org.uk
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
