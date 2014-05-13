(function(document){

  var inputName = 'unit-input__input';
  var inputBaseClass = inputName + '--base';

  var inputSelector =  '.' + inputName;
  var $baseForm = $('.unit-inputs');
  var $inputs = $(inputSelector);
  var multiplierLookup = {};

  $('.unit-input__input').each(function() {
    multiplierLookup[this.id] = this.getAttribute('data-multiplier');
  });


  $baseForm.on('keyup', inputSelector, function(e) {
    var baseValue = parseInt(this.value, 10);
    var baseMultiplier = multiplierLookup[this.id];

    $(this).addClass(inputBaseClass);

    $inputs.not(e.target).each(function(){
      var currentMultiplier = multiplierLookup[this.id];
      var value = baseValue * (currentMultiplier / baseMultiplier);
      var valueString = +value.toFixed(3);

      $(this).removeClass(inputBaseClass);

      // Null out values if the inputed value is 0
      this.value = (typeof baseValue == 'number' && baseValue !== 0 ? valueString : '');
    });

  });
}(document));
