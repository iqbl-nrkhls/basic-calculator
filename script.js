// definisi element
const display = document.querySelector("input");
const buttons = document.querySelectorAll("button");

// variable untuk menyimpan nilai
let value = "";

// memberikan listener untuk semua button
buttons.forEach(elm => {
  elm.onclick = (event) => {

    var thisElement = event.target;

    // jika tombol = ditekan
    if (thisElement.value == "=") {
      
      // jika input tidak kosong
      if (value.length != 0) {

        // menghitung hasil
        value = eval(value);;
      }

    // jika tombol C (clear) ditekan
    } else if (thisElement.value == 'C') {

      // maka akan menghapus nilai yang ada
      value = "";

    // jika tombol nomor ditekan
    } else {

      // maka akan menambahkan nilai yang ditekan
      value += thisElement.value;

    }

    // mengupdate nilai di display
    display.value = value;
  }
})