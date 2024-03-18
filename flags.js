//Variables
var content;
var question = 1;

function getStarted(){
 $('#start_button').on('click', function(){
   $('#templates').toggleClass('hide');
   $('#start_text').toggleClass('hide');
   $('#start_button').toggleClass('hide');
   $('#next_button').toggleClass('hide');
 });
};

function nextButton(){
 $('#next_button').on('click', function(){
    if($('.start_template').hasClass('active_profile')){
     $('#welcome_page').toggleClass('hide');
      $('#home_page').toggleClass('hide');
    }
 });
};

function profileClickHandler(){
 $('.start_template').on('click', function(){
   if ($(this).hasClass('inactive')){
   }else{
       $('.start_template').toggleClass('inactive');
   $(this).toggleClass('inactive');
   $(this).toggleClass('active_profile');
   }
 });
};

function countryButton(){
 $('#country_button').on('click', function(){
   $('#home_page').toggleClass('hide');
   $('#fact_page').toggleClass('hide');
   $('#gender_facts').addClass('hide');
   $('#country_facts').removeClass('hide');
   $('#fact_play').addClass('country');
 });
};

function genderButton(){
 $('#gender_button').on('click', function(){
   $('#home_page').toggleClass('hide');
   $('#fact_page').toggleClass('hide');
   $('#country_facts').addClass('hide');
   $('#gender_facts').removeClass('hide');
 });
};

function homeBackButton(){
 $('#home_back').on('click', function(){
   $('#home_page').toggleClass('hide');
   $('#welcome_page').toggleClass('hide');
 });
};

function factPlayButton(){
 $('#fact_play').on('click', function(){
   $('#fact_page').toggleClass('hide');
   
   if($('#fact_play').hasClass('country')){
    $('#country_page').toggleClass('hide');  
   }else{
     $('#gender_page').toggleClass('hide');
   }
   
 });
};

function factBackButton(){
 $('#fact_back').on('click', function(){
   $('#home_page').toggleClass('hide');
   $('#fact_page').toggleClass('hide');
   
   if($('#fact_play').hasClass('country')){
     $('#fact_play').removeClass('country');
   }
 });
};

//Country Page Logic
function countryBackButton(){
 $('#country_back').on('click', function(){
   $('#country_page').toggleClass('hide');
   $('#fact_page').toggleClass('hide');
   $('#fact_play').hasClass('country')
 });
};

function asiaButton(){
 $('#asia').on('click', function(){
   $('#country_page').toggleClass('hide');
   $('#question_page').toggleClass('hide');
   content = "asia";
   $('#question_page_text').html("Asia Flags");
   $('#question_flag').attr("src","https://cdn.britannica.com/90/7490-050-5D33348F/Flag-China.jpg");
   $("#question_description").html("This country has the largest population in the world.");
   $('#choice_1').html("Taiwan");
   $('#choice_2').html("Singapore");
   $('#choice_3').html("Hongkong");
   $('#choice_4').html("China");
   $('#choice_4').addClass('answer');
 });
};

function namericaButton(){
 $('#namerica').on('click', function(){
   $('#country_page').toggleClass('hide');
   $('#question_page').toggleClass('hide');
   content = "namerica";
   $('#question_page_text').html("North America Flags");
   $('#question_flag').attr("src","https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg");
   $("#question_description").html("This country is the world's largest national economy and leading global trader.");
   $('#choice_1').html("Australia");
   $('#choice_2').html("USA");
   $('#choice_3').html("United Kingdom");
   $('#choice_4').html("New Zealand");
   $('#choice_2').addClass('answer');
 });
};

function samericaButton(){
 $('#samerica').on('click', function(){
   $('#country_page').toggleClass('hide');
   $('#question_page').toggleClass('hide');
   content = "samerica";
   $('#question_page_text').html("South America Flags");
   $('#question_flag').attr("src","https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/640px-Flag_of_Brazil.svg.png");
   $("#question_description").html("This country is home to the world-famous Amazon Rainforest.");
   $('#choice_1').html("Brazil");
   $('#choice_2').html("Paraguay");
   $('#choice_3').html("Peru");
   $('#choice_4').html("Mexico");
   $('#choice_1').addClass('answer');
 });
};

function australiaButton(){
 $('#australia_button').on('click', function(){
   $('#country_page').toggleClass('hide');
   $('#question_page').toggleClass('hide');
   content = "australia";
   $('#question_page_text').html("Australia Flags");
   $('#question_flag').attr("src","https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg");
   $("#question_description").html("This country has the same name as the continent it is on!");
   $('#choice_1').html("USA");
   $('#choice_2').html("Canada");
   $('#choice_3').html("Australia");
   $('#choice_4').html("Asia");
   $('#choice_3').addClass('answer');
 });
};

function europeButton(){
 $('#europe').on('click', function(){
   $('#country_page').toggleClass('hide');
   $('#question_page').toggleClass('hide');
   content = "europe";
   $('#question_page_text').html("Europe Flags");
   $('#question_flag').attr("src","https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png");
   $("#question_description").html("This country is made up of 4 countries!");
   $('#choice_1').html("Canada");
   $('#choice_2').html("United Kingdom");
   $('#choice_3').html("China");
   $('#choice_4').html("Australia");
   $('#choice_2').addClass('answer');
 });
};

function africaButton(){
 $('#africa').on('click', function(){
   $('#country_page').toggleClass('hide');
   $('#question_page').toggleClass('hide');
   content = "africa";
   $('#question_page_text').html("Africa Flags");
   $('#question_flag').attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/1200px-Flag_of_Nigeria.svg.png");
   $("#question_description").html("This country holds the largest natural gas reserves on the continent!");
   $('#choice_1').html("Congo");
   $('#choice_2').html("Peru");
   $('#choice_3').html("Paraguay");
   $('#choice_4').html("Nigeria");
   $('#choice_4').addClass('answer');
 });
};

function antarcticaButton(){
 $('#antarctica').on('click', function(){
   $('#country_page').toggleClass('hide');
   $('#question_page').toggleClass('hide');
   content = "antarctica";
   $('#question_page_text').html("Antarctica Flags");
   $('#question_flag').attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/1200px-Flag_of_Chile.svg.png");
   $("#question_description").html("Antarctica has no countries. This is one of the countries that claims it. It has the world's largest swimming pool!");
   $('#choice_1').html("Chile");
   $('#choice_2').html("Argentina");
   $('#choice_3').html("New Zealand");
   $('#choice_4').html("Norway");
   $('#choice_1').addClass('answer');
 });
};

//Gender Page Logic
function genderPlayButton(){
 $('#gender_play').on('click', function(){
   $('#gender_page').toggleClass('hide');
   $('#question_page').toggleClass('hide');
   content = "gender";
   $('#question_page_text').html("Gender Flags");
   $('#question_flag').attr("src","https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/image7");
   $("#question_description").html("This is used to represent people whose gender identity does not fit within the traditional male/female binary.");
   $('#choice_1').html("Transgender");
   $('#choice_2').html("Asexual");
   $('#choice_3').html("Bigender");
   $('#choice_4').html("Non-binary");
   $('#choice_4').addClass('answer');
 });
};

function genderBackButton(){
 $('#gender_back').on('click', function(){
   $('#gender_page').toggleClass('hide');
   $('#fact_page').toggleClass('hide');
 });
};



//Question Page Logic
function questionChoice(){
 $('.question_choices').on('click', function(){
   if($(this).hasClass('answer')){
     if($(this).hasClass('correct')){
     }else{
       $('.answer').toggleClass('answer');
       question+=1; 
       nextQuestion();
       setTimeout(function() {
         $('#question_flag').toggleClass('hide');
         $('#question_description').toggleClass('hide');
         $('#question_choice_box').toggleClass('hide');
       }, 250);
     }
   }else{
     if($(this).hasClass('wrong')){
     }else{
        $('.question_choices').toggleClass('wrong');
        $('.answer').toggleClass('wrong');
        $('.answer').toggleClass('correct');
        $('#question_continue').toggleClass('inactive');
     }
   }
 });
};

function continueButton(){
 $('#question_continue').on('click', function(){
   if($(this).hasClass('inactive')){
   }else{
    $('.question_choices').toggleClass('wrong');
    $('.answer').toggleClass('wrong');
    $('.answer').toggleClass('correct');
    $('#question_continue').toggleClass('inactive');
    $('.answer').toggleClass('answer');
    question+=1;
    nextQuestion();
    setTimeout(function() {
        $('#question_flag').toggleClass('hide');
        $('#question_description').toggleClass('hide');
        $('#question_choice_box').toggleClass('hide');
    }, 250);
   }
 });
};

function nextQuestion(){
  $('#question_flag').toggleClass('hide');
  $('#question_description').toggleClass('hide');
  $('#question_choice_box').toggleClass('hide');
  if (content == "asia"){
    switch(question){
      case 2:{   $('#question_flag').attr("src","https://e0.pxfuel.com/wallpapers/911/753/desktop-wallpaper-japan-flag-japanese-flag-flag-of-japan-japan.jpg");
   $("#question_description").html("This country is home to the famous cherry blossoms!");
   $('#choice_1').html("China");
   $('#choice_2').html("Japan");
   $('#choice_3').html("Singapore");
   $('#choice_4').html("Thailand");
   $('#choice_2').addClass('answer');
        break;
      }
      case 3:{ $('#question_flag').attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/800px-Flag_of_the_Philippines.svg.png");
   $("#question_description").html("This country has 7641 islands- making it one of the world's largest archipelagos!");
   $('#choice_1').html("Malaysia");
   $('#choice_2').html("Taiwan");
   $('#choice_3').html("Philippines");
   $('#choice_4').html("Thailand");
   $('#choice_3').addClass('answer');
        break;
      }
      case 4:{ $('#question_flag').attr("src","https://cdn.britannica.com/62/4562-004-C04E54C5/Flag-Taiwan.jpg");
   $("#question_description").html("This country is considered the world's most mountainous island!");
   $('#choice_1').html("Taiwan");
   $('#choice_2').html("Thailand");
   $('#choice_3').html("Malaysia");
   $('#choice_4').html("India");
   $('#choice_1').addClass('answer');
        break;
      }
      case 5:{
        $('#question_page').toggleClass('hide');
        $('#ending_page').toggleClass('hide');
        break;
      }
    }
  }//<!--Asia-->
  if (content == "namerica"){
    switch(question){
      case 2:{ $('#question_flag').attr("src","https://cdn.britannica.com/68/7068-050-54679E29/Flag-Canada.jpg");
   $("#question_description").html("This country has the longest coastline in the world!");
   $('#choice_1').html("Greenland");
   $('#choice_2').html("Canada");
   $('#choice_3').html("Australia");
   $('#choice_4').html("South Korea");
   $('#choice_2').addClass('answer');
        break;
      }
      case 3:{ $('#question_flag').attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_Greenland.svg/2000px-Flag_of_Greenland.svg.png");
   $("#question_description").html("This country has the second-largest ice sheet next to Antarctica!");
   $('#choice_1').html("USA");
   $('#choice_2').html("Australia");
   $('#choice_3').html("Iceland");
   $('#choice_4').html("Greenland");
   $('#choice_4').addClass('answer');
        break;
      }
      case 4:{$('#question_flag').attr("src","https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg");
   $("#question_description").html("This country is home to the world's largest pyramid!");
   $('#choice_1').html("Egypt");
   $('#choice_2').html("Mexico");
   $('#choice_3').html("Afghanistan");
   $('#choice_4').html("Canada");
   $('#choice_2').addClass('answer');
        break;
      }
      case 5:{
        $('#question_page').toggleClass('hide');
        $('#ending_page').toggleClass('hide');
        break;
      }
    }
  }//<!--NAmerica-->
  if (content == "samerica"){
    switch(question){
      case 2:{  $('#question_flag').attr("src","https://cdn.britannica.com/04/4904-050-4D71EA82/Flag-Venezuela.jpg");
   $("#question_description").html("This country has the largest oil reserves in the whole world!");
   $('#choice_1').html("Argentina");
   $('#choice_2').html("Mexico");
   $('#choice_3').html("Venezuela");
   $('#choice_4').html("Palestine");
   $('#choice_3').addClass('answer');
        break;
      }
      case 3:{$('#question_flag').attr("src","https://cdn.britannica.com/77/3377-050-F05BF1D9/Flag-Paraguay.jpg");
   $("#question_description").html("This country is known as The Heart of South America!");
   $('#choice_1').html("Peru");
   $('#choice_2').html("Brazil");
   $('#choice_3').html("Nigeria");
   $('#choice_4').html("Paraguay");
   $('#choice_4').addClass('answer');
        break;
      }
      case 4:{$('#question_flag').attr("src","https://cdn.britannica.com/48/3448-050-1EFC8CF3/Flag-Peru.jpg");
   $("#question_description").html("This country has the tallest sand dunes in the world!");
   $('#choice_1').html("Egypt");
   $('#choice_2').html("Palestine");
   $('#choice_3').html("Peru");
   $('#choice_4').html("Israel");
   $('#choice_3').addClass('answer');
        break;
      }
      case 5:{
        $('#question_page').toggleClass('hide');
        $('#ending_page').toggleClass('hide');
        break;
      }
    }
  }//<!--SAmerica-->
  if (content == "australia"){
    switch(question){
      case 2:{$('#question_flag').attr("src","https://cdn.britannica.com/08/3308-050-9DB345F2/Flag-Samoa.jpg");
   $("#question_description").html("This country is known as The Cradle of Polynesia.");
   $('#choice_1').html("Tonga");
   $('#choice_2').html("Samoa");
   $('#choice_3').html("Solomon Islands");
   $('#choice_4').html("Peru");
   $('#choice_2').addClass('answer');
        break;
      }
      case 3:{$('#question_flag').attr("src","https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Tonga.svg");
   $("#question_description").html("This country is the only monarchy in Australia!");
   $('#choice_1').html("Wales");
   $('#choice_2').html("United Kingdom");
   $('#choice_3').html("Tonga");
   $('#choice_4').html("Solomon Islands");
   $('#choice_3').addClass('answer');
        break;
      }
      case 4:{$('#question_flag').attr("src","https://cdn.britannica.com/98/3298-050-9F44CA8A/Flag-Solomon-Islands.jpg");
   $("#question_description").html("This country got its name because it was believed to be the home of the riches of a biblical king!");
   $('#choice_1').html("Solomon Islands");
   $('#choice_2').html("Australia");
   $('#choice_3').html("Qatar");
   $('#choice_4').html("Ecuador");
   $('#choice_1').addClass('answer');
        break;
      }
      case 5:{
        $('#question_page').toggleClass('hide');
        $('#ending_page').toggleClass('hide');
        break;
      }
    }
  }//<!--Australia-->
  if (content == "europe"){
    switch(question){
      case 2:{$('#question_flag').attr("src","https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/800px-Flag_of_Spain.svg.png");
   $("#question_description").html("This is the country of artists of universal renown such as Velázquez, Goya, Gaudí, Picasso, and Dalí.");
   $('#choice_1').html("Italy");
   $('#choice_2').html("Spain");
   $('#choice_3').html("France");
   $('#choice_4').html("Germany");
   $('#choice_2').addClass('answer');
        break;
      }
      case 3:{$('#question_flag').attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/800px-Flag_of_Portugal.svg.png");
   $("#question_description").html("This country is the oldest country in Europe!");
   $('#choice_1').html("France");
   $('#choice_2').html("Italy");
   $('#choice_3').html("Spain");
   $('#choice_4').html("Portugal");
   $('#choice_4').addClass('answer');
        break;
      }
      case 4:{$('#question_flag').attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/2560px-Flag_of_Italy.svg.png");
   $("#question_description").html("This country's people invented pizza!");
   $('#choice_1').html("Greece");
   $('#choice_2').html("Italy");
   $('#choice_3').html("France");
   $('#choice_4').html("USA");
   $('#choice_2').addClass('answer');
        break;
      }
      case 5:{
        $('#question_page').toggleClass('hide');
        $('#ending_page').toggleClass('hide');
        break;
      }
    }
  }//<!--Europe-->
  if (content == "africa"){
    switch(question){
      case 2:{$('#question_flag').attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Libya.svg/1200px-Flag_of_Libya.svg.png");
   $("#question_description").html("This country has no permanent rivers!");
   $('#choice_1').html("Ecuador");
   $('#choice_2').html("Libya");
   $('#choice_3').html("Egypt");
   $('#choice_4').html("Congo");
   $('#choice_2').addClass('answer');
        break;
      }
      case 3:{$('#question_flag').attr("src","https://cdn.britannica.com/18/18-004-43399622/Flag-Somalia.jpg");
   $("#question_description").html("This country is known as The Land of the Moon.");
   $('#choice_1').html("Israel");
   $('#choice_2').html("Libya");
   $('#choice_3').html("Greece");
   $('#choice_4').html("Somalia");
   $('#choice_4').addClass('answer');
        break;
      }
      case 4:{$('#question_flag').attr("src","https://cdn.britannica.com/12/4212-004-EBD6B5B2/Flag-Angola.jpg");
   $("#question_description").html("This country is home to the unique Imbondeiro tree.");
   $('#choice_1').html("Angola");
   $('#choice_2').html("Tonga");
   $('#choice_3').html("Afghanistan");
   $('#choice_4').html("Ecuador");
   $('#choice_1').addClass('answer');
        break;
      }
      case 5:{
        $('#question_page').toggleClass('hide');
        $('#ending_page').toggleClass('hide');
        break;
      }
    }
  }//<!--Africa-->
  if (content == "antarctica"){
    switch(question){
      case 2:{$('#question_flag').attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/2000px-Flag_of_New_Zealand.svg.png");
   $("#question_description").html("This country was the last country to ever be inhabited by humans.");
   $('#choice_1').html("Australia");
   $('#choice_2').html("Vatican City");
   $('#choice_3').html("New Zealand");
   $('#choice_4').html("Iceland");
   $('#choice_3').addClass('answer');
        break;
      }
      case 3:{$('#question_flag').attr("src","https://cdn.britannica.com/01/3101-050-1BB27B69/Flag-Norway.jpg");
   $("#question_description").html("This country is famous for its fjords!");
   $('#choice_1').html("Iceland");
   $('#choice_2').html("New Zealand");
   $('#choice_3').html("Greenland");
   $('#choice_4').html("Norway");
   $('#choice_4').addClass('answer');
        break;
      }
      case 4:{$('#question_flag').attr("src","https://cdn.britannica.com/69/5869-004-7D75CD05/Flag-Argentina.jpg");
   $("#question_description").html("This country is the highest meat-eating country in the whole world!");
   $('#choice_1').html("USA");
   $('#choice_2').html("France");
   $('#choice_3').html("Argentina");
   $('#choice_4').html("Germany");
   $('#choice_3').addClass('answer');
        break;
      }
      case 5:{
        $('#question_page').toggleClass('hide');
        $('#ending_page').toggleClass('hide');
        break;
      }
    }
  }//<!--Antarctica-->
  if (content=="gender"){
    switch(question){
      case 2:{
$('#question_flag').attr("src","https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/image8");
   $("#question_description").html("The circle, perfect and unbroken, represents the wholeness of these people.");
   $('#choice_1').html("Bigender");
   $('#choice_2').html("Panexual");
   $('#choice_3').html("Intersex");
   $('#choice_4').html("Heterosexual");
   $('#choice_3').addClass('answer');
        break;
      }
      case 3:{
$('#question_flag').attr("src","https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/image9");
   $("#question_description").html("It is the lack of sexual attraction to others, or a low interest in sexual activity, but it can mean different things to different people");
   $('#choice_1').html("Asexual");
   $('#choice_2').html("Heterosexual");
   $('#choice_3').html("Non-binary");
   $('#choice_4').html("Graysexual");
   $('#choice_1').addClass('answer');
        break;
      }
      case 4:{
$('#question_flag').attr("src","https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/image10");
   $("#question_description").html("It represents the way that these people can blend into the straight community and the gay community.");
   $('#choice_1').html("Bisexual");
   $('#choice_2').html("Asexual");
   $('#choice_3').html("Heterosexual");
   $('#choice_4').html("Pansexual");
   $('#choice_1').addClass('answer');
        break;
      }
      case 5:{
$('#question_flag').attr("src","https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/image11");
   $("#question_description").html("They may refer to themselves as gender-blind, asserting that gender and sex are not determining factors in their romantic or sexual attraction to others.");
   $('#choice_1').html("Bigender");
   $('#choice_2').html("Bisexual");
   $('#choice_3').html("Transgender");
   $('#choice_4').html("Pansexual");
   $('#choice_4').addClass('answer');
        break;
      }
      case 6:{
$('#question_flag').attr("src","https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/image12");
   $("#question_description").html("This refers to a woman who has a romantic and/or sexual orientation toward women.");
   $('#choice_1').html("Transgender");
   $('#choice_2').html("Lesbian");
   $('#choice_3').html("Heterosexual");
   $('#choice_4').html("Bisexual");
   $('#choice_2').addClass('answer');
        break;
      }
      case 7:{
$('#question_flag').attr("src","https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/image15");
   $("#question_description").html("This is for those most viewed as men attracted to women and women attracted to men.");
   $('#choice_1').html("Heterosexual");
   $('#choice_2').html("Bisexual");
   $('#choice_3').html("Transgender");
   $('#choice_4').html("Graysexual");
   $('#choice_1').addClass('answer');
        break;
      }
      case 8:{
$('#question_flag').attr("src","https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/bigender-pride-flag-1");
   $("#question_description").html("This is for a person having or experiencing two different genders of any combination.");
   $('#choice_1').html("Bigender");
   $('#choice_2').html("Panexual");
   $('#choice_3').html("Intersex");
   $('#choice_4').html("Heterosexual");
   $('#choice_1').addClass('answer');
        break;
      }
      case 9:{
$('#question_flag').attr("src","https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/transgender");
   $("#question_description").html("This people have a gender identity or gender expression that differs from the sex that they were assigned at birth.");
   $('#choice_1').html("Pansexual");
   $('#choice_2').html("Bisexual");
   $('#choice_3').html("Transgender");
   $('#choice_4').html("Bigender");
   $('#choice_3').addClass('answer');
        break;
      }
      case 10:{
$('#question_flag').attr("src","https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/Grey-asexuality-flag");
   $("#question_description").html("This is used to describe a person who identifies themselves asexual but does not fall into one of the primary kinds of asexuality.");
   $('#choice_1').html("Graysexual");
   $('#choice_2').html("Bigender");
   $('#choice_3').html("Asexual");
   $('#choice_4').html("Pansexual");
   $('#choice_1').addClass('answer');
        break;
      }
      case 11:{
$('#question_flag').attr("src","https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/Genderflux-Pride-Flag");
   $("#question_description").html("This is for a catch-all phrase for gender identities where an individual's gender or sense of the intensity of their gender changes over time.");
   $('#choice_1').html("Transgender");
   $('#choice_2').html("Pansexual");
   $('#choice_3').html("Bigender");
   $('#choice_4').html("Genderflux");
   $('#choice_4').addClass('answer');
        break;
      }
      case 12:{
$('#question_flag').attr("src","https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/image16");
   $("#question_description").html("This is for cisgender people who supports equal civil rights, gender equality, LGBT social movements, and challenges homophobia, biphobia and transphobia.");
   $('#choice_1').html("Bigender");
   $('#choice_2').html("Transgender");
   $('#choice_3').html("Straight Ally");
   $('#choice_4').html("Asexual");
   $('#choice_3').addClass('answer');
        break;
      }
      case 13:{
        $('#question_page').toggleClass('hide');
        $('#ending_page').toggleClass('hide');
        break;
      }
    }
  }
}

//Ending Page Logic
function finishedYesButton(){
 $('#finished_yes').on('click', function(){
   $('#ending_page').toggleClass('hide');
   $('#home_page').toggleClass('hide');
   $('#fact_play').removeClass('country');
   question = 1;
 });
};

function finishedNoButton(){
 $('#finished_no').on('click', function(){
   $('#ending_page').toggleClass('hide');
   $('#welcome_page').toggleClass('hide');
   $('#start_button').toggleClass('hide');
   $('#next_button').toggleClass('hide');
   $('.start_template').removeClass('inactive');
   $('#templates').toggleClass('hide');
   $('#start_text').toggleClass('hide');
   $('.active_profile').removeClass('active_profile');
   $('#fact_play').removeClass('country');
   question = 1;
 });
};


 $(document).ready(function(){
  getStarted();
  profileClickHandler();
  nextButton();
  countryButton();
  genderButton();
  factPlayButton();
  factBackButton();
  countryBackButton();
  homeBackButton();
   
  //Question Buttons
  questionChoice();
  continueButton();
   
  //Continent Buttons
  asiaButton();
  namericaButton();
  samericaButton();
  australiaButton();
  europeButton();
  africaButton();
  antarcticaButton();
   
  //Gender Page Buttons
  genderPlayButton();
  genderBackButton();
   
  //Ending Page Buttons
  finishedYesButton();
  finishedNoButton();
 });