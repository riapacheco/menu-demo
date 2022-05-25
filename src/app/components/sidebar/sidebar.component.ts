import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

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
  showsSidebar = true;
  sections = [
    {
      sectionHeading: 'The Evolving State of SE',
      sectionTarget: 'theEvolvingStateOfSe',
      sectionContents: [
        {
          title: 'Definitions and Terms',
          target: 'definitionsAndTerms',
        },
        {
          title: 'Root Cause Analysis',
          target: 'rootCauseAnalysis',
        },
        {
          title: 'Industry and Government',
          target: 'industryAndGovernment',
        },
        {
          title: 'Engineering Education',
          target: 'engineeringEducation',
        },
        {
          title: 'Chapter Exercises',
          target: 'chapterExercises'
        }
      ]
    },
    {
      sectionHeading: 'Attributes and Properties',
      sectionTarget: 'attributesAndProperties',
      sectionContents: [
        {
          title: 'Definitions and Terms',
          target: 'defintionAndTerms',
        },
        {
          title: 'User Roles and Missions',
          target: 'userRolesAndMissions',
        },
        {
          title: 'Defining User Missions',
          target: 'definingUserMissions',
        },
        {
          title: 'Problem, Opportunity, Solution',
          target: 'problemOpportunitySolution',
        },
        {
          title: 'Spaces',
          target: 'spaces'
        },
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  private closeSidebar() { this.showsSidebar = false; }

  onTargetContentClick(targetString: string, event: Event) {
    console.log(targetString);
    this.closeSidebar();
  }



}
