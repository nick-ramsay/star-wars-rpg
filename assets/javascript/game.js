$(document).ready(function () {
    function newGame() {
        var obiWan = {
            name: "Obi Wan",
            healthPoints: 120, //Required attribute
            attackCount: 0,
            originalAttackPower: 6,
            currentAttackPower: 6, //Required atribute... need to multiply
            counterAttackPower: 10
        };

        var luke = {
            name: "Luke",
            healthPoints: 100, //Required attribute
            attackCount: 0,
            originalAttackPower: 6,
            currentAttackPower: 8, //Required atribute
            counterAttackPower: 12
        };

        var darthSidious = {
            name: "Darth Sidious",
            healthPoints: 150, //Required attribute
            attackCount: 0,
            originalAttackPower: 6,
            currentAttackPower: 6, //Required atribute
            counterAttackPower: 10
        };

        var darthMaul = {
            name: "Darth Maul",
            healthPoints: 180, //Required attribute
            attackCount: 0,
            originalAttackPower: 5,
            currentAttackPower: 5, //Required atribute
            counterAttackPower: 20
        };

        character = {
            obiWan: obiWan,
            luke: luke,
            darthSidious: darthSidious,
            darthMaul: darthMaul
        };

        userCharacter = "";
        currentEnemy = "";
    };

    var character;
    var userCharacter;
    var currentEnemy;

    var winCount = 0;
    var lossCount = 0;

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
        if (character[userCharacter].healthPoints >= 0) {
            if (userCharacter !== "" && currentEnemy !== "") {
                character[currentEnemy].healthPoints = character[currentEnemy].healthPoints - character[userCharacter].currentAttackPower;
                character[userCharacter].attackCount += 1;
                character[userCharacter].currentAttackPower = character[userCharacter].currentAttackPower + (character[userCharacter].originalAttackPower * character[userCharacter].attackCount);
                character[userCharacter].healthPoints = character[userCharacter].healthPoints - character[currentEnemy].counterAttackPower;
                pageContent();
                console.log(currentEnemy);
                if (character[currentEnemy].healthPoints < 0) {
                    winCount++;
                    htmlID = "#" + currentEnemy;
                    $(htmlID).remove();
                    currentEnemy = "";
                    htmlID = "";
                    console.log(currentEnemy);
                }//Action to be taken when current enmy is defeated
            }
        }
        if (character[userCharacter].healthPoints <= 0) {
            alert("Game over! Try again!");
            lossCount++;
            $(".character").prependTo("#playerOptions");
            newGame();
            pageContent();
        }
    })

    function pageContent() {
        $("#obiWanHealth").text(character.obiWan.healthPoints);
        $("#lukeHealth").text(character.luke.healthPoints);
        $("#sidiousHealth").text(character.darthSidious.healthPoints);
        $("#maulHealth").text(character.darthMaul.healthPoints);
    };

    window.onload = newGame();
    window.onload = pageContent();
})
