import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  /**
   * As we registered this component in the main.ts bootstrap, but to register the HeaderComponent we are importing here so that Angular will register HeaderComponent as well. As we should only bootstrap the root component that is AppComponent
   */
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent, TasksComponent, TaskComponent],
})
export class AppComponent {
  /**
   * Just assignining as to access in the template
   */
  users = DUMMY_USERS;
  selectedUserId = signal<String>('');

  userNameUpdate = signal<String>('');
  //objectList.find(obj => obj.id === id);

  onSelectedUser(id: String) {
    console.log('User selected id : ' + id);
    const selectedUser = DUMMY_USERS.find((obj) => obj.id === id);
    if (selectedUser) {
      this.selectedUserId.set(selectedUser.id);
      this.userNameUpdate.set(selectedUser?.name);
    }
  }
}
