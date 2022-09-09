// Boilerplate
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./components/welcome";
import Postal from "./components/post-all";
import PostSingle from "./components/post-single";
import CommentAll from "./components/comment-all";
import CommentSingle from "./components/comment-single";
import PhotoAll from "./components/photo-all";
import PhotoSingle from "./components/photo-single";
import UserAll from "./components/user-all";
import UserSingle from "./components/user-single";
import NoPage from "./components/error";
import "./App.css";
const logoURL = "https://www.drupal.org/files/project-images/JSON_vector_logo.svg_.png";
const jsonURL = "https://jsonplaceholder.typicode.com/";
// Route Declaration & Render
export default function App() {
  return (
    <>
    <nav>
      <img
        src={logoURL}
        alt="JSON Logo"
      />
      <a href="/fake-api-forum/welcome">Fake API Forum</a>
      <span>
        <a href="/fake-api-forum/posts">Posts</a>
        <a href="/fake-api-forum/comments">Comments</a>
        <a href="/fake-api-forum/photos">Photos</a>
        <a href="/fake-api-forum/users">Users</a>
        <a href="#about">About</a>
      </span>
    </nav>

    <Routes>
      <Route path="" element={<Navigate to="/welcome" />} exact />
      <Route path="/welcome" element={<Welcome />} exact />
      <Route path="/posts" element={<Postal />} exact />
      <Route path="/posts/*" element={<PostSingle />} exact />
      <Route path="/comments" element={<CommentAll />} exact />
      <Route path="/comments/*" element={<CommentSingle />} exact />
      <Route path="/photos" element={<PhotoAll />} exact />
      <Route path="/photos/*" element={<PhotoSingle />} exact />
      <Route path="/users/" element={<UserAll />} exact />
      <Route path="/users/*" element={<UserSingle />} exact />
      <Route path="*" element={<NoPage />} exact />
    </Routes>

    <footer id="about">
      <p>This site uses a free fake api for testing purposes.</p>
      <br />
      <a href={jsonURL} target="_blank" rel="noreferrer">
        &#123;JSON&#125; Placeholder
      </a>
    </footer>
    </>
  );
};