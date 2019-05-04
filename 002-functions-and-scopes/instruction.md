# Functions Javascript

Sekarang Mbak akan mempelajari fungsi dan _scope_ pada JavaScript

## Functions
Sama seperti pada bahasa pemrograman swift, JavaScript memiliki sintaks deklarasi fungsi. Adapun perbedaan deklarasi fungsi pada swift dan JavaScript antara lain:

 Perbedaan | swift | JavaScript
--- | --- | ---
Penulisan deklarasi fungsi | `func` | `function`
Penggunaan nama parameter ketika memanggil fungsi | perlu. Jika nama parameter tidak dibutuhkan, gunakan `_` sebelum nama parameter ketika deklarasi fungsi | tidak perlu
Penentuan tipe data pada parameter | perlu | tidak perlu
Penentuan keluaran dari fungsi | perlu jika fungsi tersebut mengembalikan nilai/ return | tidak perlu

## Scopes

Jika suatu variabel dideklarasikan di luar fungsi yang sebelumnya dibuat, fungsi tersebut dapat mengakses variabel tersebut, baik variabel yang menggunakan `let` maupun `const`

```js

let number1 = 0
const number2 = 1

function displayNumber () {
  console.log(`number1 is ${number1}`)
  console.log(`number2 is ${number2}`)
}

displayNumber()
/*
  number1 is 0
  number2 is 1
*/
```

Akan tetapi, jika suatu variabel dideklarasikan di dalam fungsi yang sebelumnya dibuat, baris kode di luar fungsi tersebut tidak dapat mengakses variabel itu.

```js
function simpleFunction () {
  let anotherSomething = false
}

simpleFunction()
console.log('anotherSomething value outside function after calling one: ', anotherSomething)

// muncul pesan error -> ReferenceError: anotherSomething is not defined
```

## Informasi tambahan

Perbedaan sintaks untuk menyelipkan nilai variabel ke dalam string pada swift dan JavaScript
Perbedaan | swift | JavaScript
--- | --- | ---
Simbol pengapit string | petik dua `("")` | petik miring `(``)`
Format mengapit nilai variabel | kombinasi garis miring dan kurung | kombinasi simbol dollar dan kurung kurawal

contoh penggunaan pada swift
```swift
  let message = "hello \(name)"
```

sedangkan pada JavaScript
```js
  const message = `hello ${name}`
```

## Tugas
1. Accept dan Merge pull request ini.
2. Buka link video [berikut](https://www.youtube.com/watch?v=HBshpfGYpmM) untuk mempelajari fungsi.
3. Tuliskan ke dalam bahasa pemrograman JavaScript pada sintaks swift yang diajarkan Chris. File keluarannya bernama `index.js` di dalam folder `002-functions-and-scopes`.
4. Unggah hasil eksekusinya menggunakan node di folder yang sama.

## Pertanyaan
1. Diketahui fungsi menjumlahkan 2 angka berikut
```js
function add (firstNumber, secondNumber) {
  return firstNumber + secondNumber
}
```  
  a. Apakah yang terjadi jika pengguna memanggil fungsi tersebut dengan `add(2)`? Apakah terjadi error seperti memanggil fungsi di swift?  
  b. Bagaimana caranya supaya fungsi `add` tersebut tetap memberikan nilai keluaran walaupun hanya menggunakan satu parameter, atau bahkan tidak menggunakan parameter sama sekali?

### Update (4 Mei 2019)
Revisi soal untuk pertanyaan 1 b
```diff
- Bagaimana caranya supaya fungsi `add` tersebut tetap memberikan nilai keluaran walaupun hanya menggunakan satu parameter, atau bahkan tidak menggunakan parameter sama sekali?
+ Bagaimana caranya supaya fungsi `add` tersebut tetap memberikan nilai keluaran walaupun hanya menggunakan satu parameter?

```

2. Diketahui sebuah kode sebagai berikut
```js
let something = 'Hello'
console.log('something value outside function before calling one: ', something) // kondisi i

function simpleFunction () {
  let something = false
  console.log('something value inside function: ', something) // kondisi ii
}

simpleFunction()
console.log('something value outside function after calling one: ', something) // kondisi iii
```
a. Apakah nilai variabel `something` pada saat:  
  i. di luar fungsi, sebelum eksekusi fungsi `simpleFunction`  
  ii. di dalam fungsi `simpleFunction`  
  iii di luar fungsi, setelah eksekusi fungsi `simpleFunction`  
nilainya sama semua?  
b. Berapa nilai variabel `something` di masing-masing tiga keadaan tersebut?
### Update (4 Mei 2019)
Revisi soal untuk pertanyaan 2 a
```diff
a. Apakah nilai variabel `something` pada saat:  
	i. di luar fungsi, sebelum eksekusi fungsi `simpleFunction`  
	ii. di dalam fungsi `simpleFunction`  
	iii di luar fungsi, setelah eksekusi fungsi `simpleFunction`  
- nilainya sama semua?  
+ yang ditampilkan menggunakan `console.log` nilainya sama semua?  
```
Revisi soal untuk pertanyaan 2 b
```diff
- Berapa nilai variabel `something` di masing-masing tiga keadaan tersebut?
+ Berapa nilai variabel `something` di masing-masing console?

```
