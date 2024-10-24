package com.todo.todo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
class HomeController{

    //create get mapping with name of /check return the String is application is running
    @GetMapping("/check")
    public String check(){
        return "Application is running";
    }

}