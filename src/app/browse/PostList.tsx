"use client";

import styles from "./styles.module.css";

const retrievePosts = () => {
  // fake API call
  const fakeAPIResponse = {
    1: {
      "author": "Sarvesh Senthil",
      "title": "Need help with CSA",
      "content": "How do i recover my trash grade of 67 on my frq?"
    },
    2: {
      "author": "Aaryav Patel",
      "title": "Need help with Java code",
      "content": "My code for my calculator is not working. Can somebody help me thanks."
    },
    3: {
      "author": "hi",
      "title": "help",
      "content": "send help"
    }
  };
  return fakeAPIResponse;
}

function PostPreview({author, title, content}: {author: string, title: string, content: string}) {
  return (
      <div className={styles.post}>
          <span>{author}</span>
          <h3>{title}</h3>
          <p>{content}</p>
      </div>
  );
}

export default function PostList() {
  return (
        <div className={styles.description}>
          <h1>Information Technology</h1>
          <form action="post">
            <input type="text" value="Search posts"/>
            <input type="submit" />
          </form>

          {
            Object.values(retrievePosts()).map(e => {
              return <PostPreview author={e.author} title={e.title} content={e.content} />
            })
          }
        </div>
  );
}
