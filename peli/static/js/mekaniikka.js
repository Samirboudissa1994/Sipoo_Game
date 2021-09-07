        var canvas = document.getElementById("kangas");
        var ctx = canvas.getContext("2d");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        var klikattu = false;
        var klikkiX;
        var klikkiY;
        var image = new Image();
        var image2 = new Image();
        var image3 = new Image();
        var image4 = new Image();
        var image5 = new Image();
        var image6 = new Image();
        var image8 = new Image();
        var image9 = new Image();
        var image10 = new Image();
        var image11 = new Image();
        var image12 = new Image();
        var image13 = new Image();
        var image14 = new Image();

        //var saundi = new Audio();

        //saundi.src = "/static/audio/ui/click.mp3";

        //saundi.preload = "auto";

        var peliNappula;


        var klikattu = "klikattu";
        var klikattu2 = "klikattu";

        var valinta = "eivalintaa";
        var valinta2 = "eivalintaa";

        var condition = "sairas";
        var condition2 = "kipeä";

        var dialogi = "eikayty";

        var my_gradient = ctx.createLinearGradient(0, 0, 0, 2000);
        my_gradient.addColorStop(0, "black");
        my_gradient.addColorStop(1, "white");
        ctx.fillStyle = my_gradient;


        var pelaaja = {
            tilanne:"eitilannetta",
            ika:"eiikaa",
            paikkakunta:"paikkakunta",
            status:"status",
        };

        image.src = "/static/img/kartta.png";
        image2.src = "/static/img/home.png";
        image3.src = "/static/img/splashscreen.png";
        image4.src = "/static/img/karttablurred.png";
        image5.src = "/static/img/terveysasema.png";
        image6.src = "/static/img/overworldmap.png";
        image8.src = "/static/img/laakarivastaanotto.png";
        image9.src = "/static/img/selectionterveysasema.png";
        image10.src = "/static/img/selectionlaakari.png";
        image11.src = "/static/img/laakari.png";
        image12.src = "/static/img/puhekupla.png";
        image14.src = "/static/img/kannettavaiso.png";


        draw = function(ctx, image){
            if(!image.complete){
                setTimeout(function(){
                    draw(ctx,image);
                },50);
                return;
            }
            ctx.drawImage(image,0,0)
        }

        /*function terveysAsema(){
            if(asiakasLista["A1"].condition == "sick"){
                document.getElementById("success").style.display = "inline";
                document.getElementById("karttaan").style.display = "inline";
                asiakasLista["A1"].condition = "healthy";
            } else {
                document.getElementById("fail").style.display = "inline";
                document.getElementById("sulje2").style.display = "inline";
            }
        }
        */
        function splashscreen(){
            draw(ctx,image3);
        }

        function desk(){
            mikakartta = "koti";
            console.log(mikakartta);
            document.getElementById("kayttoliittyma").style.display = "none";
            document.getElementById("kayttoliittyma2").style.display = "none";
            document.getElementById("kayttoliittyma3").style.display = "none";
            document.getElementById("terveysasema").style.display = "none";
            document.getElementById("testinappula").style.display = "none";
            document.getElementById("kylla2").style.display = "none";
            document.getElementById("ei2").style.display = "none";
            document.getElementById("sulkemisnamiska3").style.display = "none";
            document.getElementById("dialogiteksti2").style.display = "none";
            document.getElementById("kylla").style.display = "none";
            document.getElementById("ei").style.display = "none";
            document.getElementById("dialogiteksti").style.display = "none";
            document.getElementById("assistant").style.display = "inline";
            document.getElementById("assistantpuhe").style.display = "inline";
            document.getElementById("seuraavaOverlay").style.display = "inline";
            document.getElementById("assistantpuhekupla").style.display = "inline";
            ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
            draw(ctx,image2);
            if(dialogi == "kayty"){
                document.getElementById("testinappula").style.display = "inline";
                document.getElementById("uloskarttaan").style.display = "inline";
                document.getElementById("valintaboksiTausta").style.display = "inline";
                document.getElementById("asetukset").style.display = "inline";
                document.getElementById("radio").style.display = "inline";
                document.getElementById("kortti").style.display = "inline";
                document.getElementById("empty1").style.display = "inline";
                document.getElementById("empty2").style.display = "inline";
                document.getElementById("assistantpuhe").style.display = "none";
                document.getElementById("sulkevaOverlay").style.display = "none";
                document.getElementById("assistantpuhekupla").style.display = "none";
                document.getElementById("seuraavaOverlay").style.display = "none";
                document.getElementById("kannettava").style.display = "none";
                if(valinta == "terveysasema"){
                    ctx.drawImage(image9, 250, 30);
                    if(valinta2 == "laakari"){
                        ctx.drawImage(image10, 300, 30);
                }
            }
            }
        }

        //document.getElementById("seuraavaOverlay").addEventListener("click", seuraavaDialogi);

        function seuraavaDialogi(){
            document.getElementById("assistantpuhe").innerHTML = "Ennen kuin aloitetaan, <br> klikkaa kannettavaa <br> ja anna täytä lomake";
            document.getElementById("kannettava").style.display = "inline";
            document.getElementById("seuraavaOverlay").style.display = "none";
        }


        document.getElementById("kannettava").addEventListener("click", avaaLomake);
        //document.getElementById("closingdialogicon").addEventListener("click", suljedialogi);

        function suljedialogi(){
            dialogi = "kayty"
            desk();
        }

        function avaaLomake(){
            document.getElementById("kannettava").style.display = "none";
            document.getElementById("assistant").style.display = "none";
            document.getElementById("assistantpuhe").style.display = "none";
            document.getElementById("assistantpuhekupla").style.display = "none";
            document.getElementById("seuraavaOverlay").style.display = "none";
            document.getElementById("suljelomakeOverlay").style.display = "inline";
            document.getElementById("kannettavaLomake").style.display = "inline";
        }

        function suljeLomake(){
            desk();
            document.getElementById("assistantpuhe").innerHTML = "Hienoa! <br> Tässä sinulle palkkioksi radio <br> onnea peliin!";
            document.getElementById("seuraavaOverlay").style.display = "none";
            document.getElementById("suljelomakeOverlay").style.display = "none";
            document.getElementById("sulkevaOverlay").style.display = "inline";
            document.getElementById("sulkevaOverlay").style.display = "inline";
            document.getElementById("kannettavaLomake").style.display = "none";
        }


        function openUi(){
            document.getElementById("kylla").style.display = "inline";
            document.getElementById("ei").style.display = "inline";
            document.getElementById("kayttoliittyma3").style.display = "inline";
            document.getElementById("dialogiteksti").style.display = "inline";
            document.getElementById("valintaikkuna2").style.display = "none";
            document.getElementById("valintaikkuna3").style.display = "none";
            document.getElementById("testinappula").style.display = "none";
            document.getElementById("sulkemisnamiska").style.display = "none";
            document.getElementById("suljeValintaIkkunaOverlay").style.display = "none";
            document.getElementById("dialogiteksti").innerHTML = "testi1";
            if(condition == "terve"){
                document.getElementById("kylla").style.display = "none";
                document.getElementById("ei").style.display = "none";
                document.getElementById("dialogiteksti").innerHTML = "olet jo terve";
            }
            draw(ctx,image5);

        }

        function closeUi(){
            document.getElementById("kylla").style.display = "none";
            document.getElementById("ei").style.display = "none";
            document.getElementById("kayttoliittyma3").style.display = "none";
            document.getElementById("dialogiteksti").style.display = "none";
            document.getElementById("kayttoliittyma").style.display = "inline";
            document.getElementById("terveysasema").style.display = "inline";
            document.getElementById("asetukset").style.display = "inline";
            openMap();
        }

        function closePopUp(){
            document.getElementById("karttaan").style.display = "none";
        }

        function openMap(){
            mikakartta = "paakartta";
            console.log(mikakartta);
            document.getElementById("uloskarttaan").style.display = "none";
            document.getElementById("valmisteksti").style.display = "none";
            document.getElementById("terveysasema").style.display = "inline";
            document.getElementById("kayttoliittyma").style.display = "inline";
            document.getElementById("testinappula").style.display = "inline";
            document.getElementById("kortti").style.display = "inline";
            document.getElementById("empty1").style.display = "inline";
            document.getElementById("empty2").style.display = "inline";
            document.getElementById("valintaboksiTausta").style.display = "inline";
            document.getElementById("asetukset").style.display = "none";
            document.getElementById("tallennus").style.display = "none";
            document.getElementById("radio").style.display = "none";
            document.getElementById("sulkemisnamiska").style.display = "none";
            document.getElementById("kannettava").style.display = "none";
            ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
            draw(ctx,image);
            if(valinta == "terveysasema"){
                ctx.drawImage(image9, 250, 30);
            }
            if(valinta2 == "laakari"){
                ctx.drawImage(image10, 300, 30);
            }
        }


        //hahmon luonti alkaa

        function characterCreator(){
            document.getElementById("tilannevalinta").style.display = "inline";
            document.getElementById("presentaatio").style.display = "none";
            document.getElementById("gametitle").style.display = "none";
            document.getElementById("uusipeli").style.display = "none";
            document.getElementById("lataapeli").style.display = "none";
            document.getElementById("loadingnewgame").style.display = "none";

            ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
            ctx.fillStyle = my_gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.fillText("Oletko?", 10, 50);
            console.log(pelaaja.tilanne);
        }

        function ika(){
            document.getElementById("tilannevalinta").style.display = "none";
            document.getElementById("ikavalinta").style.display = "inline";
            ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
            ctx.fillStyle = my_gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.fillText("Valitse ikäryhmäsi", 10, 50);
            console.log(pelaaja.ika);
        }


        //tarkistetaan, että mitä painiketta on klikattu
        document.getElementById("tyonhakija").addEventListener("click", paivitaTilanne);
        document.getElementById("tyonantaja").addEventListener("click", paivitaTilanne2);
        document.getElementById("asiantuntija").addEventListener("click", paivitaTilanne3);


        //tilanne arvon päivitys
        function paivitaTilanne(){
            pelaaja.tilanne = document.getElementById("tyonhakija").value;
            console.log(pelaaja.tilanne);
        }

        function paivitaTilanne2(){
            pelaaja.tilanne = document.getElementById("tyonantaja").value;
            console.log(pelaaja.tilanne);
        }

        function paivitaTilanne3(){
            pelaaja.tilanne = document.getElementById("asiantuntija").value;
            console.log(pelaaja.tilanne);
        }



        function paikkakunta(){
            document.getElementById("ikavalinta").style.display = "none";
            document.getElementById("pkuntavalinta").style.display = "inline";
            ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
            ctx.fillStyle = my_gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.fillText("Valitse paikkakuntasi", 10, 50);
            console.log(pelaaja.paikkakunta);
        }

        //tarkistetaan, että mitä painiketta on klikattu
        document.getElementById("ryhma2534").addEventListener("click", paivitaIka);
        document.getElementById("ryhma3544").addEventListener("click", paivitaIka2);
        document.getElementById("ryhma4554").addEventListener("click", paivitaIka3);


        //tilanne arvon päivitys
        function paivitaIka(){
            pelaaja.ika = document.getElementById("ryhma2534").value;
            console.log(pelaaja.ika);
        }

        function paivitaIka2(){
            pelaaja.ika = document.getElementById("ryhma3544").value;
            console.log(pelaaja.ika);
        }

        function paivitaIka3(){
            pelaaja.ika = document.getElementById("ryhma4554").value;
            console.log(pelaaja.ika);
        }

        function status(){
            document.getElementById("pkuntavalinta").style.display = "none";
            document.getElementById("statusvalinta").style.display = "inline";

            ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
            ctx.fillStyle = my_gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.fillText("Valitse statuksesi", 10, 50);
            console.log(pelaaja.status);
        }


        //tarkistetaan, että mitä painiketta on klikattu
        document.getElementById("sipoo").addEventListener("click", paivitaPaikkakunta);
        document.getElementById("porvoo").addEventListener("click", paivitaPaikkakunta2);
        document.getElementById("orimattila").addEventListener("click", paivitaPaikkakunta3);


        //tilanne arvon päivitys
        function paivitaPaikkakunta(){
            pelaaja.paikkakunta = document.getElementById("sipoo").value;
            console.log(pelaaja.paikkakunta);
        }

        function paivitaPaikkakunta2(){
            pelaaja.paikkakunta = document.getElementById("porvoo").value;
            console.log(pelaaja.paikkakunta);
        }

        function paivitaPaikkakunta3(){
            pelaaja.paikkakunta = document.getElementById("orimattila").value;
            console.log(pelaaja.paikkakunta);
        }

        function valmis(){
            document.getElementById("statusvalinta").style.display = "none";
            ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
            ctx.fillStyle = my_gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            document.getElementById("valmisteksti").style.display = "inline";
            var t = setTimeout(uusiAlku, 4000);

        }

        //tarkistetaan, että mitä painiketta on klikattu
        document.getElementById("statusinput").addEventListener("click", paivitaStatus);


        //tilanne arvon päivitys
        function paivitaStatus(){
            pelaaja.status = document.getElementById("hstatus").value;
            console.log(pelaaja.status);
            if(pelaaja.status == "valitse"){
                status();
                console.log("VIRHE");
                document.getElementById("statuslabeli").style.display = "inline";
                return;
            } else {
                valmis();
                document.getElementById("statuslabeli").style.display = "none";
            }
        }

        //hahmon luonti päättyy



        document.getElementById("kylla").onclick = function() {
            klikattu = "klikattuKylla";
            console.log(klikattu);
            document.getElementById("dialogiteksti").innerHTML = "Tarvitseko apua?";
            dialogi();

        };

        document.getElementById("ei").onclick = function() {
            klikattu = "klikattuEi";
            console.log(klikattu);
            document.getElementById("kylla").style.display = "none";
            document.getElementById("ei").style.display = "none";
            document.getElementById("dialogiteksti").innerHTML = "miksi sitten tulit tänne";

        };

        function dialogi(){
            document.getElementById("kylla").onclick = function() {
            klikattu = "klikattuKylla2";
            console.log(klikattu);
                if(klikattu == "klikattuKylla2"){
                    document.getElementById("dialogiteksti").innerHTML = "Pitääkö sinut parantaa?";
                    dialogijatkuu()
                }
            }
        }

        function dialogijatkuu(){
            document.getElementById("kylla").onclick = function() {
            klikattu = "klikattuKylla3";
            console.log(klikattu);

                if(klikattu == "klikattuKylla3"){
                    document.getElementById("dialogiteksti").innerHTML = "Olet nyt terve";
                    document.getElementById("kylla").style.display = "none";
                    document.getElementById("ei").style.display = "none";
                    condition = "terve";
                }
            }
        }

        function avaaValintaIkkuna(){
            document.getElementById("valintaikkuna2").style.display = "inline";
            document.getElementById("mene").style.display = "inline";
            document.getElementById("valintaikkuna3").style.display = "inline";
            document.getElementById("mene").style.display = "inline";
            document.getElementById("terveysasema").style.display = "none";
            document.getElementById("kayttoliittyma").style.display = "none";
            document.getElementById("testinappula").style.display = "none";
            document.getElementById("suljeValintaIkkunaOverlay").style.display = "inline";
            document.getElementById("kortti").style.display = "none";
            document.getElementById("asetukset").style.display = "none";
            document.getElementById("empty1").style.display = "none";
            document.getElementById("empty2").style.display = "none";
            document.getElementById("valintaboksiTausta").style.display = "none";

            if(valinta == "terveysasema"){
                document.getElementById("poistaValintaShoitaja").style.display = "inline";
            } else {
                document.getElementById("valintaShoitaja").style.display = "inline";
            }

            if(valinta2 == "laakari"){
                document.getElementById("poistaValintaLaakari").style.display = "inline";
            } else {
                document.getElementById("valintaLaakari").style.display = "inline";
            }

            ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
            draw(ctx,image4);
             //saundi.play();
        }

        function suljeValintaIkkuna(){
            document.getElementById("valintaikkuna2").style.display = "none";
            document.getElementById("valintaikkuna3").style.display = "none";
            document.getElementById("poistaValintaShoitaja").style.display = "none";
            document.getElementById("poistaValintaLaakari").style.display = "none";
            document.getElementById("suljeValintaIkkunaOverlay").style.display = "none";
            document.getElementById("empty1").style.display = "inline";
            document.getElementById("empty2").style.display = "inline";
            document.getElementById("valintaboksiTausta").style.display = "inline";
            openMap();
        }

        //valintatoiminnon määritys


        document.getElementById("valintaShoitaja").onclick = function(){
            valinta = "terveysasema";
            console.log(valinta);
            document.getElementById("valintaShoitaja").style.display = "none";
            document.getElementById("poistaValintaShoitaja").style.display = "inline";
        }

        document.getElementById("poistaValintaShoitaja").onclick = function(){
            valinta = "eivalintaa";
            console.log(valinta);
            document.getElementById("valintaShoitaja").style.display = "inline";
            document.getElementById("poistaValintaShoitaja").style.display = "none";

        }

        document.getElementById("valintaLaakari").onclick = function(){
            valinta2 = "laakari";
            console.log(valinta2);
            document.getElementById("valintaLaakari").style.display = "none";
            document.getElementById("poistaValintaLaakari").style.display = "inline";
        }

        document.getElementById("poistaValintaLaakari").onclick = function(){
            valinta2 = "eivalintaa";
            console.log(valinta2);
            document.getElementById("valintaLaakari").style.display = "inline";
            document.getElementById("poistaValintaLaakari").style.display = "none";

        }




        function avaalaakari(){
            document.getElementById("kylla2").style.display = "inline";
            document.getElementById("ei2").style.display = "inline";
            document.getElementById("dialogiteksti2").style.display = "inline";
            document.getElementById("kayttoliittyma2").style.display = "inline";
            document.getElementById("dialogiteksti2").innerHTML = "testi2";
            document.getElementById("valintaikkuna2").style.display = "none";
            document.getElementById("valintaikkuna3").style.display = "none";
            document.getElementById("testinappula").style.display = "none";
            document.getElementById("suljeValintaIkkunaOverlay").style.display = "none";
            document.getElementById("empty1").style.display = "none";
            document.getElementById("empty2").style.display = "none";
            document.getElementById("valintaboksiTausta").style.display = "none";
            if(condition2 == "parannettu"){
                document.getElementById("kylla2").style.display = "none";
                document.getElementById("ei2").style.display = "none";
                document.getElementById("dialogiteksti2").innerHTML = "et tarvitse hoitoa enää";
            }
            draw(ctx,image8);
            ctx.drawImage(image11, 340, 30);
            ctx.drawImage(image12, 30, 10);
        }

        function closeLaakari(){
            document.getElementById("kylla2").style.display = "none";
            document.getElementById("ei2").style.display = "none";
            document.getElementById("sulkemisnamiska3").style.display = "none";
            document.getElementById("dialogiteksti2").style.display = "none";
            document.getElementById("kayttoliittyma").style.display = "inline";
            document.getElementById("terveysasema").style.display = "inline";
            openMap();
        }


            document.getElementById("kylla2").onclick = function() {
            klikattu2 = "klikattuKylla";
            console.log(klikattu2);
            document.getElementById("dialogiteksti2").innerHTML = "Tarvitseko apua?";
            dialogi2();

        };

        document.getElementById("ei2").onclick = function() {
            klikattu2 = "klikattuEi";
            console.log(klikattu2);
            document.getElementById("kylla2").style.display = "none";
            document.getElementById("ei2").style.display = "none";
            document.getElementById("dialogiteksti2").innerHTML = "miksi sitten tulit tänne";

        };

        function dialogi2(){
            document.getElementById("kylla2").onclick = function() {
            klikattu2 = "klikattuKylla2";
            console.log(klikattu2);
                if(klikattu2 == "klikattuKylla2"){
                    document.getElementById("dialogiteksti2").innerHTML = "Pitääkö sinut parantaa?";
                    dialogijatkuu2()
                }
            }
        }

        function dialogijatkuu2(){
            document.getElementById("kylla2").onclick = function() {
            klikattu2 = "klikattuKylla3";
            console.log(klikattu2);

                if(klikattu2 == "klikattuKylla3"){
                    document.getElementById("dialogiteksti2").innerHTML = "Olet nyt terve";
                    document.getElementById("kylla2").style.display = "none";
                    document.getElementById("ei2").style.display = "none";
                    condition2 = "parannettu";
                }
            }
        }

        function saavutusKortti(){
            //saundi.play();
            document.getElementById("kortti").style.display = "none";
            document.getElementById("kannettava").style.display = "none";
            document.getElementById("uloskarttaan").style.display = "none";
            document.getElementById("asetukset").style.display = "none";
            document.getElementById("testinappula").style.display = "none";
            document.getElementById("suljeSaavutusKorttiOverlay").style.display = "inline";
            document.getElementById("saavutuskortti").style.display = "inline";
            document.getElementById("empty1").style.display = "none";
            document.getElementById("empty2").style.display = "none";
            document.getElementById("valintaboksiTausta").style.display = "none";

            if(mikakartta == "paakartta"){
                document.getElementById("testinappula").style.display = "none";
                document.getElementById("kayttoliittyma").style.display = "none";
                document.getElementById("terveysasema").style.display = "none";
                document.getElementById("saavutuskortti").style.display = "inline";
                ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
                draw(ctx,image4);
            }
        }

        function suljeKortti(){
            document.getElementById("suljeSaavutusKorttiOverlay").style.display = "none";
            document.getElementById("kortti").style.display = "inline";
            document.getElementById("kannettava").style.display = "inline";
            document.getElementById("uloskarttaan").style.display = "inline";
            document.getElementById("testinappula").style.display = "none";
            document.getElementById("saavutuskortti").style.display = "none";
            if(mikakartta == "koti"){
                desk();
                document.getElementById("testinappula").style.display = "inline";
            }
            if (mikakartta == "paakartta") {
                openMap();
                document.getElementById("testinappula").style.display = "inline";
            }
        }

        function StartingScreen(){
            draw(image3,0,0);
            document.getElementById("uusipeli").style.display = "inline";
            document.getElementById("lataapeli").style.display = "inline";
            document.getElementById("lataaPeliTitle").style.display = "none";
            document.getElementById("syotakoodi").style.display = "none";
            document.getElementById("savecode").style.display = "none";
            document.getElementById("takaisinalkuun").style.display = "none";
        }

        function uusiPeli(){
            setTimeout(characterCreator, 3000);
            document.getElementById("loadingnewgame").style.display = "inline";
        }

        function lataaPeli(){
            document.getElementById("gametitle").style.display = "none";
            document.getElementById("uusipeli").style.display = "none";
            document.getElementById("lataapeli").style.display = "none";
            document.getElementById("lataaPeliTitle").style.display = "inline";
            document.getElementById("syotakoodi").style.display = "inline";
            document.getElementById("savecode").style.display = "inline";
            document.getElementById("takaisinalkuun").style.display = "inline";
        }

        function uusiAlku(){
            ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
            draw(ctx,image6);
            peliNappula = new peliHahmo(30, 30, "red", 10, 120);
            obstaakkeli = new obstacle(30, 30, "blue", 100, 120);
            this.interval = setInterval(pelinPaivittaminen, 20);
        }


        function peliHahmo(width, height, color, x, y){
            this.width = width;
            this.height = height;
            this.x = x;
            this.y = y;
            this.speedX = 0;
            this.speedY = 0;
            this.pressingDown = false;
            this.pressingUp = false;
            this.pressingLeft = false;
            this.pressingRight = false;
            this.paivittaminen = function(){
                ctx.fillStyle = color;
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
            this.uusiPositio = function() {
            this.x += this.speedX;
            this.y += this.speedY;
            }
        }


        function obstacle(width, height, color, x, y){
            this.width = width;
            this.height = height;
            this.x = x;
            this.y = y;
            this.luominen = function(){
                ctx.fillStyle = color;
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        }

        function pelinPaivittaminen(){
            ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
            draw(ctx,image6);
            peliNappula.paivittaminen();
            peliNappula.uusiPositio();
            obstaakkeli.luominen();
            if(canvas.klikattu){
                liikutaNappulaa();
            }
        }

        function liikutaNappulaa(){
            var etaisyysX = (klikkiX - peliNappula.x) * .125;
            var etaisyysY = (klikkiY - peliNappula.y) * .125;
            var kokoEtaisyys = Math.sqrt(etaisyysX*etaisyysX + etaisyysY*etaisyysY);

            if(kokoEtaisyys > 5){
                etaisyysX *= 5/kokoEtaisyys
                etaisyysY *= 5/kokoEtaisyys
            }
            peliNappula.x += etaisyysX;
            peliNappula.y += etaisyysY;
        }


        document.onmousedown = function(event){
            canvas.klikattu = true;
            klikkiX = event.clientX
            klikkiY = event.clientY
        }

        document.onmouseup = function(event){
            canvas.klikattu = false;
        }


        splashscreen();
