<?php
// Conectar ao banco de dados (substitua pelos seus próprios dados de conexão)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "trabalho_faculdade_land_page";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar a conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Executar a consulta SQL para selecionar os dados
$sql = "SELECT * FROM trabalho_faculdade_land_page";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Exibir os dados encontrados em uma tabela
    echo "<table border='15'>";
    echo "<tr> <th>Nome</th> <th>Email</th> <th>Telefone</th> <th>CPF</th> <th>Endereço</th> <th>Data</th> </tr>";
    echo "<style>
    table {
        width: 100%;
        
        border: 2px solid red;
        font-family: Arial, sans-serif;
        border-radius: 8px;
    }
    th, td {
        padding: 8px;
        text-align: left;
        border-bottom: 2px solid #ddd;
    }
    th {
        background-color: #f2f2f2;
    }
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    tr:hover {
        background-color: #ddd;
    }
</style>";
  while($row = $result->fetch_assoc()) {
       echo "<tr>";
       echo "<td>". $row["nome"] ."</td>";
       echo "<td>". $row["email"] ."</td>";
       echo "<td>". $row["telefone"] ."</td>";
       echo "<td>". $row["cpf"] ."</td>";
       echo "<td>". $row["endereco"] ."</td>";
       echo "<td>". $row["data"] ."</td>";
       echo "</tr>";
   }
 echo "</table>";
} else {
    echo "0 resultados encontrados";
}

 //Fechar a conexão
$conn->close();
?>;
