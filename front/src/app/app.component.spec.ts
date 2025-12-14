import { AppComponent, HeaderType } from './app.component';

describe('AppComponent (basic)', () => {
  it('HeaderType enum exists and has expected keys', () => {
    expect(HeaderType).toBeDefined();
    expect(HeaderType.HomeHeader).toBeDefined();
    expect(HeaderType.LoginHeader).toBeDefined();
    expect(HeaderType.MddHeader).toBeDefined();
  });

  it('getActiveComponent returns provided component from route', () => {
    const mockRouteWithComponent: any = { routeConfig: { component: 'MyComp' }, firstChild: null };
    const comp = new AppComponent({} as any, {} as any).getActiveComponent(mockRouteWithComponent);
    expect(comp).toBe('MyComp');
  });

  it('getActiveComponent recurses into firstChild when needed', () => {
    const nested: any = { routeConfig: null, firstChild: { routeConfig: { component: 'NestedComp' }, firstChild: null } };
    const comp = new AppComponent({} as any, {} as any).getActiveComponent(nested);
    expect(comp).toBe('NestedComp');
  });
});
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'front'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('front');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('front app is running!');
  // });
});
