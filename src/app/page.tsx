"use client"

import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const {user }= useUser()
  return (
    <div className="flex justify-center items-center h-screen" >
      {
        user?
        `Welcome, ${user.given_name || user.name}`:
        "Not logged in"
      }
    </div>
  );
}
