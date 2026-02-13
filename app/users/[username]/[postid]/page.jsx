"use client"

import { use } from "react"

export default function Post({ params }) {

  const { username, postid } = use(params)

  return (
    <>
      <h1>Hello {username}</h1>
      <p>Post ID: {postid}</p>
    </>
  )
}
