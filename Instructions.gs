function instructionsSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let instructionsSheet = ss.getSheetByName("Instructions");


  if (!instructionsSheet) {
    instructionsSheet = ss.insertSheet("Instructions");
  } else {

    instructionsSheet.clear();
  }


  const instructions = [
    ["Instructions pour utiliser l'add-on Email Finder"],
    ["1. Configuration de l'API Key"],
    ["Allez dans le menu 'Email Finder' > 'Setup Api Key' pour entrer votre clé API."],
    ["2. Recherche d'emails"],
    ["Utilisez le menu 'Email Finder' > 'Find Emails' pour ouvrir le dialogue de recherche."],
    ["Entrez le prénom, le nom, et le domaine ou le nom de l'entreprise pour rechercher un email."],
    ["3. Conseils d'utilisation"],
    ["Assurez-vous que vous avez correctement entré tous les détails requis pour éviter les erreurs de recherche."],
    ["4. Support"],
    ["Pour tout support technique, veuillez contacter asmaabourass6@gmail.com"]
  ];


  instructionsSheet.getRange(1, 1, instructions.length, 1).setValues(instructions);
  instructionsSheet.autoResizeColumns(1, 1);  
}
