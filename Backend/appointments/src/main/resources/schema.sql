CREATE TABLE appointment(
	id serial primary key,
	bookdate date,
	booktime time with time zone,
	description varchar(255)
); 

SET timezone TO 'US/Eastern';
