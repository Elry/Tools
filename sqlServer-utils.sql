-- Tables from current DB
SELECT * FROM INFORMATION_SCHEMA.TABLES;

-- DBs from current server (name only)
SELECT [name] FROM master.dbo.sysdatabases

-- Permissions from all users
SELECT DISTINCT pr.principal_id, pr.name, pr.type_desc, pr.authentication_type_desc, pe.state_desc, pe.permission_name
  FROM sys.database_principals AS pr
  JOIN sys.database_permissions AS pe
  ON pe.grantee_principal_id = pr.principal_id;
  
  -- Current DB
  SELECT DB_NAME() AS [Current Database]
