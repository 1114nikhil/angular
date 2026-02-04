import { Component, inject } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  sidebarService = inject(SidebarService);
  languageService = inject(LanguageService);
}
