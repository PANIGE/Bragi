const workinprogressProjects = [
    {
        id: 3,
        name: "Cours de guitare",
        description: "Cours de guitare pour débutant, 1ère vidéo d'une série de 10 vidéos",
        date: "01/01/2021",
        status: "En cours",
        régisseur: "Michel Fournier",
        marketing: "Jean Dupont",
        professor: {
            id: 1,
            name: "Guillaume Petit",
            role: "professeur de guitare",
        },
        students: [
            { id: 1, name: "Étudiant 1" },
            { id: 2, name: "Étudiant 2" },
            { id: 3, name: "Étudiant 3" },
            { id: 4, name: "Étudiant 4" },
            { id: 5, name: "Étudiant 5" },
        ],
        tasks: [
            {
                id: 1,
                name: "ajout des rushs",
                description: "Après avoir filmé les cours, le caméraman doit ajouter les rushs sur le site web",
                date: "null",
                status: "En attente de validation",
                users: [
                    {
                        id: 1,
                        username: "Amélie Dupont",
                        role: "Caméraman",
                    },
                ],
            },
            {
                id: 2,
                name: "montage",
                description: "le monteur doit monter les rushs du caméraman pour ainsi créer la vidéo finale",
                date: "null",
                status: "En attente de réalisation",
                users: [
                    {
                        id: 2,
                        username: "Jean Robert",
                        role: "Monteur",
                    },
                ],
            },
            {
                id: 3,
                name: "rédaction",
                description: "le rédacteur doit rédiger le texte de la vidéo",
                date: "null",
                status: "En attente de réalisation",
                users: [
                    {
                        id: 3,
                        username: "Sylvie Martin",
                        role: "Rédacteur",
                    },
                ],
            },
            {
                id: 4,
                name: "traduction",
                description: "le traducteur doit traduire le texte de la vidéo",
                date: "null",
                status: "En attente de réalisation",
                users: [
                    {
                        id: 4,
                        username: "Samuel Smith",
                        role: "Traducteur",
                    }
                ],
            }
        ]
    },
    {
        id: 4,
        name: "Cours de chant",
        description: "Cours de chant pour tous niveaux, 1ère vidéo d'une série de 8 vidéos",
        date: "15/03/2021",
        status: "En cours",
        régisseur: "Sophie Laurent",
        marketing: "Jean Dupont",
        professor: {
            id: 2,
            name: "Ariane Lefebvre",
            role: "professeur de danse",
        },
        students: [
            { id: 6, name: "Étudiant 6" },
            { id: 7, name: "Étudiant 7" },
            { id: 8, name: "Étudiant 8" },
            { id: 9, name: "Étudiant 9" },
            { id: 10, name: "Étudiant 10" },
        ],
        tasks: [
            {
                id: 1,
                name: "ajout des rushs",
                description: "Après avoir filmé les cours, le caméraman doit ajouter les rushs sur le site web",
                date: "20/03/2021",
                status: "Tâche confirmée",
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
                description: "le monteur doit monter les rushs du caméraman pour ainsi créer la vidéo finale",
                date: "null",
                status: "En attente de validation",
                users: [
                    {
                        id: 2,
                        username: "Samuel Smith",
                        role: "Monteur",
                    },
                ],
            },
            {
                id: 3,
                name: "rédaction",
                description: "le rédacteur doit rédiger le texte de la vidéo",
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
                description: "le traducteur doit traduire le texte de la vidéo",
                date: "null",
                status: "En attente de réalisation",
                users: [
                    {
                        id: 4,
                        username: "Sophie Garcia",
                        role: "Traducteur",
                    }
                ],
            }
        ]
    },
    {
        id: 5,
        name: "Cours de piano",
        description: "Cours de piano pour tous niveaux, 1ère vidéo d'une série de 12 vidéos",
        date: "05/05/2021",
        status: "En cours",
        régisseur: "Maxime Leroy",
        marketing: "Jean Dupont",
        professor: {
            id: 3,
            name: "Professeur Pianiste",
            role: "Professeur de piano",
        },
        students: [
            { id: 11, name: "Étudiant 11" },
            { id: 12, name: "Étudiant 12" },
            { id: 13, name: "Étudiant 13" },
            { id: 14, name: "Étudiant 14" },
            { id: 15, name: "Étudiant 15" },
        ],
        tasks: [
            {
                id: 1,
                name: "ajout des rushs",
                description: "Après avoir filmé les cours, le caméraman doit ajouter les rushs sur le site web",
                date: "10/05/2021",
                status: "Tâche confirmée",
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
                description: "le monteur doit monter les rushs du caméraman pour ainsi créer la vidéo finale",
                date: "15/05/2021",
                status: "Tâche confirmée",
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
                description: "le rédacteur doit rédiger le texte de la vidéo",
                date: "null",
                status: "En attente de réalisation",
                users: [
                    {
                        id: 3,
                        username: "Sylvie Martin",
                        role: "Rédacteur",
                    },
                ],
            },
            {
                id: 4,
                name: "traduction",
                description: "le traducteur doit traduire le texte de la vidéo",
                date: "null",
                status: "En attente de réalisation",
                users: [
                    {
                        id: 4,
                        username: "Sophie Garcia",
                        role: "Traducteur",
                    }
                ],
            }
        ]
    },
    {
        id: 6,
        name: "Cours de batterie",
        description: "Cours de batterie pour débutant, 1ère vidéo d'une série de 6 vidéos",
        date: "12/06/2021",
        status: "En cours",
        régisseur: "Paul Durand",
        marketing: "Jean Dupont",
        professor: {
            id: 4,
            name: "Philippe Martin",
            role: "Professeur de batterie",
        },
        students: [
            { id: 16, name: "Étudiant 16" },
            { id: 17, name: "Étudiant 17" },
            { id: 18, name: "Étudiant 18" },
            { id: 19, name: "Étudiant 19" },
            { id: 20, name: "Étudiant 20" },
        ],
        tasks: [
            {
                id: 1,
                name: "ajout des rushs",
                description: "Après avoir filmé les cours, le caméraman doit ajouter les rushs sur le site web",
                date: "17/06/2021",
                status: "Tâche confirmée",
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
                description: "le monteur doit monter les rushs du caméraman pour ainsi créer la vidéo finale",
                date: "22/06/2021",
                status: "Tâche confirmée",
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
                description: "le rédacteur doit rédiger le texte de la vidéo",
                date: "25/06/2021",
                status: "Tâche confirmée",
                users: [
                    {
                        id: 5,
                        username: "Marie Dubois",
                        role: "Rédacteur",
                    },
                ],
            },
            {
                id: 4,
                name: "traduction",
                description: "le traducteur doit traduire le texte de la vidéo",
                date: "null",
                status: "En attente de réalisation",
                users: [
                    {
                        id: 4,
                        username: "Sophie Garcia",
                        role: "Traducteur",
                    }
                ],
            }
        ]
    },
    {
        id: 7,
        name: "Cours de saxophone",
        description: "Cours de saxophone pour débutant, 1ère vidéo d'une série de 8 vidéos",
        date: "20/07/2021",
        status: "En cours",
        régisseur: "Marcel Dupuis",
        marketing: "Jean Dupont",
        professor: {
            id: 5,
            name: "Jean-François Leblanc",
            role: "professeur de saxophone",
        },
        students: [
            { id: 21, name: "Étudiant 21" },
            { id: 22, name: "Étudiant 22" },
            { id: 23, name: "Étudiant 23" },
            { id: 24, name: "Étudiant 24" },
            { id: 25, name: "Étudiant 25" },
        ],
        tasks: [
            {
                id: 1,
                name: "ajout des rushs",
                description: "Après avoir filmé les cours, le caméraman doit ajouter les rushs sur le site web",
                date: "25/07/2021",
                status: "Tâche confirmée",
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
                description: "le monteur doit monter les rushs du caméraman pour ainsi créer la vidéo finale",
                date: "30/07/2021",
                status: "En attente de validation",
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
                description: "le rédacteur doit rédiger le texte de la vidéo",
                date: "null",
                status: "En attente de réalisation",
                users: [
                    {
                        id: 5,
                        username: "Marie Dubois",
                        role: "Rédacteur",
                    },
                ],
            },
            {
                id: 4,
                name: "traduction",
                description: "le traducteur doit traduire le texte de la vidéo",
                date: "null",
                status: "En attente de réalisation",
                users: [
                    {
                        id: 4,
                        username: "Sophie Garcia",
                        role: "Traducteur",
                    }
                ],
            }
        ]
    }
];

export default workinprogressProjects
