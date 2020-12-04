import { Component, ViewChild, TemplateRef } from '@angular/core';
import { NxMessageToastRef, NxMessageToastConfig, NxMessageToastService } from '@aposin/ng-aquila/message';

export const myCustomConfig: NxMessageToastConfig = {
  duration: 0,
  context: 'success',
  announcementMessage: 'Yay, you see a success message toast'
};

/**
* @title Custom Settings example
*/
@Component({
  templateUrl: './message-toast-custom-settings-example.html',
})
export class MessageToastCustomSettingsExampleComponent {

  @ViewChild('template') templateRef: TemplateRef<any>;
  toastRef: NxMessageToastRef;

  constructor(private messageToastService: NxMessageToastService) { }

  open() {
    this.toastRef = this.messageToastService.openFromTemplate(this.templateRef, myCustomConfig);
  }

  close() {
    if (this.toastRef) {
      this.toastRef.dismiss();
    }
  }
}