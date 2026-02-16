import { Routes } from '@angular/router';
import { TerminalLayoutComponent } from './terminal-layout.component';
import { WhoamiPageComponent } from './whoami-page.component';
import { SkillsPageComponent } from './skills-page.component';
import { ExperiencePageComponent } from './experience-page.component';

export const routes: Routes = [
  {
    path: '',
    component: TerminalLayoutComponent,
    children: [
      {
        path: '',
        component: WhoamiPageComponent,
      },
      {
        path: 'skills',
        component: SkillsPageComponent,
      },
      {
        path: 'experience',
        component: ExperiencePageComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

