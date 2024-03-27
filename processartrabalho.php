<?
require_once"./config.php";

$nome = $_POST["nome"];
$email = $_POST["email"];
$telefone = $_POST["telefone"];





$sql = "INSERT INTO usuario (nome,email,telefone) VALUE (:nome, :email,:tefone)";
$stmt = $conn-> prepare ($sql);
$stmt->bind_param(":nome",$nome);
$stmt->bind_param(":email",$email);
$stmt->bind_param(":telefone",$telefone);
$stmt->execute();

//if($stmt->rowCount() > 0){
    header("location:../trabalho.php");
//}
//else{
    echo"Erro ao tentar adicionar usuario";
//}
