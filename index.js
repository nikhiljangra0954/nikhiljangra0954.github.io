// window.onscroll = () => {
//     const nav = document.querySelector('#nav-menu');
//     if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
//   };

let sidemune = document.querySelector(".nav_inner");

function openmenu() {
  sidemune.style.right = "0";
}
function closemenu() {
  sidemune.style.right = "-200px";
}

GitHubCalendar(".calendar", "nikhiljangra0954");

// or enable responsive functionality:
// GitHubCalendar(".calendar", "nikhiljangra0954", { responsive: true });

// Use a proxy
// const username = "nikhiljangra0954";
// GitHubCalendar(".calendar", "nikhiljangra0954", {
//   proxy(username) {
//     return fetch(`https://your-proxy.com/github?user=${username}`);
//   },
// }).then((r) => console.log(r))
// .catch((err)=>console.log(err))
GitHubCalendar(".calendar", "nikhiljangra0954", {
  responsive: true,
  global_stats: true,
  tooltips: true,
});

document.getElementById("resume-button-1").onclick = () => {
  window.open(
    "https://drive.google.com/file/d/1qbgppT81gwl5paORlqVfcnwhdZ6Ygl3x/view?usp=share_link"
  );
};

document.getElementById("resume-button-2").onclick = () => {
  window.open(
    "https://drive.google.com/file/d/1qbgppT81gwl5paORlqVfcnwhdZ6Ygl3x/view?usp=share_link"
  );
};


// var typed=new Typed(".variable", {
//   strings: ["Full Stack Web Developer", "Coder", "Problem Solver"],
//   typeSpeed: 100,
//   backSpeed: 60,
//   loop: true,
// });