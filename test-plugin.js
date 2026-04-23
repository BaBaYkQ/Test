(function() {
    function addTestButton() {
        let btn = document.createElement('div');
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

        let clickCount = 0;
        btn.onclick = function() {
            clickCount++;
            btn.innerText = '🐞 ' + clickCount;
            btn.style.backgroundColor = 'green';
            setTimeout(() => btn.style.backgroundColor = 'red', 300);

            // Спроба показати системне повідомлення Lampa
            try {
                if (typeof Lampa !== 'undefined' && Lampa.Notification && Lampa.Notification.show) {
                    Lampa.Notification.show('Плагін працює! Кліків: ' + clickCount);
                } else {
                    console.log('Lampa.Notification не знайдено');
                }
            } catch(e) {}
        };
        document.body.appendChild(btn);
    }
    if (document.body) addTestButton();
    else window.addEventListener('load', addTestButton);
})();
