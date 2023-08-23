- Moonrook api env
  
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
  STRIPE_PUBLISH_KEY=pk_live_51LcG97HcLP3Gh68F270unKRBjGbl7EAJgp7NyLrxjikUD97stEOLN23Qwl0XEYhGikQ8ilabndyWgBdti4w6l4XS00hfSvD7mU
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
- # Java Version Issue Help
	- https://stackoverflow.com/questions/21964709/how-to-set-or-change-the-default-java-jdk-version-on-macos