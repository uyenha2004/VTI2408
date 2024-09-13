function updatePost() {
    var postId = document.getElementById('post-id').value;
    var title = document.getElementById('post-title').value;
    var body = document.getElementById('post-body').value;

    if (!postId || !title || !body) {
        alert("Please fill in all fields!");
        return;
    }

    // API endpoint for updating a post by ID
    var apiUrl = 'https://jsonplaceholder.typicode.com/posts/' + postId;

    // Data to be updated
    var data = {
        title: title,
        body: body
    };

    // Use jQuery's $.ajax() to perform a PUT request
    $.ajax({
        url: apiUrl,
        type: 'PUT',
        data: JSON.stringify(data),
        contentType: 'application/json; charset=UTF-8',
        success: function(response) {
            console.log('Success:', response);
            document.getElementById('message').innerText = "Post updated successfully!";
            document.getElementById('post-id').value = '';
            document.getElementById('post-title').value = '';
            document.getElementById('post-body').value = '';
        },
        error: function(xhr, status, error) {
            console.error('Error:', error);
            document.getElementById('message').innerText = "An error occurred while updating the post.";
        }
    });
}
