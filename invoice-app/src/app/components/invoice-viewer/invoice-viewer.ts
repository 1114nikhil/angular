import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'primeng/tabs';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TextareaModule } from 'primeng/textarea';
import { LanguageService } from '../../services/language.service';

interface Comment {
  name: string;
  date: Date;
  text: string;
}

interface InvoiceItem {
  item: string;
  description: string;
  unitPrice: number;
  quantity: number;
  total: number;
  details?: string[];
}

@Component({
  selector: 'app-invoice-viewer',
  standalone: true,
  imports: [TabsModule, CommonModule, FormsModule, TableModule, ButtonModule, TextareaModule],
  templateUrl: './invoice-viewer.html',
  styleUrl: './invoice-viewer.css'
})
export class InvoiceViewerComponent {
  languageService = inject(LanguageService);
  comments: Comment[] = [
    {
      name: 'RADWAN',
      date: new Date('2026-01-29T08:51:00'),
      text: 'xvxg'
    }
  ];

  invoiceItems: InvoiceItem[] = [
      {
          item: '8GB RAM',
          description: '8GB Memory',
          unitPrice: 5.00,
          quantity: 1,
          total: 5.00,
          details: [
              '2x Intel® Xeon® CPU E-4214 @2.2',
              'Space Win Touch',
              '100TB Bandwidth/mo',
              'Sophos XG Firewall',
              '1 Static IP',
              'Vmware horizon view server'
          ]
      }
  ];

  newCommentText: string = '';

  addComment() {
    if (!this.newCommentText.trim()) return;

    this.comments.push({
      name: 'RADWAN',
      date: new Date(),
      text: this.newCommentText
    });
    this.newCommentText = '';
  }
}
