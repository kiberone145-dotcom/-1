// loader
setTimeout(() => {
  document.querySelector(".loader").style.display = "none";
}, 1500);

// typing
const words = ["Frontend Developer", "AI Explorer", "KIBERone Student"];
let i = 0, j = 0, isDeleting = false;

function type() {
  const el = document.getElementById("typing");
  const word = words[i];

  el.textContent = word.substring(0, j);

  if (!isDeleting && j < word.length) j++;
  else if (isDeleting && j > 0) j--;
  else if (!isDeleting) { isDeleting = true; setTimeout(type, 800); return; }
  else { isDeleting = false; i = (i + 1) % words.length; }

  setTimeout(type, isDeleting ? 40 : 80);
}
type();

// reveal
const obs = new IntersectionObserver((e) => {
  e.forEach(x => x.isIntersecting && x.target.classList.add("active"));
});

document.querySelectorAll(".reveal").forEach(el => obs.observe(el));

// cursor
document.addEventListener("mousemove", e => {
  document.querySelector(".cursor").style.left = e.clientX + "px";
  document.querySelector(".cursor-glow").style.left = e.clientX + "px";
  document.querySelector(".cursor").style.top = e.clientY + "px";
  document.querySelector(".cursor-glow").style.top = e.clientY + "px";
});