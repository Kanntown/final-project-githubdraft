//wynwood establishment information

/* var infoWynwood = {

  pantherCoffee: {
    title: "Panther Coffee",
    foodBar: true,
    gallery: false,
    summary: "Panther Coffee is a Miami-based specialty coffee roaster, retailer and wholesaler specializing in the small-batch roasting of coffee beans and the preparation of coffee beverages.",
    location: "2390 NW 2nd Ave Miami, FL 33127",
  },

  grampsBar: {
    title: "Gramps Bar",
    foodBar: true,
    gallery: false,
    summary: "Gramps is a bar that also features live music, stand-up comedy, djs, cultural events, and merriment.",
    location: "176 NW 24th St Miami, FL 33127",
  },

  ascasoGallery: {
    title: "Ascaso Gallery",
    foodBar: false,
    gallery: true,
    summary: "Located in the Wynwood Arts District, O. Ascanio Gallery presents a number of mid-career to established artists from around the world with an emphasis on contemporary art.",
    location: "2441 NW 2nd Ave Miami Miami, FL 33127",
  }
};

if(infoWynwood.gallery = false) {
  status = "This does not have a gallery";
}
else {
  status = "This does have a gallery";
}
*/
var elForm, elSelect, elPackageHint, elTerms, elTermsHint; // Declare variables
elForm          = document.getElementById('formResults');          // Store elements
elSelect        = document.getElementById('look');
elPackageHint   = document.getElementById('packageHint');
elTerms         = document.getElementById('terms');
elTermsHint     = document.getElementById('termsHint');

function packageHint() {                                 // Declare function
  var pack = this.options[this.selectedIndex].value;     // Get selected option
  if (pack === 'monthly') {                              // If monthly package
    elPackageHint.innerHTML = 'Save $10 if you pay for 1 year!';//Show this msg
  } else {                                               // Otherwise
    elPackageHint.innerHTML = 'Wise choice!';            // Show this message
  }
}

function checkTerms(event) {                             // Declare function
  if (!elTerms.checked) {                                // If checkbox ticked
    elTermsHint.innerHTML = 'You must agree to the terms.'; // Show message
    event.preventDefault();                              // Don't submit form
  }
}

//Create event listeners: submit calls checkTerms(), change calls packageHint()
elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);
