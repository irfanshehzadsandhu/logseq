## Sprint 49 Deployment Notes
- kubectl get secret sftp-key -n default -o yaml
- kubectl create secret generic sftp-key --from-file=/Users/irfanshahzad/Workspace/honeycomb-api/
	- LATER Register Asana Webhooks from Postman
	  :LOGBOOK:
	  CLOCK: [2024-11-07 Thu 19:48:43]--[2024-11-21 Thu 17:25:58] =>  333:37:15
	  :END:
	- DONE Add cron jobs in helm charts
	  :LOGBOOK:
	  CLOCK: [2024-11-07 Thu 19:51:22]--[2024-11-21 Thu 17:01:49] =>  333:10:27
	  :END:
	- DONE Add Refund status in stripe webhooks
	  :LOGBOOK:
	  CLOCK: [2024-11-07 Thu 19:56:01]--[2024-11-21 Thu 17:10:59] =>  333:14:58
	  :END:
	- DONE Remove payment intent created event from webhook
	  :LOGBOOK:
	  CLOCK: [2024-11-11 Mon 20:31:40]--[2024-11-21 Thu 17:11:01] =>  236:39:21
	  :END:
	- DONE Add debtAuthorizationId,nachaFileName,walletRefunded, achRefunded in hybridTransaction Table
	  :LOGBOOK:
	  CLOCK: [2024-11-21 Thu 15:31:44]--[2024-11-21 Thu 16:59:48] =>  01:28:04
	  :END:
	- DOING Add Asana Secrets
	  :LOGBOOK:
	  CLOCK: [2024-11-21 Thu 17:48:12]
	  :END:
		- ```apl
		  DWOLLA_HONEYCOMB_THREAD_BANK=
		  
		  
		  # Asana
		  ASANA_PERSONAL_ACCESS_TOKEN=2/1208510852779166/1208541874804840:61b8370991a32a3ee4d9fca9782d184d
		  PROJECT_GID=1208510855570967
		  DESTINATION_GID=1208550751544142
		  THREAD_BANK_APPROVAL_GID=1208550984778568
		  PRE_AUTH_FORM_ATTACHMENT_GID=1208550972022377
		  REFUND_AMOUNT_GID=1208551161595144
		  DEBIT_AUTHORIZATION_ID=1208551156002450
		  ACH_OPTION_GID=1208550762292878
		  DWOLLA_OPTION_GID=1208550762292879
		  STRIPE_OPTION_GID=1208550762292880
		  ASANA_WEBHOOK_SECRET=790bf50f10c8947a588316d4fff82fd0
		  ```