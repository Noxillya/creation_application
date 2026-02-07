package com.example.demo;

import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    private final BookRepository repo;

    public BookService(BookRepository repo) {
        this.repo = repo;
    }

    public List<Book> findAll() {
        return repo.findAll();
    }

    public Optional<Book> findById(Long id) {
        return repo.findById(id);
    }

    public boolean existsById(Long id) {
        return repo.existsById(id);
    }

    public Book create(Book b) {
        return repo.save(b);
    }

    public Book update(Long id, Book b) {
        b.setId(id);
        return repo.save(b);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
