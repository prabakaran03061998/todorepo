package com.todo.todo.service;

import java.util.List;

import com.todo.todo.model.Todo;

public interface TodoService {
    public Todo save(Todo todo);
    public List<Todo> getAll();
    public Todo getById(long id);
    public void delete(long id);

}
