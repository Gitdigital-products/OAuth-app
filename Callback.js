// callback.html script snippet
const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');

if (code) {
  console.log("Authorization code received:", code);
  // Send this code to your secure backend/worker to exchange for a token
}

