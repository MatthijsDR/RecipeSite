const setup = () => {
    // todo : implementeren
    // je mag zelf kiezen welke parameter(s) deze functie heeft
    updateAmountsForPersonCount();
    let btnAdd = document.querySelector("#btnAdd");
    btnAdd.addEventListener("click", addIngredient);
    let liElementen = document.querySelectorAll("ul li");
    for(let i = 0; i < liElementen.length; i++)
    {
        liElementen[i].addEventListener("click", toggleCheckmark);
    }
    let personCountInput = document.querySelector("#txtPersonCount");
    personCountInput.addEventListener("change", updateAmountsForPersonCount);
};

const toggleCheckmark = (event) => {
    // todo : implementeren
    // je mag zelf kiezen welke parameter(s) deze functie heeft
    let element = event.currentTarget;

    element.classList.add("checked");

};

const addIngredient = () => {
    // todo : implementeren
    // je mag zelf kiezen welke parameter(s) deze functie heeft
    let txtDescription = document.querySelector("#txtDescription");
    let ingredientName =" "+ txtDescription.value.toString();
    let txtAmountPerPerson = document.querySelector("#txtAmountPerPerson");
    let aantal = parseFloat(txtAmountPerPerson.value.toString());
    txtDescription.value ="";
    txtAmountPerPerson.value="";

    let ul = document.querySelector(".checklist");
    let li = document.createElement("li");
    li.textContent = ingredientName;
    if(!isNaN(aantal)){
        let span = document.createElement("span");
        span.setAttribute("data-amount-per-person",aantal.toString());
        span.classList.add("amount");
        li.insertBefore(span, li.firstChild);
        li.addEventListener("click", toggleCheckmark); }
    ul.appendChild(li);
    updateAmountsForPersonCount();

};

const updateAmountsForPersonCount = () => {
    // todo : implementeren
    // je mag zelf kiezen welke parameter(s) deze functie heeft
    let personCount = parseInt(document.querySelector("#txtPersonCount").value);
    document.querySelector("#txtPersonCount").value = personCount;
    if(!isNaN(personCount)) {
        let amounts = document.querySelectorAll(".amount");
        for (let i = 0; i < amounts.length; i++) {
            let amountPerPerson = parseFloat(amounts[i].getAttribute("data-amount-per-person"));
            let absoluteAmount = amountPerPerson * personCount;
            if (!isNaN(amountPerPerson)) {
                if(!Number.isInteger(absoluteAmount)){
                    absoluteAmount = absoluteAmount.toFixed(2);}

                amounts[i].textContent = absoluteAmount.toString();

            } else {
                amounts[i].textContent = "###";
            }
        }
    }
};


// todo : zorg dat setup wordt opgeroepen zodra de DOM-tree is opgebouwd
window.addEventListener("load", setup);