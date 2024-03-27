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

//if($stmt->rowCount() > 0){
    header("location:./trabalho.html");
//}
//else{
    //echo"Erro ao tentar adicionar usuario";
//}

//}
?>

<?php
// Aqui está o seu código existente para processar o formulário e inserir os dados no banco de dados

// Após inserir os dados com sucesso, você pode redirecionar o usuário para a página inicial ou qualquer outra página
header("Location: listarConsultas.php")
  // Certifique-se de sair após o redirecionamento
?>;


