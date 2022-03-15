create table `movie`(
  `no` tinyint not null auto_increment,
  `name` char(100) not null,
  `genre` char(10) not null,
  `age` int(30) not null,
  `star` int(5)not null,
  `img` char(100) not null, 
  primary key `no`
);