import Image from "next/image";
import styles from "../page.module.css";
import homeStyles from "./home.module.css";

export default function HomePage() {
  return (
    <main className={homeStyles.main}>
        <header className={homeStyles.header}>
          <div id="logo">
            <img src="https://www.fultonschools.org/cms/lib/GA50000114/Centricity/Template/GlobalAssets/images//logos/Phoenix_IA_Only_Small-cropped.jpg" alt="Paris"></img>
          </div>
          <nav>
            <a href="#" className={homeStyles.signIn}>Sign In</a>
          </nav>
        </header>

        <div className={homeStyles.searchContainer}>
            <input type="text" placeholder="Search" className={homeStyles.searchInput}/>
            <button type="submit" className={homeStyles.searchButton}>Q</button>
        </div>

        <div>
          <center><a href = "/IA/Engineering">Engineering</a></center>
          <br></br>
          <center><a href = "/IA/Engineering">Information Technology</a></center> 
          <br></br> 
          <center><a href = "/IA/Engineering">Healthcare</a></center> 
          <br></br>
        </div> 
    </main>
  );
}
