import createNewPost from "./createNewPost.js";
const postButton = document.querySelector('.new-topic-buttons .public');
const cancelButton = document.querySelector('.new-topic-buttons .cancel');


function attachEventListeners() {
    postButton.addEventListener('click', createNewPost);
    cancelButton.addEventListener('click', (e) => { 
        e.preventDefault();
        e.target.closest('form').reset() });
}

attachEventListeners();