<?php
// Verifica se o método de requisição é POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Processar os dados do formulário...
    
    // Conexão com o banco de dados (substitua pelos seus detalhes de conexão)
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "trabalho_faculdade_land_page";

    // Cria a conexão
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verifica a conexão
    if ($conn->connect_error) {
        die("Erro na conexão: " . $conn->connect_error);
    }

    // Prepara a consulta SQL para inserção de dados (substitua pelos seus detalhes)
    $stmt = $conn->prepare("INSERT INTO trabalho_faculdade_land_page (nome, email, telefone, cpf, endereco, data) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $nome, $email, $telefone, $cpf, $endereco, $data);

    // Define os parâmetros e executa a consulta
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $cpf = $_POST['cpf'];
    $endereco = $_POST['endereco'];
    $data = $_POST['data'];

    $stmt->execute();

    // Fecha a consulta
    $stmt->close();

    // Fecha a conexão
    $conn->close();

    // Resposta para o cliente (sucesso)
    $response = array(
        'success' => true,
        'redirect_urls' => array(
            './index.html',
            'listarConsultas.php'
        )
    );

    header('Content-Type: application/json');
    echo json_encode($response);
    header("Location: listarConsultas.php");
    exit();
}
?>;
