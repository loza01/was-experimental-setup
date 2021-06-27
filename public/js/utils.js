

const checkbox_limit = 3;
var checkbox1_counter = 0;
var checkbox2_counter = 0;

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

    /* var checkBoxGroup1 = document.querySelectorAll(".single-checkbox");
    for (check of checkBoxGroup1) {
        check.addEventListener('change', function(evt) {
            if (this.checked == true) {
                checkbox1_counter++;
            } else {
                checkbox1_counter--;
            }
            if (checkbox1_counter > checkbox_limit) {
                this.checked = false;
                checkbox1_counter--;
            }
        });
    }

    var checkBoxGroup2 = document.querySelectorAll(".single-checkbox2");
    for (check of checkBoxGroup2) {
        check.addEventListener('change', function(evt) {
            if (this.checked == true) {
                checkbox2_counter++;
            } else {
                checkbox2_counter--;
            }
            if (checkbox2_counter > checkbox_limit) {
                this.checked = false;
                checkbox2_counter--;
            }
        });
    } */
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