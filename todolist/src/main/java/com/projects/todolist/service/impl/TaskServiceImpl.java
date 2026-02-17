package com.projects.todolist.service.impl;

import lombok.AllArgsConstructor;
import com.projects.todolist.dto.TaskDto;
import com.projects.todolist.entity.Task;
import com.projects.todolist.exception.ResourceNotFoundException;
import com.projects.todolist.repository.TaskRepository;
import com.projects.todolist.service.TaskService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TaskServiceImpl implements TaskService{
	
	private TaskRepository taskRepository;

    private ModelMapper modelMapper;

    @Override
    public TaskDto addTask(TaskDto taskDto) {

        Task task = modelMapper.map(taskDto, Task.class);        
        Task newTask = taskRepository.save(task);        
        TaskDto newTaskDto = modelMapper.map(newTask, TaskDto.class);

        return newTaskDto;
    }

    @Override
    public TaskDto getTask(Long id) {

        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found with id:" + id));

        return modelMapper.map(task, TaskDto.class);
    }

   @Override
    public List<TaskDto> getAllTasks() {

        List<Task> tasks = taskRepository.findAll();

        return tasks.stream().map((task) -> modelMapper.map(task, TaskDto.class))
                .collect(Collectors.toList());
    }

   @Override
    public TaskDto updateTask(TaskDto taskDto, Long id) {

         Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found with id : " + id));
         task.setTitle(taskDto.getTitle());
         task.setDescription(taskDto.getDescription());
         task.setCompleted(taskDto.isCompleted());

         Task updatedTask = taskRepository.save(task);

        return modelMapper.map(updatedTask, TaskDto.class);
    }

    @Override
    public void deleteTask(Long id) {

        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found with id : " + id));

        taskRepository.deleteById(id);
    }

    @Override
    public TaskDto completeTask(Long id) {

        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found with id : " + id));

        task.setCompleted(Boolean.TRUE);

        Task updatedTask = taskRepository.save(task);

        return modelMapper.map(updatedTask, TaskDto.class);
    }

    @Override
    public TaskDto incompleteTask(Long id) {

        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found with id : " + id));

        task.setCompleted(Boolean.FALSE);

        Task updatedTask = taskRepository.save(task);

        return modelMapper.map(updatedTask, TaskDto.class);
    }

}
