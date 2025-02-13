import { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 bg-gray-50 min-h-screen">
        <Container>
          <h1 className="text-3xl font-bold text-gray-600 mb-4">
            No Posts Found
          </h1>
          <p className="text-gray-500">
            Login or create an account to view posts.
          </p>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8 bg-gray-50 min-h-screen">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <PostCard key={post.$id} {...post} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
