const completedProjects = [
    {
      id: 1,
      name: "Cours de violon",
      description: "Cours de violon pour débutants, 1ère vidéo d'une série de 6 vidéos",
      date: "30/04/2020",
      status: "Terminé",
      régisseur: "Marie Dupont",
      marketing: "Jean Dupont",
      professor: {
        id: 7,
        name: "Julie Lefevre",
        role: "professeur de violon",
      },
      students: [
        { id: 9, name: "Emma Johnson" },
        { id: 10, name: "Ethan Wilson" },
        { id: 11, name: "Sophia Lee" },
        { id: 12, name: "Noah Davis" },
      ],
      tasks: [
        {
          id: 1,
          name: "ajout des rushs",
          description: "Après avoir filmé les cours, le caméraman doit ajouter les rushs sur le site web",
          date: "null",
          status: "Terminée",
          users: [
            {
              id: 4,
              username: "Sophie Garcia",
              role: "Caméraman",
            },
          ],
        },
        {
          id: 2,
          name: "montage",
          description: "Le monteur doit monter les rushs du caméraman pour ainsi créer la vidéo finale",
          date: "null",
          status: "Terminée",
          users: [
            {
              id: 1,
              username: "Julien Dupont",
              role: "Monteur",
            },
          ],
        },
        {
          id: 3,
          name: "rédaction",
          description: "Le rédacteur doit rédiger le texte de la vidéo",
          date: "null",
          status: "Terminée",
          users: [
            {
              id: 3,
              username: "Caroline Durand",
              role: "Rédacteur",
            },
          ],
        },
        {
          id: 4,
          name: "traduction",
          description: "Le traducteur doit traduire le texte de la vidéo",
          date: "null",
          status: "Terminée",
          users: [
            {
              id: 2,
              username: "Julien Dupont",
              role: "Traducteur",
            },
          ],
        },
      ],
    },
    {
        id: 2,
        name: "Cours de flûte traversière",
        description: "Cours de flûte traversière pour tous niveaux, 1ère vidéo d'une série de 8 vidéos",
        date: "15/07/2020",
        status: "Terminé",
        régisseur: "Jean Dupuis",
        marketing: "Jean Dupont",
        professor: {
          id: 8,
          name: "Claire Dubois",
          role: "professeur de flûte traversière",
        },
        students: [
          { id: 13, name: "Isabella Johnson" },
          { id: 14, name: "James Wilson" },
          { id: 15, name: "Amelia Lee" },
          { id: 16, name: "William Davis" },
        ],
        tasks: [
          {
            id: 1,
            name: "ajout des rushs",
            description: "Après avoir filmé les cours, le caméraman doit ajouter les rushs sur le site web",
            date: "null",
            status: "Terminée",
            users: [
              {
                id: 4,
                username: "Sophie Garcia",
                role: "Caméraman",
              },
            ],
          },
          {
            id: 2,
            name: "montage",
            description: "Le monteur doit monter les rushs du caméraman pour ainsi créer la vidéo finale",
            date: "null",
            status: "Terminée",
            users: [
              {
                id: 1,
                username: "Julien Dupont",
                role: "Monteur",
              },
            ],
          },
          {
            id: 3,
            name: "rédaction",
            description: "Le rédacteur doit rédiger le texte de la vidéo",
            date: "null",
            status: "Terminée",
            users: [
              {
                id: 3,
                username: "Caroline Durand",
                role: "Rédacteur",
              },
            ],
          },
          {
            id: 4,
            name: "traduction",
            description: "Le traducteur doit traduire le texte de la vidéo",
            date: "null",
            status: "Terminée",
            users: [
              {
                id: 2,
                username: "Julien Dupont",
                role: "Traducteur",
              },
            ],
          },
        ],
      },    
  ];
  
  export default completedProjects;