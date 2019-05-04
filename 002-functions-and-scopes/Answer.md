## Pertanyaan
1. Diketahui fungsi menjumlahkan 2 angka berikut

function add (firstNumber, secondNumber) {
	return firstNumber + secondNumber
}

a. Apakah yang terjadi jika pengguna memanggil fungsi tersebut dengan `add(2)`? Apakah terjadi error seperti memanggil fungsi di swift?  
	**Jawaban**: Iya terjadi error  
	**Koreksi:** Bisa dijelaskan secara spesifik hasil keluarannya bagaimana.

b. Bagaimana caranya supaya fungsi `add` tersebut tetap memberikan nilai keluaran walaupun hanya menggunakan satu parameter?  
	**Jawaban:** Nilai variabel di define pada function  
	**Koreksi:** Sebenarnya di swift ada istilah default parameter yang juga ada di JavaScript. Mungkin juga mengingat sedikit pelajaran sekolah atau kuliah tentang angka identitas penjumlahan.

2. Diketahui sebuah kode sebagai berikut
```js
let something = 'Hello'
console.log('something value outside function before calling one: ', something)

function simpleFunction () {
	let something = false
	console.log('something value inside function: ', something)
}

simpleFunction()
console.log('something value outside function after calling one: ', something)
```
a. Apakah nilai variabel `something` pada saat:  
	i. di luar fungsi, sebelum eksekusi fungsi `simpleFunction`  
	ii. di dalam fungsi `simpleFunction`  
	iii di luar fungsi, setelah eksekusi fungsi `simpleFunction`  
yang ditampilkan menggunakan `console.log` nilainya sama semua?   
	**Jawaban**: 
	i. String  
	ii. Bolean  
	iii. Nilainya tidak sama  
	**Koreksi**: Mohon diperhatikan bahwa yang ditanyakan adalah **nilainya**, bukan **tipe datanya**.

b. Berapa nilai variabel `something` di masing-masing yang ditampilkan di dalam `console.log`?  
	**Jawaban**:
	Maaf mas kurang paham dengan pertanyaan ini  
	**Koreksi**: sudah diperbaiki pertanyaannya. Jika ada pertanyaan yang kurang paham, bisa ditanyakan lewat Messenger.