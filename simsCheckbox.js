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
    
    //settings
    var settings = $.extend({
    
        //selector height
        height: 'auto',
        
        //element
        element: "li",
    
        //checkbox class
        checkboxClass: "btn btn-block btn-social",
        
        //title icon
        titleIcon: "square-o",

        //unchecked class
        uncheckedClass: "btn-default",
    
        //checked class
        checkedClass: "btn-warning",
        
        //select/unselect all button
        selectAllBtn: false,

        //select/unselect text
        selectAllText: 'Select/Unselect All',

    }, options);

    //set some css for the selector
    selectorElt.css({'margin': '0', 'padding': '0'});
    
    //set the height of the selector first
    if(settings.height == 'auto') selectorElt.css('height', 'auto');
    else selectorElt.css({'height': settings.height, 'overflow': 'auto'});

    //add an identifier class to the elements
    selectorElt.find(settings.element).addClass('sims-selectable');
    
    //get elements and handle
    selectorElt.find(settings.element).each(function(i){
      _elt=$(this), _title=_elt.text();
      
      //add checkbox class
      _elt.addClass(settings.checkboxClass);
      
      //add checked or unchecked class
      if(_elt.hasClass('checked')) _elt.addClass(settings.checkedClass).html('<i class="fa fa-fw fa-check-' + settings.titleIcon + '"></i> ' + _title);
      else _elt.addClass(settings.uncheckedClass).html('<i class="fa fa-fw fa-' + settings.titleIcon + '"></i> ' + _title);
      
      //set click event
      _elt.off('click').on('click', function (e) {
        e.preventDefault();

        //toggle the item
        $(this).toggleClass(settings.uncheckedClass).toggleClass(settings.checkedClass).find('i').toggleClass('fa-' + settings.titleIcon).toggleClass('fa-check-' + settings.titleIcon);

      });
    });
    
    //set checkAll button
    if(settings.selectAllBtn)
    {
      //test all checked or not
      var allChecked = (selectorElt.find(settings.element).length == selectorElt.find(settings.element + '.checked').length) ? true : false;
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
