# DevHouseAPI

API feita em node JS com objetivo de posibilitar o cadastro de usuários para que os mesmos possam fazer cadastro de casas e reservar casas caso queiram
alugar, essa é uma API de alugueis de casas, onde o usuário pode efetuar reservar, buscar por casas cadastradas verificar a disponibilidade e também cadastrar suas própias casas.

### Descrição da API

#### Sobre o Usuário

- Essa Api possibilita ao Usuário o cadastro via email.
- Possibilita login Via email.
- O Usuário deve realizar suas reservas desde que elas não sejam feitas nas suas própias casas cadastradas ou casas cujo o status esteja indisponível.
- O Usuário poderá cancelar uma reserva a qualquer momento.

#### Sobre as Casas

- O Usuário cadastrado e logado, poderá cadastrar, editar e excluir sua casa quando quiser.
- Casas cadastradas devem conter foto de capa, descrisção,preço, local , data e status (disponível ou indisponível).
- O usuário terá acesso ao dashboard de casas reservadas no seu nome por meio de seu Id de usuário.

##### Tccnologias Utilizadas

- [x] Node.js
- [x] Express.js
- [x] mongoose
- [x] MongoDb
- [x] Javascript
- [x] Multer
- [x] Yup
