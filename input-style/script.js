const inputs = document.querySelectorAll('.input');
const bonito = document.getElementById('bonito');
const rico = document.getElementById('rico');
const cabeludo = document.getElementById('cabeludo');

inputs.forEach(input => {
  input.addEventListener('change', (e) => {
    facaAMagia(e.target)
  });
});

function facaAMagia(oClicado) {

    if(bonito.checked && rico.checked && cabeludo.checked) {

    if(bonito === oClicado) {
      rico.checked = false;
    }

    if(rico === oClicado) {
      cabeludo.checked = false;
    }

    if(cabeludo === oClicado) {
      bonito.checked = false;
    }
  }
}