"use client"
import { useState } from "react"
import styles from "./styles.module.css"

function returnCategories() {
    // fake API call before real implementation
    const fakeAPIResponse = ["Engineering", "Science", "Mathematics", "English", "General"]
    return fakeAPIResponse;
}

export default function CategoryBar() {
    const [active, setActive] = useState(false);

    // if (active) {
    //     return <a onClick={() => setActive(false)}>cum</a>
    // } else {
    //     return <a onClick={() => setActive(true)}>no cum :(</a>
    // }

    return (
        <div className={[styles.browse, styles.card].join(" ")}>
          <h3>Browse</h3>
          {returnCategories().map(e => <button>{e}</button>)}
        </div>
    );
}