package com.br.ecommerce.controller;

import com.br.ecommerce.model.User;
import com.br.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/auth")
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping("/users")
    public List<User> getAll(){
        return service.getAll();
    }

    @PostMapping("/create")
    public User create(@RequestBody User user){
        return service.create(user);
    }

}
