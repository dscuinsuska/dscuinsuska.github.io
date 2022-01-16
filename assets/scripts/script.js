fetch('https://raw.githubusercontent.com/dscuinsuska/members/main/memberData.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log('error: ' + err);
  });

function appendData(data) {
  // Core Team Data
  const coreContainer = document.getElementById("core");
  data.core.forEach(element => {
    const div = document.createElement("div");
    div.className = "col-md-4 mb-3"
    div.innerHTML = `
                <div class="card">
                    <div class="card-body text-center">
                        <h5 class="card-title">${element.nama}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${element.nim}</h6>
                        <p class="card-text">${element.jurusan}</p>                    
                    </div>
                </div>
        `;
    coreContainer.appendChild(div);
  });
  // Expert Team Data
  const expertContainer = document.getElementById("expert");
  data.expert.forEach(element => {
    const div = document.createElement("div");
    div.className = "col-md-4 mb-3"
    div.innerHTML = `
                <div class="card">
                    <div class="card-body text-center">
                        <h5 class="card-title">${element.nama}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${element.nim}</h6>
                        <p class="card-text">${element.bidang}</p>                    
                    </div>
                </div>
        `;
    expertContainer.appendChild(div);
  });
  // Members Data
  const memberContainer = document.getElementById("members");
  data.members.forEach(element => {
    const div = document.createElement("div");
    div.className = "col-md-4 mb-3"
    div.innerHTML = `
                <div class="card">
                    <div class="card-body text-center">
                        <h5 class="card-title">${element.nama}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${element.nim}</h6>
                        <p class="card-text">${element.jurusan + ' ' + element.universitas}</p>                    
                    </div>
                </div>
        `;
    memberContainer.appendChild(div);
  });
}

// // PWA Off jika mode development
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function () {
//     navigator.serviceWorker.register('sw.js').then(function (registration) {
//       // Registration was successful
//       console.log('ServiceWorker registration successful with scope: ', registration.scope);
//     }, function (err) {
//       // registration failed :(
//       console.log('ServiceWorker registration failed: ', err);
//     });
//   });
// }

// Start:AOS
AOS.init({
  once: true,
  duration: 1000,
});
// End:AOS

// Start:GSAP
// gsap.registerPlugin(TextPlugin);
// gsap.to('.lead', {
//   duration: 1.5,
//   delay: 1.5,
//   text: 'Student | Web Developer | GDSC Lead'
// })
// gsap.from('.jumbotron img', {
//   duration: 1,
//   rotateY: 360,
//   opacity: 0,
// });
gsap.from('.navbar', {
  duration: 1.5,
  y: -150,
  opacity: 0,
  ease: 'bounce',
});
// gsap.from('.display-4', {
//   duration: 1,
//   x: -50,
//   opacity: 0,
//   delay: 0.5,
//   ease: 'back',
// });
// End:GSAP

// Start:Footer Year
const date = new Date();
const footerYear = document.getElementById("footer-year");
footerYear.innerHTML = date.getFullYear();
// End:Footer Year