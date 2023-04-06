// Links constants to HTML elements
const signUpForm = document.querySelector('#signup-form');
const signUpError = document.querySelector('#error');

// Creates listener for the submit button
signUpForm.addEventListener('submit', (e) =>
{
    // Prevents default action
    e.preventDefault();

    // Assigns user values to constants
    const email = signUpForm['email'].value;
    const password = signUpForm['password'].value;

    // Creates user and enters details into database
    auth.createUserWithEmailAndPassword(email, password).then(cred =>
    {
        // Creates document within collection containing user-info
        db.collection('admin').doc(cred.user.uid).set(
        {
            name : signUpForm['first-name'].value + ' ' + signUpForm['last-name'].value,
            uid : cred.user.uid
        })

        db.collection('statistics').doc('team').get().then(snapshot =>
        {
            db.collection('statistics').doc('team').set(
            {
                number : (snapshot.data().number + 1)
            })
        })
    }).then(() =>
    {
        // Logs success to console
        console.log("Successfully created user and stored information to database.");
        
        // Delay to allow DB to store data before redirect
        setTimeout(function() 
        {
            // Redirects user
            location.href = "admin.html";
        }, 
        1000
        );

        // Catches error with signup (incorrect email format, password length)
    }).catch(function(error)
    {
        // Creates error message
        let html =
        `
            <p style = 
            <!-- Element styling -->
            'background-color: red;
            width: fit-content;
            padding: 10px;
            margin: auto;
            border: black solid;
            border-radius: 3px;' 
            
            >Error: Improper email format.</p>
            <div style = 'padding: 11px;'></div>
        `;

        // Injects HTML
        signUpError.innerHTML = html;
    })
});