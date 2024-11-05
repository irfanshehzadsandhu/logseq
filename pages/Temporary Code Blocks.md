- ```apl
  SELECT 
      *
  FROM
      honeycomb.hybridTransactions
  WHERE
      status = 'pending'
          AND source = 'stripe'
          AND (transactionType = 'GOOGLEPAY'
          OR transactionType = 'APPLEPAY'
          OR transactionType = 'CREDITCARD')
  ORDER BY createdAt DESC;
  ```