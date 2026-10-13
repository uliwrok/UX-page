const header = document.querySelector(".portfolio-header");
const about = document.querySelector("#sobre-mi");

function updateMenu() {
    const section = about.getBoundingClientRect();
    const menuBottom = header.getBoundingClientRect().bottom;
    header.classList.toggle("is-about", section.top <= menuBottom && section.bottom > menuBottom);
}

window.addEventListener("scroll", updateMenu, { passive: true });
window.addEventListener("resize", updateMenu);
updateMenu();

const projectPanels = document.querySelectorAll(".project-panel");

for (const panel of projectPanels) {
    panel.addEventListener("pointerenter", event => {
        if (window.matchMedia("(hover: hover) and (max-width: 767.98px)").matches) {
            for (const other of projectPanels) other.classList.toggle("is-preview", other === panel);
        }
        panel.setAttribute("aria-expanded", "true");
    });
    panel.addEventListener("pointerleave", () => panel.setAttribute("aria-expanded", String(panel.classList.contains("is-open") || panel.classList.contains("is-preview"))));
    panel.addEventListener("focus", () => panel.setAttribute("aria-expanded", "true"));
    panel.addEventListener("blur", () => {
        panel.classList.remove("is-open");
        panel.setAttribute("aria-expanded", "false");
    });
    panel.addEventListener("click", () => {
        if (!window.matchMedia("(hover: none)").matches) return;
        const open = !panel.classList.contains("is-open");
        for (const other of projectPanels) {
            other.classList.toggle("is-open", other === panel && open);
            other.setAttribute("aria-expanded", String(other === panel && open));
        }
    });
    panel.addEventListener("keydown", event => {
        if (event.key === "Escape") panel.blur();
    });
}

document.querySelector(".project-gallery").addEventListener("pointerleave", () => {
    for (const panel of projectPanels) {
        panel.classList.remove("is-preview");
        panel.setAttribute("aria-expanded", String(panel.classList.contains("is-open") || panel.matches(":focus-visible")));
    }
});