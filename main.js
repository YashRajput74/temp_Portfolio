import { profile, projectData } from "./data";

function renderHeader(){
    const profileInfo=`<h2>@${profile.github}</h2>
                    <p>${profile.name} | ${profile.position}</p>
                    <p>HTML | CSS | JS | React | Git | Github | Vite</p>
                    <a href="${profile.email}">${profile.email}</a>`

    const header=`<div class="profile-header">
                <div class="avatar">
                  <img src="./${profile.profilePic}" alt="Profile Picture">
                </div>
                <div class="profile-info">
                    ${profileInfo}
                  <div class="buttons">
                    
                    <button><a href="https://drive.google.com/drive/folders/1vOM0I-iWvWv8w5yRNbhe6SOwQEoLXtzv?usp=sharing">Download Resume</a></button>
                    <button class="contact">Contact</button>
                  </div>
                </div>
              </div>`
    document.querySelector(".container>div:nth-child(1)").innerHTML=header;
}
function renderGallery(){
  let imgProject = '';
  Object.entries(projectData).forEach(([id, project]) => {
    imgProject += `
      <div class='project' data-id="${id}">
        <img src="${project.imgLink}" alt="${project.name}">
      </div>
    `;
  });
  document.querySelector(".gallery").innerHTML = imgProject;

  document.querySelectorAll('.project').forEach(projectEl => {
    projectEl.addEventListener('click', () => {
      const id = projectEl.dataset.id;
      openModal(projectData[id]);
    });
  });
}
function openModal(project) {
  const tagContainer = document.querySelector('.modal-tags');
  tagContainer.innerHTML = "";
  (project.tags || []).forEach(tag => {
    tagContainer.innerHTML += `<span>${tag}</span>`;
  });
  document.querySelector('.modal-img').src = project.imgLink;
  document.querySelector('.modal-title').textContent = project.name;
  document.querySelector('.modal-description').textContent = project.description || 'No description provided.';
  document.querySelector('.modal-link').href = project.link;
  document.querySelector('.modal-code').href = project.githubLink || '#';
  document.querySelector('.modal-code').style.display = project.githubLink ? 'inline-block' : 'none';
  document.querySelector('.modal').classList.remove('hidden');
}

function closeModal() {
  document.querySelector('.modal').classList.add('hidden');
}

document.querySelector('.close').addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) closeModal();
});

function animateProfileImage() {
  const img = document.querySelector('.avatar img');
  img.classList.add('animate-spin');

  setTimeout(() => {
      img.src = `./${profile.img}`;
  }, 750);

  setTimeout(() => {
      img.classList.remove('animate-spin');
  }, 1500);
}
function init(){
    renderHeader();
    renderGallery();
    animateProfileImage();
};
init();