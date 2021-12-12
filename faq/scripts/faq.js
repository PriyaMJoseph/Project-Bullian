window.onload = () => {
    var faq = document.getElementsByClassName("faq");
    var i;

    for (var i = 0; i < faq.length; i++) {
        faq[i].addEventListener("click", function() {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        });
    }
}

const searchFaq = (e) => {
    e.preventDefault();
    const searchInput = document.getElementById('searchbar').value;
    let questions = document.getElementsByClassName('faq');
    console.log(questions)
        // get user search input converted to lowercase
    const searchQuery = searchInput.toLowerCase();

    for (const element of questions) {
        console.log(element.innerText)
        let qn = element.innerText.toLowerCase();

        if (qn.includes(searchQuery)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }
}