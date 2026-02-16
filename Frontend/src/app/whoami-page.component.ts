import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-whoami-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section aria-label="Whoami output" class="space-y-3">
      <p class="text-xs text-green-500 sm:text-sm">
        visitor@portfolio:~$
        <span class="ml-1">whoami</span>
      </p>

      <div class="space-y-1">
        <p class="text-green-100 font-semibold text-lg sm:text-xl">
          Yannik Sacherer
        </p>
        <p class="text-green-300">
          Software &amp; Data Engineer
        </p>
      </div>

      <ul class="mt-3 space-y-1 text-green-200">
        <li class="flex gap-2">
          <span class="text-green-500">➜</span>
          <span>Building scalable software with a focus on data-heavy applications</span>
        </li>
        <li class="flex gap-2">
          <span class="text-green-500">➜</span>
          <span>Helping businesses and organisations to make data-driven decisions</span>
        </li>
        <li class="flex gap-2">
          <span class="text-green-500">➜</span>
          <span>Passionate about distrubuted system architecture &amp; technlogical disruptions</span>
        </li>
      </ul>

      <div class="mt-4 space-y-1 text-green-300">
        <p class="text-xs sm:text-sm">
          visitor@portfolio:~$
          <span class="ml-1">cat links.txt</span>
        </p>
        <p class="space-x-4">
          <a
            href="https://github.com/yannik207"
            target="_blank"
            rel="noopener noreferrer"
            class="underline decoration-dotted underline-offset-4 hover:text-green-200"
            >[GitHub]</a
          >
          <a
            href="https://www.linkedin.com/in/yannik-sacherer-801697180/"
            target="_blank"
            rel="noopener noreferrer"
            class="underline decoration-dotted underline-offset-4 hover:text-green-200"
            >[LinkedIn]</a
          >
          <a
            href="mailto:yannik@sacherer.io"
            target="_blank"
            rel="noopener noreferrer"
            class="underline decoration-dotted underline-offset-4 hover:text-green-200"
            >[Email]</a
          >
        </p>
      </div>

      <div class="mt-5 border-t border-green-500/30 pt-3 text-xs sm:text-sm text-green-400 space-y-1">
        <p>
          visitor@portfolio:~$
          <button
            class="ml-1 underline decoration-dotted underline-offset-4 hover:text-green-200"
            routerLink="/skills"
            type="button"
          >
            ls -la ./skills/
          </button>
        </p>
        <p>
          visitor@portfolio:~$
          <button
            class="ml-1 underline decoration-dotted underline-offset-4 hover:text-green-200"
            routerLink="/experience"
            type="button"
          >
            cat experience.log
          </button>
        </p>
      </div>
    </section>
  `,
})
export class WhoamiPageComponent {}

