import { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-8 bg-gray-50 min-h-screen">
      <Container>
        <h1 className="text-3xl font-bold text-gray-700 mb-6 text-center">
          All Posts
        </h1>
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
              <PostCard key={post.$id} {...post} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 py-8">
            No posts available. Please check back later.
          </div>
        )}
      </Container>
    </div>
  );
}

export default AllPosts;
