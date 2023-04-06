const numberEnrolled = document.querySelector('#number-enrolled');
const teamSize = document.querySelector('#team-size');
const numberSupport = document.querySelector('#number-support');
const numberQuestions = document.querySelector('#number-questions');
const numberInquiries = document.querySelector('#number-inquiries');
const logout = document.querySelector('#logout-button');
const supportInquiries = document.querySelector('#support-inquiries');
const questionInquiries = document.querySelector('#question-inquiries');
const teamInquiries = document.querySelector('#team-inquiries');
const popup = document.querySelector('#popup');

auth.onAuthStateChanged(user =>
{
    if (user)
    {
        db.collection('admin').get().then(snapshot =>
        {
            var admin = false;
            snapshot.docs.forEach(doc =>
            {
                if (user.uid === doc.data().uid)
                {
                    admin = true;
                }
            })

            if (!admin)
            {
                location.href = 'user.html';
            }
        })

        db.collection('statistics').doc('enrolled').get().then(snapshot =>
        {
            let html = 
            `
                <h2>Number Enrolled: ${snapshot.data().number}</h2>
            `;
            numberEnrolled.innerHTML = html;
        })

        db.collection('statistics').doc('team').get().then(snapshot =>
        {
            let html =
            `
                <h2>Team Size: ${snapshot.data().number}</h2>
            `;
            teamSize.innerHTML = html;
        })
        
        db.collection('support').get().then(snapshot =>
        {
            let html = '';
            snapshot.docs.forEach(doc =>
            {
                const temporary = 
                `
                <a href = '#' onclick = "supportPopup(${doc.id}, 'support'); return false;" style = 'text-decoration: none;'><p style = 'text-align: left; font-weight: 500; color: black;'>➡ ${doc.data().Inquiry.toString().substring(0, 37)}...</p></a>
                <p style = 'text-align: left; font-size: 12px; padding-left: 15px;'>-  ${doc.data().Name}</p>
                    <p style = 'text-align: left; font-size: 12px; padding-left: 15px;'>-  ${doc.data().Email}</p>
                    <div style = 'padding: 8px 0px 8px 0px; border-width: 0px;'></div>
                `;

                html += temporary;
            })

            supportInquiries.innerHTML = html;
        })

        db.collection('questions').get().then(snapshot =>
        {
            let html = '';
            snapshot.docs.forEach(doc =>
            {
                const temporary = 
                `
                    <a href = '#' onclick = "supportPopup(${doc.id}, 'questions'); return false;" style = 'text-decoration: none;'><p style = 'text-align: left; font-weight: 500; color: black;'>➡ ${doc.data().Inquiry.toString().substring(0, 37)}...</p></a>
                    <p style = 'text-align: left; font-size: 12px; padding-left: 15px;'>-  ${doc.data().Name}</p>
                    <p style = 'text-align: left; font-size: 12px; padding-left: 15px;'>-  ${doc.data().Email}</p>
                    <div style = 'padding: 8px 0px 8px 0px; border-width: 0px;'></div>
                `;

                html += temporary;
            })

            questionInquiries.innerHTML = html;
        })

        db.collection('statistics').doc('support').get().then(snapshot =>
        {
            let html =
            `
                <h2>Number: ${snapshot.data().number}</h2>
            `;

            numberSupport.innerHTML = html;

            db.collection('team').get().then(snapshot =>
            {
                let html = '';
                snapshot.docs.forEach(doc =>
                {
                    const temporary = 
                    `
                        <a href = '#' onclick = "supportPopup(${doc.id}, 'team'); return false;" style = 'text-decoration: none;'><p style = 'text-align: left; font-weight: 500; color: black;'>➡ ${doc.data().Inquiry.toString().substring(0, 37)}...</p></a>
                        <p style = 'text-align: left; font-size: 12px; padding-left: 15px;'>-  ${doc.data().Name}</p>
                        <p style = 'text-align: left; font-size: 12px; padding-left: 15px;'>-  ${doc.data().Email}</p>
                        <div style = 'padding: 8px 0px 8px 0px; border-width: 0px;'></div>
                    `;

                    html += temporary;
                })

                teamInquiries.innerHTML = html;
            })
        })
        
        db.collection('statistics').doc('questions').get().then(snapshot =>
        {
            let html =
            `
                <h2>Number: ${snapshot.data().number}</h2>
            `;

            numberQuestions.innerHTML = html;
        })

        db.collection('statistics').doc('team-inquiries').get().then(snapshot =>
        {
            let html =
            `
                <h2>Number: ${snapshot.data().number}</h2>
            `;

            numberInquiries.innerHTML = html;
        })
    }
    else
    {
        location.href = 'login.html';
    }
})


function supportPopup(ID, collection)
{
    db.collection(collection).get().then(snapshot =>
    {
        snapshot.docs.forEach(doc =>
        {
            if (doc.id.toString() === ID.toString())
            {
                let timestamp = new Date(ID).toString();
        
                var hours = parseInt(timestamp.substring(16, 18));
                var partOfDay;
                if (hours > 12)
                {
                    hours -= 12;
                    partOfDay = "PM";
                }
                else if (hours == 12)
                {
                    partOfDay = "PM";
                }
                else
                {
                    if (hours == 0)
                    {
                        hours = 12;
                    }
                    partOfDay = "AM";
                }
                
                var timestampFinal = timestamp.substring(3, 11) + ' ' + hours + timestamp.substring(18, 21) + ' ' + partOfDay;

                let html = 
                `
                <div id = 'black-screen' style = 'position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0, 0, 0 , 0.8);'></div>
                <div style = 'position: absolute; top: 30%; left: 35%; width: 30%; height: fit-content; margin: auto; background-image:linear-gradient(295deg, #f2adad, #ba7edc); border: #861ff4 solid; border-width: 7px; border-radius: 15px; padding: 3px 20px 5px 20px;'>
                    <h1 style = 'color: black; text-align: center; font-size: 35px; padding: 10px 0px 10px 0px; text-decoration: underline;'>Message Contents</h1>
                    <p style = 'color: black; font-size: 18px; text-align: left; padding-bottom: 8px; line-height: 35px;'>${doc.data().Inquiry}</p>
                    <div style = 'padding: 5px 0px 5px 0px;'></div>
                    <p style = 'color: black; font-size: 16px; text-align: left; padding: 0px 0px 12px 0px;'><b>Name:</b> ${doc.data().Name}</p>
                    <p style = 'color: black; font-size: 16px; text-align: left; padding: 0px 0px 12px 0px;'><b>Email:</b> ${doc.data().Email}</p>
                    <p style = 'color: black; font-size: 16px; text-align: left; padding: 0px 0px 12px 0px;'><b>Sent:</b> ${timestampFinal}</p>
                    <div style = 'padding: 5px 0px 5px 0px;'></div>
                    <button id = 'delete-button' style = 'padding: 5px; background-color: red; border: black solid; border-width: 3px; border-radius: 5px; font-weight: 500;'>Delete</button>
                </div>
                `;

                popup.innerHTML = html;

                const blackScreen = document.querySelector('#black-screen');
                blackScreen.addEventListener('click', (e) =>
                {
                    closePopup();
                })

                const deleteButton = document.querySelector('#delete-button');
                deleteButton.addEventListener('click', (e) =>
                {
                    e.preventDefault();
                    db.collection(collection).doc(ID.toString()).delete();
                    console.log("Item deleted.");
                    closePopup();

                    if (collection.toString() === 'team')
                    {
                        db.collection('statistics').doc('team-inquiries').get().then(snapshot =>
                        {
                            db.collection('statistics').doc('team-inquiries').set(
                            {
                                number : (snapshot.data().number - 1)
                            })  
                        }).then(() =>
                        {
                            setTimeout(function ()
                            {
                                location.reload();
                            }, 300); 
                        })
                    }
                    
                    db.collection('statistics').doc(collection).get().then(snapshot =>
                    {
                        db.collection('statistics').doc(collection).set(
                        {
                            number : (snapshot.data().number - 1)
                        })  
                    }).then(() =>
                    {
                        setTimeout(function ()
                        {
                            location.reload();
                        }, 300); 
                    })
                })
            }
        })
    })
}

function closePopup()   
{
    let html = '';

    popup.innerHTML = html;
}

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