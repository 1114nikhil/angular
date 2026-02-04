import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'primeng/tabs';

interface Comment {
  name: string;
  date: Date;
  text: string;
}

@Component({
  selector: 'app-invoice-viewer',
  standalone: true,
  imports: [TabsModule, CommonModule, FormsModule],
  templateUrl: './invoice-viewer.html',
  styleUrl: './invoice-viewer.css'
})
export class InvoiceViewerComponent {
  comments: Comment[] = [
    {
      name: 'RADWAN',
      date: new Date('2026-01-29T08:51:00'),
      text: 'xvxg'
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
