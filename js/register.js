document.getElementById("registerForm").onsubmit = function (event) {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let errorMessage = "";

    if (!username) {
        errorMessage += "用戶名還未填寫\n";
    }
    if (!email) {
        errorMessage += "請填寫電子郵件\n";
    }
    if (!password) {
        errorMessage += "請填寫密碼\n";
    }

    if (errorMessage) {
        alert(errorMessage);
        event.preventDefault();
    }
};