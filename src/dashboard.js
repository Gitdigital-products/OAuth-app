document.addEventListener('DOMContentLoaded', async () => {
    const token = sessionStorage.getItem('gitdigital_access_token');

    if (!token) {
        window.location.href = "/"; // Send back to login if no token
        return;
    }

    // Fetch GitHub User Data
    try {
        const response = await fetch('https://api.github.com/user', {
            headers: { 'Authorization': `token ${token}` }
        });
        const user = await response.json();

        // Update UI
        document.getElementById('username').textContent = user.login;
        document.getElementById('avatar').src = user.avatar_url;
        document.getElementById('avatar').style.display = 'block';
        
    } catch (err) {
        console.error("Failed to fetch user data", err);
        sessionStorage.clear();
        window.location.href = "/";
    }
});
