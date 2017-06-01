//this function looks up data for a given EIN using the propublica API and return it as a json object
function lookUpEIN (ein) {
  var query = 'https://projects.propublica.org/nonprofits/api/v2/organizations/' + ein + '.json';
  var response = UrlFetchApp.fetch(query); sheet.insertColumnAfter(1);

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var currentCol = 1;//replace with function to get current active range
  sheet.insertColumnAfter(currentCol);
  
  return response.getContentText();
}


//this function takes an array of EIN's and looks up each of their data and returns an array with all of their data
function putEINDataInSpreadsheet () {
  
}

function testLookUpEIN () {
  //this function is for testing lookUpEIN() 
  var ein = '142007220';
  var result = getEINdata(ein);
    Logger.log(result);//output to the console
}

function doTest() {
  SpreadsheetApp.getActiveSheet().getRange('C3').setValue('Hello');
}

//Sidebar

function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .createMenu('990 Scraper')
      .addItem('Show sidebar', 'showSidebar')
      .addToUi();
}

function showSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('page')
      .setTitle('990 Scraper')
      .setWidth(300);
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .showSidebar(html);
}