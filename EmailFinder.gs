/**
 * Searches for an email address using the Hunter.io API based on provided first name, last name, and a domain or company name.
 * This function is designed to be used as a custom formula within Google Sheets, allowing users to integrate email search functionality directly into their spreadsheets.
 *
 * @param {string} firstName - The first name of the individual whose email is being searched.
 * @param {string} lastName - The last name of the individual.
 * @param {string} domainOrCompany - Either the domain of the company or the company name.
 * @return {string} Either the email address found, or an error message explaining what went wrong.
 * @customfunction
 */
function FindEmail(firstName, lastName, domainOrCompany) {
  // Ensure all required parameters are provided before proceeding
  if (!firstName || !lastName || !domainOrCompany) {
    return "Please ensure all parameters are provided to conduct the email search.";
  }
  
  var scriptProperties = PropertiesService.getScriptProperties();
  var apiKey = scriptProperties.getProperty('HUNTER_API_KEY');
  // Check if the API Key has been set
  if (!apiKey) {
    return "API Key is not set. Please configure your API Key.";
  }

  // Determine the correct domain format
  var domain = domainOrCompany.includes('.') ? domainOrCompany : domainOrCompany + ".com";
  // Construct the API URL with proper encoding of parameters
  var apiUrl = 'https://api.hunter.io/v2/email-finder?domain=' + encodeURIComponent(domain) +
               '&first_name=' + encodeURIComponent(firstName) + '&last_name=' + encodeURIComponent(lastName) +
               '&api_key=' + apiKey;

  // Fetch response from Hunter.io API
  var response = UrlFetchApp.fetch(apiUrl, {muteHttpExceptions: true});
  var json = JSON.parse(response.getContentText());

  // Log API request details for debugging purposes
  Logger.log("API URL: " + apiUrl);
  Logger.log("API Response: " + response.getContentText());

  // Check if an email was found and return the result
  if (json.data && json.data.email) {
    return json.data.email;
  } else {
    return "No email found, or an error occurred. Please check the input details and try again.";
  }
}

/**
 * Serves an HTML welcome message for the Email Finder add-on. This function is triggered by HTTP GET requests.
 * It provides introductory information about the functionality and usage of the add-on.
 */
function doGet(e) {
  return HtmlService.createHtmlOutput("<h1>Welcome to the Email Finder Add-on</h1><p>This add-on allows you to find emails. Please use it responsibly and ensure your API key is set up.</p>");
}
