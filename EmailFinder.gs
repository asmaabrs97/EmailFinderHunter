/**
 * Searches for an email using Hunter.io API based on first name, last name, and either a domain or a company name.
 * Can be used as a custom formula in Google Sheets.
 *
 * @param {string} firstName - First name.
 * @param {string} lastName - Last name.
 * @param {string} domainOrCompany - Either the company domain or a company name.
 * @return {string} The email address found or an error message.
 * @customfunction
 */
function FindEmail(firstName, lastName, domainOrCompany) {
  if (!firstName || !lastName || !domainOrCompany) {
    return "Please ensure all parameters are provided.";
  }
  
  var scriptProperties = PropertiesService.getScriptProperties();
  var apiKey = scriptProperties.getProperty('HUNTER_API_KEY');
  if (!apiKey) {
    return "API Key is not set.";
  }

  // Determine if the input is a domain or a company name and adjust accordingly
  var domain = domainOrCompany.includes('.') ? domainOrCompany : domainOrCompany + ".com";

  var apiUrl = 'https://api.hunter.io/v2/email-finder?domain=' + encodeURIComponent(domain) +
               '&first_name=' + encodeURIComponent(firstName) + '&last_name=' + encodeURIComponent(lastName) +
               '&api_key=' + apiKey;

  var response = UrlFetchApp.fetch(apiUrl, {muteHttpExceptions: true});
  var json = JSON.parse(response.getContentText());

  // Log the API URL and response for debugging
  Logger.log("API URL: " + apiUrl);
  Logger.log("API Response: " + response.getContentText());

  if (json.data && json.data.email) {
    return json.data.email;
  } else {
    return "No email found or an error occurred.";
  }
  function doGet(e) {
  return HtmlService.createHtmlOutput("<h1>Bienvenue dans l'add-on Email Finder</h1><p>Cet add-on vous permet de trouver des emails.</p>");
}
}
