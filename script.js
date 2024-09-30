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

    let fnaf_characters = [
                 new Character("Freddy Fazbear","Fredd","faz",true),
                 new Character("Bonnie","Bon","nnie",false),
                 new Character("Chica","Chi","ica",true),
                 new Character("Foxy","Fo","oxy",false),
                 new Character("Withered Freddy","Withered Fredd","faz(Withered)",true),
                 new Character("Withered Bonnie","Withered Bon","nnie(Withered)",true),
                 new Character("Withered Chica","Withered Chi","ica(Withered)",true),
                 new Character("Withered Foxy","Withered Fo","oxy(Withered)",true),
                 new Character("Toy Freddy","Toy Fredd","faz(Toy)",true),
                 new Character("Toy Bonnie","Toy Bon","nnie(Toy)",true),
                 new Character("Toy Chica","Toy Chi","ica(Toy)",true),
                 new Character("Mangle","Man","gled",false),
                 new Character("BB","Balloon","boy",true),
                 new Character("JJ","Jj","girl",false),
                 new Character("Puppet","Pupp","ppet",true),
                 new Character("Phantom Freddy","Phantom Fredd","faz(Phantom)",true),
                 new Character("Phantom Chica","Phantom Chi","ica(Phantom)",true),
                 new Character("Phantom Foxy","Phantom Fo","oxy(Phantom)",true),
                 new Character("Phantom Mangle","Phantom Man","gled(Phantom)",true),
                 new Character("Phantom BB","Phantom Balloon","boy(Phantom)",true),
                 new Character("Phantom Puppet","Phantom Pupp","ppet(Phantom)",true),
                 new Character("Fredbear","Fred","bear",true),
                 new Character("Springbonnie","Springbon","spring",true),
                 new Character("Nightmare Freddy","Nightmare Fredd","faz(Nightmare)",true),
                 new Character("Nightmare Bonnie","Nightmare Bon","nnie(Nightmare)",true),
                 new Character("Nightmare Chica","Nightmare Chi","ica(Nightmare)",true),
                 new Character("Nightmare Foxy","Nightmare Fo","oxy(Nightmare)",true),
                 new Character("Nightmare Fredbear","Nightmare Fred","bear(Nightmare)",true),
                 new Character("Nightmare","Night","mare",true),
                 new Character("Plushtrap","Plush","trap(plush)",true),
                 new Character("Nightmare Mangle","Nightmare Man","gled(Nightmare)",true),
                 new Character("Nightmare BB","Nightmare Balloon","boy(Nightmare)",true),
                 new Character("Nightmarionne","Nightmar","marionne",false),
                 new Character("Circus Baby","Circus","baby",true),
                 new Character("Ballora","Ball","lora",false),
                 new Character("Funtime Freddy","Funtime Fredd","ddy(Funtime)",true),
                 new Character("Funtime Foxy","Funtime Fo","oxy(Funtime)",true),
                 new Character("Lolbit","Lol","bit",true),
                 new Character("Funtime Chica","Funtime Chi","ica(Funtime)",true),
                 new Character("Music Man","Musicm","man",true),
                 new Character("Rockstar Freddy","Rockstar Fredd","faz(Rockstar)",true),
                 new Character("Rockstar Bonnie","Rockstar Bon","nnie(Rockstar)",true),
                 new Character("Rockstar Chica","Rockstar Chi","ica(Rockstar)",true),
                 new Character("Rockstar Foxy","Rockstar Fo","oxy(Rockstar)",true),
                 new Character("Lefty","Left","efty",true),
                 new Character("Glamrock Freddy","Glamrock Fredd","faz(Glamrock)",true),
                 new Character("Glamrock Bonnie","Glamrock Bon","nnie(Glamrock)",true),
                 new Character("Glamrock Chica","Glamrock Chi","ica(Glamrock)",true),
                 new Character("Montgomery Gator","Montgomery Gat","gator",true),
                 new Character("Roxanne Wolf","Roxxanne W","wolf",true),
                 new Character("Sun","Sun","undrop",false),
                 new Character("Moon","Moon","oondrop",false),
                 new Character("Eclipse","Ecl","lipse",false),
                 new Character("The Mimic","The Mimi","imic",true),
                 new Character("Ennard","Ennar","nard",true),
                 new Character("Molten Freddy","Molten Fredd","faz(Molten)",true),
                 new Character("Tangle","Tang","angle",true),
                 new Character("Golden Freddy","Golden Fredd","faz(Golden)",true),
                 new Character("Scrap Baby","Scrapba","baby(Scrap)",true),
                 new Character("Springtrap","Spring","trap(Spring)",true),
                 new Character("Scraptrap","Scrap","trap(Scrap)",true),
                 new Character("Burntrap","Burn","trap(Burn)",true),
                 new Character("Glitchtrap","Glitch","trap(Glitch)",true),
                 new Character("Vanny","Vann","nny",true),
                 ]
    let md_characters = [
                 new Character("Uzi","Uzi","uzi",false),
                 new Character("V","V","V",true),
                 new Character("N","N","N",true),
                 new Character("J","J","J",true),
                 ]
    let helluva_boss_characters = [
                 new Character("Blitzø","Blitz","ø",false),
                 new Character("Asmodeus","Asmo","deus",true),
                 new Character("Barbie Wire","Barbie","wire",false),
                 new Character("Beelzebub","Bee","lzebub",true),
                 new Character("Crimson","Crim","imson",true),
                 new Character("Emberlynn Pinkle","Emberly","pinkle",true),
                 new Character("Fizzarolli","Fizza","rolli",false),
                 new Character("Glitz","Glitz","glitz",false),
                 new Character("Glam","Glam","glam",true),
                 new Character("Loona","Loo","ona",false),
                 new Character("Mammon","Mamm","mmon",true),
                 new Character("Millie","Mill","llie",true),
                 new Character("Moxxie","Moxx","xxie",false),
                 new Character("Octavia","Octav","via",false),
                 new Character("Sallie May","Salli","may",true),
                 new Character("Stella","Stell","ella",true),
                 new Character("Stolas","Stol","olas",false),
                 new Character("Striker","Strik","riker",true),
                 new Character("Verosika Mayday","Verosi","osika",true),
                 new Character("Vortex","Vort","tex",true),
                 ]
    let undertale_characters = [
                 new Character("Frisk","Fris","risk",true),
                 new Character("Chara","Char","hara",true),
                 new Character("Asriel","Asrie","riel",true),
                 new Character("Toriel","Tori","riel",false),
                 new Character("Sans","Sans","sans",true),
                 new Character("Papyrus","Papyr","yrus",true),
                 new Character("Undyne","Undy","dyne",false),
                 new Character("Alphys","Alph","phys",true),
                 new Character("Muffet","Muff","ffet",true),
                 new Character("Mettaton","Metta","aton",true),
                 new Character("Asgore","As","gore",true),
                 new Character("Monster Kid","Monster","kid",true),
                 new Character("Flowey","Flow","owey",true),
                 ]
    let deltarune_characters = [
                 new Character("Kris","Kris","ris",true),
                 new Character("Susie","Susi","usie",false),
                 new Character("Ralsei","Ralse","alsei",false),
                 new Character("Lancer","Lanc","ancer",false),
                 new Character("Noelle","Noell","elle",true),
                 new Character("Spamton","Spam","ton",true),
                 new Character("Rouxls Kaard","Rouxls","kaard",true),
                 new Character("Jevil","Jev","vil",true),
                 new Character("Berdly","Berd","erdly",false),
                 new Character("Queen","Quee","ueen",true),
                 ]

    let possible_picks = []
    if (!document.getElementById("fnaf-checkbox").checked) {
        possible_picks.push.apply(possible_picks,fnaf_characters)
    }
    if (!document.getElementById("md-checkbox").checked) {
        possible_picks.push.apply(possible_picks,md_characters)
    }
    if (!document.getElementById("hb-checkbox").checked) {
        possible_picks.push.apply(possible_picks,helluva_boss_characters)
    }
    if (!document.getElementById("ut-checkbox").checked) {
        possible_picks.push.apply(possible_picks,undertale_characters)
    }
    if (!document.getElementById("dr-checkbox").checked) {
        possible_picks.push.apply(possible_picks,deltarun_characters)
    }
            
    let random1 = possible_picks[Math.floor(Math.random() * possible_picks.length)];
    let random2 = possible_picks[Math.floor(Math.random() * possible_picks.length)];
    if (random1 instanceof Character && random2 instanceof Character) {
        let result = random1.getShipName(random2)
        labelElement.innerHTML = random1.name + " x " + random2.name + ", or: ";
        labelElement2.innerHTML = result;
    } else {
        return;
    }
}
