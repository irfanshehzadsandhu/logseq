## Sprint 53 Deployment Notes
	- ```apl
	  ALTER TABLE `honeycomb`.`campaignFunds` 
	  ADD COLUMN `promotionCredits` FLOAT NULL DEFAULT NULL AFTER `entityId`;
	  
	  
	  ```
- ## Sprint 52 Deployment Notes
	- Run lat lng script
	- ### ENV Variables
		- ```apl
		  GOOGLE_MAPS_API_KEY=****
		  ```
- ## Sprint 49 Deployment Notes
- kubectl get secret sftp-key -n default -o yaml
- kubectl create secret generic sftp-key --from-file=/Users/irfanshahzad/Workspace/honeycomb-api/
	- DONE Register Asana Webhooks from Postman
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
	- DONE Add Asana Secrets
	  :LOGBOOK:
	  CLOCK: [2024-11-21 Thu 17:48:12]--[2024-11-28 Thu 17:23:55] =>  167:35:43
	  :END:
		- ```apl
		  ```