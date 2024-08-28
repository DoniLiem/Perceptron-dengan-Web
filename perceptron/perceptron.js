var alpha = 0.5;
var bias = 1;
var w = Array(10).fill(0);
var b = 0;
var xRow = [];
var targetRow = [];
var dw = [];
var dwRow = [];
var dwbRow = [];
var netRow = [];
var FnetRow = [];

function resetVariables() {
    dwRow = [];
    dwbRow = [];
    netRow = [];
    FnetRow = [];
}

function submitForm() {
    var x1 = document.getElementById("x1").checked ? 1 : -1;
    var x2 = document.getElementById("x2").checked ? 1 : -1;
    var x3 = document.getElementById("x3").checked ? 1 : -1;
    var x4 = document.getElementById("x4").checked ? 1 : -1;
    var x5 = document.getElementById("x5").checked ? 1 : -1;
    var x6 = document.getElementById("x6").checked ? 1 : -1;
    var x7 = document.getElementById("x7").checked ? 1 : -1;
    var x8 = document.getElementById("x8").checked ? 1 : -1;
    var x9 = document.getElementById("x9").checked ? 1 : -1;
    var t = document.getElementById("t").checked ? 1 : -1;

    var xCol = [x1, x2, x3, x4, x5, x6, x7, x8, x9];
    targetRow.push(t);
    xRow.push(xCol);

    var tbody = document.querySelector("#resultTable tbody");
    var newRow = document.createElement("tr");
    newRow.innerHTML = `
                <td>${xCol[0]}</td>
                <td>${xCol[1]}</td>
                <td>${xCol[2]}</td>
                <td>${xCol[3]}</td>
                <td>${xCol[4]}</td>
                <td>${xCol[5]}</td>
                <td>${xCol[6]}</td>
                <td>${xCol[7]}</td>
                <td>${xCol[8]}</td>
                <td>${targetRow[targetRow.length - 1]}</td>
            `;
    tbody.appendChild(newRow);
    document.getElementById("resultTable").style.display = "block";
}

function hitung() {
    var epoch = 1;
    do {
        resetVariables();
        var tbody = document.querySelector("#resultTable2 tbody");
        if (epoch >= 1) {
            var headerRow = document.createElement("tr");
            headerRow.innerHTML = `
                        <th colspan="36">Epoch ${epoch}</th>
                    `;
            tbody.appendChild(headerRow);

            var judulKolom = document.createElement("tr");
            judulKolom.innerHTML = `
                    <tr>
                        <th>x1</th>
                        <th>x2</th>
                        <th>x3</th>
                        <th>x4</th>
                        <th>x5</th>
                        <th>x6</th>
                        <th>x7</th>
                        <th>x8</th>
                        <th>x9</th>
                        <th>b</th>
                        <th>t</th>
                        <th>net</th>
                        <th>f(net)</th>
                        <th>Δw1</th>
                        <th>Δw2</th>
                        <th>Δw3</th>
                        <th>Δw4</th>
                        <th>Δw5</th>
                        <th>Δw6</th>
                        <th>Δw7</th>
                        <th>Δw8</th>
                        <th>Δw9</th>
                        <th>Δwb</th>
                        <th>w1</th>
                        <th>w2</th>
                        <th>w3</th>
                        <th>w4</th>
                        <th>w5</th>
                        <th>w6</th>
                        <th>w7</th>
                        <th>w8</th>
                        <th>w9</th>
                        <th>wb</th>
                    </tr>
                    `;
            tbody.appendChild(judulKolom);
        }

        var adaPerubahanBobot = false;
        for (let i = 0; i < xRow.length; i++) {
            var dwCol = [];
            var net = 0;
            for (let j = 0; j < xRow[i].length; j++) {
                net += w[j] * xRow[i][j];
            }
            net += b;
            var fnet = net > 0 ? 1 : -1;

            if (fnet !== targetRow[i]) {
                for (let j = 0; j < xRow[i].length; j++) {
                    dw[j] = alpha * targetRow[i] * xRow[i][j];
                    dwCol.push(dw[j]);
                    w[j] += dw[j];
                }
                var dwb = alpha * targetRow[i];
                dwRow.push(dwCol);
                dwbRow.push(dwb);
                b += dwb;
                adaPerubahanBobot = true;
            } else {
                dwRow.push(Array(xRow[i].length).fill(0));
                dwbRow.push(0);
            }

            netRow.push(net);
            FnetRow.push(fnet);

            var newRow = document.createElement("tr");
            newRow.innerHTML = `
                        <td>${xRow[i][0]}</td>
                        <td>${xRow[i][1]}</td>
                        <td>${xRow[i][2]}</td>
                        <td>${xRow[i][3]}</td>
                        <td>${xRow[i][4]}</td>
                        <td>${xRow[i][5]}</td>
                        <td>${xRow[i][6]}</td>
                        <td>${xRow[i][7]}</td>
                        <td>${xRow[i][8]}</td>
                        <td>${bias}</td>
                        <td>${targetRow[i]}</td>
                        <td>${net}</td>
                        <td>${fnet}</td>
                        <td>${dwRow[i][0]}</td>
                        <td>${dwRow[i][1]}</td>
                        <td>${dwRow[i][2]}</td>
                        <td>${dwRow[i][3]}</td>
                        <td>${dwRow[i][4]}</td>
                        <td>${dwRow[i][5]}</td>
                        <td>${dwRow[i][6]}</td>
                        <td>${dwRow[i][7]}</td>
                        <td>${dwRow[i][8]}</td>
                        <td>${dwbRow[i]}</td>
                        <td>${w[0]}</td>
                        <td>${w[1]}</td>
                        <td>${w[2]}</td>
                        <td>${w[3]}</td>
                        <td>${w[4]}</td>
                        <td>${w[5]}</td>
                        <td>${w[6]}</td>
                        <td>${w[7]}</td>
                        <td>${w[8]}</td>
                        <td>${b}</td>
                    `;
            tbody.appendChild(newRow);
            document.getElementById("resultTable2").style.display = "block";
        }
        epoch++;
    } while (adaPerubahanBobot);
}

function simpanBobot() {
    // Mengirimkan nilai bobot terakhir ke PHP
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "simpan_bobot.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var data = `w1=${w[0]}&w2=${w[1]}&w3=${w[2]}&w4=${w[3]}&w5=${w[4]}&w6=${w[5]}&w7=${w[6]}&w8=${w[7]}&w9=${w[8]}&wb=${b}`;
    xhr.send(data);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert("Nilai bobot berhasil disimpan");
        }
    };
}

function hapusBobot() {
    // Mengirimkan permintaan hapus bobot ke PHP
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "hapus_bobot.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert("Nilai bobot berhasil dihapus");
        }
    };
}