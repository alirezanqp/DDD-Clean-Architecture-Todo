import { Description } from './value-objects/description.value-object';
import { Priority } from './value-objects/priority.value-object';
import { Title } from './value-objects/title.value-object';

// All properties that a TodoItem has
export interface TodoItemProps {
  title: Title;
  description: Description;
  priority: Priority;
}

// Properties that are needed for a TodoItem creation
export interface CreateTodoItemProps {
  title: Title;
  description: Description;
  priority: Priority;
}

export enum UserRoles {
  admin = 'admin',
  moderator = 'moderator',
  guest = 'guest',
}
