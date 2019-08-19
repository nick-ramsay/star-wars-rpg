$(document).ready(function () {
    var obiWan = {
        healthPoints: 120, //Required attribute
        attackCount: 0,
        originalAttackPower: 6,
        currentAttackPower: 6, //Required atribute... need to multiply
        counterAttackPower: 10
    };

    var luke = {
        healthPoints: 100, //Required attribute
        attackCount: 0,
        originalAttackPower: 6,
        currentAttackPower: 8, //Required atribute
        counterAttackPower: 12
    };

    var darthSidious = {
        healthPoints: 150, //Required attribute
        attackCount: 0,
        originalAttackPower: 6,
        currentAttackPower: 6, //Required atribute
        counterAttackPower: 10
    };

    var darthMaul = {
        healthPoints: 180, //Required attribute
        attackCount: 0,
        originalAttackPower: 5,
        currentAttackPower: 5, //Required atribute
        counterAttackPower: 20
    };

    var userCharacter;
    var currentEnemy;

    var winCount = 0;
    var lossCount = 0;

    var characters = {
        obiWan: obiWan,
        luke: luke,
        darthSidious: darthSidious,
        darthMaul: darthMaul
    };
    userCharacter = "";
    enemyCharacter = "";


    $(".character").on("click", function (event) {
        if (userCharacter === "") {
            userCharacter = this.getAttribute("data-character");
            htmlID = "#" + this.id;
            $(htmlID).appendTo("#userCharacter");
            console.log(userCharacter);
            console.log(enemyCharacter);
        }

        else if (userCharacter !== "" && this.getAttribute("data-character") !== userCharacter) {
            currentEnemy = this.getAttribute("data-character");
            htmlID = "#" + this.id;
            $(htmlID).appendTo("#currentEnemy");
            console.log(userCharacter);
            console.log(enemyCharacter);
        }
    })

    $("#attack").on("click", function (event) {
        if (characters[userCharacter].healthPoints >= 0) {
            if (userCharacter !== "" && currentEnemy !== "") {
                characters[currentEnemy].healthPoints = characters[currentEnemy].healthPoints - characters[userCharacter].currentAttackPower;
                characters[userCharacter].attackCount += 1;
                characters[userCharacter].currentAttackPower = characters[userCharacter].currentAttackPower + (characters[userCharacter].originalAttackPower * characters[userCharacter].attackCount);
                characters[userCharacter].healthPoints = characters[userCharacter].healthPoints - characters[currentEnemy].counterAttackPower;
                pageContent();
                console.log(currentEnemy);
                if (characters[currentEnemy].healthPoints < 0) {
                    winCount++;
                    htmlID = "#" + currentEnemy;
                    $(htmlID).remove();
                    currentEnemy = "";
                    htmlID = "";
                    console.log(currentEnemy);
                }//Action to be taken when current enmy is defeated
            }
        }
        if (characters[userCharacter].healthPoints <= 0) {
            alert("Game over! Try again!");
            lossCount++;
            $(".character").prependTo("#playerOptions");
            //newGame();
            userCharacter = "";
            currentEnemy = "";
            pageContent();
        }
    })

    function pageContent() {
        $("#obiWanHealth").text(characters.obiWan.healthPoints);
        $("#lukeHealth").text(characters.luke.healthPoints);
        $("#sidiousHealth").text(characters.darthSidious.healthPoints);
        $("#maulHealth").text(characters.darthMaul.healthPoints);
    };

    //window.onload = newGame();
    window.onload = pageContent();
})
