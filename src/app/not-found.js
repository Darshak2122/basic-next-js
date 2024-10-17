"use client";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const navigate = useRouter();
  const backToHomePage = () => {
    navigate.push("/");
  };

  return (
    <>
      <div className="not-found-container">
        <h1 className="not-found-code">404</h1>
        <p className="not-found-text">Page Not Found ⚠️</p>
        <p className="not-found-subtext">
          We couldn't find the page you are looking for.
        </p>
        <button className="home-button" onClick={backToHomePage}>
          Back To Home
        </button>
      </div>
    </>
  );
};
export default NotFound;
