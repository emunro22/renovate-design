import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";
import { blogPosts, getBlogPost } from "@/lib/blogPosts";
import { business } from "@/lib/business";
import BlogBody from "@/components/BlogBody";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.metaDescription,
      publishedTime: post.publishDate,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: {
      "@type": "Organization",
      name: business.name,
      url: business.siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: business.name,
      url: business.siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${business.siteUrl}/blog/${post.slug}`,
    },
  };

  return (
    <article className="pt-24 py-20 bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/blog" className="text-blue-500 font-medium hover:underline">
          ← Back to blog
        </Link>

        <p className="text-blue-500 font-medium mt-6 mb-2">{post.category}</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <time dateTime={post.publishDate} className="text-sm text-gray-500 block mb-10">
          {new Date(post.publishDate).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>

        <BlogBody blocks={post.body} />

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to talk through your project?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get in touch for a free, no-obligation quote covering{" "}
            {business.serviceAreas.join(", ")}.
          </p>
          <a
            href={business.phoneHref}
            className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </a>
        </div>
      </div>
    </article>
  );
}
