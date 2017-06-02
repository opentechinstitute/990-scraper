# 990-scraper
An add-on to grab whatever U.S. nonprofit tax information you want from the [ProPublica Nonprofit Explorer API](https://projects.propublica.org/nonprofits/api) and put it in a Google spreadsheet!

![EINstein](assets/images/EINstein-1400x560.jpg)

## What's a 990?
Nonprofit corporations in the United States have to submit one of a few types of tax forms to the IRS each year, which are then made public. If their total revenue is over $200,000 in a year, they submit a [form 990](https://www.irs.gov/pub/irs-pdf/f990.pdf), if it is between $50,000 and $199,999, they submit a [form 990-ez](https://www.irs.gov/pub/irs-pdf/f990ez.pdf), and if it is under $50,000, they submit a [990-N (e-postcard)](https://www.irs.gov/charities-non-profits/annual-electronic-notice-form-990-n-for-small-organizations-what-to-report). The information obtained from these forms from 2011-2014 is what has been made available through the ProPublica Nonprofit Explorer API. From this, we might be able to learn:
- Total number of individuals employed
- Total number of employees
- Amount of contributions and grants
- Year of formation
- City and State
- and more!

## What does this do?
If you have [a list of nonprofit organizations](https://docs.google.com/spreadsheets/d/1jwM-cYI1Ep9ZjNxGDjJXjqNkYA-f1ViyAH-Bv1tLvV4/edit#gid=0), this will loop through that list, use the API's Search Method to find an org's EIN number, and then use the EIN number and the Organization Method to find out whatever else you want to find out (e.g. total revenues, location, number of volunteers, etc). It then gently places all of that info into your Google Spreadsheet. 

## Where is the project now?
Check the [Gitter chatroom](https://gitter.im/990-scraper/Lobby#)for the most up-to-date project information!

Want to quickly test it out? We'll be creating a Google Add-on soon, but for now:
1. Open a blank Google Spreadsheet
2. Click on the menu item "Tools" > "Script editor..." This will open up another window for editing your own custom scripts. 
3. Copy [Code.gs](https://github.com/opentechinstitute/990-scraper/blob/master/Code.gs) into the box you see before you.
4. Go to File > New > Html file
5. Copy in [dialog.html](https://github.com/opentechinstitute/990-scraper/blob/master/dialog.html)
6. Press the play button and accept all the permissions
7. Go back to your original spreadsheet, and refresh the page
7. Enter an EIN number into a cell (lets say the EIN number is 142007220 and the cell is A1), go to another  cell and enter =lookUpByEIN(A1)
8. Press enter, and you have information on that nonprofit!

## Contributing

Thanks for your interest in contributing! To get started, take a look at [CONTRIBUTING.md](CONTRIBUTING.md), and join [the chatroom on Gitter](https://gitter.im/990-scraper/Lobby#).

## Participation Guidelines

This project adheres to a [code of conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to maya@opentechinstitute.org.

## Tutorials
- [Useful code snippets for working with the ProPublica APIs](https://www.propublica.org/nerds/item/useful-gists)
- [Coding with Google Apps Script](http://www.benlcollins.com/spreadsheets/starting-gas/)
- [How to work with the Google Sheets API](https://developers.google.com/sheets/)

## Might be useful?
- [ckan-tutorial by Nat](https://github.com/opentechinstitute/ckan-tutorial/blob/master/ckan-basics.js)
- [another piece of that tutorial](https://github.com/opentechinstitute/ckan-tutorial/blob/master/ckan-tutorial.html)
- [Python client for ProPublica Nonprofit Explorer API](https://github.com/robrem/propublica-nonprofit)

## MozSprint

Join us at the [Mozilla Global Sprint](http://mozilla.github.io/global-sprint/) June 1-2, 2017! We'll be gathering in-person at sites around the world and online to collaborate on this project and learn from each other. [Get your #mozsprint tickets now](http://mozilla.github.io/global-sprint/)!

![Global Sprint](https://cloud.githubusercontent.com/assets/617994/24632585/b2b07dcc-1892-11e7-91cf-f9e473187cf7.png)

