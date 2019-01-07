import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinerListComponent } from './miner-list.component';

describe('MinerListComponent', () => {
  let component: MinerListComponent;
  let fixture: ComponentFixture<MinerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
