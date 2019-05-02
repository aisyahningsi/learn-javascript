## Pertanyaan
	1. Diketahui fungsi menjumlahkan 2 angka berikut
	```js
	function add (firstNumber, secondNumber) {
	  return firstNumber + secondNumber
	}
	```  
	  a. Apakah yang terjadi jika pengguna memanggil fungsi tersebut dengan `add(2)`? Apakah terjadi error seperti memanggil fungsi di swift?
      Jawaban: Iya terjadi error

	  b. Bagaimana caranya supaya fungsi `add` tersebut tetap memberikan nilai keluaran walaupun hanya menggunakan satu parameter, atau bahkan tidak menggunakan parameter sama sekali?
      Jawaban: Nilai variabel di define pada function
	
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
	nilainya sama semua? 
    Jawaban: 
    i. String
    ii. Bolean
    iii. Nilainya tidak sama

	b. Berapa nilai variabel `something` di masing-masing tiga keadaan tersebut?
    Jawaban:
    Maaf kurang paham dengan pertanyaan ini