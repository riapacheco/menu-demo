import { Component, OnInit } from '@angular/core';

import { ISystemConcepts } from './../../interfaces/system-concepts.interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  showsTableOfContents = false;
  sections: ISystemConcepts[] = [
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

  ngOnInit(): void {}

  onSelect(targetString: string) {
    const targetLocation = document.getElementById(targetString);
    targetLocation?.scrollIntoView({ behavior: 'smooth' });
  }
}
