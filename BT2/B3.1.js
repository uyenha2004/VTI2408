// Define the function to delete a post
function deletePost(e) {
    e.preventDefault(); // Prevent default form submission

    var postId = document.getElementById('postId').value;

    // Make sure postId is not empty
    if (!postId) {
        alert('Please enter a Post ID.');
        return;
    }

    // Use AJAX to send a DELETE request
    $.ajax({
        type: 'DELETE',
        url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
        success: function(response) {
            // Show success message
            document.getElementById('message').innerText = ` ID ${postId} xóa thành công!`;
            document.getElementById('message').style.display = 'block';
        },
        error: function(error) {
            console.error('Error:', error);
            alert('There was an error deleting the post. Please try again.');
        }
    });
}

// Add the event listener for the form submission
document.getElementById('deletePostForm').addEventListener('submit', deletePost);
