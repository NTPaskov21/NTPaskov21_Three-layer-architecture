var usersDatabase = [
    { username: 'NTPaskov21', password: '12345' }
];

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var authenticated = usersDatabase.some(function(user) {
        return user.username === username && user.password === password;
    });

    if (authenticated) {
        document.getElementById('result').textContent = 'Access granted!';
    } else {
        document.getElementById('result').textContent = 'Access denied. Invalid username or password.';
    }
});