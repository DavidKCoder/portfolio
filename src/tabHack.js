if (typeof document !== 'undefined') {
  let docTitle = document?.title;

  window.addEventListener("blur", () => {
    document.title = "Come back ↩";
  });

  window.addEventListener("focus", () => {
    document.title = docTitle;
  });
}

