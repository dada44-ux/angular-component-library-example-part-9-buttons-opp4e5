import { Component, OnInit } from '@angular/core';

import { ButtonColor, ButtonSize, ButtonStyle, ButtonShape } from '../../../library/components';

@Component({
  selector: 'app-dashboard-side-panel',
  templateUrl: './dashboard-side-panel.component.html',
  styleUrls: ['./dashboard-side-panel.component.css']
})
export class DashboardSidePanelComponent implements OnInit {
  public ButtonColor = ButtonColor;
  public ButtonSize = ButtonSize;
  public ButtonStyle = ButtonStyle;
  public ButtonShape = ButtonShape;

  constructor() { }

  ngOnInit() {
  }

}