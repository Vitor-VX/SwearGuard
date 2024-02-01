const { profanity } = require('@2toad/profanity');
const {
    removeCharacters,
    forbiddenWordsFunction
} = require("../utils/utils");

const forbiddenWordsPtBr = [
    'Anus', 'Baba-ovo', 'Babaovo', 'Babaca', 'Bacura', 'Bagos', 'Baitola', 'Bebum', 'Besta', 'Bicha',
    'Bisca', 'Bixa', 'Boazuda', 'Boceta', 'Boco', 'Boiola', 'Bolagato', 'Boquete', 'Bolcat', 'Bosseta',
    'Bosta', 'Bostana', 'Brecha', 'Brexa', 'Brioco', 'Bronha', 'Buca', 'Buceta', 'Bunda', 'Bunduda',
    'Burra', 'Burro', 'Busseta', 'Cachorra', 'Cachorro', 'Cadela', 'Caga', 'Cagado', 'Cagao', 'Cagona',
    'Canalha', 'Caralho', 'Casseta', 'Cassete', 'Checheca', 'Chereca', 'Chibumba', 'Chibumbo', 'Chifruda',
    'Chifrudo', 'Chota', 'Chochota', 'Chupada', 'Chupado', 'Clitoris', 'Cocaina', 'Coco', 'Corna', 'Corno',
    'Cornuda', 'Cornudo', 'Corrupta', 'Corrupto', 'Cretina', 'Cretino', 'Cruz-credo', 'Cu', 'Culhao',
    'Curalho', 'Cuzao', 'Cuzuda', 'Cuzudo', 'Debil', 'Debiloide', 'Defunto', 'Demonio', 'Difunto', 'Doida',
    'Doido', 'Egua', 'Escrota', 'Escroto', 'Esporrada', 'Esporrado', 'Esporro', 'Estupida', 'Estupidez',
    'Estupido', 'Fedida', 'Fedido', 'Fedor', 'Fedorenta', 'Feia', 'Feio', 'Feiosa', 'Feioso', 'Feioza',
    'Feiozo', 'Felacao', 'Fenda', 'Foda', 'Fodao', 'Fode', 'Fodida', 'Fodido', 'Fornica', 'Fudendo',
    'Fudecao', 'Fudida', 'Fudido', 'Furada', 'Furado', 'Furão', 'Furnica', 'Furnicar', 'Furo', 'Furona',
    'Gaiata', 'Gaiato', 'Gay', 'Gonorrea', 'Gonorreia', 'Gosma', 'Gosmenta', 'Gosmento', 'Grelinho', 'Grelo',
    'Homo-sexual', 'Homossexual', 'Homossexual', 'Idiota', 'Idiotice', 'Imbecil', 'Iscrota', 'Iscroto', 'Japa',
    'Ladra', 'Ladrao', 'Ladroeira', 'Ladrona', 'Lalau', 'Leprosa', 'Leproso', 'Lésbica', 'Macaca', 'Macaco',
    'Machona', 'Machorra', 'Manguaca', 'Mangua¦a', 'Masturba', 'Meleca', 'Merda', 'Mija', 'Mijada', 'Mijado',
    'Mijo', 'Mocrea', 'Mocreia', 'Moleca', 'Moleque', 'Mondronga', 'Mondrongo', 'Naba', 'Nadega', 'Nojeira',
    'Nojenta', 'Nojento', 'Nojo', 'Olhota', 'Otaria', 'Ot-ria', 'Otario', 'Ot-rio', 'Paca', 'Paspalha',
    'Paspalhao', 'Paspalho', 'Pau', 'Peia', 'Peido', 'Pemba', 'Pênis', 'Pentelha', 'Pentelho', 'Perereca',
    'Peru', 'Pica', 'Picao', 'Pilantra', 'Piranha', 'Piroca', 'Piroco', 'Piru', 'Porra', 'Prega', 'Prostibulo',
    'Prost-bulo', 'Prostituta', 'Prostituto', 'Punheta', 'Punhetao', 'Pus', 'Pustula', 'Puta', 'Puto',
    'Puxa-saco', 'Puxasaco', 'Rabao', 'Rabo', 'Rabuda', 'Rabudao', 'Rabudo', 'Rabudona', 'Racha', 'Rachada',
    'Rachadao', 'Rachadinha', 'Rachadinho', 'Rachado', 'Ramela', 'Remela', 'Retardada', 'Retardado',
    'Ridícula', 'Rola', 'Rolinha', 'Rosca', 'Sacana', 'Safada', 'Safado', 'Sapatao', 'Sifilis', 'Siririca',
    'Tarada', 'Tarado', 'Testuda', 'Tezao', 'Tezuda', 'Tezudo', 'Trocha', 'Trolha', 'Troucha', 'Trouxa',
    'Troxa', 'Vaca', 'Vagabunda', 'Vagabundo', 'Vagina', 'Veada', 'Veadao', 'Veado', 'Viada', 'Víado',
    'Viadao', 'Xavasca', 'Xerereca', 'Xexeca', 'Xibiu', 'Xibumba', 'Xota', 'Xochota', 'Xoxota', 'Xana', 'Xaninha'
];

const forbiddenWordsEn = [
    'Anus', 'Butt-kisser', 'Buttkisser', 'Idiot', 'Fool', 'Testicles', 'Homosexual', 'Drunk', 'Beast', 'Bitch',
    'Bisexual', 'Bixby', 'Fag', 'Vagina', 'Dummy', 'Gay', 'Cat', 'Blowjob', 'Blow cat', 'Bosseta', 'Poop',
    'Poop hole', 'Gap', 'Anus', 'Cheater', 'Cock', 'Screw', 'Pig', 'Bitch', 'Bitchy', 'Fissure', 'Gap',
    'Asshole', 'Butt', 'Big butt', 'Stupid', 'Stupid', 'Pussy', 'Cunt', 'Butt', 'Big butt', 'Dumb', 'Drunkard',
    'Foolish', 'Dead person', 'Demon', 'Dead person', 'Crazy', 'Madman', 'Mare', 'Ugly woman', 'Ugly man',
    'Lesbian', 'Monkey', 'Chimp', 'Macho', 'Butch', 'Drunk', 'Drunk', 'Masturbate', 'Booger', 'Shit', 'Pee',
    'Pissed', 'Pissed off', 'Piss', 'Crap', 'Moron', 'Silly', 'Ugly', 'Ugly', 'Ugly woman', 'Ugly man',
    'Ugly woman', 'Ugly man', 'Fellatio', 'Slit', 'Fuck', 'Fucker', 'Fuck', 'Fucked', 'Fucked', 'Fornicate',
    'Fucking', 'Fucking', 'Screwed up', 'Fucked up', 'Fucked', 'Screwed', 'Bitchy', 'Asshole', 'Butt',
    'Big butt', 'Ass', 'Cheater', 'Penis', 'Penis', 'Ass', 'Vagina', 'Hairy', 'Hairy', 'Masturbator', 'Booger',
    'Shit', 'Piss', 'Pissed', 'Pissed off', 'Piss', 'Booger', 'Booger', 'Tomboy', 'Tranny', 'Tranny', 'Idiot',
    'Idiocy', 'Imbecile', 'Fool', 'Jap', 'Thief', 'Thief', 'Thief', 'Thief', 'Dummy', 'Leprous', 'Leprous',
    'Lesbian', 'Monkey', 'Macho', 'Butch', 'Drunk', 'Drunk', 'Masturbate', 'Booger', 'Shit', 'Pee', 'Pissed',
    'Pissed off', 'Piss', 'Moron', 'Silly', 'Ugly', 'Ugly', 'Ugly woman', 'Ugly man', 'Ugly woman', 'Ugly man',
    'Fellatio', 'Slit', 'Fuck', 'Fucker', 'Fuck', 'Fucked', 'Fucked', 'Fornicate', 'Fucking', 'Fucking', 'Screwed up',
    'Fucked up', 'Fucked', 'Screwed', 'Bitchy', 'Asshole', 'Butt', 'Big butt', 'Ass', 'Cheater', 'Penis', 'Penis',
    'Ass', 'Vagina', 'Hairy', 'Hairy', 'Masturbator', 'Booger', 'Shit', 'Piss', 'Pissed', 'Pissed off', 'Piss',
    'Booger', 'Booger', 'Tomboy', 'Tranny', 'Tranny', 'Idiot', 'Idiocy', 'Imbecile', 'Fool', 'Jap', 'Thief',
    'Thief', 'Thief', 'Thief', 'Dummy', 'Leprous', 'Leprous', 'Leprous', 'Lesbian', 'Monkey', 'Macho', 'Butch',
    'Drunk', 'Drunk', 'Masturbate', 'Booger', 'Shit', 'Pee', 'Pissed', 'Pissed off', 'Piss', 'Moron', 'Silly',
    'Ugly', 'Ugly', 'Ugly woman', 'Ugly man', 'Ugly woman', 'Ugly man', 'Fellatio', 'Slit', 'Fuck', 'Fucker',
    'Fuck', 'Fucked', 'Fucked', 'Fornicate', 'Fucking', 'Fucking', 'Screwed up', 'Fucked up', 'Fucked', 'Screwed',
    'Bitchy', 'Asshole', 'Butt', 'Big butt', 'Ass', 'Cheater', 'Penis', 'Penis', 'Ass', 'Vagina', 'Hairy', 'Hairy',
    'Masturbator', 'Booger', 'Shit', 'Piss', 'Pissed', 'Pissed off', 'Piss', 'Booger', 'Booger', 'Tomboy', 'Tranny',
    'Tranny', 'Idiot', 'Idiocy', 'Imbecile', 'Fool', 'Jap', 'Thief', 'Thief', 'Thief', 'Thief', 'Dummy', 'Leprous',
    'Leprous', 'Leprous', 'Lesbian', 'Monkey', 'Macho', 'Butch', 'Drunk', 'Drunk', 'Masturbate', 'Booger', 'Shit',
    'Pee', 'Pissed', 'Pissed off', 'Piss', 'Moron', 'Silly', 'Ugly', 'Ugly', 'Ugly woman', 'Ugly man', 'Ugly woman',
    'Ugly man', 'Fellatio', 'Slit', 'Fuck', 'Fucker', 'Fuck', 'Fucked', 'Fucked', 'Fornicate', 'Fucking', 'Fucking',
    'Screwed up', 'Fucked up', 'Fucked', 'Screwed', 'Bitchy', 'Asshole', 'Butt', 'Big butt', 'Ass', 'Cheater', 'Penis',
    'Penis', 'Ass', 'Vagina', 'Hairy', 'Hairy', 'Masturbator', 'Booger', 'Shit', 'Piss', 'Pissed', 'Pissed off', 'Piss',
    'Booger', 'Booger', 'Tomboy', 'Tranny', 'Tranny'
];

const checkWordIlicita = (word, lang = "pt-br") => {
    const wordWithoutSpecialCharacters = removeCharacters(word);

    if (profanity.exists(wordWithoutSpecialCharacters)) {
        return true;
    }

    switch (lang) {
        case "pt-br":
            return forbiddenWordsFunction(forbiddenWordsPtBr, wordWithoutSpecialCharacters).length > 0;
        case "english":
            return forbiddenWordsFunction(forbiddenWordsEn, wordWithoutSpecialCharacters).length > 0;
        default:
            return false;
    }
};

module.exports = {
    checkWordIlicita
};