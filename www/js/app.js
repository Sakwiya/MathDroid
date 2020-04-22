

var current_view = "home_page";
quiz_current_view = "quiz1";
var new_title;
var price;

$(document).ready(function(){
	$('.ui.checkbox').checkbox();
  $('.ui.accordion').accordion();
   document.addEventListener("deviceready", onDeviceReady, false);

});

 function onloadfunction(){
   var pc_button,back_btn,phone_btn,gadget_btn,electronic_btn,access_btn,details_btn,promo_btn;
   $('.ui.dropdown').dropdown('clear');
  

   back_btn = document.getElementById("back_btn");
   back_btn.addEventListener("click", previousBtn, false);
 
   
}


function previousBtn() {
 
 if (current_view == "_4to5yrsold_panel" || current_view == "_6to7yrsold_panel" || current_view == "_8yrsold_panel" ) {
 	new_title = "Kupweketsa Masamu";
 	$("#home_page").show();
 	$("#"+current_view).hide();
 	$("#back_btn").hide();
 	$("#logo").show();
 	document.getElementById("sub_header").innerHTML = new_title;
 	current_view = "home_page";
 }else if (current_view == "addition8yrsold_panel"  || current_view == "subtraction8yrsold_panel" || current_view == "multiplication8yrsold_panel" || current_view == "division8yrsold_panel") {
    new_title = "8 years old";
 	$("#_8yrsold_panel").show();
 	$("#"+current_view).hide();
 	$("#back_btn").show();
 	// $("#logo").show();
 	document.getElementById("sub_header").innerHTML = new_title;
 	current_view = "_8yrsold_panel";
 }else if (current_view == "add8quiz_panel") {
 	 new_title = "Kupweketsa Masamu";
 	$("#home_page").show();
 	$("#"+current_view).hide();
 	$("#back_btn").hide();
 	$("#logo").show();
  localStorage.clear();
  location.reload();
  $("input:radio").removeAttr("checked");
 	document.getElementById("sub_header").innerHTML = new_title;
 	current_view = "home_page";
 }else if (current_view == "addition4to5yrsold_panel" || current_view == "subtraction4to5yrsold_panel" || current_view == "shapes4to5yrsold_panel" || current_view == "countingnumbers4to5yrsold_panel" || current_view == "symbols4to5yrsold_panel"  ) {
 	 new_title = "4 to 5 years old";
 	$("#_4to5yrsold_panel").show();
 	$("#"+current_view).hide();
 	$("#back_btn").show();
 	$("#search_btn").hide();
 	//$("#logo").show();
 	document.getElementById("sub_header").innerHTML = new_title;
 	current_view = "_4to5yrsold_panel";
 }else if (current_view == "subtraction6to7yrsold_panel" || current_view == "addition6to7yrsold_panel") {
 	 new_title = "6 to 7 Years old";
 	$("#_6to7yrsold_panel").show();
 	$("#"+current_view).hide();
 	$("#back_btn").show();
 	$("#logo").hide();
 	document.getElementById("sub_header").innerHTML = new_title;
 	current_view = "_6to7yrsold_panel";
 }else if (current_view == "promoPage") {
 	 new_title = "Making Mathematics easier";
 	$("#home_page").show();
 	$("#"+current_view).hide();
 	$("#back_btn").hide();
 	$("#search_btn").hide();
 	$("#logo").show();
 	$("#cart").hide();
 	document.getElementById("sub_header").innerHTML = new_title;
 	current_view = "home_page";
 }else if (current_view == "moreDetails") {
 	 new_title = "Mac Book Pro.";
 	$("#home_page").hide();
 	$("#pcPage").show();
 	$("#"+current_view).hide();
 	$("#back_btn").show();
 	$("#logo").hide();
 	$("#search_btn").hide();
 	$("#cart").show();
 	document.getElementById("sub_header").innerHTML = new_title;
 	current_view = "pcPage";
 }



	
}

function changeView(target,title) {
	$("#"+target).show();
	$("#"+current_view).hide();
	$("#header").show();
	$("#back_btn").show();
	$("#logo").hide();;
	document.getElementById("sub_header").innerHTML = title;
	current_view = target;
}

function quizChangeView(target) {
  //console.log(target);
	$("#"+target).show();
	$("#"+quiz_current_view).hide();
	quiz_current_view = target;
}

function quizChangeViewPrevious() {

  if (quiz_current_view == "quiz2") {
     $("#"+quiz_current_view).hide();
     $("#quiz1").show();
     quiz_current_view = "quiz1";
  }else if (quiz_current_view == "quiz3") {
      $("#"+quiz_current_view).hide();
     $("#quiz2").show();
     quiz_current_view = "quiz2";
  }else if (quiz_current_view == "quiz4") {
      $("#"+quiz_current_view).hide();
     $("#quiz3").show();
     quiz_current_view = "quiz3";
  }else if (quiz_current_view == "quiz5") {
      $("#"+quiz_current_view).hide();
     $("#quiz4").show();
     quiz_current_view = "quiz4";
  }else if (quiz_current_view == "quiz6") {
      $("#"+quiz_current_view).hide();
     $("#quiz5").show();
     quiz_current_view = "quiz5";
  }else if (quiz_current_view == "quiz7") {
      $("#"+quiz_current_view).hide();
     $("#quiz6").show();
     quiz_current_view = "quiz6";
  }else if (quiz_current_view == "quiz8") {
      $("#"+quiz_current_view).hide();
     $("#quiz7").show();
     quiz_current_view = "quiz7";
  }else if (quiz_current_view == "quiz9") {
      $("#"+quiz_current_view).hide();
     $("#quiz8").show();
     quiz_current_view = "quiz8";
  }else if (quiz_current_view == "quiz10") {
      $("#"+quiz_current_view).hide();
     $("#quiz9").show();
     quiz_current_view = "quiz9";
  }
}

// The function below is an example of the best way to "start" your app.
// This example is calling the standard Cordova "hide splashscreen" function.
// You can add other code to it or add additional functions that are triggered
// by the same event or other events.

function onAppReady() {
    
}
document.addEventListener("app.Ready", onAppReady, false) ;
// document.addEventListener("deviceready", onAppReady, false) ;
// document.addEventListener("onload", onAppReady, false) ;



function onDeviceReady() {	
        cordova.plugins.notification.local.schedule({
            title: 'M1 Electronics Notification',
            text: 'Thats pretty easy...',
            foreground: true
        });
   
}

 document.addEventListener("backbutton", onBackKeyDown, false);

function onBackKeyDown(e){
    e.preventDefault();
    // alert("Back button is pressed");
   if (current_view == "addition_panel") {
   	 new_title = "Making Mathematics easier";
 	$("#home_page").show();
 	$("#"+current_view).hide();
 	$("#back_btn").hide();
 	$("#moreDetails").hide();
 	$("#logo").show();
 	document.getElementById("sub_header").innerHTML = new_title;
 	current_view = "home_page";
   }else if (current_view == "phonePage") {
    new_title = "Making Mathematics easier";
 	$("#home_page").show();
 	$("#"+current_view).hide();
 	$("#back_btn").hide();
 	$("#cart").hide();
 	$("#logo").show();
 	document.getElementById("sub_header").innerHTML = new_title;
 	current_view = "home_page";
 }else if (current_view == "gadgetsPage") {
 	 new_title = "Making Mathematics easier";
 	$("#home_page").show();
 	$("#"+current_view).hide();
 	$("#back_btn").hide();
 	$("#cart").hide();
 	$("#logo").show();
 	document.getElementById("sub_header").innerHTML = new_title;
 	current_view = "home_page";
 }else if (current_view == "electronicsPage") {
 	 new_title = "Making Mathematics easier";
 	$("#home_page").show();
 	$("#"+current_view).hide();
 	$("#back_btn").hide();
 	$("#cart").hide();
 	$("#logo").show();
 	document.getElementById("sub_header").innerHTML = new_title;
 	current_view = "home_page";
 }else if (current_view == "accessoriesPage") {
 	 new_title = "Making Mathematics easier";
 	$("#home_page").show();
 	$("#"+current_view).hide();
 	$("#back_btn").hide();
 	$("#cart").hide();
 	$("#logo").show();
 	document.getElementById("sub_header").innerHTML = new_title;
 	current_view = "home_page";
 }else if (current_view == "moreDetails") {
 	$("#home_page").hide();
 	$("#pcPage").show();
 	$("#"+current_view).hide();
 	$("#back_btn").show();
 	$("#logo").hide();
 	$("#cart").hide();
 	$("#cart").show();
 	document.getElementById("sub_header").innerHTML = new_title;
 	current_view = "pcPage";
 }else if (current_view == "promoPage") {
 	 new_title = "Making Mathematics easier";
 	$("#home_page").show();
 	$("#"+current_view).hide();
 	$("#back_btn").hide();
 	$("#cart").hide();
 	$("#logo").show();
 	document.getElementById("sub_header").innerHTML = new_title;
 	current_view = "home_page";
 }else if (current_view == "home_page") {
 	navigator.app.exitApp();
 }
}

// The app.Ready event shown above is generated by the init-dev.js file; it
// unifies a variety of common "ready" events. See the init-dev.js file for
// more details. You can use a different event to start your app, instead of
// this event. A few examples are shown in the sample code above. If you are
// using Cordova plugins you need to either use this app.Ready event or the
// standard Crordova deviceready event. Others will either not work or will
// work poorly.

// NOTE: change "dev.LOG" in "init-dev.js" to "true" to enable some console.log
// messages that can help you debug Cordova app initialization issues.
