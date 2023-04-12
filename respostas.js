function verificarRespostas() {
    var form = document.forms["Form2"];
    var respostasCorretas = 0;

    if (form.elements["e21"].value === "" || form.elements["e22"].value === "" || form.elements["e23"].value === "" || 
    form.elements["e24"].value === "" || form.elements["e25"].value === "" || form.elements["e26"].value === "" ||
    form.elements["e27"].value === "" || form.elements["e28"].value === "" || form.elements["e29"].value === "" ||
    form.elements["e30"].value === "")
     {
        alert(" Por favor, responda todas as perguntas antes de concluir o quiz! ");
        return;
    }
   if (form.elements["e21"].value === "a") {
        document.getElementById("certo1").style.color = "#00ff00";
        respostasCorretas++;
    } else {
        document.getElementById("certo1").style.color = "#ff0000";
    }



 
    if (form.elements["e22"].value === "b") {
        document.getElementById("certo2").style.color = "#00ff00";
        respostasCorretas++;
    } else {
        document.getElementById("certo2").style.color = "#ff0000";
    }

  


    if (form.elements["e23"].value === "a") {
        document.getElementById("certo3").style.color = "#00ff00";
        respostasCorretas++;
    } else {
        document.getElementById("certo3").style.color = "#ff0000";
    }

 


    if (form.elements["e24"].value === "c") {
        document.getElementById("certo4").style.color = "#00ff00";
        respostasCorretas++;
    } else {
        document.getElementById("certo4").style.color = "#ff0000";
    }

  


    if (form.elements["e25"].value === "b") {
        document.getElementById("certo5").style.color = "#00ff00";
        respostasCorretas++;
    } else {
        document.getElementById("certo5").style.color = "#ff0000";
    }



    if (form.elements["e26"].value === "e") {
        document.getElementById("certo6").style.color = "#00ff00";
        respostasCorretas++;
    } else {
        document.getElementById("certo6").style.color = "#ff0000";
    }



    if (form.elements["e27"].value === "c") {
        document.getElementById("certo7").style.color = "#00ff00";
        respostasCorretas++;
    } else {
        document.getElementById("certo7").style.color = "#ff0000";
    }



    if (form.elements["e28"].value === "d") {
        document.getElementById("certo8").style.color = "#00ff00";
        respostasCorretas++;
    } else {
        document.getElementById("certo8").style.color = "#ff0000";
    }



    if (form.elements["e29"].value === "c") {
        document.getElementById("certo9").style.color = "#00ff00";
        respostasCorretas++;
    } else {
        document.getElementById("certo9").style.color = "#ff0000";
    }



    if (form.elements["e30"].value === "b") {
        document.getElementById("certo10").style.color = "#00ff00";
        respostasCorretas++;
    } else {
        document.getElementById("certo10").style.color = "#ff0000";
    }


    alert("Você acertou " + respostasCorretas + " de 10 questões.");
 }