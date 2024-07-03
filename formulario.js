const formulario = document.querySelector("#formulario")
formulario.addEventListener("submit",async (e)=>{
    e.preventDefault()
    try {
        await handleSubmit(validarForm())
        console.log("sucesso")

        
    } catch (error) {
      console.log ("erro ao enviar form",error)  
    }
})


async function handleSubmit(data){
    const url = "https://sheetdb.io/api/v1/bgqh0keo4tt7e"
    const token = "nv7dkcbkk5pl6xkuol8by3weqpdpcuexj78tohgr"
    try {
        const res = await fetch (url,{
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                Authentication:`Bearer ${token}`
            },
            body:JSON.stringify(data)
        })
        console.log ("deu certo",res.json())
        window.location.href = "./receber-dados.html"
        // window.open("./receber-dados.html")
    } catch (error) {
        console.log(error)
    }
    
}

function validarForm() {
    // Obter os valores dos campos do formulário
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var dia = document.getElementById("dia").value;
    var endereco = document.getElementById("endereco").value;
    if (nome === "" || cpf === "" || email === "" || telefone === "" || dia === "" || endereco === "") {
      
       throw new Error("deu erro");
    }
    return {
        cpf,
        dia,
        endereco,
        telefone,
        email,
        nome,
    };
  }
  
  //Adiciona um ouvinte de evento para o clique do botão de envio
  document.addEventListener('DOMContentLoaded', function () {
    let phoneInput = document.getElementById('telefone');
  
    phoneInput.addEventListener('input', function (event) {
        let input = event.target.value.replace(/\D/g, '');
        let formattedInput = '';
  
        if (input.length > 0) {
            formattedInput = '(' + input.substring(0, 2);
        }
        if (input.length >= 3) {
            formattedInput += ') ' + input.substring(2, 7);
        }
        if (input.length >= 8) {
            formattedInput += '-' + input.substring(7, 11);
        }
        
        event.target.value = formattedInput;
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    let cpfInput = document.getElementById('cpf');
  
    cpfInput.addEventListener('input', function (event) {
        let input = event.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
        let formattedInput = '';
  
        if (input.length > 0) {
            formattedInput = input.substring(0, 3); // Primeiros 3 dígitos do CPF
  
            if (input.length > 3) {
                formattedInput += '.' + input.substring(3, 6); // Adiciona o primeiro bloco de 3 dígitos
            }
            if (input.length > 6) {
                formattedInput += '.' + input.substring(6, 9); // Adiciona o segundo bloco de 3 dígitos
            }
            if (input.length > 9) {
                formattedInput += '-' + input.substring(9, 11); // Adiciona os últimos 2 dígitos
            }
        }
  
        event.target.value = formattedInput;
    });
  });



 

//   document.getElementById("submit-btn").addEventListener("click", function (event) {
//     event.preventDefault(); 
//     if (validarForm()) { 
//       alert("Consulta agendada com sucesso!");
//       document.querySelector("form").submit();
//     }
//   });


// document.addEventListener('DOMContentLoaded', function () {
//     let elemento = document.getElementById('Remedios');

//     elemento.addEventListener('mouseenter', function () {
//         this.classList.add('hovered');
//     });

//     elemento.addEventListener('mouseleave', function () {
//         this.classList.remove('hovered');
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     let elemento = document.getElementById('Remedios');

//     // Função para adicionar a classe quando o toque começa
//     function addHoverClass() {
//         elemento.classList.add('hovered');
//     }

//     // Função para remover a classe quando o toque termina
//     function removeHoverClass() {
//         elemento.classList.remove('hovered');
//     }

//     // Ouvinte de evento para touchstart (quando o toque começa)
//     elemento.addEventListener('touchstart', function () {
//         addHoverClass();
//     });

//     // Ouvinte de evento para touchend (quando o toque termina)
//     elemento.addEventListener('touchend', function () {
//         removeHoverClass();
//     });

//     // Ouvinte de evento para touchcancel (quando o toque é cancelado, por exemplo, se o dedo sair da área do elemento)
//     elemento.addEventListener('touchcancel', function () {
//         removeHoverClass();
//     });
// });






  