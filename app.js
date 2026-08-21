(function () {
  const views = Array.from(document.querySelectorAll("[data-view]"));
  const valid = new Set(["landing", "citizen", "athlete"]);

  function show(name, updateHash) {
    const next = valid.has(name) ? name : "landing";
    views.forEach((view) => view.classList.toggle("active", view.dataset.view === next));
    document.body.dataset.page = next;
    document.title = next === "citizen" ? "全民運動日誌" : next === "athlete" ? "教練選手運動日誌" : "我的運動日誌｜臺灣運動數據平台";
    if (updateHash) history.pushState(null, "", next === "landing" ? "#home" : `#${next}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.addEventListener("click", function (event) {
    const trigger = event.target.closest("[data-go]");
    if (!trigger) return;
    show(trigger.dataset.go, true);
  });

  window.addEventListener("hashchange", function () {
    const name = location.hash.replace("#", "");
    show(name === "home" ? "landing" : name, false);
  });

  const initial = location.hash.replace("#", "");
  show(initial === "home" || !initial ? "landing" : initial, false);
})();
