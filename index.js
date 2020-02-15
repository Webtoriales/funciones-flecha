const manual = document.querySelector('#manual');
const automatico = document.querySelector('#automatico');
const p = document.querySelector('#contador');

class Contador {
  constructor(cuenta, tiempo) {
    this.cuenta = cuenta || 0;
    this.tiempo = tiempo || 0;
  }

  sumarManual() {
    this.cuenta++;
    p.innerHTML = this.cuenta;
  }

  sumarAutomatico() {
    setInterval(() => {
      this.sumarManual()
    }, this.tiempo);
  }
};

manual.addEventListener('click', function() {
  const contador = new Contador(p.innerHTML);
  contador.sumarManual();
});

automatico.addEventListener('click', function() {
  const contador = new Contador(p.innerHTML, 1000);
  contador.sumarAutomatico();
});