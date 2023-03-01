let indice = [
  { btn: Expectativas_btn, elemento: Expectativas },
  { btn: Habilidades_tecnicas_btn, elemento: Habilidades_tecnicas },
  { btn: Logros_btn, elemento: Logros },
  { btn: Proyectos_destacados_btn, elemento: Proyectos_destacados },
  { btn: Experiencia_laboral_btn, elemento: Experiencia_laboral },
  { btn: Estudios_btn, elemento: Estudios },
  { btn: Expectativas_btn_res, elemento: Expectativas },
  { btn: Habilidades_tecnicas_btn_res, elemento: Habilidades_tecnicas },
  { btn: Logros_btn_res, elemento: Logros },
  { btn: Proyectos_destacados_btn_res, elemento: Proyectos_destacados },
  { btn: Experiencia_laboral_btn_res, elemento: Experiencia_laboral },
  { btn: Estudios_btn_res, elemento: Estudios },
];

let navegador_m = document.getElementById('navegador_m')

indice.forEach(function (elemento) {
  elemento.btn.addEventListener('click', function () {
    let activeTab = document.querySelector('.visible');
    if (activeTab && activeTab !== elemento.elemento) {
      activeTab.classList.remove('visible');
    }
    ver(elemento.elemento)
    navegador_m.classList.add('oculto');
  });
});

function ver(element) {
  element.classList.toggle('visible');
}


/*--------------------------------------------------------------------------------------------------------------------------*/

let Siguiente_btn = document.getElementById('Siguiente_btn');
let contenedor = document.getElementById('Contenedor');
let caratula = document.getElementById('Caratula');


Siguiente_btn.addEventListener('click', function siguiente() {
  contenedor.classList.remove('oculto');
  contenedor.classList.add('visible_grid');
  caratula.classList.remove('visible');
  caratula.classList.add('oculto');
});

/*--------------------------------------------------------------------------------------------------------------------------*/

let Contacto = document.getElementById('Contacto_btn');


Contacto.addEventListener('click', function caratura() {
  contenedor.classList.remove('visible_grid');
  contenedor.classList.add('oculto');
  caratula.classList.remove('oculto');
  caratula.classList.add('visible');
});

/*--------------------------------------------------------------------------------------------------------------------------*/

let Contacto_res = document.getElementById('Contacto_btn_res');


Contacto_res.addEventListener('click', function contacto_resp() {
  contenedor.classList.remove('visible_grid');
  contenedor.classList.add('oculto');
  caratula.classList.remove('oculto');
  caratula.classList.add('visible');
});

/*--------------------------------------------------------------------------------------------------------------------------*/

let expandir = document.getElementById('expandir');

expandir.addEventListener('click', function () {
  navegador_m.classList.toggle('oculto');
});

/*--------------------------------------------------------------------------------------------------------------------------*/
