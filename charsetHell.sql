-- checking tables 
SHOW VARIABLES WHERE Variable_name LIKE 'character\_set\_%' OR Variable_name LIKE 'collation%';

-- local conn
mysql -u user -p
-- web conn
mysql -h host -u username -p

-- file && configs
etc/mysql/my.cnf

[client]
default-character-set = utf8mb4

[mysql]
default-character-set = utf8mb4

[mysqld]
character-set-client-handshake = FALSE
character-set-server = utf8mb4
collation-server = utf8mb4_unicode_ci

-- apply
service restart mysqld
service restart mysql
