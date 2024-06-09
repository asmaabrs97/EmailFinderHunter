// Fonction de test pour exécuter et vérifier la fonction findEmail
function testFindEmail() {
  var firstName = "Tim";    
  var lastName = "Cook";    
  var domain = "apple.com"; 

  var email = findEmail(firstName, lastName, domain);
  Logger.log("Test avec " + firstName + " " + lastName + " @" + domain + " : " + email);
}
