# Web scraper - hiring test

Candidato: Gustavo Mercês

## Clone e acesso o repositório

    git clone git@github.com:guhmerces/web-scraper-hiring-test.git

    cd web-scraper-hiring-test    

## Rodando a API

Certifique-se de ter a porta 3000 liberada

Após isso, rode os comandos:

    npm install

    npm start

## Para rodar testes: (Opcional)
    npm test

![Screenshot from 2024-09-17 13-59-26](https://github.com/user-attachments/assets/4ca72e35-03ac-4d6c-b42e-e2377a15b01b)

## Usando a API (exemplo utilizando Httpie)

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
        "description": "Asus VivoBook X441NA-GA190 Chocolate Black, 14\", Celeron N3450, 4GB, 128GB SSD, Endless OS, ENG kbd",
        "name": "Asus VivoBook...",
        "price": 295.99,
        "reviewCount": "14 reviews"
    },

    ... Vários outros notebooks aqui
    {
        "description": "Asus ROG Strix SCAR Edition GL503VM-ED115T, 15.6\" FHD 120Hz, Core i7-7700HQ, 16GB, 256GB SSD + 1TB SSHD, GeForce GTX 1060 6GB, Windows 10 Home",
        "name": "Asus ROG Strix...",
        "price": 1799,
        "reviewCount": "8 reviews"
    }
]
```
