import styles from "./styles.module.css"

export default function PostPreview({author, title, content, categoryId, postId}: {author: string, title: string, content: string, categoryId: number, postId: number}) {
    return (
        <a href={"/category/" + categoryId + "/post/" + postId} className={styles.previewlink} >
            <div className={styles.post}>
                <span>{author}</span>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </a>
    );
  }