(async () => {
  try {
    const response = await fetch("https://manual-worker.web-8fb.workers.dev/cmp-script.js");
    const scriptText = await response.text();
    
    const script = document.createElement("script");
    script.textContent = scriptText;
    document.head.appendChild(script);
  } catch (error) {
    console.error("Failed to load CMP script", error);
  }
})();
