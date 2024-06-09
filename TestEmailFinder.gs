// Fonction de test pour exécuter et vérifier la fonction findEmail
function testFindEmail() {
  var firstName = "jeff";    
  var lastName = "Bezos";    
  var domain = "amazon.com"; 

  var email = FindEmail(firstName, lastName, domain);
  Logger.log("Test avec " + firstName + " " + lastName + " @" + domain + " : " + email);
}
