-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

Create database OnePiece;

Use OnePiece;

-- Create table Usuario (
-- idUsuario int primary key auto_increment,
-- nome varchar (45),
-- email varchar (45),
-- CPF char (14),
-- CEP char (9),
-- numero varchar(45));

Create Table Login(
idLogin int primary key auto_increment,
senha varchar(45),
email varchar(45));

Create table Quiz(
idQuiz int primary key auto_increment,
alternativaCorreta varchar(45),
questoes varchar(45),
fkLogin int,
foreign key (fkLogin) references Login(idLogin));