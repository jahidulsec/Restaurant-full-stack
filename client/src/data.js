export const MonthNames = [ 
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June",
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December" 
]


export const dayNames = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
]

export const fullDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thusday",
    "Friday",
    "Saturday"
]


export const getNumberOfDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate()
}


export const getSortedDay = (year, month) => {
    const dayIndex = new Date(year, month, 1).getDay()
    const firstHalf = dayNames.slice(dayIndex)
    return [...firstHalf, ...dayNames.slice(0, dayIndex)]
}

export const dayRange = (start,end) => {
    const length = Math.abs((end-start) / 1)

    const { result } = Array.from({ length }).reduce(
        ({result, current}) => ({
            result: [...result, current],
            current: current + 1,
        }),
        {result: [], current: start}
    )

    return result
}



export const menuItems = [
    {
        id: 1,
        name: "beef pasta",
        price: 6,
        category: 'main',
        desc: "Extra creamy, wildly delicious, and super easy is this one-pot creamy beef pasta. This dish is packed with ample flavor and two different kinds of cheeses.",
        imgUrl: "https://www.eatwell101.com/wp-content/uploads/2022/05/Beef-Pasta-in-Tomato-Sauce.jpg",
    },
    {
        id: 2,
        name: "tomato pasta",
        price: 4,
        category: 'main',
        desc: "With a couple pints of tomatoes, garlic, olive oil & Parmesan, you can make this easy burst cherry tomato pasta.",
        imgUrl: "https://realfood.tesco.com/media/images/1400x919-tomato-pasta-6a5a3c8e-f111-490d-805c-9b62fbec8691-0-1400x919.jpg",
    },
    {
        id: 3,
        name: "lemon dessert",
        price: 4.5,
        category: 'desserts',
        desc: "Lemon Custard Cake is a quick and easy dessert recipe, perfect for summer. This cake is soft and creamy, with refreshing lemon flavor. It’s melt-in-your-mouth good! If you like light and creamy desserts.",
        imgUrl: "https://www.jocooks.com/wp-content/uploads/2014/06/lemon-magic-cake-1-6-1.jpg",
    },
    {
        id: 4,
        name: "grilled fish",
        price: 5.5,
        category: 'appetizers',
        desc: "Make fish on the grill that won't stick or fall apart! Pair with grilled vegetables to make an easy, healthy dinner without heating up the kitchen.",
        imgUrl: "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/desktopimages/2017-grilledfishgrilledlemons-20217-desktop.jpg?ext=.jpg",
    },
    {
        id: 5,
        name: "bruschetta",
        price: 9,
        category: 'main',
        desc: "Bruschetta is an antipasto (starter dish) from Italy consisting of grilled bread rubbed with garlic and topped with olive oil and salt.",
        imgUrl: "https://joyfoodsunshine.com/wp-content/uploads/2022/04/tomato-bruschetta-recipe-1.jpg",
    },
    {
        id: 6,
        name: "greek salad",
        price: 7.5,
        category: 'appetizers',
        desc: "Greek salad, or horiatiki salata, is a rough country salad of juicy tomatoes, crisp cucumber, sliced red onion, green pepper, crumbly feta cheese and plump Kalamata olives.",
        imgUrl: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/7/0/FNK_Greek-Salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383814482359.jpeg",
    },
    {
        id: 7,
        name: "cheese sticks",
        price: 5.5,
        category: 'appetizers',
        desc: "Cheese sticks are deep-fried snacks composed of sliced cheeses wrapped in spring roll wrapper. This is totally different from Mozzarella sticks, but both have something in common: cheese sticks and mozzarella sticks are crispy in the outside and soft in the inside.",
        imgUrl: "https://sugarspunrun.com/wp-content/uploads/2021/07/Homemade-Mozzarella-Sticks-Recipe-1-of-1.jpg",
    },
    {
        id: 8,
        name: "tiramisu",
        price: 6,
        category: 'desserts',
        desc: "Tiramisu is an elegant and rich layered Italian dessert made with delicate ladyfinger cookies, espresso or instant espresso, mascarpone cheese, eggs, sugar, rum and cocoa powder.",
        imgUrl: "https://bakeplaysmile.com/wp-content/uploads/2022/06/tiramisu-square.jpg",
    },
    {
        id: 9,
        name: "strawberry cheesecake",
        price: 6.5,
        category: 'desserts',
        desc: " A graham cracker crust, a creamy cheesecake filling, and a delicious strawberry sauce! The creaminess of the cheesecake combined with the bright, fruity sauce makes this dessert perfect for strawberry season, or any time.",
        imgUrl: "https://projectveganbaking.com/wp-content/uploads/2021/04/04.jpeg",
    },
]


export const category = [
    {
        id: 1,
        name: 'main'
    },
    {
        id: 2,
        name: 'desserts'
    },
    {
        id: 3,
        name: 'appetizers'
    },
]