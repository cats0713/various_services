create table `movie`(
  `no` tinyint not null auto_increment,
  `name` char(100) not null,
  `genre` varchar(100) not null,
  `time` int(4) not null,
  `age` char(3) not null,
  `star` float(2,1)not null,
  `img` char(100) not null, 
  primary key (`no`)
)auto_increment = 5;

insert into `movie` values (1,'타오르는 여인의 초상', '로맨스/역사/드라마',120,'15',9.1,'no1_movie');
insert into `movie` values (2,'언차티드', '액션/모험',116,'12',7.0,'no2_movie');
insert into `movie` values (3,'엔칸토', '애니메이션',109,'ALL',7.8,'no3_movie');
insert into `movie` values (4,'라라랜드', '드라마/뮤지컬/멜로/로맨스',127,'12',8.9,'no4_movie');


