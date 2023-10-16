import { useRouter } from "next/router";

export default function BlogPostsPage() {
  const router = useRouter();
  console.log(router.query); /* slug: (3) ['2023', '10', '16'] */
  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}
