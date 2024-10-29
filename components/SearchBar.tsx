"use client";
import { useState } from "react";
interface SearchBarProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export default function SearchBar({
  searchValue,
  setSearchValue,
}: SearchBarProps) {
  return (
    <input
      className="w-full p-2 border rounded-md"
      placeholder="Search blog posts..."
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value);
      }}
    />
  );
}
