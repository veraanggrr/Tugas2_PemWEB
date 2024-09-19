document.getElementById("addButton").addEventListener("click", function () {
  var name = document.getElementById("name").value;
  var nim = document.getElementById("nim").value;
  var prodi = document.getElementById("prodi").value;

  if (name === "" || nim === "" || prodi === "") {
    alert("Mohon isi semua field");
    return;
  }

  var table = document
    .getElementById("inputTable")
    .getElementsByTagName("tbody")[0];

  var newRow = table.insertRow();

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);

  cell1.textContent = name;
  cell2.textContent = nim;
  cell3.textContent = prodi;

  document.getElementById("inputForm").reset();
});

document.getElementById("submitButton").addEventListener("click", function () {
  var table = document
    .getElementById("inputTable")
    .getElementsByTagName("tbody")[0];
  var rows = table.rows;

  if (rows.length === 0) {
    alert("Tidak ada data untuk disubmit.");
    return;
  }

  var resultDiv = document.getElementById("submitResult");
  resultDiv.innerHTML = "";

  for (var i = 0; i < rows.length; i++) {
    var name = rows[i].cells[0].textContent;
    var nim = rows[i].cells[1].textContent;
    var prodi = rows[i].cells[2].textContent;

    var result = document.createElement("p");
    result.textContent =
      "Nama: " + name + ", NIM: " + nim + ", Prodi: " + prodi;
    resultDiv.appendChild(result);
  }

  table.innerHTML = "";
});
