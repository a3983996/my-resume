import React from "react";
import fb from "../img/fb.png";
import ig from "../img/ig.png";

const Call = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    let to = "a3983996@gmail.com";
    let name = document.getElementById("yourName").value;
    let email = document.getElementById("yourEmail").value;
    let tel = document.getElementById("yourTel").value;
    let need = document.getElementById("yourNeed").value;
    if (name === "" || email === "" || tel === "" || need === "") {
      alert("未輸入完整");
      return;
    }
    let subject = "工程師網站";
    let body = `From:${name}${"%0A"}Email:${email}${"%0A"}Tel:${tel}${"%0A%0A%0A"}內容:${need}`;
    let sendMe = document.getElementById("sendMe");
    sendMe.href = `mailTo:${to}?subject=${subject}&body=${body}`;
    document.getElementById("yourNeed").value = "";
    sendMe.click();
  };

  return (
    <div className="callMe" id="callMe">
      <form action="#" className="yourCall">
        <div>
          <label htmlFor="yourName">姓名</label>
          <input type="text" id="yourName" name="yourName" />
        </div>
        <div>
          <label htmlFor="yourEmail">郵件</label>
          <input type="email" id="yourEmail" name="yourEmail" />
        </div>
        <div>
          <label htmlFor="yourTel">電話</label>
          <input type="number" id="yourTel" name="yourTel" />
        </div>
        <div>
          <label htmlFor="yourNeed">需求</label>
          <textarea name="yourNeed" id="yourNeed" rows="5"></textarea>
        </div>
        <button onClick={sendEmail}>交出表單</button>
        <a href="mailTo:" id="sendMe">
          mailTo
        </a>
      </form>
      <div className="myCall">
        <div>
          <h3>我的電話:</h3>
          <p>0908-808-519</p>
        </div>
        <div>
          <h3>我的Email:</h3>
          <p>a3983996@gmail.com</p>
        </div>
        <div>
          <h3>方便聯絡時間:</h3>
          <p>周一至周六早上九點到晚上六點</p>
        </div>
        <div>
          <h3>其他聯絡方式:</h3>
          <p>臉書、IG</p>
        </div>
        <div>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.facebook.com/profile.php?id=100007409281505"
          >
            <img src={fb} alt="fb" />
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.instagram.com/xiaokai0516_/"
          >
            <img src={ig} alt="ig" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Call;
