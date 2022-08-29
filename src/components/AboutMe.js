import React from "react";
import Me from "../img/me.jpg";

const AboutMe = () => {
  return (
    <div className="aboutMe" id="aboutMe">
      <div className="left">
        <h1>Hi,I am Kai Jin</h1>
        <p>
          您好，我叫金凱，我1996年出生，畢業於樹德科技大學，資訊工程系，應用程式學程。
          <br />
          我是來自高雄的一個小家庭，家庭關係和睦，我是家裡最小的還有一個姊姊。
          <br />
          我小的時候個性活潑樂觀，愛出去玩，也很愛音樂，唱歌，後來高中時學了一段時間鋼琴。
          <br />
          高中時我就讀資訊科，開始接觸到了電腦專業知識，那時學校教的範圍很廣，但我對軟體程式開發比較有興趣，後來上了大學就選擇了資訊工程系。
          <br />
          大學時學程是走應用程式開發，開始接觸第一個語言是JAVA，接著利用JAVA開始寫APP，大四專題分工我負責整個APP與少部分網頁前端，開始自學HTML、CSS、JAVASCRIPT，PHP,MySQL，過程中慢慢產生了成就感，讓我更堅定的想往程式工程師走。
        </p>
      </div>
      <div className="right">
        <div className="tilt"></div>
        <div className="me">
          <div className="imgContainer">
            <img src={Me} alt="這是我" />
          </div>
        </div>
        <div className="profession">
          <h2>網頁工程師</h2>
          <div className="layer"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
