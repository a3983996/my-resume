import React, { useState, useEffect } from "react";
import Active from "./Active";

const Aside = () => {
  let [activeHeight, setActiveHeight] = useState("");
  let [top, setTop] = useState("");
  let [point, setPoint] = useState("");
  //節流方法
  const throttle = (func, wait, mustRun) => {
    let timeout,
      startTime = new Date();
    return function () {
      let context = this,
        args = arguments,
        curTime = new Date();

      clearTimeout(timeout);
      if (curTime - startTime >= mustRun) {
        func.apply(context, args);
        startTime = curTime;
      } else {
        timeout = setTimeout(func, wait);
      }
    };
  };

  const goPoint = (e, p) => {
    //p是錨點名稱

    const point = document.querySelector(`.${p}`);
    document.documentElement.scrollTop = point.offsetTop;

    let activeH = document.querySelector(".aside-item").offsetHeight;
    let idStr = e.target.id;
    let idNum = idStr.slice(1, 2);
    // console.log(idNum);
    setTop(`${idNum * activeH}px`);
  };
  const listingPoint = () => {
    // console.log(document.documentElement.scrollTop);
    let activeH = document.querySelector(".aside-item").offsetHeight;
    setActiveHeight(activeH);
    let pageHeight = document.querySelector(".aboutMe").offsetHeight;
    //移動active
    let num = Math.round(document.documentElement.scrollTop / pageHeight) - 1;
    if (num >= 0) {
      setTop(`${num * activeH}px`);
    }

    //定位page

    let arrTop = [".aboutMe", ".resume", ".callMe", ".projects"];
    if (
      num >= 0 &&
      Math.abs(
        document.querySelector(arrTop[num]).getBoundingClientRect().top
      ) <=
        pageHeight / 2
    ) {
      setPoint(document.querySelector(arrTop[num]));
    } else {
      setPoint(document.querySelector(".transition"));
    }
    //如果滾到最下一個作品集
    let downTrue = false;
    let aside = document.querySelector("aside");
    if (
      !downTrue &&
      document.documentElement.scrollTop >=
        document.querySelector(".projects").offsetTop - 100
    ) {
      // console.log("最下了!");
      downTrue = true;
      aside.classList.add("closeAside");
    } else {
      // console.log("上去了");
      aside.classList.remove("closeAside");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", throttle(listingPoint, 300, 300));
  }, []);
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: point.offsetTop });
  }, [point]);
  return (
    <aside>
      <Active activeHeight={activeHeight} top={top} />
      <div
        id="p0"
        onClick={(e) => {
          goPoint(e, "aboutMe");
        }}
        className="aside-item"
      >
        <i className="far fa-user"></i>
        <p>關於我</p>
      </div>
      <div
        id="p1"
        onClick={(e) => {
          goPoint(e, "resume");
        }}
        className="aside-item"
      >
        <i className="far fa-file"></i>
        <p>我的履歷</p>
      </div>
      <div
        id="p2"
        onClick={(e) => {
          goPoint(e, "callMe");
        }}
        className="aside-item"
      >
        <i className="far fa-envelope"></i>
        <p>聯絡方式</p>
      </div>
      <div
        id="p3"
        onClick={(e) => {
          goPoint(e, "projects");
        }}
        className="aside-item"
      >
        {/* <i class="far fa-folder-open"></i> */}
        <i className="far fa-folder"></i>
        <p>我的作品</p>
      </div>
    </aside>
  );
};

export default Aside;
