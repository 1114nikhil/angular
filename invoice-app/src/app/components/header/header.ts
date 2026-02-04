import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { SidebarService } from '../../services/sidebar.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonModule, AvatarModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  sidebarService = inject(SidebarService);
  languageService = inject(LanguageService);
}
