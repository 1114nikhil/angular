import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { SidebarService } from '../../services/sidebar.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, DrawerModule, ButtonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class SidebarComponent {
    sidebarService = inject(SidebarService);
    languageService = inject(LanguageService);
}
