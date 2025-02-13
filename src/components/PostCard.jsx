import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="block transform hover:scale-105 duration-300">
      <div className="w-full bg-white shadow-lg rounded-2xl p-4 hover:shadow-2xl transition-shadow">
        <div className="w-full mb-4 overflow-hidden rounded-2xl">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-48 object-cover rounded-xl"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 hover:text-blue-500 transition-colors duration-200">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;
