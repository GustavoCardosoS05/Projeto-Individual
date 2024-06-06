-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

Create database OnePiece;

Use OnePiece;


Create Table Login(
idLogin int primary key auto_increment,
senha varchar(45),
email varchar(45));

Create table Quiz(
idQuiz int primary key auto_increment,
alternativaCorreta int,
questoes varchar(45),
fkLogin int,
foreign key (fkLogin) references Login(idLogin));