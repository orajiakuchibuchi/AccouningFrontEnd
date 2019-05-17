import { SharedModule } from "src/app/shared/shared.module";
import { RouterTestingModule } from "@angular/router/testing";
import { ChecklistComponent } from "./checklist.component";
import { ChecklistService } from "./checklist.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import {
  ComponentFixture,
  TestBed,
  async,
  inject
} from "@angular/core/testing";
import { ClickEventArgs } from "@syncfusion/ej2-navigations";

describe("ChecklistComponent", () => {
  let component: ChecklistComponent;
  let fixture: ComponentFixture<ChecklistComponent>;
  let args: ClickEventArgs;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [ChecklistComponent],
      providers: [ChecklistService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Should be created", () => {
    expect(component).toBeTruthy();
  });
  it("Should be called clickHandler", () => {
    spyOn(component, "clickHandler");
    component.clickHandler(args);
    fixture.detectChanges();
    expect(component.clickHandler).toHaveBeenCalled();
  });
});
