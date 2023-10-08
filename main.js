// Contoh Program If
console.log("Contoh Program If :");
var testScore = 90;
if (testScore > 75) {
  console.log("Selamat Anda Lolos Ujian");
}
console.log("   ");

// Contoh Program If Else
console.log("Contoh Program If Else :");
var testScore = 70;
if (testScore > 75) {
  console.log("Selamat Anda Lolos Ujian!");
} else {
  console.log("Mohon Maaf Anda Belum Lolos Ujian, Silahkan Melakukan Remedial!");
}
console.log("   ");

// Contoh Program nested if
console.log("Contoh Program Nested If :");
var testScore = 95;

if (testScore >= 75 && testScore <= 100) {
  if (testScore > 90) {
    console.log("Selamat Anda Lolos Ujian dengan Nilai yang sangat Bagus!");
  } else {
    console.log("Selamat Anda lolos ujian!");
  }
} else if (testScore < 75) {
  console.log("Anda tidak lolos ujian, silahkan lakukan remedial!");
}
console.log("    ");

// Contoh program Switch Case
console.log("Contoh Program Switch Case :");
let day = "";
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}

console.log("This is " + day);
console.log("   ");

// Contoh program For Statement
console.log("Contoh program for statement :");
console.log("Daftar nomor antrian pengunjung Bank Eka :");

for (let a = 1; a < 11; a++) {
  console.log("Nomor Antrian ke-" + a, "Silahkan masuk!");
}
console.log("   ");

// Contoh program while
console.log("Contoh program While");
var x = 0;
while (x < 3) {
  console.log("Tetap Semangat!");
  x++;
}
console.log("   ");

// Contoh program Do-While
console.log("Contoh Program Do-While");
var c = 1;
do {
  console.log("Jangan Menyerah!");
  c++;
} while (c <= 5);
console.log("     ");

//Contoh Program Function
function pesan() {
  console.log("Terima kasih, karena tetap semangat dan tidak menyerah, hehe.");
  console.log("Ayo belajar lagi, lagi, dan lagi");
}
pesan();
