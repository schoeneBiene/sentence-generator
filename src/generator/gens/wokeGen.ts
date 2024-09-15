import { getRandom } from "../../util/arrayUtil";

const wokeNouns = [
    "pronouns",
    "oppression",
    "gender",
    "vencord",
    "discord"
]

const wokeVerbs = [
    "oppress",
    "transition",
    "open-source",
    "program",
    "support"
]

const wokeAdjectives = [
    "gay",
    "trans",
    "pan",
    "open-source",
    "oppressed"
]

export function wokeSentence() {
    const noun = getRandom(wokeNouns);
    let verb = getRandom(wokeVerbs);
    const adj = getRandom(wokeAdjectives);
    const noun2 = getRandom(wokeNouns);

    if(!noun.endsWith("s")) {
        if(verb.endsWith("s")) {
            verb += "es"
        } else {
            verb += "s";
        }
    }

    return noun + " " + verb + " " + adj + " " + noun2;
}

