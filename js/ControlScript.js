//Test file is linked and JS is enabled
console.log("JS working");

//Setup objects

var placePrototype = {
    name: "Anonymous",
    text: "None",
    lat: "",
    lang: "",
    picH: "",
    picV: ""
}

function Place (name, text, lat, lang, picH, picV) {
    this.name = name;
    this.text = text;
    this.lat = lat;
    this.lang = lang;
    this.picH = picH;
    this.picV = picV;
}

Place.prototype = placePrototype; 

Overview = new Place("Map overview", OverviewText, 52.206761, 0.123644, "img/LandMarks/kingsH.jpg", "img/LandMarks/kingsV.jpg");
Kings = new Place("King\'s College", kingsText, 52.204705, 0.116408, "img/LandMarks/kingsH.jpg", "img/LandMarks/kingsV.jpg");
Round = new Place("Round Church", RoundText, 52.208483, 0.118982, "img/LandMarks/roundH.jpg", "img/LandMarks/roundV.jpg");
Market = new Place("Cambridge Market", MarketText, 52.205569, 0.119677, "img/LandMarks/marketH.jpg", "img/LandMarks/marketV.jpg");
Trinity = new Place("Trinity College", TrinityText, 52.206945, 0.113039, "img/LandMarks/TrinityH.jpg", "img/LandMarks/TrinityV.jpg");
StJohn = new Place("St John\'s College", JohnsText, 52.207717, 0.117876, "img/LandMarks/StJohnsH.jpg", "img/LandMarks/StJohnsV.jpg");
Queens = new Place("Queen\'s College", QueensText, 52.202117, 0.114901, "img/LandMarks/QueensH.jpg", "img/LandMarks/QueensV.jpg");
Fitz = new Place("Fitzwilliam Museum", FitzText, 52.199509, 0.119934, "img/LandMarks/FitzwilliamMuseumH.jpg", "img/LandMarks/FitzwilliamMuseumV.jpg");
Folk = new Place("Cambridge Folk Museum", FolkText, 52.210756, 0.114710, "img/LandMarks/FolkH.jpg", "img/LandMarks/FolkV.jpg");
Botanic = new Place("The Botanic Gardens", GardensText, 52.194215, 0.125954, "img/LandMarks/GardensH.jpg", "img/LandMarks/GardensV.jpg");
Kettles = new Place("Kettles Yard", YardText, 52.210958, 0.114445, "img/LandMarks/GardensH.jpg", "img/LandMarks/GardensV.jpg");
Tech = new Place("The Museum of Technology", TechText, 52.212685, 0.143055, "img/LandMarks/TechH.jpg", "img/LandMarks/TechV.jpg");
Arch = new Place("Museum of Archeaology", MAAText, 52.202785, 0.120857, "img/LandMarks/maaH.jpg", "img/LandMarks/maaV.jpg");

var placeholder = "";

$( ".ui-btn" ).click(function() {
    //Output contents of Place to check it is correct
    placeholder = $(this).attr('id');
    console.log( "Handler for " + $(this).attr('id') + " called." );

    //Call getInfo
    getInfo(placeholder);
});

//Create functions for info, map and pics
    //Create getInfo function
var getInfo = function (placeholder) {
    console.log('Getting info for ' + placeholder);
    
    //Hide map and pics canvas, show info canvas
        $('#infoContainer').removeClass('hidden');
        $('#infoContainer').addClass('visible');
    $('#picContainer').removeClass('visible');
    $('#picContainer').addClass('hidden');
    $('#map-canvas').removeClass('visible');
    $('#map-canvas').addClass('hidden');
    
    //Put contents of Place.text into $( "#infoContainer" )
    $ ( "#infoContainer" ).html('<h1>' + window[placeholder].name + '</h1>' + '<p>' + window[placeholder].text);
};

    //Create getMap function
var getMap = function (placeholder) {
    console.log('Getting map for ' + placeholder);
   
    //Hide info and pics canvas, show map canvas
    $('#infoContainer').removeClass('visible');
    $('#infoContainer').addClass('hidden');
    $('#picContainer').removeClass('visible');
    $('#picContainer').addClass('hidden');
    $('#map-canvas').removeClass('hidden');
    $('#map-canvas').addClass('visible');
    refresh();
}

    //Create getPics function
var getPics = function (placeholder) {
    console.log('Getting pics for ' + placeholder);
    //Hide info and maps canvas, show pics canvas
        $('#infoContainer').removeClass('visible');
    $('#infoContainer').addClass('hidden');
    $('#map-canvas').removeClass('visible');
    $('#map-canvas').addClass('hidden');
    $('#picContainer').removeClass('hidden');
    $('#picContainer').addClass('visible');
    
    //add picture to 'picContainer'
    //Use horizontal or vertical pic as appropriate
    height = $( window ).height();
    width = $( window ).width();
    
    if(height>width) {
        $( "#picContainer" ).css('background', 'url("' + window[placeholder].picV + '") no-repeat center');
    } else {
        $( "#picContainer" ).css('background', 'url("' + window[placeholder].picH + '") no-repeat center');
    }


    $( "#picContainer" ).css('background-size', 'cover');
    $( "#picContainer" ).css('background-color', '#000');
}

//Bind functions to the buttons

    //bind getInfo() to $( "#infoBtn" )
$( "#infoBtn" ).click(function() {
    getInfo(placeholder);
});

    //bind getMap() to $( "#mapBtn" )
$( "#mapBtn" ).click(function() {
    getMap(placeholder);
});

    //bind getPics() to $( "#picsBtn" )
$( "#picsBtn" ).click(function() {
    getPics(placeholder);
});

//Set the map options



//Create a function to draw the map
function refresh() {

    console.log("Refreshing map");
    
//    x = -34.397;
//    y = 150.644;    
    x = window[placeholder].lat;
    y = window[placeholder].lang;

    mapOptions = {
        zoom: 17,
        center: { lat: x, lng: y}
    };
    
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    
    function placeMarker (x, y, title) {
        var marker = new google.maps.Marker({
            position: { lat: x, lng: y},
            map: map,
            title: title,
        });
    };
    
    placeMarker(x, y, window[placeholder].name); 
};