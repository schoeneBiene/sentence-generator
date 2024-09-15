import generators from "./generator/gen";

const genButton = document.getElementById("genButton") as HTMLButtonElement;
const agreementCheckbox = document.getElementById("agreement") as HTMLInputElement;
const sentenceCard = document.getElementById("sentence") as HTMLElement;
const select = document.getElementById("type-select") as HTMLSelectElement;

genButton.disabled = true;

function updateDisabled() {
    genButton.disabled = !(agreementCheckbox.checked && !select.selectedOptions[0].disabled);
}

agreementCheckbox.addEventListener("change", () => {
    updateDisabled();
})

select.addEventListener("change", () => {
    updateDisabled();
})

generators.forEach((_, title) => {
    const option = document.createElement("option") as HTMLOptionElement;

    option.innerHTML = title;

    select.appendChild(option);
})

genButton.addEventListener("click", () => {
    const selected = select.selectedOptions[0];

    const sentenceGen = generators.get(selected.innerHTML);

    if(sentenceGen == null) return;

    sentenceCard.innerHTML = sentenceGen();
})
