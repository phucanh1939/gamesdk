const Auth = (() => {
  let authToken: string | null = null;

  return {
    

    async login() {
      return new Promise((resolve, reject) => {
        const authUrl = 'https://auth.mygame.com/login?redirect_uri=https://myapp.com/auth/callback';
        
        const loginWindow = window.open(authUrl, '_blank', 'width=500,height=700');

        // Function to listen for message from the login window (postMessage API)
        window.addEventListener('message', function handleAuthEvent(event) {
          if (event.origin === 'https://myapp.com') {
            const authData = event.data;
            authToken = authData.token;
            resolve(authData);
            if (loginWindow) loginWindow.close();
            window.removeEventListener('message', handleAuthEvent);
          }
        });

        // Optional: Handle cases where the user closes the window without completing the login
        const checkWindowClosed = setInterval(() => {
          if (loginWindow?.closed) {
            clearInterval(checkWindowClosed);
            reject(new Error('Login window was closed by the user'));
          }
        }, 500);
      });
    },

    // Method to retrieve the private token
    getToken() {
      return authToken;
    }
  };
})();

export { Auth };
