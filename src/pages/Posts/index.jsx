import React from "react";
import { getPosts } from "../../utils/api";
import { NavLink, useLoaderData } from "react-router-dom";

export const postsLoader = async () => {
  const posts = await getPosts();
  return posts;
};

const Posts = () => {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <section className="p-12 grid grid-cols-1 gap-5 sm:grid-2 md:grid-cols-3 lg:grid-4">
      {posts?.map((post, index) => (
        <Card key={index} title={post?.title} body={post?.body} id={post?.id} />
      ))}
    </section>
  );
};

export default Posts;

const Card = ({ title, body, id }) => (
  <NavLink to={`/posts/${id}`}>
    <div className="border p-5 rounded-lg flex flex-col gap-y-4">
      <h3 className="text-2xl font-bold text-blue-700">{title}</h3>
      <p className="text-gray-700 text-base">{body}</p>
    </div>
  </NavLink>
);
