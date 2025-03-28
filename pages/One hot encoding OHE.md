### Understand code from tutorial using chatGpt
	- ```apl
	  vect = CountVectorizer()
	  ohe_rep = vect.fit_transform(corpus)
	  features = vect.get_feature_names_out()
	  features[:20]
	  ohe_rep.shape
	  'good' in features
	  'excellent' in features
	  
	  explanantion from chatgpt line one by one
	  
	  ```
	- ```apl
	  good_vector = np.zeros(ohe_rep.shape[1])
	  good_vector[features.index('good')] = 1
	  good_vector
	  
	  explanantion from chatgpt line one by one
	  ```