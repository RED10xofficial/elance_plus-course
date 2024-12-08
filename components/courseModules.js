function initializeModules() {
  // Get all module buttons
  const moduleButtons = document.querySelectorAll('.module-toggle');

  moduleButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Find the parent module container
      const moduleContainer = this.closest('.module-container');
      const moduleContent = moduleContainer.querySelector('.module-content');
      const buttonIcon = this.querySelector('svg');

      // Toggle content visibility
      if (moduleContent) {
        moduleContent.classList.toggle('hidden');
        
        // Update button icon
        if (moduleContent.classList.contains('hidden')) {
          buttonIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v12m6-6H6" />
          `;
        } else {
          buttonIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
          `;
        }
      }
    });
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeModules); 