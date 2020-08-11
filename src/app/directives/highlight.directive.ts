import { Directive, ElementRef, Renderer2, HostListener  } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

    constructor(
        private el: ElementRef,         // Use this API as the last resort when direct access to DOM is needed.
        private renderer: Renderer2     // By default, Angular renders a template into DOM.
    ) { }

    /** Listen Event 'mouseenter' */
    @HostListener( 'mouseenter' ) onMouseEnter() {
      this .renderer .addClass( this .el .nativeElement, 'highlight' );
    }
    /** Listen Event 'mouseleave' */
    @HostListener( 'mouseleave' ) onMouseLeave() {
      this .renderer .removeClass( this .el .nativeElement, 'highlight' );
    }

}
