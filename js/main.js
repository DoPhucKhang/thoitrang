// Đợi DOM load xong hoàn toàn
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Xử lý Form Đăng Nhập (Mẫu)
    const loginForm = document.getElementById('loginForm');
    if(loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const user = document.getElementById('username').value;
            alert('Chào mừng thành viên: ' + user + ' đã đăng nhập thành công!');
            window.location.href = 'index.html'; // Chuyển về trang chủ sau khi đăng nhập
        });
    }

    // 2. Xử lý tính năng Comments Phản hồi ở trang chi tiết
    const commentForm = document.getElementById('commentForm');
    const commentList = document.getElementById('commentList');

    if(commentForm && commentList) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Ngăn trang bị reload lại

            // Lấy dữ liệu người dùng nhập vào
            const user = document.getElementById('commentUser').value;
            const text = document.getElementById('commentText').value;

            // Tạo phần tử danh sách (li) mới bằng JavaScript
            const newComment = document.createElement('li');
            newComment.innerHTML = `<strong>${user}:</strong> ${text}`;

            // Thêm bình luận mới vào đầu danh sách hiển thị
            commentList.insertBefore(newComment, commentList.firstChild);

            // Xóa sạch nội dung ô nhập sau khi gửi thành công
            document.getElementById('commentUser').value = '';
            document.getElementById('commentText').value = '';
        });
    }
});
