import { Component, OnInit } from '@angular/core';
import {
  AppState,
  Client,
  ClientState,
  Project,
  ProjectsState,
} from '../../types';

const johnDoe: Client = {
  firstName: 'John',
  lastName: 'Doe',
  company: 'Google',
};

const janeDoe: Client = {
  firstName: 'Jane',
  lastName: 'Doe',
  company: 'Netflix',
};

const clients: Client[] = [johnDoe, janeDoe];

const finance: Project = {
  id: '1',
  name: 'Finance',
  version: '0.0.1',
};

const travel: Project = {
  id: '2',
  name: 'Travel',
  version: '0.0.2',
};

const plus: Project = {
  id: '3',
  name: 'Plus',
  version: '0.0.3',
};

const newProject: Project = {
  id: null,
  name: '',
  version: '',
};

const projects: Project[] = [finance, travel, plus];

const initialProjectsState: ProjectsState = {
  projects,
  currentProject: newProject,
};
const initialClientsState: ClientState = { clients };

const appState: AppState = {
  clientsState: initialClientsState,
  projectsState: initialProjectsState,
};

class ProjectsStore {
  state: ProjectsState;

  constructor(state: ProjectsState) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  select(key: string) {
    return this.state[key];
  }
}

const projectsStore = new ProjectsStore(initialProjectsState);
const projectsState = projectsStore.select('projects');

const tango = projectsState;

@Component({
  selector: 'fem-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  echo = tango;
}
