### Understand code from tutorial using chatGpt
	- [Colab link ](https://colab.research.google.com/github/axel-sirota/implement-nlp-word-embedding/blob/main/module3/Module3_Demo1_Using_One_Hot_Encodings.ipynb#scrollTo=R8aZ3C9aNB27)
	-
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