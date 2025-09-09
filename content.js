// Wait for video to load and set up controls
function setupVideoControls() {
  const video = document.querySelector("video");

  if (!video) {
    // If video not found, try again in 1 second
    setTimeout(setupVideoControls, 1000);
    return;
  }

  // Add keyboard listener for left arrow key
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" && document.activeElement.tagName !== "INPUT") {
      e.preventDefault();
      video.currentTime = Math.max(0, video.currentTime - 5);
    }
  });

  // Override rewind button if it exists
  const rewindButton = document.querySelector('[data-purpose="rewind-button"]');
  if (rewindButton) {
    rewindButton.onclick = () => {
      video.currentTime = Math.max(0, video.currentTime - 5);
    };
  }

  console.log("Udemy Video Controls: Setup complete");
}

// Start setup when page loads
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupVideoControls);
} else {
  setupVideoControls();
}

// Also run when navigating between lessons (for SPAs)
let currentUrl = location.href;
new MutationObserver(() => {
  if (location.href !== currentUrl) {
    currentUrl = location.href;
    setTimeout(setupVideoControls, 1000);
  }
}).observe(document, { subtree: true, childList: true });
