import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  visible = signal(false);
  isMobile = signal(false);

  constructor() {
    if (typeof window !== 'undefined') {
      this.checkScreenSize();
      window.addEventListener('resize', () => this.checkScreenSize());
    }
  }

  checkScreenSize() {
      const isMobile = window.innerWidth < 768;
      this.isMobile.set(isMobile);
      // Default open on desktop if not already set manually? 
      // Actually, if we resize from mobile to desktop, should we auto-open?
      // User might prefer it. Let's keep it simple: Just init logic.
      if (!isMobile && !this.visible()) {
         // Optional: Auto open on desktop load. 
         // But resizing might result in "Closed" desktop sidebar (Collapsed). That's fine.
         // Previous logic: if (window.innerWidth > 768) this.visible.set(true);
      }
      // Restore initial Desktop Open logic only on first load? 
      // The previous constructor loop:
      // if (window.innerWidth > 768) { this.visible.set(true); } 
      // We can keep that implicit or make it explicit here.
      // Let's just strict set isMobile.
  }

  toggle() {
    this.visible.update((v) => !v);
  }

  close() {
    this.visible.set(false);
  }
}
