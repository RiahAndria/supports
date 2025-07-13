document.addEventListener('DOMContentLoaded', function() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const niveauSections = document.querySelectorAll('.niveau-section');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Retire la classe active de tous les boutons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Ajoute la classe active au bouton cliqué
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                
                niveauSections.forEach(section => {
                    if (filterValue === 'all') {
                        section.classList.remove('hidden');
                    } else {
                        if (section.classList.contains(filterValue)) {
                            section.classList.remove('hidden');
                        } else {
                            section.classList.add('hidden');
                        }
                    }
                });
            });
        });
        
        // Optionnel: Filtrage via l'URL (ex: cours.html?filter=l1)
        const urlParams = new URLSearchParams(window.location.search);
        const urlFilter = urlParams.get('filter');
        if (urlFilter) {
            const buttonToClick = document.querySelector(`.filter-btn[data-filter="${urlFilter}"]`);
            if (buttonToClick) buttonToClick.click();
        }
    });
