import getPostMetadata from "@/utils/getPostMetadata";
import SearchView from "@/components/SearchView";

export default function Home() {
  const postMetadata = getPostMetadata("blogs");
  //console.log(postMetadata);
  return (
    <main className="flex min-h-screen flex-col items-center p-20">
      <h1 className="text-4xl font-bold">Welcome to my deezBlog</h1>
      <SearchView postMetadata={postMetadata} />
    </main>
  );
}
