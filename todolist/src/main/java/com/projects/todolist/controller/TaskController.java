package com.projects.todolist.controller;

import lombok.AllArgsConstructor;
import com.projects.todolist.dto.TaskDto;
import com.projects.todolist.service.TaskService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/tasks")
@AllArgsConstructor
public class TaskController {
	
	private TaskService taskService;
    
    @PostMapping
    public ResponseEntity<TaskDto> addTask(@RequestBody TaskDto taskDto){

        TaskDto newTask = taskService.addTask(taskDto);
        return new ResponseEntity<>(newTask, HttpStatus.CREATED);
    }
    
    @GetMapping("{id}")
    public ResponseEntity<TaskDto> getTask(@PathVariable("id") Long taskId){
    	TaskDto taskDto = taskService.getTask(taskId);
        return new ResponseEntity<>(taskDto, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<TaskDto>> getAllTasks(){
        List<TaskDto> tasks = taskService.getAllTasks();        
        return ResponseEntity.ok(tasks);
    }
    
    @PutMapping("{id}")
    public ResponseEntity<TaskDto> updateTask(@RequestBody TaskDto taskDto, @PathVariable("id") Long taskId){
    	TaskDto updatedTask = taskService.updateTask(taskDto, taskId);
        return ResponseEntity.ok(updatedTask);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteTask(@PathVariable("id") Long taskId){
        taskService.deleteTask(taskId);
        return ResponseEntity.ok("Task deleted successfully!.");
    }

    @PatchMapping("{id}/complete")
    public ResponseEntity<TaskDto> completeTask(@PathVariable("id") Long taskId){
    	TaskDto updatedTask = taskService.completeTask(taskId);
        return ResponseEntity.ok(updatedTask);
    }

    @PatchMapping("{id}/incomplete")
    public ResponseEntity<TaskDto> incompleteTask(@PathVariable("id") Long taskId){
    	TaskDto updatedTask = taskService.incompleteTask(taskId);
        return ResponseEntity.ok(updatedTask);
    }

}
