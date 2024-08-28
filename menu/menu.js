function prediksi() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("prediksi").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "prediksi.html", true);
    xhttp.send();
}
function cek() {
    var x1 = document.getElementById("x1").checked ? 1 : -1;
    var x2 = document.getElementById("x2").checked ? 1 : -1;
    var x3 = document.getElementById("x3").checked ? 1 : -1;
    var x4 = document.getElementById("x4").checked ? 1 : -1;
    var x5 = document.getElementById("x5").checked ? 1 : -1;
    var x6 = document.getElementById("x6").checked ? 1 : -1;
    var x7 = document.getElementById("x7").checked ? 1 : -1;
    var x8 = document.getElementById("x8").checked ? 1 : -1;
    var x9 = document.getElementById("x9").checked ? 1 : -1;

    var xCol = [x1, x2, x3, x4, x5, x6, x7, x8, x9];

    // Mengambil nilai bobot dari database
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "ambil_bobot.php", true);
    xhr.onload = function () {
        if (xhr.status == 200) {
            var bobot = JSON.parse(xhr.responseText);
            if (Object.keys(bobot).length === 0) {
                alert("Tidak ada bobot yang tersimpan di database.");
                return;
            }

            var w = [
                parseFloat(bobot.w1),
                parseFloat(bobot.w2),
                parseFloat(bobot.w3),
                parseFloat(bobot.w4),
                parseFloat(bobot.w5),
                parseFloat(bobot.w6),
                parseFloat(bobot.w7),
                parseFloat(bobot.w8),
                parseFloat(bobot.w9)
            ];
            var b = parseFloat(bobot.wb);

            // Menghitung nilai fnet
            var net = 0;
            for (let i = 0; i < xCol.length; i++) {
                net += w[i] * xCol[i];
            }
            net += b;
            var fnet = net > 0 ? 1 : -1;

            console.log(fnet);
            
            var resultMessage = document.getElementById("resultMessage");
            if (fnet === 1) {
                resultMessage.innerHTML = "<p>Pelamar diterima</p>";
            } else {
                resultMessage.innerHTML = "<p>Pelamar tidak diterima</p>";
            }
        }
    };
    xhr.send();
}
