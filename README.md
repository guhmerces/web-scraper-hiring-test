# Web scraper - hiring test

Candidato: Gustavo

## Rodando a API

Certifique-se de ter a porta 3000 liberada

Após isso. rode os comandos:

    npm install

    npm start

## Para rodar testes: (Opcional)
    npm test
    ![alt text](image.png)

## Usando a API (exmplo utilizando Httpie)

### get /notebooks

```
GET /notebooks HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Host: localhost:3000
User-Agent: HTTPie/3.2.2



HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 4993
Content-Type: application/json; charset=utf-8
Date: Tue, 17 Sep 2024 16:57:05 GMT
ETag: W/"1381-mt0/D1X/s/dROqaLlXbY7TxDmeg"
Keep-Alive: timeout=5
X-Powered-By: Express

[
    {
        "name": "Asus VivoBook...",
        "price": 295.99
    },
    ... Vários outros notebooks aqui
]
```