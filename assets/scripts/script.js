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
    div.className = "col-md-3 mb-3"
    div.innerHTML = `
                  <div class="card shadow-lg">
                    <div class="card-body text-center">
                      <img src="${element.foto}" class="img-fluid rounded-circle p-3" alt="${element.nama}">
                      <p class="card-title fs-5 fw-bold">${element.nama}</p>
                      <p class="card-subtitle mb-1">${element.role}</p>
                      <p class="card-text text-muted">${element.jurusan}</p>
                      <a href="#" target="_blank" rel="noopener noreferrer" class="text-decoration-none px-2">
                        <i class="fa fa-instagram"></i>
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer" class="text-decoration-none px-2">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>`;
    coreContainer.appendChild(div);
  });
  // Expert Team Data
  const expertContainer = document.getElementById("expert");
  data.expert.forEach(element => {
    const div = document.createElement("div");
    div.className = "col-md-4 mb-3"
    div.innerHTML = `
                <div class="card shadow-lg">
                  <div class="card-body text-center">
                    <div class="row">
                      <div class="col-md-3">
                        <img src="${element.foto}" class="rounded-circle" alt="${element.nama}">
                      </div>
                      <div class="col-md-9">
                        <div class="card-body">
                          <p class="card-title fs-5 fw-bold">${element.nama}</p>
                          <p class="card-subtitle mb-1">${element.bidang}</p>
                          <p class="card-text text-muted">${element.nim}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        `;
    expertContainer.appendChild(div);
  });
  // Members Data
  const memberContainer = document.getElementById("member");
  data.members.forEach(element => {
    const tr = document.createElement("tr");
    tr.innerHTML = `    
          <td>${element.nama}</td>
          <td>${element.nim}</td>
          <td>${element.jurusan + ' ' + element.universitas}</td>
    `;
    memberContainer.appendChild(tr);
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

gsap.from('.navbar', {
  duration: 1.5,
  y: -150,
  opacity: 0,
  ease: 'bounce',
});