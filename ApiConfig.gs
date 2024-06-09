function storeApiKey(apiKey) {

  if (!apiKey || apiKey.length < 20 || !/^[a-zA-Z0-9\-_]+$/.test(apiKey)) {
    return "Invalid API Key provided. Please check your input.";
  }
  var scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.setProperty('HUNTER_API_KEY', apiKey);
  return "API Key stored successfully";
}


function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Email Finder')
    .addItem('Setup API Key', 'showSidebar')
    .addToUi();
    instructionsSheet(); 
}

function showSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('Sidebar')
    .setTitle('Setup API Key')
    .setWidth(300);
  SpreadsheetApp.getUi().showSidebar(html);
}


function showSetupDialog() {
  var html = HtmlService.createHtmlOutputFromFile('Setup')
    .setWidth(400)
    .setHeight(300);
  SpreadsheetApp.getUi().showModalDialog(html, 'Setup API Key');
}

function showEmailFinder() {
  var html = HtmlService.createHtmlOutputFromFile('EmailFinder')
    .setWidth(400)
    .setHeight(300);
  SpreadsheetApp.getUi().showModalDialog(html, 'Find Emails');
}

function doGet(e) {
  return HtmlService.createHtmlOutput("<h1>Bienvenue dans l'add-on Email Finder</h1><p>Cet add-on vous permet de trouver des emails.</p>");
}
