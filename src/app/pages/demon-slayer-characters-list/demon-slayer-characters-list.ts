import {Component} from '@angular/core';
import {CharacterCard} from '../../components/character-card/character-card';
import {CharacterModel} from '../../interfaces/character-model';
import {CharacterCardType} from '../../enums/character-card-type';
import {CurrencyPipe, TitleCasePipe, JsonPipe, DatePipe, UpperCasePipe, LowerCasePipe} from '@angular/common';

@Component({
  selector: 'app-demon-slayer-characters-list',
  imports: [CharacterCard, TitleCasePipe, JsonPipe, CurrencyPipe, DatePipe, UpperCasePipe, LowerCasePipe],
  templateUrl: './demon-slayer-characters-list.html',
  styleUrl: './demon-slayer-characters-list.css',
})
export class DemonSlayerCharactersList {

//Title case, para poner en mayúscula la primera letra de cada palabra.
  firstName = "Davids Morales";
  fistLastName = "first morales";
  SecondLastName = "SECOND MORALES";
  objectExample = {
    firstName: this.firstName,
    dpi: 1234567891470
  }

  amount = 5555;
  currentDate = new Date();


  readonly characterCardType = CharacterCardType;

  characterList = [
    
    {
      "id": 1,
      "name": "Tanjiro Kamado",
      "age": 16,
      "gender": "Male",
      "race": "Human",
      "description": "Is the main protagonist of Demon Slayer. He joined the Demon Slayer Corp to find a remedy to turn his sister, Nezuko Kamado, back into a human and to hunt down and kill demons.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/1.webp",
      "affiliation_id": 1,
      "arc_id": 1,
      "quote": "Work at it. All I can do is work hard! That´s the story of my life!"
    },
    {
      "id": 2,
      "name": "Nezuko Kamado",
      "age": 14,
      "gender": "Female",
      "race": "Demon",
      "description": "She is a demon and the younger sister of Tanjiro Kamado and one of the two remaining members of the Kamado family. Formerly a human, she was attacked and transformed into a demon by Muzan Kibutsuji.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/2.webp",
      "affiliation_id": 1,
      "arc_id": 1,
      "quote": "Humans are to be protected and saved... I will never hurt them."
    },
    {
      "id": 3,
      "name": "Giyu Tomioka",
      "age": 21,
      "gender": "Male",
      "race": "Human",
      "description": "He is a Demon Slayer of the Demon Slayer Corps and the current Water Hashira. He has a reserved personality and a very strong sense of justice.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/3.webp",
      "affiliation_id": 2,
      "arc_id": 1,
      "quote": "Feel the rage. The powerful, pure rage of not being able to forgive will become your unswerving drive to take action."
    },
    {
      "id": 4,
      "name": "Sakonji Urokodaki",
      "age": 70,
      "gender": "Male",
      "race": "Human",
      "description": "Sakonji Urokodaki is a retired member of the Demon Slayer Corps, having held the position of the previous Water Hashira. He is the main cultivator of the Water Breathing style, having trained Makomo, Sabito, Giyu Tomioka, and Tanjiro Kamado.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/4.webp",
      "affiliation_id": 3,
      "arc_id": 1,
      "quote": "Remember to take a long breath so the oxygen flows into every cell in your body."
    },
    {
      "id": 5,
      "name": "Sabito",
      "age": 13,
      "gender": "Male",
      "race": "Human",
      "description": "Sabito was a former apprentice of Sakonji Urokodaki. He appeared to assist Tanjiro Kamado in his preparations for the Final Selection exam.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/5.webp",
      "affiliation_id": 1,
      "arc_id": 1,
      "quote": "You have to make sure you never forget any of the secrets Urokodaki taught you! Pound it into the marrow of your bones!"
    },
    {
      "id": 6,
      "name": "Makomo",
      "age": 12,
      "gender": "Female",
      "race": "Human",
      "description": "Makomo and Sabito were both orphaned from their respective families and adopted by Sakonji, who trained them both and permitted them to attend the Demon Slayer Corps´Final Selection.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/6.webp",
      "affiliation_id": 1,
      "arc_id": 1,
      "quote": "Train until it kills you. Because really, when you get down to it, there´s nothing else you can do."
    },
    {
      "id": 7,
      "name": "Hand Demon",
      "age": 47,
      "gender": "Male",
      "race": "Demon",
      "description": "The Hand Demon was the primary antagonist of the Final Selection Arc of Demon Slayer. He was a notorious demon who killed thirteen of Sakonji Urokodaki´s apprentices",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/7.webp",
      "affiliation_id": 6,
      "arc_id": 1,
      "quote": "I´ve been here so long... that dynasties have risen and fallen! Again and again! All while I´ve been trapped here! Unforgivable! Unforgivable!"
    },
    {
      "id": 8,
      "name": "Genya Shinazugawa",
      "age": 16,
      "gender": "Male",
      "race": "Human",
      "description": "He is the younger brother of the Wind Hashira and as one of the five that survived Final Selection, Genya possesses a relatively strong foundation as a Demon Slayer even without utilizing a Breathing Style.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/8.webp",
      "affiliation_id": 1,
      "arc_id": 1,
      "quote": "I´ll do it. I´m gonna do it. I have to do it. Think only about winning. I will not let my brother, or my master, or any of my comrades die!"
    },
    {
      "id": 9,
      "name": "Zenitsu Agatsuma",
      "age": 16,
      "gender": "Male",
      "race": "Human",
      "description": "Zenitsu Agatsuma is one of the main characters of Demon Slayer and along with Inosuke Hashibira, a travelling companion of Tanjiro Kamado and Nezuko Kamado. He is also a Demon Slayer in the Demon Slayer Corps.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/9.webp",
      "affiliation_id": 1,
      "arc_id": 1,
      "quote": "I hate myself more than anyone. I always think I have to get my act together, but I end up cowering, running away, sniveling. I want to change. I want to be a competent person."
    },
    {
      "id": 10,
      "name": "Inosuke Hashibira",
      "age": 15,
      "gender": "Male",
      "race": "Human",
      "description": "Inosuke is short-tempered, confrontational, abrasive and proud. He always likes to think he is the strongest fighter in a situation, constantly challenging most people he comes across and wanting others to respect and praise him for his skill.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/10.webp",
      "affiliation_id": 1,
      "arc_id": 1,
      "quote": "Everything that dies returns to the earth, but crying won´t bring any of them back, so no matter how frusturated you feel, don´t cry!"
    },
    {
      "id": 11,
      "name": "Aoi Kanzaki",
      "age": 16,
      "gender": "Female",
      "race": "Human",
      "description": "Aoi Kanzaki is a Demon Slayer of the Demon Slayer Corps. However, she works as a helper at the Butterfly Mansion, rather than taking to the front lines and fighting demons.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/11.webp",
      "affiliation_id": 1,
      "arc_id": 1,
      "quote": "Compared to you guys, I´m not so important, so thanks aren´t necessary. I survived selection due to pure luck. Since then I´ve been afraid to fight, so I´m a coward."
    },
    {
      "id": 12,
      "name": "Kanao Tsuyuri",
      "age": 16,
      "gender": "Female",
      "race": "Human",
      "description": "Kanao Tsuyuri is the adopted sister of Shinobu and Kanae Kocho.  She became unable to make decisions by herself and she has a coin to flip and decide which path to follow when she doesn´t know what to do.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/12.webp",
      "affiliation_id": 1,
      "arc_id": 1,
      "quote": "Somehow I feel the people I care for and those important to me will still be alive tomorrow. But that´s just my hope and there´s no way I can promise that with any certainty."
    },
    {
      "id": 13,
      "name": "Swamp Demon",
      "age": null,
      "gender": "Male",
      "race": "Demon",
      "description": "He is the main antagonist of the Kidnapper´s Bog Arc. He was a demon who went through a rash of kidnappings during the first mission of Tanjiro Kamado for the Demon Slayer Corps.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/13.webp",
      "affiliation_id": 6,
      "arc_id": 2,
      "quote": "Don´t interfere! You´ll ruin the girl´s freshness! She gets less and less tasty with each moment that passes!"
    },
    {
      "id": 14,
      "name": "Muzan Kibutsuji",
      "age": 10000,
      "gender": "Male",
      "race": "Demon",
      "description": "Muzan Kibutsuji is the main antagonist of Demon Slayer. He is the Demon King, the progenitor of all other demons in existence, and the leader of the Twelve Kizuki, an organization made up of the twelve strongest demons under his direct command.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/14.webp",
      "affiliation_id": 4,
      "arc_id": 2,
      "quote": "The one thing I hate is \"change\". Changes in circumstances. Changes in body. Changes in emotion. In most cases, every change is \"degradation\". It is decline. The one thing I like is \"permanence\". If something doesn´t change for an eternity. It´s in a perfect state."
    },
    {
      "id": 15,
      "name": "Tamayo",
      "age": 500,
      "gender": "Female",
      "race": "Demon",
      "description": "Tamayo is a gentle, wise, and incredibly intelligent demon. Having devoted most of her life to the researching of demons and human transformation into one",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/15.webp",
      "affiliation_id": 1,
      "arc_id": 3,
      "quote": "I don´t need to be stronger than you to kill you. I can just make you weaker. Just as you´ll do whatever it takes to stay alive, I... No, we, will do whatever it takes to kill you"
    },
    {
      "id": 16,
      "name": "Yushiro",
      "age": 35,
      "gender": "Male",
      "race": "Demon",
      "description": "He only cares for Tamayo and hates when others get in the way of his spending time with her",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/16.webp",
      "affiliation_id": 1,
      "arc_id": 3,
      "quote": "Someone who never gives to others will someday become unable to receive anything from them."
    },
    {
      "id": 17,
      "name": "Susamaru",
      "age": null,
      "gender": "Female",
      "race": "Demon",
      "description": "Susamaru, also known as the Temari Demon, was one of the two primary antagonists in the Asakusa Arc of Demon Slayer along with Yahaba. She was a demon who was tricked into believing she was a member of the Twelve Demon Moons.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/17.webp",
      "affiliation_id": 6,
      "arc_id": 3,
      "quote": "Let´s keep playing until dawn! Until your life ends"
    },
    {
      "id": 18,
      "name": "Yahaba",
      "age": null,
      "gender": "Male",
      "race": "Demon",
      "description": "Yahaba, also known as the Arrow Demon, was one of the two primary antagonists in the Asakusa Arc of Demon Slayer, along with Susamaru. He was a demon who was tricked into believing he was a member of the Twelve Demon Moons.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/18.webp",
      "affiliation_id": 6,
      "arc_id": 3,
      "quote": "How will we kill them? Brutally of course!"
    },
    {
      "id": 19,
      "name": "Kyogai",
      "age": null,
      "gender": "Male",
      "race": "Demon",
      "description": "Kyogai was a demon formerly affiliated with the Twelve Demon Moons, having previously held the position of Lower Rank Six before Muzan Kibutsuji excommunicated him for reaching his limit as a demon and losing his ability to become stronger.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/19.webp",
      "affiliation_id": 4,
      "arc_id": 4,
      "quote": "Demons... Exist for a purpose."
    },
    {
      "id": 20,
      "name": "Shinobu Kocho",
      "age": 18,
      "gender": "Female",
      "race": "Human",
      "description": "Shinobu is the current Insect Hashira. After a demon killed her parents, she joined the Demon Slayer Corps in order to protect others from suffering the same fate as her.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/20.webp",
      "affiliation_id": 2,
      "arc_id": 5,
      "quote": "I once believed that the road of happiness continued forever and ever into the distance. When it was destroyed, I realized for the first time that it lies upon a thin sheet of glass."
    },
    {
      "id": 21,
      "name": "Murata",
      "age": 21,
      "gender": "Male",
      "race": "Human",
      "description": "Not much is known about Murata, however, he does not like it when a hunter of lower rank chastises him. He is somewhat timid, however he does seem braver than most.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/21.webp",
      "affiliation_id": 1,
      "arc_id": 5,
      "quote": "Tomioka remembered my name... We were together since the Final Selection too...! I know there´s a huge difference between us but we were in the same batch, man...!"
    },
    {
      "id": 22,
      "name": "Spider Son",
      "age": null,
      "gender": "Male",
      "race": "Demon",
      "description": "He was member of the Spider Family, and he takes the form of a giant spider possessing a human head. His face, like Mother and Daughter, had the same facial features of red dots, white skin and hair similar to his \"younger brother\" Rui.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/22.webp",
      "affiliation_id": 5,
      "arc_id": 5,
      "quote": "There´s nothing to be afraid of. When the poison runs throughout your system and you become a spider, your mind will be gone."
    },
    {
      "id": 23,
      "name": "Spider Daughter",
      "age": null,
      "gender": "Female",
      "race": "Demon",
      "description": "She was member of the Spider Family, and she is shown to be the most cautious within her \"family,\" having instead opted to observe and stand back rather than jump right into the battle against Demon Slayers.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/23.webp",
      "affiliation_id": 5,
      "arc_id": 5,
      "quote": "I only ever worried about myself. They were dumb, but I was different. But now I´ve messed up!"
    },
    {
      "id": 24,
      "name": "Spider Mother",
      "age": null,
      "gender": "Female",
      "race": "Demon",
      "description": "She was member of the Spider Family. Like most demons, Mother was cruel, unfeeling, and murderous towards humans. She ruthlessly controlled dozens of Demon Slayers through her threads and manipulated them into killing each other.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/24.webp",
      "affiliation_id": 5,
      "arc_id": 5,
      "quote": "Arrgh! Die! Die! Die now! If you don´t, I´ll suffer an awful fate!"
    },
    {
      "id": 25,
      "name": "Spider Father",
      "age": null,
      "gender": "Male",
      "race": "Demon",
      "description": "He was member of the Spider Family. Physically, he was the most formidable of his \"family\", possessing great height and a powerfully built physique.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/25.webp",
      "affiliation_id": 5,
      "arc_id": 5,
      "quote": "Stay away... from... my... family!"
    },
    {
      "id": 26,
      "name": "Rui",
      "age": null,
      "gender": "Male",
      "race": "Demon",
      "description": "Rui is the leader of the Spider Family. He was the primary antagonist in the Mount Natagumo Arc of Demon Slayer. He was a demon affiliated with the Twelve Demon Moons, holding the position of Lower Rank Five",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/26.webp",
      "affiliation_id": 5,
      "arc_id": 5,
      "quote": "Since I was the one with the most power, there was no one who could protect me... who could shield me. The more powerful I became, the less I remembered about being a human."
    },
    {
      "id": 27,
      "name": "Kagaya Ubuyashiki",
      "age": 23,
      "gender": "Male",
      "race": "Human",
      "description": "He is the 97th leader of the Demon Slayer Corps known mainly as Oyakata-sama by his subordinates and peers and is also the head of the Ubuyashiki Family.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/27.webp",
      "affiliation_id": 1,
      "arc_id": 6,
      "quote": "I know what eternity is. Eternity is human feeling. Only human feelings last forever and are undying."
    },
    {
      "id": 28,
      "name": "Tengen Uzui",
      "age": 23,
      "gender": "Male",
      "race": "Human",
      "description": "Tengen is the Sound Hashira of the Demon Slayer Corps and a very powerful and skilled combatant. He is an eccentric and flashy individual, always wanting to be \"flamboyant\", possessing a need for everything to be flashy and outstanding.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/28.webp",
      "affiliation_id": 2,
      "arc_id": 6,
      "quote": "I am a god! You three are trash! That´s the first thing you need to pound into your heads! Drive it in! You´re to turn into dogs if I tell you to! Turn into monkeys if I say so! And let me repeat! I am a god!"
    },
    {
      "id": 29,
      "name": "Mitsuri Kanroji",
      "age": 19,
      "gender": "Female",
      "race": "Human",
      "description": "Mitsuri is the Love Hashira of the Demon Slayer Corps. She is always kind to others, however, despite her gentle and seemingly innocent demeanor, Mitsuri will show no mercy in the face of demons",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/29.webp",
      "affiliation_id": 2,
      "arc_id": 6,
      "quote": "\tIs it okay for a girl to be this strong? I still worry that someone may ask that, as though I´m not human. In my fear, I was suppressing my strength. But not anymore. Leave this to me. I will protect everyone."
    },
    {
      "id": 30,
      "name": "Kyojuro Rengoku",
      "age": 20,
      "gender": "Male",
      "race": "Human",
      "description": "Kyojuro Rengoku, the Flame Hashira, possesses exceptional physical attributes and an indomitable spirit, making him a formidable warrior in the Demon Slayer Corps. With his incredible endurance, immense stamina, speed, reflexes, and impeccable combat skills, Rengoku proves to be a monster on the battlefield, surpassing his adversaries and showcasing his mastery of Flame Breathing.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/30.webp",
      "affiliation_id": 2,
      "arc_id": 6,
      "quote": "Life is a series of decisions. You never have unlimited options or unlimited time to think, but what you choose in that instant defines who you are."
    },
    {
      "id": 31,
      "name": "Muichiro Tokito",
      "age": 14,
      "gender": "Male",
      "race": "Human",
      "description": "He is the Mist Hashira and despite his awkward and unaccommodating personality, Muichiro is a prodigy in the Demon Slayer Corp. Impassive and, at times, obtuse, he tends to think only for himself and operates on logic alone ",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/31.webp",
      "affiliation_id": 2,
      "arc_id": 6,
      "quote": "Even if I lose my memories, my body will remember that anger that will not leave me until I die. It´s why I trained so hard that I vomited blood to destroy demons. And more... to eradicate them!"
    },
    {
      "id": 32,
      "name": "Gyomei Himejima",
      "age": 27,
      "gender": "Male",
      "race": "Human",
      "description": "He is a Demon Slayer of the Demon Slayer Corps and the current Stone Hashira. Gyomei also serves as the mentor of Genya Shinazugawa. He is stated to be the strongest Demon Slayer in the entire Demon Slayer Corps.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/32.webp",
      "affiliation_id": 2,
      "arc_id": 6,
      "quote": "We are proud to live and die as human beings. Don´t act like your worthless ideas are supreme and force them on others."
    },
    {
      "id": 33,
      "name": "Obanai Iguro",
      "age": 21,
      "gender": "Male",
      "race": "Human",
      "description": "He is a Demon Slayer of the Demon Slayer Corps and the current Serpent Hashira. Obanai is a very harsh and strict individual who shows no concern for those who do not abide by the rules of the Demon Slayer Corps.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/33.webp",
      "affiliation_id": 2,
      "arc_id": 6,
      "quote": "I want to die defeating Muzan, and I pray that it will purify my filthy blood. Then, if I am reborn as a human being in a peaceful world without demons, I will tell you of my feelings for you."
    },
    {
      "id": 34,
      "name": "Sanemi Shinazugawa",
      "age": 21,
      "gender": "Male",
      "race": "Human",
      "description": "He is a Demon Slayer of the Demon Slayer Corps and the current Wind Hashira. Sanemi is also the older brother of Genya Shinazugawa. Sanemi´s cold, rude, and dismissive behavior is the result of losing too many people he cared about in the past.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/34.webp",
      "affiliation_id": 2,
      "arc_id": 6,
      "quote": "I know how unfair the world is... because good people... die one after another."
    },
    {
      "id": 35,
      "name": "Enmu",
      "age": null,
      "gender": "Male",
      "race": "Demon",
      "description": "He was a demon affiliated with the Twelve Demon Moons, holding the position of Lower Rank One. As Lower Rank One, Enmu was the strongest Lower Rank and closest to matching the strength of the Upper Ranks Demon Moons.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/35.webp",
      "affiliation_id": 4,
      "arc_id": 6,
      "quote": "All human hearts are the same. So fragile and weak, like glasswork."
    },
    {
      "id": 36,
      "name": "Akaza",
      "age": 133,
      "gender": "Male",
      "race": "Demon",
      "description": "He is a demon affiliated with the Twelve Demon Moons, holding the position of Upper Rank Three. As the third highest ranking member of the Twelve Demon Moons, Akaza is an exceptionally powerful demon and the fourth strongest in existence, after Doma, Kokushibo, and Muzan.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/36.webp",
      "affiliation_id": 4,
      "arc_id": 7,
      "quote": "You misunderstand, Tanjiro. I only despise the weak. I only spit on weaklings. Yes. Weaklings make me sick."
    },
    {
      "id": 37,
      "name": "Daki",
      "age": 126,
      "gender": "Female",
      "race": "Demon",
      "description": "She is a demon affiliated with the Twelve Demon Moons, being the secondary holder of the position of Upper Rank Six, a position she shared with the primary holder, her older brother Gyutaro.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/37.webp",
      "affiliation_id": 4,
      "arc_id": 8,
      "quote": "Demons never grow old. And they don´t need money to eat. They don´t get sick. They don´t die. They have nothing to lose. We beautiful, powerful demons... can do anything we want!"
    },
    {
      "id": 38,
      "name": "Gyutaro",
      "age": 126,
      "gender": "Male",
      "race": "Demon",
      "description": "As the real Upper Rank Six, Gyutaro was an extremely powerful demon with over a century´s worth of combat experience under his belt, having killed and devoured 15 Hashira in the past",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/38.webp",
      "affiliation_id": 4,
      "arc_id": 8,
      "quote": "The sufferings of my past were lessons on what to do to others as revenge! If I don´t cause misery equal to my own unhappiness, I´ll never balance the scales!"
    },
    {
      "id": 39,
      "name": "Doma",
      "age": 133,
      "gender": "Male",
      "race": "Demon",
      "description": "He is a demon affiliated with the Twelve Demon Moons, holding the second highest position, Upper Rank Two. Doma is outwardly friendly and cheery, possessing an approachable and charismatic air.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/39.webp",
      "affiliation_id": 4,
      "arc_id": 8,
      "quote": "You know, everyone´s afraid of dying. And that´s why I eat them all up. Now they get to live together with me. Forever."
    },
    {
      "id": 40,
      "name": "Hantengu",
      "age": 200,
      "gender": "Male",
      "race": "Demon",
      "description": "He is a demon affiliated with the Twelve Demon Moons, holding the position of Upper Rank Four. Hantengu seems to believe that he is completely innocent despite the obvious evidence pointing toward his numerous crimes",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/40.webp",
      "affiliation_id": 4,
      "arc_id": 9,
      "quote": "You brutal fiends who torment the weak... Atrocious... Offensive... to the extreme. Damn you, awful villains..."
    },
    {
      "id": 41,
      "name": "Gyokko",
      "age": 133,
      "gender": "Male",
      "race": "Demon",
      "description": "He is a demon affiliated with the Twelve Demon Moons, holding the position of Upper Rank Five. Gyokko is an easily excitable demon, constantly fawning over new inspirations for what he deems his \"art\" or what he finds to be sublime, sometimes even going against his initial impressions.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/41.webp",
      "affiliation_id": 4,
      "arc_id": 9,
      "quote": "Hyo, hyo! What a childish provocation! Did you think I, Gyokko, would be undone with such prattle? You seem desperate. It´s embarrassing."
    },
    {
      "id": 42,
      "name": "Hotaru Haganezuka",
      "age": 37,
      "gender": "Male",
      "race": "Human",
      "description": "He is a swordsmith affiliated with the Demon Slayer Corps. Hotaru is a rather hot-blooded individual. He seems to show very little care, if any, about anything besides the swords he creates. His passion for swords is very strong.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/42.webp",
      "affiliation_id": 1,
      "arc_id": 1,
      "quote": "I don´t care! That doesn´t matter! It´s your fault! It´s all your fault! The katana broke because you were weak! Otherwise, would my katana break?! I am going to kill you!"
    },
    {
      "id": 43,
      "name": "Nakime",
      "age": 113,
      "gender": "Female",
      "race": "Demon",
      "description": "She is a demon who owns and controls the Infinity Castle and serves directly under Muzan Kibutsuji. Nakime is aloof and taciturn, almost never speaking and displaying little to no emotion or will outside of obeying orders. She was extremely loyal to Muzan, listening and following his every order faultlessly.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/43.webp",
      "affiliation_id": 4,
      "arc_id": 7,
      "quote": "... I decline."
    },
    {
      "id": 44,
      "name": "Kokushibo",
      "age": 480,
      "gender": "Male",
      "race": "Demon",
      "description": "He is a demon affiliated with the Twelve Denon Moons, holding the highest position, Upper Rank One. He has battled countless Demon Slayers and has amassed vast experience and knowledge over his near 500-year long life.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/44.webp",
      "affiliation_id": 4,
      "arc_id": 9,
      "quote": "You opened a path... to reach further heights.... and you abandoned it.... So weak."
    },
    {
      "id": 45,
      "name": "Yoriichi",
      "age": 24,
      "gender": "Male",
      "race": "Human",
      "description": "He is a Demon Slayer who lived nearly 500 years ago during the Sengoku era. He was the most powerful Demon Slayer to have ever existed.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/45.webp",
      "affiliation_id": 1,
      "arc_id": 9,
      "quote": "My dream was to live a quiet life with my family in a small house where we would sleep side by side. That would have been enough. But even that did not come true. Demons exist in this beautiful world."
    }
  ]


  getDemonSlayerCharacterList(): CharacterModel[] {
    return this.characterList.map(
      element => this.getCharacterModel(element)
    );
  }

  getCharacterModel(data: any): CharacterModel {
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      img: data.img
    }
  }
}
