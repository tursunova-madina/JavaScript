// 1) Uzunligi L berilgan Undagi to'liq metrlar sonini aniqlovchi progrramm tuzing!

// birinchi masala
// let l=+prompt(" Son kiriting: ");

// console.log(l/100 +" metr " );

// ========================

// 2) Og'irligi M kg da berilgan Uning to'liq tonnalar sonini aniqlang. 1t = 1000kg

// ikkinchi masala

// let m=+prompt(" Son kiriting: ");

// console.log(m/1000 + " tonna ");

// =====================

// 4) Ikki xonali son berilgan uning o'nliklar xonasidagi va birliklar xonasida raqamini aniqlang!

//  to'rtinchi masala

// let number=+prompt("Son kiriting: ");
// let firstNumber=(Math.floor(number/10))*10;

// let secondNumber=number%=10;

// console.log(`${firstNumber} , ${secondNumber}`);

// ==========================

// 5) Ikki xonali son berilgan uning raqamlar yig'indisin topuvchi programma tuzing!

// let number=+prompt("Son kiriting: ");
// let firstNumber=Math.floor(number/10);

// let secondNumber=number%=10;

// console.log(firstNumber + secondNumber);

// ================

// 6) Ikki xonali son berilgan Uning raqamlar ko'paytmasini topuvchi programma tuzing!

// let number=+prompt("Son kiriting: ");
// let firstNumber=Math.floor(number/10);

// let secondNumber=number%=10;

// console.log(firstNumber* secondNumber);
// ==========================

// 7) 999 dan katta son berilgan bolib butun olib va qoldiqli bo'lish operatsiyasidan foydalanib yuzlarni topuvchi dastur tuzing!

// let number=+prompt("999dan katta son kiriting:");

// console.log(number%=1000 );

// ==================================
// 8) Kun boshidan N sekund o'tdi kun boshidan necha minut, soat, o'tganligin aniqlang!

// let seconds = +prompt("Sekund kiriting:");
// let hour = 3600;
// let minute = 60;

// let hourValue = Math.floor(seconds / hour);
// let minuteValue = (seconds %= hour);
// let secondValue = (minuteValue %= minute);

// console.log(`${hourValue}hour  ${minuteValue}minute  ${secondValue}second `);

// ==================================
// Mantiqiy amallar(if , else)

// 1) A butun son berilgan. Jumlani rostlikka tekshiring: A son musbat

// const number = +prompt("Son kiriting:");

// if (number > 0) {
//   console.log("musbat son");
// } else {
//   console.log("manfiy son");
// }

// =================================
// 2) A butun son berilgan. Jumlani rostlikka tekshiring: A toq son

// const number = +prompt("Son kiriting:");

// if(number%2==0){
//     console.log("juft son");
// }else{
//     console.log("toq son");
// }

// ======================================
// 4) Ikkita butun son berilgan. Jumlani rostlikka tekshiring. M-s a > 0 && b > 0

// const num1=+prompt("Son kiriting: ");
// const num2=+prompt("Son kiriting: ");

// if(num1>0 && num2>0){
//     console.log("True");
// }else{
//     console.log("False");
// }

// ===================================

// 5) 3 ta son berilgan a,b,c. a bdan katta b c dan katta rostlikka tekshiring

// const a=+prompt(" A son kiriting: ");
// const b=+prompt(" B son kiriting: ");
// const c=+prompt(" C son kiriting: ");

// if( a>b && b>c ){
//     console.log("True");
// }else{
//     console.log("False");
// }

// =====================================
// 6) a, b, c, son berilgan. B son a va c sonlarni orasida yotadi.

// const a=+prompt(" A son kiriting: ");
// const b=+prompt(" B son kiriting: ");
// const c=+prompt(" C son kiriting: ");

// if( a<b && b<c ){
//     console.log("True");
// }else{
//     console.log("False");
//  }

// =======================================
// 7) a, b sonlar berilgan sonlarni toq songa tekshiring.

// const a=+prompt(" A son kiriting: ");
// const b=+prompt(" B son kiriting: ");

// if (a%2==0 && b%2==1 ){
//     console.log(" A - juft son . B - toq son ");
// } else if( a%2==1 && b%2==0) {
// console.log(" A - toq son . B - juft son   ")
// } else{
//     console.log(" NaN ");
// }

// ================================
// 8) a,b,c,d sonlar berilgan barchasi musbat

// const a=+prompt(" A son kiriting: ");
// const b=+prompt(" B son kiriting: ");
// const c=+prompt(" C son kiriting: ");
// const d=+prompt(" D son kiriting: ");

// if (a>0 && b>0 && c>0 && d>0){
//     alert("True");
// }else{
//     alert("False");
// }

// =======================================
// 9) a,b,c sonlar berilgan kamida ikkitasi musbat berilgan

//  const a=+prompt(" A son kiriting: ");
//  const b=+prompt(" B son kiriting: ");
//  const c=+prompt(" C son kiriting: ");

//  if(a>0 && b>0 && c<0 ){
//     alert("True");
//  }else{
//     alert("False");
//  }

// ==========================================
// 10) hafta kunlari berilgan raqamga qarab hafta kunlarini nomini chiqaring

// const num = +prompt(" Birdan yettigacha son kiriting: ");

// if (num == 1) {
//   alert(" Haftaning birinchi kuni - dushanba  ");
// } else if (num == 2) {
//   alert(" Haftaning ikkinchi kuni - seshanba  ");
// } else if (num == 3) {
//   alert(" Haftaning uchinchi kuni - chorshanba  ");
// } else if (num == 4) {
//   alert(" Haftaning to'rtinchi kuni - payshanba  ");
// } else if (num == 5) {
//   alert(" Haftaning ulug' kuni - juma   ");
// } else if (num == 6) {
//   alert(" Haftaning oltinchi kuni - shanba  ");
// }else if(num==7){
//     alert(" Haftaning oxirgi kuni - yakshanba  ");
// }else{
//     alert("Bir haftada 7 kun bor")
// }

// =============================
// 11) Telefon nomer kodi orqali qaysi kompaniya ekanligini tekshiring

// const code = +prompt("Sim karta kodini kiriting : ");

// if (code == 99 || code == 77) {
//   alert(code + " -uzmobile kodi ");
// } else if (code == 94 || code == 93) {
//   alert(code + " -ucell kodi ");
// } else if (code == 90 || code == 91) {
//   alert(code + " -beeline kodi");
// } else if (code == 95) {
//   alert(code + " -perfectum kodi ");
// } else if (code == 33) {
//   alert(code + " - Humans kodi ");
// } else if (code == 97) {
//   alert(code + " - MobiUz kodi ");
// }else{
//     alert("Boshqa kompaniyalar yo'q");
// }

// =================================

// 12) Butun son berilgan agar son musbat bo'lsa unda sonni bittaga oshiring aks xolda 1taga kamaytiring

// const num = +prompt(" Butun son kiriting : ");

// if (num > 0) {
//   console.log(num+1);
// } else if (num < 0) {
//   console.log(num-1);
// } else {
//   console.log("none");
// }

// ====================================
// 13) Butun son berilgan agar son musbat bo'lsa sonni 3 ga oshiring manfiy bo'lsa unda 2ga kamaytiring

// const num = +prompt(" Butun son kiriting : ");

// if (num > 0) {
//   console.log(num+3);
// } else if (num < 0) {
//   console.log(num-2);
// } else {
//   console.log("none");
// }

// ================================================
// 14) Ikkita butun son berilgan kattasin aniqlovchi dastur tuzing

// const num1 = +prompt(" A - son kiriting: ");
// const num2 = +prompt(" B - son kiriting: ");

// if (num1 > num2) {
//   alert(" A son B sondan katta  ");
// } else if (num2 > num1) {
//   alert(" B son A sondan katta  ");
// } else if (num1 == num2) {
//   alert("A=B");
// } else {
//   alert("///");
// }

// =================================================
// 15) 3 ta butun son berilgan eng kattasini aniqlovchi dastur tuzing

// const num1 = +prompt(" A - son kiriting: ");
// const num2 = +prompt(" B - son kiriting: ");
// const num3 = +prompt(" C - son kiriting: ");

// if (num1 > num2) {
//   alert(" A son B sondan katta  ");
// } else if (num2 > num1) {
//   alert(" B son A sondan katta  ");
// } else if (num1 > num3) {
//   alert(" A son C sondan katta ");
// } else if (num2 > num3) {
//   alert("B son C sondan katta ");
// } else if (num3 > num2) {
//   alert(" C son B sondan katta");
// } else if (num3 > num1) {
//   alert("C son A sondan katta");
// } else if ((num1 == num2) == num3) {
//   alert("A=B=C");
// } else {
//   alert("???");
// }
