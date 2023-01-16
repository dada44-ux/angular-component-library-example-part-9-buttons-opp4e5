import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CardType, FlipAxis, OverlaySidePanelStyle, OverlaySidePanelService, ButtonColor, ButtonSize, ButtonShape, ButtonStyle } from '../../library/components';

import { DashboardSidePanelComponent } from './dashboard-side-panel/dashboard-side-panel.component';
import { DashboardSidePanelMoreComponent } from './dashboard-side-panel-more/dashboard-side-panel-more.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  public CardType = CardType;
  public FlipAxis = FlipAxis;
  public OverlaySidePanelStyle = OverlaySidePanelStyle;
  public ButtonColor = ButtonColor;
  public ButtonSize = ButtonSize;
  public ButtonStyle = ButtonStyle;
  public ButtonShape = ButtonShape;

  constructor(
    private _overlaySidePanelService: OverlaySidePanelService
  ) { }

  public showMore(): void {
    this._overlaySidePanelService.setContent(DashboardSidePanelComponent);
    this._overlaySidePanelService.show();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this._overlaySidePanelService.setContent(DashboardSidePanelComponent);
      this._overlaySidePanelService.show();
    });
  }

  public showEvenMore(): void {
    this._overlaySidePanelService.setContent(DashboardSidePanelMoreComponent);
    this._overlaySidePanelService.show();
  }
}