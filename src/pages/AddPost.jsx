import { Container, PostForm } from "../components";

function AddPost() {
  return (
    <div className="w-full py-8 bg-gray-50 min-h-screen">
      <Container>
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h1 className="text-3xl font-bold text-gray-700 mb-6 text-center">
            Create a New Post
          </h1>
          <PostForm />
        </div>
      </Container>
    </div>
  );
}

export default AddPost;
