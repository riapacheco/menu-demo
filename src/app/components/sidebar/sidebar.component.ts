import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  showsSidebar = false;
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

  onTargetContentClick(targetString: string, event: Event) {
    console.log(targetString);
  }

}
