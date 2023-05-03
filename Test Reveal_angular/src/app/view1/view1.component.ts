import { Component, ElementRef, ViewChild } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component {
  @ViewChild('revealView')
  public el!: ElementRef;

  public ngAfterViewInit(): void {
    $.ig.RevealSdkSettings.setBaseUrl("https://samples.revealbi.io/upmedia-backend/reveal-api/");
    $.ig.RVDashboard.loadDashboard("Sales", (dashboard) => {
      var revealView = new $.ig.RevealView("#revealView");
      revealView.dashboard = dashboard;

      var revealView1 = new $.ig.RevealView("#revealView1");
      revealView1.dashboard = dashboard;
    });
  }
}
