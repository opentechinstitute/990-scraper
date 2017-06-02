/* 
 * This project was created June 1, 2017 during Mozilla's Global Sprint by: 
 * (add your name if you worked on this):
 *   + Drew Wilson
 *   + Maya Wagoner
 *   + Nat Meysenburg
 *
 *  It uses the propublica API for nonprofit tax filings to populate a google sheet with
 *  data about financial stuff and other stuff for a nonprofit with a given EIN.
 * 
 */ 


/* 
 * this function looks up data for a given EIN using the propublica API and returns
 * the certain data fields back: name, totrevenue, pdf_url, city, state, ntee_code
 * 
 */
function lookUpByEIN (ein) {
  var ss = SpreadsheetApp.getActiveSpreadsheet(), //set the active spreadsheet
      sheets = ss.getSheets(),
      sheet = ss.getActiveSheet();
  
  var query = 'https://projects.propublica.org/nonprofits/api/v2/organizations/' + ein + '.json'; //build the query text
  var response = UrlFetchApp.fetch(query), //do the query
      data = JSON.parse(response.getContentText()); //convert the query response to json
  
  var rows = []; //start building the rows to return
  
  rows.push([data.organization.name, data.filings_with_data[0].totrevenue, data.filings_with_data[0].tax_prd_yr, data.filings_with_data[0].pdf_url, data.organization.city, data.organization.state, data.organization.ntee_code]); //the data fields that we want from the query response

  return rows; //return the data as rows, so they go into new columns in the spreadsheet

}

//this is an internal testing function for the lookUpByEIN() function
function testLookUpByEIN () {
  var ein = '142007220';//hardcoded EIN. it's for propublica
  var result = lookUpByEIN(ein);
  Logger.log(result);//output to the console
}

//Dialog UI

function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .createMenu('990 Scraper')
      .addItem('Show dialog', 'showDialog')
      .addToUi();
}

function showDialog() {
  var html = HtmlService.createHtmlOutputFromFile('Page')
      .setWidth(400)
      .setHeight(300);
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .showModalDialog(html, 'Get Nonprofit Tax Information');
}
