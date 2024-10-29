import Markdown from "markdown-to-jsx";
import getPostMetadata from "@/utils/getPostMetadata";
import React from "react";
import fs from "fs";
import matter from "gray-matter";

function getPostContent(slug: string) {
  const folder = "blogs/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");

  const matterResult = matter(content);
  return matterResult;
}

interface Params {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata("blogs");
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export async function generateMetadata({ params, searchParams }: Params) {
  const id = params?.slug ? " | " + params?.slug : "";
  return {
    title: `Blog ${id.replaceAll("_", " ")}`,
  };
}

export default function BlogPage({ params }: Params) {
  const slug = params.slug;
  const post = getPostContent(slug);

  return (
    <main className="container mx-auto px-4 py-8">
      <article className="prose prose-lg max-w-none">
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
}
