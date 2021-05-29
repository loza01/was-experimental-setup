

document.addEventListener("DOMContentLoaded", function() {
    var group1 = document.querySelector(".group-1");
    var group2 = document.querySelector(".group-2");
    var group3 = document.querySelector(".group-3");
    var group4 = document.querySelector(".group-4");

    // Initial state
    group1.style.display = "block";
    group2.style.display = "none";
    group3.style.display = "none";
    group4.style.display = "none";

    document.querySelector("#submit-questions").addEventListener("click", handleSubmitData);
    document.querySelector("#submit-questions-real").style.display = "none";
});

function handleSubmitData() {
    var group1 = document.querySelector(".group-1");
    var group2 = document.querySelector(".group-2");
    var group3 = document.querySelector(".group-3");
    var group4 = document.querySelector(".group-4");

    if (group1.style.display === "block") {
        group1.style.display = "none";
        group2.style.display = "block";
    } else if (group2.style.display === "block") {
        group2.style.display = "none";
        group3.style.display = "block";
    } else if (group3.style.display === "block") {
        group3.style.display = "none";
        group4.style.display = "block";
        document.querySelector("#submit-questions").style.display = "none";
        document.querySelector("#submit-questions-real").style.display = "block";
    } else if (group4.style.display === "block") {
        group1.style.display = "block";
        group4.style.display = "none";
    }
}