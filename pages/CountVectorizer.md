- It **converts a collection of text documents into a matrix of token (word) counts**.
- e.g
	- ```apl
	  [[0 1 1 1]
	   [1 0 1 1]]
	  ```
- It basically turns your text into a numerical form, where each unique word becomes a **feature**, and each document becomes a **row** of counts.
- This is called a **bag-of-words model**.
-