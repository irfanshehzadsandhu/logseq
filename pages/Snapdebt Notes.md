- source /Users/apple/Workspace/snapdebt-backend/test-dump.sql
- /usr/local/mysql/bin/mysqldump -uroot -p -h34.68.201.101 --column-statistics=0 snapdebt_prod > prod-dump-2022-09-22.sql
-
	-
- # Week 2 deployment notes
	- On live db verify creditorClass should not be greater than 12 in db
	- https://snapdebtrecovery.atlassian.net/browse/SV1-62
	-
	-
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
	- RingCentral Test credentials
		- {"jwt": "eyJraWQiOiI4NzYyZjU5OGQwNTk0NGRiODZiZjVjYTk3ODA0NzYwOCIsInR5cCI6IkpXVCIsImFsZyI6IlJTMjU2In0.eyJhdWQiOiJodHRwczovL3BsYXRmb3JtLmRldnRlc3QucmluZ2NlbnRyYWwuY29tL3Jlc3RhcGkvb2F1dGgvdG9rZW4iLCJzdWIiOiI4MTYzODYwMDUiLCJpc3MiOiJodHRwczovL3BsYXRmb3JtLmRldnRlc3QucmluZ2NlbnRyYWwuY29tIiwiZXhwIjozODQxNDMxOTExLCJpYXQiOjE2OTM5NDgyNjQsImp0aSI6InpUbGtoa3p6VEhTOC10UDduQ3ZxQUEifQ.QWLsm1pDEtqAgkNSGOYua32eCqk8KXer0WfMmpJ_8vonM878laetlT7_CUXgVvEjRHAjzsV8YHbuuuwGpjXkQEPdSMLyoYCo5MQcHdhP-RwXjUyG5fGhbtUhStEPSJDkyhXYHl1azS_UmLm21oM_cJs6aIRPxv1uF-EgiJVCaD7JXcXR_iEBtVa0ZLzkU7D4C2hPYg60_f-uMGW_axQa3rLESgKRU3ylLoJ_lYFDWcz64t72qkV8rXqxk0P4DxhtAcnHq-6ezBm7oZwhsfuJlnNID-srUa1Sc8xHVd0jLamIAJA2ALKmuU8Xi5IuR2S-MfVL_I_EkybveuDRhzmrwg", "clientId": "6u5KBlZrrSFdVuDvFM7X1n", "clientSecret": "Z96w4j0zA8ScxSfEt2vxtfagDZ48mQ4XMbl42dtFIhvt"}
	- {"apiKey": "slHVPl3LRxGEoSlV6DGQPQ", "account": "+14072147666", "password": "dIGGER42", "extension": "101", "secretKey": "AsXAOqPqRba8_9J1bfpP2wjtNOHL4vQkO3nZyRJc5H-A"}