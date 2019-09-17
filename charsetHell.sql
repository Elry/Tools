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
systemctl restart mysqld
systemctl restart mysql

-- DB dumper
mysqldump --verbose -h host -u username -p --add-drop-database --opt --skip-set-charset --default-character-set=latin1
  --skip-extended-insert databasename > sqlDump.sql;

-- table dumper
mysqldump --verbose -h host -u username -p --add-drop-database --opt --skip-set-charset --default-character-set=latin1
  --skip-extended-insert databasename tablename > sqlDump.sql;
  
-- change latin to utf8mb4
perl -i -pe 's/DEFAULT CHARACTER SET latin1/DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci/' dump_file.sql
perl -i -pe 's/DEFAULT CHARSET=latin1/DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC/' dump_file.sql

-- restore
mysql --verbose -h host -u username -p < sqlDump.sql

-- check && optimize
mysqlcheck --verbose -h host -u root -p --auto-repair --optimize --all-databases

-- just alter DB
ALTER DATABASE dbname CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

