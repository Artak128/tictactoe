export function submitValue(e,data) {
    if (e.target.type === "submit" && (o.checked || x.checked)) {
      data.indexForBackground = o.checked ? "backCircle" : "backX";
      document.querySelector(".choice").classList.add("hidden");
    }
  }