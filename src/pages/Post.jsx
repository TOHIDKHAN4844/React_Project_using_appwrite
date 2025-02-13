import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  // const isAuthor = post && userData ? post.userId === userData.$id : false;

  const [loadingUserData, setLoadingUserData] = useState(true);

useEffect(() => {
  if (userData) setLoadingUserData(false);
}, [userData]);

useEffect(() => {
  if (post) {
    console.log("Post Data:", post);
    console.log("Post userId:", post.userId);
    console.log("User Data:", userData.$id);
  }
}, [post, userData]);


const isAuthor = post && userData && !loadingUserData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        
        if (post) setPost(post);
        
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-10 bg-gray-50 min-h-screen">
      <Container>
        {/* Post Image Section */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-3xl">
          <img
  src={appwriteService.getFilePreview(post.featuredImage)}
  alt={post.title}
  className="rounded-2xl shadow-lg w-full max-w-[768px] max-h-[400px] object-cover mx-auto"
/>

            {/* Edit and Delete Buttons */}
            {post && isAuthor && (
              <div className="absolute top-4 right-4 flex space-x-3">
                <Link to={`/edit-post/${post.$id}`}>
                  <Button bgColor="bg-green-500" className="px-4 py-2">
                    Edit
                  </Button>
                </Link>
                <Button bgColor="bg-red-500" onClick={deletePost}>
                  Delete
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Post Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {post.title}
          </h1>
        
          {/* <p className="text-gray-600">Published on: {new Date(post.$createdAt
).toLocaleDateString()}</p> */}

<p className="text-gray-600">
  Published on: {post.$createdAt ? new Date(post.$createdAt).toLocaleDateString() : "N/A"}
</p>
{/* <p className="text-gray-600">
  Author: {post.userId || "Unknown"}
</p> */}
        </div>

        {/* Post Content Section */}
        <div className="prose prose-lg max-w-4xl mx-auto">
          {parse(post.content)}
        </div>
      </Container>
    </div>
  ) : (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <p className="text-lg text-gray-600">Loading post...</p>
    </div>
  );
}
