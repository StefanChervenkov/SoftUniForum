export default function createNewPost(e) {
    e.preventDefault();
    const createPostFormEl = e.target.closest('form');
    const formData = Object.fromEntries(new FormData(createPostFormEl).entries());

    //check whether all fields are filled out
    if (Object.values(formData).includes('')) {
        alert('All fields are mandatory');
        return;
    }

    // Generate a unique ID for each post
    const postId = `post-${Date.now()}-${Math.floor(Math.random() * 10000)}`;

    const postData = {...formData, postId};

    fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(postData)
    })
    .then(res => {
        if (res.ok) {
            createPostFormEl.reset();
            
        }
    })
    
    
    
    
}