$(document).ready(function () {
    function newGame() {
        $(".character").remove();
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
        var obiWanDiv = $('<div class="col-md-3 character" id="obiWan" data-character="obiWan"><h3>Obi</h3><p>Health: <span id="obiWanHealth"></span></p></div>');
        $("#playerOptions").prepend(obiWanDiv);
        var lukeDiv = $('<div class="col-md-3 character" id="luke" data-character="luke"><h3>Luke</h3><p>Health: <span id="lukeHealth"></span></p></div>');
        $("#playerOptions").prepend(lukeDiv);
        var darthSidiousDiv = $('<div class="col-md-3 character" id="darthSidious" data-character="darthSidious"><h3>Darth Sidious</h3><p>Health: <span id="darthSidiousHealth"></span></p></div>');
        $("#playerOptions").prepend(darthSidiousDiv);
        var darthMaulDiv = $('<div class="col-md-3 character" id="darthMaul" data-character="darthMaul"><h3>Darth Maul</h3><p>Health: <span id="darthMaulHealth"></span></p></div>');
        $("#playerOptions").prepend(darthMaulDiv);
    };

    var character;
    var userCharacter;
    var currentEnemy;

    var winCount = 0;
    var lossCount = 0;

    var userCharacter = "";
    var enemyCharacter = "";
    
    var enemyHistory = [];
    var finalEnemy;

    $(document).on("click",'.character', function (event) { //Not sure why document is needed, must research more...
        if (userCharacter === "") {
            userCharacter = this.getAttribute("data-character");
            htmlID = "#" + this.id;
            $(htmlID).appendTo("#userCharacter");
            console.log(userCharacter);
            console.log(enemyCharacter);
        }

        else if (userCharacter !== "" && this.getAttribute("data-character") !== userCharacter && finalEnemy === true) {
            currentEnemy = this.getAttribute("data-character");
            enemyHistory.push(this.getAttribute("data-character"));
            if (enemyHistory.length === Object.keys(character).length - 1) {
                finalEnemy = true;
            }; //flags finalEnemy to know when win occurs
            console.log(enemyHistory);
            console.log(enemyHistory.length);
            console.log(Object.keys(character).length);
            console.log(finalEnemy);
            htmlID = "#" + this.id;
            $(htmlID).appendTo("#currentEnemy");
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
        $("#darthSidiousHealth").text(character.darthSidious.healthPoints);
        $("#darthMaulHealth").text(character.darthMaul.healthPoints);
        $("#winCount").text(winCount);
        $("#lossCount").text(lossCount);
    };

    window.onload = newGame();
    window.onload = pageContent();
})
