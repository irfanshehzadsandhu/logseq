- source /Users/apple/Workspace/snapdebt-backend/test-dump.sql
- /usr/local/mysql/bin/mysqldump -uroot -p -h34.68.201.101 --column-statistics=0 snapdebt_prod > prod-dump-2022-09-22.sql
- SnapDebt DB credentials
  	34.68.201.101
  	root
  	Snapdebt123!@#
-
-
-
- # Steps to do on live DB before deploying to prod server
	- UPDATE snapdebt_prod.Clients 
	  SET 
	      creditorClass = '18'
	  WHERE
	      creditorClass = 'commercial'
	- UPDATE snapdebt_prod.Clients 
	  SET 
	      creditorClass = '17'
	  WHERE
	      creditorClass = 'consumer'
	-
	-