document.addEventListener("DOMContentLoaded", () => {

   /*FADE IN ANIMATION*/
  const fadeElements = document.querySelectorAll(".form-box, h2");

  fadeElements.forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
  });

  setTimeout(() => {
    fadeElements.forEach((el, index) => {
      setTimeout(() => {
        el.style.transition = "all 0.8s ease";
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }, index * 200);
    });
  }, 300);


  /* INPUT HIGHLIGHT */
  const inputs = document.querySelectorAll("input, select, textarea");

  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      input.style.border = "2px solid #0d6efd";
      input.style.boxShadow = "0 0 8px rgba(13,110,253,0.5)";
    });

    input.addEventListener("blur", () => {
      input.style.border = "1px solid #ccc";
      input.style.boxShadow = "none";
    });
  });


  /* ============================
      LIVE EMAIL VALIDATION
  ============================ */
  const email = document.getElementById("email");
  email.addEventListener("input", () => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email.value)) {
      email.style.border = "2px solid red";
    } else {
      email.style.border = "2px solid green";
    }
  });


  /* ============================
        SUBMIT POPUP MESSAGE
  ============================ */
  const form = document.querySelector(".application-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // show popup
    const popup = document.createElement("div");
    popup.innerHTML = `
      <div style="
        position: fixed; 
        top: 0; left: 0; 
        width: 100%; height: 100%;
        background: rgba(0,0,0,0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      ">
        <div style="
          background: #fff;
          padding: 30px;
          border-radius: 10px;
          text-align: center;
          width: 300px;
          animation: pop 0.4s ease;
        ">
          <h3 style="color: green;">Application Submitted!</h3>
          <p>Thank you for applying. We will get back to you shortly.</p>
          <button id="closePopup" style="
            padding: 10px 20px;
            margin-top: 10px;
            border: none;
            background: #0d6efd;
            color: white;
            border-radius: 5px;
            cursor: pointer;
          ">OK</button>
        </div>
      </div>
    `;

    document.body.appendChild(popup);

    document.getElementById("closePopup").onclick = () => {
      document.body.removeChild(popup);
      form.reset();
    };
  });

});
