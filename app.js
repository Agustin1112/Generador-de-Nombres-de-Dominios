// Listo los pronombres, adjetivos y sustantivos
let pronouns = ['the', 'our'];
let adjectives = ['great', 'big'];
let nouns = ['jogger', 'racoon'];

// Extensiones de dominio
let extensions = ['.com', '.net', '.us', '.io'];


let domainHacks = ['.es', '.ly', '.to'];

// Hago la función para generar combinaciones de nombres de dominio
function generateDomains(pronouns, adjectives, nouns, extensions, domainHacks) {
    let domains = [];

    // Genero combinaciones con pronombres, adjetivos y sustantivos
    for (let pronoun of pronouns) {
        for (let adj of adjectives) {
            for (let noun of nouns) {
                for (let ext of extensions) {
                    domains.push(`${pronoun}${adj}${noun}${ext}`);
                }
            }
        }
    }

    // Generar combinaciones con domain hacks
    for (let pronoun of pronouns) {
        for (let adj of adjectives) {
            for (let noun of nouns) {
                for (let hack of domainHacks) {
                    domains.push(`${pronoun}${adj}${noun}${hack}`);
                }
            }
        }
    }

    return domains;
}

// Llamo a la función y mostrar los resultados
let allDomains = generateDomains(pronouns, adjectives, nouns, extensions, domainHacks);
console.log(allDomains);
