// Start:Contact Form
const scriptURL = 'https://script.google.com/macros/s/AKfycbx7lOidrnuyMbOFmrn7zRsit90nRJHmB6fKl0wQDpsPVmdW66RHAdxoMjIKEtARX5Uu/exec';
const form = document.forms['mrsyafapri-contact-form'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

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
    var mainContainer = document.getElementById("myData");
    data.forEach(element => {
        var div = document.createElement("div");
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
        mainContainer.appendChild(div);
    });
}

// Start:AOS
AOS.init({
    once: true,
    duration: 1000,
});
// End:AOS

// Start:GSAP
gsap.registerPlugin(TextPlugin);
gsap.to('.lead', {
    duration: 1.5,
    delay: 1.5,
    text: 'Student | Web Developer | GDSC Lead'
})
gsap.from('.jumbotron img', {
    duration: 1,
    rotateY: 360,
    opacity: 0,
});
gsap.from('.navbar', {
    duration: 1.5,
    y: -150,
    opacity: 0,
    ease: 'bounce',
});
gsap.from('.display-4', {
    duration: 1,
    x: -50,
    opacity: 0,
    delay: 0.5,
    ease: 'back',
});
// End:GSAP

// Start:Footer Year
const date = new Date();
const footerYear = document.getElementById("footer-year");
footerYear.innerHTML = date.getFullYear();
// End:Footer Year