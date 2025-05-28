import { Component } from '@angular/core';

// Sample data for the tabs
interface Person {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface Project {
  id: number;
  name: string;
  description: string;
  status: string;
  progress: number;
}

@Component({
  selector: 'app-advanced-example',
  template: `
    <div class="example-container">
      <p>
        Advanced content projection combines multiple techniques including ContentChildren, 
        ng-template, ngTemplateOutlet, and lifecycle hooks to create dynamic, reusable components.
      </p>
      
      <div class="code-example">
        <pre>&lt;app-tab-container&gt;
  &lt;app-tab title="Tab One" icon="📊"&gt;Content for first tab&lt;/app-tab&gt;
  &lt;app-tab title="Tab Two" icon="📝"&gt;Content for second tab&lt;/app-tab&gt;
&lt;/app-tab-container&gt;</pre>
      </div>
      
      <div class="example-content">
        <app-tab-container>
          <app-tab title="Dashboard" icon="📊">
            <h3>Dashboard Overview</h3>
            <p>Welcome to the dashboard. This tab demonstrates how templates are projected into the tab container.</p>
            <div class="dashboard-stats">
              <div class="stat-card">
                <span class="stat-value">253</span>
                <span class="stat-label">Active Users</span>
              </div>
              <div class="stat-card">
                <span class="stat-value">42</span>
                <span class="stat-label">Projects</span>
              </div>
              <div class="stat-card">
                <span class="stat-value">87%</span>
                <span class="stat-label">Completion</span>
              </div>
            </div>
          </app-tab>
          
          <app-tab title="Team" icon="👥">
            <h3>Team Members</h3>
            <p>This tab shows a list of team members and demonstrates content switching between tabs.</p>
            <div class="data-table">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let person of people">
                    <td>{{ person.name }}</td>
                    <td>{{ person.email }}</td>
                    <td>{{ person.role }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </app-tab>
          
          <app-tab title="Projects" icon="📁">
            <h3>Current Projects</h3>
            <p>This tab displays the current projects with their progress.</p>
            <div class="project-cards">
              <div class="project-card" *ngFor="let project of projects">
                <h4>{{ project.name }}</h4>
                <p>{{ project.description }}</p>
                <div class="project-footer">
                  <div class="project-status" [ngClass]="project.status.toLowerCase()">{{ project.status }}</div>
                  <div class="project-progress">
                    <div class="progress-bar">
                      <div class="progress" [style.width.%]="project.progress"></div>
                    </div>
                    <span>{{ project.progress }}%</span>
                  </div>
                </div>
              </div>
            </div>
          </app-tab>
          
          <app-tab title="Settings" icon="⚙️">
            <h3>Settings</h3>
            <p>This tab demonstrates advanced content projection with forms and interactive elements.</p>
            <div class="settings-form">
              <div class="form-group">
                <label>Notifications</label>
                <div class="toggle-switch">
                  <input type="checkbox" id="notifications" [(ngModel)]="settings.notifications">
                  <label for="notifications"></label>
                </div>
              </div>
              <div class="form-group">
                <label>Email Reports</label>
                <div class="toggle-switch">
                  <input type="checkbox" id="emailReports" [(ngModel)]="settings.emailReports">
                  <label for="emailReports"></label>
                </div>
              </div>
              <div class="form-group">
                <label>Theme</label>
                <select [(ngModel)]="settings.theme">
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="system">System</option>
                </select>
              </div>
              <button class="save-button">Save Settings</button>
            </div>
          </app-tab>
        </app-tab-container>
      </div>
    </div>
  `,
  styles: [`
    .example-container {
      display: flex;
      flex-direction: column;
    }
    
    .code-example {
      background-color: #f5f5f5;
      border-radius: 4px;
      padding: 12px;
      margin-bottom: 20px;
      overflow-x: auto;
    }
    
    pre {
      margin: 0;
      white-space: pre-wrap;
    }
    
    .example-content {
      margin-top: 20px;
    }
    
    .dashboard-stats {
      display: flex;
      gap: 16px;
      margin-top: 24px;
      flex-wrap: wrap;
    }
    
    .stat-card {
      flex: 1;
      min-width: 120px;
      background-color: #f5f5f5;
      padding: 16px;
      border-radius: 8px;
      text-align: center;
      display: flex;
      flex-direction: column;
    }
    
    .stat-value {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 8px;
      color: #3f51b5;
    }
    
    .stat-label {
      font-size: 14px;
      color: #666;
    }
    
    .data-table {
      margin-top: 20px;
      overflow-x: auto;
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
    }
    
    th, td {
      text-align: left;
      padding: 12px;
      border-bottom: 1px solid #e0e0e0;
    }
    
    th {
      background-color: #f5f5f5;
      font-weight: 500;
    }
    
    .project-cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 16px;
      margin-top: 20px;
    }
    
    .project-card {
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 16px;
      background-color: white;
    }
    
    .project-card h4 {
      margin-top: 0;
      margin-bottom: 8px;
    }
    
    .project-footer {
      margin-top: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .project-status {
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 500;
    }
    
    .project-status.completed {
      background-color: #e8f5e9;
      color: #4caf50;
    }
    
    .project-status.in-progress {
      background-color: #e3f2fd;
      color: #2196f3;
    }
    
    .project-status.delayed {
      background-color: #fff8e1;
      color: #ff9800;
    }
    
    .project-progress {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .progress-bar {
      width: 100px;
      height: 8px;
      background-color: #e0e0e0;
      border-radius: 4px;
      overflow: hidden;
    }
    
    .progress {
      height: 100%;
      background-color: #4caf50;
    }
    
    .settings-form {
      margin-top: 20px;
      max-width: 400px;
    }
    
    .form-group {
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .toggle-switch {
      position: relative;
      width: 50px;
      height: 24px;
    }
    
    .toggle-switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    
    .toggle-switch label {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      border-radius: 24px;
      cursor: pointer;
      transition: 0.4s;
    }
    
    .toggle-switch label:before {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      border-radius: 50%;
      transition: 0.4s;
    }
    
    .toggle-switch input:checked + label {
      background-color: #3f51b5;
    }
    
    .toggle-switch input:checked + label:before {
      transform: translateX(26px);
    }
    
    select {
      padding: 8px;
      border-radius: 4px;
      border: 1px solid #ccc;
      min-width: 120px;
    }
    
    .save-button {
      padding: 8px 16px;
      background-color: #3f51b5;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 8px;
    }
    
    .save-button:hover {
      background-color: #303f9f;
    }
  `]
})
export class AdvancedExampleComponent {
  // Sample data for the tabs
  people: Person[] = [
    { id: 1, name: 'John Smith', email: 'john.smith@example.com', role: 'Project Manager' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah.j@example.com', role: 'Developer' },
    { id: 3, name: 'Michael Brown', email: 'michael.b@example.com', role: 'Designer' },
    { id: 4, name: 'Emily Davis', email: 'emily.d@example.com', role: 'Developer' },
    { id: 5, name: 'David Wilson', email: 'david.w@example.com', role: 'QA Engineer' }
  ];
  
  projects: Project[] = [
    { 
      id: 1, 
      name: 'Website Redesign', 
      description: 'Modernize the company website with updated design and improved user experience.',
      status: 'Completed',
      progress: 100
    },
    { 
      id: 2, 
      name: 'Mobile Application', 
      description: 'Develop a cross-platform mobile app for customer engagement.',
      status: 'In-Progress',
      progress: 65
    },
    { 
      id: 3, 
      name: 'Database Migration', 
      description: 'Migrate existing data to the new cloud-based database system.',
      status: 'Delayed',
      progress: 32
    }
  ];
  
  settings = {
    notifications: true,
    emailReports: false,
    theme: 'light'
  };
}
