<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README do Projeto</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            padding: 20px;
        }
        h1 {
            color: #007BFF;
        }
        p {
            line-height: 1.6;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        button {
            background-color: #007BFF;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>README do Projeto</h1>
        <p>
            Este é um projeto incrível que visa simplificar a vida dos desenvolvedores. como é um projeto de iniciante, fique á vontade pra melhorar!
        </p>
        <p>
            O projeto foi desenvolvido com as seguintes tecnologias:
        </p>
        <ul id="tecnologias">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
        <p>
            Para começar, basta clicar no botão abaixo para exibir uma mensagem de boas-vindas:
        </p>
        <button onclick="mostrarMensagem()">Clique aqui</button>
        <p id="mensagem" style="display:none; color: #007BFF; font-weight: bold;">
            Bem-vindo ! Estamos felizes por você estar aqui.
        </p>

        <h2>Minha Experiência</h2>
        <p>
            Aprendi bastante com este curso, espero me desenvolver cada vez mais. Tive algumas dificuldades, mas faz parte! Fiz o projeto adicionando o <code>forEach</code> no lugar do <code>for</code>, para criar um novo <code>li</code> e adicionar um novo elemento dinamicamente.
        </p>
    </div>

    <script>
        function mostrarMensagem() {
            document.getElementById('mensagem').style.display = 'block';
        }

        // Exemplo de uso do forEach para adicionar elementos dinamicamente
        const tecnologias = ["HTML", "CSS", "JavaScript"];
        const listaTecnologias = document.getElementById('tecnologias');

        // Limpa a lista existente
        listaTecnologias.innerHTML = '';

        // Adiciona cada tecnologia usando forEach
        tecnologias.forEach(tech => {
            const novoItem = document.createElement('li');
            novoItem.textContent = tech;
            listaTecnologias.appendChild(novoItem);
        });
    </script>
</body>
</html>
