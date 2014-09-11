/*!
 * @description partial implementation of jQuery UI Draggable widget
 * @author fsjohnhuang
 * @version v0.1
 */
;(function(exports){
	/*
	 * @param {HTMLElement} triggerEl, trigger dragging action when this element occurs mousedown event.
	 * @param {PlainObject} [opts], optional settings
	 * 		  {Array{HTMlElement}} draggableEls=false
	 * 		  {DOMString} axis=false
	 * 		  {Array} containment=false, ex. [x1,y1,x2,y2]
	 * 		  {unsigned Int32} delay=0
	 * 		  {unsigned Int32} distance=0
	 * 		  {PlainObject} cursorAt=false, ex. {left: 10, bottom: 5}
	 * 		  {Boolean} stack=false
	 * 		  {Boolean} iframeFix=false
	 * 		  {String|HTMLElement} helper='orig', value range is 'orig','clone', HTMLElement
	 * 		  {unsigned Int32} snapTolerance=0
	 * 		  {Array} grid=false, ex. [x,y]
	 */
	var DnD = exports.Draggable = function(triggerEl, opts){
		if (this instanceof triggerEl){
			return new DnD(triggerEl, opts);
		}

		opts = opts || {};
	};	
	DnD.prototype.enable = function(){};
	DnD.prototype.disable = function(){};
	DnD.prototype.on = function(evtName, handler){};
	DnD.prototype.off = function(evtName, handler){};
}(window));
