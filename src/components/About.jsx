import React from "react";

export default function About() {
  return (
    <div
      style={{
        width: "min(100% - 22px, 1000px)",
        marginInline: "auto",
      }}
    >
      <style>
        {`
            .main-cata-mobile{
                display:none !important;
            }
            .main-cata{
                display:none !important;
            }
            `}
      </style>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <img
          style={{
            marginTop: "20px",
            borderRadius: "50%",
            width: "150px",
          }}
          src="hammadSaghir.jpg"
          alt="hammad saghir | developer newswalapai"
        />
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <p>
            <strong>Name</strong> : Hammad Saghir
          </p>
          <p>FrontEnd Software Developer</p>
          <p>HTML \ CSS \ JS \ React.js \ Next.js</p>
        </div>
      </div>
      <p
        style={{
          fontWeight: "300",
          width: "min(100% - 10px, 700px)",
          marginInline: "auto",
          marginTop: "1.3em",
        }}
      >
        Hello! <br />
        My name is Hammad Ahmed. I am a FrontEnd Developer. I made this app for
        practicing my FrontEnd skills and the use of API's. I have used React.js
        as FrontEnd and API of NewsAPI.org. I am still working on this project
        and trying to add some more features like write your own news etc. Here
        is a link to my Linkedin Profile :{" "}
        <a href="https://www.linkedin.com/in/hammad-saghir-a7a368231/">
          Hammad Saghir
        </a>
      </p>
    </div>
  );
}
