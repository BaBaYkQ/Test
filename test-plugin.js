(function() {
    // Спроба додати кнопку в правий верхній кут
    function addTestButton() {
        var btn = document.createElement('div');
        btn.innerText = '🐞 TEST';
        btn.style.position = 'fixed';
        btn.style.top = '10px';
        btn.style.right = '10px';
        btn.style.zIndex = 9999;
        btn.style.backgroundColor = 'red';
        btn.style.color = 'white';
        btn.style.padding = '8px 12px';
        btn.style.borderRadius = '20px';
        btn.style.fontSize = '14px';
        btn.style.cursor = 'pointer';
        btn.onclick = function() {
            alert('Plugin works!');
        };
        document.body.appendChild(btn);
        console.log('Test button added');
    }

    if (document.body) {
        addTestButton();
    } else {
        window.addEventListener('load', addTestButton);
    }
})();
