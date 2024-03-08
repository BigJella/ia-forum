"use client"
import { useState } from "react"
import styles from "./register.module.css";

export default function RegisterPage() {
    const [username, setUsername] = useState("");
    const [student_id, setStudentId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e: any) {
        e.preventDefault();

        const infoObj = {
            username,
            student_id,
            firstName,
            lastName,
            email,
            password
        }

        console.log(JSON.stringify(infoObj))
        const rawResponse = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(infoObj)
          });
        const content = await rawResponse.json();
        console.log(content);
    }

    return (
    <div className={styles.formWrapper}>
        <h1>Registration</h1>
        <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
            <input className="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} type="text"/>
            <input className="form-control" placeholder="Student ID" value={student_id} onChange={(e) => setStudentId(e.target.value)} type="number"/>
            <input className="form-control" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text"/>
            <input className="form-control" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} type="text"/>
            <input className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="email"/>
            <input className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password"/>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    )
}