"use client"
import { useState } from "react"

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
        // const content = await rawResponse.json();
        // console.log(content);
    }

    return <form onSubmit={(e) => handleSubmit(e)}>
        <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} type="text"/>
        <input placeholder="Student ID" value={student_id} onChange={(e) => setStudentId(e.target.value)} type="number"/>
        <input placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text"/>
        <input placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} type="text"/>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="email"/>
        <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password"/>
        <button type="submit">Submit</button>
    </form>
}