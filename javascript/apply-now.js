//Submit form
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
