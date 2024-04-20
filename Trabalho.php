<?php

//if(isset($_POST["submit"])) 

//{
    
require_once"./config.php";

$nome = $_POST['nome'];
$email = $_POST["email"];
$telefone = $_POST["telefone"];
$cpf = $_POST["cpf"];
$endereco = $_POST["endereco"];
$data =$_POST['data'];

$sql = "INSERT INTO trabalho_faculdade_land_page (nome,email,telefone,cpf,endereco,data) VALUE (?, ?, ?, ?, ?, ?);";

$stmt = $conn-> prepare ($sql);
$stmt->bind_param('ssssss',$nome,$email,$telefone,$cpf,$endereco,$data);
$stmt->execute();
$stmt->store_result();
$stmt->close();


    header("location:./index.html");

?>

<?php



header("Location: listarConsultas.php")
  
?>;


