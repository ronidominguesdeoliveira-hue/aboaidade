document.addEventListener("DOMContentLoaded", () => {
  const menuBotao = document.querySelector(".menu-botao");
  const menuPrincipal = document.querySelector(".menu-principal");
  const benchInteraction = document.querySelector(".hero__bench-interaction");
  const plaque = document.querySelector(".hero__plaque");
  const heroPanel = document.querySelector(".hero__drawer-panel");

  if (menuBotao && menuPrincipal) {
    menuBotao.addEventListener("click", () => {
      const isOpen = menuPrincipal.classList.toggle("ativo");
      menuBotao.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("menu-aberto", isOpen);
    });
  }

  if (benchInteraction && plaque && heroPanel) {
    plaque.addEventListener("click", (event) => {
      event.preventDefault();
      const isOpen = benchInteraction.getAttribute("data-open") === "true";
      benchInteraction.setAttribute("data-open", String(!isOpen));
      plaque.setAttribute("aria-expanded", String(!isOpen));
    });

    heroPanel.querySelectorAll(".hero__drawer-item").forEach((item) => {
      item.addEventListener("click", () => {
        benchInteraction.setAttribute("data-open", "false");
        plaque.setAttribute("aria-expanded", "false");
      });
    });
  }
});