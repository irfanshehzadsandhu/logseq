- source /Users/apple/Workspace/snapdebt-backend/test-dump.sql
- /usr/local/mysql/bin/mysqldump -uroot -p -h34.68.201.101 --column-statistics=0 snapdebt_prod > prod-dump-2022-09-22.sql
- # Latest Code Branch
	- Latest code is on version-6-sprint-2-fix branch for both backend and frontend
	-
	-
- DONE Run roundOffDebtFee
  :LOGBOOK:
  CLOCK: [2024-12-05 Thu 04:25:57]
  CLOCK: [2024-12-09 Mon 09:40:06]--[2025-01-20 Mon 17:42:00] =>  1016:01:54
  :END:
- DONE Change float type to decimals
  :LOGBOOK:
  CLOCK: [2024-12-09 Mon 09:41:02]--[2025-01-20 Mon 17:42:01] =>  1016:00:59
  :END:
	-
	- ```apl
	  ```
- DONE Add following columns in Client Table
  :LOGBOOK:
  CLOCK: [2024-12-01 Sun 09:00:24]--[2024-12-05 Thu 05:25:29] =>  92:25:05
  :END:
	- ```apl
	  secondaryEmail, tertiaryEmail  
	  ```
- DONE Update Letters template column
  :LOGBOOK:
  CLOCK: [2024-11-28 Thu 04:16:17]--[2024-12-05 Thu 05:26:05] =>  169:09:48
  :END:
	- ```apl
	  ALTER TABLE `snapdebt_prod`.`Letters` 
	  CHANGE COLUMN `template` `template` LONGTEXT CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_general_ci' NULL DEFAULT NULL ;
	  ```
- DONE **clientAlternateId** in debt table
  :LOGBOOK:
  CLOCK: [2024-11-25 Mon 21:13:09]--[2024-12-05 Thu 05:24:19] =>  224:11:10
  :END:
- DONE Add DebtorsDisableDebtCreditReport in admin permission template -> Also moazzam has added a new access level
  :LOGBOOK:
  CLOCK: [2024-11-20 Wed 03:07:09]--[2024-12-05 Thu 05:28:42] =>  362:21:33
  :END:
- DONE Add GeneralEditLetterTemplates in admin permission template
  :LOGBOOK:
  CLOCK: [2024-11-20 Wed 16:52:36]--[2024-12-05 Thu 05:26:47] =>  348:34:11
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