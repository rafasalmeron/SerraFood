import img from '../../../assets/star.png';

export const stores = [
    {
        id: '1',
        logo: 'https://picsum.photos/200/300?random=1',
        name: 'Hambúrgueria Top',
        star: 4.5,
        frete: 'Gratis',
        distancia: '1,5 km',
        tempoPreparo: '30-40 min',
        category: 'Hambúrgueres',
        cupom: '',
        lojaSuper: img,
        produtos: [
            {
                id: 1000,
                name: "Hambúrguer Clássico",
                price: 24.99,
                category: "Hambúrgueres",
                description: "Hambúrguer de carne 100% bovina com queijo cheddar, alface e tomate.",
                photo: "https://picsum.photos/200/300?random=51",
                storeId: 1
            },
            {
                id: 1001,
                name: "Cheeseburger Gourmet",
                price: 27.99,
                category: "Hambúrgueres",
                description: "Hambúrguer artesanal com queijo cheddar, cebola caramelizada e molho especial.",
                photo: "https://picsum.photos/200/300?random=52",
                storeId: 1
            }
        ]
    },
    {
        id: '2',
        logo: 'https://picsum.photos/200/300?random=2',
        name: 'Pizzaria Italiana',
        star: 4.7,
        frete: 'Gratis',
        distancia: '1,0 km',
        tempoPreparo: '20-30 min',
        category: 'Pizzas',
        cupom: 'Cupom de 15% OFF',
        lojaSuper: '',
        produtos: [
            {
                id: 1002,
                name: "Pizza Margherita",
                price: 49.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella, manjericão fresco e azeite.",
                photo: "https://picsum.photos/200/300?random=53",
                storeId: 2
            },
            {
                id: 1003,
                name: "Pizza Pepperoni",
                price: 55.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e fatias de pepperoni crocante.",
                photo: "https://picsum.photos/200/300?random=54",
                storeId: 2
            }
        ]
    },
    {
        id: '3',
        logo: 'https://picsum.photos/200/300?random=3',
        name: 'Sushi Master',
        star: 4.8,
        frete: 'R$ 6,00',
        distancia: '3,0 km',
        tempoPreparo: '25-35 min',
        category: 'Japonesa',
        cupom: '',
        lojaSuper: img,
        produtos: [
            {
                id: 1004,
                name: "Sushi Tradicional",
                price: 34.99,
                category: "Japonesa",
                description: "Combinado de sushi com salmão, atum, e camarões frescos.",
                photo: "https://picsum.photos/200/300?random=55",
                storeId: 3
            },
            {
                id: 1005,
                name: "Temaki de Salmão",
                price: 21.99,
                category: "Japonesa",
                description: "Temaki recheado com salmão fresco, alga nori e arroz temperado.",
                photo: "https://picsum.photos/200/300?random=56",
                storeId: 3
            }
        ]
    },
    {
        id: '4',
        logo: 'https://picsum.photos/200/300?random=4',
        name: 'Pasta House',
        star: 4.4,
        frete: 'Gratis',
        distancia: '2,5 km',
        tempoPreparo: '40-50 min',
        category: 'Massas',
        cupom: 'Desconto de 10% em todas as massas',
        lojaSuper: '',
        produtos: [
            {
                id: 1006,
                name: "Spaghetti Carbonara",
                price: 39.99,
                category: "Massas",
                description: "Massa italiana com molho de queijo, ovos, pancetta e pimenta do reino.",
                photo: "https://picsum.photos/200/300?random=57",
                storeId: 4
            },
            {
                id: 1007,
                name: "Ravioli de Carne",
                price: 45.99,
                category: "Massas",
                description: "Massa fresca recheada com carne bovina, molho de tomate e manjericão.",
                photo: "https://picsum.photos/200/300?random=58",
                storeId: 4
            }
        ]
    },
    {
        id: '5',
        logo: 'https://picsum.photos/200/300?random=5',
        name: 'Doces da Vovó',
        star: 4.9,
        frete: 'Gratis',
        distancia: '1,2 km',
        tempoPreparo: '10-15 min',
        category: 'Doces',
        cupom: '',
        lojaSuper: img,
        produtos: [
            {
                id: 1008,
                name: "Bolo de Chocolate",
                price: 29.99,
                category: "Doces",
                description: "Bolo de chocolate com cobertura de brigadeiro e granulado.",
                photo: "https://picsum.photos/200/300?random=59",
                storeId: 5
            },
            {
                id: 1009,
                name: "Brigadeiro Gourmet",
                price: 19.99,
                category: "Doces",
                description: "Brigadeiro tradicional com cobertura de chocolate belga.",
                photo: "https://picsum.photos/200/300?random=60",
                storeId: 5
            }
        ]
    },
    {
        id: '6',
        logo: 'https://picsum.photos/200/300?random=6',
        name: 'Hamburgueria do João',
        star: 4.2,
        frete: 'R$ 7,00',
        distancia: '4,5 km',
        tempoPreparo: '30-40 min',
        category: 'Hambúrgueres',
        cupom: 'Cupom de 20% OFF',
        lojaSuper: '',
        produtos: [
            {
                id: 1010,
                name: "Hambúrguer de Frango",
                price: 21.99,
                category: "Hambúrgueres",
                description: "Hambúrguer de frango grelhado com queijo prato, alface e tomate.",
                photo: "https://picsum.photos/200/300?random=61",
                storeId: 6
            },
            {
                id: 1011,
                name: "Cheeseburger Duplo",
                price: 31.99,
                category: "Hambúrgueres",
                description: "Dois hambúrgueres de carne bovina com queijo cheddar e bacon.",
                photo: "https://picsum.photos/200/300?random=62",
                storeId: 6
            }
        ]
    },
    {
        id: '7',
        logo: 'https://picsum.photos/200/300?random=7',
        name: 'Pizzaria Bella Napoli',
        star: 4.6,
        frete: 'Gratis',
        distancia: '1,8 km',
        tempoPreparo: '25-35 min',
        category: 'Pizzas',
        cupom: '',
        lojaSuper: img,
        produtos: [
            {
                id: 1012,
                name: "Pizza de Calabresa",
                price: 42.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e calabresa fatiada.",
                photo: "https://picsum.photos/200/300?random=63",
                storeId: 7
            },
            {
                id: 1013,
                name: "Pizza de Frango com Catupiry",
                price: 49.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella, frango desfiado e catupiry.",
                photo: "https://picsum.photos/200/300?random=64",
                storeId: 7
            }
        ]
    },
    {
        id: '8',
        logo: 'https://picsum.photos/200/300?random=8',
        name: 'Sushi Place',
        star: 4.3,
        frete: 'R$ 5,50',
        distancia: '2,2 km',
        tempoPreparo: '30-40 min',
        category: 'Japonesa',
        cupom: 'Cupom de R$ 15,00',
        lojaSuper: '',
        produtos: [
            {
                id: 1014,
                name: "Sashimi de Salmão",
                price: 37.99,
                category: "Japonesa",
                description: "Sashimi de salmão fresco cortado em fatias finas.",
                photo: "https://picsum.photos/200/300?random=65",
                storeId: 8
            },
            {
                id: 1015,
                name: "Yakissoba de Frango",
                price: 29.99,
                category: "Japonesa",
                description: "Macarrão oriental com frango, legumes e molho shoyu.",
                photo: "https://picsum.photos/200/300?random=66",
                storeId: 8
            }
        ]
    },
    {
        id: '9',
        logo: 'https://picsum.photos/200/300?random=9',
        name: 'Massas Italianas',
        star: 4.4,
        frete: 'Gratis',
        distancia: '3,0 km',
        tempoPreparo: '20-30 min',
        category: 'Massas',
        cupom: '',
        lojaSuper: img,
        produtos: [
            {
                id: 1016,
                name: "Lasanha Bolonhesa",
                price: 47.99,
                category: "Massas",
                description: "Massa fresca com molho bolonhesa, queijo e presunto.",
                photo: "https://picsum.photos/200/300?random=67",
                storeId: 9
            },
            {
                id: 1017,
                name: "Ravioli de Queijo",
                price: 39.99,
                category: "Massas",
                description: "Massa fresca recheada com queijo e molho de tomate.",
                photo: "https://picsum.photos/200/300?random=68",
                storeId: 9
            }
        ]
    },
    {
        id: '10',
        logo: 'https://picsum.photos/200/300?random=10',
        name: 'Lanchonete Express',
        star: 4.1,
        frete: 'R$ 4,00',
        distancia: '2,8 km',
        tempoPreparo: '10-20 min',
        category: 'Lanches',
        cupom: 'Cupom de 10% OFF',
        lojaSuper: '',
        produtos: [
            {
                id: 1018,
                name: "Cachorro Quente",
                price: 14.99,
                category: "Lanches",
                description: "Pão com salsicha, molho de tomate, milho, ervilha e batata palha.",
                photo: "https://picsum.photos/200/300?random=69",
                storeId: 10
            },
            {
                id: 1019,
                name: "Misto Quente",
                price: 12.99,
                category: "Lanches",
                description: "Pão de forma com queijo e presunto, grelhado na chapa.",
                photo: "https://picsum.photos/200/300?random=70",
                storeId: 10
            }
        ]
    },
    {
        id: '11',
        logo: 'https://picsum.photos/200/300?random=11',
        name: 'Churrascaria do Zé',
        star: 4.7,
        frete: 'Gratis',
        distancia: '5,0 km',
        tempoPreparo: '50-60 min',
        category: 'Churrascaria',
        cupom: '',
        lojaSuper: img,
        produtos: [
            {
                id: 1020,
                name: "Picanha na Brasa",
                price: 89.99,
                category: "Churrascaria",
                description: "Picanha bovina grelhada na brasa com farofa e vinagrete.",
                photo: "https://picsum.photos/200/300?random=71",
                storeId: 11
            },
            {
                id: 1021,
                name: "Costela de Porco",
                price: 79.99,
                category: "Churrascaria",
                description: "Costela de porco assada no bafo com molho barbecue.",
                photo: "https://picsum.photos/200/300?random=72",
                storeId: 11
            }
        ]
    },
    {
        id: '12',
        logo: 'https://picsum.photos/200/300?random=12',
        name: 'Burguer Shop',
        star: 4.5,
        frete: 'R$ 3,00',
        distancia: '1,5 km',
        tempoPreparo: '20-30 min',
        category: 'Hambúrgueres',
        cupom: 'Cupom de 10% OFF',
        lojaSuper: '',
        produtos: [
            {
                id: 1022,
                name: "X-Burguer",
                price: 19.99,
                category: "Hambúrgueres",
                description: "Pão com hambúrguer de carne bovina, queijo, alface e tomate.",
                photo: "https://picsum.photos/200/300?random=73",
                storeId: 12
            },
            {
                id: 1023,
                name: "X-Salada",
                price: 24.99,
                category: "Hambúrgueres",
                description: "Pão com hambúrguer de carne bovina, queijo, alface, tomate e maionese.",
                photo: "https://picsum.photos/200/300?random=74",
                storeId: 12
            }
        ]
    },
    {
        id: '13',
        logo: 'https://picsum.photos/200/300?random=13',
        name: 'Pizza & Cia',
        star: 4.6,
        frete: 'Gratis',
        distancia: '2,3 km',
        tempoPreparo: '25-35 min',
        category: 'Pizzas',
        cupom: '',
        lojaSuper: img,
        produtos: [
            {
                id: 1024,
                name: "Pizza de Mussarela",
                price: 39.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e orégano.",
                photo: "https://picsum.photos/200/300?random=75",
                storeId: 13
            },
            {
                id: 1025,
                name: "Pizza de Calabresa",
                price: 42.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e calabresa fatiada.",
                photo: "https://picsum.photos/200/300?random=76",
                storeId: 13
            }
        ]
    },
    {
        id: '14',
        logo: 'https://picsum.photos/200/300?random=14',
        name: 'Sushiyaki',
        star: 4.2,
        frete: 'R$ 8,00',
        distancia: '3,5 km',
        tempoPreparo: '40-50 min',
        category: 'Japonesa',
        cupom: 'Cupom de 15% OFF',
        lojaSuper: '',
        produtos: [
            {
                id: 1026,
                name: "Yakissoba de Legumes",
                price: 24.99,
                category: "Japonesa",
                description: "Macarrão oriental com legumes frescos e molho shoyu.",
                photo: "https://picsum.photos/200/300?random=77",
                storeId: 14
            },
            {
                id: 1027,
                name: "Sushi de Kani",
                price: 19.99,
                category: "Japonesa",
                description: "Sushi enrolado com kani, cream cheese e cebolinha.",
                photo: "https://picsum.photos/200/300?random=78",
                storeId: 14
            }
        ]
    },
    {
        id: '15',
        logo: 'https://picsum.photos/200/300?random=15',
        name: 'Cantina da Nonna',
        star: 4.8,
        frete: 'Gratis',
        distancia: '1,0 km',
        tempoPreparo: '30-40 min',
        category: 'Massas',
        cupom: '',
        lojaSuper: img,
        produtos: [
            {
                id: 1028,
                name: "Fettucc",
                price: 49.99,
                category: "Massas",
                description: "Massa italiana com molho de queijo, ovos, pancetta e pimenta do reino.",
                photo: "https://picsum.photos/200/300?random=79",
                storeId: 15
            },
            {
                id: 1029,
                name: "Ravioli de Frango",
                price: 45.99,
                category: "Massas",
                description: "Massa fresca recheada com carne de frango, molho de tomate e manjericão.",
                photo: "https://picsum.photos/200/300?random=80",
                storeId: 15
            }
        ]
    },
    {
        id: '16',
        logo: 'https://picsum.photos/200/300?random=16',
        name: 'Burguer Master',
        star: 4.9,
        frete: 'R$ 4,50',
        distancia: '2,0 km',
        tempoPreparo: '15-25 min',
        category: 'Hambúrgueres',
        cupom: 'Cupom de R$ 10,00 disponível',
        lojaSuper: '',
        produtos: [
            {
                id: 1030,
                name: "Hambúrguer de Picanha",
                price: 29.99,
                category: "Hambúrgueres",
                description: "Hambúrguer de picanha com queijo cheddar, bacon e molho especial.",
                photo: "https://picsum.photos/200/300?random=81",
                storeId: 16
            },
            {
                id: 1031,
                name: "Cheeseburger Gourmet",
                price: 27.99,
                category: "Hambúrgueres",
                description: "Hambúrguer artesanal com queijo cheddar, cebola caramelizada e molho especial.",
                photo: "https://picsum.photos/200/300?random=82",
                storeId: 16
            }
        ]
    },
    {
        id: '17',
        logo: 'https://picsum.photos/200/300?random=17',
        name: 'Pizza da Vila',
        star: 4.3,
        frete: 'Gratis',
        distancia: '2,8 km',
        tempoPreparo: '25-35 min',
        category: 'Pizzas',
        cupom: '',
        lojaSuper: img,
        produtos: [
            {
                id: 1032,
                name: "Pizza de Mussarela",
                price: 39.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e orégano.",
                photo: "https://picsum.photos/200/300?random=83",
                storeId: 17
            },
            {
                id: 1033,
                name: "Pizza de Calabresa",
                price: 42.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e calabresa fatiada.",
                photo: "https://picsum.photos/200/300?random=84",
                storeId: 17
            }
        ]
    },
    {
        id: '18',
        logo: 'https://picsum.photos/200/300?random=18',
        name: 'Sushi Mania',
        star: 4.4,
        frete: 'R$ 5,00',
        distancia: '3,0 km',
        tempoPreparo: '20-30 min',
        category: 'Japonesa',
        cupom: 'Desconto de 20%',
        lojaSuper: '',
        produtos: [
            {
                id: 1034,
                name: "Sashimi de Salmão",
                price: 37.99,
                category: "Japonesa",
                description: "Sashimi de salmão fresco cortado em fatias finas.",
                photo: "https://picsum.photos/200/300?random=85",
                storeId: 18
            },
            {
                id: 1035,
                name: "Yakissoba de Frango",
                price: 29.99,
                category: "Japonesa",
                description: "Macarrão oriental com frango, legumes e molho shoyu.",
                photo: "https://picsum.photos/200/300?random=86",
                storeId: 18
            }
        ]
    },
    {
        id: '19',
        logo: 'https://picsum.photos/200/300?random=19',
        name: 'Massas da Mamma',
        star: 4.6,
        frete: 'Gratis',
        distancia: '1,3 km',
        tempoPreparo: '40-50 min',
        category: 'Massas',
        cupom: '',
        lojaSuper: img,
        produtos: [
            {
                id: 1036,
                name: "Fettucc",
                price: 49.99,
                category: "Massas",
                description: "Massa italiana com molho de queijo, ovos, pancetta e pimenta do reino.",
                photo: "https://picsum.photos/200/300?random=87",
                storeId: 19
            },
            {
                id: 1037,
                name: "Ravioli de Frango",
                price: 45.99,
                category: "Massas",
                description: "Massa fresca recheada com carne de frango, molho de tomate e manjericão.",
                photo: "https://picsum.photos/200/300?random=88",
                storeId: 19
            }
        ]
    },
    {
        id: '20',
        logo: 'https://picsum.photos/200/300?random=20',
        name: 'Hamburgueria Express',
        star: 4.2,
        frete: 'R$ 6,00',
        distancia: '1,6 km',
        tempoPreparo: '10-15 min',
        category: 'Hambúrgueres',
        cupom: 'Cupom de 10% OFF',
        lojaSuper: '',
        produtos: [
            {
                id: 1038,
                name: "X-Burguer",
                price: 19.99,
                category: "Hambúrgueres",
                description: "Pão com hambúrguer de carne bovina, queijo, alface e tomate.",
                photo: "https://picsum.photos/200/300?random=89",
                storeId: 20
            },
            {
                id: 1039,
                name: "X-Salada",
                price: 24.99,
                category: "Hambúrgueres",
                description: "Pão com hambúrguer de carne bovina, queijo, alface, tomate e maionese.",
                photo: "https://picsum.photos/200/300?random=90",
                storeId: 20
            }
        ]
    },
    {
        id: '21',
        logo: 'https://picsum.photos/200/300?random=21',
        name: 'Pizzaria Margherita',
        star: 4.7,
        frete: 'Gratis',
        distancia: '3,1 km',
        tempoPreparo: '25-35 min',
        category: 'Pizzas',
        cupom: '',
        lojaSuper: img,
        produtos: [
            {
                id: 1040,
                name: "Pizza de Mussarela",
                price: 39.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e orégano.",
                photo: "https://picsum.photos/200/300?random=91",
                storeId: 21
            },
            {
                id: 1041,
                name: "Pizza de Calabresa",
                price: 42.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e calabresa fatiada.",
                photo: "https://picsum.photos/200/300?random=92",
                storeId: 21
            }
        ]
    },
    {
        id: '22',
        logo: 'https://picsum.photos/200/300?random=22',
        name: 'Sushi Fusion',
        star: 4.5,
        frete: 'R$ 4,50',
        distancia: '2,3 km',
        tempoPreparo: '30-40 min',
        category: 'Japonesa',
        cupom: 'Desconto de 15%',
        lojaSuper: '',
        produtos: [
            {
                id: 1042,
                name: "Sashimi de Salmão",
                price: 37.99,
                category: "Japonesa",
                description: "Sashimi de salmão fresco cortado em fatias finas.",
                photo: "https://picsum.photos/200/300?random=93",
                storeId: 22
            },
            {
                id: 1043,
                name: "Yakissoba de Frango",
                price: 29.99,
                category: "Japonesa",
                description: "Macarrão oriental com frango, legumes e molho shoyu.",
                photo: "https://picsum.photos/200/300?random=94",
                storeId: 22
            }
        ]
    },
    {
        id: '23',
        logo: 'https://picsum.photos/200/300?random=23',
        name: 'Pasta Bella',
        star: 4.8,
        frete: 'Gratis',
        distancia: '2,0 km',
        tempoPreparo: '40-50 min',
        category: 'Massas',
        cupom: '',
        lojaSuper: img,
        produtos: [
            {
                id: 1044,
                name: "Fettucc",
                price: 49.99,
                category: "Massas",
                description: "Massa italiana com molho de queijo, ovos, pancetta e pimenta do reino.",
                photo: "https://picsum.photos/200/300?random=95",
                storeId: 23
            },
            {
                id: 1045,
                name: "Ravioli de Frango",
                price: 45.99,
                category: "Massas",
                description: "Massa fresca recheada com carne de frango, molho de tomate e manjericão.",
                photo: "https://picsum.photos/200/300?random=96",
                storeId: 23
            }
        ]
    },
    {
        id: '24',
        logo: 'https://picsum.photos/200/300?random=24',
        name: 'Lanche do Rei',
        star: 4.1,
        frete: 'R$ 5,00',
        distancia: '2,4 km',
        tempoPreparo: '20-30 min',
        category: 'Lanches',
        cupom: 'Cupom de 5% OFF',
        lojaSuper: '',
        produtos: [
            {
                id: 1046,
                name: "Cachorro Quente",
                price: 14.99,
                category: "Lanches",
                description: "Pão com salsicha, molho de tomate, milho, ervilha e batata palha.",
                photo: "https://picsum.photos/200/300?random=97",
                storeId: 24
            },
            {
                id: 1047,
                name: "Misto Quente",
                price: 12.99,
                category: "Lanches",
                description: "Pão de forma com queijo e presunto, grelhado na chapa.",
                photo: "https://picsum.photos/200/300?random=98",
                storeId: 24
            }
        ]
    },
    {
        id: '25',
        logo: 'https://picsum.photos/200/300?random=25',
        name: 'Churrascaria Top',
        star: 4.6,
        frete: 'Gratis',
        distancia: '3,2 km',
        tempoPreparo: '50-60 min',
        category: 'Churrascaria',
        cupom: '',
        lojaSuper: img,
        produtos: [
            {
                id: 1048,
                name: "Picanha na Brasa",
                price: 89.99,
                category: "Churrascaria",
                description: "Picanha bovina grelhada na brasa com farofa e vinagrete.",
                photo: "https://picsum.photos/200/300?random=99",
                storeId: 25
            },
            {
                id: 1049,
                name: "Costela de Porco",
                price: 79.99,
                category: "Churrascaria",
                description: "Costela de porco assada no bafo com molho barbecue.",
                photo: "https://picsum.photos/200/300?random=100",
                storeId: 25
            }
        ]
    },
    {
        id: '26',
        logo: 'https://picsum.photos/200/300?random=26',
        name: 'Hamburgueria do Zé',
        star: 4.3,
        frete: 'R$ 4,50',
        distancia: '1,9 km',
        tempoPreparo: '20-30 min',
        category: 'Hambúrgueres',
        cupom: 'Cupom de 10% OFF',
        lojaSuper: '',
        produtos: [
            {
                id: 1050,
                name: "Hambúrguer de Picanha",
                price: 29.99,
                category: "Hambúrgueres",
                description: "Hambúrguer de picanha com queijo cheddar, bacon e molho especial.",
                photo: "https://picsum.photos/200/300?random=101",
                storeId: 26
            },
            {
                id: 1051,
                name: "Cheeseburger Gourmet",
                price: 27.99,
                category: "Hambúrgueres",
                description: "Hambúrguer artesanal com queijo cheddar, cebola caramelizada e molho especial.",
                photo: "https://picsum.photos/200/300?random=102",
                storeId: 26
            }
        ]
    },
    {
        id: '27',
        logo: 'https://picsum.photos/200/300?random=27',
        name: 'Pizza no Ponto',
        star: 4.7,
        frete: 'Gratis',
        distancia: '1,2 km',
        tempoPreparo: '25-35 min',
        category: 'Pizzas',
        cupom: '',
        lojaSuper: img,
        produtos: [
            {
                id: 1052,
                name: "Pizza de Mussarela",
                price: 39.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e orégano.",
                photo: "https://picsum.photos/200/300?random=103",
                storeId: 27
            },
            {
                id: 1053,
                name: "Pizza de Calabresa",
                price: 42.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e calabresa fatiada.",
                photo: "https://picsum.photos/200/300?random=104",
                storeId: 27
            }
        ]
    },
    {
        id: '28',
        logo: 'https://picsum.photos/200/300?random=28',
        name: 'Sushi Shop',
        star: 4.4,
        frete: 'R$ 6,00',
        distancia: '2,0 km',
        tempoPreparo: '30-40 min',
        category: 'Japonesa',
        cupom: 'Desconto de 10%',
        lojaSuper: '',
        produtos: [
            {
                id: 1054,
                name: "Sashimi de Salmão",
                price: 37.99,
                category: "Japonesa",
                description: "Sashimi de salmão fresco cortado em fatias finas.",
                photo: "https://picsum.photos/200/300?random=105",
                storeId: 28
            },
            {
                id: 1055,
                name: "Yakissoba de Frango",
                price: 29.99,
                category: "Japonesa",
                description: "Macarrão oriental com frango, legumes e molho shoyu.",
                photo: "https://picsum.photos/200/300?random=106",
                storeId: 28
            }
        ]
    },
    {
        id: '29',
        logo: 'https://picsum.photos/200/300?random=29',
        name: 'Massas do Chef',
        star: 4.6,
        frete: 'Gratis',
        distancia: '3,1 km',
        tempoPreparo: '40-50 min',
        category: 'Massas',
        cupom: '',
        lojaSuper: img,
        produtos: [
            {
                id: 1056,
                name: "Fettucc",
                price: 49.99,
                category: "Massas",
                description: "Massa italiana com molho de queijo, ovos, pancetta e pimenta do reino.",
                photo: "https://picsum.photos/200/300?random=107",
                storeId: 29
            },
            {
                id: 1057,
                name: "Ravioli de Frango",
                price: 45.99,
                category: "Massas",
                description: "Massa fresca recheada com carne de frango, molho de tomate e manjericão.",
                photo: "https://picsum.photos/200/300?random=108",
                storeId: 29
            }
        ]
    },
    {
        id: '30',
        logo: 'https://picsum.photos/200/300?random=30',
        name: 'Burguer Gourmet',
        star: 4.5,
        frete: 'R$ 5,50',
        distancia: '1,7 km',
        tempoPreparo: '20-30 min',
        category: 'Hambúrgueres',
        cupom: 'Cupom de R$ 20,00',
        lojaSuper: '',
        produtos: [
            {
                id: 1058,
                name: "Hambúrguer de Picanha",
                price: 29.99,
                category: "Hambúrgueres",
                description: "Hambúrguer de picanha com queijo cheddar, bacon e molho especial.",
                photo: "https://picsum.photos/200/300?random=109",
                storeId: 30
            },
            {
                id: 1059,
                name: "Cheeseburger Gourmet",
                price: 27.99,
                category: "Hambúrgueres",
                description: "Hambúrguer artesanal com queijo cheddar, cebola caramelizada e molho especial.",
                photo: "https://picsum.photos/200/300?random=110",
                storeId: 30
            }
        ]
    },
    {
        id: '31',
        logo: 'https://picsum.photos/200/300?random=31',
        name: 'Pizzaria do Chef',
        star: 4.9,
        frete: 'Gratis',
        distancia: '2,2 km',
        tempoPreparo: '25-35 min',
        category: 'Pizzas',
        cupom: '',
        lojaSuper: img,
        produtos: [
            {
                id: 1060,
                name: "Pizza de Mussarela",
                price: 39.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e orégano.",
                photo: "https://picsum.photos/200/300?random=111",
                storeId: 31
            },
            {
                id: 1061,
                name: "Pizza de Calabresa",
                price: 42.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e calabresa fatiada.",
                photo: "https://picsum.photos/200/300?random=112",
                storeId: 31
            }
        ]
    },
    {
        id: '32',
        logo: 'https://picsum.photos/200/300?random=32',
        name: 'Sushibar',
        star: 4.2,
        frete: 'R$ 6,00',
        distancia: '3,0 km',
        tempoPreparo: '40-50 min',
        category: 'Japonesa',
        cupom: 'Cupom de 10% OFF',
        lojaSuper: '',
        produtos: [
            {
                id: 1062,
                name: "Sashimi de Salmão",
                price: 37.99,
                category: "Japonesa",
                description: "Sashimi de salmão fresco cortado em fatias finas.",
                photo: "https://picsum.photos/200/300?random=113",
                storeId: 32
            },
            {
                id: 1063,
                name: "Yakissoba de Frango",
                price: 29.99,
                category: "Japonesa",
                description: "Macarrão oriental com frango, legumes e molho shoyu.",
                photo: "https://picsum.photos/200/300?random=114",
                storeId: 32
            }
        ]
    },
    {
        id: '33',
        logo: 'https://picsum.photos/200/300?random=33',
        name: 'Massas da Vovó',
        star: 4.4,
        frete: 'Gratis',
        distancia: '1,8 km',
        tempoPreparo: '20-30 min',
        category: 'Massas',
        cupom: '',
        lojaSuper: img,
        produtos: [
            {
                id: 1064,
                name: "Fettucc",
                price: 49.99,
                category: "Massas",
                description: "Massa italiana com molho de queijo, ovos, pancetta e pimenta do reino.",
                photo: "https://picsum.photos/200/300?random=115",
                storeId: 33
            },
            {
                id: 1065,
                name: "Ravioli de Frango",
                price: 45.99,
                category: "Massas",
                description: "Massa fresca recheada com carne de frango, molho de tomate e manjericão.",
                photo: "https://picsum.photos/200/300?random=116",
                storeId: 33
            }
        ]
    },
    {
        id: '34',
        logo: 'https://picsum.photos/200/300?random=34',
        name: 'Lanches do Zé',
        star: 4.3,
        frete: 'R$ 5,00',
        distancia: '2,5 km',
        tempoPreparo: '25-35 min',
        category: 'Lanches',
        cupom: 'Desconto de 15%',
        lojaSuper: '',
        produtos: [
            {
                id: 1066,
                name: "Cachorro Quente",
                price: 14.99,
                category: "Lanches",
                description: "Pão com salsicha, molho de tomate, milho, ervilha e batata palha.",
                photo: "https://picsum.photos/200/300?random=117",
                storeId: 34
            },
            {
                id: 1067,
                name: "Misto Quente",
                price: 12.99,
                category: "Lanches",
                description: "Pão de forma com queijo e presunto, grelhado na chapa.",
                photo: "https://picsum.photos/200/300?random=118",
                storeId: 34
            }
        ]
    },
    {
        id: '35',
        logo: 'https://picsum.photos/200/300?random=35',
        name: 'Churrasco do Rei',
        star: 4.7,
        frete: 'Gratis',
        distancia: '3,4 km',
        tempoPreparo: '50-60 min',
        category: 'Churrascaria',
        cupom: '',
        lojaSuper: img,
        produtos: [
            {
                id: 1068,
                name: "Picanha na Brasa",
                price: 89.99,
                category: "Churrascaria",
                description: "Picanha bovina grelhada na brasa com farofa e vinagrete.",
                photo: "https://picsum.photos/200/300?random=119",
                storeId: 35
            },
            {
                id: 1069,
                name: "Costela de Porco",
                price: 79.99,
                category: "Churrascaria",
                description: "Costela de porco assada no bafo com molho barbecue.",
                photo: "https://picsum.photos/200/300?random=120",
                storeId: 35
            }
        ]
    },
    {
        id: '36',
        logo: 'https://picsum.photos/200/300?random=36',
        name: 'Hamburgueria do João',
        star: 4.8,
        frete: 'R$ 4,00',
        distancia: '2,2 km',
        tempoPreparo: '15-25 min',
        category: 'Hambúrgueres',
        cupom: 'Cupom de 20% OFF',
        lojaSuper: '',
        produtos: [
            {
                id: 1070,
                name: "X-Burguer",
                price: 19.99,
                category: "Hambúrgueres",
                description: "Pão com hambúrguer de carne bovina, queijo, alface e tomate.",
                photo: "https://picsum.photos/200/300?random=121",
                storeId: 36
            },
            {
                id: 1071,
                name: "X-Salada",
                price: 24.99,
                category: "Hambúrgueres",
                description: "Pão com hambúrguer de carne bovina, queijo, alface, tomate e maionese.",
                photo: "https://picsum.photos/200/300?random=122",
                storeId: 36
            }
        ]
    },
    {
        id: '37',
        logo: 'https://picsum.photos/200/300?random=37',
        name: 'Pizza do Bairro',
        star: 4.5,
        frete: 'Gratis',
        distancia: '1,3 km',
        tempoPreparo: '25-35 min',
        category: 'Pizzas',
        cupom: '',
        lojaSuper: img,
        produtos: [
            {
                id: 1072,
                name: "Pizza de Mussarela",
                price: 39.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e orégano.",
                photo: "https://picsum.photos/200/300?random=123",
                storeId: 37
            },
            {
                id: 1073,
                name: "Pizza de Calabresa",
                price: 42.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e calabresa fatiada.",
                photo: "https://picsum.photos/200/300?random=124",
                storeId: 37
            }
        ]
    },
    {
        id: '38',
        logo: 'https://picsum.photos/200/300?random=38',
        name: 'Sushi Mania',
        star: 4.2,
        frete: 'R$ 6,50',
        distancia: '3,6 km',
        tempoPreparo: '40-50 min',
        category: 'Japonesa',
        cupom: 'Desconto de 10%',
        lojaSuper: '',
        produtos: [
            {
                id: 1074,
                name: "Sashimi de Salmão",
                price: 37.99,
                category: "Japonesa",
                description: "Sashimi de salmão fresco cortado em fatias finas.",
                photo: "https://picsum.photos/200/300?random=125",
                storeId: 38
            },
            {
                id: 1075,
                name: "Yakissoba de Frango",
                price: 29.99,
                category: "Japonesa",
                description: "Macarrão oriental com frango, legumes e molho shoyu.",
                photo: "https://picsum.photos/200/300?random=126",
                storeId: 38
            }
        ]
    },
    {
        id: '39',
        logo: 'https://picsum.photos/200/300?random=39',
        name: 'Pasta & Pizzas',
        star: 4.7,
        frete: 'Gratis',
        distancia: '2,1 km',
        tempoPreparo: '30-40 min',
        category: 'Massas',
        cupom: '',
        lojaSuper: img,
        produtos: [
            {
                id: 1076,
                name: "Fettucc",
                price: 49.99,
                category: "Massas",
                description: "Massa italiana com molho de queijo, ovos, pancetta e pimenta do reino.",
                photo: "https://picsum.photos/200/300?random=127",
                storeId: 39
            },
            {
                id: 1077,
                name: "Ravioli de Frango",
                price: 45.99,
                category: "Massas",
                description: "Massa fresca recheada com carne de frango, molho de tomate e manjericão.",
                photo: "https://picsum.photos/200/300?random=128",
                storeId: 39
            }
        ]
    },
    {
        id: '40',
        logo: 'https://picsum.photos/200/300?random=40',
        name: 'Lanchonete do Chef',
        star: 4.6,
        frete: 'R$ 4,50',
        distancia: '2,0 km',
        tempoPreparo: '15-25 min',
        category: 'Lanches',
        cupom: 'Cupom de 15% OFF',
        lojaSuper: '',
        produtos: [
            {
                id: 1078,
                name: "Cachorro Quente",
                price: 14.99,
                category: "Lanches",
                description: "Pão com salsicha, molho de tomate, milho, ervilha e batata palha.",
                photo: "https://picsum.photos/200/300?random=129",
                storeId: 40
            },
            {
                id: 1079,
                name: "Misto Quente",
                price: 12.99,
                category: "Lanches",
                description: "Pão de forma com queijo e presunto, grelhado na chapa.",
                photo: "https://picsum.photos/200/300?random=130",
                storeId: 40
            }
        ]
    },
    {
        id: '41',
        logo: 'https://picsum.photos/200/300?random=41',
        name: 'Churrasco do Zé',
        star: 4.4,
        frete: 'Gratis',
        distancia: '3,2 km',
        tempoPreparo: '50-60 min',
        category: 'Churrascaria',
        cupom: '',
        lojaSuper: img,
        produtos: [
            {
                id: 1080,
                name: "Picanha na Brasa",
                price: 89.99,
                category: "Churrascaria",
                description: "Picanha bovina grelhada na brasa com farofa e vinagrete.",
                photo: "https://picsum.photos/200/300?random=131",
                storeId: 41
            },
            {
                id: 1081,
                name: "Costela de Porco",
                price: 79.99,
                category: "Churrascaria",
                description: "Costela de porco assada no bafo com molho barbecue.",
                photo: "https://picsum.photos/200/300?random=132",
                storeId: 41
            }
        ]
    },
    {
        id: '42',
        logo: 'https://picsum.photos/200/300?random=42',
        name: 'Burguer da Vila',
        star: 4.3,
        frete: 'R$ 5,50',
        distancia: '1,9 km',
        tempoPreparo: '20-30 min',
        category: 'Hambúrgueres',
        cupom: 'Desconto de 5%',
        lojaSuper: '',
        produtos: [
            {
                id: 1082,
                name: "Hambúrguer de Picanha",
                price: 29.99,
                category: "Hambúrgueres",
                description: "Hambúrguer de picanha com queijo cheddar, bacon e molho especial.",
                photo: "https://picsum.photos/200/300?random=133",
                storeId: 42
            },
            {
                id: 1083,
                name: "Cheeseburger Gourmet",
                price: 27.99,
                category: "Hambúrgueres",
                description: "Hambúrguer artesanal com queijo cheddar, cebola caramelizada e molho especial.",
                photo: "https://picsum.photos/200/300?random=134",
                storeId: 42
            }
        ]
    },
    {
        id: '43',
        logo: 'https://picsum.photos/200/300?random=43',
        name: 'Pizza da Praça',
        star: 4.8,
        frete: 'Gratis',
        distancia: '2,6 km',
        tempoPreparo: '25-35 min',
        category: 'Pizzas',
        cupom: '',
        lojaSuper: img,
        produtos: [
            {
                id: 1084,
                name: "Pizza de Mussarela",
                price: 39.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e orégano.",
                photo: "https://picsum.photos/200/300?random=135",
                storeId: 43
            },
            {
                id: 1085,
                name: "Pizza de Calabresa",
                price: 42.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e calabresa fatiada.",
                photo: "https://picsum.photos/200/300?random=136",
                storeId: 43
            }
        ]
    },
    {
        id: '44',
        logo: 'https://picsum.photos/200/300?random=44',
        name: 'Sushi Grill',
        star: 4.5,
        frete: 'R$ 6,00',
        distancia: '3,0 km',
        tempoPreparo: '20-30 min',
        category: 'Japonesa',
        cupom: 'Cupom de 10% OFF',
        lojaSuper: '',
        produtos: [
            {
                id: 1086,
                name: "Sashimi de Salmão",
                price: 37.99,
                category: "Japonesa",
                description: "Sashimi de salmão fresco cortado em fatias finas.",
                photo: "https://picsum.photos/200/300?random=137",
                storeId: 44
            },
            {
                id: 1087,
                name: "Yakissoba de Frango",
                price: 29.99,
                category: "Japonesa",
                description: "Macarrão oriental com frango, legumes e molho shoyu.",
                photo: "https://picsum.photos/200/300?random=138",
                storeId: 44
            }
        ]
    },
    {
        id: '45',
        logo: 'https://picsum.photos/200/300?random=45',
        name: 'Massas do Chef',
        star: 4.6,
        frete: 'Gratis',
        distancia: '2,4 km',
        tempoPreparo: '40-50 min',
        category: 'Massas',
        cupom: '',
        lojaSuper: img,
        produtos: [
            {
                id: 1088,
                name: "Fettucc",
                price: 49.99,
                category: "Massas",
                description: "Massa italiana com molho de queijo, ovos, pancetta e pimenta do reino.",
                photo: "https://picsum.photos/200/300?random=139",
                storeId: 45
            },
            {
                id: 1089,
                name: "Ravioli de Frango",
                price: 45.99,
                category: "Massas",
                description: "Massa fresca recheada com carne de frango, molho de tomate e manjericão.",
                photo: "https://picsum.photos/200/300?random=140",
                storeId: 45
            }
        ]
    },
    {
        id: '46',
        logo: 'https://picsum.photos/200/300?random=46',
        name: 'Hamburgueria do Zé',
        star: 4.1,
        frete: 'R$ 5,00',
        distancia: '2,8 km',
        tempoPreparo: '25-35 min',
        category: 'Hambúrgueres',
        cupom: 'Desconto de 10%',
        lojaSuper: '',
        produtos: [
            {
                id: 1090,
                name: "Hambúrguer de Picanha",
                price: 29.99,
                category: "Hambúrgueres",
                description: "Hambúrguer de picanha com queijo cheddar, bacon e molho especial.",
                photo: "https://picsum.photos/200/300?random=141",
                storeId: 46
            },
            {
                id: 1091,
                name: "Cheeseburger Gourmet",
                price: 27.99,
                category: "Hambúrgueres",
                description: "Hambúrguer artesanal com queijo cheddar, cebola caramelizada e molho especial.",
                photo: "https://picsum.photos/200/300?random=142",
                storeId: 46
            }
        ]
    },
    {
        id: '47',
        logo: 'https://picsum.photos/200/300?random=47',
        name: 'Pizza Fina',
        star: 4.2,
        frete: 'Gratis',
        distancia: '1,8 km',
        tempoPreparo: '20-30 min',
        category: 'Pizzas',
        cupom: '',
        lojaSuper: img,
        produtos: [
            {
                id: 1056,
                name: "Pizza de Mussarela",
                price: 39.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e orégano.",
                photo: "https://picsum.photos/200/300?random=107",
                storeId: 47
            },
            {
                id: 1057,
                name: "Pizza de Calabresa",
                price: 42.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e calabresa fatiada.",
                photo: "https://picsum.photos/200/300?random=108",
                storeId: 47
            }
        ]
    },
    {
        id: '48',
        logo: 'https://picsum.photos/200/300?random=48',
        name: 'Sushi House',
        star: 4.4,
        frete: 'R$ 6,50',
        distancia: '3,3 km',
        tempoPreparo: '40-50 min',
        category: 'Japonesa',
        cupom: 'Cupom de 15%',
        lojaSuper: '',
        produtos: [
            {
                id: 1056,
                name: "Sashimi de Salmão",
                price: 37.99,
                category: "Japonesa",
                description: "Sashimi de salmão fresco cortado em fatias finas.",
                photo: "https://picsum.photos/200/300?random=107",
                storeId: 48
            },
            {
                id: 1057,
                name: "Yakissoba de Frango",
                price: 29.99,
                category: "Japonesa",
                description: "Macarrão oriental com frango, legumes e molho shoyu.",
                photo: "https://picsum.photos/200/300?random=108",
                storeId: 48
            }
        ]
    },
    {
        id: '49',
        logo: 'https://picsum.photos/200/300?random=49',
        name: 'Pizza do João',
        star: 4.3,
        frete: 'R$ 5,00',
        distancia: '2,0 km',
        tempoPreparo: '40-50 min',
        category: 'Pizzas',
        cupom: '',
        lojaSuper: img,
        produtos: [
            {
                id: 1056,
                name: "Pizza de Mussarela",
                price: 39.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e orégano.",
                photo: "https://picsum.photos/200/300?random=107",
                storeId: 49
            },
            {
                id: 1057,
                name: "Pizza de Calabresa",
                price: 42.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e calabresa fatiada.",
                photo: "https://picsum.photos/200/300?random=108",
                storeId: 49
            }
        ]
    },
    {
        id: '50',
        logo: 'https://picsum.photos/200/300?random=50',
        name: 'Burgueria do Zé',
        star: 4.7,
        frete: 'Gratis',
        distancia: '2,2 km',
        tempoPreparo: '20-30 min',
        category: 'Hambúrgueres',
        cupom: 'Cupom de R$ 10,00 disponível',
        lojaSuper: img,
        produtos: [
            {
                id: 1056,
                name: "X-Burguer",
                price: 19.99,
                category: "Hambúrgueres",
                description: "Pão com hambúrguer de carne bovina, queijo, alface e tomate.",
                photo: "https://picsum.photos/200/300?random=107",
                storeId: 50
            },
            {
                id: 1057,
                name: "X-Salada",
                price: 24.99,
                category: "Hambúrgueres",
                description: "Pão com hambúrguer de carne bovina, queijo, alface, tomate e maionese.",
                photo: "https://picsum.photos/200/300?random=108",
                storeId: 50
            }
        ]
    }
];