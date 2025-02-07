import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // This can be pulled in via the config.
  public cardConfig = [
    {
      cardHeader: 'Enter Data',
      cardTitle: 'Data input tools',
      cardText:
        'Use this section to enter attendance and revenue and send to BC Parks. You can also view and edit past enteries.',
      navigation: 'enter-data',
    },
    {
      cardHeader: 'Export reports',
      cardTitle: 'Exporting Tools',
      cardText: 'Use this section to export raw data from the system.',
      navigation: 'export-reports',
    },
  ];
  constructor() {}
}
