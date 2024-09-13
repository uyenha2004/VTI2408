function loadPosts(params) {
    
    $.ajax({
        type: "GET",
        url: 'https://jsonplaceholder.typicode.com/posts',
        success: function(posts) {
            const postList = document.getElementById('postList');
            postList.innerHTML = ''; // Xóa nội dung cũ
            
            // Lặp qua các bài viết và thêm tiêu đề vào danh sách
            posts.forEach(post => {
                const listItem = document.createElement('li');
                listItem.textContent = post.title;
                postList.appendChild(listItem);
            });
        },
        error: function(error) {
            console.error('Lỗi khi tải bài viết:', error);
        }
    });

};

var button= document.getElementById('loadPosts');
console.log(button);
button.addEventListener('click',loadPosts)


