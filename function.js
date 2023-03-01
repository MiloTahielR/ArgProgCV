var myLink = document.getElementById('botonenviar');

myLink.onclick = function GetData(){
    var Nombre= document.getElementById ("nombreform").value;
    console.log ("el nombre de la persona es" + Nombre);

    var Apellido= document.getElementById ("apellidoform").value;
    console.log ("el apellido de la persona es" + Apellido);

    var Email= document.getElementById ("emailform").value;
    console.log ("el email de la persona es" + Email);

    var Telefono =document.getElementById ("telefonoform").value;
    console.log ("el telefono de la persona es" + Telefono);

    let Datospersona =  (Nombre + Apellido + Email + Telefono );
    console.log ( "Los datos de contacto de esta persona son " + Nombre + "" +Apellido +"" +Email + "" +Telefono);
   
    if (Nombre== "") {
    alert ("el campo Nombre está incompleto");
    document.getElementById ("nombreform").focus();
    } else if (Apellido== "") {
    alert ("el campo Apellido está incompleto");
    document.getElementById ("apellidoform").focus();
    } else if  (Email== "") {
    alert ("el campo Email está incompleto");
    document.getElementById ("emailform").focus();
    } else if (Telefono== "") {
    alert ("el campo Telefono está incompleto");
    document.getElementById ("telefonoform").focus();
    } else {

    console.log ("Los datos de contacto de esta persona son " + Nombre + "" +Apellido +"" +Email + "" +Telefono);   
    document.getElementById ("nombreform").value="";
    document.getElementById ("apellidoform").value="";
    document.getElementById ("emailform").value="";
    document.getElementById ("telefonoform").value="";
    
}  
}


