- **To manually trigger a review**, go to your PR and comment:
	- @coderabbitai review
- **To enable auto-reviews on all branches**: Update `.coderabbit.yaml` like this:
- ```apl
  reviews:
    auto: true
    branches:
      include:
        - "*"
  
  ```