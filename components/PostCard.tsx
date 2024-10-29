import Link from "next/link";

interface PostCardProps {
  post: {
    title: string;
    reading_time: string | number;
    word_count: string | number;
    bio: string;
    slug: string;
  };
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link className="unstyled" href={`/blog/${post.slug}`}>
      <div className="flex flex-col p-4 m-2">
        <h2 className="text-xl font-bold mt-1">{post.title}</h2>
        <p className="text-md">{post.bio}</p>
        <div className="mt-2">
          <h5 className="font-semibold">Reading Time</h5>
          <p>{post.reading_time}</p>
        </div>
        <div className="mt-2">
          <h5 className="font-semibold">word Count</h5>
          <p>{post.word_count}</p>
        </div>
      </div>
    </Link>
  );
}
