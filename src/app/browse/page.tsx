import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <nav>
        <a href="/">IA Forum</a>
        <a href="/">Log in</a>
      </nav>

      <div className={styles.container}>
        <div className={[styles.browse, styles.card].join(" ")}>
          <h3>Browse</h3>
          <button>Engineering</button>
          <button>Science</button>
          <button>Mathematics</button>
          <button>English</button>
          <button>#general</button>
        </div>

        <div className={styles.description}>
          <h1>Information Technology</h1>
          <form action="post">
            <input type="text" value="Search posts"/>
            <input type="submit" />
          </form>
          <div className={styles.post}>
            <span>Sarvesh Senthil</span>
            <h3>Need help with CSA</h3>
            <p>How do i recover my trash grade of 67 on my frq?</p>
          </div>
          <div className={styles.post}>
            <span>Aaryav Patel</span>
            <h3>Need help with Java code</h3>
            <p>My code for my calculator is not working. Can somebody help me thanks.</p>
          </div>
        </div>

        <div className={styles.card}>
          <h3>Recent Posts</h3>
        </div>
      </div>
    </main>
  );
}
