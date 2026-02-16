import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ExperienceEntry {
  readonly company: string;
  readonly role: string;
  readonly period: string;
  readonly bullets: readonly string[];
}

const EXPERIENCE: readonly ExperienceEntry[] = [
  {
    company: 'Rewe Group',
    role: 'Software & Data Engineer',
    period: '2023 — Present',
    bullets: [
      'Worked mainly on two core products: Reducing food waste and shelf product optimization.',
      'Scaled and automated data pipelines to process all necessary data for the products.',
      'Built the backend to connect with other microservices and published data synchronously and asynchronously',
      'Led migration of legacy services towards event-driven architecture.',
    ],
  },
  {
    company: 'Remberg',
    role: 'Data Engineer',
    period: '2023',
    bullets: [
      'Implemented data pipeline service for customer-facing dashboard.',
      'Improved data quality with implementing WAP-Pattern and identifying business critial data tests.',
      'Helped Sales and Solution team make data-driven decisions.',
    ],
  },
  {
    company: 'UnlikeAny',
    role: 'Data Engineer & Analyst',
    period: '2022 - 2023',
    bullets: [
      'Implemented data pipeline service for customer-facing dashboard.',
    ],
  },
  {
    company: 'Flaschenpost',
    role: 'Data Analyst',
    period: '2021',
    bullets: [
      'Implemented data pipeline service for customer-facing dashboard.',
    ],
  },
];

@Component({
  selector: 'app-experience-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section aria-label="Experience log output" class="space-y-3">
      <p class="text-xs text-green-500 sm:text-sm">
        visitor@portfolio:~$
        <span class="ml-1">cat experience.log</span>
      </p>

      <div class="mt-2 space-y-3 text-sm sm:text-base">
        @for (entry of experience; track entry.company) {
          <article class="border border-green-500/30 rounded-md px-3 py-2 bg-black/40">
            <header class="mb-1">
              <p class="text-green-300 font-semibold">
                [{{ entry.period }}] {{ entry.role }} @ {{ entry.company }}
              </p>
            </header>
            <ul class="text-green-200 space-y-1">
              @for (line of entry.bullets; track line) {
                <li class="flex gap-2">
                  <span class="text-green-500">•</span>
                  <span>{{ line }}</span>
                </li>
              }
            </ul>
          </article>
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
export class ExperiencePageComponent {
  protected readonly experience = EXPERIENCE;
}

