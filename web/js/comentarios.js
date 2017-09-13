var app = angular.module("MiPrimerApp", []);
app.controller("Primercontrolador", function($scope){
    $scope.nombre = "Juan";
    $scope.comentarios = [
        {
            comentarios: "Buen ejemplo",
            username: "Jplevet"
        },
        {
            comentarios: "Mal ejemplo",
            username: "Otro_Usuario"
        }
    ];
});