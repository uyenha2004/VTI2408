document.getElementById('addPostForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    var title = document.getElementById('title').value;
    var body = document.getElementById('body').value;

    var postData = {
        title: title,
        body: body
    };

    // Make a POST request using $.ajax to submit data
    $.ajax({
        type: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        contentType: 'application/json',
        data: JSON.stringify(postData),
        success: function(response) {
            console.log(response);
        },
        error: function(error) {
            console.error('Error:', error);
        }
    });
});
