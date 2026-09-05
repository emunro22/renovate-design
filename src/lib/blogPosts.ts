export interface BlogHeadingBlock {
  type: "heading";
  text: string;
}

export interface BlogParagraphBlock {
  type: "paragraph";
  text: string;
}

export interface BlogListBlock {
  type: "list";
  items: string[];
}

export type BlogBlock = BlogHeadingBlock | BlogParagraphBlock | BlogListBlock;

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  metaDescription: string;
  publishDate: string; // ISO date
  excerpt: string;
  body: BlogBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "kitchen-renovation-or-worktop-replacement",
    title: "Kitchen Renovation or Worktop Replacement: How to Tell Which One You Need",
    category: "Kitchens",
    metaDescription:
      "Not every tired kitchen needs a full renovation. Here's how to work out whether a worktop replacement or a complete refit is the right call for your Glasgow kitchen.",
    publishDate: "2026-01-14",
    excerpt:
      "Not every kitchen that feels dated needs to be ripped out. We look at when a worktop replacement is enough, and when a full renovation makes more sense.",
    body: [
      {
        type: "paragraph",
        text: "One of the questions we get asked most often, whether it's in the West End, the Southside or further out in Renfrewshire and Inverclyde, is whether a kitchen needs a full renovation or whether a smaller adaptation would do the job. The honest answer is that it depends on what's actually wrong with the kitchen, not just how it looks.",
      },
      {
        type: "heading",
        text: "When a worktop replacement is enough",
      },
      {
        type: "paragraph",
        text: "If your cabinets are structurally sound, the layout works for how you use the room, and it's really just the worktop that's looking tired, chipped or dated, a worktop replacement on its own can transform the kitchen without the cost or disruption of a full refit. It's a job we handle just as carefully as a complete renovation, and it's often the quicker, more budget-friendly option.",
      },
      {
        type: "heading",
        text: "When it's time for a full renovation",
      },
      {
        type: "paragraph",
        text: "A full kitchen renovation makes more sense when the layout itself isn't working for you, when cabinets are damaged or beyond their best, or when you're doing structural work elsewhere in the property and it makes sense to tackle the kitchen at the same time. This is especially common in Victorian tenements across Glasgow, where original kitchen layouts often don't suit modern living and a redesign gets a lot more out of the space.",
      },
      {
        type: "heading",
        text: "What's involved either way",
      },
      {
        type: "paragraph",
        text: "Whether it's a full renovation or a worktop swap, we design and fit complete kitchens and worktop replacements across Glasgow, Renfrewshire and Inverclyde, supplying and fitting a range of brands to suit different budgets. A full kitchen renovation typically takes one to three weeks depending on scope, whether walls or plumbing are being altered, and lead times on cabinets and worktops.",
      },
      {
        type: "paragraph",
        text: "If you're not sure which category your kitchen falls into, that's exactly what a free, no-obligation consultation is for. We'll look at the space, talk through what's actually bothering you about the current kitchen, and give you a realistic recommendation rather than upselling a bigger job than you need.",
      },
    ],
  },
  {
    slug: "what-happens-during-a-full-bathroom-renovation",
    title: "What Actually Happens During a Full Bathroom Renovation",
    category: "Bathrooms",
    metaDescription:
      "A step-by-step look at what a complete bathroom renovation actually involves, from rip-out and first-fix plumbing through to tiling and finishing touches.",
    publishDate: "2026-02-03",
    excerpt:
      "From rip-out to the final silicone seal, here's what actually happens, and in what order, during a complete bathroom renovation.",
    body: [
      {
        type: "paragraph",
        text: "\"Full bathroom renovation\" covers a lot of ground, and it's not always obvious to homeowners what actually happens between the old suite coming out and the new one being ready to use. Here's the process we follow on a complete bathroom renovation, from rip-out to finishing touches.",
      },
      {
        type: "heading",
        text: "1. Rip-out",
      },
      {
        type: "paragraph",
        text: "The existing suite, tiling and any damaged wall or floor coverings come out first, so we can see exactly what we're working with underneath, particularly important in older Glasgow properties where original plumbing runs aren't always where you'd expect.",
      },
      {
        type: "heading",
        text: "2. First-fix plumbing and electrics",
      },
      {
        type: "paragraph",
        text: "Before any wall coverings go back up, the pipework and wiring for the new layout gets put in place. This is the stage where a layout change, moving a shower or repositioning a sink, actually happens, since it's far easier to alter pipe and cable runs before the walls are closed up.",
      },
      {
        type: "heading",
        text: "3. Wet wall or tiling",
      },
      {
        type: "paragraph",
        text: "Depending on the finish you've chosen, we install either wet wall panelling or tiling. Both are legitimate options and the right one usually comes down to budget, maintenance preference and the look you're after; we work with different suite ranges so we can put together a bathroom that suits cost-effective refits through to high-end finishes.",
      },
      {
        type: "heading",
        text: "4. New suite installation",
      },
      {
        type: "paragraph",
        text: "The bath, shower, toilet and basin go in once the walls and floor are finished, followed by taps, screens and any storage.",
      },
      {
        type: "heading",
        text: "5. Finishing touches",
      },
      {
        type: "paragraph",
        text: "Silicone sealing around the bath, shower and basin, along with any final snagging, completes the job. It's a small detail but it's what stops water getting where it shouldn't and gives the whole room a proper finished look.",
      },
      {
        type: "paragraph",
        text: "Most full bathroom renovations take around one to two weeks from rip-out to finishing touches, depending on the scope of plumbing and tiling work involved. We manage every stage for you, so you're not left coordinating plumbers, electricians and tilers yourself.",
      },
    ],
  },
  {
    slug: "renovating-a-glasgow-tenement-flat",
    title: "Renovating a Glasgow Tenement Flat: What to Expect",
    category: "Advice",
    metaDescription:
      "Tenement flats across Glasgow come with their own renovation quirks. Here's what to expect when renovating a kitchen or bathroom in a Victorian tenement.",
    publishDate: "2026-03-10",
    excerpt:
      "Victorian tenements make up a huge share of Glasgow's housing stock, and they come with their own renovation quirks. Here's what to plan for.",
    body: [
      {
        type: "paragraph",
        text: "From the West End to the Southside, a large share of the renovation projects we carry out are in Victorian tenement flats. They're a big part of what makes Glasgow's housing stock so varied, but they do come with a few things worth planning for that you wouldn't necessarily think about in a modern new-build.",
      },
      {
        type: "heading",
        text: "Original layouts weren't designed for modern kitchens and bathrooms",
      },
      {
        type: "paragraph",
        text: "Many tenement kitchens and bathrooms were fitted into spaces that predate modern plumbing and appliances, which often means awkward layouts or rooms that feel smaller than they need to. We regularly redesign bathroom and kitchen layouts in Glasgow tenement flats to maximise space and practicality, rather than just replacing what's there like-for-like.",
      },
      {
        type: "heading",
        text: "Plumbing and structure need a closer look",
      },
      {
        type: "paragraph",
        text: "Older pipework and wiring aren't always where a modern layout would put them, which is one of the reasons first-fix plumbing and electrics happen early in any renovation, before walls are closed back up. It's also why we always recommend a proper look at the property before quoting, rather than pricing a job sight unseen.",
      },
      {
        type: "heading",
        text: "Space-saving matters more",
      },
      {
        type: "paragraph",
        text: "In a tenement bathroom or kitchen, every centimetre counts. Fixture choice and layout make a genuinely big difference to how a small room feels day to day, which is why space-saving layouts come up so often when we're working on tenement projects specifically.",
      },
      {
        type: "heading",
        text: "The upside",
      },
      {
        type: "paragraph",
        text: "Tenement flats also tend to have generous ceiling heights and solid original proportions to work with, which gives a redesigned kitchen or bathroom real presence once it's finished. We cover tenement renovation work across Glasgow, Renfrewshire and Inverclyde, and a free consultation is the best way to find out what's realistic for your specific flat.",
      },
    ],
  },
  {
    slug: "small-bathroom-layout-ideas-for-older-glasgow-homes",
    title: "Small Bathroom, Big Difference: Layout Ideas for Older Glasgow Homes",
    category: "Bathrooms",
    metaDescription:
      "Practical layout ideas for making a small bathroom in an older Glasgow home feel bigger, without a full extension or structural change.",
    publishDate: "2026-04-07",
    excerpt:
      "You don't need to extend a room to make it feel bigger. A few practical layout and fixture choices can transform a small, older bathroom.",
    body: [
      {
        type: "paragraph",
        text: "Small bathrooms are one of the most common challenges in older Glasgow homes, tenement flats especially, and one of the most common questions we get is whether it's even possible to make a cramped bathroom feel bigger without knocking through a wall. In most cases, the answer is yes: layout and fixture choice make a genuinely big difference.",
      },
      {
        type: "heading",
        text: "Rethink the layout before the finish",
      },
      {
        type: "paragraph",
        text: "Before choosing tiles or a suite, it's worth looking at whether the current layout is actually the best use of the space. Moving a toilet, swapping a bath for a shower, or repositioning a basin can free up far more usable floor space than most people expect, and this is exactly the kind of change that happens during first-fix plumbing, before the room is tiled or panelled.",
      },
      {
        type: "heading",
        text: "Choose fixtures sized for the room",
      },
      {
        type: "paragraph",
        text: "A compact basin, a corner shower, or a shorter bath can make a genuine difference in a small room without compromising much on function. We work with different suite ranges, so it's entirely possible to find space-saving fixtures at a range of budgets rather than only in premium ranges.",
      },
      {
        type: "heading",
        text: "Wet wall vs. tiling in a small room",
      },
      {
        type: "paragraph",
        text: "Both wet wall panelling and tiling work well in small bathrooms; panelling has fewer grout lines, which can make a small room feel a bit more seamless, while tiling offers more choice in pattern and finish. Neither is objectively better, it comes down to preference and budget.",
      },
      {
        type: "paragraph",
        text: "If you're dealing with a small bathroom in a tenement flat or older home anywhere across Glasgow, Renfrewshire or Inverclyde, a free, no-obligation consultation is the easiest way to find out what layout changes are actually possible in your space.",
      },
    ],
  },
  {
    slug: "how-we-coordinate-trades-on-a-home-extension",
    title: "How We Coordinate Trades on a Home Extension Project",
    category: "Home Extensions",
    metaDescription:
      "A home extension involves far more trades than most people expect. Here's how project management keeps a Glasgow home extension on track from structure to interior finish.",
    publishDate: "2026-05-19",
    excerpt:
      "A home extension pulls in far more trades than people expect. Here's how we keep a project on track from foundations to the finished room.",
    body: [
      {
        type: "paragraph",
        text: "Needing more space rather than wanting a full move is one of the most common reasons homeowners across Glasgow, Renfrewshire and Inverclyde come to us. What often surprises people is just how many different trades a home extension actually pulls together, and how much coordination that requires to keep a project on schedule.",
      },
      {
        type: "heading",
        text: "Stage one: the structural build",
      },
      {
        type: "paragraph",
        text: "Everything starts with the structural work, from foundations through to roofing. This stage brings in bricklayers, structural tradespeople and roofers, and it sets the shape of everything that follows, so it needs to be right before any other trade starts.",
      },
      {
        type: "heading",
        text: "Stage two: kitchens and bathrooms",
      },
      {
        type: "paragraph",
        text: "If the extension includes a new kitchen or bathroom, that gets designed, supplied and fitted as part of the same project rather than treated as a separate job, which keeps the plumbing, electrics and finish consistent with the rest of the build.",
      },
      {
        type: "heading",
        text: "Stage three: interior finish",
      },
      {
        type: "paragraph",
        text: "Joinery, flooring and interior design work bring the new space together so it actually matches the rest of the house, rather than feeling like an obviously bolted-on addition.",
      },
      {
        type: "heading",
        text: "Why one point of contact matters",
      },
      {
        type: "paragraph",
        text: "Across those three stages, a single extension project can involve plumbers, electricians, plasterers, tilers and bricklayers, on top of the joiners and interior finishing team. We project manage the whole thing from start to finish and coordinate every one of those trades, so you're dealing with one point of contact throughout rather than scheduling and chasing each trade yourself.",
      },
      {
        type: "paragraph",
        text: "If you're weighing up an extension against a move, a free, no-obligation consultation is a good starting point. We'll visit the property, talk through what you're trying to achieve, and put together a plan and quote for the project.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
