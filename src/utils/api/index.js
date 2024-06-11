export const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  console.log("Posts", posts);
  return posts;
};

export const getPostDetails = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await response.json();
  return post;
};

export const users = [
  {
    id: 1,
    name: "Wali",
    age: 24,
    profession: "Software Engineer",
  },
  {
    id: 1,
    name: "Wali",
    age: 24,
    profession: "Software Engineer",
  },
  {
    id: 1,
    name: "Wali",
    age: 24,
    profession: "Software Engineer",
  },
  {
    id: 1,
    name: "Wali",
    age: 24,
    profession: "Software Engineer",
  },
  {
    id: 1,
    name: "Wali",
    age: 24,
    profession: "Software Engineer",
  },
  {
    id: 1,
    name: "Wali",
    age: 24,
    profession: "Software Engineer",
  },
];
