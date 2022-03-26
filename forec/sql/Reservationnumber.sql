
create table `moviemember`(
  `no` int(100) not null auto_increment,
  `name` char(100) not null,
  `person` varchar(25) not null,
  `seat` char(20) not null,
  `gan` char(1) not null,
  `time` char(11) not null,
  `number` char(10) not null,
  `price` char(10) not null,
  primary key (`no`)
)auto_increment=3;

insert into `moviemember` values (1,'엔칸토','성인2명', 'D5 D6','B','16:00~18:00','1234-12345','26000');
insert into `moviemember` values (2,'언차티드','성인1명', 'E9','B','13:40~15:40','1234-00000','13000');