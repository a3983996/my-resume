import React from "react";

import html5 from "../img/html5.png";
import css3 from "../img/css3.png";
import js from "../img/js.png";
import sass from "../img/sass.png";
import react from "../img/react.png";
import npm from "../img/npm.png";
import nodejs from "../img/nodejs.png";
import mongodb from "../img/mongodb.png";
import mysql from "../img/mysql.png";
import java from "../img/java.png";
import android from "../img/android.png";
import github from "../img/github.png";
import vs from "../img/vs.png";
import tick from "../img/tick.png";

const Resume = () => {
  return (
    <div className="resume" id="resume">
      <div className="left">
        <p>編程語言及工具</p>
        <div className="programmin">
          <img src={html5} alt="html5" />
          <img src={css3} alt="css3" />
          <img src={js} alt="js" />
          <img src={sass} alt="sass" />
          <img src={react} alt="react" />
          <img src={npm} alt="npm" />
          <img src={nodejs} alt="nodejs" />
          <img src={mongodb} alt="mongodb" />
          <img src={mysql} alt="mysql" />
          <img src={java} alt="java" />
          <img src={android} alt="android" />
          <img src={vs} alt="vs" />
          <img src={github} alt="github" />
        </div>
        <p>工作流程</p>

        <div className="workflow">
          <div className="item">
            <img src={tick} alt="" />
            <p> Mobile-First, 響應式網站 </p>
          </div>
          <div className="item">
            <img src={tick} alt="" />
            <p> 跨瀏覽器測試與調試 </p>
          </div>
          <div className="item">
            <img src={tick} alt="" />
            <p>ECMAScript6(ES6) </p>
          </div>
        </div>
      </div>
      <div className="right">
        <p>學歷:樹德科技大學畢業</p>
        <p>經歷:無</p>
        <p>
          中文:精通
          <br />
          英文:略懂
        </p>
        <div>
          <p>此網站github:</p>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/a3983996"
          >
            <img src={github} alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
