drop table if exists `movieticket`;
create table `movieticket`(
  `no` int(100) not null auto_increment,
  `name` char(100) not null,
  `person` varchar(25) not null,
  `seat` char(20) not null,
  `gan` char(1) not null,
  `time` char(11) not null,
  `number` char(10) not null,
  `tel` char(13),
  `price` char(10) not null,
  `img` char(20) not null,
  primary key (`no`)
)auto_increment=3;

insert into `movieticket` values (1,'엔칸토','성인2명', 'D5 D6','B','16:00~18:00','12345-1234','010-1234-5678','26000','no3_movie');
insert into `movieticket` values (2,'언차티드','성인1명', 'E9','B','13:40~15:40','12345-0000','010-1234-0000','13000','no2_movie');