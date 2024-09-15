import {wokeSentence} from "./gens/wokeGen"

const generators = new Map<string, () => string>

generators.set("Woke", wokeSentence)

export default generators;
