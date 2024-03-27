import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { translateServiceStub } from '@fepweb/shared';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppComponent, translateServiceStub],
    });

    component = TestBed.inject(AppComponent);
  });

  test('should be created', () => {
    expect(component).toBeTruthy();
  });
});
