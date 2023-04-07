import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/ui/navbar";
import PostSingle from "./components/single/post-single";
import CommentSingle from "./components/single/comment-single";
import PhotoSingle from "./components/single/photo-single";
import UserSingle from "./components/single/user-single";
import NoPage from "./components/error";
const Welcome = lazy(() => import("./components/welcome"));
const Postal = lazy(() => import("./components/all/post-all"));
const CommentAll = lazy(() => import("./components/all/comment-all"));
const PhotoAll = lazy(() => import("./components/all/photo-all"));
const UserAll = lazy(() => import("./components/all/user-all"));

export default function App() {
  return (
    <>
    <Navbar />
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
    </>
  );
};