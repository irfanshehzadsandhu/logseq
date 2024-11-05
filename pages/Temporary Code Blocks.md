- ```apl
  
  15:45:20	UPDATE honeycomb.hybridTransactions  SET      status = 'refunded' AND achRefunded = 1 WHERE     debitAuthorizationId = 'Honeycomb-2024-11-01'         OR debitAuthorizationId = 'Honeycomb-2024-10-31'	Error Code: 1292. Truncated incorrect DOUBLE value: 'refunded'	0.228 sec
  
  UPDATE honeycomb.hybridTransactions 
  SET 
      status = 'refunded' AND achRefunded = 1
  WHERE
      debitAuthorizationId = 'Honeycomb-2024-11-01'
          AND debitAuthorizationId = 'Honeycomb-2024-10-31';
    
    
    if (chargeId != null) {
           if (refundRequestDate != null) {
           const updateChargeQuery = `update charges set chargeStatus = "${tradeStatus}", refunded=${refunded}, refundRequestDate = "${refundRequestDate}" where chargeId = "${chargeId}"`;
             await sequelize.query(updateChargeQuery, {
               type: Sequelize.QueryTypes.UPDATE,
             });
           } else {
             const updateChargeQuery = `update charges set chargeStatus = "${tradeStatus}" where chargeId = "${chargeId}"`;
             await sequelize.query(updateChargeQuery, {
               type: Sequelize.QueryTypes.UPDATE,
             });
           }
         }
         
         
         
         
         use honeycomb;
  SELECT 
      c.campaignName,
      hc.hybridTransactionId,
      hc.tradeId,
      hc.dwollaTransactionId,
      hc.campaignFundId,
      hc.transactionType,
      hc.source,
      hc.status
  FROM
      hybridTransactions hc
          JOIN
      campaignFunds cf ON cf.campaignFundId = hc.campaignFundId
          JOIN
      campaigns c ON c.campaignId = cf.campaignId
  WHERE
      hc.status = 'failed'
          AND (hc.source = 'FirstCitizenBank'
          || hc.source = 'ThreadBank')
  ```