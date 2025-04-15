let inputRegistrasiWilayah = prompt("masukan kode registrasi wilayah anda")

let inputNomor = prompt('masukan nomor kendaraan anda')

let inputSeriKerdaraan = prompt("masukan kode seri kendaraan anda")

alert(`plat kendaraan anda adalah ${inputRegistrasiWilayah} ${inputNomor} ${inputSeriKerdaraan}`);


// dengan if else
// if (inputNomor % 2 == 0) {
//     alert("plat nomor kendaraan genap");
// } else {
//     alert("plat nomor kendaraan ganjil");
// }

// ---------------------------------------------------------

//dengan switch case
let nomorPlat = inputNomor % 2;

switch (nomorPlat) {

    case 0:
        alert("plat nomor kendaraan genap");
        break;

    case 1:
        alert("plat nomor kendaraan ganjil");
        break;

    default: 
        alert("plat nomor kendaraan tidak valid")
        break;
}