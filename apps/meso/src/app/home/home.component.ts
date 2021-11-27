import { Component, OnInit } from '@angular/core';
import {
  AppState,
  Client,
  ClientState,
  Project,
  ProjectsState,
  Action,
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

const CREATE_PROJECT = '[Project] Create';
const READ_PROJECT = '[Project] Read';
const UPDATE_PROJECT = '[Project] Update';
const DELETE_PROJECT = '[Project] Delete';
const LOAD_PROJECT = '[Project] Load';

const createProject = (state: ProjectsState, project) => {
  console.log(`CREATE PROJECT`, project);
  return state;
};

const readProject = (state: ProjectsState, project) => {
  console.log(`READ PROJECT`, project);
  return state;
};

const updateProject = (state: ProjectsState, project) => {
  console.log(`UPDATE PROJECT`, project);
  return state;
};

const deleteProject = (state: ProjectsState, project) => {
  console.log(`DELETE PROJECT`, project);
  return state;
};

const loadProjects = (state: ProjectsState, projects) => {
  console.log(`LOAD PROJECT`, projects);
  return state;
};

const reducer = (
  state: ProjectsState = initialProjectsState,
  action: Action
) => {
  switch (action.type) {
    case CREATE_PROJECT:
      return createProject(state, action.payload);
    case READ_PROJECT:
      return readProject(state, action.payload);
    case UPDATE_PROJECT:
      return updateProject(state, action.payload);
    case DELETE_PROJECT:
      return deleteProject(state, action.payload);
    case LOAD_PROJECT:
      return loadProjects(state, action.payload);
    default:
      return state;
  }
};

const tango = projectsState;

@Component({
  selector: 'fem-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  echo = tango;
}
