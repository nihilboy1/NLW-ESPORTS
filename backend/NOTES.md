- npm init -y (Cria o package.json com a configurações do servidor)

- npm install express (Instala o micro framework express, que cuida da parte de criação de rotas)

- npm install typescript -D (instala o typescript como dependência de desenvolvimento)

- npm install --save-dev @types/express (instala os tipos da biblioteca express)

- npm i ts-node-dev -D (instala a biblioteca que será responsavel pela conversão do código .ts para .js e pelo fast refresh da aplicação)

- rodar "npx tsc --init" (esse comando cria o arquivo de configurações do typescript no projeto)

-  tirar de comentário a propriedade "moduleResolution": "node", dentro do tsconfig.json

- Criar a pastas src, e dentro dela, o arquivo server.ts

- Ainda dentro do package.json, dentro da propriedade "scripts", criar o comando "dev" que irá apontar para o "tsnd src/server.ts". 

- "npm run dev" para rodar a aplicação

------------------------------------------------- Criação básica de server: 
import express, { Request, Response } from 'express'

const app = express()

app.get('/ads', (req: Request, res: Response) => {
  return res.json({})
})

app.listen(3333, () => {
  console.log('Running on: 3333')
})


--------------------
Categorias do HTTP

Os códigos HTTP (ou HTTPS) tem três dígitos, sendo que o primeiro dígito do código significa a classificação dentro das cinco categorias.

1XX: Informativo – a solicitação foi aceita ou o processo continua em andamento;
2XX: Confirmação – a ação foi concluída ou entendida;
3XX: Redirecionamento – indica que algo mais precisa ser feito ou precisou ser feito para completar a solicitação;
4XX: Erro do cliente- indica que a solicitação não pode ser concluída ou contém a sintaxe incorreta;
5XX: Erro no servidor – o servidor falhou ao concluir a solicitação.

Lista de Código de Status HTTP
Agora que você sabe o que é HTTP e HTTPS, confira essa lista com códigos HTTP, que tem os códigos mais comuns e outros que raramente são usados, baseado no W3.org.

Código do Status HTTP
(Status-code)	Significado do código HTTP
(Reason-Phrase)	Significado do código HTTP
100	Continue	Continuar
101	Switching Protocols	Mudando Protocolos
102	Processing	Processando
200	Ok	Ok
201	Created	Criado
202	Accepted	Aceito
203	Non-Authoritative Information	Não autorizado
204	No Content	Nenhum Conteúdo
205	Reset Content	Resetar Conteúdo
206	Partial Content	Conteúdo Parcial
300	Multiple Choices	Múltipla Escolha
301	Moved Permanently	Movido Permanentemente
302	Found	Encontrado
303	See Other	Veja outro
304	Not Modified	Não modificado
305	Use Proxy	Use Proxy
306	Proxy Switch	Proxy Trocado
400	Bad Request	Solicitação Inválida
401	Unauthorized	Não autorizado
402	Payment Required	Pagamento necessário
403	Forbidden	Proibido
404	Not Found	Não encontrado
405	Method Not Allowed	Método não permitido
406	Not Acceptable	Não aceito
407	Proxy Authentication Required	Autenticação de Proxy Necessária
408	Request Time-out	Tempo de solicitação esgotado
409	Conflict	Conflito
410	Gone	Perdido
411	Length Required	Duração necessária
412	Precondition Failed	Falha de pré-condição
413	Request Entity Too Large	Solicitação da entidade muito extensa
414	Request-URL Too Large	Solicitação de URL muito Longa
415	Unsupported Media Type	Tipo de mídia não suportado
416	Request Range Not Satisfiable	Solicitação de faixa não satisfatória
417	Expectation Failed	Falha na expectativa
500	Internal Server Error	Erro do Servidor Interno
501	Not Implemented	Não implementado
502	Bad Gateway	Porta de entrada ruim
503	Service Unavailable	Serviço Indisponível
504	Gateway Time-out	Tempo limite da Porta de Entrada
505	HTTP Version Not Supported	Versão HTTP não suportada