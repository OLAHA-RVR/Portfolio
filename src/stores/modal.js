import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import ModalProject from '@/components/ModalProject.vue';


export const loadProject = (projectId) => {
        const project = slideArray.value.find((p) => p.id === projectId);
        if (project) {
          title.value = project.title;
          date.value = project.date;
          technology.value = project.technology;
          links.value = project.links;
          imageLinks.value = project.imageLinks;
          display.value = true; // Affiche le modal
        }
      };
      

    let id = 1;

    let slideArray = ref([
        {
          id: 0,
          title: "Au petit village",
          date: "2025",
          description: "Dynamiser le site Au petit village avec Angular.JS.",
          technology: "Angular.JS",
          links: "https://example.com/au-petit-village",
          imageLinks: "../assets/logo/au petit village.jpg",
        },
        {
          id: 1,
          title: "Espace commentaire",
          date: "2025",
          description: "Créer un espace commentaire dynamique.",
          technology: "HTML, CSS, JavaScript",
          links: "https://example.com/commentaires",
          imageLinks: "../assets/logo/commentaires.png",
        },
        {
          id: 2,
          title: "La vie des plantes",
          date: "2025",
          description: "Créer un site vitrine pour La vie des plantes avec WordPress.",
          technology: "WordPress",
          links: "https://example.com/la-vie-des-plantes",
          imageLinks: "../assets/logo/la vie des plantes.jpg",
        },
        {
          id: 3,
          title: "Probeats",
          date: "2025",
          description: "Maquetter le site Probeats avec Figma.",
          technology: "Figma",
          links: "https://example.com/probeats",
          imageLinks: "../assets/logo/Probeats.png",
        },
      ]);

    return{ title, date, technology, links, imageLinks, slideArray }