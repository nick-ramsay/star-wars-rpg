$(document).ready(function () {
    /*var obiWan = {
        healthPoints: 120, //Required attribute
        attackCount: 0,
        attackPower: 6 + (this.attackCount * 6), //Required atribute
        counterAttackPower: 10
    };

    var luke = {
        healthPoints: 100, //Required attribute
        attackCount: 0,
        attackPower: 8 + (this.attackCount * 8), //Required atribute
        counterAttackPower: 12
    };

    var darthSidious = {
        healthPoints: 150, //Required attribute
        attackCount: 0,
        attackPower: 6 + (this.attackCount * 6), //Required atribute
        counterAttackPower: 10
    };

    var darthMaul = {
        healthPoints: 180, //Required attribute
        attackCount: 0,
        attackPower: 5 + (this.attackCount * 5), //Required atribute
        counterAttackPower: 20
    };*/

    var characters = {
        obiWan: {
            healthPoints: 120, //Required attribute
            attackCount: 0,
            attackPower: 6 + (this.attackCount * 6), //Required atribute
            counterAttackPower: 10
        },
        luke: {
            healthPoints: 100, //Required attribute
            attackCount: 0,
            attackPower: 8 + (this.attackCount * 8), //Required atribute
            counterAttackPower: 12
        },
        darthSidious: {
            healthPoints: 150, //Required attribute
            attackCount: 0,
            attackPower: 6 + (this.attackCount * 6), //Required atribute
            counterAttackPower: 10
        },
        darthMaul: {
            healthPoints: 180, //Required attribute
            attackCount: 0,
            attackPower: 5 + (this.attackCount * 5), //Required atribute
            counterAttackPower: 20
        }
    };

    var userCharacter = "";
    var currentEnemy = "";


    $("#obiWan").on("click", function (event) {
        if (userCharacter === "") {
            userCharacter = "obiWan";
            $("#obiWan").appendTo("#userCharacter");
            console.log(userCharacter);
            console.log(currentEnemy);
            console.log(userCharacter === "");
            console.log(currentEnemy === "");
        }
    })

    $("#luke").on("click", function (event) {
        if (userCharacter !== "" && currentEnemy === "") {
            currentEnemy = "luke";
            $("#luke").appendTo("#currentEnemy");
            console.log(userCharacter);
            console.log(currentEnemy);
        }
    })
})