import { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-10 bg-gray-50 min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Edit Post
          </h1>
          <PostForm post={post} />
        </div>
      </Container>
    </div>
  ) : (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <p className="text-xl font-semibold text-gray-600">Loading post...</p>
    </div>
  );
}

export default EditPost;
