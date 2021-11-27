import { BaseEntity } from './../../../libs/api-interfaces/src/lib/api-interfaces';

interface Client {
  firstName: string;
  lastName: string;
  company: string;
}

interface Project extends BaseEntity {
  name: string;
  version: string;
}

interface ProjectsState {
  projects: Project[];
  currentProject: Project;
}
interface ClientState {
  clients: Client[];
}

interface AppState {
  clientsState: ClientState;
  projectsState: ProjectsState;
}

export { Client, Project, ProjectsState, ClientState, AppState };
