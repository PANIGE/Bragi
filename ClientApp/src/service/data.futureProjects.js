const futureProjects = [
    {
        id: 8,
        name: "Atelier de composition musicale",
        description: "Atelier pour apprendre à composer ses propres morceaux musicaux",
        date: "10/09/2022",
        status: "À venir",
        régisseur: "Sophie Laurent",
        marketing: "Jean Dupont",
        professor: {
            id: 6,
            name: "Ariane Lefebvre",
            role: "compositeur et musicien",
        },
        students: [
            { id: 5, name: "Michael Johnson" },
            { id: 6, name: "Emily Wilson" },
            { id: 7, name: "David Lee" },
            { id: 8, name: "Olivia Davis" },
        ],
        tasks: [
            {
                id: 1,
                name: "ajout des rushs",
                description: "Après avoir filmé l'atelier', le caméraman doit ajouter les rushs sur le site web",
                date: "null",
                status: "En attente de réalisation",
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
                status: "En attente de réalisation",
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
                description: "Le rédacteur doit rédiger le texte de l'atelier",
                date: "null",
                status: "En attente de réalisation",
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
                description: "Le traducteur doit traduire le texte de l'atelier",
                date: "null",
                status: "En attente de réalisation",
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
        id: 9,
        name: "Cours de chant harmonique",
        description: "Cours de chant pour explorer l'harmonie vocale et les techniques avancées",
        date: "20/09/2022",
        status: "À venir",
        régisseur: "Sophie Laurent",
        marketing: "Jean Dupont",
        professor: {
            id: 6,
            name: "Marie Lefebvre",
            role: "Professeur de chant",
        },
        students: [
            { id: 9, name: "Sophie Johnson" },
            { id: 10, name: "Alex Martin" },
            { id: 11, name: "Emma Lee" },
            { id: 12, name: "Liam Davis" },
        ],
        tasks: [
            {
                id: 1,
                name: "ajout des rushs",
                description: "Après avoir filmé l'atelier', le caméraman doit ajouter les rushs sur le site web",
                date: "null",
                status: "En attente de réalisation",
                users: [
                    {
                        id: 1,
                        username: "Lucie Martin",
                        role: "Caméraman",
                    },
                ],
            },
            {
                id: 2,
                name: "montage",
                description: "Le monteur doit monter les vidéos en utilisant des techniques avancées",
                date: "null",
                status: "En attente de réalisation",
                users: [
                    {
                        id: 2,
                        username: "Julien Dupont",
                        role: "Monteur",
                    },
                ],
            },
            {
                id: 3,
                name: "rédaction",
                description: "Le rédacteur doit créer des supports pédagogiques pour les cours",
                date: "null",
                status: "En attente de réalisation",
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
                description: "Le traducteur doit traduire le texte de l'atelier",
                date: "null",
                status: "En attente de réalisation",
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
        id: 10,
        name: "Cours de percussion du monde",
        description: "Découvrez les rythmes et les percussions traditionnelles du monde entier",
        date: "05/11/2022",
        status: "À venir",
        régisseur: "Maxime Leroy",
        marketing: "Jean Dupont",
        professor: {
            id: 7,
            name: "Paul Dubois",
            role: "Percussionniste et musicien",
        },
        students: [
            { id: 13, name: "Sophia Wilson" },
            { id: 14, name: "Noah Lee" },
            { id: 15, name: "Olivia Davis" },
            { id: 16, name: "Liam Johnson" },
        ],
        tasks: [
            {
                id: 1,
                name: "ajout des rushs",
                description: "Après avoir filmé l'atelier, le caméraman doit ajouter les rushs sur le site web",
                date: "null",
                status: "En attente de réalisation",
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
                description: "Le monteur doit créer des vidéos captivantes pour illustrer les rythmes du monde",
                date: "null",
                status: "En attente de réalisation",
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
                description: "Le rédacteur doit écrire des descriptions pour les vidéos",
                date: "null",
                status: "En attente de réalisation",
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
                description: "Le traducteur doit traduire les titres des vidéos en plusieurs langues",
                date: "null",
                status: "En attente de réalisation",
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

export default futureProjects;