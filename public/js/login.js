// Links constants to HTML elements
const loginForm = document.querySelector('#login-form');
const errorInsert = document.querySelector('#error');

loginForm.addEventListener('submit', (e) =>
{
    // Prevents default action
    e.preventDefault();

    // Assigns user input to constants
    const email = loginForm['email'].value;
    const password = loginForm['password'].value;

    // Signs user in
    auth.signInWithEmailAndPassword(email, password).then(cred =>
    {
        var admin = false;

        // Checks if user is Admin
        db.collection('admin').get().then(snapshot =>
        {
            console.log(cred.uid);
            // Iterates through Admin collection
            snapshot.docs.forEach(doc =>
            {
                // Stores Admin user data in constant
                const information = doc.data();

                // Compares logged in user ID with document ID
                if (cred.user.uid == information.uid)
                    admin = true;
            })

            // Redirects user depending on type
            if (admin)
                location.href = 'admin.html';
            else
                location.href = 'user.html';
        })

    // Catches error from improper login
    }).catch(function(error)
    {
        // Creates error message
        let html = 
        `
            <div style = 'padding: 17px 0px 3px 0px;'></div>
            <p style =
            '
                font-weight: 500;
                padding: 5px;
                background-color: red;
                border: black solid;
                border-width: 3px;
                border-radius: 5px;
            '>Error: email or password is incorrect.</p>
        `;

        //Injects HTML for error message
        errorInsert.innerHTML = html;
    })
})

// // Redirects user if, or once they've logged in
// auth.onAuthStateChanged(user =>
// {
//     if (user)
//     {
//         location.href = 'user.html';
//     }
// })