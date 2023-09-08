// Question 1

function changeWord(selectedText, changedText, text) {
    // Gunakan metode .replace() untuk mengganti kata yang dipilih dengan kata yang diubah
    const newText = text.replace(selectedText, changedText);
    return newText;
  }
  
  const kalimat1 = 'Andini sangat mencintai kamu selamanya';
  const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu';
  
  console.log(changeWord('mencintai', 'membenci', kalimat1)); 
  console.log(changeWord('bromo', 'semeru', kalimat2)); 
  
  // Question 2

 const checkTypeNumber = (givenNumber) => {
  if (typeof givenNumber === 'undefined'){
    return ("Error : Bro where is the parameter ?");
  }

  if (typeof givenNumber !== 'number'){
    return ("Error :invalid data type");
  }

  if (givenNumber % 2 === 0){
    return "Bilangan Genap";
  }else{
    return "Bilangan Ganjil";
  }

 };

 console.log(checkTypeNumber({}));

//  Question 3

const getAngkaTerbesarKedua = (dataNumbers) => {
  // Validasi tipe data parameter
  if (!Array.isArray(dataNumbers)) {
    return "ERROR: Parameter harus berupa array";
  }
  
  // Validasi panjang array, harus minimal dua angka
  if (dataNumbers.length < 2) {
    return "ERROR: Array harus memiliki minimal dua angka";
  }

  // Mengurutkan array secara menurun
  const sortedNumbers = dataNumbers.sort((a, b) => b - a);

  // Mengambil angka terbesar kedua
  const max2 = sortedNumbers[1];

  return max2;
}

// Sample case
const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
console.log(getAngkaTerbesarKedua(dataAngka)); 

console.log(getAngkaTerbesarKedua("string")); 
console.log(getAngkaTerbesarKedua([1])); 
console.log(getAngkaTerbesarKedua([])); 

// Question 4

const dataPenjualanPakAldi = [
  {
    namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
    hargaSatuan: 760000, 
    kategori: "Sepatu Sport", 
    totalTerjual: 90,
  },
  {
    namaProduct : 'Sepatu Warrior Tristan Black Brown High', 
    hargaSatuan: 960000, 
    kategori: "Sepatu Sneaker", 
    totalTerjual : 37,
  },
  {
    namaProduct : 'Sepatu Warrior Tristan Maroon High',
    hargaSatuan: 360000,
    kategori: "Sepatu Sneaker", 
    totalTerjual: 90,
  },
  {
    namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy', 
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker", 
    totalTerjual : 90,
  },
  ]

  const getTotalPenjualan = (dataPenjualan) => {
    // Validasi apakah parameter dataPenjualan adalah sebuah array
    if (!Array.isArray(dataPenjualan)) {
      console,log ('Parameter dataPenjualan harus berupa array.');
    }
  
    // Gunakan map untuk mendapatkan semua nilai totalTerjual
    const totalTerjualArray = dataPenjualan.map((penjualan) => {
      // Validasi apakah properti totalTerjual ada pada setiap objek dan merupakan angka
      if (typeof penjualan.totalTerjual !== 'number') {
        console.log ("Properti totalTerjual bukan number.");
      }
      return penjualan.totalTerjual;
    });
  
    // Menggunakan reduce untuk menjumlahkan nilai-nilai dalam totalTerjualArray
    const totalPenjualan = totalTerjualArray.reduce((total, current) => total + current, 0);
  
    return totalPenjualan;
  }

  console.log(getTotalPenjualan(dataPenjualanPakAldi));

// Question 5

const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

const getInfoPenjualan = (dataPenjualan) => {
  // Validasi apakah dataPenjualan sebuah array atau object
  if (!Array.isArray(dataPenjualan) || typeof (dataPenjualan) !== "object" ) {
    console.log ('Parameter dataPenjualan harus berupa array.');
  }

    // Mencari Total Keuntungan
    const totalKeuntungan = dataPenjualan.map((produk) => {
      return (produk.hargaJual - produk.hargaBeli) * produk.totalTerjual;
    }).reduce((total, keuntungan) => total + keuntungan);
  
     // Mencari Total Modal
    const totalModal = dataPenjualan.map((produk) => {
      return produk.hargaBeli * produk.totalTerjual;
    }).reduce((total, modal) => total + modal);
    
    // Mencari rata-rata persentase Keuntungan
    const rataRataPersentaseKeuntungan = (totalKeuntungan / totalModal) * 100;
    
    // Mencari produk dan penulis terlaris
    dataPenjualan.sort((a, b) => b.totalTerjual - a.totalTerjual);
  
  
    let produkTerlaris = null;
    if (dataPenjualan.length > 0) {
      produkTerlaris = dataPenjualan[0];
    }
  
    console.log(`Total Keuntungan: Rp.${totalKeuntungan.toLocaleString("id-ID")}`);
    console.log(`Total Modal: Rp.${totalModal.toLocaleString("id-ID")}`);
    console.log(`Persentase Keuntungan: ${rataRataPersentaseKeuntungan.toFixed(2)}%`);
    console.log(`Produk Terlaris: ${produkTerlaris.namaProduk} (Total Terjual: ${produkTerlaris.totalTerjual})`);
    console.log(`Penulis Terlaris: ${produkTerlaris.penulis} (Total Terjual: ${produkTerlaris.totalTerjual})`);
  };
  
  getInfoPenjualan(dataPenjualanNovel);
  
