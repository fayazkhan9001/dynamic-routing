import React from "react";
import { getPostDetails } from "../../utils/api";
import { useLoaderData } from "react-router-dom";

export const postDetailsLoader = async ({ params }) => {
  const post = await getPostDetails(params?.postId);
  return post;
};

const PostDetails = () => {
  const post = useLoaderData();

  return (
    <div className="p-5 rounded-lg flex flex-col items-center max-w-[500px] mx-auto gap-y-4">
      <h3 className="text-2xl font-bold text-blue-700">{post?.title}</h3>
      <p className="text-gray-700 text-base text-center">{post?.body}</p>
    </div>
  );
};

export default PostDetails;
