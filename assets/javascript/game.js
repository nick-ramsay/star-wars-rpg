$(document).ready(function () {
    function newGame() {
        $(".character").remove();

        userCharacter = "";
        currentEnemy = "";
        finalEnemy = false;
        enemyHistory = [];

        var obiWan = {
            name: "Obi Wan Kenobi",
            imageSource: "https://pm1.narvii.com/6387/ca77b00de2ba14beea7e9c7a498b38e2ac868bce_128.jpg",
            healthPoints: 120, //Required attribute
            attackCount: 0,
            originalAttackPower: 10,
            currentAttackPower: 10, //Required atribute... need to multiply
            counterAttackPower: 20
        };

        var luke = {
            name: "Luke Skywalker",
            imageSource: "data:image/jpeg;base64,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",
            healthPoints: 100, //Required attribute
            attackCount: 0,
            originalAttackPower: 9,
            currentAttackPower: 9, //Required atribute
            counterAttackPower: 25
        };

        var darthSidious = {
            name: "Darth Sidious",
            imageSource: "https://yt3.ggpht.com/-BcpKsKGUFk0/AAAAAAAAAAI/AAAAAAAAAAA/cD-RXrzBW3s/s128-c-k-no-mo-rj-c0xffffff/photo.jpg",
            healthPoints: 150, //Required attribute
            attackCount: 0,
            originalAttackPower: 4,
            currentAttackPower: 18, //Required atribute
            counterAttackPower: 12
        };

        var darthMaul = {
            name: "Darth Maul",
            imageSource: "https://pm1.narvii.com/6965/7412a5ab6908fa6a64d6a12484fbf7fbd26bc142r1-1014-1111v2_128.jpg",
            healthPoints: 180, //Required attribute
            attackCount: 0,
            originalAttackPower: 5,
            currentAttackPower: 12, //Required atribute
            counterAttackPower: 10
        };

        character = {
            obiWan: obiWan,
            luke: luke,
            darthSidious: darthSidious,
            darthMaul: darthMaul
        };

        var obiWanDiv = $('<div class="col-md-3 p-1 character" id="obiWan" data-character="obiWan"><div class="m-1"><h3 id="obiWanName"></h3><img id="obiWanImage" class="class="img-thumbnail"><p>Health: <span id="obiWanHealth"></span></p></div></div>');
        $("#playerOptions").prepend(obiWanDiv);
        var lukeDiv = $('<div class="col-md-3 p-1 character" id="luke" data-character="luke"><div class="m-1"><h3 id="lukeName"></h3><img id="lukeImage" class="class="img-thumbnail"><p>Health: <span id="lukeHealth"></span></p></div></div>');
        $("#playerOptions").prepend(lukeDiv);
        var darthSidiousDiv = $('<div class="col-md-3 p-1 character" id="darthSidious" data-character="darthSidious"><div class="m-1"><h3 id="darthSidiousName"></h3><img id="darthSidiousImage" class="class="img-thumbnail"><p>Health: <span id="darthSidiousHealth"></span></p></div></div>');
        $("#playerOptions").prepend(darthSidiousDiv);
        var darthMaulDiv = $('<div class="col-md-3 p-1 character" id="darthMaul" data-character="darthMaul"><div class="m-1"><h3 id="darthMaulName"></h3><img id="darthMaulImage" class="class="img-thumbnail"><p>Health: <span id="darthMaulHealth"></span></p></div></div>');
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
        $("#obiWanImage").attr('src', character.obiWan.imageSource);
        $("#lukeHealth").text(character.luke.healthPoints);
        $("#lukeName").text(character.luke.name);
        $("#lukeImage").attr('src', character.luke.imageSource);
        $("#darthSidiousHealth").text(character.darthSidious.healthPoints);
        $("#darthSidiousName").text(character.darthSidious.name);
        $("#darthSidiousImage").attr('src', character.darthSidious.imageSource);
        $("#darthMaulHealth").text(character.darthMaul.healthPoints);
        $("#darthMaulName").text(character.darthMaul.name);
        $("#darthMaulImage").attr('src', character.darthMaul.imageSource);
        $("#winCount").text(winCount);
        $("#lossCount").text(lossCount);
    };

    window.onload = newGame();
    window.onload = pageContent();
})
