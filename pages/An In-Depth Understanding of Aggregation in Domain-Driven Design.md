- This link shared by Hammad [An In-Depth Understanding of Aggregation in Domain-Driven Design](https://www.alibabacloud.com/blog/an-in-depth-understanding-of-aggregation-in-domain-driven-design_598034)
- Main points
	- The essence of aggregation is to establish a boundary greater than the object granularity and gather those closely related objects to form a complete business object.
-
- ## Principles of Aggregation Partition
	- Consistency of the Lifecycle
	- Consistency of the Problem Domain
		- Its more related to bounded context. Its says objects that do not belong to the same problem domain should not appear in the same aggregation. 
		  
		  In database design approach although Article and Comments have one-to-many relationship but we can't make article as an aggregate root. Issue is users can't add comment on article through article.
	- Consistency of the Scenario Frequency
		- Objects that are often operated on at the same time often belong to the same aggregation. Generally, objects that receive very little attention at the same time should not be classified as the same aggregation. (Need another solid example other than this tutorial)
	- As Few Elements as Possible within the Aggregation
		- In this writer is taking approver id and submitter id as value objects and I am confused.