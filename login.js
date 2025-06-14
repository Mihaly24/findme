document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const flagPart1 = 'VEk0MDR7a3Vt';

    window.location.href = `page-one.html#${flagPart1}`;
});