# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: This sounds like a One_to_Many type due to a Cohort having many students but each student only belongs to one cohort. In order to fix this, you would need to update the model of the student database buy adding the column for the foreign key and performing a migration.  

Researched answer: Creating the migration file for the change is a good place to start here; $rails g migration add_foreign_key_to_students
Then make sure in the method that uniqueness is true on the Cohort table and add foreign key to Student table.  Dont forget to $rails db:migrate.

2. Which RESTful routes must always be passed params? Why?

Your answer: Well using params with the routes makes the overall app or web page more "dynamic".

Researched answer:  Using params helps to not only make it overall more "Dynamic" but also lets you have more information, just create the method associated with your value.  Using params will help not only dynamically but reduce your over all scripting and perhaps the efficiency as well since it is data being sent back from the client to the servers, (sometimes in Idaho).

3. Name three rails generator commands. What is created by each?

Your answer: 
$ rails g controller XxxxXxx - this generator command creates your main home controller for your app currently called XxxxXxx, which is in PascalCase singular. It not only makes the controller file, it also creates the veiw file, and a functional test file, a javascript file, and css type file. 

$ rails g model Table name:string shoe_size:integer -  this generator creates the model for the table called Table with columns name and shoe_size.  It aslo states the allowed datatype to be inputed into each coloumn. 

$ rails g rspec:install - This installs the dependancies for rspec which should be done before generating the model.  Doing it in this order installs a directory called spec with a model folder automatically when generating the model.  This is all for our TDD and validations in the app.

Researched answer:  Not sure about repeating so I added more specifics to the above answers.  My "your answer" became a bit of a hybrid answer here on this question. 
However I can more here by saying that using generators saves you a lot of time from writing boilerplate code to make the app work and that you can install more generators through generator gems and even create your own.  

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
It would retrieve the data from students.

action: "POST" location: /students
It will send the data to the students database to be saved. 

action: "GET" location: /students/new
It sends the user an HTML form to fill out to save to the student database.

action: "GET" location: /students/2
It shows one instance of the student database, id 2.

action: "GET" location: /students/2/edit
It sends an HTML form over allowing the edit or update of the one instance in the database.

action: "PATCH" location: /students/2
It updates the key(s) of one instance of the database.

action: "DELETE" location: /students/2
It deletes the one instance of the database.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

Epic:
As busy person I need to access a secure/private application to input and manage my to do list.

User Story 1:
As a user who is busy I need to access my own personal to do list. That way I can create my own tasks to complete. This should be done by selecting app which should not have any weird ads, EVER.....

User Story 2:
As a user who is busy I need to have a tasker block to fill in with required tasking.  Perhaps show previous repeatable tasks in a pull down menu for quick selection.  

User Story 3:
As a user who is busy I need to also specify the required timeline for completion.  This should be done in a seperate block.

User Story 4:
As a user who is busy I need to have a reminder set up block to remind me when my tasker completion time frame is nearing, this should link to my personal/work email to show me via email.

User Story 5:
As a user who is busy I need to be able to color code my tasks IAW priority. Red for super hot now, all the way to green for cool plenty of time to get it done.

User Story 6:
As a user who is busy I need to be able to set my color code to adjust with my time frame given. The color should change from green to red over the given timeframe as it decrements so should the color code increment. 

User Story 7:
As a user who is busy I need to know when my color coding for priority increments via an alert an an email message. 

User Story 8:
As a user who is busy I need to be able to adjust my priorities according to my change in schedule. Also I need to be able to adjust the color code. 

User Story 9:
As a user who is busy I need to have a notification of my changes saved and sent to my email for update purposes to reflect all changes.

User Story 10:
As a user who is busy I need to be able to close out tasks as complete with log of time of completion.

User Story 11:
As a user who is busy I need to be notified of all tasks completed ahead of time and be given an "ATTA BOY" for a morale boost. 