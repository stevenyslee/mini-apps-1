// CREATE TABLE userInfo (
//   id int(11) NOT NULL AUTO_INCREMENT,
//   name varchar(60),
//   email varchar(60),
//   password varchar(60),
//   line_1 varchar(60),
//   line_2 varchar(60),
//   city varchar(60),
//   state varchar(60),
//   zip varchar(60),
//   phone varchar(60),
//   credit_card varchar(30),
//   exp_date varchar(60),
//   cvv int(10),
//   billing_zip varchar(15),
//   PRIMARY KEY (id)
// );

// INSERT INTO userInfo (name, email, password, line_1, line_2, city, state, zip, phone, credit_card, exp_date, cvv, billing_zip)
// VALUES ('Steven', 'stevenyslee', 'asdfasdf', '123 A st.', 'Apt 1', 'Oakland', 'CA', '94608', '6502009264','1234567890', '05/21', 1234, '94608');

// CREATE TABLE address (
//   id int(11) NOT NULL AUTO_INCREMENT,
//   line_1 varchar(60),
//   line_2 varchar(60),
//   city varchar(60),
//   state varchar(60),
//   zip varchar(60),
//   phone varchar(60),
//   PRIMARY KEY (id)
// );

// CREATE TABLE payment (
//   id int(11) NOT NULL AUTO_INCREMENT,
//   credit_card varchar(30),
//   exp_date varchar(60),
//   cvv int(10),
//   zip varchar(15),
//   PRIMARY KEY (id)
// );

// CREATE TABLE user (
//   id int(11) NOT NULL AUTO_INCREMENT,
//   name varchar(60),
//   email varchar(60),
//   password varchar(60),
//   address_id int(11),
//   payment_id int(11),
//   PRIMARY KEY (id),
//   FOREIGN KEY (address_id)
//   	REFERENCES address(id),
//   FOREIGN KEY (payment_id)
//   	REFERENCES payment(id)
// );

// CREATE TABLE address (
//   id int(11) NOT NULL AUTO_INCREMENT,
//   line_1 varchar(60),
//   line_2 varchar(60),
//   city varchar(60),
//   state varchar(60),
//   zip varchar(60),
//   phone varchar(60),
//   PRIMARY KEY (id)
// );

// CREATE TABLE payment (
//   id int(11) NOT NULL AUTO_INCREMENT,
//   credit_card varchar(30),
//   exp_date varchar(60),
//   cvv int(10),
//   zip varchar(15),
//   PRIMARY KEY (id)
// );

// INSERT INTO payment (credit_card, exp_date, cvv, zip) VALUES ('1234567890', '05/21', 1234, '94608');
// INSERT INTO address (line_1, line_2, city, state, zip, phone) VALUES ('123 A st.', 'Apt 1', 'Oakland', 'CA', '94608', '6502009264');
// INSERT INTO user (name, email, password, address_id, payment_id) VALUES ('Steven', 'stevenyslee', 'asdfasdf', 1, 1);
