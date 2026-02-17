package com.projects.todolist.service;

import com.projects.todolist.dto.TaskDto;
import java.util.List;

public interface TaskService {
	
	TaskDto addTask(TaskDto taskDto);

	TaskDto getTask(Long id);

    List<TaskDto> getAllTasks();

    TaskDto updateTask(TaskDto taskDto, Long id);

    void deleteTask(Long id);

    TaskDto completeTask(Long id);

    TaskDto incompleteTask(Long id);

}
