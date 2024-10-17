"use client";
import Link from "next/link";
import styles from "./page.module.css";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setPosts(data);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(posts.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={styles.page}>
      <h1>Home Page</h1>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div>
          {currentPosts.map((data) => {
            return (
              <div key={data.id}>
                <div style={{ display: "flex" }}>
                  <h3>{data.id})</h3>
                  <h3 style={{ marginLeft: "10px" }}>{data.title}</h3>
                  <h2>{data.completed === true ? "✅" : "❎"}</h2>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          style={{ rotate: "90deg" }}
        >
          🔽
        </button>
        <span style={{ margin: "0 10px" }}>Page {currentPage}</span>
        <button
          style={{ rotate: "270deg" }}
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(posts.length / postsPerPage)}
        >
          🔽
        </button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Link
          href="/about"
          style={{
            border: "1px solid white",
            padding: "13px",
            borderRadius: "20px",
          }}
        >
          Go To About page
        </Link>
        <br />
        <br />
        <br />
        <Link
          href="/login"
          style={{
            border: "1px solid white",
            padding: "13px",
            borderRadius: "20px",
          }}
        >
          Go To Login page
        </Link>
      </div>
    </div>
  );
}
