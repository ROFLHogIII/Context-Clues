var body = document.body;
var friends = ["Richard", "Woody", "Warryn", "Anthony", "Juniper"];
var locations = ["the Circus", "mlaeR rorriM ehT", "a Space Station", "the 3rd Circle of Hell", "The Plane of Shadow", "The Unspeakble Realm", "the Creepy Shack", "the Haunted Woods", "Cthulu's Hot Tub", "The Shadow Realm"];
var weapons = ["a flimsy peice of cheese", "a children's card game", "broken glass", "love and affection", "the very concept of crocs", "neglect", "killer clowns from outerspace", "Dank Memes", "forbidden knowledge", "noitcelfeR reihT", "YouTube videos from the early 2000s", "an Adimantine Spork", "The Kraken", "Karen, that bitch", "Wonder Twin Powers", "Falling Rocks", "a Natural 20", "a flash mob", "the actual Mob", "a Natural 1"];

for (let i = 0; i < 100; i++) {
    var h3 = "<h3 id=" + (i+1) + ">" + "Accusation " + (i+1) + "</h3>";
    var f = friends[i % 5]
    var w = weapons[i % 5]
    var l = locations[i % 5]
    $(h3).appendTo(body);
    $("#" + (i+1)).click(function () {
        $("I accuse " + f + ", in " + l + " with " + w + "!").appendTo(h3)
    })
}

// var friendArray = ["Marth", "Sheik", "Captain Falcon", "Fox", "Falco"];
// var locationArray = ["Final Destination", "Battlefield", "Yoshi's Story", "Fountain of Dreams", "Pokemon Stadium", "Smashville", "Green Hill Zone", "Dreamland", "Wario Land", "Delfino's Plaza"];

// for(var i = 0; i < 101; i++) {
//     console.log("This is i: " + i);
//     console.log("%c This is friendArray[i]: " + friendArray[i], 'color: #ff0000');
//     console.log("This is i % 5: " + (i % 5));
//     console.log("%c This is friendArray[i % 5]: " + friendArray[i % 5], 'color: #00ff00');
//     console.log("---")
// }