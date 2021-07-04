

const checkbox_limit = 3;
var checkbox1_counter = 0;
var checkbox2_counter = 0;

var current_page = 0;

var welcome_page_eng = [
                            "Welcome to the study of Augmented Reality for Barcino MUHABA Museum",
                            "First I would like to thank you for taking your time to participate in this scientific study. This study is being done by the Full-Body Interaction Lab as part of a masters’ thesis in Cognitive Systems and Interactive Media at the Universitat of Pompeu Fabra.",
                            "As a participant, you were exploring the museum content with your partner in two roles using World as Support and Window on the World Augmented Reality paradigms.",
                            "<strong>Role One:</strong> You were interacting with the augmented content as the device holder.",
                            "<strong>Role Two:</strong> You were interacting with the augmented content as a non-device holder with your partner who was holding the device.",
                            "Your participation in this research study is valuable, and we are grateful for your time. Please by clicking the Next button read and accept our policy.",
                            "Next",
                            "Loza Tadesse, Paul Hine, Narcis Pares, University Pompeu Fabra – UPF-WaS 2021-2022"
                        ];

var privacy_policy_eng = [
                            "Privacy and Policy",
                            "The task to be performed does not pose any foreseeable risks for the user. Please note that we are collecting your data for scientific research purposes of my Master thesis project that I am doing at Pompeu Fabra University. The data you share with us on this page will be aggregated and anonymized. We do not store any personal identifying data. Such as name and personal questions. By completing the questionnaire which follows the instructions page, you are consenting to anonymously share your data with the researcher (Me) and understand that it may be used in scientific publication. You can stop at any time or ask for further information on the study, please reach me out at loza.tadesse01@estudiant.upf.edu.",
                            "Please, by clicking the “Accept” button below indicates that you have agreed to participate and that you agree to have your data used in this study. Also that you will not disclose content, research procedures, and/or purpose to anyone from outside of the study.",
                            "“Reject”, I do not agree (do not participate in this study) “Accept”, I agree",
                            "Thank you!",
                            "Accept",
                            "Reject",
                            "Loza Tadesse, Paul Hine, Narcis Pares, University Pompeu Fabra – UPF-WaS 2021-2022"
                        ];

var instructions_eng = [
                            "Instructions",
                            "Welcome back! We will now begin the post-trial questionnaire. Please, keep in mind the following points:",
                            "The questionnaire might last you between 5 to 10 minutes, depending on your speed.",
                            "There is no time limit to answer all the questions.",
                            "All questions are required. To pass from one page to another page it's necessary to answer all the questions.",
                            "Due to the structure of the research, we have disabled the “Back“ button during the questionnaire. Please do not try going back to a previous page.",
                            "You won't be allowed to change responses once the questionnaire is submitted.",
                            "Please try to complete the questions in one sitting.",
                            "Thank you!",
                            "Start",
                            "Loza Tadesse, Paul Hine, Narcis Pares, University Pompeu Fabra – UPF-WaS 2021-2022"
                        ];

var questions_eng = [
                            "Instructions",
                            "Welcome back! We will now begin the post-trial questionnaire. Please, keep in mind the following points:",
                            "The questionnaire might last you between 5 to 10 minutes, depending on your speed.",
                            "There is no time limit to answer all the questions.",
                            "All questions are required. To pass from one page to another page it's necessary to answer all the questions.",
                            "Due to the structure of the research, we have disabled the “Back“ button during the questionnaire. Please do not try going back to a previous page.",
                            "You won't be allowed to change responses once the questionnaire is submitted.",
                            "Please try to complete the questions in one sitting.",
                            "Thank you!",
                            "Start",
                            "Loza Tadesse, Paul Hine, Narcis Pares, University Pompeu Fabra – UPF-WaS 2021-2022"
                        ];

var welcome_page_spa = [
                            "Bienvenido al estudio de realidad augmentada para el Museo MUHABA de Barcino",
                            "Primero, me gustaría agradecerle el tiempo que está dedicando a participar en este estudio. Este estudio se está haciendo por el laboratorio de Full-Body Interaction como parte del trabajo de final de máster en Sistemas Cognitivos y Medios Interactivos a la Universidad de Pompeu Fabra.",
                            "Como participante, estabas explorando el contenido del museo con tu compañero teniendo 2 roles usando los paradigmas de realidad augmentada World as Support y Window on the World",
                            "<strong>Primer rol:</strong> Has estado interactuando con el contenido augmentado como portador del dispositivo",
                            "<strong>Segundo rol:</strong> Has estado interactuando con el contido augmentado como no portado del dispositivo con tu compañero el cual estaba llevando el dispositivo.",
                            "Tu participacion en este estudio de investigación es muy valuoso, y estamos agradecidos por tu tiempo. Por favor, pulsando el botón Siguiente, podrá leer nuestra política de privacidad.",
                            "Siguiente",
                            "Loza Tadesse, Paul Hine, Narcis Pares, Universidad Pompeu Fabra – UPF-WaS 2021-2022"
                        ];

var privacy_policy_spa = [
                            "Politica de Privacidad",
                            "La tarea a realizar no presenta riesgos para el usuario. Tenga en cuenta que estamos recopilando sus datos con fines de investigación científica de mi proyecto de tesis de master que estoy haciendo en la Universidad Pompeu Fabra. Los datos que comparte con nosotros en esta página serán agregados y anonimizados. No almacenamos ningún dato de identificación personal como el nombre o preguntas personales. Al completar el cuestionario que sigue a la página de instrucciones, usted acepta compartir de forma anónima sus datos con el investigador (Yo) y comprende que pueden utilizarse en publicaciones científicas. Puede detenerse en cualquier momento o solicitar más información sobre el estudio, comuníquese conmigo en loza.tadesse01@estudiant.upf.edu.",
                            "Por favor, al hacer clic en el botón “Aceptar“ a continuación, indica que ha aceptado participar y que acepta que se utilicen sus datos en este estudio. Además, no revelará el contenido, los procedimientos de investigación y / o el propósito a nadie fuera del estudio.",
                            "“Rechazar“, no estoy de acuerdo (no quiero participar en este estudio). “Aceptar“, estoy de acuerdo en participar en ese estudio",
                            "Gracias!",
                            "Aceptar",
                            "Rechazar",
                            "Loza Tadesse, Paul Hine, Narcis Pares, Universidad Pompeu Fabra – UPF-WaS 2021-2022"
                        ];

var instructions_spa = [
                            "Instrucciones",
                            "¡Bienvenido de nuevo! Ahora comenzaremos con el cuestionario posterior al ensayo. Por favor, tenga en cuenta los siguientes puntos:",
                            "El cuestionario puede durar entre 5 y 10 minutos, dependiendo de su velocidad.",
                            "No hay límite de tiempo para responder a todas las preguntas.",
                            "Todas las preguntas son obligatorias. Para pasar de una página a otra es necesario responder a todas las preguntas.",
                            "Debido a la estructura de la investigación, hemos desactivado el botón “Atrás“ durante el cuestionario. No intente volver a una página anterior.",
                            "No se le permitirá cambiar las respuestas una vez que se envíe el cuestionario.",
                            "Intente completar las preguntas de una sola vez.",
                            "Gracias!",
                            "Empezar",
                            "Loza Tadesse, Paul Hine, Narcis Pares, Universidad Pompeu Fabra – UPF-WaS 2021-2022"
                        ];

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".flag-language-brit").addEventListener("click", handleChangeLanguageBritish);
    document.querySelector(".flag-language-spa").addEventListener("click", handleChangeLanguageSpanish);
    document.querySelector(".flag-language-cat").addEventListener("click", handleChangeLanguageCatalan);


    var next1 = document.querySelector("#l-7");
    var next2 = document.querySelector("#l-14");
    var next3 = document.querySelector("#l-26");

    //var next3 = document.querySelector("#l-14");

    if (next1 != null) {
        current_page = 0;
    }

    if (next2 != null) {
        current_page = 1;
    }

    if (next3 != null) {
        current_page = 2;
    }
    /*if (next3 != null) {
        next1.addEventListener("click", increasePage);
    }*/

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

function handleChangeLanguageBritish() {
    changeLanguage("british");
}

function handleChangeLanguageSpanish() {
    changeLanguage("spanish");
}

function handleChangeLanguageCatalan() {
    changeLanguage("catalan");
}

function changeLanguage(language) {
    var elements = [];
    var i = 1;

    for (; i < 100; i++) {
        var sentence = document.querySelector("#l-" + i.toString());
        
        if (sentence != null) {
            elements.push(sentence);
        }
    }

    console.log(elements);

    if (language == "british") {

        if (current_page == 0) {
            for (element in elements) {
                elements[element].innerHTML = welcome_page_eng[element];
            }
        } else if (current_page == 1) {
            for (element in elements) {
                elements[element].innerHTML = privacy_policy_eng[element];
            }
        } else if (current_page == 2) {
            for (element in elements) {
                elements[element].innerHTML = instructions_eng[element];
            }
        }

    } else if (language == "spanish") {

        if (current_page == 0) {
            for (element in elements) {
                elements[element].innerHTML = welcome_page_spa[element];
            }
        } else if (current_page == 1) {
            for (element in elements) {
                elements[element].innerHTML = privacy_policy_spa[element];
            }
        } else if (current_page == 2) {
            for (element in elements) {
                elements[element].innerHTML = instructions_spa[element];
            }
        }

    } else if (language == "catalan") {

        if (current_page == 0) {
            for (element in elements) {
                elements[element].innerHTML = welcome_page_cat[element];
            }
        } else if (current_page == 1) {
            for (element in elements) {
                elements[element].innerHTML = privacy_policy_cat[element];
            }
        } else if (current_page == 2) {
            for (element in elements) {
                elements[element].innerHTML = instructions_cat[element];
            }
        }
    }
}

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