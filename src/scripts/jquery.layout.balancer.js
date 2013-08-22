/**
* Easily Browser through heirarchical list of taxonomies
* @lastModified 8 August 2013 12:19AM
* @author Vinay@artminister.com
* @url http://github.com/PebbleRoad/jquery-layout-balancer
*/
;(function($){

    /**
    * Layout balancer jQuery plugin 
    * # # #  =>  # #
    * # # ()    # # #
    *
    * @class layoutBalancer
    * @constructor
    */

    'use strict';

    $.layoutBalancer = function(el, options){


        /* 
         * To avoid scope issues, use 'base' instead of 'this'
         * to reference this class from internal events and functions.
         */

        var base = this;

        /**
         * Access to jQuery and DOM versions of element
         */

        base.$el = $(el);

        base.el = el;

        /**
         * Options
         * Extend Default options with data()
         */

        base.options = $.extend({}, $.layoutBalancer.defaultOptions, options, base.$el.data());


        /* 
         * Add a reverse reference to the DOM object
         */

        base.$el.data('layoutBalancer', base);


        /**
         * Children
         */

        base.$el.child = base.$el.children();


        /**
        * Initializes the Plugin
        * @method Init
        */

        base.init = function(){

            this.orphans = base.$el.child.length % base.options.columns;

            base.$el.child
                .slice(0,this.orphans)
                .addClass('orphan-column-'+this.orphans);


        };


        /**
         *  Initializer
         */

        base.init();

        /**
         * Destroy Method
         */
        
        base.destroy = function(){
           base.$el.child.removeClass(function(i, klass){
                return (klass.match (/\orphan-\S+/g) || []).join(' ');
           });
        };        


    };


    // Default Options

    $.layoutBalancer.defaultOptions = {
        columns: 3
    };


    /**
    * jQuery Plugin method
    * @method fn.layoutBalancer
    */

    $.fn.layoutBalancer = function(options){
        return this.each(function(){
            (new $.layoutBalancer(this, options));
        });
    };

    // This function breaks the chain, but returns
    // the layoutBalancer if it has been attached to the object.
    $.fn.getlayoutBalancer = function(){        
        this.data('layoutBalancer');
    };

    /**
     * Destroy
     */

    $.fn.destroylayoutBalancer = function(){    
        this.each(function(){
            $(this).data('layoutBalancer').destroy();
        })        
    };

})(jQuery, undefined);