# Yay or Nay Project Proposal

## Team Members
- Nick Gong
- Trevor Whitaker
- Gobin Giritharan

## Overview
- Demographic consensus tool that allows users to rate anything and everything YAY or NAY. Using Facebook Login user information will be extracted to create powerful data on demographic differences in preferences. Users can view preference data based on age, gender and region.

## Beta Version Goals
- Facebook Login
	- Users will login using Facebook. We can extract insightful information from our users using this.
- Completed Basic Front-end
	- Sign-in (using Facebook) and Profile Page
	- Rating, searching and commenting on items
- Simple Item Search
	- Retrieving items based on simple text matching


## Final Version Goals
- New Item Submission using A.I:
	- User will submit items and the application will approve without human intervention. Using A.I the application will deem the item appropriate.
- Trending items
	- Trending items based on the amount of searches and ratings in the past 24 hours (or other time period)
- Context-aware search
	- Users can search for items without having a perfect match to their input text. This will be achieved using IBM Watson and Datamuse APIs.

## Technologies
- React.js
	- React is a JavaScript library for building user interfaces. React is designed around the concept of reusable components. You define small components and you put them together to form bigger components. React is one of the most popular Javascript libraries. 
- MongoDB
	- NoSQL database program, MongoDB uses JSON-like documents with schemas. This will be used to store our items, as well as users.
- IBM Watson: Natural Language Understanding
	- Using Watson NLU clients can analyze text to extract metadata from content such as concepts, entities, keywords, categories, relations and semantic roles.

## Technical Challenges
- Front-end Design
	- Front-end design for this application contains many layers, such as the signin/signup page, profile page, main dashboard and item submission page. The main dashboard will be quite complex as it will have to show real time analytics of the items.
- AI Based Approval System
	- Using IBM Watson to appropriately accept and reject new item request from users. Using Natural Language Understanding our application will have to analyze the input text and verify if it is valid rateable item. 
- AI Based Search
	- Using IBM Watson and Datamuse we will implement a context-aware search engine that tries to strengthen the user’s input to yield stronger results. 
