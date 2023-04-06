// Links input HTML with constants
const titleInput = document.querySelector('#title-info');
const paragraphInput = document.querySelector('#paragraph-info');

// Creates HTML Document
let HTMLdocument = document.implementation.createHTMLDocument("Example");

// Defines HTML style characteristics
HTMLdocument.body.style.backgroundColor = 'white';
HTMLdocument.body.style.border = "black solid";
HTMLdocument.body.style.borderWidth = "5px";

HTMLdocument.body.append("Hello World");

// Creates HTML title element
let title = HTMLdocument.createElement("h1");
title.textContent = '';
HTMLdocument.body.append(title);

// Creates HTML paragraph element
let paragraph = HTMLdocument.createElement("p");
paragraph.textContent = "";
HTMLdocument.body.append(paragraph);

const titleSelector = HTMLdocument.querySelector('h1');
const paragraphSelector = HTMLdocument.querySelector('p');


titleInput.addEventListener('submit', (e) =>
{
    e.preventDefault();
    let html =
    `
        <h1 style = 'font-size: 70px; text-align: center;'>${titleInput['title'].value}</h1>
    `;

    titleSelector.innerHTML = html;
})

paragraphInput.addEventListener('submit', (e) =>
{
    e.preventDefault();
    let html =
    `
        <p style = 'font-size: 20px; text-align: center;'>${paragraphInput['paragraph'].value}</p>
    `;

    paragraphSelector.innerHTML += html;
})


var preview = document.querySelector('iframe').contentDocument;
preview.replaceChild(
    HTMLdocument.documentElement,
    preview.documentElement
);



function uploadImage() {
    console.log(HTMLdocument);


    const ref = firebase.storage().ref();
    const file = document.querySelector("#photo").files[0];
    const name = new Date() + "-" + file.name;
    const metadata = {
        contentType: file.type
    };

    const task = ref.child(name).put(file, metadata);
    task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
        console.log(url);
    })
    .catch(console.error);
}