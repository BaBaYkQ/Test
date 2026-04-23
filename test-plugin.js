(function () {

    Lampa.Plugins.add({
        id: 'test_plugin',
        title: 'Test Plugin',
        version: '1.0.0',

        init: function () {
            console.log('Test Plugin init');
        },

        start: function () {
            this.addButton();
        },

        addButton: function () {

            if (document.getElementById('lampa_test_btn')) return;

            var btn = document.createElement('div');
            btn.id = 'lampa_test_btn';

            btn.innerText = '🐞 TEST';

            btn.style.position = 'fixed';
            btn.style.top = '10px';
            btn.style.right = '10px';
            btn.style.zIndex = 999999;

            btn.style.background = 'red';
            btn.style.color = 'white';
            btn.style.padding = '8px 12px';
            btn.style.borderRadius = '20px';
            btn.style.fontSize = '14px';
            btn.style.cursor = 'pointer';

            btn.onclick = function () {
                Lampa.Noty && Lampa.Noty.show('Plugin works 🔥');
                console.log('Plugin works');
            };

            document.body.appendChild(btn);
        }
    });

})();
