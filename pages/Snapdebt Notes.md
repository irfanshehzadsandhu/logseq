- source /Users/apple/Workspace/snapdebt-backend/test-dump.sql
- /usr/local/mysql/bin/mysqldump -uroot -p -h34.68.201.101 --column-statistics=0 snapdebt_prod > prod-dump-2022-09-22.sql
- SnapDebt DB credentials
  	34.68.201.101
  	root
  	Snapdebt123!@#
-
- # Agent Credentials
	- Julian
	- UN: [sales@snapdebtrecovery.com](mailto:sales@snapdebtrecovery.com) or Julian
	- PW: Collect4U!
	-
	- Byonca
	- UN: [admin@snapdebtrecovery.com](mailto:admin@snapdebtrecovery.com) or Byonca
	- PW: Collect4U!
	-
	- Jasmine
	- UN: [collections@snapdebtrecovery.com](mailto:collections@snapdebtrecovery.com) or Jasmine
	- PW: Collect4U!
	-
	- Julier
	- UN: [collector@snapdebtrecovery.com](mailto:collector@snapdebtrecovery.com) or Julier
	- PW: Snapdebt_123!
	-
	- Amanda
	- UN: [info@snapdebtrecovery.com](mailto:info@snapdebtrecovery.com) or Amanda
	- PW: Action0727!!
- # Lariat Credentials
	- amanda
	  Action_123
	  https://snap.lariatcentral.net
-
-
- # Steps to do on live DB before deploying to prod server
	- ## Query Updates
		- UPDATE snapdebt.Clients 
		  SET 
		      creditorClass = '12'
		  WHERE
		      creditorClass = 'commercial'
		- UPDATE snapdebt.Clients 
		  SET 
		      creditorClass = '12'
		  WHERE
		      creditorClass = 'consumer'
		- UPDATE snapdebt.Clients 
		  SET 
		      clientType = '18'
		  WHERE
		      clientType = 'Commercial'
		- UPDATE snapdebt.Clients 
		  SET 
		      clientType = '17'
		  WHERE
		      clientType = 'Consumer'
		- UPDATE snapdebt.Clients 
		  SET 
		      clientType = '16'
		  WHERE
		      clientType = 'Unknown'
		- UPDATE snapdebt.Clients 
		  SET 
		      clientType = '19'
		  WHERE
		      clientType = 'Construction'
		- UPDATE snapdebt.Clients 
		  SET 
		      clientType = '02'
		  WHERE
		      clientType = 'Healthcare'
		- UPDATE snapdebt.Clients 
		  SET 
		      clientType = '01'
		  WHERE
		      clientType = 'Retail'
		- UPDATE snapdebt.Clients 
		  SET 
		      clientType = '09'
		  WHERE
		      clientType = 'Real Estate'
		- UPDATE snapdebt.Clients 
		  SET 
		      clientType = '16'
		  WHERE
		      clientType = 'Mixed'
		- UPDATE snapdebt.Clients 
		  SET 
		      clientType = '16'
		  WHERE
		      clientType = 'Government'
	-
- # Query Engine Examples shared by amanda
	- ```apl
	  Hello,
	  
	   
	  
	  Below are just 3 examples. Please note the goal is to be able to create any report with the information. If the fields exist we should be able to pull it. Thanks please let me know if you need anything else.
	  
	   
	  
	  1. Rules would consist of:
	  
	   
	  
	  Client Name = HGS or Sagility Health Formally HGS Healthcare
	  
	  Status = PIF
	  
	  Agent/ Que = Closed
	  
	  Last Payment Received Between = OPEN DATE RANGE
	  
	  Date Submitted = 03/28/2022
	  
	   
	  
	  Fields
	  
	  Client Name
	  
	  Debtor ID
	  
	  Debt Status
	  
	  Agent/ Que
	  
	  Last Payment…..
	  
	  Date Submitted
	  
	   
	  
	  2. Client with Balances owed to SNAP:
	  
	   
	  
	  Rules would consist of:
	  
	   
	  
	  Client Name = OPEN RANGE
	  
	  Client Has Balance = Less than $0.00
	  
	   
	  
	  Fields
	  
	   
	  
	  Client Name
	  
	  Client Phone 1 Number
	  
	  Client Contact Name
	  
	  Client Balance
	  
	  Client ID
	  
	   
	  
	  3. SNAP Owes Client Balances:
	  
	   
	  
	  Rules would consist of:
	  
	   
	  
	  Client Name = OPEN RANGE
	  
	  Client Has Balance = Greater than $0.00
	  
	   
	  
	  Fields
	  
	   
	  
	  Client Name
	  
	  Client Balance
	  
	  Client ID
	  
	  Last Client Transaction Amount
	  
	  Last Client Transaction Date
	  ```
	-
	-