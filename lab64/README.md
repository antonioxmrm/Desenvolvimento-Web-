Testar a página inicial: curl http://127.0.0.1:3000/

Testar a página Sobre: curl http://127.0.0.1:3000/about

Testar a página de erro 404: curl http://127.0.0.1:3000/"digitar qualquer coisa"

Testar Upload de arquivo: curl -X POST -F "file=@caminho_para_arquivo/arquivo.txt" http://127.0.0.1:3000/upload
