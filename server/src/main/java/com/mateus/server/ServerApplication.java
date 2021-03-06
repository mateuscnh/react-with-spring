package com.mateus.server;

import com.mateus.server.model.PostModel;
import com.mateus.server.repository.PostRepository;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ServerApplication {

	@Autowired
	private PostRepository postRepository;

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

	@Bean
	InitializingBean sendDatabase() {
		return () -> {
			PostModel postModel = new PostModel();
			
			postModel.setTitle("O pensador moderno");
			postModel.setDescription("O pensador moderno é um cara que pensa bem moderno, só coisas modernas e não coisas antigas, e é um pensador.");
			postModel.setImg_url("https://images.unsplash.com/photo-1569389397653-c04fe624e663?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80");
			postModel.setContent("As expressões de sociabilidade decorrentes desde o século XVIII, pelo menos, estariam marcadas pelo cientificismo destrutivo, que rebaixaria gradativamente a vivência humana até o presente momento.");
			postRepository.save(postModel);
			
			postModel = new PostModel();
			postModel.setTitle("A dança da chuva");
			postModel.setDescription("A dança da chuva é utilizada para pedir chuva aos deuses da chuva, o fotógrafo teve muita sensibilidade ao capturar uma criança, logo após a chuva acontecer.");
			postModel.setImg_url("https://images.unsplash.com/photo-1610347125613-3a3493563f6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80");
			postModel.setContent("Segundo o historiador José Inaldo Chaves, professor da Universidade de Brasília (unB), a variedade de rituais é grande, o que é natural, uma vez que há mais de 5 mil povos indígenas no Brasil.");
			postRepository.save(postModel);

			postModel = new PostModel();
			postModel.setTitle("O cachorro indeciso");
			postModel.setDescription("O cachorro ficou indeciso entre escolher batata frita ou batata frita, realmente é uma reflexão que nós toma tempo e nos deixa reféns de nossas decisões.");
			postModel.setImg_url("https://images.unsplash.com/photo-1614633833026-0820552978b6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80");
			postModel.setContent("Como os cachorros se comunicam? Todo pai ou mãe de pet já deve ter se perguntado isso em algum momento! Embora não consigam dialogar com palavras, os cães têm a sua própria linguagem.");
			postRepository.save(postModel);
		};
	}
}