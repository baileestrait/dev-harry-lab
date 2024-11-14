$(()=> {
    
 console.log( "ready!" );
 
   //e can be the variable for "event", in some cases e can mean "error", so define that by err if using shortened variables
  
 $('#btnSubmit').on('click', (event)=> {
   event.preventDefault(); 
  
   console.log("User Name Value:", $('#inputUserName').val());  
   
   if($('#catRadio').is(':checked')){
     console.log("Radio Cat Value:", $('#catRadio').val()); 
   }
   
    if($('#dogRadio').is(':checked')){
     console.log("Radio Dog Value:", $('#dogRadio').val()); 
   }
   
    console.log("Selected Pet Name:",  $('#inputPetNames').find(":selected").val()); 
  
 });
  
  $("input[type=radio]").on("change", function () {
     let petRadio = $("input[type=radio]:checked").val(); // A or B

    if (petRadio === "Cat") {
      $("#inputPetNames")
        .empty()
        .append(`<option value="Socks">Socks</option>`)
        .append(`<option value="Kitty">Kitty</option>`)
        .append(`<option value="Pumpkin">Pumpkin</option>`);
      
    } else if (petRadio === "Dog") {
      $("#inputPetNames")
        .empty()
        .append(`<option value="Max">Max</option>`)
        .append(`<option value="Sadie">Sadie</option>`)
        .append(`<option value="Scout">Scout</option>`);
    } else {
      $("#inputPetNames")
        .empty()
        .append(`<option value="Max">Choose a Pet Name</option>`);
    }
  });
  
});