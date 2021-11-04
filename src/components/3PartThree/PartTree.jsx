import React, { useState } from "react";

export default function PartTree() {
  // data = {guid: '', user: {}, posts: [{}, {}]}

  //const [userData, setUserData] = useState(data);
  //OR
  
  const [guid, setGuid] = useState(data.guid)
  const [user, setUser] = useState(data.user);
  const [userPosts, setUserPosts] = useState(data.posts);


  const handleAddRandomPost = () => {
    setUserPosts((prev) => {
      return [...prev, randomPost(prev.length + 1)];
    });

    // WRONG !!
    // userPosts.push(randomPost(4))
    // setUserPosts(userPosts)

    // KIND OF WRONG !! IS IT ?
    // const newPostsArray = userPosts.concat(randomPost(4))
    // setUserPosts(newPostsArray)
  };

  const handleModifyUser = () => {
    setUser((prev) =>{ return {...prev, name: "New Radek"}});

    //WRONG !! OUTPUT: "New Radek"
    // setUser(user.name = "New Radek"); //OUTPUT "New Radek"
  };

  return (
    <div>
      <button onClick={handleAddRandomPost}>Add Random</button>
      <button onClick={handleModifyUser}>Modify User</button>
      <br/>

      <div>
        {JSON.stringify(user)}
        <br />
        <br />
        {userPosts.map((post) => {
          return (
            <div>
              {" "}
              {JSON.stringify(post)} <br /> <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

const randomPost = (id) => {
  return {
    date: Date.now(),
    title: `Title ${id}`,
    content:
      "Non cillum tempor id quis anim nisi mollit fugiat pariatur minim ut. Nisi quis exercitation ut culpa nostrud consequat duis tempor non nisi sint nisi. Adipisicing reprehenderit eu cillum commodo ad. Id labore sit ea nostrud nostrud nulla eiusmod eu veniam do.",
  };
};

const data = {
  guid: "This is test guid",
  user: { name: "Radek", age: 25 },
  posts: [
    {
      date: Date.now(),
      title: "Title 1",
      content:
        "Non cillum tempor id quis anim nisi mollit fugiat pariatur minim ut. Nisi quis exercitation ut culpa nostrud consequat duis tempor non nisi sint nisi. Adipisicing reprehenderit eu cillum commodo ad. Id labore sit ea nostrud nostrud nulla eiusmod eu veniam do.",
    },
    {
      date: Date.now(),
      title: "Title 2",
      content:
        "Non cillum tempor id quis anim nisi mollit fugiat pariatur minim ut. Nisi quis exercitation ut culpa nostrud consequat duis tempor non nisi sint nisi. Adipisicing reprehenderit eu cillum commodo ad. Id labore sit ea nostrud nostrud nulla eiusmod eu veniam do.",
    },
    {
      date: Date.now(),
      title: "Title 3",
      content:
        "Non cillum tempor id quis anim nisi mollit fugiat pariatur minim ut. Nisi quis exercitation ut culpa nostrud consequat duis tempor non nisi sint nisi. Adipisicing reprehenderit eu cillum commodo ad. Id labore sit ea nostrud nostrud nulla eiusmod eu veniam do.",
    },
    {
      date: Date.now(),
      title: "Title 4",
      content:
        "Non cillum tempor id quis anim nisi mollit fugiat pariatur minim ut. Nisi quis exercitation ut culpa nostrud consequat duis tempor non nisi sint nisi. Adipisicing reprehenderit eu cillum commodo ad. Id labore sit ea nostrud nostrud nulla eiusmod eu veniam do.",
    },
  ],
};
