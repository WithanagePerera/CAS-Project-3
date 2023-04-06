const loginButton = document.querySelector('#login-button');
const signupButton = document.querySelector('#signup-button');
const dictionary = document.querySelector('#dictionary');

auth.onAuthStateChanged((user) =>
{
    if (user)
    {
         // Creates blank injectable HTML
         let html = '';
         // Esentially removes the Login button from the page, div element remains, though with dimensions of 0 
         loginButton.innerHTML = html;
         // Creates more leftward space for icons to the right of where the login button used to be
         loginButton.style.margin = '-100px';
 
         // Creates HTML to inject
         html =
         `
             <!-- Logout button -->
             <button style = 
             '
             margin-right: 5vw;
             background: transparent;
             border: transparent;
             font-size: 22px;
             font-weight: 500;
             ' id = 'logout-button'>Logout</button>
         `;
         // Injects HTML
         signupButton.innerHTML = html;
 
         // Creates new constant to link to HTML element
         const logout = document.querySelector('#logout-button');

         // Adds listener for when button is clicked
        logout.addEventListener('click', (e) =>
        {
            // Prevents default action
            e.preventDefault();

            // Logs user out
            auth.signOut().then(() =>
            {
                // Redirects user to main page
                location.href = '../index.html';
            })
        });
    }
    else
    {
        // Creates blank injectable HTML
        let html = '';
        // Esentially removes the Dictionary button from the page, div element remains, though with dimensions of 0 
        dictionary.innerHTML = html;
        dictionary.style.margin = '-150px';

        signupButton.style.marginRight = '4vw';
    }
})