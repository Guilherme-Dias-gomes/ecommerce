package com.br.ecommerce.service;

import com.br.ecommerce.model.User;
import com.br.ecommerce.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public List<User> getAll(){
        return repository.findAll();
    }

    public User create(User user){
        return repository.save(user);
    }

    public void deleteById(Long id){
        repository.deleteById(id);
    }
}
