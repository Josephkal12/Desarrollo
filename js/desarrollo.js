var app = angular.module('app',['ngMaterial','ngMessages']);
app.controller('controlador', ['$scope', function($scope){
 $scope.formulario = [

       // {"nombre":"", "email":"", "telefono":"", "fecha":"", "ciudad":""}
      ];

$scope.Save = function(){
  
var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
var f=$scope.formularioNew.fecha;
var f2 = new Date();

var patronNombre = /^[A-z\.\-\s]+$/;
var compNombre = patronNombre.test($scope.formularioNew.nombre);
if(compNombre == false ){
  alert('EL campo nombre tiene caracteres no validos: numeros');
  exit;
}
var patronEmail = /^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/;
var compEmail = patronEmail.test($scope.formularioNew.email);
if(compEmail == false ){
  alert('El campo email tiene caracteres no validos, el formato valido es: someone@company.com');
  exit;
}
var patronTelefono = /^[+#*\(\)\[\]]*([0-9][ ext+-pw#*\(\)\[\]]*){6,45}$/;
var compTelefono = patronTelefono.test($scope.formularioNew.telefono);
if(compTelefono == false ){
  alert('El campo telefono tiene caracteres no validos');
  exit;
}

if(f.getFullYear() < 1919){
  alert('Seleccione una fecha valida no menor a 100 años');
  exit;
}
if(f.getFullYear() > f2.getFullYear()){
  alert('Seleccione una fecha valida, no mayor a la actual');
  exit;
}

if(f.getMonth() > f2.getMonth()){
  alert('Seleccione una fecha valida, no mayor a la actual');
  exit;
}
if(f.getDate() > f2.getDate()){
  alert('Seleccione una fecha valida, no mayor a la actual');
  exit;
}


   $scope.formulario.push({

    nombre: $scope.formularioNew.nombre,
    email: $scope.formularioNew.email,
    telefono: $scope.formularioNew.telefono,
    fecha: f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear(),
    ciudad: $scope.formularioNew.ciudad,
   });
  };
  $scope.ShowForm = function(){
		$scope.formVisibility = true;
		console.log($scope.formVisibility);
	}

     


 }]);﻿

