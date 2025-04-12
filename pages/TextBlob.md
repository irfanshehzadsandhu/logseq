- Wraps the string into TextBlob object so that we can play with for example
	- ```asterisk
	  sentence_blob = TextBlob(sentence)
	  
	  # Sentiment analysis
	  sentence_blob.sentiment  # Returns polarity and subjectivity
	  
	  # Tokenization
	  sentence_blob.words      # ['TextBlob', 'is', 'amazingly', 'simple', ...]
	  
	  # Noun phrases
	  sentence_blob.noun_phrases  # ['textblob', 'great tool']
	  ```
-