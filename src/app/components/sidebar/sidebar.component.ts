import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { ISystemConcepts } from './../../interfaces/system-concepts.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('sidebarTrigger', [
      // To add a cool "enter" animation for the sidebar
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-in', style({ transform: 'translateY(0%)' }))
      ]),

      // To define animations based on trigger actions
      state('open', style({ transform: 'translateX(0%)' })),
      state('close', style({ transform: 'translateX(-92%)' })),
      transition('open => close', [
        animate('300ms ease-in')
      ]),
      transition('close => open', [
        animate('300ms ease-out')
      ])
    ])
  ]
})
export class SidebarComponent implements OnInit {
  @Input() showsSidebar = true;
  @Input() sections: ISystemConcepts[] = [];
  @Output() onSelection = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  private closeSidebar() { this.showsSidebar = false; }

  onTargetContentClick(targetString: string | undefined, event: Event) {
    this.onSelection.emit(targetString);
    this.closeSidebar();
  }



}
