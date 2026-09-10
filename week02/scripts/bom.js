const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener('click', function () {
    if (input.value != '') {
        const li = document.createElement("li");

        const deleteButton = document.createElement("button");
        li.textContent = input.value;
        deleteButton.textContent = "❌";
        deleteButton.setAttribute('aria-label', 'close');
        deleteButton.setAttribute('id', 'delete-button');
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        li.appendChild(deleteButton);
        list.appendChild(li);
        input.value = "";
    };

    input.focus();

});

