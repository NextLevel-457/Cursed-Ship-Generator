class Character {
    constructor(name, prefix, suffix, prefersFirst) {
        this.name = name;
        this.prefix = prefix;
        this.suffix = suffix;
        this.prefersFirst = prefersFirst;
    }

    getShipName(otherCharacter) {
        if (this.prefersFirst && otherCharacter.prefersFirst) {
            if (Math.random() < 0.5) {
                return otherCharacter.prefix + this.suffix;
            } else {
                return this.prefix + otherCharacter.suffix;
            }
        } else if (this.prefersFirst) {
            return this.prefix + otherCharacter.suffix;
        } else if (otherCharacter.prefersFirst) {
            return otherCharacter.prefix + this.suffix
        } else {
            if (Math.random() < 0.5) {
                return otherCharacter.prefix + this.suffix;
            } else {
                return this.prefix + otherCharacter.suffix;
            }
        }
    }
}

function changeTextWithHTML() {
    let labelElement = document.getElementById("labelWithHTML");
    let labelElement2 = document.getElementById("label2");

    let characters = [
                 new Character("Freddy Fazbear","Fredd","faz",true),
                 new Character("Bonnie","Bon","nnie",false),
                 new Character("Chica","Chi","ca",true),
                 new Character("Foxy","Fo","oxy",false),
                 new Character("Withered Freddy","Withered Fredd","faz(Withered)",true),
                 new Character("Withered Bonnie","Withered Bon","nnie(Withered)",true),
                 new Character("Withered Chica","Withered Chi","ca(Withered)",true),
                 new Character("Withered Foxy","Withered Fo","oxy(Withered)",true),
                 new Character("Toy Freddy","Toy Fredd","faz(Withered)",true),
                 new Character("Toy Bonnie","Toy Bon","nnie(Withered)",true),
                 new Character("Toy Chica","Toy Chi","ca(Withered)",true),
                 new Character("Mangle","Man","gled",false),
                 new Character("BB","Balloon","boy",true),
                 new Character("JJ","J","girl",false),
                 new Character("Puppet","Pup","pet",true),
                 "Phantom Freddy",
                 "Phantom Chica",
                 "Phantom Foxy",
                 "Phantom Mangle",
                 "Phantom BB",
                 "Phantom Puppet",
                 "Fredbear",
                 "Springbonnie",
                 "Nightmare Freddy",
                 "Nightmare Bonnie",
                 "Nightmare Chica",
                 "Nightmare Foxy",
                 "Nightmare Fredbear",
                 "Nightmare",
                 "Plushtrap",
                 "Nightmare BB",
                 "Nightmare Mangle",
                 "Nightmarionne",
                 "Circus Baby",
                 "Ballora",
                 "Funtime Freddy",
                 "Funtime Foxy",
                 "Lolbit",
                 "Funtime Chica",
                 "Music Man",
                 "Rockstar Freddy",
                 "Rockstar Bonnie",
                 "Rockstar Chica",
                 "Rockstar Foxy",
                 "Lefty",
                 "Glamrock Freddy",
                 "Glamrock Bonnie",
                 "Glamrock Chica",
                 "Montgomery Gator",
                 "Roxanne Wolf",
                 "Moon",
                 "Sun",
                 "Eclipse",
                 "The Mimic",
                 "Ennard",
                 "Molten Freddy",
                 "Tangle",
                 "Golden Freddy",
                 "Scrap Baby",
                 "Springtrap",
                 "Scraptrap",
                 "Burntrap",
                 "Glitchtrap",
                 "Uzi","Serial Designation V","Serial Designation N","Serial Designation J","Blitzø","Asmodeus","Barbie Wire","Beelzebub","Crimson","Emberlynn Pinkle","Fizzarolli","Glitz","Glam","Loona","Mammon","Millie","Moxxie","Octavia","Sallie May","Stella","Stolas","Striker","Verosika Mayday","Vortex","Frisk","Chara","Asriel","Toriel","Papyrus","Sans","Undyne","Alphys","Muffet","Mettaton","Asgore","Monster Kid","Flowey","Kris","Susie","Ralsei","Lancer","Noelle","Spamton","Rouxls Kaard","Jevil","Berdly","Queen"]
            
    let random1 = characters[Math.floor(Math.random() * characters.length)];
    let random2 = characters[Math.floor(Math.random() * characters.length)];
    if (random1 instanceof Character && random2 instanceof Character) {
        let result = random1.getShipName(random2)
        labelElement.innerHTML = random1.name + " x " + random2.name + ", or: ";
        labelElement2.innerHTML = result;
    } else {
        labelElement.innerHTML = "nope";
    }
}
