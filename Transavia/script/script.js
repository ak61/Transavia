document.addEventListener("DOMContentLoaded", function (event) {

    var button = document.querySelector('#button');
    var content = document.querySelector('#content');

    //    Als javascript niet beschikbaar is wordt de content dus NIET verborgen.
    content.classList.add('hidden');

    //    Wanneer er op de button geklikt wordt voeren we een functie uit.
    button.addEventListener("click", function () {

        //        We schakelen de class .hidden
        content.classList.toggle('hidden');

    });


});
