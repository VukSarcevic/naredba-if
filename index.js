// let a = Number(prompt("Unesi broj"));
// if (a % 2) {
//   console.log("Broj nije deljiv sa 2");
// }
// else {
//   console.log("Broj je deljiv sa 2");
// }

// let a = Number(prompt('Unesi broj a'));
// let b = Number(prompt('Unesi broj b'));
// if (a > b) {
//   console.log(a + ' je vece od ' + b);
// } else if (a == b) {
//   console.log(a + ' je jednako ' + b);
// } else {
//   console.log(b + ' je vece od ' + a);
// }

// let a = Number(prompt('Unesi broj a'));
// let b = Number(prompt('Unesi broj b'));
// let c = Number(prompt('Unesi broj c'));
// if (a > b && a > c) {
//   console.log(a + ' je najvece');
// } else if (b > a && b > c) {
//   console.log(b + ' je najvece');
// } else if (c > b && c > a) {
//   console.log(c + ' je najvece');
// } else if (a == b && b == c) {
//   console.log('Sva tri broja su jednaka');
// } else if (a == b) {
//   console.log(a + ' je jednako ' + b);
// } else if (b == c) {
//   console.log(b + ' je jednako ' + c);
// } else if (a == c) {
//   console.log(a + ' je jednako ' + c);
// }

let a;
if (a > 1800 && a < 2100) {
  if (a % 4) {
    if (a % 100) {
      if (a % 400) {
        console.log('Ta godina je prestupna');
      }
    } else if (a % 100 != 0) {
      console.log('Ta godina je prestupna');
    }
  } else if (a % 4 != 0) {
    console.log('Ta godina nije prestupna');
  }
} else {
  console.log('Prestupne godine nisu tada postojale');
}

// let i = 1;
// while (i < 101) {
//   console.log(i);
//   i = i + 1;
// }
