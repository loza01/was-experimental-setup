
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
                            "Questionnarie",
                            "<strong>1. To which gender do you most identify?</strong>",
                            "Female",
                            "Male",
                            "Others",
                            "<strong>2. Choose your age group?</strong>",
                            "10–19 years old",
                            "20–29 years old",
                            "30–39 years old",
                            "40 - 49 years old",
                            "50 - 59 years old",
                            "60 - 69 years old",
                            "70+ years old",
                            "<strong>3. Please, choose your nationality</strong>",
                            "This experience is based on an exhibition in the Museum of the History of Barcelona (MUHBA).",
                            "<strong>4. Have you ever been to this museum exhibit?</strong>",
                            "yes",
                            "<strong>5. Have you ever been to an interactive museum?</strong>",
                            "A Museum with interactive exhibits let their visitors engage with the items and activities on display or interact with the contents. Instead of just simply reading the information posted, visitors are able to participate actively through hands-on experience.",
                            "yes",
                            "<strong>6.Have you been a participant in a study that used a similar device?</strong>",
                            "yes",
                            "<strong>7. What is your preference about museums?</strong>",
                            "<strong>7.1 I am interested in history</strong>",
                            "<span>1</span><span>Not interested at all</span>",
                            "<span>2</span><span>Somewhat interested</span>",
                            "<span>3</span><span>Fairly interested</span>",
                            "<span>4</span><span>Very interested</span>",
                            "<span>5</span><span>Hardly interested</span>",
                            "<strong>7.2 I am interested in archaelogy</strong>",
                            "<span>1</span><span>Not interested at all</span>",
                            "<span>2</span><span>Somewhat interested</span>",
                            "<span>3</span><span>Fairly interested</span>",
                            "<span>4</span><span>Very interested</span>",
                            "<span>5</span><span>Hardly interested</span>",
                            "<strong>7.3 When I go to museums or other cultural heritage sites, I like to have a tour guide.</strong>",
                            "<span>1</span><span>Strongly disagree</span>",
                            "<span>2</span><span>Disagree somewhat</span>",
                            "<span>3</span><span>Neither agree nor disagree</span>",
                            "<span>4</span><span>Agree somewhat</span>",
                            "<span>5</span><span>Strongly agree</span>",
                            "<strong>7.4 When I go to museums or other cultural heritage sites, I would like to interact using different devices.</strong>",
                            "<span>1</span><span>Strongly disagree</span>",
                            "<span>2</span><span>Disagree somewhat</span>",
                            "<span>3</span><span>Neither agree nor disagree</span>",
                            "<span>4</span><span>Agree somewhat</span>",
                            "<span>5</span><span>Strongly agree</span>",
                            "<strong>8. During your visit to Barcino, you held a special device that let you see into the past.</strong>",
                            "<strong>8.1 I liked exploring the Barcino ruins with a device that let me see augmented content from the past.</strong>",
                            "<span>1</span><span>Strongly disagree</span>",
                            "<span>2</span><span>Disagree somewhat</span>",
                            "<span>3</span><span>Neither agree nor disagree</span>",
                            "<span>4</span><span>Agree somewhat</span>",
                            "<span>5</span><span>Strongly agree</span>",
                            "<strong>8.2 I like the idea of using this kind of device that adds augmented imagery to a historical site during a visit.</strong>",
                            "<span>1</span><span>Strongly disagree</span>",
                            "<span>2</span><span>Disagree somewhat</span>",
                            "<span>3</span><span>Neither agree nor disagree</span>",
                            "<span>4</span><span>Agree somewhat</span>",
                            "<span>5</span><span>Strongly agree</span>",
                            "<strong>8.3 I would like to try using the technology in visits to other heritage sites or museums.</strong>",
                            "<span>1</span><span>Strongly disagree</span>",
                            "<span>2</span><span>Disagree somewhat</span>",
                            "<span>3</span><span>Neither agree nor disagree</span>",
                            "<span>4</span><span>Agree somewhat</span>",
                            "<span>5</span><span>Strongly agree</span>",
                            "<strong>8.4 The device was a useful mechanism to help me look for augmented objects.</strong>",
                            "<span>1</span><span>Strongly disagree</span>",
                            "<span>2</span><span>Disagree somewhat</span>",
                            "<span>3</span><span>Neither agree nor disagree</span>",
                            "<span>4</span><span>Agree somewhat</span>",
                            "<span>5</span><span>Strongly agree</span>",
                            "<strong>8.5 I could easily move the device to explore the full size of the augmented objects found.</strong>",
                            "<span>1</span><span>Strongly disagree</span>",
                            "<span>2</span><span>Disagree somewhat</span>",
                            "<span>3</span><span>Neither agree nor disagree</span>",
                            "<span>4</span><span>Agree somewhat</span>",
                            "<span>5</span><span>Strongly agree</span>",
                            "<strong>8.6 I found natural the interaction between the augmented content and the environment.</strong>",
                            "<span>1</span><span>Strongly disagree</span>",
                            "<span>2</span><span>Disagree somewhat</span>",
                            "<span>3</span><span>Neither agree nor disagree</span>",
                            "<span>4</span><span>Agree somewhat</span>",
                            "<span>5</span><span>Strongly agree</span>",
                            "<strong>8.7 I found the idea of holding a device to be adequate in the exploration activities.</strong>",
                            "<span>1</span><span>Strongly disagree</span>",
                            "<span>2</span><span>Disagree somewhat</span>",
                            "<span>3</span><span>Neither agree nor disagree</span>",
                            "<span>4</span><span>Agree somewhat</span>",
                            "<span>5</span><span>Strongly agree</span>",
                            "<strong>8.8 Using this device distracts me and shifts my focus away from the museum.</strong>",
                            "<span>1</span><span>Not interested at all</span>",
                            "<span>2</span><span>Somewhat interested</span>",
                            "<span>3</span><span>Fairly interested</span>",
                            "<span>4</span><span>Very interested</span>",
                            "<span>5</span><span>Hardly interested</span>",
                            "<strong>8.9 When using this device I felt present in the mix of the physical environment, digital objects and characters.</strong>",
                            "<span>1</span><span>Strongly disagree</span>",
                            "<span>2</span><span>Disagree somewhat</span>",
                            "<span>3</span><span>Neither agree nor disagree</span>",
                            "<span>4</span><span>Agree somewhat</span>",
                            "<span>5</span><span>Strongly agree</span>",
                            "<strong>8.10 As a device holder, I was able to visit without distraction.</strong>",
                            "<span>1</span><span>Strongly disagree</span>",
                            "<span>2</span><span>Disagree somewhat</span>",
                            "<span>3</span><span>Neither agree nor disagree</span>",
                            "<span>4</span><span>Agree somewhat</span>",
                            "<span>5</span><span>Strongly agree</span>",
                            "<strong>8.11 How was your emotion as device holder?</strong>",
                            "<span>1</span><span> Sad</span>",
                            "<span>2</span><span> Bored</span>",
                            "<span>3</span><span> Neutral</span>",
                            "<span>4</span><span> Motivated</span>",
                            "<span>5</span><span> Excited</span>",
                            "<strong>8.12 I like exploring the remains of Barcino using the device.</strong>",
                            "<span>1</span><span>Strongly disagree</span>",
                            "<span>2</span><span>Disagree somewhat</span>",
                            "<span>3</span><span>Neither agree nor disagree</span>",
                            "<span>4</span><span>Agree somewhat</span>",
                            "<span>5</span><span>Strongly agree</span>",
                            "<strong>8.13 I like how the device augments the physical space with the digital content.</strong>",
                            "<span>1</span><span>Strongly disagree</span>",
                            "<span>2</span><span>Disagree somewhat</span>",
                            "<span>3</span><span>Neither agree nor disagree</span>",
                            "<span>4</span><span>Agree somewhat</span>",
                            "<span>5</span><span>Strongly agree</span>",
                            "<strong>8.14 I had fun during the augmented reality visit.</strong>",
                            "<span>1</span><span>Strongly disagree</span>",
                            "<span>2</span><span>Disagree somewhat</span>",
                            "<span>3</span><span>Neither agree nor disagree</span>",
                            "<span>4</span><span>Agree somewhat</span>",
                            "<span>5</span><span>Strongly agree</span>",
                            "<strong>8.15 I believe the visit creates a sociable experience.</strong>",
                            "<span>1</span><span>Strongly disagree</span>",
                            "<span>2</span><span>Disagree somewhat</span>",
                            "<span>3</span><span>Neither agree nor disagree</span>",
                            "<span>4</span><span>Agree somewhat</span>",
                            "<span>5</span><span>Strongly agree</span>",
                            "<strong>8.16 I would recommend the device for educational and tourism purposes.</strong>",
                            "<span>1</span><span>Strongly disagree</span>",
                            "<span>2</span><span>Disagree somewhat</span>",
                            "<span>3</span><span>Neither agree nor disagree</span>",
                            "<span>4</span><span>Agree somewhat</span>",
                            "<span>5</span><span>Strongly agree</span>",
                            "<strong>8.17 It was easy to use the device.</strong>",
                            "<span>1</span><span>Strongly disagree</span>",
                            "<span>2</span><span>Disagree somewhat</span>",
                            "<span>3</span><span>Neither agree nor disagree</span>",
                            "<span>4</span><span>Agree somewhat</span>",
                            "<span>5</span><span>Strongly agree</span>",
                            "<strong>8.18 Adding the digital content to the physical remains added value to my visit.</strong>",
                            "<span>1</span><span>Strongly disagree</span>",
                            "<span>2</span><span>Disagree somewhat</span>",
                            "<span>3</span><span>Neither agree nor disagree</span>",
                            "<span>4</span><span>Agree somewhat</span>",
                            "<span>5</span><span>Strongly agree</span>",
                            "<strong>8.19 If I were in a group of five visitors, where we all hold our own device, I would feel connected to the others.</strong>",
                            "<span>1</span><span>Strongly disagree</span>",
                            "<span>2</span><span>Disagree somewhat</span>",
                            "<span>3</span><span>Neither agree nor disagree</span>",
                            "<span>4</span><span>Agree somewhat</span>",
                            "<span>5</span><span>Strongly agree</span>",
                            "<strong>8.20 If I were in a group of five visitors,where there is only one device holder, I would feel left out of the experience.</strong>",
                            "<span>1</span><span>Strongly disagree</span>",
                            "<span>2</span><span>Disagree somewhat</span>",
                            "<span>3</span><span>Neither agree nor disagree</span>",
                            "<span>4</span><span>Agree somewhat</span>",
                            "<span>5</span><span>Strongly agree</span>",
                            "<strong>8.21 Do you think the time of your experience during the visit using the device was sufficent?</strong>",
                            "<span>1</span><span>Strongly disagree</span>",
                            "<span>2</span><span>Disagree somewhat</span>",
                            "<span>3</span><span>Neither agree nor disagree</span>",
                            "<span>4</span><span>Agree somewhat</span>",
                            "<span>5</span><span>Strongly agree</span>",
                            "<strong>8.22 Do you think the device helps you better understand the content of ancient time?</strong>",
                            "<span>1</span><span>Strongly disagree</span>",
                            "<span>2</span><span>Disagree somewhat</span>",
                            "<span>3</span><span>Neither agree nor disagree</span>",
                            "<span>4</span><span>Agree somewhat</span>",
                            "<span>5</span><span>Strongly agree</span>",
                            "<strong>8.23 During the visit, you walked through multiple locations related to the ancient culture. Which places do you remember?</strong>",
                            "NOTE: Choose all relevant answers for questions numbers 8.23 - 8.25.",
                            "Forum",
                            "Library",
                            "Laundry or Fullonica",
                            "Garum",
                            "Roman baths",
                            "<strong>8.24 While walking through the cultural heritage site, you found some interactive activities. What actions did you execute?</strong>",
                            "Grab",
                            "Zoom",
                            "Release",
                            "Explore",
                            "Hang",
                            "During your visit to the museum, you have seen some representative elements from the Barcino culture.",
                            "<strong>8.25 Choose the material you discovered during your visit?</strong>",
                            "A person",
                            "Stick/ to string the cloths",
                            "Fish",
                            "Pot (dolium)",
                            "Stick to prepare Garum sauce",
                            "Salt",
                            "Herbs",
                            "<strong>8.26 How many ingredients were required to prepare the Garum sauce?</strong>",
                            "Please consider these questions during your visit the role you were as a non-device holder",
                            "<strong>9. During your visit as non-device holder, did you miss having the device in your possession so that you could explore it in a better way?</strong>",
                            "<span>1</span><span>Strongly disagree</span>",
                            "<span>2</span><span>Disagree somewhat</span>",
                            "<span>3</span><span>Neither agree nor disagree</span>",
                            "<span>4</span><span>Agree somewhat</span>",
                            "<span>5</span><span>Strongly agree</span>",
                            "<strong>9.1 During your visit as non-device holder, did you find natural the interaction between the augmented content and the environment?</strong>",
                            "<span>1</span><span>Strongly disagree</span>",
                            "<span>2</span><span>Disagree somewhat</span>",
                            "<span>3</span><span>Neither agree nor disagree</span>",
                            "<span>4</span><span>Agree somewhat</span>",
                            "<span>5</span><span>Strongly agree</span>",
                            "<strong>9.2 As a partner of the device holder did you feel distracted from focusing on the museum?</strong>",
                            "<span>1</span><span>Strongly disagree</span>",
                            "<span>2</span><span>Disagree somewhat</span>",
                            "<span>3</span><span>Neither agree nor disagree</span>",
                            "<span>4</span><span>Agree somewhat</span>",
                            "<span>5</span><span>Strongly agree</span>",
                            "<strong>9.3 During your visit as non-device holder, did you feel eager to hold the device when you saw your partner holding the device?</strong>",
                            "<span>1</span><span>Strongly disagree</span>",
                            "<span>2</span><span>Disagree somewhat</span>",
                            "<span>3</span><span>Neither agree nor disagree</span>",
                            "<span>4</span><span>Agree somewhat</span>",
                            "<span>5</span><span>Strongly agree</span>",
                            "Loza Tadesse, Paul Hine, Narcis Pares, University Pompeu Fabra – UPF-WaS 2021-2022"
                        ];

var questions_spa = [
                            "Cuestionario",
                            "<strong>1. Con qué género te identificas más?</strong>",
                            "Mujer",
                            "Hombre",
                            "Otros",
                            "<strong>2. Elija su grupo de edad.</strong>",
                            "10–19 años",
                            "20–29 años",
                            "30–39 años",
                            "40 - 49 años",
                            "50 - 59 años",
                            "60 - 69 años",
                            "70+ años",
                            "<strong>3. Por favor, escoja su nacionalidad.</strong>",
                            "Esta experiencia se basa en una exposición en el Museo de Historia de Barcelona (MUHBA).",
                            "<strong>4. Has estado alguna vez en esta exposición?</strong>",
                            "Sí",
                            "<strong>5. Alguna vez has estado en un museo interactivo?</strong>",
                            "Un museo con exhibiciones interactivas permite a sus visitantes interactuar con los artículos y actividades en exhibición o interactuar con los contenidos. En lugar de simplemente leer la información publicada, los visitantes pueden participar activamente a través de la experiencia práctica.",
                            "Sí",
                            "<strong>6. Ha participado en un estudio en el que se utilizase un dispositivo similar?</strong>",
                            "Sí",
                            "<strong>7. Cual es su preferencia respecto a los museos?</strong>",
                            "<strong>7.1 Estoy interesado/a en historia</strong>",
                            "<span>1</span><span>No interesado/a en absoluto</span>",
                            "<span>2</span><span>Algo interesado/a</span>",
                            "<span>3</span><span>Bastante interesado/a</span>",
                            "<span>4</span><span>Muy interesado/a</span>",
                            "<span>5</span><span>Altamente interesado/a</span>",
                            "<strong>7.2 Estoy interesado/a en arqueología</strong>",
                            "<span>1</span><span>No interesado/a en absoluto</span>",
                            "<span>2</span><span>Algo interesado/a</span>",
                            "<span>3</span><span>Bastante interesado/a</span>",
                            "<span>4</span><span>Muy interesado/a</span>",
                            "<span>5</span><span>Altamente interesado/a</span>",
                            "<strong>7.3 Cuando voy a museos u otros sitios del patrimonio cultural, me gusta tener un guía turístico.</strong>",
                            "<span>1</span><span>Muy en desacuerdo</span>",
                            "<span>2</span><span>Algo en desacuerdo</span>",
                            "<span>3</span><span>Ni de acuerdo ni en desacuerdo</span>",
                            "<span>4</span><span>Un poco de acuerdo</span>",
                            "<span>5</span><span>Completamente de acuerdo</span>",
                            "<strong>7.4 Cuando voy a museos u otros sitios del patrimonio cultural, me gusta tener interacción usando diferentes dispositivos.</strong>",
                            "<span>1</span><span>Muy en desacuerdo</span>",
                            "<span>2</span><span>Algo en desacuerdo</span>",
                            "<span>3</span><span>Ni de acuerdo ni en desacuerdo</span>",
                            "<span>4</span><span>Un poco de acuerdo</span>",
                            "<span>5</span><span>Completamente de acuerdo</span>",
                            "<strong>8. Durante su visita a Barcino, sostuvo un dispositivo especial que le permitió ver el pasado.</strong>",
                            "<strong>8.1 Me gustó explorar las ruinas de Barcino con un dispositivo que me permitía ver contenido aumentado del pasado.</strong>",
                            "<span>1</span><span>Muy en desacuerdo</span>",
                            "<span>2</span><span>Algo en desacuerdo</span>",
                            "<span>3</span><span>Ni de acuerdo ni en desacuerdo</span>",
                            "<span>4</span><span>Un poco de acuerdo</span>",
                            "<span>5</span><span>Completamente de acuerdo</span>",
                            "<strong>8.2 Me gusta la idea de usar este tipo de dispositivo que añade imágenes aumentadas a un sitio histórico durante una visita.</strong>",
                            "<span>1</span><span>Muy en desacuerdo</span>",
                            "<span>2</span><span>Algo en desacuerdo</span>",
                            "<span>3</span><span>Ni de acuerdo ni en desacuerdo</span>",
                            "<span>4</span><span>Un poco de acuerdo</span>",
                            "<span>5</span><span>Completamente de acuerdo</span>",
                            "<strong>8.3 Me gustaría intentar utilizar la tecnología en visitas a otros sitios patrimoniales o museos.</strong>",
                            "<span>1</span><span>Muy en desacuerdo</span>",
                            "<span>2</span><span>Algo en desacuerdo</span>",
                            "<span>3</span><span>Ni de acuerdo ni en desacuerdo</span>",
                            "<span>4</span><span>Un poco de acuerdo</span>",
                            "<span>5</span><span>Completamente de acuerdo</span>",
                            "<strong>8.4 El dispositivo fue un mecanismo útil para ayudarme a buscar objetos aumentados.</strong>",
                            "<span>1</span><span>Muy en desacuerdo</span>",
                            "<span>2</span><span>Algo en desacuerdo</span>",
                            "<span>3</span><span>Ni de acuerdo ni en desacuerdo</span>",
                            "<span>4</span><span>Un poco de acuerdo</span>",
                            "<span>5</span><span>Completamente de acuerdo</span>",
                            "<strong>8.5 Podía mover fácilmente el dispositivo para explorar el tamaño completo de los objetos aumentados encontrados.</strong>",
                            "<span>1</span><span>Muy en desacuerdo</span>",
                            "<span>2</span><span>Algo en desacuerdo</span>",
                            "<span>3</span><span>Ni de acuerdo ni en desacuerdo</span>",
                            "<span>4</span><span>Un poco de acuerdo</span>",
                            "<span>5</span><span>Completamente de acuerdo</span>",
                            "<strong>8.6 Encontré natural la interacción entre el contenido aumentado y el entorno.</strong>",
                            "<span>1</span><span>Muy en desacuerdo</span>",
                            "<span>2</span><span>Algo en desacuerdo</span>",
                            "<span>3</span><span>Ni de acuerdo ni en desacuerdo</span>",
                            "<span>4</span><span>Un poco de acuerdo</span>",
                            "<span>5</span><span>Completamente de acuerdo</span>",
                            "<strong>8.7 Encontré la idea de sostener un dispositivo adecuada en las actividades de exploración.</strong>",
                            "<span>1</span><span>Muy en desacuerdo</span>",
                            "<span>2</span><span>Algo en desacuerdo</span>",
                            "<span>3</span><span>Ni de acuerdo ni en desacuerdo</span>",
                            "<span>4</span><span>Un poco de acuerdo</span>",
                            "<span>5</span><span>Completamente de acuerdo</span>",
                            "<strong>8.8 El uso de este dispositivo me ha distraido y desvía mi atención del museo.</strong>",
                            "<span>1</span><span>No interesado/a en absoluto</span>",
                            "<span>2</span><span>Algo interesado/a</span>",
                            "<span>3</span><span>Bastante interesado/a</span>",
                            "<span>4</span><span>Muy interesado/a</span>",
                            "<span>5</span><span>Altamente interesado/a</span>",
                            "<strong>8.9 Al usar este dispositivo, me sentí presente en la mezcla del entorno físico, los objetos digitales y los personajes.</strong>",
                            "<span>1</span><span>Muy en desacuerdo</span>",
                            "<span>2</span><span>Algo en desacuerdo</span>",
                            "<span>3</span><span>Ni de acuerdo ni en desacuerdo</span>",
                            "<span>4</span><span>Un poco de acuerdo</span>",
                            "<span>5</span><span>Completamente de acuerdo</span>",
                            "<strong>8.10 Como portador del dispositivo, pude visitar el museo sin distracciones.</strong>",
                            "<span>1</span><span>Muy en desacuerdo</span>",
                            "<span>2</span><span>Algo en desacuerdo</span>",
                            "<span>3</span><span>Ni de acuerdo ni en desacuerdo</span>",
                            "<span>4</span><span>Un poco de acuerdo</span>",
                            "<span>5</span><span>Completamente de acuerdo</span>",
                            "<strong>8.11 Como te has sentido como portador del dispositivo?</strong>",
                            "<span>1</span><span>Triste</span>",
                            "<span>2</span><span>Aburrido</span>",
                            "<span>3</span><span>Neutral</span>",
                            "<span>4</span><span>Motivado</span>",
                            "<span>5</span><span>Emocionado</span>",
                            "<strong>8.12 Me ha gustado explorar los restos de Barcino usando el dispositivo.</strong>",
                            "<span>1</span><span>Muy en desacuerdo</span>",
                            "<span>2</span><span>Algo en desacuerdo</span>",
                            "<span>3</span><span>Ni de acuerdo ni en desacuerdo</span>",
                            "<span>4</span><span>Un poco de acuerdo</span>",
                            "<span>5</span><span>Completamente de acuerdo</span>",
                            "<strong>8.13 Me gusta cómo el dispositivo aumenta el espacio físico con el contenido digital.</strong>",
                            "<span>1</span><span>Muy en desacuerdo</span>",
                            "<span>2</span><span>Algo en desacuerdo</span>",
                            "<span>3</span><span>Ni de acuerdo ni en desacuerdo</span>",
                            "<span>4</span><span>Un poco de acuerdo</span>",
                            "<span>5</span><span>Completamente de acuerdo</span>",
                            "<strong>8.14 Me he divertido durante la visita de realidad aumentada.</strong>",
                            "<span>1</span><span>Muy en desacuerdo</span>",
                            "<span>2</span><span>Algo en desacuerdo</span>",
                            "<span>3</span><span>Ni de acuerdo ni en desacuerdo</span>",
                            "<span>4</span><span>Un poco de acuerdo</span>",
                            "<span>5</span><span>Completamente de acuerdo</span>",
                            "<strong>8.15 Creo que la visita crea una experiencia sociable.</strong>",
                            "<span>1</span><span>Muy en desacuerdo</span>",
                            "<span>2</span><span>Algo en desacuerdo</span>",
                            "<span>3</span><span>Ni de acuerdo ni en desacuerdo</span>",
                            "<span>4</span><span>Un poco de acuerdo</span>",
                            "<span>5</span><span>Completamente de acuerdo</span>",
                            "<strong>8.16 Recomendaría el dispositivo con fines educativos y turísticos.</strong>",
                            "<span>1</span><span>Muy en desacuerdo</span>",
                            "<span>2</span><span>Algo en desacuerdo</span>",
                            "<span>3</span><span>Ni de acuerdo ni en desacuerdo</span>",
                            "<span>4</span><span>Un poco de acuerdo</span>",
                            "<span>5</span><span>Completamente de acuerdo</span>",
                            "<strong>8.17 El dispositivo fué fácil de usar.</strong>",
                            "<span>1</span><span>Muy en desacuerdo</span>",
                            "<span>2</span><span>Algo en desacuerdo</span>",
                            "<span>3</span><span>Ni de acuerdo ni en desacuerdo</span>",
                            "<span>4</span><span>Un poco de acuerdo</span>",
                            "<span>5</span><span>Completamente de acuerdo</span>",
                            "<strong>8.18 Agregar el contenido digital al físico sigue siendo un valor agregado para mi visita.</strong>",
                            "<span>1</span><span>Muy en desacuerdo</span>",
                            "<span>2</span><span>Algo en desacuerdo</span>",
                            "<span>3</span><span>Ni de acuerdo ni en desacuerdo</span>",
                            "<span>4</span><span>Un poco de acuerdo</span>",
                            "<span>5</span><span>Completamente de acuerdo</span>",
                            "<strong>8.19 Si estuviera en un grupo de cinco visitantes, donde todos tuviéramos nuestro propio dispositivo, me sentiría más conectado con los demás.</strong>",
                            "<span>1</span><span>Muy en desacuerdo</span>",
                            "<span>2</span><span>Algo en desacuerdo</span>",
                            "<span>3</span><span>Ni de acuerdo ni en desacuerdo</span>",
                            "<span>4</span><span>Un poco de acuerdo</span>",
                            "<span>5</span><span>Completamente de acuerdo</span>",
                            "<strong>8.20 Si estuviera en un grupo de cinco visitantes, donde solo hay un soporte para el dispositivo, me sentiría excluido de la experiencia.</strong>",
                            "<span>1</span><span>Muy en desacuerdo</span>",
                            "<span>2</span><span>Algo en desacuerdo</span>",
                            "<span>3</span><span>Ni de acuerdo ni en desacuerdo</span>",
                            "<span>4</span><span>Un poco de acuerdo</span>",
                            "<span>5</span><span>Completamente de acuerdo</span>",
                            "<strong>8.21 Crees que el tiempo de tu experiencia durante la visita con el dispositivo fue suficiente?</strong>",
                            "<span>1</span><span>Muy en desacuerdo</span>",
                            "<span>2</span><span>Algo en desacuerdo</span>",
                            "<span>3</span><span>Ni de acuerdo ni en desacuerdo</span>",
                            "<span>4</span><span>Un poco de acuerdo</span>",
                            "<span>5</span><span>Completamente de acuerdo</span>",
                            "<strong>8.22 Crees que el dispositivo te ayuda a comprender mejor el contenido de la antigüedad?</strong>",
                            "<span>1</span><span>Muy en desacuerdo</span>",
                            "<span>2</span><span>Algo en desacuerdo</span>",
                            "<span>3</span><span>Ni de acuerdo ni en desacuerdo</span>",
                            "<span>4</span><span>Un poco de acuerdo</span>",
                            "<span>5</span><span>Completamente de acuerdo</span>",
                            "<strong>8.23 Durante la visita, caminó por múltiples lugares relacionados con la cultura ancestral. ¿Qué lugares recuerdas?</strong>",
                            "NOTA: Elija todas las respuestas relevantes para los números de las preguntas 8.23 - 8.25.",
                            "Forum",
                            "Biblioteca",
                            "Lavandería o Fullonica",
                            "Garum",
                            "Baños romanos",
                            "<strong>8.24 Mientras caminaba por el sitio del patrimonio cultural, encontró algunas actividades interactivas. ¿Qué acciones ejecutó?</strong>",
                            "Coger",
                            "Zoom",
                            "Dejar",
                            "Explorar",
                            "Colgar",
                            "Durante su visita al museo, ha visto algunos elementos representativos de la cultura Barcino.",
                            "<strong>8.25 Elija el material que descubrió durante su visita?</strong>",
                            "Una persona",
                            "Palo para ensartar la ropa",
                            "Pescado",
                            "Maceta",
                            "Palo para preparar la salsa de Garum",
                            "Sal",
                            "Hierbas",
                            "<strong>8.26 Cuántos ingredientes se necesitaron para preparar la salsa Garum?</strong>",
                            "Por favor, considera las siguientes preguntas pensando en la parte de la visita que has sido portador del dispositivo.",
                            "<strong>9. Durante su visita como no titular del dispositivo, ¿echó de menos tener el dispositivo en su poder para poder explorarlo de una mejor manera?</strong>",
                            "<span>1</span><span>Muy en desacuerdo</span>",
                            "<span>2</span><span>Algo en desacuerdo</span>",
                            "<span>3</span><span>Ni de acuerdo ni en desacuerdo</span>",
                            "<span>4</span><span>Un poco de acuerdo</span>",
                            "<span>5</span><span>Completamente de acuerdo</span>",
                            "<strong>9.1 Durante su visita como no titular del dispositivo, ¿le pareció natural la interacción entre el contenido aumentado y el entorno?</strong>",
                            "<span>1</span><span>Muy en desacuerdo</span>",
                            "<span>2</span><span>Algo en desacuerdo</span>",
                            "<span>3</span><span>Ni de acuerdo ni en desacuerdo</span>",
                            "<span>4</span><span>Un poco de acuerdo</span>",
                            "<span>5</span><span>Completamente de acuerdo</span>",
                            "<strong>9.2 Como socio del titular del dispositivo, ¿se sintió distraído de concentrarse en el museo?</strong>",
                            "<span>1</span><span>Muy en desacuerdo</span>",
                            "<span>2</span><span>Algo en desacuerdo</span>",
                            "<span>3</span><span>Ni de acuerdo ni en desacuerdo</span>",
                            "<span>4</span><span>Un poco de acuerdo</span>",
                            "<span>5</span><span>Completamente de acuerdo</span>",
                            "<strong>9.3 Durante su visita como no titular del dispositivo, ¿se sintió ansioso por sostener el dispositivo cuando vio a su compañero sosteniendo el dispositivo?</strong>",
                            "<span>1</span><span>Muy en desacuerdo</span>",
                            "<span>2</span><span>Algo en desacuerdo</span>",
                            "<span>3</span><span>Ni de acuerdo ni en desacuerdo</span>",
                            "<span>4</span><span>Un poco de acuerdo</span>",
                            "<span>5</span><span>Completamente de acuerdo</span>",
                            "Loza Tadesse, Paul Hine, Narcis Pares, Universidad Pompeu Fabra – UPF-WaS 2021-2022"
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

var currentLanguage = "english";

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".flag-language-brit").addEventListener("click", handleChangeLanguageBritish);
    document.querySelector(".flag-language-spa").addEventListener("click", handleChangeLanguageSpanish);

    var next1 = document.querySelector("#l-7");
    var next2 = document.querySelector("#l-14");
    var next3 = document.querySelector("#l-26");
    var next4 = document.querySelector("#l-233")

    if (next1 != null) {
        current_page = 0;
    }

    if (next2 != null) {
        current_page = 1;
    }

    if (next3 != null) {
        current_page = 2;
    }

    if (next4 != null) {
        current_page = 3;
    }

    currentLanguage = document.querySelector("#language-id").innerHTML;
    checkLanguage(currentLanguage);

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
    document.querySelector("#submit-questions-real").addEventListener("click", handleSubmitData);
    document.querySelector("#submit-questions-real").style.display = "none";
});

function checkLanguage() {
    if (currentLanguage === "english") {
        changeLanguage("english");
    } else if (currentLanguage === "spanish") {
        changeLanguage("spanish");
    }
}

function handleChangeLanguageBritish() {
    changeLanguage("british");
    document.querySelector("#language-id").innerHTML = "english";
    currentLanguage = "english";
}

function handleChangeLanguageSpanish() {
    changeLanguage("spanish");
    document.querySelector("#language-id").innerHTML = "spanish";
    currentLanguage = "spanish";
}

function changeLanguage(language) {
    var elements = [];
    var i = 1;

    for (; i < 300; i++) {
        var sentence = document.querySelector("#l-" + i.toString());
        
        if (sentence != null) {
            elements.push(sentence);
        }
    }

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
        } else if (current_page == 3) {
            for (element in elements) {
                elements[element].innerHTML = questions_eng[element];
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
        } else if (current_page == 3) {
            for (element in elements) {
                elements[element].innerHTML = questions_spa[element];
            }
        }
    }
}

function countRadioChecked(elements) {
    var count = 0;

    for (radioElement of elements) {
        if (radioElement.checked) {
            count++;
        }
    }
    return count - 1;
}

function checkCheckBoxLastQuestion(elements) {
    var counts = []
    counts.push(0);
    counts.push(0);
    counts.push(0);

    for (element of elements) {
        var checkBox = element.firstElementChild.firstElementChild;

        if (checkBox.name == "33") {
            if (checkBox.checked) {
                counts[0]++;
            }
        } else if (checkBox.name == "34") {
            if (checkBox.checked) {
                counts[1]++;
            }
        } else if (checkBox.name == "35") {
            if (checkBox.checked) {
                counts[2]++;
            }
        }
    }

    if (counts[0] == 0 || counts[1] == 0 || counts[2] == 0) {
        return false;
    }
    return true;
}

function checkIfAnswered() {
    var group1 = document.querySelector(".group-1");
    var group2 = document.querySelector(".group-2");
    var group3 = document.querySelector(".group-3");
    var group4 = document.querySelector(".group-4");

    var radioButtons = document.querySelectorAll('input[type="radio"]');
    var minimumChecks = 0;

    if (group1.style.display === "block") {
        minimumChecks = 5;
    } else if (group2.style.display === "block") {
        minimumChecks = 16;
    } else if (group3.style.display === "block") {
        minimumChecks = 29;
    } else if (group4.style.display === "block") {
        var checkBoxElements = group4.getElementsByClassName("checkbox");
        if (!checkCheckBoxLastQuestion(checkBoxElements)) {
            return false;
        }
        minimumChecks = 35;
    }

    if (countRadioChecked(radioButtons) !== minimumChecks) {
        return false;
    }

    return true;
}

function handleSubmitData() {
    var group1 = document.querySelector(".group-1");
    var group2 = document.querySelector(".group-2");
    var group3 = document.querySelector(".group-3");
    var group4 = document.querySelector(".group-4");

    var checkLastGroup = document.querySelector("#l-257");
    checkLanguage();

    if (checkIfAnswered() != true) {
        alert("Please, answer all the questions!");
        checkLastGroup.value = "NotCorrect";
        return;
    }

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
        checkLastGroup.value = "Correct";
    }
}