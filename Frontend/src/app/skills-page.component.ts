import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface SkillCategory {
  readonly name: string;
  readonly items: readonly string[];
}

const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    name: 'Languages',
    items: ['Python', 'Golang', 'Angular', 'Typescript', 'SQL'],
  },
  {
    name: 'Frameworks',
    items: ['FastAPI', 'DBT', 'Spark', 'Dagster', 'Opentofu'],
  },
  {
    name: 'Data & Cloud',
    items: ['Google Cloud', 'RestAPI', 'Kafka', 'Snowflake', 'Kubernetes'],
  },
  {
    name: 'Practices',
    items: ['Test Driven Development', 'CI/CD', 'Observability', 'Microservices', 'Distributed Systems'],
  },
];

@Component({
  selector: 'app-skills-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section aria-label="Skills output" class="space-y-3">
      <p class="text-xs text-green-500 sm:text-sm">
        visitor@portfolio:~$
        <span class="ml-1">ls -la ./skills/</span>
      </p>

      <div class="mt-2 grid gap-3 sm:grid-cols-2">
        @for (category of categories; track category.name) {
          <div class="border border-green-500/30 rounded-md px-3 py-2 bg-black/40">
            <p class="text-green-300 font-semibold mb-1">
              drwxr-xr-x
              <span class="ml-1">{{ category.name.toLowerCase() }}/</span>
            </p>
            <ul class="text-green-200 text-sm space-y-0.5">
              @for (item of category.items; track item) {
                <li class="flex gap-2">
                  <span class="text-green-500">-</span>
                  <span>{{ item }}</span>
                </li>
              }
            </ul>
          </div>
        }
      </div>

      <div class="mt-5 border-t border-green-500/30 pt-3 text-xs sm:text-sm text-green-400">
        <p>
          visitor@portfolio:~$
          <button
            class="ml-1 underline decoration-dotted underline-offset-4 hover:text-green-200"
            routerLink="/"
            type="button"
          >
            whoami
          </button>
        </p>
      </div>
    </section>
  `,
})
export class SkillsPageComponent {
  protected readonly categories = SKILL_CATEGORIES;
}

