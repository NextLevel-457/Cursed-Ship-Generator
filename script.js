// Function to change label text with HTML content
        function changeTextWithHTML() {
            let labelElement = document
                .getElementById("labelWithHTML");

            let names = ["Freddy Fazbear","Bonnie","Chica","Foxy","Withered Freddy","Withered Bonnie","Withered Chica","Withered Foxy","Toy Freddy","Toy Bonnie","Toy Chica","Mangle","BB","JJ","Puppet","Phantom Freddy","Phantom Chica","Phantom Foxy","Phantom Mangle","Phantom BB","Phantom Puppet","Fredbear","Springbonnie","Nightmare Freddy","Nightmare Bonnie","Nightmare Chica","Nightmare Foxy","Nightmare Fredbear","Nightmare","Plushtrap","Nightmare BB","Nightmare Mangle","Nightmarionne","Circus Baby","Ballora","Funtime Freddy","Funtime Foxy","Lolbit","Funtime Chica","Music Man","Rockstar Freddy","Rockstar Bonnie","Rockstar Chica","Rockstar Foxy","Lefty","Glamrock Freddy","Glamrock Bonnie","Glamrock Chica","Montgomery Gator","Roxanne Wolf","Moon","Sun","Eclipse","The Mimic","Ennard","Molten Freddy","Tangle","Golden Freddy","Scrap Baby","Springtrap","Scraptrap","Burntrap","Glitchtrap","Uzi","Serial Designation V","Serial Designation N","Serial Designation J","Blitzø","Asmodeus","Barbie Wire","Beelzebub","Crimson","Emberlynn Pinkle","Fizzarolli","Glitz","Glam","Loona","Mammon","Millie","Moxxie","Octavia","Sallie May","Stella","Stolas","Striker","Verosika Mayday","Vortex","Frisk","Chara","Asriel","Toriel","Papyrus","Sans","Undyne","Alphys","Muffet","Mettaton","Asgore","Monster Kid","Flowey","Kris","Susie","Ralsei","Lancer","Noelle","Spamton","Rouxls Kaard","Jevil","Berdly","Queen"]
            
            let random1 = names[Math.floor(Math.random() * names.length)];
            let random2 = names[Math.floor(Math.random() * names.length)];
            let result = random1.concat(" x ",random2,"          ")
            labelElement.innerHTML =
                result;
        }
