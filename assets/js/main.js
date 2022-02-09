// -----lev1_1-----
let age = document.getElementById('input-age');
let out = document.getElementById('out');

function adult() {
  if(age.value >= 18) {
    console.log(true);
    out.innerHTML = `
      <p>du bist volljährig</p>
    `
  } else {
    console.log(false);
    out.innerHTML = `
      <p>du bist noch minderjährig</p>
    `
  }
}
// -----v2.0-----
let age2 = document.getElementById('input-age2');
let out2 = document.getElementById('out2');

function control() {
  let age = Number(age2.value);

  if(age >= 18) {
    out2.innerHTML = `
      <p>du bist volljährig</p>
    `
  } else if(age === 17) {
    out2.innerHTML = `
      <p>du darfst den Führerschein machen</p>
    `
  } else if(age === 16) {
    out2.innerHTML = `
      <p>du darfst schon wählen</p>
    `
  } else {
    out2.innerHTML = `
      <p>du bist noch minderjährig</p>
    `
  }
}


// -----lev1_2-----
let inputValue = document.getElementById('input-value');
let out3 = document.getElementById('out3');

function weather() {
  let value = Number(inputValue.value);

  if(value >= 8 && value <= 10) {
    out3.innerHTML = `
      <p>super</p>
    `
  } else if(value >= 6 && value <= 7) {
    out3.innerHTML = `
      <p>gut</p>
    `
  } else if(value >= 3 && value <= 5) {
    out3.innerHTML = `
      <p>okay</p>
    `
  } else if(value >= 0 && value <= 2) {
    out3.innerHTML = `
      <p>schlecht</p>
    `
  } else {
    out3.innerHTML = `
      <p>ja mega</p>
    `
  }
}


// -----lev1_3-----
let input = document.getElementById('input');
let out4 = document.getElementById('out4');

function adult2() {
  if(input.value >= 18) {
    out4.innerHTML = `
      <span>Ja. Du kannst Shisha rauchen</span>
    `
  } else {
    out4.innerHTML = `
      <span>Du darfst noch nicht Shisha rauchen</span>
    `
  }
}
