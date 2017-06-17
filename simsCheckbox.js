/*!
 * SmartClass Checkbox plugin
 * ===================================
 *
 * simsCheckbox.js
 * developed by Mert Simsek (simsek97@gmail.com)
 * for SmartClass Project [www.smartclass.us]
 * -------------------------
 */

(function($) {

  // vars
  var _mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);

  // Plugin init
  $.fn.simsCheckbox = function(options) {
    
    var selectorElt = this;
    
    // Render options
    var settings = $.extend({
    
        //fix height
        height: '',
        
        //element
        element: "li",
    
        //File source to be loaded (e.g: ajax/src.php)
        checkboxClass: "btn btn-block btn-social",
        
        //title icon
        titleIcon: "square-o",

        //unchecked class
        uncheckedClass: "btn-default",
    
        //checked class
        checkedClass: "btn-warning",
        
        //select/unselect all button
        selectAllBtn: true,

        //select/unselect text
        selectAllText: 'Select/Unselect All',

        //callbacks
        onLoadStart: function (box) {}, //Right after the button has been clicked
    
        onLoadDone: function (box) {} //When the source has been loaded
    
    }, options);

    //set some css for the selector
    selectorElt.css({'margin': '0', 'padding': '0'});
    
    //make height of the selector first
    if(settings.height != '') selectorElt.css({'height': settings.height, 'overflow': 'auto'});

    //add an identifier class to the elements
    selectorElt.find(settings.element).addClass('sims-selectable');
    
    //get elements and handle
    selectorElt.find(settings.element).each(function(i){
      _elt=$(this), _title=_elt.text();
      
      //add checkbox class
      _elt.addClass(settings.checkboxClass);
      
      //add checked or unchecked class
      if(_elt.is('checked')) _elt.addClass(settings.checkedClass);
      else _elt.addClass(settings.uncheckedClass);
      
      //set title icon
      _elt.html('<i class="fa fa-fw fa-' + settings.titleIcon + '"></i> ' + _title);
      
      //set click event
      _elt.off('click').on('click', function (e) {
        e.preventDefault();

        //toggle the item
        $(this).toggleClass(settings.uncheckedClass).toggleClass(settings.checkedClass).find('i').toggleClass('fa-' + settings.titleIcon).toggleClass('fa-check-' + settings.titleIcon);

    		//get classess for selected groups
        //fnCheckMyClassGroups();
		  });         

    });
    
    //set checkAll button
    if(settings.selectAllBtn)
    {
      //test all checked or not
      var allChecked = (selectorElt.find(settings.element).length == selectorElt.find(settings.element).is('checked').length) ? true : false;
      var selectAllBtnElt = $( '<' + settings.element +  ' class="sims-btn-select-all"></' + settings.element + '>' ).addClass(settings.checkboxClass + ' ' + (allChecked ? settings.checkedClass : settings.uncheckedClass)).html('<i class="fa fa-fw fa-' + (allChecked ? 'check-' : '') + settings.titleIcon + '"></i> '  + settings.selectAllText);
      
      selectorElt.append( selectAllBtnElt );
      
      //set click event for the selectAll button
      selectorElt.find('.sims-btn-select-all').off('click').on('click', function (e) {
        e.preventDefault();

        //toggle the item
        $(this).toggleClass(settings.uncheckedClass).toggleClass(settings.checkedClass).find('i').toggleClass('fa-' + settings.titleIcon).toggleClass('fa-check-' + settings.titleIcon);

        //if all items are selected then select-all button is checked
        //if one of the items is unselected then select-all button is unchecked
  			if( $(this).hasClass("btn-default") )
  			{
  				selectorElt.find(settings.element + '.sims-selectable').addClass(settings.uncheckedClass).removeClass(settings.checkedClass).find('i').addClass('fa-' + settings.titleIcon).removeClass('fa-check-' + settings.titleIcon);
  			}
  			else
  			{
  				selectorElt.find(settings.element + '.sims-selectable').removeClass(settings.uncheckedClass).addClass(settings.checkedClass).find('i').removeClass('fa-' + settings.titleIcon).addClass('fa-check-' + settings.titleIcon);
  			}
		  });
    }    
  }
})(jQuery);
