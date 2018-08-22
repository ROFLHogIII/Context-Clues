var body = document.body;
var friends = ["The Wizard", "The Barbarian", "The Rogue", "The Dungeon Master", "The Dice Gods"];
var locations = ["the Circus", "mlaeR rorriM ehT", "a Space Station", "the 3rd Circle of Hell", "the Blessed Fields of Elysium", "a CoD que", "the Creepy Shack", "the Haunted Woods", "Cthulu's Hot Tub", "The Shadow Realm"];
var weapons = ["a well placed dagger", "a children's card game", "broken glass", "love and affection", "the very concept of crocs", "neglect", "false accusations", "Dank Memes", "forbidden knowledge", "noitcelfeR reihT", "YouTube videos from the early 2000s", "10d6 fire damage, DC24 reflex for half", "The Kraken", "Karen, that bitch", "Wonder Twin Powers", "Falling Rocks", "a Natural 20", "a flash mob", "the actual Mob", "a Natural 1"];

for (var i = 0; i < 100; i++) {
    run(i)
};
function run(i) {
    var h3 = $(`<h3>Accusation ${i + 1}<div id=${i + 1}></div></h3>`);
    $(h3).appendTo(body);
    $(h3).click(function () {
        var f = friends[i % 5]
        var w = weapons[i % 20]
        var l = locations[i % 10]
        alert(`I say ${f} killed them in ${l} with ${w}!`)
    });
};