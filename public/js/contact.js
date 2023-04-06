const loginButton = document.querySelector('#login-button');
const signupButton = document.querySelector('#signup-button');
const dictionary = document.querySelector('#dictionary');
const supportForm = document.querySelector('#support-form');
const support = document.querySelector('#support-submit');
const questionForm = document.querySelector('#question-form');
const question = document.querySelector('#question-submit');
const teamForm = document.querySelector('#team-form');
const team = document.querySelector('#team-submit');

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
            margin-right: 13vw;
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

        support.addEventListener('click', (e) =>
        {
            e.preventDefault();

            const supportValue = supportForm['support-entry'].value;

            db.collection('users').doc(user.uid).get().then(snapshot =>
            {
                db.collection('support').doc(Date.now().toString()).set(
                {
                    Inquiry : supportValue,
                    Name : snapshot.data().name,
                    Email : user.email
                })
            })

            let html =
            `
                <div style = 'padding: 5px 0px 5px 0px; border-width: 0px;'></div>
                <div style = 'min-width: fit-content; border: black solid; border-width: 3px; margin: auto; padding: 5px; background-color: orange; font-weight: 500;'>
                <p>Your message has been sent.</p>
                <p>We will get back to you as soon as we can.</p>
                </div>
            `;

            supportForm.innerHTML = html;

            db.collection('statistics').doc('support').get().then(snapshot =>
            {
                db.collection('statistics').doc('support').set(
                {
                    number : (snapshot.data().number + 1)
                })
            })
        })

        question.addEventListener('click', (e) =>
        {
            e.preventDefault();

            const questionValue = questionForm['question-entry'].value;

            db.collection('users').doc(user.uid).get().then(snapshot =>
            {
                db.collection('questions').doc(Date.now().toString()).set(
                {
                    Inquiry : questionValue,
                    Name : snapshot.data().name,
                    Email : user.email
                })
            })
            
            let html =
            `
                <div style = 'padding: 5px 0px 5px 0px; border-width: 0px;'></div>
                <div style = 'min-width: fit-content; border: black solid; border-width: 3px; margin: auto; padding: 5px; background-color: orange; font-weight: 500;'>
                <p>Your message has been sent.</p>
                <p>We will get back to you as soon as we can.</p>
                </div>
            `;

            questionForm.innerHTML = html;

            db.collection('statistics').doc('questions').get().then(snapshot =>
            {
                db.collection('statistics').doc('questions').set(
                {
                    number : (snapshot.data().number + 1)
                })
            })
        })

        team.addEventListener('click', (e) =>
        {
            e.preventDefault();

            const teamValue = teamForm['team-entry'].value;

            db.collection('users').doc(user.uid).get().then(snapshot =>
            {
                db.collection('team').doc(Date.now().toString()).set(
                {
                    Inquiry : teamValue,
                    Name : snapshot.data().name,
                    Email : user.email
                })
            })

            let html =
            `
                <div style = 'padding: 5px 0px 5px 0px; border-width: 0px;'></div>
                <div style = 'min-width: fit-content; border: black solid; border-width: 3px; margin: auto; padding: 5px; background-color: orange; font-weight: 500;'>
                <p>Your message has been sent.</p>
                <p>We will get back to you as soon as we can.</p>
                </div>
            `;

            teamForm.innerHTML = html;

            db.collection('statistics').doc('team-inquiries').get().then(snapshot =>
            {
                db.collection('statistics').doc('team-inquiries').set(
                {
                    number : (snapshot.data().number + 1)
                })
            })
        })
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