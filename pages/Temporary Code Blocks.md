- ```apl
  
  
  
  
  
  try {
      const data = await usaepayService.fetchTransactionDetail(
        'idb2gtbfyhrjjkk7',
        'FirstCitizenBank',
      );
      console.log('************', data);
    } catch (e) {
      console.log(e);
    }
    
    
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