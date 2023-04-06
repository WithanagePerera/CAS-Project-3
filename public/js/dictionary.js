// Links constants to HTML elements
const dashboard = document.querySelector('dashboard');
const terms = document.querySelector('#terms');
const createTerm = document.querySelector('#create');
const listTerms = document.querySelector('#list');
const logout = document.querySelector('#logout-button');
const popup = document.querySelector('#term-popup');

// Injectable HTML for filter-by-letter buttons
var searchTools =
`
    <div style = 'display: flex; justify-content: center;'>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("A")>A</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("B")>B</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("C")>C</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("D")>D</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("E")>E</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("F")>F</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("G")>G</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("H")>H</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("I")>I</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("J")>J</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("K")>K</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("L")>L</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("M")>M</button>
    </div>

    <!-- Spacer -->
    <div style = 'padding: 5px;'></div>

    <div style = 'display: flex; justify-content: center;'>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("N")>N</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("O")>O</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("P")>P</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("Q")>Q</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("R")>R</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("S")>S</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("T")>T</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("U")>U</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("V")>V</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("W")>W</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("X")>X</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("Y")>Y</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("Z")>Z</button>
    </div>

    <!-- Spacer -->
    <div style = 'padding: 5px;'></div>

    <!-- Reset Button -->
    <div>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("reset")>Reset</button>
    </div>

    <h1 style = 'font-size: 25px; padding-top: 10px; padding-bottom: 5px;'>Search</h1>

    <!-- Search bar -->
    <form action = 'dictionary.html' method = 'POST' id = 'search-bar' style = 'padding-bottom: 15px; width: 80%; margin: auto;'>
        <input type = 'text' name = 'search' id = 'search' style = 
        '
            font-size: 18px;
            border: black solid;
            border-width: 3px;
            border-radius: 5px;
            padding: 5px;
            width: 100%;
        '>
        </input>
    </form>

    <!-- Creates div that will be filled with a list of terms, div will be closed later -->
    <div id = 'listOfTerms' style = 'max-width: fit-content; margin: auto;'>
`;

// Checks if user is authenticated
auth.onAuthStateChanged((user) =>
{ 
    // If user is logged in
    if (user)
    {
        // Sorts data alphabetically by term in ascending order
        fetchData('term', 'asc');
        shortList('term', 'asc');
    }
    // If user is not logged in
    else
    {
        // Redirects user if not logged in
        location.href = 'login.html';
    }
})

// Defines function for going through collection
const createList = (data) =>
{
    // Counter used for giving elements unique IDs
    let counter = 1;
    // Injectable HTML
    let html = '';

    // For each loop to cycle through the documents in the Collection
    data.forEach(doc =>
    {
        // Accesses data from the document
        const term = doc.data();

        // Temporary storage for the document's term
        const td = 
        `
            <!-- Creates element containing term and definition -->
            <p id = ${counter} style = 'font-size: 19px; font-weight: 400; text-align: left; line-height: 40px;'><b><a href = '#top' onclick = "definitionPopup(${counter});")>${term.term}</a></b> - ${term.definition}</p>
            
            <!-- Spacer -->
            <div style = 'padding: 10px;'></div>
        `;

        // Aggregates terms into single reference
        html += td;

        // Increments counter
        counter += 1;
    })

    // Closes previously open div containing list of terms
    html += `<div style = 'padding-bottom: 10%;'></div>`;

    // Injects HTML
    terms.innerHTML = html;
}

// Refeshes data every time collection changes
function fetchData(sortBy, order)
{
    // Sorts data depending on function arguments
    db.collection('terms').orderBy(sortBy, order).onSnapshot(snapshot =>
    {
        // Runs data through previously created function
        createList(snapshot.docs);
    })
}

// Determines whether or not to display add term feature
auth.onAuthStateChanged(user =>
{
    // If user is logged in
    if (user)
    {
        // Var storing if user is admin or standard
        var admin = false;

        // Retrieves data from 'Admin' collection
        db.collection('admin').get().then(snapshot =>
        {
            // Iterates through Admin collection
            snapshot.docs.forEach(doc =>
            {
                // Stores Admin user data in constant
                const information = doc.data();

                // Compares logged in user ID with document ID
                if (user.uid == information.uid)
                {
                    admin = true;
                }
            })

            if (admin)
            {
                // Create-term option
                let html = 
                `
                    <button id = 'create-term' onclick = createTermWindow()>Create Term</button>
                `;
    
                // Injects HTML
                createTerm.innerHTML = html;

                // Admin dashboard
                html =
                `
                    <li><a class = 'nav-link' href = 'admin.html'>Dashboard</a></li>
                `;

                dashboard.innerHTML = html;
            }
        })   

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
})

// Creates list of terms
function shortList(sortBy, order)
{
    db.collection('terms').orderBy('term', 'asc').onSnapshot(snapshot =>
    {
        // Counter to provide elements with unique IDs
        let counter = 1;
        // Sets injectable HTML to previously defined variable containing HTML for the filter-by-letter buttons
        let html = searchTools;

        // Iterates through collection
        snapshot.docs.forEach(doc =>
        {
            // Stores document data in cosntant
            const information = doc.data();

            // Creates injectable HTML
            const td = 
            `
                <!-- Link to actual term within search and filter box -->
                <a 
                style = 'color: black; font-size: 18px; font-weight: 500;' href = '#${counter}'>${information.term}</a>
                <!-- Spacer -->
                <div style = 'padding: 10px;'></div>
            `;

            // Aggregates HTML
            html += td;
            // Increments counter
            counter += 1;
        })

        // Closes previously opened HTML
        html += `</div>`;
        // Injects HTML
        listTerms.innerHTML = html;

        // Creates constants linked to HTML elements
        const replaceTerms = document.querySelector('#listOfTerms');
        const searchTerm = document.querySelector('#search-bar');

        // Listens to when something is searched in search bar
        searchTerm.addEventListener('submit', (e) =>
        {
            // Prevents default action
            e.preventDefault();
                
            // Contains user-entered value from search bar
            const search = searchTerm['search'].value;

            // Retrieves data from 'terms' collection
            db.collection('terms').get().then(snapshot =>
            {
                // Creates counter
                let counter = 1;
                // Creates injectable HTML
                let html = '';
                // Iterates through 'terms' collection
                snapshot.docs.forEach(doc =>
                {
                    // Stores document data in constant
                    const information = doc.data();

                    // Condition statement checking if user-searched term matches current document term
                    if (information.term.toString().toLowerCase().includes(search.toString().toLowerCase()))
                    {
                        // If so, creates injectable HTML containing link to full definition within the Dictionary page for that word
                        const td =
                        `
                            <a 
                            style = 'color: black; font-size: 18px; font-weight: 500;' href = '#${counter}'>${information.term}</a>
                            <div style = 'padding: 10px;'></div>
                        `;
                
                        // Aggregates HTML
                        html += td;
                    }
                    // Increments counter
                    counter += 1;
                })
                // Injects HTML
                replaceTerms.innerHTML = html;
            })
        })
    })
}

// Creates function for filtering terms when letter-button is pressed
function sort(letter)
{
    // For Reset button, resets all filters
    if (letter === 'reset')
    {
        fetchData('term', 'asc');
        shortList('term', 'asc');
    }
    // If reset button wasn't pressed...
    else
    {
        // Retreives data from 'terms' collection
        db.collection('terms').onSnapshot(snapshot =>
        {
            // Creates counter
            let counter = 1;
            // Initializes injectable HTML
            let termsHtml = '';
            // Sets existing search tools to blank HTML to be updated later
            let listHtml = searchTools;
            
            // Iterates through collection
            snapshot.docs.forEach(doc =>
            {
                // Condition statement checking if ANY PART of the search is contained within the document name
                if (doc.id.toString().substring(0, 1) === letter)
                {    
                    // Creates injectable HTML for definition
                    const term = 
                    `
                        <p id = ${counter} style = 'font-size: 19px; font-weight: 400; text-align: left; line-height: 40px;'><b><u>${doc.data().term}</u></b> - ${doc.data().definition}</p>
                        <div style = 'padding: 10px;'></div>
                    `;
                    // Aggregates HTML
                    termsHtml += term;

                    // Creates injectable HTML for fast-access link to full-definition
                    const link =
                    `
                    
                        <a 
                        style = 'color: black; font-size: 18px; font-weight: 500;' href = '#${counter}'>${doc.data().term}</a>
                        <div style = 'padding: 10px;'></div>
                    `;
                    // Aggregates HTML
                    listHtml += link;
                }

                // Increments counter
                counter += 1;
            })
            // Closes previously opened div
            listHtml += `</div>`;

           termsHtml += `<div style = 'padding-bottom: 10%;'></div>`;


            // Injects HTML
            terms.innerHTML = termsHtml;
            listTerms.innerHTML = listHtml;

            // Creates new constants linked to HTML elements created by injectable code
            const replaceTerms = document.querySelector('#listOfTerms');
            const searchTerm = document.querySelector('#search-bar');

            // Detects if search was entered
            searchTerm.addEventListener('submit', (e) =>
            {
                // Prevents default action
                e.preventDefault();
                
                // Stores user-search term in constant
                const search = searchTerm['search'].value;

                // Retrieves data from 'terms' collection
                db.collection('terms').get().then(snapshot =>
                {
                    // Creates counter to provide elements with unique IDs
                    let counter = 1;
                    // Initializes HTML inject
                    let html = '';
                    // Iterates through documents in collection
                    snapshot.docs.forEach(doc =>
                    {
                        // Stores document data
                        const information = doc.data();

                        // Condition statement checking if ANY PART of the document term contains the user-searched value
                        if (information.term.toString().toLowerCase().includes(search.toString().toLowerCase()))
                        {
                            // Initializes injectable HTML
                            const td =
                            `
                                <a 
                                style = 'color: black; font-size: 18px; font-weight: 500;' href = '#${counter}'>${information.term}</a>
                                <div style = 'padding: 10px;'></div>
                            `;
                    
                            // Aggregates HTML
                            html += td;
                        }
                        // Increments counter
                        counter += 1;
                    })
                    // Injects HTML
                    replaceTerms.innerHTML = html;
                })
            })
        })
    }
}

function definitionPopup(counter)
{
    auth.onAuthStateChanged((user) =>
    {
        var admin = false;

        db.collection('admin').get().then(snapshot =>
        {
            snapshot.docs.forEach(doc =>
            {
                if (doc.id.toString() === user.uid.toString())
                {
                    admin = true;
                }
            })

            db.collection('terms').get().then(snapshot =>
            {
                let html = 
                `
                <div id = 'black-screen' style = 'position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0, 0, 0 , 0.8);'></div>
                <div style = 'position: absolute; top: 30%; left: 25%; width: 50%; height: fit-content; margin: auto; background-image:linear-gradient(295deg, #f2adad, #ba7edc); border: #861ff4 solid; border-width: 7px; border-radius: 15px; padding: 3px 20px 5px 20px;'>
                    <h1 style = 'color: black; text-align: center; font-size: 35px; padding: 10px 0px 10px 0px; text-decoration: underline;'>${snapshot.docs[counter-1].data().term}</h1>
                    <p style = 'color: black; font-size: 20px; text-align: left; padding-bottom: 8px; line-height: 35px;'>${snapshot.docs[counter-1].data().definition}</p>
                    <div style = 'padding: 8px 0px 8px 0px;'></div>
                    <p style = 'color: black; font-size: 16px; text-align: left; padding: 0px 0px 12px 0px;'><b>Common Fields:</b> ${snapshot.docs[counter-1].data().common_fields}</p>
                    <p style = 'color: black; font-size: 16px; text-align: left; padding: 0px 0px 12px 0px;'><b>Abbreviations:</b> ${snapshot.docs[counter-1].data().abbreviations}</p>
                `;
        
        
                if (admin)
                {
                    let ending =
                    `
                        <div style = 'padding: 5px 0px 5px 0px;'></div>
                        <div style = 'display: flex; gap: 10px; justify-content: center;'>
                            <button id = 'edit-button' style = 'padding: 5px 8px 5px 8px; font-weight: 500; font-size: 16px; background-color: red; border: black solid; border-width: 3px; border-radius: 5px;'>Edit</button>
                            <button id = 'delete-button' style = 'padding: 5px 8px 5px 8px; font-weight: 500; font-size: 16px; background-color: red; border: black solid; border-width: 3px; border-radius: 5px;'>Delete</button>
                        </div>
                        </div>
                    `;

                    html += ending;
                }
                else
                {
                    let ending = 
                    `
                        </div>
                    `;

                    html += ending;
                }

                popup.innerHTML = html;

                const blackScreen = document.querySelector('#black-screen');
                blackScreen.addEventListener('click', (e) =>
                {
                    closePopup();
                })

                const edit = document.querySelector('#edit-button');
                edit.addEventListener('click', (e) =>
                {
                    e.preventDefault();
                    createTermWindow();
                    document.querySelector('#term').value = snapshot.docs[counter-1].data().term;
                    document.querySelector('#definition').value = snapshot.docs[counter-1].data().definition;
                    document.querySelector('#abbreviations').value = snapshot.docs[counter-1].data().abbreviations;
                    document.querySelector('#prefix').value = snapshot.docs[counter-1].data();
                    document.querySelector('#suffix').value = snapshot.docs[counter-1].data();
                    document.querySelector('#root').value = snapshot.docs[counter-1].data();
                })

                const deleteButton = document.querySelector('#delete-button');
                deleteButton.addEventListener('click', (e) =>
                {
                    e.preventDefault();
                    db.collection('terms').doc(snapshot.docs[counter-1].id).delete();
                    closePopup();
                    console.log('Term has been deleted.');
                })
            })
        })
    })
}

function closePopup()
{
    popup.innerHTML = '';
}

function createTermWindow()
{
    let html =
    `
        <div id = 'black-screen' style = 'position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0, 0, 0 , 0.8);'></div>
        <div style = 'position: absolute; top: 20%; left: 35%; width: 30%; height: fit-content; margin: auto; background-image:linear-gradient(295deg, #f2adad, #ba7edc); border: #861ff4 solid; border-width: 7px; border-radius: 15px; padding: 3px 20px 5px 20px;'>    
            <!-- Form for admins to create new terms -->
            <form action = 'dictionary.html' method = 'POST' id = 'new-term'>
                    <!-- Term entry -->
                    <div style = 'padding: 5px 0px 5px 0px;'></div>
                    <textarea type = 'text' placeholder = 'Term...' name = 'term' id = 'term' style = 'font-size: 20px; font-weight: 500; background: transparent; border: black solid; border-width: 2px; border-radius: 6px; height: 4.6vh; min-height: 4.6vh; min-width: fit-content; padding: 5px;'></textarea>
                    <br></br>
                    <!-- Definition entry -->
                    <textarea type = 'text' placeholder = 'Definition...' name = 'definition' id = 'definition' style = 'font-size: 14px; background: transparent; min-width: 95%; max-width: 95%; min-height: 15vh; border: black solid; border-width: 2px; border-radius: 6px; padding: 5px;'></textarea>
                    <br></br>
                    <textarea type = 'text' placeholder = 'Abbreviations...' name = 'abbreviations' id = 'abbreviations' style = 'background: transparent; min-width: 40%; max-width: 95%; height: 4vh; min-height: 4vh; border: black solid; border-width: 2px; border-radius: 6px; padding: 5px; justify-content: left;'></textarea>
                    <br></br>
                    <textarea type = 'text' placeholder = 'Prefix...' name = 'prefix' id = 'prefix' style = 'background: transparent; min-width: 40%; max-width: 95%; height: 4vh; min-height: 4vh; border: black solid; border-width: 2px; border-radius: 6px; padding: 5px; justify-content: left;'></textarea>
                    <br></br>
                    <textarea type = 'text' placeholder = 'Suffix...' name = 'suffix' id = 'suffix' style = 'background: transparent; min-width: 40%; max-width: 95%; height: 4vh; min-height: 4vh; border: black solid; border-width: 2px; border-radius: 6px; padding: 5px; justify-content: left;'></textarea>
                    <br></br>
                    <textarea type = 'text' placeholder = 'Root Word...' name = 'root' id = 'root' style = 'background: transparent; min-width: 40%; max-width: 95%; height: 4vh; min-height: 4vh; border: black solid; border-width: 2px; border-radius: 6px; padding: 5px; justify-content: left;'></textarea>
                    <br></br>

                    <style>
                    ::placeholder
                    {
                        font-weight: 500;
                    }
                    </style>
                <!-- Spacer -->
                <div id = 'small-gap'></div>

                <!-- Submit button -->
                <button id = 'submit-term'>Submit</button>
            </form>
        </div>
        <br></br>
    `;

    popup.innerHTML = html;

    const blackScreen = document.querySelector('#black-screen');
    blackScreen.addEventListener('click', (e) =>
    {
        closePopup();
    })

    const submitTerm = document.querySelector('#submit-term');

    submitTerm.addEventListener('click', (e) =>
    {
        e.preventDefault();
        
        // Stores term and definition
        const term = document.querySelector('#term').value;
        const definition = document.querySelector('#definition').value;
        const commonFields = document.querySelector('#common-fields').value;
        const abbreviations = document.querySelector('#abbreviations').value;

        // Stores data in terms Collection
        db.collection('terms').doc(term).set(
        {
            term : term,
            definition : definition,
            common_fields : commonFields,
            abbreviations : abbreviations
        })

        console.log('Successfully created new term and definition.');

        closePopup();
    })
}