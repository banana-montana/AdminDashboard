var users = [];

// theme template toggle function
var templates = [
  { id: 1, name: 'Light', value: 'css/light.css'},
  { id: 2, name: 'Dark', value: 'css/dark.css'}
];

var app = new Vue({
  el: '#theme',
  data: {
    message: 'Hello Vue!',

    tables:  [ // table information
      { name: 'Gray M Notebook', 
        description: 'A3 medium sized gray 85 page lined notebook', 
        code: 'N011GM', 
        order: 2
      },
      { name: 'Pink L Notebook', 
        description: 'A4 large sized pink 160 page lined notebook', 
        code: 'N017PL', 
        order: 4
      },
      { name: 'Blue S Sketchbook', 
        description: 'A6 small sized pink 40 page plain notebook', 
        code: 'S15SB', 
        order: 3
      }],

    templates: templates,
    current_template: templates[0]
  },
  methods: {
    setTemplate: function(id){
      var selected_template = this.templates.filter(function(ele){
        return (ele.id == id)
      })[0];

      this.current_template = selected_template;
    }, // table data
      tableHeader: function(tableData) {
        var keys = [];
        for(key in tableData[0]){
          keys.push(key);
        }
        return keys;
      }, // print report button
        print: function() {
      console.log('cheese')
        window.print();
    },
    customerCount: function() {
      return this.tables.length
    },
    orderCount: function() {
      result = this.tables.map((item) => {
        return item.order;
      })
      return result.reduce((a, b) => a + b, 0)
    },
    deliveriesCount: function() {
      result = this.tables.map((item) => {
        return item.order;
      })
      return result.reduce((a, b) => a + b, 0)
    }
  }
});

//side navigation bar
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}





// // declaring possible fortune outcomes 
// var fortunes = [
//   "Somebody will mistaken you for a homeless person and put R2 in your hand",
//   "The barista will burn your coffee thus ruining your entire morning",
//   "You will notice your first grey hair this evening",
//   "A bee will fly into your cooldrink engulfing you in feelings of death, wastage and despair",
//   "Somebody wants to give you a kitten",
//   "Don't eat lettuce today as it will negatively effect your chakra alignment",
//   "You will receive a call from a call centre selling you life insurance",
//   "A seagull will shit on your shoulder, bestowing upon you good luck"] ;

// // makes the fortune appear once the button is clicked 
// function readFortune() {
//   var fortune = cheese() 
//   document.getElementById("fortune").innerHTML = fortune
//   document.getElementById("stop").disabled = true;
// }

// // chooses a fortune at random to be displayed 
// function cheese() {
//   var randomNumber = Math.floor(Math.random() * fortunes.length);
//   console.log("random number" + randomNumber);
//   return fortunes[randomNumber];
// }







