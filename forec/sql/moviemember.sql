create table `moviemember`(
  `no` int(100) not null auto_increment,
  `number` char(20) not null,
  `point` int(100000) not null,
  primary key `no`
)auto_increment = 3;

insert into `moviemember` values (1,'010-1111-1111',100);
insert into `moviemember` values (1,'010-2222-2222',300);