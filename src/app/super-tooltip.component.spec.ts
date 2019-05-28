import { TestBed, async } from '@angular/core/testing';
import { TooltipComponent } from './tooltip.component';

describe('TooltipComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TooltipComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TooltipComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'elements-hack-night'`, () => {
    const fixture = TestBed.createComponent(TooltipComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('elements-hack-night');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(TooltipComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to elements-hack-night!');
  });
});
