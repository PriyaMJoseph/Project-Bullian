const products = [{
        "course": "Math",
        "description": "Choose from a wide range of math branches to improve your confidence and skills. We have math experts to guide you every step of the way.",
        "subjects": ["Algebra", "Basic Math", "Geometry", "Calculus", "Trigonometry"]
    },
    {
        "course": "Science",
        "description": "Be a science whiz. Improve your grades with us!",
        "subjects": ["Physics", "Chemistry", "Microbiology", "Geology", "Botany"]
    },
    {
        "course": "English",
        "description": "If you lack confidence in your reading or writing skills or if you are above grade level and requires enrichment opportunities, we are here to help you.",
        "subjects": ["Phonics", "Vocabulary", "Reading", "Writing", "Modern Literature"]
    },
    {
        "course": "AP",
        "description": "We can help you excel in advanced classes and increase your AP exam scores.",
        "subjects": ["AP Psychology", "AP Calculus", "AP Physics", "AP French", "AP English Literature"]
    }
]

let result = "";
for (let i = 0; i < products.length; i++) {
    console.log(products[i].subjects);
    if (i % 2 == 0) {
        result += '<div class="display-flex mob-flex-dir-col space-apart mbtm-3">';
    }
    result += '<div class="products-card">';
    result += '<a href="" class="anchor-style display-flex hor-flex-center flex-dir-col vert-flex-center">';
    result += '<h3 class="align-center margin-0 sub_heading_text">' + products[i].course + '</h3>';
    result += '<p class="mbtm-8 content-font">' + products[i].description + '</p>';
    products[i].subjects.forEach(sub => {
        result += '<p class="width-40 main-button button-palm">' + sub + '</p>';
    });
    result += '</a></div>'
    if (i % 2 != 0) {
        result += '</div>';
    }
}
window.onload = function(event) {
    document.getElementById('course-container').innerHTML = result;
}