# Lab 8 - Starter

1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
   1. Within a Github action that runs whenever code is pushed
   2. Manually run them locally before pushing code
   3. Run them all after all development is completed
   - For automated tests, I would choose the first option because it is the only one out of the 3 that will actually automate the tests and will also test your software as it is being developed. The second option will run manually and so will the third. Furthermore, the third one doesn't test your software as it is being developed but after its done, so the software will most likely have bugs and errors.
2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)
    - No, I would make a unit-test for that. An end to end test is for emulating user input.
3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   - I would not because the "message" feature depends on user input and most likely relies on other components (like the other user receiving the message), so it would be better to test it using end to end testing. 
4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
   - I would because this feature can easily be checked and tested with using a unit test. It doesn't rely on other components because we are just checking the length of the message.