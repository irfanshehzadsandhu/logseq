- source /Users/apple/Workspace/snapdebt-backend/test-dump.sql
- /usr/local/mysql/bin/mysqldump -uroot -p -h34.68.201.101 --column-statistics=0 snapdebt_prod > prod-dump-2022-09-22.sql
- DOING **clientAlternateId** in debt table
  :LOGBOOK:
  CLOCK: [2024-11-25 Mon 21:13:09]
  :END:
- DOING Add DebtorsDisableDebtCreditReport in admin permission template -> Also moazzam has added a new access level
  :LOGBOOK:
  CLOCK: [2024-11-20 Wed 03:07:09]
  :END:
- DOING Add GeneralEditLetterTemplates in admin permission template
  :LOGBOOK:
  CLOCK: [2024-11-20 Wed 16:52:36]
  :END:
	- ```apl
	  SELECT 
	      *
	  FROM
	      snapdebt.PermissionTemplates
	  WHERE
	      accessName = 'admin'
	          AND agencyId = 'b2ba227f-965b-46da-9ea8-83be9260e007';
	  ```
- DONE Run following query before deployment
  :LOGBOOK:
  CLOCK: [2024-11-18 Mon 15:19:43]--[2024-11-20 Wed 03:06:52] =>  35:47:09
  :END:
	- ```apl
	  SET SQL_SAFE_UPDATES = 0;
	  
	  UPDATE snapdebt_prod.ReversedPayments RP
	          JOIN
	      snapdebt_prod.Payments P ON RP.paymentId = P.paymentId 
	  SET 
	      RP.agencyContingency = P.agencyContingency
	  WHERE
	      RP.agencyContingency IS NULL;
	  ```
-
- ## Following error from outlook
  :LOGBOOK:
  CLOCK: [2024-11-02 Sat 04:45:17]
  :END:
- ```apl
  AADSTS7000222: The provided client secret keys for app '07eb5996-8951-4017-bbfc-d15696be7bca' are expired. Visit the Azure portal to create new keys for your app: https://aka.ms/NewClientSecret, or consider using certificate credentials for added security: https://aka.ms/certCreds. Trace ID: 740ee8d0-6f7f-42aa-ab38-9c294f060000 Correlation ID: 3381d217-173b-40d7-8358-30322562ce11 Timestamp: 2024-11-01 23:43:26Z"
  ```
-
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
	- {"apiKey": "slHVPl3LRxGEoSlV6DGQPQ", "account": "+14072147666", "password": "dIGGER42", "extension": "101", "secretKey": "AsXAOqPqRba8_9J1bfpP2wjtNOHL4vQkO3nZyRJc5H-A"}