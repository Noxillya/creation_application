import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../models/book.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book implements OnInit {
  books: BookModel[] = [];
  error = '';

  newBook: BookModel = {
    title: '',
    author: '',
    year: new Date().getFullYear(),
    category: ''
  };

  editingId: number | null = null;
  editBook: BookModel = {
    title: '',
    author: '',
    year: new Date().getFullYear(),
    category: ''
  };

  constructor(
    private service: BookService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.service.getAll().subscribe({
      next: (data) => {
        this.books = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
        this.error = 'Impossible de charger les livres';
        this.cdr.detectChanges();
      },
    });
  }

  save(): void {
    this.error = '';

    this.service.create(this.newBook).subscribe({
      next: () => {
        this.newBook = {
          title: '',
          author: '',
          year: new Date().getFullYear(),
          category: ''
        };
        this.load();
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
        this.error = 'Création impossible';
        this.cdr.detectChanges();
      }
    });
  }

  startEdit(b: BookModel): void {
    if (!b.id) return;
    this.editingId = b.id;
    this.editBook = { ...b };
    this.cdr.detectChanges();
  }

  cancelEdit(): void {
    this.editingId = null;
    this.cdr.detectChanges();
  }

  update(): void {
    if (this.editingId === null) return;

    this.service.update(this.editingId, this.editBook).subscribe({
      next: () => {
        this.editingId = null;
        this.load();
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
        this.error = 'Modification impossible';
        this.cdr.detectChanges();
      }
    });
  }

  remove(id?: number): void {
    if (!id) return;
    this.service.delete(id).subscribe({
      next: () => {
        if (this.editingId === id) this.editingId = null;
        this.load();
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
        this.error = 'Suppression impossible';
        this.cdr.detectChanges();
      }
    });
  }
}
