function myFunction() {
    const popupForm = document.querySelector('#myPopup');
    let html =
    `
       <a href = 'dictionary.html'></a>Link</span>
    `;
    popupForm.innerHTML = html;
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }