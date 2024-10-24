package com.todo.todo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todo.todo.model.Todo;
import com.todo.todo.service.TodoService;

@RestController
@RequestMapping("/todo")
public class TodoController {
    @Autowired
    private TodoService todoService;
    
    @PostMapping("/save")
    public Todo save(@RequestBody Todo todo){
        return todoService.save(todo);
    }

    @GetMapping("/get")
    public List<Todo> getAll(){
        return todoService.getAll();
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable long id){
        todoService.delete(id);
    }

}
