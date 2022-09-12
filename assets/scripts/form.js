window.onload = AOS.init({
  duration: 1000,
  once: true,
});



const REG_EX_EMAIL = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

let form = document.querySelector("form.email-form");

let lds_ring = document.querySelector('div.lds-ring')

// Declaracion de campos de texto
let inputName = document.querySelector("input[name='NomYApe']");
let inputEmail = document.querySelector("input[name='email']");
let inputResidence = document.querySelector("input[name='Residencia']");
let inputPhone = document.querySelector("input[name='Telefono']");
let inputExp = document.querySelector("input[name='exp']");

// Declaracion de campos de errores
let errorName = document.querySelector("div.validate-NomYApe");
let errorEmail = document.querySelector("div.validate-email");
let errorResidence = document.querySelector("div.validate-Residencia");
let errorPhone = document.querySelector("div.validate-Telefono");
let errorExp = document.querySelector("div.validate-exp");

//Declaracion de errores
let errors = {
  name: "El campo no puede quedar vacio",
  mail: "El campo no puede quedar vacio",
  residence: "El campo no puede quedar vacio",
  phone: "El campo no puede quedar vacio",
  exp: "El campo no puede quedar vacio",
};

//Validaciones
const validaciones = {
  nombre: function () {
    errors.name = "El campo no puede quedar vacio";
    if (inputName.value.length == 0) {
      errorName.innerText = errors.name;
    } else if (inputName.value.length <= 2) {
      errors.name = "El campo no puede tener menos de 3 caracteres";
      errorName.innerText = errors.name;
    } else {
      if (errors.name) {
        delete errors.name;
      }
      errorName.innerText = "";
    }
  },
  mail: function () {
    errors.mail = "El campo no puede quedar vacio";
    if (inputEmail.value.length == 0) {
      errorEmail.innerText = errors.mail;
    } else if (!inputEmail.value.match(REG_EX_EMAIL)) {
      errors.mail = "Por favor ingrese un email valido";
      errorEmail.innerText = errors.mail;
    } else {
      if (errors.mail) {
        delete errors.mail;
      }
      errorEmail.innerText = "";
    }
  },
  // age: function () {
  //   errors.age = "El campo no puede quedar vacio";
  //   if (inputAge.value.length == 0) {
      
  //     errorAge.innerText = errors.age;
  //   } else if (inputAge.value.length <= 1) {
  //     errors.age = "El campo no puede tener menos de 2 caracteres";
  //     errorAge.innerText = errors.age;
  //   } else {
  //     if (errors.age) {
  //       delete errors.age;
  //     }
  //     errorAge.innerText = "";
  //   }
  // },
  residence: function () {
    errors.residence = "El campo no puede quedar vacio";
    if (inputResidence.value.length == 0) {
      errorResidence.innerText = errors.residence;
    } else if (inputResidence.value.length <= 2) {
      errors.residence = "El campo no puede tener menos de 3 caracteres";
      errorResidence.innerText = errors.residence;
    } else {
      if (errors.residence) {
        delete errors.residence;
      }
      errorResidence.innerText = "";
    }
  },
  phone: function () {
    errors.phone = "El campo no puede quedar vacio";
    if (inputPhone.value.length == 0) {
      errorPhone.innerText = errors.phone;
    } else if (inputPhone.value.length <= 2) {
      errors.phone = "El campo no puede tener menos de 3 caracteres";
      errorPhone.innerText = errors.phone;
    } else {
      if (errors.phone) {
        delete errors.phone;
      }
      errorPhone.innerText = "";
    }
  },
  exp: function () {
    errors.exp = "El campo no puede quedar vacio";
    if (inputExp.value.length == 0) {
      errorExp.innerText = errors.exp;
    } else if (inputExp.value.length <= 1) {
      errors.exp = "El campo no puede tener menos de 2 caracteres";
      errorExp.innerText = errors;
    } else {
      if (errors.exp) {
        delete errors.exp;
      }
      errorExp.innerText = "";
    }
  },
  // indep: function () {
  //   errors.indep = "El campo no puede quedar vacio";
  //   if (inputIndep.value.length == 0) {
  //     errorIndep.innerText = errors.indep;
  //   } else if (inputIndep.value.length <= 1) {
  //     errors.indep = "El campo no puede tener menos de 2 caracteres";
  //     errorIndep.innerText = errors.indep;
  //   } else {
  //     if (errors.indep) {
  //       delete errors.indep;
  //     }
  //     errorIndep.innerText = "";
  //   }
  // },
  // teamwork: function () {
  //   errors.team = "El campo no puede quedar vacio";
  //   if (inputTeam.value.length == 0) {
  //     errorTeam.innerText = errors.team;
  //   } else if (inputTeam.value.length <= 1) {
  //     errors.team = "El campo no puede tener menos de 2 caracteres";
  //     errorTeam.innerText = errors.team;
  //   } else {
  //     if (errors.team) {
  //       delete errors.team;
  //     }
  //     errorTeam.innerText = "";
  //   }
  // },
  // hours: function () {
  //   errors.hours = "El campo no puede quedar vacio";
  //   if (inputHours.value.length == 0) {
  //     errorHours.innerText = errors.hours;
  //   } else if (inputHours.value.length <= 2) {
  //     errors.hours = "El campo no puede tener menos de 3 caracteres";
  //     errorHours.innerText = errors.hours;
  //   } else {
  //     if (errors.hours) {
  //       delete errors.hours;
  //     }
  //     errorHours.innerText = "";
  //   }
  // },
};


  inputName.onblur = validaciones.nombre;
  inputEmail.onblur = validaciones.mail;
  inputResidence.onblur = validaciones.residence;
  inputPhone.onblur = validaciones.phone;
  inputExp.onblur = validaciones.exp;




form.addEventListener("submit", function (e) {
  e.preventDefault();

  lds_ring.style.display = "inline-block"

  console.log(e)
validaciones.nombre();
validaciones.mail();
validaciones.residence();
validaciones.phone();
validaciones.exp();




  if (Object.keys(errors).length) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor revisa los campos e intentalo nuevamente",
    });
    lds_ring.style.display = "none"
  } else {
    form.addEventListener("submit", function (e) {
    });
      emailjs.sendForm("service_u4g8id2", "template_ATflrdWt_clone", form)
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);

          inputName.value = "";
          inputEmail.value = "";
          inputResidence.value = "";
          inputPhone.value = "";
          inputExp.value = "";

          Swal.fire(
            "Muchas gracias!",
            "La informacion se ha enviado satisfactoriamente!",
            "success"
          );

            setTimeout(function() {
              window.location.pathname = "gracias.html"
    lds_ring.style.display = "none"

            }, 3000)

        },
        function (error) {
          console.log("FAILED...", error);

          inputName.value = "";
          inputEmail.value = "";
          inputResidence.value = "";
          inputPhone.value = "";
          inputExp.value = "";

          Swal.fire({
            icon: "error",
            title: "Oops...",
            text:
              "Ha ocurrido un error, por favor intentalo de nuevo mas tarde.",
          });
        }
      );
  }
});
