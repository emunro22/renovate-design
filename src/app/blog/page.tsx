import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blogPosts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical advice on kitchen and bathroom renovations, home extensions and joinery projects across Glasgow, Renfrewshire and Inverclyde.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const posts = [...blogPosts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  return (
    <section className="pt-24 py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-blue-500 font-medium mb-2">RENOVATION ADVICE</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Blog</h1>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl">
          Practical, straight-talking advice on kitchen and bathroom renovations, home
          extensions and joinery projects across Glasgow, Renfrewshire and Inverclyde.
        </p>

        <div className="grid gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <p className="text-blue-500 font-medium text-sm mb-2">{post.category}</p>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <span className="text-blue-500 font-medium hover:underline">Read more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
