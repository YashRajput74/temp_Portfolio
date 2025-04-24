import { profile } from "./data";

function renderHeader(){
    const profileInfo=`<h2>@${profile.github}</h2>
                    <p>${profile.name} | ${profile.position}</p>
                    <p>HTML | CSS | JS | React | Git | Github | Vite</p>
                    <p>${profile.email}</p>`

    const header=`<div class="profile-header">
                <div class="avatar">
                  <img src="./${profile.profilePic}" alt="Profile Picture">
                </div>
                <div class="profile-info">
                    ${profileInfo}
                  <div class="buttons">
                    <button>Download Resume</button>
                    <button class="contact">Contact</button>
                  </div>
                </div>
              </div>`
    document.querySelector(".container>div:nth-child(1)").innerHTML=header;
}
function renderGallery(){
    const gallery=`
    <img src="" alt="">
    <img src="" alt="">
    <img src="" alt="">
    <img src="" alt="">
    `;
    document.querySelector(".gallery").innerHTML=gallery;
}
function init(){
    renderHeader();
    renderGallery();
};
init();