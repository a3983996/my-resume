import React, { useState, useEffect } from "react";
import p1 from "../img/p1.png";
import p2 from "../img/p2.png";
import p3 from "../img/p3.png";
import p4 from "../img/p4.png";
import p5 from "../img/p5.png";

const Projects = () => {
  let [url, setUrl] = useState("");
  useEffect(() => {
    setUrl("https://a3983996.github.io/resume");
    let proDiv = document.getElementById("projects");
    let proContainer = document.querySelector(".container");

    proContainer.onwheel = function (event) {
      event.preventDefault();
      let step = 100;
      if (event.deltaY < 0) {
        proDiv.scrollLeft -= step;
      } else {
        proDiv.scrollLeft += step;
      }
      // let active = document.body.scrollWidth / 2;
      // proContainer.childNodes.forEach((child, index) => {
      //   let childLeft = child.getBoundingClientRect().left;
      //   let childWidth = child.offsetWidth;
      //   let cente = childLeft + childWidth / 2;
      //   if (cente >= active - 300 && cente <= active + 300) {
      //     console.log(child);
      //     child.children[1].classList.add("active");
      //   } else {
      //     child.children[1].classList.remove("active");
      //   }
      // });
    };
  }, []);
  return (
    <div className="projects" id="projects">
      <div className="container">
        <div className="l2">
          <div className="layer">
            <a
              target="_blank"
              rel="noreferrer"
              href={`${url}/projects/hawaii/index.html`}
            >
              開啟
            </a>
          </div>
          <img src={p1} alt="p1" />
        </div>
        <div className="l1">
          <div className="layer">
            <a
              target="_blank"
              rel="noreferrer"
              href={`${url}/projects/dinner_room/index.html`}
            >
              開啟
            </a>
          </div>
          <img src={p2} alt="p2" />
        </div>
        <div className="cen">
          <div className="layer">
            <a
              target="_blank"
              rel="noreferrer"
              href={`${url}/projects/myYoutube/index.html`}
            >
              開啟
            </a>
          </div>
          <img src={p3} alt="p3" />
        </div>
        <div className="r1">
          <div className="layer">
            <a
              target="_blank"
              rel="noreferrer"
              href={`${url}/projects/todolist/index.html`}
            >
              開啟
            </a>
          </div>
          <img src={p4} alt="p4" />
        </div>
        <div className="r2">
          <div className="layer">
            <a
              target="_blank"
              rel="noreferrer"
              href={`${url}/projects/hexschool/index.html`}
            >
              開啟
            </a>
          </div>
          <img src={p5} alt="p5" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
