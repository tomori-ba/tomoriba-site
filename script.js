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

if (
  inviteButton &&
  inviteMenu &&
  lineShare &&
  copyLink &&
  copyMessage
) {
  const pageUrl = window.location.href;

  const shareText =
    "トモリバっていう交流会を見つけた！\n" +
    "雰囲気よさそうだから一緒に行かない？\n" +
    pageUrl;

  function closeInviteMenu() {
    inviteMenu.classList.remove("is-open");
    inviteMenu.setAttribute("aria-hidden", "true");
    inviteButton.setAttribute("aria-expanded", "false");
  }

  function openInviteMenu() {
    inviteMenu.classList.add("is-open");
    inviteMenu.setAttribute("aria-hidden", "false");
    inviteButton.setAttribute("aria-expanded", "true");
  }

  inviteButton.addEventListener("click", function () {
    const isOpen = inviteMenu.classList.contains("is-open");

    if (isOpen) {
      closeInviteMenu();
    } else {
      openInviteMenu();
    }
  });

  lineShare.addEventListener("click", function () {
    const lineUrl =
      "https://line.me/R/msg/text/?" +
      encodeURIComponent(shareText);

    window.open(lineUrl, "_blank", "noopener,noreferrer");
    closeInviteMenu();
  });

  copyLink.addEventListener("click", async function () {
    try {
      await navigator.clipboard.writeText(pageUrl);
    } catch (error) {
      const textArea = document.createElement("textarea");
      textArea.value = pageUrl;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";

      document.body.appendChild(textArea);
      textArea.focus();
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
}