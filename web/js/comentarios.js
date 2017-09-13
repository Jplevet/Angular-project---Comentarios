var app = angular.module("MiPrimerApp", []);
app.controller("Primercontrolador", function($scope){
    $scope.nombre = "Juan";
    $scope.nuevoComentario = {};
    $scope.comentarios = [
        {
            comentario: "Buen ejemplo",
            username: "Jplevet"
        },
        {
            comentario: "Mal ejemplo",
            username: "Otro_Usuario"
        }
    ];
    $scope.agregarComentario = function(){
      $scope.comentarios.push($scope.nuevoComentario);
      $scope.nuevoComentario =  {};
    };
});