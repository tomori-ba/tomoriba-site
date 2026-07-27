const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,.10)";
  } else {
    header.style.boxShadow = "none";
  }
});


const inviteButton = document.getElementById("inviteButton");
const inviteMenu = document.getElementById("inviteMenu");
const lineShare = document.getElementById("lineShare");
const copyLink = document.getElementById("copyLink");
const copyMessage = document.getElementById("copyMessage");

const pageUrl = window.location.href;

const shareText =
  "トモリバっていう交流会を見つけた！\n" +
  "雰囲気よさそうだから一緒に行かない？\n" +
  pageUrl;

function closeInviteMenu() {
  inviteMenu.classList.remove("is-open");
  inviteButton.setAttribute("aria-expanded", "false");
}

inviteButton.addEventListener("click", function () {
  const isOpen = inviteMenu.classList.toggle("is-open");
  inviteButton.setAttribute("aria-expanded", String(isOpen));
});

lineShare.addEventListener("click", function () {
  const lineUrl =
    "https://line.me/R/msg/text/?" + encodeURIComponent(shareText);

  window.open(lineUrl, "_blank", "noopener,noreferrer");
  closeInviteMenu();
});

copyLink.addEventListener("click", async function () {
  try {
    await navigator.clipboard.writeText(pageUrl);
  } catch (error) {
    const textArea = document.createElement("textarea");
    textArea.value = pageUrl;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  }

  copyMessage.classList.add("is-visible");
  closeInviteMenu();

  setTimeout(function () {
    copyMessage.classList.remove("is-visible");
  }, 1800);
});

document.addEventListener("click", function (event) {
  if (!event.target.closest(".invite-share")) {
    closeInviteMenu();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeInviteMenu();
  }
});