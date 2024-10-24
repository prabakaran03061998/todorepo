package com.todo.todo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todo.todo.model.Todo;
import com.todo.todo.repository.TodoRepositoryService;

@Service
public class TodoServiceImpl implements TodoService {
    @Autowired
    private TodoRepositoryService todoRepositoryService;

    @Override
    public Todo save(Todo todo) {
        return todoRepositoryService.save(todo);
    }

    @Override
    public List<Todo> getAll() {
        return todoRepositoryService.findAll();
    }

    @Override
    public Todo getById(long id) {
        return todoRepositoryService.findById(id).get();
    }

    @Override
    public void delete(long id) {
        todoRepositoryService.deleteById(id);
    }

}
