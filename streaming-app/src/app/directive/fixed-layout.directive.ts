import { Directive, AfterViewInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[fixed-layout]'
})
export class FixedLayoutDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  private fixLayoutToAvailableHeight() {
    (this.el.nativeElement as HTMLElement).style.height = `${window.innerHeight - 100}px`;
  }

  ngAfterViewInit() {
    this.fixLayoutToAvailableHeight();
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.fixLayoutToAvailableHeight();
  }
}
