$(document).ready(function () { // Valide l'utilisateur lors de la connection

    var statut = false;
    var user = "1";
    var password = "1";
    var connexion = document.getElementById("connex");

    connexion.addEventListener("click", function () {
        validate();
    });

    function validate() {
        var user_input = document.getElementById("email").value;
        var password_input = document.getElementById("password").value;

        if (user_input == user && password_input === password) {
            window.location = ("main.html");
            console.log("yes");
            statut = true;
        } else {
            window.alert("Mauvais nom d'utilisateur ou mot de passe");
            statut = false;
        }
    }
});

function addMyListener() {
    $('.boxclose').click(function () {
        $(this).closest('li').remove();
    });

    // text-decoration: line-through;
    $(".checkbox").prop("onclick", null).off("click");
    $(".checkbox").click(function (event) {

        var name = $(this).attr("name");
        // console.log("salut" + name);

        $("#n" + name).toggleClass("checked");
    });
}

addMyListener();

$('#add').click(function () { // Ajoute un item a la liste
    var listvalue = $('#textbox').val();
    var fakeConteur = listvalue + parseInt(Math.random() * 1000);
    $("#textbox").val("");
    $('#list').append('<li><button type="button" class="close boxclose">&times;</button><input type="checkbox" name="' + fakeConteur + '" id="c' + fakeConteur + '" class="checkbox"/><label for="c' + fakeConteur + '" class="uncheck" id="n' + fakeConteur + '">' + listvalue + '</label></li>');

    addMyListener();
});

$('#textbox').keypress(function (event) { // Ajoute un item a la liste onkeypress
    if (event.which === 13) {
        var listvalue = $('#textbox').val();
        var fakeConteur = listvalue + parseInt(Math.random() * 1000);
        $('#textbox').val("");
        $('#list').append('<li><button type="button" class="close boxclose">&times;</button><input type="checkbox" name="' + fakeConteur + '" id="c' + fakeConteur + '" class="checkbox"/><label for="c' + fakeConteur + '" class="uncheck" id="n' + fakeConteur + '">' + listvalue + '</label></li>');

        addMyListener();
    }
});

$('.effaceTout').click(function () { // Efface la liste 
    $('li').remove();
});



(function() {  // Boucle a travers les checkboxes

    var boxes = document.querySelectorAll("input[type='checkbox']");

    for (var i = 0; i < boxes.length; i++) {
        var box = boxes[i];
        if (box.hasAttribute("store")) {
            setupBox(box);
        }
    }
    
    function setupBox(box) { // Stocke les checkbox cochez dans le localStorage
        var storageId = box.getAttribute("store");
        var oldVal    = localStorage.getItem(storageId);
        console.log(oldVal);
        box.checked = oldVal === "true" ? true : false;
        if(box.checked)
                $("#n" + storageId.replace('checkbox', '')).toggleClass("checked");

        box.addEventListener("change", function() {
            localStorage.setItem(storageId, this.checked); 
        });

        $('.js-clear').on('click', function() { // Vide le localStorage
          console.log('clear');
          localStorage.removeItem(storageId);
          window.location.reload();
        }); 

    }


})();

