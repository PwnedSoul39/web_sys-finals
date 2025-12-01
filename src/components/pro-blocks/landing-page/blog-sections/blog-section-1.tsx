"use client";

import { AspectRatio } from "~/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import { Tagline } from "~/components/pro-blocks/landing-page/tagline";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Latest Game News",
    description:
      "Stay up-to-date with the hottest game releases, updates, and industry trends. We cover everything from AAA titles to indie hits!",
    date: "Mar 15, 2024",
    category: "Tutorial",
    image: "/latest_news.jpg",
  },
  {
    id: 2,
    title: "Pro Gamer Tips",
    description:
      "Level up your skills with expert tips, guides, and walkthroughs. Whether you're a beginner or a pro, we've got strategies for every player.",
    date: "Mar 12, 2024",
    category: "Development",
    image: "/pro_gamer.jpg",
  },
  {
    id: 3,
    title: "Community Highlights",
    description:
      "Explore the vibrant world of gaming communities. From fan-made content to player spotlights, discover the best from the players who make the games great.",
    date: "Mar 8, 2024",
    category: "Advanced",
    image: "/highlights.jpg",
  },
  {
    id: 4,
    title: "Game Reviews & Gear",
    description:
      "Check out our in-depth game reviews and gear recommendations. We dive into gameplay, graphics, and performance to help you decide what to play next—and what to play it on.",
    date: "Mar 5, 2024",
    category: "Insights",
    image: "/game_reviews.jpg",
  },
];

export function BlogSection1() {
  return (
    <section
      className="bg-gray-900 section-padding-y"
      aria-labelledby="blog-section-heading"
      id="news"
    >
      <div className="container-padding-x container mx-auto gap-10 md:gap-12">
        <div className="flex flex-col items-center gap-10 md:gap-12">
          {/* Section Title */}
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            {/* Tagline */}
            {/* Main Heading */}
            <h1 id="blog-section-heading" className="heading-lg">
              Master the Game: Tips, Tools, and Strategies for Gamers
            </h1>
            {/* Description */}
            <p className="text-muted-foreground">
              Discover expert advice, in-depth guides, and essential resources to level up your skills, 
              optimize your gear, and dominate in every game you play.
            </p>
          </div>

          {/* Blog Grid */}
          <div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4"
            role="list"
          >
            {BLOG_POSTS.map((post) => (
              <Link href="#" key={post.id} className="group block">
                {/* Blog Card */}
                <div className="flex flex-col gap-4 rounded-xl transition-all duration-200">
                  {/* Image Wrapper */}
                  <AspectRatio
                    ratio={4 / 3}
                    className="overflow-hidden rounded-xl"
                  >
                    <Image
                      src={post.image}
                      alt={`${post.title} thumbnail`}
                      fill
                      className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                    />
                  </AspectRatio>

                  {/* Post Content */}
                  <div className="flex flex-col gap-3">
                    {/* Post Meta */}
                    <div className="flex items-center gap-2 text-left">
                      <span className="text-muted-foreground text-sm">
                        {post.date}
                      </span>
                      <span className="text-muted-foreground text-sm">·</span>
                      <span className="text-muted-foreground text-sm">
                        {post.category}
                      </span>
                    </div>

                    {/* Post Title */}
                    <h3 className="text-base leading-normal font-semibold group-hover:underline">
                      {post.title}
                    </h3>

                    {/* Post Summary */}
                    <p className="text-muted-foreground text-sm leading-normal">
                      {post.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
