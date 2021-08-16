const addContent = (e) => {
    let formData = [
        { formId: document.getElementById("id-number").value },
        { formName: document.getElementById("item-name").value },
        { formPrice: document.getElementById("item-price").value },
    ];
    localStorage.setItem("formData", JSON.stringify(formData));

    // console.log(localStorage.getItem("formData"));
    // console.log(JSON.parse(localStorage.getItem("formData"))[0].formId);
    e.preventDefault();
    displayContent();
    let btn = document.getElementById("submit-btn");

    //disable the button upon inputing a string as ID
    if (
        typeof Number(
            JSON.parse(localStorage.getItem("formData"))[0].formId
        ) === "string"
    )
        btn.disabled = true;
    else btn.disabled = false;
};

function displayContent() {
    if (JSON.parse(localStorage.getItem("formData"))) {
        //destructuring formID, formName, and formPrice
        let [{ formId }, { formName }, { formPrice }] = JSON.parse(
            localStorage.getItem("formData")
        );

        let table = document.getElementById("content-table");
        let row = table.insertRow();
        var cell = row.insertCell();
        cell.innerHTML = `${formId}`;
        var cell = row.insertCell();
        cell.innerHTML = `${formName}`;
        var cell = row.insertCell();
        cell.innerHTML = `${formPrice}`;
    }
}
