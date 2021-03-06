package com.mateus.server.controller;

import java.util.List;

import com.mateus.server.model.PostModel;
import com.mateus.server.repository.PostRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping
public class PostController {
    
    @Autowired
    private PostRepository postRepository;

    @GetMapping(value="/posts")
    public List<PostModel> getAll() {
        return postRepository.findAll();
    }

    @GetMapping(value="/post/{id}")
    public ResponseEntity<?> getById(@PathVariable long id) {
        return postRepository.findById(id)
           .map(record -> ResponseEntity.ok().body(record))
           .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping(value="/post")
    public PostModel create(@RequestBody PostModel postModel) {
        return postRepository.save(postModel);
    }

    @PutMapping(value="/post/{id}")
    public ResponseEntity<?> update(@PathVariable("id") long id, @RequestBody PostModel postModel) {
        return postRepository.findById(id).map(record -> {
            record.setTitle(postModel.getTitle());
            record.setDescription(postModel.getDescription());
            record.setImg_url(postModel.getImg_url());
            record.setContent(postModel.getContent());
            
            PostModel updated = postRepository.save(record);
            return ResponseEntity.ok().body(updated);
         }).orElse(ResponseEntity.notFound().build());
    }   

    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        return postRepository.findById(id).map(record -> {
            postRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }).orElse(ResponseEntity.notFound().build());
    }

    
    
}
