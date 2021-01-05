# CSU33012-REST-API-Project

A repository for Software Engineering module, contains API implementation. 

*Part 1*

"Interrogate the GitHub API to retrieve and display data regarding the logged in developer. See 'https://github.com/phadej/github'.

More information to follow later in the semester."

This first part involves interrogating the Github API to retrieve data regarding the logged in developer. I will be using pygithub for the first part of this project, and will probaby be using JavaScript for the visualisation aspect of this project. 
The first part was not too complex, but will probably be improved upon once the visualisation aspect comes into play.

*Part 2*

"nterrogate the GitHub API to build visualisation of data available tht elucidates some aspect of the softare engineering process, such as a social graph of developers and projects, or a visualisation of indiviudal of team performance. Provide a visualisation of this using the d3js library. See https://d3js.org

More information will be provided later in the semester. "

The second part involves visualising data from a github repository. My initial plan was to continue using pygithub as python has tonnes of libraries, for visualising and gathering data. Though the first part uses python to gather data, I ended up using JavaScript and HTML to both gather and show off the data. I used the github api to gather information from orgs, like google, facebook, and any other large organisation. The data is displayed using a radial tree which i thought looked pretty.

This works with any org, but you have to manually change the link to the org you want to use inside app.js, i.e. https://api.github.com/orgs/google/repos. with this you can generate a JSON, which is in this repository. 

To get this to work, simply download the code, and in your terminal do 

    npm install express

and then 

    node app.js
    
finally, go to 

    localhost:3069

Resources used:

https://github.com/octokit/rest.js/issues/243
https://pygithub.readthedocs.io/en/latest/introduction.html
https://pygithub.readthedocs.io/en/latest/apis.html

https://observablehq.com/@d3/radial-tidy-tree
https://api.github.com/orgs/google/repos
https://d3js.org/
https://docs.github.com/en/free-pro-team@latest/github/setting-up-and-managing-organizations-and-teams/about-organizations?fbclid=IwAR1kKP3tKayYVYru33fbuSS85cBuK54w-DrJ8o2uWmPjeeqdZdh_Tt2rkNU
https://docs.github.com/en/free-pro-team@latest/rest/guides/rendering-data-as-graphs?fbclid=IwAR1Q7QwYeXtnMoMW9ZfHBkfEujFf9xAxDELbfxazYLE5O68MJD4VvZQ1O6s
https://towardsdatascience.com/github-user-insights-using-github-api-data-collection-and-analysis-5b7dca1ab214?fbclid=IwAR2ueFLivXsWIo8IRvk979U7bkfECsQbMl5bK1F56FiIMuxXQqgu2uUNxrc
