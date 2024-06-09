# Email Finder Add-on for Google Sheets

This Google Sheets add-on allows users to find email addresses using the Hunter.io API, enhancing productivity by integrating powerful email search functionality directly within a spreadsheet.

## Features

- **API Integration**: Connects with Hunter.io to search for email addresses based on first names, last names, and company domains or names.
- **User Interface**: Provides a custom Google Sheets menu to enter API credentials and perform email searches directly from the spreadsheet.
- **Dynamic Response Handling**: Displays email search results or error messages directly in Google Sheets.

## Setup

### Prerequisites

- A Google account with access to Google Sheets.
- A Hunter.io account with API access to obtain an API key.

### Installation

1. **Clone the repository**:
git clone https://github.com/yourgithubusername/email-finder-addon.git


2. **Open Google Apps Script**:
- Navigate to [Google Apps Script](https://script.google.com) and create a new project.
- Copy the contents of the `.gs` and `.html` files from the cloned repository into the script editor in the appropriate files.

3. **Set API Key**:
- Use the custom menu in Google Sheets to open the setup dialog and enter your Hunter.io API key.

## Usage

1. **Enter API Credentials**:
- Access the 'Email Finder' custom menu and select 'Setup API Key' to enter your Hunter.io API key.

2. **Find Emails**:
- Input first names, last names, and company domains or names in designated columns within your Google Sheet.
- Use the formula `=FindEmail(A2, B2, C2)` in the cells where you want to display the email addresses. Here, `A2`, `B2`, and `C2` represent cells containing the first name, last name, and domain/company name, respectively.

3. **View Results**:
- Results from the email search will be displayed directly in the cells where you entered the formula.

## Error Handling

The add-on handles errors such as missing API keys, API limits exceeded, or network errors, and provides descriptive error messages to assist with troubleshooting.

## Support

For support, please email asmaabourass6@gmail.com
