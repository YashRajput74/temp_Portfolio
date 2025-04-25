import { profile, projectData } from "./data";

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
  let imgProject=``;
  Object.entries(projectData).forEach((pair)=>{
      let project=pair[1];
      imgProject+=`
        <div class='project'>
          <img src="${project.imgLink}" alt="${project.name}">
        </div>
      `;
    })
    const gallery=`
      ${imgProject}
    `;
    document.querySelector(".gallery").innerHTML=gallery;
}
function init(){
    renderHeader();
    renderGallery();
};
init();