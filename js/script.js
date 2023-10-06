var elTitle = document.querySelector('h1');
var elInp = document.querySelector('.inp');

function Password() {
  var password = elInp.value;

  if (password.length >= 8 && /[A-Z]{1,3}/.test(password) && password.trim() === password) {
    elTitle.textContent = "Yaroqli parol";
    elTitle.style.color ="rgb(4, 89, 4)"

  } else {
    elTitle.textContent = "Yaroqsiz parol";
    elTitle.style.color ="red"

  }
}