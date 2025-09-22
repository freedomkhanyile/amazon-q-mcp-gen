import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MenuItem {
  icon: string;
  label: string;
  route?: string;
  active?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  @Input() isCollapsed = false;
  @Output() toggleSidebar = new EventEmitter<void>();

  menuItems: MenuItem[] = [
    { icon: 'home', label: 'Home', route: '/dashboard', active: true },
    { icon: 'user', label: 'Profile', route: '/dashboard/profile' },
    { icon: 'calendar', label: 'Class time Table', route: '/dashboard/timetable' },
    { icon: 'file-plus', label: 'Applications', route: '/dashboard/applications' },
    { icon: 'key', label: 'Registrations', route: '/dashboard/registrations' },
    { icon: 'dollar-sign', label: 'Finance', route: '/dashboard/finance' },
    { icon: 'edit-3', label: 'Exams & Assessments', route: '/dashboard/exams' },
    { icon: 'briefcase', label: 'Residence Management', route: '/dashboard/residence' },
    { icon: 'message-square', label: 'Support', route: '/dashboard/support' }
  ];

  settingsItems: MenuItem[] = [
    { icon: 'bell', label: 'Notifications', route: '/dashboard/notifications' },
    { icon: 'settings', label: 'Settings', route: '/dashboard/settings' }
  ];

  onToggle(): void {
    this.toggleSidebar.emit();
  }
}