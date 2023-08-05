Feature: Login to The goodreads
  Scenario: TS001
  Given Verify that customers can browse the goodreads "https://www.goodreads.com/"
  Then Verify that customers can browse the goodreads sign in text

  Scenario:TS002
  Given Verify that customers can browse the goodreads "https://www.goodreads.com/user/sign_in"
  Then Verify that customers can browse the goodreads sign in page

  Scenario:TS003
  Given Verify that customers stay in login page "https://www.goodreads.com/ap/signin?language=en_US&openid.assoc_handle=amzn_goodreads_web_na&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.goodreads.com%2Fap-handler%2Fsign-in&siteState=cbb32fb67c53604775fbbaeef3cda038"
  Then Verify that customers can browse the goodreads sign in page and verify the email input section "sudiptapramanik209@gmail.com"
  Then Verify that customers can browse the goodreads sign in page and verify the password input section "12345s"
  And Verify that customers can browse the goodreads sign in page and verify the sign in button.
  Then Verify that customers can browse the goodreads home page and  click the search bar section.
  Then Verify that customers can browse the goodreads.and click to want to read option.
  Then Verify that customers can browse the goodreads and click to My Book option.
  Then Verify that customers can browse the goodreads.and see my book list option and remove the list.
  Then Verify that customers can browse the goodreads should be able to logout.