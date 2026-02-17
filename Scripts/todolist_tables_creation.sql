-- To-Do List (LG CNS) project tables creation SCRIPT
-- Date: Feb-2026
-- Created by: Miguel Garces 

USE todolistdb;
DROP TABLE tasks;

-- tasks table creation
CREATE TABLE tasks (
	id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(2000) NOT NULL,
    completed BOOLEAN NOT NULL,
    PRIMARY KEY(id)
) ENGINE=InnoDB;

SELECT * FROM tasks;

INSERT INTO tasks(title, description, completed) VALUES("Revisar emails", "Revisión diaria emails", false);
INSERT INTO tasks(title, description, completed) VALUES("Reunion daily", "Seguimiento pendientes", false);
INSERT INTO tasks(title, description, completed) VALUES("Trabajar proyecto", "Desarrollo proyecto software", false);

