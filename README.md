# Web scraper - hiring test

Candidato: Gustavo Mercês

## Rodando a API

Certifique-se de ter a porta 3000 liberada

Após isso. rode os comandos:

    npm install

    npm start

## Para rodar testes: (Opcional)
    npm test
    ![Screenshot from 2024-09-17 13-59-26](https://github.com/user-attachments/assets/4ca72e35-03ac-4d6c-b42e-e2377a15b01b)


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
    {
        "name": "Asus ROG Strix...",
        "price": 1799
    }
]
```
