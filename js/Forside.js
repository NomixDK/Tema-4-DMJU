function searchFunction() {
    var input, filter, content, paragraphs, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();  // Gør søgningen case-insensitive
    content = document.getElementById("content");
    paragraphs = content.getElementsByTagName("p");

    // Gå igennem alle paragrafer og skjul dem, der ikke matcher søgningen
    for (i = 0; i < paragraphs.length; i++) {
        txtValue = paragraphs[i].textContent || paragraphs[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            paragraphs[i].style.display = ""; // Vis paragraffen
        } else {
            paragraphs[i].style.display = "none"; // Skjul paragraffen
        }
    }
}