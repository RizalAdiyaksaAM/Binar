// Question 1

function changeWord(selectedText, changedText, text) {
    // Gunakan metode .replace() untuk mengganti kata yang dipilih dengan kata yang diubah
    const newText = text.replace(selectedText, changedText);
    return newText;
  }
  
  const kalimat1 = 'Andini sangat mencintai kamu selamanya';
  const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu';
  
  // Mengganti "mencintai" dengan "membenci" dalam kalimat1
  console.log(changeWord('mencintai', 'membenci', kalimat1)); 
  // Output: Andini sangat membenci kamu selamanya
  
  // Mengganti "bromo" dengan "semeru" dalam kalimat2
  console.log(changeWord('bromo', 'semeru', kalimat2)); 
  // Output: Gunung semeru tak akan mampu menggambarkan besarnya cintaku padamu
  
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
console.log(getAngkaTerbesarKedua(dataAngka)); // Output: 8

console.log(getAngkaTerbesarKedua("string")); // Output: "ERROR: Parameter harus berupa array"
console.log(getAngkaTerbesarKedua([1])); // Output: "ERROR: Array harus memiliki minimal dua angka"
console.log(getAngkaTerbesarKedua([])); // Output: "ERROR: Array harus memiliki minimal dua angka"

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


  