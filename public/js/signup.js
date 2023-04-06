// Links constants to HTML elements
const signUpForm = document.querySelector('#signup-form');
const signUpError = document.querySelector('#error');
const optionError = document.querySelector('#option-error');

// Creates listener for the submit button
signUpForm.addEventListener('submit', (e) =>
{
    // Prevents default action
    e.preventDefault();

    // Assigns user values to constants
    const email = signUpForm['email'].value;
    const password = signUpForm['password'].value;


    if ((signUpForm['option'].value != ("Teacher")) && (signUpForm['option'].value != ('Student')))
    {
        let html = 
        `
            <div style = 'padding-top: 18px;'></div>
            <p style = 
            '
            background-color: red;
            width: fit-content;
            padding: 10px;
            margin: auto;
            border: black solid;
            border-radius: 5px;
            font-weight: 500;
            '>Error: Invalid choice.</p>
        `;

        optionError.innerHTML = html;
    }
    else
        {
        // Creates user and enters details into database
        auth.createUserWithEmailAndPassword(email, password).then(cred =>
        {
            // Creates document within collection containing user-info
            db.collection('users').doc(cred.user.uid).set(
            {
                name : signUpForm['first-name'].value + ' ' + signUpForm['last-name'].value,
                uid : cred.user.uid,
                type : signUpForm['option'].value
            })

            db.collection('statistics').doc('enrolled').get().then(snapshot =>
            {
                db.collection('statistics').doc('enrolled').set(
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
                location.href = "user.html";
            }, 
            1000
            );

            // Catches error with signup (incorrect email format, password length)
        })
        .catch(function(error)
        {
            if (error.code == "auth/invalid-email")
            {
                // Creates error message
                let html =
                `
                    <div style = 'padding: 5px 0px 5px 0px;'></div>
                    <p style = 
                    '
                    background-color: red;
                    width: fit-content;
                    padding: 5px 10px 5px 10px;
                    margin: auto;
                    border: black solid;
                    border-radius: 5px;
                    font-weight: 500;
                    '>Error: Improper email format.</p>
                    <div style = 'padding: 11px;'></div>
                `;

                // Injects HTML
                signUpError.innerHTML = html;
            }
            else if (error.code == "auth/weak-password")
            {
                // Creates error message
                let html =
                `
                    <div style = 'padding: 5px 0px 5px 0px;'></div>
                    <p style = 
                    '
                    background-color: red;
                    width: fit-content;
                    padding: 5px 10px 5px 10px;
                    margin: auto;
                    border: black solid;
                    border-radius: 5px;
                    font-weight: 500;
                    '>Error: Password is too weak.</p>
                    <div style = 'padding: 11px;'></div>
                `;

                // Injects HTML
                signUpError.innerHTML = html;
            }
        })
    }
});


// Redirects user if, or once they've logged in
auth.onAuthStateChanged(user =>
    {
        if (user)
        {
            // location.href = 'user.html';
        }
    })