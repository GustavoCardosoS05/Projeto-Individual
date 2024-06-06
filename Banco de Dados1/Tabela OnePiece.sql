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