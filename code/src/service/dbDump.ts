export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    rating: number;
    brand: string;
}

export interface Colour {
    product: Product;
    rgb: string; // rgb
}

export const inks: Colour[] = [
    {
        product: {
            id: 1,
            title: "Black Legion",
            price: 6.30,
            image: "https://www.warhammer.com/app/resources/catalog/product/920x950/99189960036_Contrast_Black_Legion.svg?fm=webp&w=536&h=553",
            rating: 4.5,
            brand: "Citadel",
        },
        rgb: "rgb(0, 0, 0)",
    },
    {
        product: {
            id: 2,
            title: "Asurmen Blue",
            price: 6.30,
            image: "https://www.warhammer.com/app/resources/catalog/product/920x950/99189960050_Contrast_Asurmen_Blue.svg?fm=webp&w=536&h=553",
            rating: 4.7,
            brand: "Citadel",
        },
        rgb: "rgb(0, 0, 255)",
    },
    {
        product: {
            id: 3,
            title: "Baal Red",
            price: 6.30,
            image: "https://www.warhammer.com/app/resources/catalog/product/920x950/99189960058_Contrast_Baal_Red.svg?fm=webp&w=536&h=553",
            rating: 4.2,
            brand: "Citadel",
        },
        rgb: "rgb(255, 0, 0)",
    },
    {
        product: {
            id: 4,
            title: "Dark Angels Green",
            price: 6.30,
            image: "https://www.warhammer.com/app/resources/catalog/product/920x950/99189960011_contrastDarkAngelsGreen.svg?fm=webp&w=536&h=553",
            rating: 4.6,
            brand: "Citadel",
        },
        rgb: "rgb(0,82,33)",
    },
    {
        product: {
            id: 5,
            title: "Gal Vorbak Red",
            price: 6.30,
            image: "https://www.warhammer.com/app/resources/catalog/product/920x950/99189950123_baseGalVorbakRed.svg?fm=webp&w=536&h=553",
            rating: 4.0,
            brand: "Citadel",
        },
        rgb: "rgb(75,33,60)",
    },
    {
        product: {
            id: 6,
            title: "Hot Orange",
            price: 2.75,
            image: "https://acrylicosvallejo.com/wp-content/uploads/2024/01/vallejo-game-color-72009-NewIC.jpg",
            rating: 4.8,
            brand: "Vallejo",
        },
        rgb: "rgb(244,108,46)",
    },
    {
        product: {
            id: 7,
            title: "Sun Yellow",
            price: 2.75,
            image: "https://acrylicosvallejo.com/wp-content/uploads/2024/01/vallejo-game-color-72006-NewIC.jpg",
            rating: 4.8,
            brand: "Vallejo",
        },
        rgb: "rgb(255, 255, 0)",
    },
    {
        product: {
            id: 8,
            title: "Squid Pink",
            price: 2.75,
            image: "https://acrylicosvallejo.com/wp-content/uploads/2024/01/vallejo-game-color-72013-NewIC.jpg",
            rating: 4.4,
            brand: "Vallejo",
        },
        rgb: "rgb(255, 0, 255)",
    },
    {
        product: {
            id: 9,
            title: "Warpaints: Barbarian Flesh",
            price: 3.75,
            image: "https://thearmypainter.com/cdn/shop/files/WP1126-BarbarianFlesh-1copy.jpg?v=1702376942&width=800",
            rating: 4.4,
            brand: "The Army Painter",
        },
        rgb: "rgb(201,136,115)",
    },
    {
        product: {
            id: 10,
            title: "Warpaints: Leather Brown",
            price: 3.75,
            image: "https://thearmypainter.com/cdn/shop/files/WP1123-LeatherBrown-1copy.jpg?v=1702376878&width=800",
            rating: 4.4,
            brand: "The Army Painter",
        },
        rgb: "rgb(128,96,85)",
    },
    {
        product: {
            id: 31,
            title: "Copper Metallic Paint",
            price: 4.49,
            image: "https://hugeminis.com/wp-content/uploads/copper-pnt184-600x600.jpg",
            rating: 4.4,
            brand: "Huge Minis",
        },
        rgb: "rgb(193,111,69)",
    },
];

export const minis: Product[] = [
    {
        id: 18,
        title: "Master of Executions",
        price: 25.00,
        image: "https://www.warhammer.com/app/resources/catalog/product/threeSixty/99070102013_CSMMasterOfExecutions360/01.jpg?fm=webp&w=920",
        rating: 4.4,
        brand: "Malifaux",
    },
    {
        id: 11,
        title: "Imagifier",
        price: 25.00,
        image: "https://www.warhammer.com/app/resources/catalog/product/920x950/99070108006_SoBImagifierLead.jpg?fm=webp&w=920&h=948",
        rating: 4.5,
        brand: "Games Workshop",
    },
    {
        id: 12,
        title: "Sydonian Skatros",
        price: 32.50,
        image: "https://www.warhammer.com/app/resources/catalog/product/920x950/99120116045_ADMECHSydonianSkatros01.jpg?fm=webp&w=920&h=948",
        rating: 4.7,
        brand: "Games Workshop",
    },
    {
        id: 13,
        title: "Vindicare Assassin",
        price: 32.50,
        image: "https://www.warhammer.com/app/resources/catalog/product/920x950/99070108001_VindicareAssassin01.jpg?fm=webp&w=920&h=948",
        rating: 4.2,
        brand: "Games Workshop",
    },
    {
        id: 14,
        title: "C'tan Shard of the Void Dragon",
        price: 102.50,
        image: "https://www.warhammer.com/app/resources/catalog/product/920x950/99120110054_CTanShardoftheVoidDragonLead.jpg?fm=webp&w=920&h=948",
        rating: 4.6,
        brand: "Games Workshop",
    },
    {
        id: 16,
        title: "Typhus, Herald of the Plague God",
        price: 35.00,
        image: "https://www.warhammer.com/app/resources/catalog/product/920x950/99120102076_DeathGuardTyphus01.jpg?fm=webp&w=920&h=948",
        rating: 4.3,
        brand: "Games Workshop",
    },
    {
        id: 17,
        title: "Rogal Dorn, Primarch of the Imperial Fists Legio",
        price: 122.00,
        image: "https://www.warhammer.com/app/resources/catalog/product/920x950/99560101595_RogalDorn01.jpg?fm=webp&w=920&h=948",
        rating: 4.8,
        brand: "Games Workshop",
    },
    {
        id: 18,
        title: "Malifaux 3rd Edition - Clipper",
        price: 33.90,
        image: "https://versusgamecenter.pt/cdn/shop/files/miniaturas-malifaux-clipper1_550x.png?v=1713104936",
        rating: 4.4,
        brand: "Malifaux",
    },
    {
        id: 19,
        title: "Emperor's Children – Legion Tartaros Praetor",
        price: 41.00,
        image: "https://www.warhammer.com/app/resources/catalog/product/920x950/99853002332_HHECLegionTartarosPraetorLead.jpg?fm=webp&w=920&h=948",
        rating: 4.0,
        brand: "Games Workshop",
    },
];

// Combine the arrays
export const products: any[] = [...inks, ...minis];