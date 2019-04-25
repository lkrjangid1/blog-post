// Set URL and Key
var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/18U_aqDsC1Vlj0_wv7l6I2tNrxbzLCSn6iBq9l9rFvr4/pubhtml';

// Call tabletop fuction
function init() {
  Tabletop.init( { key: publicSpreadsheetUrl,
                   callback: showInfo,
                   simpleSheet: true } )
}

// Function to loop through data
function showInfo(data, tabletop) {
  // Call hideLoading
  hideLoading();

  for (var i = 0; i < data.length; i++) {
    $('.post').append(
      "<div class='article'>" +
        "<div class='text'>" +
          "<h1>" + data[i].title + "</h1>" +
          "<h4> by " + data[i].author + "</h4>" +
          "<p>" + data[i].body + "</p>" +
          "<p class='date'> Published: "  + data[i].date + "</p>" +
        "</div>" +
      "</div>"
    );
  }
}

// Function to hide loading text
function hideLoading() {
  $('.loading').css("display", "none");
}

window.addEventListener('DOMContentLoaded', init);
