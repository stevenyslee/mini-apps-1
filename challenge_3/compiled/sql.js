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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NxbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiJzcWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDUkVBVEUgVEFCTEUgdXNlckluZm8gKFxuLy8gICBpZCBpbnQoMTEpIE5PVCBOVUxMIEFVVE9fSU5DUkVNRU5ULFxuLy8gICBuYW1lIHZhcmNoYXIoNjApLFxuLy8gICBlbWFpbCB2YXJjaGFyKDYwKSxcbi8vICAgcGFzc3dvcmQgdmFyY2hhcig2MCksXG4vLyAgIGxpbmVfMSB2YXJjaGFyKDYwKSxcbi8vICAgbGluZV8yIHZhcmNoYXIoNjApLFxuLy8gICBjaXR5IHZhcmNoYXIoNjApLFxuLy8gICBzdGF0ZSB2YXJjaGFyKDYwKSxcbi8vICAgemlwIHZhcmNoYXIoNjApLFxuLy8gICBwaG9uZSB2YXJjaGFyKDYwKSxcbi8vICAgY3JlZGl0X2NhcmQgdmFyY2hhcigzMCksXG4vLyAgIGV4cF9kYXRlIHZhcmNoYXIoNjApLFxuLy8gICBjdnYgaW50KDEwKSxcbi8vICAgYmlsbGluZ196aXAgdmFyY2hhcigxNSksXG4vLyAgIFBSSU1BUlkgS0VZIChpZClcbi8vICk7XG5cbi8vIElOU0VSVCBJTlRPIHVzZXJJbmZvIChuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGxpbmVfMSwgbGluZV8yLCBjaXR5LCBzdGF0ZSwgemlwLCBwaG9uZSwgY3JlZGl0X2NhcmQsIGV4cF9kYXRlLCBjdnYsIGJpbGxpbmdfemlwKVxuLy8gVkFMVUVTICgnU3RldmVuJywgJ3N0ZXZlbnlzbGVlJywgJ2FzZGZhc2RmJywgJzEyMyBBIHN0LicsICdBcHQgMScsICdPYWtsYW5kJywgJ0NBJywgJzk0NjA4JywgJzY1MDIwMDkyNjQnLCcxMjM0NTY3ODkwJywgJzA1LzIxJywgMTIzNCwgJzk0NjA4Jyk7XG5cbi8vIENSRUFURSBUQUJMRSBhZGRyZXNzIChcbi8vICAgaWQgaW50KDExKSBOT1QgTlVMTCBBVVRPX0lOQ1JFTUVOVCxcbi8vICAgbGluZV8xIHZhcmNoYXIoNjApLFxuLy8gICBsaW5lXzIgdmFyY2hhcig2MCksXG4vLyAgIGNpdHkgdmFyY2hhcig2MCksXG4vLyAgIHN0YXRlIHZhcmNoYXIoNjApLFxuLy8gICB6aXAgdmFyY2hhcig2MCksXG4vLyAgIHBob25lIHZhcmNoYXIoNjApLFxuLy8gICBQUklNQVJZIEtFWSAoaWQpXG4vLyApO1xuXG4vLyBDUkVBVEUgVEFCTEUgcGF5bWVudCAoXG4vLyAgIGlkIGludCgxMSkgTk9UIE5VTEwgQVVUT19JTkNSRU1FTlQsXG4vLyAgIGNyZWRpdF9jYXJkIHZhcmNoYXIoMzApLFxuLy8gICBleHBfZGF0ZSB2YXJjaGFyKDYwKSxcbi8vICAgY3Z2IGludCgxMCksXG4vLyAgIHppcCB2YXJjaGFyKDE1KSxcbi8vICAgUFJJTUFSWSBLRVkgKGlkKVxuLy8gKTtcblxuLy8gQ1JFQVRFIFRBQkxFIHVzZXIgKFxuLy8gICBpZCBpbnQoMTEpIE5PVCBOVUxMIEFVVE9fSU5DUkVNRU5ULFxuLy8gICBuYW1lIHZhcmNoYXIoNjApLFxuLy8gICBlbWFpbCB2YXJjaGFyKDYwKSxcbi8vICAgcGFzc3dvcmQgdmFyY2hhcig2MCksXG4vLyAgIGFkZHJlc3NfaWQgaW50KDExKSxcbi8vICAgcGF5bWVudF9pZCBpbnQoMTEpLFxuLy8gICBQUklNQVJZIEtFWSAoaWQpLFxuLy8gICBGT1JFSUdOIEtFWSAoYWRkcmVzc19pZClcbi8vICAgXHRSRUZFUkVOQ0VTIGFkZHJlc3MoaWQpLFxuLy8gICBGT1JFSUdOIEtFWSAocGF5bWVudF9pZClcbi8vICAgXHRSRUZFUkVOQ0VTIHBheW1lbnQoaWQpXG4vLyApO1xuXG4vLyBDUkVBVEUgVEFCTEUgYWRkcmVzcyAoXG4vLyAgIGlkIGludCgxMSkgTk9UIE5VTEwgQVVUT19JTkNSRU1FTlQsXG4vLyAgIGxpbmVfMSB2YXJjaGFyKDYwKSxcbi8vICAgbGluZV8yIHZhcmNoYXIoNjApLFxuLy8gICBjaXR5IHZhcmNoYXIoNjApLFxuLy8gICBzdGF0ZSB2YXJjaGFyKDYwKSxcbi8vICAgemlwIHZhcmNoYXIoNjApLFxuLy8gICBwaG9uZSB2YXJjaGFyKDYwKSxcbi8vICAgUFJJTUFSWSBLRVkgKGlkKVxuLy8gKTtcblxuLy8gQ1JFQVRFIFRBQkxFIHBheW1lbnQgKFxuLy8gICBpZCBpbnQoMTEpIE5PVCBOVUxMIEFVVE9fSU5DUkVNRU5ULFxuLy8gICBjcmVkaXRfY2FyZCB2YXJjaGFyKDMwKSxcbi8vICAgZXhwX2RhdGUgdmFyY2hhcig2MCksXG4vLyAgIGN2diBpbnQoMTApLFxuLy8gICB6aXAgdmFyY2hhcigxNSksXG4vLyAgIFBSSU1BUlkgS0VZIChpZClcbi8vICk7XG5cbi8vIElOU0VSVCBJTlRPIHBheW1lbnQgKGNyZWRpdF9jYXJkLCBleHBfZGF0ZSwgY3Z2LCB6aXApIFZBTFVFUyAoJzEyMzQ1Njc4OTAnLCAnMDUvMjEnLCAxMjM0LCAnOTQ2MDgnKTtcbi8vIElOU0VSVCBJTlRPIGFkZHJlc3MgKGxpbmVfMSwgbGluZV8yLCBjaXR5LCBzdGF0ZSwgemlwLCBwaG9uZSkgVkFMVUVTICgnMTIzIEEgc3QuJywgJ0FwdCAxJywgJ09ha2xhbmQnLCAnQ0EnLCAnOTQ2MDgnLCAnNjUwMjAwOTI2NCcpO1xuLy8gSU5TRVJUIElOVE8gdXNlciAobmFtZSwgZW1haWwsIHBhc3N3b3JkLCBhZGRyZXNzX2lkLCBwYXltZW50X2lkKSBWQUxVRVMgKCdTdGV2ZW4nLCAnc3RldmVueXNsZWUnLCAnYXNkZmFzZGYnLCAxLCAxKTtcbiJdfQ==