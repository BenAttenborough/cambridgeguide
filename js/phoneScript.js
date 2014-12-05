var device="iPhone";
var orientation="V";
    
function changeDevice(){
    if (device==="iPhone"){
        if (orientation==="V"){
            changeToVertical();
        }
        if (orientation==="H"){
            changeToHorizontal();
        }
    };
    if (device==="iPad"){
        changeToiPad();    
    }
    if (device==="Kindle"){
        changeToKindle();    
    }
        
};
    
function changeToHorizontal(){
    //Set styles for horizontal phone
    var horizontalStyles = {
        marginLeft: "14.5%",
        marginTop: "3.2%",
        width: "561px",
        height: "320px"
    };
    
    $( "#MainContentsBox" ).css("width", "800px");
    $( "#phoneMain" ).css( horizontalStyles );
    $( "#phoneimage" ).html('<img src="img/iPhone/iphone5H.png">');
    $( "#MainContentsBox" ).css("marginTop", "200px");
}
    
function changeToVertical(){
    //Set styles for vertical phone
    var horizontalStyles = {
        marginLeft: "6.5%",
        marginTop: "31%",
        width: "350px",
        height: "600px"
    };
    
    $( "#MainContentsBox" ).css("width", "400px");
    $( "#phoneMain" ).css( horizontalStyles );
    $( "#phoneimage" ).html('<img src="img/iPhone/iphone5.png">');
    $( "#MainContentsBox" ).css("marginTop", "0px")
    
}

function changeToiPad(){
    var ipadStyles = {
        marginLeft: "9.2%",
        marginTop: "9.7%",
        width: "806px",
        height: "605px"
    };
    
    $( "#MainContentsBox" ).css("width", "1000px");
    $( "#phoneMain" ).css( ipadStyles );
    $( "#phoneimage" ).html('<img src="img/iPhone/IPad.png">');
    $( "#MainContentsBox" ).css("marginTop", "0px")
}
    
function changeToKindle(){
    //Proposed feature
}
