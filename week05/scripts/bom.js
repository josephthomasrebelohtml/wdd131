const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener('click', function () {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    };

    input.focus();

});

let chaptersArray = getChaptersList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
    let li = document.createElement("li");

    let deleteButton = document.createElement("button");
    li.textContent = item;
    deleteButton.textContent = "❌";
    deleteButton.setAttribute('aria-label', 'close');
    deleteButton.setAttribute('id', 'delete-button');
    li.appendChild(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus;
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMChaptersList', JSON.stringify(chaptersArray));
}

function getChaptersList() {
    let storage = localStorage.getItem('myFavBOMChaptersList');
    return JSON.parse(storage);
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}