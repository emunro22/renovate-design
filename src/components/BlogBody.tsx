import type { BlogBlock } from "@/lib/blogPosts";

interface BlogBodyProps {
  blocks: BlogBlock[];
}

function BlogBody({ blocks }: BlogBodyProps) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        if (block.type === "heading") {
          return (
            <h2 key={i} className="text-2xl font-bold text-gray-900 pt-4">
              {block.text}
            </h2>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={i} className="list-disc pl-6 space-y-2 text-lg text-gray-700">
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }

        return (
          <p key={i} className="text-lg text-gray-700 leading-relaxed">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

export default BlogBody;
