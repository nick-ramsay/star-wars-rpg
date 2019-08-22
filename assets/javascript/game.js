$(document).ready(function () {
    function newGame() {
        $(".character").remove();

        userCharacter = "";
        currentEnemy = "";
        finalEnemy = false;
        enemyHistory = [];

        var obiWan = {
            name: "Obi Wan Kenobi",
            healthPoints: 120, //Required attribute
            attackCount: 0,
            originalAttackPower: 10,
            currentAttackPower: 10, //Required atribute... need to multiply
            counterAttackPower: 20
        };

        var luke = {
            name: "Luke Skywalker",
            healthPoints: 100, //Required attribute
            attackCount: 0,
            originalAttackPower: 9,
            currentAttackPower: 9, //Required atribute
            counterAttackPower: 25
        };

        var darthSidious = {
            name: "Darth Sidious",
            healthPoints: 150, //Required attribute
            attackCount: 0,
            originalAttackPower: 4,
            currentAttackPower: 18, //Required atribute
            counterAttackPower: 12
        };

        var darthMaul = {
            name: "Darth Maul",
            imageSource: "https://vignette.wikia.nocookie.net/battlefront/images/7/7d/Darth_Maul_close-up.png/revision/latest?cb=20181114015145",
            healthPoints: 180, //Required attribute
            attackCount: 0,
            originalAttackPower: 5,
            currentAttackPower: 15, //Required atribute
            counterAttackPower: 10
        };

        character = {
            obiWan: obiWan,
            luke: luke,
            darthSidious: darthSidious,
            darthMaul: darthMaul
        };

        var obiWanDiv = $('<div class="col-md-3 character" id="obiWan" data-character="obiWan"><h3 id="obiWanName"></h3><p>Health: <span id="obiWanHealth"></span></p></div>');
        $("#playerOptions").prepend(obiWanDiv);
        var lukeDiv = $('<div class="col-md-3 character" id="luke" data-character="luke"><h3 id="lukeName"></h3><p>Health: <span id="lukeHealth"></span></p></div>');
        $("#playerOptions").prepend(lukeDiv);
        var darthSidiousDiv = $('<div class="col-md-3 character" id="darthSidious" data-character="darthSidious"><h3 id="darthSidiousName"></h3><p>Health: <span id="darthSidiousHealth"></span></p></div>');
        $("#playerOptions").prepend(darthSidiousDiv);
        var darthMaulDiv = $('<div class="col-md-3 character" id="darthMaul" data-character="darthMaul"><h3 id="darthMaulName"></h3><img id="darthMaulImage" width:"50" height:"100"><p>Health: <span id="darthMaulHealth"></span></p></div>');
        $("#playerOptions").prepend(darthMaulDiv);
    };

    var character;
    var userCharacter;
    var currentEnemy;

    var winCount = 0;
    var lossCount = 0;
    
    var enemyHistory = [];
    var finalEnemy;

    $(document).on("click",'.character', function (event) { //Not sure why document is needed, must research more...
        if (userCharacter === "") {
            $(".character").appendTo("#enemiesAvailable");
            userCharacter = this.getAttribute("data-character");
            htmlID = "#" + this.id;
            $(htmlID).appendTo("#userCharacter");
            console.log(userCharacter);
            console.log(enemyCharacter);
        }

        else if (userCharacter !== "" && currentEnemy === "" && this.getAttribute("data-character") !== userCharacter) {
            currentEnemy = this.getAttribute("data-character");
            console.log(currentEnemy);
            enemyHistory.push(this.getAttribute("data-character"));
            if (enemyHistory.length === Object.keys(character).length - 1) {
                finalEnemy = true;
            }; //flags finalEnemy to know when win occurs
            htmlID = "#" + this.id;
            $(htmlID).appendTo("#currentEnemy");
        }
    })

    $("#attack").on("click", function (event) {
        if (character[userCharacter].healthPoints > 0) {
            if (userCharacter !== "" && currentEnemy !== "") {
                character[currentEnemy].healthPoints = character[currentEnemy].healthPoints - character[userCharacter].currentAttackPower;
                character[userCharacter].attackCount += 1;
                character[userCharacter].currentAttackPower = character[userCharacter].currentAttackPower + (character[userCharacter].originalAttackPower * character[userCharacter].attackCount);
                character[userCharacter].healthPoints = character[userCharacter].healthPoints - character[currentEnemy].counterAttackPower;
                pageContent();
                if (character[userCharacter].healthPoints <= 0) {
                    lossCount++;
                    $(".character").prependTo("#playerOptions");
                    newGame();
                    pageContent();
                    alert("Game over! Try again!");
                } //Action to be taken if attack results in user loss
                else if (character[currentEnemy].healthPoints < 0 && finalEnemy === false) {
                    htmlID = "#" + currentEnemy;
                    $(htmlID).remove();
                    currentEnemy = "";
                    htmlID = "";
                }//Action to be taken when current enmy is defeated but they are not FINAL enemy

                else if (character[currentEnemy].healthPoints < 0 && finalEnemy === true) {
                    htmlID = "#" + currentEnemy;
                    $(htmlID).remove();
                    currentEnemy = "";
                    htmlID = "";
                    winCount++;
                    newGame();
                    pageContent();
                }//Action to be taken when current FINAL enemy is defeated 
            }
        }
    })

    function pageContent() {
        $("#obiWanHealth").text(character.obiWan.healthPoints);
        $("#obiWanName").text(character.obiWan.name);
        $("#lukeHealth").text(character.luke.healthPoints);
        $("#lukeName").text(character.luke.name);
        $("#darthSidiousHealth").text(character.darthSidious.healthPoints);
        $("#darthSidiousName").text(character.darthSidious.name);
        $("#darthMaulHealth").text(character.darthMaul.healthPoints);
        $("#darthMaulName").text(character.darthMaul.name);
        //$("#darthMaulImage").attr('src', character.darthMaul.imageSource);
        $("#winCount").text(winCount);
        $("#lossCount").text(lossCount);
    };

    window.onload = newGame();
    window.onload = pageContent();
})
