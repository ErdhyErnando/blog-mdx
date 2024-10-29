"use client";
import { useState } from "react";
import SearchBar from "./SearchBar";
import PostCard from "./PostCard";
import { PostMetadata } from "@/utils/getPostMetadata";

interface SearchViewProps {
  postMetadata: PostMetadata[];
}

export default function SearchView({ postMetadata }: SearchViewProps) {
  const [searchValue, setSearchValue] = useState("");

  const filteredPosts = postMetadata.filter((post) => {
    const searchContent = post.title.toLowerCase();
    return searchContent.includes(searchValue.toLowerCase());
  });

  return (
    <>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="border rounded-md border-gray-300 mt-10">
        {filteredPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}
