import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {DirectiveComponent} from './directive.component';
import { MatCardModule } from '@angular/material/card';
import {NgxLocalStorageModule} from 'ngx-localstorage';

describe('DirectiveComponent', () => {
  let component: DirectiveComponent;
  let fixture: ComponentFixture<DirectiveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveComponent],
      imports: [MatCardModule, NgxLocalStorageModule.forRoot()]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
