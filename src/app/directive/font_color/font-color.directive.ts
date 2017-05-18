
import { Directive, ElementRef, Input, DoCheck } from '@angular/core';

@Directive({
    selector: '[myHighlight]'
})
export class HighlightDirective implements DoCheck {
    @Input('myHighlight') highlightColor: string;
    constructor(private el: ElementRef) {
    }
    ngDoCheck() {
        this.highlight(this.highlightColor);
    }
    private highlight(color: string) {
        this.el.nativeElement.style.color = color;
    }
}


