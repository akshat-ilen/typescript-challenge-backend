## Setup
    npm install

### Run

#### To run the app in dev mode
    npm start
#### To run the app in prod
    npm run start:prod
#### To build the app
    npm run build

## Tasks

 - TASK 1
I have reused the connection object by passing into the request object. Or we can use mongoose connection. I tried to use the current infra as per the time limit.
 - TASK 2 
I have used normal filters and if amenties is present in filters, I have used $all operator to filter listings.
 - TASK 3
I have used page property, which user can pass page as query, and default is page 1, and also converted all the invalid values(-2,-1,0) to default value.
 - TASK 4
I have used the similar approach to create the new router. And fetched the reviews are per the requirements.
 - TASK 5
Tried my best to strictly type.

## Suggestions

 1. We can use ORM for easier access to the database.
 2. We can create indexes for the filters to decrease the collection scan.
 3. We can cache the queries for some minimum time to fetch the result faster. Use caching at database/ route level.
 4. We can use data validation library at route level (for Eg. Joi)
 5. Let's catch up for more interesting architecture discussions.
