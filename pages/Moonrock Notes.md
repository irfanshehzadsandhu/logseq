### Concerns
	- We are not taking db dumps
	  Current app is not maintainable anymore
	- I have saved some notes in google drive and important notes regarding notifications , json file for service account(firebase)
	-
- Moonrook api env
  id:: 64ad2f7c-9ca6-462d-b0cb-1bb41be71498
  
  https://www.folio3.com/mobile/blog/firebase-crashlytics-integration-in-react-native/
  https://stackoverflow.com/questions/67499392/unable-to-sync-gradle-with-firebase-crashlytic-2-6-0-using-android-studio-4-2
  adb logcat > logcat.txt
  
  
  
  
  
  
  
  https://moonrock-staging-api.carbonteq.com
  
  pm2 kill
  
  pm2 start "npm run dev" --name moonrock-api
  
  ./gradlew assembleRelease
  
  ./gradlew bundleRelease
  
  
  
  dicifa3146@3mkz.com
  Elephant123!@#
  
  https://www.youtube.com/watch?v=MkaIrwOlP6Y
  
  
  
  
  API_URL=https://moonrock-staging-api.carbonteq.com/api/v1
  
  PROFILE_IMAGE_PATH=https://moonrock-staging-api.carbonteq.com/storage
  SOCKET_URL=https://moonrock-staging-api.carbonteq.com
  
  ONE_SIGNAL_APP_ID=53d9f558-5041-4b4e-a33f-83289350b929
  STRIPE_PUBLISH_KEY=pk_test_51LcG97HcLP3Gh68FYSPlg5TIkTtpD2gZBAUKGUXanVhV8AZRG2s9aYlASva0DkJ4ICeFo7pcSkd7MIUD89qAnUjm0037mvG2co
  
  
  
  
  PRICE_ID=price_1LpsHaHcLP3Gh68FYczjXI4M
  SERVER_STORAGE=https://moonrock-dev-api.carbonteq.com/storage
  ADMIN_EMAIL=swafforddeshon@yahoo.com
  
  
  Important things
  Check secret key in html file of server while deploying
  
  
  https://www.nicesnippets.com/snippet/bootstrap-4-credit-card-payment-with-stripe-form-design
  
  Test link
  STRIPE_SUBSCRIPTION_LINK=https://buy.stripe.com/test_4gw021forbt7dwYbII
  Live link
  STRIPE_SUBSCRIPTION_LINK=https://buy.stripe.com/5kA3f4eZN6H99TqdQQ
  
  
  
  
  
  LIVE ENV
  
  BASE_URL=https://moonrock-dev-api.carbonteq.com
  API_URL=https://moonrock-dev-api.carbonteq.com/api/v1
  VERSION_TWO_API_URL=https://moonrock-dev-api.carbonteq.com/api/v2
  
  PROFILE_IMAGE_PATH=https://moonrock-dev-api.carbonteq.com/storage
  SOCKET_URL=https://moonrock-dev-api.carbonteq.com
  
  ONE_SIGNAL_APP_ID=53d9f558-5041-4b4e-a33f-83289350b929
  STRIPE_PUBLISH_KEY=pk_live_
  STRIPE_SUBSCRIPTION_LINK=https://buy.stripe.com/5kA3f4eZN6H99TqdQQ
  
  
  
  
  
  
  Crashlytics Notes
  https://rnfirebase.io/#generating-ios-credentials
  
  
  
  For android Crash
  
  {
    "react-native": {
      "crashlytics_debug_enabled": true,
      "crashlytics_disable_auto_disabler": true,
      "crashlytics_auto_collection_enabled": true,
      "crashlytics_is_error_generation_on_js_crash_enabled": true,
      "crashlytics_javascript_exception_handler_chaining_enabled": true
    }
  }
-
- {
    "userId": "04bb8572-3945-4ba1-a1da-3b27e18b29b9",
    "email": "shahzaib.atif+966@carbonteq.com",
    "type" : "custom",
    "country": "US",
    "business_type": "individual",
    "business_profile_mcc": 6513,
    "business_profile_url": "www.google.com",
    "individual_address_city": "texas",
    "individual_address_line1": "address_full_match",
    "individual_address_postal_code": 12345,
    "individual_address_state": "texas",
    "individual_dob_day": 1,
    "individual_dob_month": 1,
    "individual_dob_year": 1992,
    "individual_first_name": "shahzaib",
    "individual_last_name": "atif",
    "individual_phone": "0000000000",
    "individual_ssn_last_4": "0000",
    "tos_acceptance_date": 1609798905, 
    "tos_acceptance_ip": "8.8.8.8",
    "bank_account_country": "US",
    "bank_account_currency": "usd",
    "bank_account_holder_name": "Jenny Rosen",
    "bank_account_holder_type": "individual",
    "bank_account_routing_number": "110000000",
    "bank_account_number": "000123456789"
  }
-
- npx react-native run-ios --simulator="iPhone 14"
- https://stackoverflow.com/questions/63607158/xcode-building-for-ios-simulator-but-linking-in-an-object-file-built-for-ios-f
- https://stackoverflow.com/questions/75945734/compilec-yoga-cpp-normal-arm64-c-com-apple-compilers-llvm-clang-1-0-compiler
-
- # Java Version Issue Help
	- https://stackoverflow.com/questions/21964709/how-to-set-or-change-the-default-java-jdk-version-on-macos
- Andriod Studio Setup on M1
	- https://dev.to/davidkou/develop-android-apps-using-react-native-setup-on-mac-m1-and-troubleshooting-38bj
- # Important changes on android Build M1 chip
	- @react-native-community/async-storage
	- npm i @react-native-async-storage/async-storage
	- "react-native-camera": "git+https://git@github.com/react-native-community/react-native-camera.git",