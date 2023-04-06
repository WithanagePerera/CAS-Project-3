// Links constants to HTML elements
const logout = document.querySelector('#logout-button');
const welcomeTag = document.querySelector('#welcome-tag');
const standUserContent = document.querySelector('#standard-user');
const createClass = document.querySelector('#create-class');
const joinClass = document.querySelector('#join-class');
const joinClassID = document.querySelector('#class-id');
const joinError = document.querySelector('#join-error');
const popup = document.querySelector('#popup');

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

auth.onAuthStateChanged(user =>
{
    if (user)
    {
        var admin = true;

        db.collection('users').get().then(snapshot =>
        {
            snapshot.docs.forEach(doc =>
            {
                if (doc.id === user.uid)
                {
                    db.collection('admin').get().then(snapshot =>
                    {
                        snapshot.docs.forEach(doc =>
                        {
                            if (doc.id === user.uid)
                            {
                                location.href = 'admin.html';
                            }
                        })
                    })

                    let html =
                    `
                        <h1 style =
                        '
                            font-size: 60px;
                            padding-top: 40px;
                            padding-bottom: 50px;
                        ;'
                        >Welcome ${doc.data().name}!</h1>
                    `;

                    welcomeTag.innerHTML = html;

                    if (doc.data().type.toString() === "Teacher")
                    {
                        let content = 
                        `
                            <div id = 'main-content' style = 'width: 90%; margin: auto; display: flex; text-align: center; gap: 10%;'>
                                <div id = 'enrolled'>
                                    <h1>Classes:</h1>
                                    <div id = 'classes-list'></div>
                                </div>
                                <div id = 'progress'>
                                    <h1>Students:</h1>
                                    <div id = 'students-list'></div>
                                </div>
                                <div id = 'next'>
                                    <h1>What's Next?</h1>
                                </div>
                            </div>
                        `;
                            
                        standUserContent.innerHTML = content;
                        const classesList = document.querySelector('#classes-list');
                        const studentsList = document.querySelector('#students-list');

                        db.collection('users').doc(user.uid).collection('classes').get().then(snapshot =>
                        {
                            let html = '';
                            snapshot.docs.forEach(doc =>
                            {
                                const td =
                                `
                                    <p style = 'font-size: 18px; font-weight: 500; padding: 10px 0px 10px 0px;'>${doc.data().name}</p>
                                `;
                                html += td;
                            })

                            classesList.innerHTML = html;
                        }) 

                        db.collection('users').doc(user.uid).collection('classes').get().then(snapshot =>
                        {
                            let counter = 1;
                            snapshot.docs.forEach(doc =>
                            {
                                db.collection('classes').doc(doc.id).collection('students').get().then(snapshot =>
                                {
                                    let html = '';
                                    snapshot.docs.forEach(doc =>
                                    {
                                        const td = 
                                        `
                                            <p style = 'font-size: 18px; font-weight: 500; padding: 10px 0px 10px 0px;'>${counter}. ${doc.data().name}</p>
                                        `;
    
                                        html += td;
                                        counter += 1;
                                    })
                                    studentsList.innerHTML = html;
                                })
                            })
                        })

                        //             <div id = 'next'>
                        //                 <h1>What's Next?</h1>
                        //             </div>
                        //         </div>
                    }
                    else
                    {
                        let content = 
                        `
                            <div id = 'main-content'>
                                <div id = 'enrolled'>
                                    <h1>Enrolled Courses:</h1>
                                </div>
                                <div id = 'progress'>
                                    <h1>Last Leftoff:</h1>
                                </div>
                                <div id = 'next'>
                                    <h1>What's Next?</h1>
                                </div>
                            </div>
                        `;

                        standUserContent.innerHTML = content;
                    }
                }
            })
        })

        createClass.addEventListener('click', (e) =>
        {
            e.preventDefault();

            let html =
            `
                <form>
                    <input type = 'text' placeholder = 'Class ID' name = 'class-id' id = 'class-id'></input>
                </form>
                <button>Submit</button>
            `;

            createClassDiv.innerHTML = html;
        })

        joinClass.addEventListener('click', (e) =>
        {
            e.preventDefault();
            joinError.innerHTML = '';

            db.collection('classes').doc(joinClassID.value).get().then(snapshot =>
            {
                classPopup(joinClassID.value);
            })
            .catch(function(error)
            {
                let html = 
                `
                    <br></br>
                    <p style = 
                    '
                        background-color: red;
                        color: black;
                        padding: 5px;
                        border: black solid;
                        border-width: 3px;
                    '>No classes found.</p>
                `;

                joinError.innerHTML = html;
            })
        })
    }
    else
    {
        location.href = '../index.html';
    }
})

function classPopup(classID)
{
    db.collection('classes').doc(classID).get().then(snapshot =>
    {
        let html = 
        `
        <div id = 'black-screen' style = 'position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0, 0, 0 , 0.8);'></div>
        <div style = 'position: absolute; top: 30%; left: 35%; width: 30%; height: fit-content; margin: auto; background-image:linear-gradient(295deg, #f2adad, #ba7edc); border: #861ff4 solid; border-width: 7px; border-radius: 15px; padding: 10px 20px 10px 20px;'>
        <h1 style = 'text-decoration: underline; font-size: 35px;'>${snapshot.data().name}</h1>
        <p style = 'color: black; font-size: 20px; text-align: left; font-weight: 600; padding-bottom: 8px; line-height: 35px;'>Teacher: ${snapshot.data().teacher}</p>
        <p style = 'color: black; font-size: 20px; text-align: left; font-weight: 600; padding-bottom: 8px; line-height: 35px;'>School: ${snapshot.data().school}</p>
        <button id = 'join-class-button' style = 'background-color: red; padding: 7px 10px 7px 10px; border: black solid; border-width: 3px; border-radius: 7px; font-weight: 600; font-size: 16px;'>Join Class</button>
        <div id = 'enrolled' style = 'height: 0px; width: 0px; padding: 0px; border-width: 0px;'></div>
        </div>
        `;

        popup.innerHTML = html;

        const blackScreen = document.querySelector('#black-screen');
        const enrolledStatus = document.querySelector('#enrolled');
        const joinClassButton = document.querySelector('#join-class-button');
        
        blackScreen.addEventListener('click', (e) =>
        {
            e.preventDefault();
            closePopup();
        })

        joinClassButton.addEventListener('click', (e) =>
        {
            e.preventDefault();

            auth.onAuthStateChanged(user =>
            {
                if (user)
                {
                    db.collection('users').doc(user.uid).collection('classes').get().then(snapshot =>
                    {
                        var enrolled = false;

                        snapshot.docs.forEach(doc =>
                        {
                            if(doc.id == classID)
                            {
                                enrolled = true;
                            }
                        })
                        
                        if (enrolled)
                        {
                            let html =
                            `
                                <div style = 'padding: 10px 0px 10px 0px;'></div>
                                <p style = '
                                    background-color: red; 
                                    padding: 5px; 
                                    font-weight: 500; 
                                    border: black solid; 
                                    border-width: 3px; 
                                    border-radius: 5px;
                                '>Already part of this class.</p>
                            `;

                            enrolledStatus.style.height = 'fit-content';
                            enrolledStatus.style.width = 'fit-content';
                            enrolledStatus.style.background = 'transparent';
                            enrolledStatus.style.margin = 'auto';
                            enrolledStatus.innerHTML = html;
                        }
                        else
                        {
                            db.collection('users').doc(user.uid).get().then(snapshot =>
                            {
                                db.collection('classes').doc(classID).collection('students').doc(user.uid).set(
                                {
                                    name : snapshot.data().name
                                })
                            })
        
                            db.collection('classes').doc(classID).get().then(snapshot =>
                            {
                                db.collection('users').doc(user.uid).collection('classes').doc(classID).set(
                                    {
                                        name : snapshot.data().teacher + "'s Class"
                                    }
                                )
                            })
                        }
                    })
                }
            })
        })
    })
}

function closePopup()
{
    popup.innerHTML = '';
}