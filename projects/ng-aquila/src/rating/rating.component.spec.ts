import { By } from '@angular/platform-browser';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { Component, Type, ViewChild, ChangeDetectionStrategy, Directive } from '@angular/core';
import {NxRatingModule} from './rating.module';
import {NxRatingComponent} from './rating.component';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import * as axe from 'axe-core';
import { dispatchKeyboardEvent } from '../cdk-test-utils';
import { RIGHT_ARROW, ENTER, LEFT_ARROW } from '@angular/cdk/keycodes';

describe('NxRatingComponent', () => {
  let fixture: ComponentFixture<RatingTest>;
  let testInstance: RatingTest;
  let startLabel: HTMLSpanElement;
  let endLabel: HTMLSpanElement;
  let icons: HTMLElement[];
  let testComponent: NxRatingComponent;

  function createTestComponent(component: Type<RatingTest>) {
    fixture = TestBed.createComponent(component);
    fixture.detectChanges();
    testInstance = fixture.componentInstance;
    startLabel = fixture.nativeElement.querySelector('.nx-rating__label--start');
    endLabel = fixture.nativeElement.querySelector('.nx-rating__label--end');
    icons = Array.from(fixture.nativeElement.querySelectorAll('nx-icon'));
    testComponent = testInstance.rating;
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        NxRatingModule
      ],
      declarations: [
        SimpleRatingComponent,
        SimpleBindingRatingComponent,
        NgModelBindingRatingComponent,
        ReactiveBindingRatingComponent,
        RatingOnPushComponent,
        TemplateDrivenOnPushComponent
      ]
    }).compileComponents();
  }));

  function getIcons() {
    return fixture.debugElement.queryAll(By.css('nx-icon'));
  }

  function getSelectedStars() {
    return getIcons().filter(dbgEl => dbgEl.componentInstance.name === 'star');
  }

  function checkSelection(...expected: boolean[]) {
    expected.forEach((value, index) => {
      expect(testComponent.getIconName(index + 1)).toBe(value ? 'star' : 'star-o');
    });
  }

  function click(index: number) {
    icons[--index].click();
    fixture.detectChanges();
    tick();
  }

  describe('basic', () => {

    it('should display five unchecked stars in default', fakeAsync(() => {
      createTestComponent(SimpleRatingComponent);
      checkSelection(false, false, false, false, false);
    }));

    it('should render the labels correctly', fakeAsync(() => {
      createTestComponent(SimpleRatingComponent);

      expect(startLabel.textContent.trim()).toBe('poor');
      expect(endLabel.textContent.trim()).toBe('great');
    }));

    it('should handle clicking correctly', fakeAsync(() => {
      createTestComponent(SimpleRatingComponent);
      click(1);
      expect(testComponent.value).toBe(1);
      checkSelection(true, false, false, false, false);
      click(5);
      expect(testComponent.value).toBe(5);
      checkSelection(true, true, true, true, true);
      click(2);
      checkSelection(true, true, false, false, false);
      expect(testComponent.value).toBe(2);
    }));

    it('should not accept clicking in disabled mode', fakeAsync(() => {
      createTestComponent(SimpleRatingComponent);
      testComponent.disabled = true;
      click(1);
      expect(testComponent.value).toBe(0);
      checkSelection(false, false, false, false, false);
    }));

    it('should handle keyboard event RIGHT_ARROW and LEFT_ARROW correctly', () => {
      createTestComponent(SimpleRatingComponent);

      expect(testComponent.value).toBe(0);

      // dispatch the keyboard event on the first rating star
      dispatchKeyboardEvent(icons[0], 'keyup', RIGHT_ARROW);
      fixture.detectChanges();
      dispatchKeyboardEvent(icons[1], 'keyup', RIGHT_ARROW);
      fixture.detectChanges();
      expect(testComponent.value).toBe(2);

      dispatchKeyboardEvent(icons[1], 'keyup', LEFT_ARROW);
      fixture.detectChanges();
      expect(testComponent.value).toBe(1);
    });

    it('should emit rating value on keyboard event ENTER', () => {
      createTestComponent(SimpleRatingComponent);

      spyOn(testComponent.valueChange, 'emit');

      dispatchKeyboardEvent(icons[0], 'keyup', RIGHT_ARROW);
      fixture.detectChanges();
      dispatchKeyboardEvent(icons[0], 'keyup', ENTER);
      fixture.detectChanges();

      expect(testComponent.valueChange.emit).toHaveBeenCalledWith(1);
    });

  });

  describe('with nxValue binding', () => {

    it('should support simple binding over nxValue', fakeAsync(() => {
      createTestComponent(SimpleBindingRatingComponent);
      click(5);
      const simpleBinding = testInstance as SimpleBindingRatingComponent;
      expect(simpleBinding.theValue).toBe(5);
    }));
  });

  describe('with ngModel', () => {

    it('should support binding over ngModel', fakeAsync(() => {
      createTestComponent(NgModelBindingRatingComponent);
      click(5);
      const simpleBinding = testInstance as NgModelBindingRatingComponent;
      expect(simpleBinding.theValue).toBe(5);
    }));
  });

  describe('with reactive forms', () => {

    it('should support reactive forms', fakeAsync(() => {
      createTestComponent(ReactiveBindingRatingComponent);
      click(5);
      const simpleBinding = testInstance as ReactiveBindingRatingComponent;
      expect(simpleBinding.testForm.get('rating').value).toBe(5);
    }));

    it('should toggle disabled', () => {
      createTestComponent(ReactiveBindingRatingComponent);
      const instance = testInstance as ReactiveBindingRatingComponent;
      instance.testForm.controls.rating.disable();
      fixture.detectChanges();
      let outerSpanDisabled = fixture.nativeElement.querySelector('.nx-rating--disabled');
      expect(testInstance.rating.disabled).toBe(true);
      expect(outerSpanDisabled).toBeTruthy();

      instance.testForm.controls.rating.enable();
      fixture.detectChanges();
      outerSpanDisabled = fixture.nativeElement.querySelector('.nx-rating--disabled');
      expect(testInstance.rating.disabled).toBe(false);
      expect(outerSpanDisabled).toBeFalsy();
    });
  });

  describe('programmatic tests', () => {

    it('updates view on change of "disabled"', () => {
      createTestComponent(RatingOnPushComponent);
      let hasDisabledClass = fixture.nativeElement.querySelector('.nx-rating--disabled');
      expect(testInstance.rating.disabled).toBe(false);
      expect(hasDisabledClass).toBeFalsy();

      testInstance.rating.disabled = true;
      fixture.detectChanges();
      hasDisabledClass = fixture.nativeElement.querySelector('.nx-rating--disabled');
      expect(hasDisabledClass).toBeTruthy();
    });

    it('updates view on change of "negative"', () => {
      createTestComponent(RatingOnPushComponent);
      let hasNegativeClass = fixture.nativeElement.querySelector('.nx-rating--negative');
      expect(testInstance.rating.negative).toBe(false);
      expect(hasNegativeClass).toBeFalsy();

      testInstance.rating.negative = true;
      fixture.detectChanges();
      hasNegativeClass = fixture.nativeElement.querySelector('.nx-rating--negative');
      expect(hasNegativeClass).toBeTruthy();
    });

    it('updates view on value change', () => {
      createTestComponent(RatingOnPushComponent);
      // check how many stars are filled (=checked)
      let starsSelected = getSelectedStars();
      expect(testInstance.rating.value).toBe(2);
      expect(starsSelected.length).toBe(2);

      testInstance.rating.value = 4;
      fixture.detectChanges();
      starsSelected = getSelectedStars();
      expect(starsSelected.length).toBe(4);
    });

    it('updates view on template driven value set initially', fakeAsync(() => {
      createTestComponent(TemplateDrivenOnPushComponent);
      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      tick();
      const selectedStars = getSelectedStars();
      const rating = fixture.debugElement.query(By.css('nx-rating'));
      expect(testInstance.rating.value).toBe(2);
      expect(selectedStars.length).toBe(2);
    }));

    it('updates view on change of "startLabel"', fakeAsync(() => {
      createTestComponent(RatingOnPushComponent);
      let startLabelContent = fixture.nativeElement.querySelector('.nx-rating__label--start').textContent;
      expect(startLabelContent).toBe('startLabel');

      testInstance.rating.startLabel = 'newStartLabel';
      fixture.detectChanges();
      startLabelContent = fixture.nativeElement.querySelector('.nx-rating__label--start').textContent;
      expect(startLabelContent).toBe('newStartLabel');
    }));

    it('updates view on change of "endLabel"', fakeAsync(() => {
      createTestComponent(RatingOnPushComponent);
      let endLabelContent = fixture.nativeElement.querySelector('.nx-rating__label--end').textContent;
      expect(endLabelContent).toBe('endLabel');

      testInstance.rating.endLabel = 'newEndLabel';
      fixture.detectChanges();
      endLabelContent = fixture.nativeElement.querySelector('.nx-rating__label--end').textContent;
      expect(endLabelContent).toBe('newEndLabel');
    }));

    it('updates view on change of "ariaLabel"', fakeAsync(() => {
      createTestComponent(RatingOnPushComponent);
      let ariaLabel = fixture.nativeElement.querySelector('.nx-rating__icon').getAttribute('aria-label');
      expect(ariaLabel).toBe('1/5');

      testInstance.rating.ariaLabel = ['one', 'two', 'three', 'four', 'five'];
      fixture.detectChanges();
      ariaLabel = fixture.nativeElement.querySelector('.nx-rating__icon').getAttribute('aria-label');
      expect(ariaLabel).toBe('one');
    }));

  });

  describe('a11y', () => {

    it('has no accessibility violations', (done) => {
      createTestComponent(SimpleRatingComponent);
      fixture.detectChanges();

      axe.run(fixture.nativeElement, {}, (error: Error, results: axe.AxeResults) => {
        expect(results.violations.length).toBe(0);
        const violationMessages = results.violations.map(item => item.description);

        if (violationMessages.length) {
          console.log(violationMessages);
        }

        done();
      });
    });
  });
});

@Directive()
class RatingTest {
  @ViewChild(NxRatingComponent) rating;
}

@Component({
  template: `
    <nx-rating nxStartLabel="poor" nxEndLabel="great"></nx-rating>
  `
})
class SimpleRatingComponent extends RatingTest {
}

@Component({
  template: `
    <nx-rating [(nxValue)] = "theValue"></nx-rating>
  `
})
class SimpleBindingRatingComponent extends RatingTest {
  theValue;
}

@Component({
  template: `
    <nx-rating [(ngModel)] = "theValue"></nx-rating>
  `
})
class NgModelBindingRatingComponent extends RatingTest {
  theValue;
}

@Component({
  template: `
    <form [formGroup]="testForm">
      <nx-rating formControlName="rating"></nx-rating>
    </form>
  `
})
class ReactiveBindingRatingComponent extends RatingTest {
  testForm = new FormBuilder().group({
      rating: new FormControl()
    }
  );
}

@Component({
  template: `
    <nx-rating [nxValue]="currentValue" [nxStartLabel]="startLabel" [nxEndLabel]="endLabel"></nx-rating>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
class RatingOnPushComponent extends RatingTest {
  startLabel = 'startLabel';
  endLabel = 'endLabel';
  currentValue = 2;
}

@Component({
  template: `
    <nx-rating [(ngModel)]="ngModelValue"></nx-rating>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
class TemplateDrivenOnPushComponent extends RatingTest {
  ngModelValue = 2;
}