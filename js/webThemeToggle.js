function toggleTheme(value) {

    // Get the name of the stylesheet
    // as a parameter and set it
    // using href attribute.
    var sheets = document
        .getElementsByTagName('link');

    sheets[0].href = value;
}