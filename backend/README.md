## DineWithMe

Meals organizing web app.

### Test Case Scenarios
* Test to verify registration with invalid password.
* Test to verify registration with already exists username.
* Test to verify registration with valid datas.
* Tested API authentication endpoint validations.
* Tested authenticated user authorization. 

### API Endpoints

#### Users
* **/api/details/** (User details endpoint)
* **/api/register/** (User registration endpoint)
* **/api/users/login/** (User login endpoint)
* **/api/users/logout/** (User logout endpoint)
* **/api/tokens/<key>/** (User token validation endpoint)

#### Recipes
* **/api/recipes/** (Recipes create and list endpoint)
* **/api/recipes/{recipe-uuid}/** (Recipe retrieve, update and destroy endpoint)

#### Meals
* **/api/meals/** (Meals create and list endpoint)
* **/api/meals/{meal-id}/** (Meal retrieve, update and destroy endpoint)

### Install 
    pip install -r requirements.txt

### Usage
    python manage.py runserver 127.0.0.1:8000

