import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-install-prompt',
  templateUrl: './install-prompt.component.html',
  styleUrls: ['./install-prompt.component.scss']
})
export class InstallPromptComponent implements OnInit {
  deferredPrompt: any;
  showInstallButton = false;

  constructor() { }

  ngOnInit(): void {
    this.handleInstallPrompt();
  }

  handleInstallPrompt(): void {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      
      // Store the event for later use
      this.deferredPrompt = e;
      
      // Show the install button
      this.showInstallButton = true;
    });

    window.addEventListener('appinstalled', () => {
      // Hide the install button when app is installed
      this.showInstallButton = false;
      this.deferredPrompt = null;
      
      // Log the installation to analytics
      console.log('PWA was installed');
    });
  }

  installApp(): void {
    if (!this.deferredPrompt) {
      return;
    }

    // Show the install prompt
    this.deferredPrompt.prompt();

    // Wait for the user to respond
    this.deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
        this.showInstallButton = false;
      } else {
        console.log('User dismissed the install prompt');
      }
      
      // Clear the deferred prompt
      this.deferredPrompt = null;
    });
  }
}
