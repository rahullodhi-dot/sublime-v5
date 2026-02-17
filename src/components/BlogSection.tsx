import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getFeaturedBlogs, getImageUrl } from "../services/home.service";
import blogImg1 from "../assets/images/Vector (3).png";
import blogImg2 from "../assets/images/Vector (4).png";
import blogImg3 from "../assets/images/Vector (5).png";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  image?: string;
  categories: string[];
  date: string;
  views?: number;
}

const FALLBACK_POSTS: BlogPost[] = [
  {
    id: 1,
    title:
      "Refreshing Blends To Uplift The Spirit Of Ramadan With Sublime House Of Tea",
    slug: "refreshing-blends-ramadan",
    categories: ["Lifestyle"],
    date: "May 24, 2025",
    views: 325,
    excerpt:
      "During The Auspicious Month Of Ramadan, Muslims Around The Globe Eagerly Await The Opportunity For Self-Reflection...",
    image: blogImg1,
  },
  {
    id: 2,
    title:
      "Tea-Riffic Treats: Discovering The Unique Gift Sets For Tea Enthusiasts",
    slug: "tea-gift-sets",
    categories: ["Gifting"],
    date: "April 14, 2025",
    views: 325,
    excerpt:
      "In India, Tea Is Not A Simple Beverage, But An Emotion With Complex Notes Of History...",
    image: blogImg2,
  },
  {
    id: 3,
    title:
      "Corporate Gifting Redefined: A Guide To Meaningful & Memorable Presents",
    slug: "corporate-gifting",
    categories: ["Business"],
    date: "June 18, 2025",
    views: 325,
    excerpt:
      "An Average Person Spends Around 90,000 Hours At Work Over A Lifetime...",
    image: blogImg3,
  },
];

const BlogSection: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(FALLBACK_POSTS);
  const [isLoading, setIsLoading] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getFeaturedBlogs(3);
        if (response?.data?.length) {
          const posts = response.data.map((item: any) => {
            const attr = item.attributes || {};
            return {
              id: item.id,
              title: attr.title || "",
              slug: attr.slug || "",
              excerpt: attr.excerpt || "",
              image: attr.image ? getImageUrl(attr.image) : "",
              categories: ["News"],
              date: attr.publishedAt
                ? new Date(attr.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "",
              views: 325,
            };
          });
          setBlogPosts(posts);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(
      el.scrollLeft + el.clientWidth < el.scrollWidth - 5
    );
  };

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollAmount = el.clientWidth;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const displayPosts = blogPosts.length ? blogPosts : FALLBACK_POSTS;

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-[#f1e4b0]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-black">
            LATEST UPDATES
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#9a7523] mt-2">
            Latest Blogs
          </h2>
        </div>

        {/* Arrows */}
        <div className="relative">

        
            <button
              onClick={() => scroll("left")}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-30
                         w-10 h-10 sm:w-12 sm:h-12
                         bg-[#9a7522] rounded-full
                         flex items-center justify-center shadow-lg"
            >
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path
                  d="M5.50781 16.5198L13.7678 24.7798M5.50781 16.5198L13.7678 8.25978M5.50781 16.5198L19.9628 16.5198M27.5345 16.5198L24.0928 16.5198"
                  stroke="#F6F0E8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
    


            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-30
                         w-10 h-10 sm:w-12 sm:h-12
                         bg-[#9a7522] rounded-full
                         flex items-center justify-center shadow-lg"
            >
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path
                  d="M27.5322 16.5198L19.2722 8.25977M27.5322 16.5198L19.2722 24.7798M27.5322 16.5198L13.0772 16.5198M5.50552 16.5198L8.94719 16.5198"
                  stroke="#F6F0E8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
  

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-2"
          >
            {displayPosts.map((post) => (
              <article
                key={post.id}
                className="snap-start flex-shrink-0
                           w-full sm:w-1/2 lg:w-1/3
                           bg-[#FFF7EA] rounded-xl
                           overflow-hidden flex flex-col"
              >
                <Link
                  to={`/blogs/${post.slug}`}
                  className="block w-full relative"
                  style={{ height: "255.27px", aspectRatio: 3 / 4 }}
                >
                  <img
                    src={post.image || blogImg1}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </Link>

                <div className="p-4 sm:p-5 lg:p-6 flex flex-col gap-3 flex-grow">
                  <div className="text-xs text-gray-600">
                    {post.date} • {post.views}
                  </div>

                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#b89b4a] line-clamp-2">
                    {post.title}
                  </h3>

                  {post.excerpt && (
                    <p className="text-sm text-black line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                  )}

                  <Link
                    to={`/blogs/${post.slug}`}
                    className="mt-auto text-sm font-semibold text-[#9a7523] uppercase"
                  >
                    READ MORE
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
