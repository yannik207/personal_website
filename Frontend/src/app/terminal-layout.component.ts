import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-terminal-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div
      class="min-h-screen bg-gradient-to-b from-black via-black to-emerald-900/40 text-green-400 font-mono flex items-center justify-center px-4 py-8"
    >
      <div
        class="w-full max-w-4xl rounded-lg border border-green-500/40 bg-black/95 shadow-lg shadow-emerald-500/40 overflow-hidden"
        aria-label="Terminal window"
      >
        <header
          class="flex items-center justify-between px-3 py-2 bg-zinc-900 border-b border-green-500/40 text-xs text-green-300"
        >
          <div class="flex items-center gap-1.5">
            <span class="h-2 w-2 rounded-full bg-red-500/80"></span>
            <span class="h-2 w-2 rounded-full bg-yellow-500/80"></span>
            <span class="h-2 w-2 rounded-full bg-green-500/80"></span>
          </div>
          <span class="truncate">{{ title() }}</span>
        </header>

        <main class="px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base leading-relaxed">
          <router-outlet />
        </main>
      </div>
    </div>
  `,
})
export class TerminalLayoutComponent {
  readonly title = input<string>('visitor@portfolio: ~');
}

