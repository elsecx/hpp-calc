const btnHitung = document.getElementById('btnHitung');
const hasilDiv = document.getElementById('hasil');

btnHitung.addEventListener('click', () => {
    const hpp = parseFloat(document.getElementById('hpp').value);
    const hargaJual = parseFloat(document.getElementById('hargaJual').value);
    const kebutuhan = parseInt(document.getElementById('kebutuhan').value);

    if ([hpp, hargaJual, kebutuhan].some(val => isNaN(val))) {
        alert("Harap isi semua input dengan angka!");
        return;
    }

    const pcsPerDus = 40;
    const jumlahDus = kebutuhan / pcsPerDus;
    const hppPerDus = hpp * pcsPerDus;
    const hargaJualPerDus = hargaJual * pcsPerDus;
    const totalHargaBeli = hpp * kebutuhan;
    const totalHargaJual = hargaJual * kebutuhan;
    const labaTotal = totalHargaJual - totalHargaBeli;
    const labaPerPcs = hargaJual - hpp;

    hasilDiv.innerHTML = `
        <p><b>Jumlah Dus:</b> ${jumlahDus.toLocaleString()} dus</p>
        <p><b>HPP per dus:</b> Rp ${hppPerDus.toLocaleString()}</p>
        <p><b>Harga Jual per dus:</b> Rp ${hargaJualPerDus.toLocaleString()}</p>
        <p><b>Total Harga Beli:</b> Rp ${totalHargaBeli.toLocaleString()}</p>
        <p><b>Total Harga Jual:</b> Rp ${totalHargaJual.toLocaleString()}</p>
        <p><b>Laba Total:</b> Rp ${labaTotal.toLocaleString()}</p>
        <p><b>Laba per pcs:</b> Rp ${labaPerPcs.toLocaleString()}</p>
      `;
});