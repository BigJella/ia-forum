import CategoryBar from "./CategoryBar";
import PostList from "./PostList";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        
        <CategoryBar />

        <PostList />

        <div className={styles.card}>
          <h3>Recent Posts</h3>
        </div>

      </div>
    </main>
  );
}
