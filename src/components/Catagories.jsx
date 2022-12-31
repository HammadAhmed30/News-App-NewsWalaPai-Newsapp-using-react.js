import React from "react";
import { Link } from "react-router-dom";

export default function Catagories() {
  let CataImages = [
    "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2VuZXJhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNwb3J0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGVhbHRofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1586899028174-e7098604235b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZW50ZXJ0YWlubWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGJ1c2luZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2NpZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
  ];
  let toGo = [
    "/",
    "sports",
    "health",
    "entertainment",
    "technology",
    "business",
    "science",
  ];
  let cataName = [
    "General",
    "sports",
    "health",
    "entertainment",
    "technology",
    "business",
    "science",
  ];
  let cataIcons = [
    "newspaper",
    "sports_basketball",
    "health_and_safety",
    "sports_esports",
    "hub",
    "business_center",
    "science",
  ];
  return (
    <>
      {/* <h1
        className="cata-heading"
        style={{
          fontSize: "5em",
          color: "#707070",
          textAlign: "center",
          letterSpacing: "1vw",
          lineHeight: "1.12em",
        }}
      >
      CATEGORIES
    </h1> */}
      <style jsx="true">{`
        .Cata-image:hover {
          filter: brightness(100%);
        }
        .main-cata-mobile {
          display: none !important;
          padding: 20px 0px;
        }
        .Cata-name-mobile:hover {
          color: gray;
        }
        .Cata-name-mobile {
          width: calc((100% / 2));
          // width: auto;
          text-decoration: none;
          margin: 4px;
          display: flex;
        }
        .Cata-image {
          width: calc((100% / 7));
          height: 60vh;
          filter: brightness(60%);
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          border-right: 2px solid white;
          transition: all 100ms ease;
        }
        .cata-heading {
          display: none;
        }
        @media only screen and (max-width: 750px) {
          .main-cata-mobile {
            display: flex !important;
            flex-wrap: wrap;
          }
          .Cata-image {
            // width: calc((100% / 3));

            // height: calc(100vw / 3);
            height: 160px;
          }
          .cata-heading {
            display: block;
            font-size: 3em !important;
          }
          .main-cata {
            display: none !important;
          }
        }
      `}</style>
      <div
        className="main-cata-mobile"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {cataName.map((cataname, index) => {
          return (
            <Link to={toGo[index]} className="Cata-name-mobile" key={index}>
              <span class="material-symbols-outlined">{cataIcons[index]}</span>
              &ensp;
              {cataname}
            </Link>
          );
        })}
      </div>

      <div
        className="main-cata"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {CataImages.map((catagory, index) => {
          return (
            <Link
              to={toGo[index]}
              className="Cata-image"
              key={index}
              style={{
                backgroundImage: `url("${catagory}")`,
              }}
            ></Link>
          );
        })}
      </div>
    </>
  );
}
