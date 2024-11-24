import img from '../../../assets/star.png';

export const stores = [
    {
        id: '1',
        logo: 'https://s2.glbimg.com/IaEnP49buSdSUDftlMxVrq3-ZDo=/940x523/e.glbimg.com/og/ed/f/original/2019/04/26/loucosporti1.jpg',
        name: 'Hambúrgueria Top',
        star: 4.5,
        frete: 'Gratis',
        distancia: '1,5 km',
        tempoPreparo: '30-40 min',
        category: 'Hambúrgueres',
        cupom: '',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=99',
        produtos: [
            {
                id: 1000,
                name: "Hambúrguer Clássico",
                price: 24.99,
                category: "Hambúrgueres",
                description: "Hambúrguer de carne 100% bovina com queijo cheddar, alface e tomate.",
                photo: "https://www.kcms.com.br/blog/wp-content/uploads/2022/03/cardapio-de-hamburgueria-tradicional.jpg",
                storeId: 1
            },
            {
                id: 1001,
                name: "Cheeseburger Gourmet",
                price: 27.99,
                category: "Hambúrgueres",
                description: "Hambúrguer artesanal com queijo cheddar, cebola caramelizada e molho especial.",
                photo: "https://media.istockphoto.com/id/2061716709/pt/foto/grilled-rib-burger.jpg?s=2048x2048&w=is&k=20&c=4wSjb7tewMWXwQUpExn0ofN-fIDQ9llUgabRqN5P8EA=",
                storeId: 1
            }
        ]
    },
    {
        id: '2',
        logo: 'https://loremflickr.com/200/300/food?lock=2',
        name: 'Pizzaria Italiana',
        star: 4.7,
        frete: 'Gratis',
        distancia: '1,0 km',
        tempoPreparo: '20-30 min',
        category: 'Pizzas',
        cupom: 'Cupom de 15% OFF',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=98',
        produtos: [
            {
                id: 1002,
                name: "Pizza Margherita",
                price: 49.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella, manjericão fresco e azeite.",
                photo: "https://loremflickr.com/200/300/food?lock=53",
                storeId: 2
            },
            {
                id: 1003,
                name: "Pizza Pepperoni",
                price: 55.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e fatias de pepperoni crocante.",
                photo: "https://loremflickr.com/200/300/food?lock=54",
                storeId: 2
            },
            {
                id: 1004,
                name: "Pizza Quatro Queijos",
                price: 59.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella, queijo gorgonzola, queijo parmesão e queijo provolone.",
                photo: "https://loremflickr.com/200/300/food?lock=55",
                storeId: 2
            },
            {
                id: 1005,
                name: "Pizza Calabresa",
                price: 57.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e calabresa fatiada.",
                photo: "https://loremflickr.com/200/300/food?lock=56",
                storeId: 2
            },
            {
                id: 1006,
                name: "Pizza Frango com Catupiry",
                price: 62.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella, frango desfiado e catupiry.",
                photo: "https://loremflickr.com/200/300/food?lock=57",
                storeId: 2
            },
            {
                id: 1007,
                name: "Pizza Portuguesa",
                price: 64.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella, presunto, ovo, azeitona e cebola.",
                photo: "https://loremflickr.com/200/300/food?lock=58",
                storeId: 2
            },
            {
                id: 1008,
                name: "Pizza Vegetariana",
                price: 56.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella, brócolis, cogumelos e pimentão.",
                photo: "https://loremflickr.com/200/300/food?lock=59",
                storeId: 2
            },
            {
                id: 1009,
                name: "Pizza Frutos do Mar",
                price: 67.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella, camarão, lula e molho branco.",
                photo: "https://loremflickr.com/200/300/food?lock=60",
                storeId: 2
            },
            {
                id: 1010,
                name: "Pizza de Carne Seca",
                price: 63.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e carne seca desfiada.",
                photo: "https://loremflickr.com/200/300/food?lock=61",
                storeId: 2
            },
            {
                id: 1011,
                name: "Pizza de Bacon com Cheddar",
                price: 61.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella, bacon crocante e cheddar.",
                photo: "https://loremflickr.com/200/300/food?lock=62",
                storeId: 2
            },
            {
                id: 1012,
                name: "Pizza de Pepperoni com Bacon",
                price: 65.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella, pepperoni e bacon crocante.",
                photo: "https://loremflickr.com/200/300/food?lock=63",
                storeId: 2
            }
        ]
    },
    {
        id: '3',
        logo: 'https://loremflickr.com/200/300/food?lock=3',
        name: 'Sushi Master',
        star: 4.8,
        frete: 'R$ 6,00',
        distancia: '3,0 km',
        tempoPreparo: '25-35 min',
        category: 'Japonesa',
        cupom: '',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=97',
        produtos: [
            {
                id: 1004,
                name: "Sushi Tradicional",
                price: 34.99,
                category: "Japonesa",
                description: "Combinado de sushi com salmão, atum, e camarões frescos.",
                photo: "https://loremflickr.com/200/300/food?lock=55",
                storeId: 3
            },
            {
                id: 1005,
                name: "Temaki de Salmão",
                price: 21.99,
                category: "Japonesa",
                description: "Temaki recheado com salmão fresco, alga nori e arroz temperado.",
                photo: "https://loremflickr.com/200/300/food?lock=56",
                storeId: 3
            }
        ]
    },
    {
        id: '4',
        logo: 'https://loremflickr.com/200/300/food?lock=4',
        name: 'Pasta House',
        star: 4.4,
        frete: 'Gratis',
        distancia: '2,5 km',
        tempoPreparo: '40-50 min',
        category: 'Massas',
        cupom: 'Desconto de 10% em todas as massas',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=96',
        produtos: [
            {
                id: 1006,
                name: "Spaghetti Carbonara",
                price: 39.99,
                category: "Massas",
                description: "Massa italiana com molho de queijo, ovos, pancetta e pimenta do reino.",
                photo: "https://loremflickr.com/200/300/food?lock=57",
                storeId: 4
            },
            {
                id: 1007,
                name: "Ravioli de Carne",
                price: 45.99,
                category: "Massas",
                description: "Massa fresca recheada com carne bovina, molho de tomate e manjericão.",
                photo: "https://loremflickr.com/200/300/food?lock=58",
                storeId: 4
            }
        ]
    },
    {
        id: '5',
        logo: 'https://loremflickr.com/200/300/food?lock=5',
        name: 'Doces da Vovó',
        star: 4.9,
        frete: 'Gratis',
        distancia: '1,2 km',
        tempoPreparo: '10-15 min',
        category: 'Doces',
        cupom: '',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=95',
        produtos: [
            {
                id: 1008,
                name: "Bolo de Chocolate",
                price: 29.99,
                category: "Doces",
                description: "Bolo de chocolate com cobertura de brigadeiro e granulado.",
                photo: "https://loremflickr.com/200/300/food?lock=59",
                storeId: 5
            },
            {
                id: 1009,
                name: "Brigadeiro Gourmet",
                price: 19.99,
                category: "Doces",
                description: "Brigadeiro tradicional com cobertura de chocolate belga.",
                photo: "https://loremflickr.com/200/300/food?lock=60",
                storeId: 5
            }
        ]
    },
    {
        id: '6',
        logo: 'https://loremflickr.com/200/300/food?lock=52',
        name: 'Hamburgueria do João',
        star: 4.2,
        frete: 'R$ 7,00',
        distancia: '4,5 km',
        tempoPreparo: '30-40 min',
        category: 'Hambúrgueres',
        cupom: 'Cupom de 20% OFF',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=94',
        produtos: [
            {
                id: 1010,
                name: "Hambúrguer de Frango",
                price: 21.99,
                category: "Hambúrgueres",
                description: "Hambúrguer de frango grelhado com queijo prato, alface e tomate.",
                photo: "https://loremflickr.com/200/300/food?lock=61",
                storeId: 6
            },
            {
                id: 1011,
                name: "Cheeseburger Duplo",
                price: 31.99,
                category: "Hambúrgueres",
                description: "Dois hambúrgueres de carne bovina com queijo cheddar e bacon.",
                photo: "https://loremflickr.com/200/300/food?lock=62",
                storeId: 6
            }
        ]
    },
    {
        id: '7',
        logo: 'https://loremflickr.com/200/300/food?lock=7',
        name: 'Pizzaria Bella Napoli',
        star: 4.6,
        frete: 'Gratis',
        distancia: '1,8 km',
        tempoPreparo: '25-35 min',
        category: 'Pizzas',
        cupom: '',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=94',
        produtos: [
            {
                id: 1012,
                name: "Pizza de Calabresa",
                price: 42.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e calabresa fatiada.",
                photo: "https://loremflickr.com/200/300/food?lock=63",
                storeId: 7
            },
            {
                id: 1013,
                name: "Pizza de Frango com Catupiry",
                price: 49.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella, frango desfiado e catupiry.",
                photo: "https://loremflickr.com/200/300/food?lock=64",
                storeId: 7
            }
        ]
    },
    {
        id: '8',
        logo: 'https://loremflickr.com/200/300/food?lock=8',
        name: 'Sushi Place',
        star: 4.3,
        frete: 'R$ 5,50',
        distancia: '2,2 km',
        tempoPreparo: '30-40 min',
        category: 'Japonesa',
        cupom: 'Cupom de R$ 15,00',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=93',
        produtos: [
            {
                id: 1014,
                name: "Sashimi de Salmão",
                price: 37.99,
                category: "Japonesa",
                description: "Sashimi de salmão fresco cortado em fatias finas.",
                photo: "https://loremflickr.com/200/300/food?lock=65",
                storeId: 8
            },
            {
                id: 1015,
                name: "Yakissoba de Frango",
                price: 29.99,
                category: "Japonesa",
                description: "Macarrão oriental com frango, legumes e molho shoyu.",
                photo: "https://loremflickr.com/200/300/food?lock=66",
                storeId: 8
            }
        ]
    },
    {
        id: '9',
        logo: 'https://loremflickr.com/200/300/food?lock=9',
        name: 'Massas Italianas',
        star: 4.4,
        frete: 'Gratis',
        distancia: '3,0 km',
        tempoPreparo: '20-30 min',
        category: 'Massas',
        cupom: '',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=92',
        produtos: [
            {
                id: 1016,
                name: "Lasanha Bolonhesa",
                price: 47.99,
                category: "Massas",
                description: "Massa fresca com molho bolonhesa, queijo e presunto.",
                photo: "https://loremflickr.com/200/300/food?lock=67",
                storeId: 9
            },
            {
                id: 1017,
                name: "Ravioli de Queijo",
                price: 39.99,
                category: "Massas",
                description: "Massa fresca recheada com queijo e molho de tomate.",
                photo: "https://loremflickr.com/200/300/food?lock=68",
                storeId: 9
            }
        ]
    },
    {
        id: '10',
        logo: 'https://loremflickr.com/200/300/food?lock=59',
        name: 'Lanchonete Express',
        star: 4.1,
        frete: 'R$ 4,00',
        distancia: '2,8 km',
        tempoPreparo: '10-20 min',
        category: 'Lanches',
        cupom: 'Cupom de 10% OFF',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=91',
        produtos: [
            {
                id: 1018,
                name: "Cachorro Quente",
                price: 14.99,
                category: "Lanches",
                description: "Pão com salsicha, molho de tomate, milho, ervilha e batata palha.",
                photo: "https://loremflickr.com/200/300/food?lock=69",
                storeId: 10
            },
            {
                id: 1019,
                name: "Misto Quente",
                price: 12.99,
                category: "Lanches",
                description: "Pão de forma com queijo e presunto, grelhado na chapa.",
                photo: "https://loremflickr.com/200/300/food?lock=70",
                storeId: 10
            }
        ]
    },
    {
        id: '11',
        logo: 'https://loremflickr.com/200/300/food?lock=70',
        name: 'Churrascaria do Zé',
        star: 4.7,
        frete: 'Gratis',
        distancia: '5,0 km',
        tempoPreparo: '50-60 min',
        category: 'Churrascaria',
        cupom: '',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=90',
        produtos: [
            {
                id: 1020,
                name: "Picanha na Brasa",
                price: 89.99,
                category: "Churrascaria",
                description: "Picanha bovina grelhada na brasa com farofa e vinagrete.",
                photo: "https://loremflickr.com/200/300/food?lock=71",
                storeId: 11
            },
            {
                id: 1021,
                name: "Costela de Porco",
                price: 79.99,
                category: "Churrascaria",
                description: "Costela de porco assada no bafo com molho barbecue.",
                photo: "https://loremflickr.com/200/300/food?lock=72",
                storeId: 11
            }
        ]
    },
    {
        id: '12',
        logo: 'https://loremflickr.com/200/300/food?lock=12',
        name: 'Burguer Shop',
        star: 4.5,
        frete: 'R$ 3,00',
        distancia: '1,5 km',
        tempoPreparo: '20-30 min',
        category: 'Hambúrgueres',
        cupom: 'Cupom de 10% OFF',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=89',
        produtos: [
            {
                id: 1022,
                name: "X-Burguer",
                price: 19.99,
                category: "Hambúrgueres",
                description: "Pão com hambúrguer de carne bovina, queijo, alface e tomate.",
                photo: "https://loremflickr.com/200/300/food?lock=73",
                storeId: 12
            },
            {
                id: 1023,
                name: "X-Salada",
                price: 24.99,
                category: "Hambúrgueres",
                description: "Pão com hambúrguer de carne bovina, queijo, alface, tomate e maionese.",
                photo: "https://loremflickr.com/200/300/food?lock=74",
                storeId: 12
            }
        ]
    },
    {
        id: '13',
        logo: 'https://loremflickr.com/200/300/food?lock=13',
        name: 'Pizza & Cia',
        star: 4.6,
        frete: 'Gratis',
        distancia: '2,3 km',
        tempoPreparo: '25-35 min',
        category: 'Pizzas',
        cupom: '',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=88',
        produtos: [
            {
                id: 1024,
                name: "Pizza de Mussarela",
                price: 39.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e orégano.",
                photo: "https://loremflickr.com/200/300/food?lock=75",
                storeId: 13
            },
            {
                id: 1025,
                name: "Pizza de Calabresa",
                price: 42.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e calabresa fatiada.",
                photo: "https://loremflickr.com/200/300/food?lock=76",
                storeId: 13
            }
        ]
    },
    {
        id: '14',
        logo: 'https://loremflickr.com/200/300/food?lock=5145',
        name: 'Sushiyaki',
        star: 4.2,
        frete: 'R$ 8,00',
        distancia: '3,5 km',
        tempoPreparo: '40-50 min',
        category: 'Japonesa',
        cupom: 'Cupom de 15% OFF',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=87',
        produtos: [
            {
                id: 1026,
                name: "Yakissoba de Legumes",
                price: 24.99,
                category: "Japonesa",
                description: "Macarrão oriental com legumes frescos e molho shoyu.",
                photo: "https://loremflickr.com/200/300/food?lock=77",
                storeId: 14
            },
            {
                id: 1027,
                name: "Sushi de Kani",
                price: 19.99,
                category: "Japonesa",
                description: "Sushi enrolado com kani, cream cheese e cebolinha.",
                photo: "https://loremflickr.com/200/300/food?lock=78",
                storeId: 14
            }
        ]
    },
    {
        id: '15',
        logo: 'https://loremflickr.com/200/300/food?lock=15',
        name: 'Cantina da Nonna',
        star: 4.8,
        frete: 'Gratis',
        distancia: '1,0 km',
        tempoPreparo: '30-40 min',
        category: 'Massas',
        cupom: '',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=86',
        produtos: [
            {
                id: 1028,
                name: "Fettucc",
                price: 49.99,
                category: "Massas",
                description: "Massa italiana com molho de queijo, ovos, pancetta e pimenta do reino.",
                photo: "https://loremflickr.com/200/300/food?lock=79",
                storeId: 15
            },
            {
                id: 1029,
                name: "Ravioli de Frango",
                price: 45.99,
                category: "Massas",
                description: "Massa fresca recheada com carne de frango, molho de tomate e manjericão.",
                photo: "https://loremflickr.com/200/300/food?lock=80",
                storeId: 15
            }
        ]
    },
    {
        id: '16',
        logo: 'https://loremflickr.com/200/300/food?lock=169',
        name: 'Burguer Master',
        star: 4.9,
        frete: 'R$ 4,50',
        distancia: '2,0 km',
        tempoPreparo: '15-25 min',
        category: 'Hambúrgueres',
        cupom: 'Cupom de R$ 10,00 disponível',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=85',
        produtos: [
            {
                id: 1030,
                name: "Hambúrguer de Picanha",
                price: 29.99,
                category: "Hambúrgueres",
                description: "Hambúrguer de picanha com queijo cheddar, bacon e molho especial.",
                photo: "https://loremflickr.com/200/300/food?lock=81",
                storeId: 16
            },
            {
                id: 1031,
                name: "Cheeseburger Gourmet",
                price: 27.99,
                category: "Hambúrgueres",
                description: "Hambúrguer artesanal com queijo cheddar, cebola caramelizada e molho especial.",
                photo: "https://loremflickr.com/200/300/food?lock=82",
                storeId: 16
            }
        ]
    },
    {
        id: '17',
        logo: 'https://loremflickr.com/200/300/food?lock=0',
        name: 'Pizza da Vila',
        star: 4.3,
        frete: 'Gratis',
        distancia: '2,8 km',
        tempoPreparo: '25-35 min',
        category: 'Pizzas',
        cupom: '',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=84',
        produtos: [
            {
                id: 1032,
                name: "Pizza de Mussarela",
                price: 39.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e orégano.",
                photo: "https://loremflickr.com/200/300/food?lock=83",
                storeId: 17
            },
            {
                id: 1033,
                name: "Pizza de Calabresa",
                price: 42.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e calabresa fatiada.",
                photo: "https://loremflickr.com/200/300/food?lock=84",
                storeId: 17
            }
        ]
    },
    {
        id: '18',
        logo: 'https://loremflickr.com/200/300/food?lock=18',
        name: 'Sushi Mania',
        star: 4.4,
        frete: 'R$ 5,00',
        distancia: '3,0 km',
        tempoPreparo: '20-30 min',
        category: 'Japonesa',
        cupom: 'Desconto de 20%',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=83',
        produtos: [
            {
                id: 1034,
                name: "Sashimi de Salmão",
                price: 37.99,
                category: "Japonesa",
                description: "Sashimi de salmão fresco cortado em fatias finas.",
                photo: "https://loremflickr.com/200/300/food?lock=85",
                storeId: 18
            },
            {
                id: 1035,
                name: "Yakissoba de Frango",
                price: 29.99,
                category: "Japonesa",
                description: "Macarrão oriental com frango, legumes e molho shoyu.",
                photo: "https://loremflickr.com/200/300/food?lock=86",
                storeId: 18
            }
        ]
    },
    {
        id: '19',
        logo: 'https://loremflickr.com/200/300/food?lock=145',
        name: 'Massas da Mamma',
        star: 4.6,
        frete: 'Gratis',
        distancia: '1,3 km',
        tempoPreparo: '40-50 min',
        category: 'Massas',
        cupom: '',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=82',
        produtos: [
            {
                id: 1036,
                name: "Fettucc",
                price: 49.99,
                category: "Massas",
                description: "Massa italiana com molho de queijo, ovos, pancetta e pimenta do reino.",
                photo: "https://loremflickr.com/200/300/food?lock=87",
                storeId: 19
            },
            {
                id: 1037,
                name: "Ravioli de Frango",
                price: 45.99,
                category: "Massas",
                description: "Massa fresca recheada com carne de frango, molho de tomate e manjericão.",
                photo: "https://loremflickr.com/200/300/food?lock=88",
                storeId: 19
            }
        ]
    },
    {
        id: '20',
        logo: 'https://loremflickr.com/200/300/food?lock=204',
        name: 'Hamburgueria Express',
        star: 4.2,
        frete: 'R$ 6,00',
        distancia: '1,6 km',
        tempoPreparo: '10-15 min',
        category: 'Hambúrgueres',
        cupom: 'Cupom de 10% OFF',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=81',
        produtos: [
            {
                id: 1038,
                name: "X-Burguer",
                price: 19.99,
                category: "Hambúrgueres",
                description: "Pão com hambúrguer de carne bovina, queijo, alface e tomate.",
                photo: "https://loremflickr.com/200/300/food?lock=89",
                storeId: 20
            },
            {
                id: 1039,
                name: "X-Salada",
                price: 24.99,
                category: "Hambúrgueres",
                description: "Pão com hambúrguer de carne bovina, queijo, alface, tomate e maionese.",
                photo: "https://loremflickr.com/200/300/food?lock=90",
                storeId: 20
            }
        ]
    },
    {
        id: '21',
        logo: 'https://loremflickr.com/200/300/food?lock=215',
        name: 'Pizzaria Margherita',
        star: 4.7,
        frete: 'Gratis',
        distancia: '3,1 km',
        tempoPreparo: '25-35 min',
        category: 'Pizzas',
        cupom: '',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=80',
        produtos: [
            {
                id: 1040,
                name: "Pizza de Mussarela",
                price: 39.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e orégano.",
                photo: "https://loremflickr.com/200/300/food?lock=91",
                storeId: 21
            },
            {
                id: 1041,
                name: "Pizza de Calabresa",
                price: 42.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e calabresa fatiada.",
                photo: "https://loremflickr.com/200/300/food?lock=92",
                storeId: 21
            }
        ]
    },
    {
        id: '22',
        logo: 'https://loremflickr.com/200/300/food?lock=22',
        name: 'Sushi Fusion',
        star: 4.5,
        frete: 'R$ 4,50',
        distancia: '2,3 km',
        tempoPreparo: '30-40 min',
        category: 'Japonesa',
        cupom: 'Desconto de 15%',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=79',
        produtos: [
            {
                id: 1042,
                name: "Sashimi de Salmão",
                price: 37.99,
                category: "Japonesa",
                description: "Sashimi de salmão fresco cortado em fatias finas.",
                photo: "https://loremflickr.com/200/300/food?lock=93",
                storeId: 22
            },
            {
                id: 1043,
                name: "Yakissoba de Frango",
                price: 29.99,
                category: "Japonesa",
                description: "Macarrão oriental com frango, legumes e molho shoyu.",
                photo: "https://loremflickr.com/200/300/food?lock=94",
                storeId: 22
            }
        ]
    },
    {
        id: '23',
        logo: 'https://loremflickr.com/200/300/food?lock=228',
        name: 'Pasta Bella',
        star: 4.8,
        frete: 'Gratis',
        distancia: '2,0 km',
        tempoPreparo: '40-50 min',
        category: 'Massas',
        cupom: '',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=78',
        produtos: [
            {
                id: 1044,
                name: "Fettucc",
                price: 49.99,
                category: "Massas",
                description: "Massa italiana com molho de queijo, ovos, pancetta e pimenta do reino.",
                photo: "https://loremflickr.com/200/300/food?lock=95",
                storeId: 23
            },
            {
                id: 1045,
                name: "Ravioli de Frango",
                price: 45.99,
                category: "Massas",
                description: "Massa fresca recheada com carne de frango, molho de tomate e manjericão.",
                photo: "https://loremflickr.com/200/300/food?lock=96",
                storeId: 23
            }
        ]
    },
    {
        id: '24',
        logo: 'https://loremflickr.com/200/300/food?lock=24',
        name: 'Lanche do Rei',
        star: 4.1,
        frete: 'R$ 5,00',
        distancia: '2,4 km',
        tempoPreparo: '20-30 min',
        category: 'Lanches',
        cupom: 'Cupom de 5% OFF',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=77',
        produtos: [
            {
                id: 1046,
                name: "Cachorro Quente",
                price: 14.99,
                category: "Lanches",
                description: "Pão com salsicha, molho de tomate, milho, ervilha e batata palha.",
                photo: "https://loremflickr.com/200/300/food?lock=97",
                storeId: 24
            },
            {
                id: 1047,
                name: "Misto Quente",
                price: 12.99,
                category: "Lanches",
                description: "Pão de forma com queijo e presunto, grelhado na chapa.",
                photo: "https://loremflickr.com/200/300/food?lock=98",
                storeId: 24
            }
        ]
    },
    {
        id: '25',
        logo: 'https://loremflickr.com/200/300/food?lock=275',
        name: 'Churrascaria Top',
        star: 4.6,
        frete: 'Gratis',
        distancia: '3,2 km',
        tempoPreparo: '50-60 min',
        category: 'Churrascaria',
        cupom: '',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=77',
        produtos: [
            {
                id: 1048,
                name: "Picanha na Brasa",
                price: 89.99,
                category: "Churrascaria",
                description: "Picanha bovina grelhada na brasa com farofa e vinagrete.",
                photo: "https://loremflickr.com/200/300/food?lock=99",
                storeId: 25
            },
            {
                id: 1049,
                name: "Costela de Porco",
                price: 79.99,
                category: "Churrascaria",
                description: "Costela de porco assada no bafo com molho barbecue.",
                photo: "https://loremflickr.com/200/300/food?lock=100",
                storeId: 25
            }
        ]
    },
    {
        id: '26',
        logo: 'https://loremflickr.com/200/300/food?lock=33 1',
        name: 'Hamburgueria do Zé',
        star: 4.3,
        frete: 'R$ 4,50',
        distancia: '1,9 km',
        tempoPreparo: '20-30 min',
        category: 'Hambúrgueres',
        cupom: 'Cupom de 10% OFF',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=76',
        produtos: [
            {
                id: 1050,
                name: "Hambúrguer de Picanha",
                price: 29.99,
                category: "Hambúrgueres",
                description: "Hambúrguer de picanha com queijo cheddar, bacon e molho especial.",
                photo: "https://loremflickr.com/200/300/food?lock=101",
                storeId: 26
            },
            {
                id: 1051,
                name: "Cheeseburger Gourmet",
                price: 27.99,
                category: "Hambúrgueres",
                description: "Hambúrguer artesanal com queijo cheddar, cebola caramelizada e molho especial.",
                photo: "https://loremflickr.com/200/300/food?lock=102",
                storeId: 26
            }
        ]
    },
    {
        id: '27',
        logo: 'https://loremflickr.com/200/300/food?lock=27',
        name: 'Pizza no Ponto',
        star: 4.7,
        frete: 'Gratis',
        distancia: '1,2 km',
        tempoPreparo: '25-35 min',
        category: 'Pizzas',
        cupom: '',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=75',
        produtos: [
            {
                id: 1052,
                name: "Pizza de Mussarela",
                price: 39.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e orégano.",
                photo: "https://loremflickr.com/200/300/food?lock=103",
                storeId: 27
            },
            {
                id: 1053,
                name: "Pizza de Calabresa",
                price: 42.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e calabresa fatiada.",
                photo: "https://loremflickr.com/200/300/food?lock=104",
                storeId: 27
            }
        ]
    },
    {
        id: '28',
        logo: 'https://loremflickr.com/200/300/food?lock=28',
        name: 'Sushi Shop',
        star: 4.4,
        frete: 'R$ 6,00',
        distancia: '2,0 km',
        tempoPreparo: '30-40 min',
        category: 'Japonesa',
        cupom: 'Desconto de 10%',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=74',
        produtos: [
            {
                id: 1054,
                name: "Sashimi de Salmão",
                price: 37.99,
                category: "Japonesa",
                description: "Sashimi de salmão fresco cortado em fatias finas.",
                photo: "https://loremflickr.com/200/300/food?lock=105",
                storeId: 28
            },
            {
                id: 1055,
                name: "Yakissoba de Frango",
                price: 29.99,
                category: "Japonesa",
                description: "Macarrão oriental com frango, legumes e molho shoyu.",
                photo: "https://loremflickr.com/200/300/food?lock=106",
                storeId: 28
            }
        ]
    },
    {
        id: '29',
        logo: 'https://loremflickr.com/200/300/food?lock=275',
        name: 'Massas do Chef',
        star: 4.6,
        frete: 'Gratis',
        distancia: '3,1 km',
        tempoPreparo: '40-50 min',
        category: 'Massas',
        cupom: '',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=73',
        produtos: [
            {
                id: 1056,
                name: "Fettucc",
                price: 49.99,
                category: "Massas",
                description: "Massa italiana com molho de queijo, ovos, pancetta e pimenta do reino.",
                photo: "https://loremflickr.com/200/300/food?lock=107",
                storeId: 29
            },
            {
                id: 1057,
                name: "Ravioli de Frango",
                price: 45.99,
                category: "Massas",
                description: "Massa fresca recheada com carne de frango, molho de tomate e manjericão.",
                photo: "https://loremflickr.com/200/300/food?lock=108",
                storeId: 29
            }
        ]
    },
    {
        id: '30',
        logo: 'https://loremflickr.com/200/300/food?lock=73',
        name: 'Burguer Gourmet',
        star: 4.5,
        frete: 'R$ 5,50',
        distancia: '1,7 km',
        tempoPreparo: '20-30 min',
        category: 'Hambúrgueres',
        cupom: 'Cupom de R$ 20,00',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=72',
        produtos: [
            {
                id: 1058,
                name: "Hambúrguer de Picanha",
                price: 29.99,
                category: "Hambúrgueres",
                description: "Hambúrguer de picanha com queijo cheddar, bacon e molho especial.",
                photo: "https://loremflickr.com/200/300/food?lock=109",
                storeId: 30
            },
            {
                id: 1059,
                name: "Cheeseburger Gourmet",
                price: 27.99,
                category: "Hambúrgueres",
                description: "Hambúrguer artesanal com queijo cheddar, cebola caramelizada e molho especial.",
                photo: "https://loremflickr.com/200/300/food?lock=110",
                storeId: 30
            }
        ]
    },
    {
        id: '31',
        logo: 'https://loremflickr.com/200/300/food?lock=31',
        name: 'Pizzaria do Chef',
        star: 4.9,
        frete: 'Gratis',
        distancia: '2,2 km',
        tempoPreparo: '25-35 min',
        category: 'Pizzas',
        cupom: '',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=71',
        produtos: [
            {
                id: 1060,
                name: "Pizza de Mussarela",
                price: 39.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e orégano.",
                photo: "https://loremflickr.com/200/300/food?lock=111",
                storeId: 31
            },
            {
                id: 1061,
                name: "Pizza de Calabresa",
                price: 42.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e calabresa fatiada.",
                photo: "https://loremflickr.com/200/300/food?lock=112",
                storeId: 31
            }
        ]
    },
    {
        id: '32',
        logo: 'https://loremflickr.com/200/300/food?lock=89',
        name: 'Sushibar',
        star: 4.2,
        frete: 'R$ 6,00',
        distancia: '3,0 km',
        tempoPreparo: '40-50 min',
        category: 'Japonesa',
        cupom: 'Cupom de 10% OFF',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=70',
        produtos: [
            {
                id: 1062,
                name: "Sashimi de Salmão",
                price: 37.99,
                category: "Japonesa",
                description: "Sashimi de salmão fresco cortado em fatias finas.",
                photo: "https://loremflickr.com/200/300/food?lock=113",
                storeId: 32
            },
            {
                id: 1063,
                name: "Yakissoba de Frango",
                price: 29.99,
                category: "Japonesa",
                description: "Macarrão oriental com frango, legumes e molho shoyu.",
                photo: "https://loremflickr.com/200/300/food?lock=114",
                storeId: 32
            }
        ]
    },
    {
        id: '33',
        logo: 'https://loremflickr.com/200/300/food?lock=33',
        name: 'Massas da Vovó',
        star: 4.4,
        frete: 'Gratis',
        distancia: '1,8 km',
        tempoPreparo: '20-30 min',
        category: 'Massas',
        cupom: '',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=69',
        produtos: [
            {
                id: 1064,
                name: "Fettucc",
                price: 49.99,
                category: "Massas",
                description: "Massa italiana com molho de queijo, ovos, pancetta e pimenta do reino.",
                photo: "https://loremflickr.com/200/300/food?lock=115",
                storeId: 33
            },
            {
                id: 1065,
                name: "Ravioli de Frango",
                price: 45.99,
                category: "Massas",
                description: "Massa fresca recheada com carne de frango, molho de tomate e manjericão.",
                photo: "https://loremflickr.com/200/300/food?lock=116",
                storeId: 33
            }
        ]
    },
    {
        id: '34',
        logo: 'https://loremflickr.com/200/300/food?lock=98',
        name: 'Lanches do Zé',
        star: 4.3,
        frete: 'R$ 5,00',
        distancia: '2,5 km',
        tempoPreparo: '25-35 min',
        category: 'Lanches',
        cupom: 'Desconto de 15%',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=68',
        produtos: [
            {
                id: 1066,
                name: "Cachorro Quente",
                price: 14.99,
                category: "Lanches",
                description: "Pão com salsicha, molho de tomate, milho, ervilha e batata palha.",
                photo: "https://loremflickr.com/200/300/food?lock=117",
                storeId: 34
            },
            {
                id: 1067,
                name: "Misto Quente",
                price: 12.99,
                category: "Lanches",
                description: "Pão de forma com queijo e presunto, grelhado na chapa.",
                photo: "https://loremflickr.com/200/300/food?lock=118",
                storeId: 34
            }
        ]
    },
    {
        id: '35',
        logo: 'https://loremflickr.com/200/300/food?lock=35',
        name: 'Churrasco do Rei',
        star: 4.7,
        frete: 'Gratis',
        distancia: '3,4 km',
        tempoPreparo: '50-60 min',
        category: 'Churrascaria',
        cupom: '',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=67',
        produtos: [
            {
                id: 1068,
                name: "Picanha na Brasa",
                price: 89.99,
                category: "Churrascaria",
                description: "Picanha bovina grelhada na brasa com farofa e vinagrete.",
                photo: "https://loremflickr.com/200/300/food?lock=119",
                storeId: 35
            },
            {
                id: 1069,
                name: "Costela de Porco",
                price: 79.99,
                category: "Churrascaria",
                description: "Costela de porco assada no bafo com molho barbecue.",
                photo: "https://loremflickr.com/200/300/food?lock=120",
                storeId: 35
            }
        ]
    },
    {
        id: '36',
        logo: 'https://loremflickr.com/200/300/food?lock=36',
        name: 'Hamburgueria do João',
        star: 4.8,
        frete: 'R$ 4,00',
        distancia: '2,2 km',
        tempoPreparo: '15-25 min',
        category: 'Hambúrgueres',
        cupom: 'Cupom de 20% OFF',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=66',
        produtos: [
            {
                id: 1070,
                name: "X-Burguer",
                price: 19.99,
                category: "Hambúrgueres",
                description: "Pão com hambúrguer de carne bovina, queijo, alface e tomate.",
                photo: "https://loremflickr.com/200/300/food?lock=121",
                storeId: 36
            },
            {
                id: 1071,
                name: "X-Salada",
                price: 24.99,
                category: "Hambúrgueres",
                description: "Pão com hambúrguer de carne bovina, queijo, alface, tomate e maionese.",
                photo: "https://loremflickr.com/200/300/food?lock=122",
                storeId: 36
            }
        ]
    },
    {
        id: '37',
        logo: 'https://loremflickr.com/200/300/food?lock=37',
        name: 'Pizza do Bairro',
        star: 4.5,
        frete: 'Gratis',
        distancia: '1,3 km',
        tempoPreparo: '25-35 min',
        category: 'Pizzas',
        cupom: '',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=65',
        produtos: [
            {
                id: 1072,
                name: "Pizza de Mussarela",
                price: 39.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e orégano.",
                photo: "https://loremflickr.com/200/300/food?lock=123",
                storeId: 37
            },
            {
                id: 1073,
                name: "Pizza de Calabresa",
                price: 42.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e calabresa fatiada.",
                photo: "https://loremflickr.com/200/300/food?lock=124",
                storeId: 37
            }
        ]
    },
    {
        id: '38',
        logo: 'https://loremflickr.com/200/300/food?lock=38',
        name: 'Sushi Mania',
        star: 4.2,
        frete: 'R$ 6,50',
        distancia: '3,6 km',
        tempoPreparo: '40-50 min',
        category: 'Japonesa',
        cupom: 'Desconto de 10%',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=64',
        produtos: [
            {
                id: 1074,
                name: "Sashimi de Salmão",
                price: 37.99,
                category: "Japonesa",
                description: "Sashimi de salmão fresco cortado em fatias finas.",
                photo: "https://loremflickr.com/200/300/food?lock=125",
                storeId: 38
            },
            {
                id: 1075,
                name: "Yakissoba de Frango",
                price: 29.99,
                category: "Japonesa",
                description: "Macarrão oriental com frango, legumes e molho shoyu.",
                photo: "https://loremflickr.com/200/300/food?lock=126",
                storeId: 38
            }
        ]
    },
    {
        id: '39',
        logo: 'https://loremflickr.com/200/300/food?lock=39',
        name: 'Pasta & Pizzas',
        star: 4.7,
        frete: 'Gratis',
        distancia: '2,1 km',
        tempoPreparo: '30-40 min',
        category: 'Massas',
        cupom: '',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=63',
        produtos: [
            {
                id: 1076,
                name: "Fettucc",
                price: 49.99,
                category: "Massas",
                description: "Massa italiana com molho de queijo, ovos, pancetta e pimenta do reino.",
                photo: "https://loremflickr.com/200/300/food?lock=127",
                storeId: 39
            },
            {
                id: 1077,
                name: "Ravioli de Frango",
                price: 45.99,
                category: "Massas",
                description: "Massa fresca recheada com carne de frango, molho de tomate e manjericão.",
                photo: "https://loremflickr.com/200/300/food?lock=128",
                storeId: 39
            }
        ]
    },
    {
        id: '40',
        logo: 'https://loremflickr.com/200/300/food?lock=40',
        name: 'Lanchonete do Chef',
        star: 4.6,
        frete: 'R$ 4,50',
        distancia: '2,0 km',
        tempoPreparo: '15-25 min',
        category: 'Lanches',
        cupom: 'Cupom de 15% OFF',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=62',
        produtos: [
            {
                id: 1078,
                name: "Cachorro Quente",
                price: 14.99,
                category: "Lanches",
                description: "Pão com salsicha, molho de tomate, milho, ervilha e batata palha.",
                photo: "https://loremflickr.com/200/300/food?lock=129",
                storeId: 40
            },
            {
                id: 1079,
                name: "Misto Quente",
                price: 12.99,
                category: "Lanches",
                description: "Pão de forma com queijo e presunto, grelhado na chapa.",
                photo: "https://loremflickr.com/200/300/food?lock=130",
                storeId: 40
            }
        ]
    },
    {
        id: '41',
        logo: 'https://loremflickr.com/200/300/food?lock=41',
        name: 'Churrasco do Zé',
        star: 4.4,
        frete: 'Gratis',
        distancia: '3,2 km',
        tempoPreparo: '50-60 min',
        category: 'Churrascaria',
        cupom: '',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=61',
        produtos: [
            {
                id: 1080,
                name: "Picanha na Brasa",
                price: 89.99,
                category: "Churrascaria",
                description: "Picanha bovina grelhada na brasa com farofa e vinagrete.",
                photo: "https://loremflickr.com/200/300/food?lock=131",
                storeId: 41
            },
            {
                id: 1081,
                name: "Costela de Porco",
                price: 79.99,
                category: "Churrascaria",
                description: "Costela de porco assada no bafo com molho barbecue.",
                photo: "https://loremflickr.com/200/300/food?lock=132",
                storeId: 41
            }
        ]
    },
    {
        id: '42',
        logo: 'https://loremflickr.com/200/300/food?lock=42',
        name: 'Burguer da Vila',
        star: 4.3,
        frete: 'R$ 5,50',
        distancia: '1,9 km',
        tempoPreparo: '20-30 min',
        category: 'Hambúrgueres',
        cupom: 'Desconto de 5%',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=60',
        produtos: [
            {
                id: 1082,
                name: "Hambúrguer de Picanha",
                price: 29.99,
                category: "Hambúrgueres",
                description: "Hambúrguer de picanha com queijo cheddar, bacon e molho especial.",
                photo: "https://loremflickr.com/200/300/food?lock=133",
                storeId: 42
            },
            {
                id: 1083,
                name: "Cheeseburger Gourmet",
                price: 27.99,
                category: "Hambúrgueres",
                description: "Hambúrguer artesanal com queijo cheddar, cebola caramelizada e molho especial.",
                photo: "https://loremflickr.com/200/300/food?lock=134",
                storeId: 42
            }
        ]
    },
    {
        id: '43',
        logo: 'https://loremflickr.com/200/300/food?lock=379',
        name: 'Pizza da Praça',
        star: 4.8,
        frete: 'Gratis',
        distancia: '2,6 km',
        tempoPreparo: '25-35 min',
        category: 'Pizzas',
        cupom: '',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=59',
        produtos: [
            {
                id: 1084,
                name: "Pizza de Mussarela",
                price: 39.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e orégano.",
                photo: "https://loremflickr.com/200/300/food?lock=135",
                storeId: 43
            },
            {
                id: 1085,
                name: "Pizza de Calabresa",
                price: 42.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e calabresa fatiada.",
                photo: "https://loremflickr.com/200/300/food?lock=136",
                storeId: 43
            }
        ]
    },
    {
        id: '44',
        logo: 'https://loremflickr.com/200/300/food?lock=44',
        name: 'Sushi Grill',
        star: 4.5,
        frete: 'R$ 6,00',
        distancia: '3,0 km',
        tempoPreparo: '20-30 min',
        category: 'Japonesa',
        cupom: 'Cupom de 10% OFF',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=58',
        produtos: [
            {
                id: 1086,
                name: "Sashimi de Salmão",
                price: 37.99,
                category: "Japonesa",
                description: "Sashimi de salmão fresco cortado em fatias finas.",
                photo: "https://loremflickr.com/200/300/food?lock=137",
                storeId: 44
            },
            {
                id: 1087,
                name: "Yakissoba de Frango",
                price: 29.99,
                category: "Japonesa",
                description: "Macarrão oriental com frango, legumes e molho shoyu.",
                photo: "https://loremflickr.com/200/300/food?lock=138",
                storeId: 44
            }
        ]
    },
    {
        id: '45',
        logo: 'https://loremflickr.com/200/300/food?lock=45',
        name: 'Massas do Chef',
        star: 4.6,
        frete: 'Gratis',
        distancia: '2,4 km',
        tempoPreparo: '40-50 min',
        category: 'Massas',
        cupom: '',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=57',
        produtos: [
            {
                id: 1088,
                name: "Fettucc",
                price: 49.99,
                category: "Massas",
                description: "Massa italiana com molho de queijo, ovos, pancetta e pimenta do reino.",
                photo: "https://loremflickr.com/200/300/food?lock=139",
                storeId: 45
            },
            {
                id: 1089,
                name: "Ravioli de Frango",
                price: 45.99,
                category: "Massas",
                description: "Massa fresca recheada com carne de frango, molho de tomate e manjericão.",
                photo: "https://loremflickr.com/200/300/food?lock=140",
                storeId: 45
            }
        ]
    },
    {
        id: '46',
        logo: 'https://loremflickr.com/200/300/food?lock=46',
        name: 'Hamburgueria do Zé',
        star: 4.1,
        frete: 'R$ 5,00',
        distancia: '2,8 km',
        tempoPreparo: '25-35 min',
        category: 'Hambúrgueres',
        cupom: 'Desconto de 10%',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=56',
        produtos: [
            {
                id: 1090,
                name: "Hambúrguer de Picanha",
                price: 29.99,
                category: "Hambúrgueres",
                description: "Hambúrguer de picanha com queijo cheddar, bacon e molho especial.",
                photo: "https://loremflickr.com/200/300/food?lock=141",
                storeId: 46
            },
            {
                id: 1091,
                name: "Cheeseburger Gourmet",
                price: 27.99,
                category: "Hambúrgueres",
                description: "Hambúrguer artesanal com queijo cheddar, cebola caramelizada e molho especial.",
                photo: "https://loremflickr.com/200/300/food?lock=142",
                storeId: 46
            }
        ]
    },
    {
        id: '47',
        logo: 'https://loremflickr.com/200/300/food?lock=47',
        name: 'Pizza Fina',
        star: 4.2,
        frete: 'Gratis',
        distancia: '1,8 km',
        tempoPreparo: '20-30 min',
        category: 'Pizzas',
        cupom: '',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=55',
        produtos: [
            {
                id: 1056,
                name: "Pizza de Mussarela",
                price: 39.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e orégano.",
                photo: "https://loremflickr.com/200/300/food?lock=107",
                storeId: 47
            },
            {
                id: 1057,
                name: "Pizza de Calabresa",
                price: 42.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e calabresa fatiada.",
                photo: "https://loremflickr.com/200/300/food?lock=108",
                storeId: 47
            }
        ]
    },
    {
        id: '48',
        logo: 'https://loremflickr.com/200/300/food?lock=480',
        name: 'Sushi House',
        star: 4.4,
        frete: 'R$ 6,50',
        distancia: '3,3 km',
        tempoPreparo: '40-50 min',
        category: 'Japonesa',
        cupom: 'Cupom de 15%',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=54',
        produtos: [
            {
                id: 1056,
                name: "Sashimi de Salmão",
                price: 37.99,
                category: "Japonesa",
                description: "Sashimi de salmão fresco cortado em fatias finas.",
                photo: "https://loremflickr.com/200/300/food?lock=107",
                storeId: 48
            },
            {
                id: 1057,
                name: "Yakissoba de Frango",
                price: 29.99,
                category: "Japonesa",
                description: "Macarrão oriental com frango, legumes e molho shoyu.",
                photo: "https://loremflickr.com/200/300/food?lock=108",
                storeId: 48
            }
        ]
    },
    {
        id: '49',
        logo: 'https://loremflickr.com/200/300/food?lock=49',
        name: 'Pizza do João',
        star: 4.3,
        frete: 'R$ 5,00',
        distancia: '2,0 km',
        tempoPreparo: '40-50 min',
        category: 'Pizzas',
        cupom: '',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=53',
        produtos: [
            {
                id: 1056,
                name: "Pizza de Mussarela",
                price: 39.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e orégano.",
                photo: "https://loremflickr.com/200/300/food?lock=107",
                storeId: 49
            },
            {
                id: 1057,
                name: "Pizza de Calabresa",
                price: 42.99,
                category: "Pizzas",
                description: "Pizza com molho de tomate, queijo mozzarella e calabresa fatiada.",
                photo: "https://loremflickr.com/200/300/food?lock=108",
                storeId: 49
            }
        ]
    },
    {
        id: '50',
        logo: 'https://loremflickr.com/200/300/food?lock=50',
        name: 'Burgueria do Zé',
        star: 4.7,
        frete: 'Gratis',
        distancia: '2,2 km',
        tempoPreparo: '20-30 min',
        category: 'Hambúrgueres',
        cupom: 'Cupom de R$ 10,00 disponível',
        lojaSuper: 'https://loremflickr.com/200/300/food?lock=52',
        produtos: [
            {
                id: 1056,
                name: "X-Burguer",
                price: 19.99,
                category: "Hambúrgueres",
                description: "Pão com hambúrguer de carne bovina, queijo, alface e tomate.",
                photo: "https://loremflickr.com/200/300/food?lock=107",
                storeId: 50
            },
            {
                id: 1057,
                name: "X-Salada",
                price: 24.99,
                category: "Hambúrgueres",
                description: "Pão com hambúrguer de carne bovina, queijo, alface, tomate e maionese.",
                photo: "https://loremflickr.com/200/300/food?lock=108",
                storeId: 50
            },
            {
                id: 1058,
                name: "Cheeseburger Gourmet",
                price: 29.99,
                category: "Hambúrgueres",
                description: "Hambúrguer de carne bovina com queijo cheddar, cebola caramelizada e maionese especial.",
                photo: "https://loremflickr.com/200/300/food?lock=109",
                storeId: 50
            },
            {
                id: 1059,
                name: "Hambúrguer de Frango",
                price: 22.99,
                category: "Hambúrgueres",
                description: "Pão com hambúrguer de frango, alface, tomate e maionese.",
                photo: "https://loremflickr.com/200/300/food?lock=110",
                storeId: 50
            },
            {
                id: 1060,
                name: "Cheeseburger Duplo",
                price: 35.99,
                category: "Hambúrgueres",
                description: "Hambúrguer duplo com queijo cheddar, bacon crocante, alface e molho barbecue.",
                photo: "https://loremflickr.com/200/300/food?lock=111",
                storeId: 50
            },
            {
                id: 1061,
                name: "X-Bacon",
                price: 27.99,
                category: "Hambúrgueres",
                description: "Hambúrguer de carne bovina com bacon crocante, queijo cheddar e molho especial.",
                photo: "https://loremflickr.com/200/300/food?lock=112",
                storeId: 50
            },
            {
                id: 1062,
                name: "X-Tudo",
                price: 29.99,
                category: "Hambúrgueres",
                description: "Hambúrguer com carne bovina, frango, queijo, bacon, ovo, alface, tomate e maionese.",
                photo: "https://loremflickr.com/200/300/food?lock=113",
                storeId: 50
            },
            {
                id: 1063,
                name: "Burguer de Picanha",
                price: 34.99,
                category: "Hambúrgueres",
                description: "Pão com hambúrguer de picanha, queijo cheddar, cebola roxa e molho de mostarda e mel.",
                photo: "https://loremflickr.com/200/300/food?lock=114",
                storeId: 50
            },
            {
                id: 1064,
                name: "Burguer Vegano",
                price: 24.99,
                category: "Hambúrgueres",
                description: "Hambúrguer de grão de bico com alface, tomate e molho vegano.",
                photo: "https://loremflickr.com/200/300/food?lock=115",
                storeId: 50
            },
            {
                id: 1065,
                name: "Hambúrguer de Peixe",
                price: 27.99,
                category: "Hambúrgueres",
                description: "Hambúrguer de peixe empanado com molho tártaro, alface e cebola roxa.",
                photo: "https://loremflickr.com/200/300/food?lock=116",
                storeId: 50
            },
            {
                id: 1066,
                name: "X-Queijo",
                price: 21.99,
                category: "Hambúrgueres",
                description: "Hambúrguer de carne bovina com queijo prato, alface e ketchup.",
                photo: "https://loremflickr.com/200/300/food?lock=117",
                storeId: 50
            },
            {
                id: 1067,
                name: "Hambúrguer de Carne Suína",
                price: 28.99,
                category: "Hambúrgueres",
                description: "Pão com hambúrguer de carne suína, molho de mostarda e picles.",
                photo: "https://loremflickr.com/200/300/food?lock=118",
                storeId: 50
            },
            {
                id: 1068,
                name: "Cheeseburger Bacon",
                price: 32.99,
                category: "Hambúrgueres",
                description: "Hambúrguer de carne bovina com queijo cheddar e bacon crocante.",
                photo: "https://loremflickr.com/200/300/food?lock=119",
                storeId: 50
            }
        ]
    }
];