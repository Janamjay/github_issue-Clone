import React, { useEffect, useState } from "react";
import right from "./RightSide.module.css";

const RightSide = () => {
  const [issues, setIssues] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchIssues();
  }, [currentPage]);

  const fetchIssues = async () => {
    const perPage = 5;
    const url = `https://api.github.com/search/issues?q=open+issue&page=${currentPage}&per_page=${perPage}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setIssues(data.items);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className={right.main}>
      <h1>Open Issues</h1>
      <ul className={right.issues_main}>
        {issues.map((issue) => (
          <li key={issue.id} className={right.issues}>
            <h3>{issue.title}</h3>
            <p>{issue.body}</p>
          </li>
        ))}
      </ul>
      <div className={right.btn}>
        <button
          className={right.prev}
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button className={right.next} onClick={handleNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default RightSide;
