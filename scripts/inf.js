            const pageWidth = document.documentElement.clientWidth;
            const pageHeight = document.documentElement.scrollHeight;
            let idNum = 0;
            let pixels = 180;
            function GetColor() {
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }
            function GetSizes() {
                window.randNumX = Math.trunc(Math.random() * ((pageWidth - 120) - 20) + 50);
                window.randNumY = Math.trunc(Math.random() * (1000 - 100) + 100);
                if (!window.isMobile) window.randSize = Math.trunc(Math.random() * (100 - 40) + 40);
		    else  window.randSize = Math.trunc((Math.random() * (100 - 40) + 40)/2);
            }
            function ChangeColor(x) {
                x.style.background = GetColor();
            }
            function Random(placeY) {
                let randAmount = Math.trunc(Math.random() * (11 - 1) + 5);
                for (i = 0; i < randAmount; i++) {
                    GetSizes();
                    document.body.innerHTML += '<div onclick = "ChangeColor(this)" onmouseenter = "ChangeColor(this)" id ="circle' + idNum + '" style="width: ' + randSize + 'px; height: ' + randSize + 'px; border-radius: 60px; position: relative; top: ' + (randNumY + placeY) + 'px; left: ' + randNumX + 'px; transition: 1s; background: whitesmoke;"></div>';
                    idNum++;
                }   
                for (i = 0; i < randAmount; i++) {
                    GetSizes();
                    document.body.innerHTML += '<div onclick = "ChangeColor(this)" onmouseenter = "ChangeColor(this)" id ="circle' + idNum + '" style="width: ' + randSize + 'px; height: ' + randSize + 'px; border-radius: 60px; position: relative; top: ' + ((randNumY + placeY)* 8) + 'px; left: ' + randNumX + 'px; transition: 1s; background: whitesmoke;"></div>';
                    idNum++;
                }
            }
            window.addEventListener('scroll', function() {
            if (pageYOffset > pixels) {
                pixels+=200;
                Random(pixels);
            }});