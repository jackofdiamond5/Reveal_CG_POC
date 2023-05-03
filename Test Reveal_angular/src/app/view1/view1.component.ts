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

  private setRevealTheme() {
    const style = window.getComputedStyle(this.el.nativeElement);
    const theme = new $.ig.RevealTheme();

    theme.regularFont = style.getPropertyValue('--ig-font-family');
    theme.mediumFont = theme.regularFont;
    theme.boldFont = theme.regularFont;

    theme.fontColor = style.getPropertyValue('--ig-surface-500-contrast');
    theme.isDark = theme.fontColor !== 'black';
    theme.dashboardBackgroundColor = `hsl(${style.getPropertyValue('--ig-gray-100')})`;
    theme.visualizationBackgroundColor = `hsl(${style.getPropertyValue('--ig-surface-500')})`;

    $.ig.RevealSdkSettings.theme = theme;
  }

  public ngAfterViewInit(): void {
    this.setRevealTheme();
    $.ig.RevealSdkSettings.setBaseUrl("https://samples.revealbi.io/upmedia-backend/reveal-api/");
    $.ig.RVDashboard.loadDashboard("Sales", (dashboard) => {
      var revealView = new $.ig.RevealView(this.el.nativeElement);
      revealView.dashboard = dashboard;

      var revealView1 = new $.ig.RevealView("#revealView1");
      revealView1.dashboard = dashboard;
    });
  }
}
