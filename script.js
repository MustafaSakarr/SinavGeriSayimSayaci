
      // Hedef tarihler
      var countDownDate1 = new Date("2023-04-06").getTime();
      var countDownDate2 = new Date("2023-04-16").getTime();

      // Her bir saniye değişimi için geri sayımı güncelleme fonksiyonu
      var x = setInterval(function () {
        // Şuanki tarih ve zaman
        var now = new Date().getTime();

        // 6 Nisan 2023 için kalan süre
        var distance1 = countDownDate1 - now;

        // 16 Nisan 2023 için kalan süre
        var distance2 = countDownDate2 - now;

        // 6 Nisan 2023 geri sayımı
        var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
        var hours1 = Math.floor(
          (distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);

        // 16 Nisan 2023 geri sayımı
        var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
        var hours2 = Math.floor(
          (distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

        // 6 Nisan 2023 geri sayımını ekrana yazdırma
        document.getElementById("countdown1").innerHTML =
          days1 +
          " Gun " +
          hours1 +
          " Saat " +
          minutes1 +
          " Dakika " +
          seconds1 +
          " Saniye ";

        // 16 Nisan 2023 geri sayımını ekrana yazdırma
        document.getElementById("countdown2").innerHTML =
          days2 +
          " Gun " +
          hours2 +
          " Saat " +
          minutes2 +
          " Dakika " +
          seconds2 +
          " Saniye ";

        // Süre tamamlandığında
        if (distance1 < 0) {
          clearInterval(x);
          document.getElementById("countdown1").innerHTML =
            "Geri sayim tamamlandi!";
        }

        if (distance2 < 0) {
          clearInterval(x);
          document.getElementById("countdown2").innerHTML =
            "Geri sayim tamamlandi!";
        }
      }, 1000);

     