const location = ["New York, USA","San Francisco, USA"];
const rentRange =["less than $2000","more than $2000"];
const moveDate= ["before 15","after 15"];
const propertyType=["House","Apartment"]

const Properties = [
    {
        id:1,
        name:"Palm Harbour",
        rent:2095,
        location:"New York, USA",
        address:"rsfjwfwnck",
        moveIn:'before 15',
        image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=100",
        type:"house",
        details:{
            bed:4,
            bathrooms:2,
            area: '5x7 m',
        }
    },
    {
        id:2,
        name:"ffuwikhfskwf",
        rent:3328,
        location:"New York, USA",
        address:"rsfjwfwnck",
        moveIn:'before 15',
        image:"https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        type:"apartment",
        details:{
            bed:4,
            bathrooms:2,
            area: '5x7 m',
        }
    },
    {
        id:3,
        name:"Palm Harbour",
        rent:2548,
        location:"New York, USA",
        address:"rsfjwfwnck",
        moveIn:'after 15',
        image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80",
        type:"house",
        details:{
            bed:4,
            bathrooms:2,
            area: '5x7 m',
        }
    },
    {
        id:4,
        name:"Palm Harbour",
        rent:3829,
        location:"New York, USA",
        address:"rsfjwfwnck",
        moveIn:'after 15',
        image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80",
        type:"apartment",
        details:{
            bed:4,
            bathrooms:2,
            area: '5x7 m',
        }
    },

    {
        id:5,
        name:"Palm Harbour",
        rent:1295,
        location:"New York, USA",
        address:"rsfjwfwnck",
        moveIn:'before 15',
        image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80",
        type:"house",
        details:{
            bed:4,
            bathrooms:2,
            area: '5x7 m',
        }
    },
    {
        id:6,
        name:"ffuwikhfskwf",
        rent:1747,
        location:"New York, USA",
        address:"rsfjwfwnck",
        moveIn:'before 15',
        image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80",
        type:"apartment",
        details:{
            bed:4,
            bathrooms:2,
            area: '5x7 m',
        }
    },
    {
        id:7,
        name:"Palm Harbour",
        rent:1432,
        location:"New York, USA",
        address:"rsfjwfwnck",
        moveIn:'after 15',
        image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80",
        type:"house",
        details:{
            bed:4,
            bathrooms:2,
            area: '5x7 m',
        }
    },
    {
        id:8,
        name:"Palm Harbour",
        rent:995,
        location:"New York, USA",
        address:"rsfjwfwnck",
        moveIn:'after 15',
        image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80",
        type:"apartment",
        details:{
            bed:4,
            bathrooms:2,
            area: '5x7 m',
        }
    },


    {
        id:9,
        name:"Palm Harbour",
        rent:2438,
        location:"San Francisco, USA",
        address:"rsfjwfwnck",
        moveIn:'before 15',
        image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80",
        type:"house",
        details:{
            bed:4,
            bathrooms:2,
            area: '5x7 m',
        }
    },
    {
        id:10,
        name:"ffuwikhfskwf",
        rent:2597,
        location:"San Francisco, USA",
        address:"rsfjwfwnck",
        moveIn:'before 15',
        image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80",
        type:"apartment",
        details:{
            bed:4,
            bathrooms:2,
            area: '5x7 m',
        }
    },
    {
        id:11,
        name:"Palm Harbour",
        rent:2488,
        location:"San Francisco, USA",
        address:"rsfjwfwnck",
        moveIn:'after 15',
        image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80",
        type:"house",
        details:{
            bed:4,
            bathrooms:2,
            area: '5x7 m',
        }
    },
    {
        id:12,
        name:"Palm Harbour",
        rent:3841,
        location:"San Francisco, USA",
        address:"rsfjwfwnck",
        moveIn:'after 15',
        image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80",
        type:"apartment",
        details:{
            bed:4,
            bathrooms:2,
            area: '5x7 m',
        }
    },

    {
        id:13,
        name:"Palm Harbour",
        rent:1753,
        location:"San Francisco, USA",
        address:"rsfjwfwnck",
        moveIn:'before 15',
        image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80",
        type:"house",
        details:{
            bed:4,
            bathrooms:2,
            area: '5x7 m',
        }
    },
    {
        id:14,
        name:"ffuwikhfskwf",
        rent:1843,
        location:"San Francisco, USA",
        address:"rsfjwfwnck",
        moveIn:'before 15',
        image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80",
        type:"apartment",
        details:{
            bed:4,
            bathrooms:2,
            area: '5x7 m',
        }
    },
    {
        id:15,
        name:"Palm Harbour",
        rent:1782,
        location:"San Francisco, USA",
        address:"rsfjwfwnck",
        moveIn:'after 15',
        image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80",
        type:"house",
        details:{
            bed:4,
            bathrooms:2,
            area: '5x7 m',
        }
    },
    {
        id:16,
        name:"Palm Harbour",
        rent:1932,
        location:"San Francisco, USA",
        address:"rsfjwfwnck",
        moveIn:'after 15',
        image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80",
        type:"apartment",
        details:{
            bed:4,
            bathrooms:2,
            area: '5x7 m',
        }
    },


    {
        id:17,
        name:"Palm Harbour",
        rent:2095,
        location:"New York, USA",
        address:"rsfjwfwnck",
        moveIn:'before 15',
        image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80",
        type:"house",
        details:{
            bed:4,
            bathrooms:2,
            area: '5x7 m',
        }
    },
    {
        id:18,
        name:"ffuwikhfskwf",
        rent:3328,
        location:"New York, USA",
        address:"rsfjwfwnck",
        moveIn:'before 15',
        image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80",
        type:"apartment",
        details:{
            bed:4,
            bathrooms:2,
            area: '5x7 m',
        }
    },
    {
        id:19,
        name:"Palm Harbour",
        rent:2548,
        location:"New York, USA",
        address:"rsfjwfwnck",
        moveIn:'after 15',
        image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80",
        type:"house",
        details:{
            bed:4,
            bathrooms:2,
            area: '5x7 m',
        }
    },
    {
        id:20,
        name:"Palm Harbour",
        rent:3829,
        location:"New York, USA",
        address:"rsfjwfwnck",
        moveIn:'after 15',
        image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80",
        type:"apartment",
        details:{
            bed:4,
            bathrooms:2,
            area: '5x7 m',
        }
    },

    {
        id:21,
        name:"Palm Harbour",
        rent:1295,
        location:"New York, USA",
        address:"rsfjwfwnck",
        moveIn:'before 15',
        image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80",
        type:"house",
        details:{
            bed:4,
            bathrooms:2,
            area: '5x7 m',
        }
    },
    {
        id:22,
        name:"ffuwikhfskwf",
        rent:1747,
        location:"New York, USA",
        address:"rsfjwfwnck",
        moveIn:'before 15',
        image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80",
        type:"apartment",
        details:{
            bed:4,
            bathrooms:2,
            area: '5x7 m',
        }
    },
    {
        id:23,
        name:"Palm Harbour",
        rent:1432,
        location:"New York, USA",
        address:"rsfjwfwnck",
        moveIn:'after 15',
        image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80",
        type:"house",
        details:{
            bed:4,
            bathrooms:2,
            area: '5x7 m',
        }
    },
    {
        id:24,
        name:"Palm Harbour",
        rent:995,
        location:"New York, USA",
        address:"rsfjwfwnck",
        moveIn:'after 15',
        image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80",
        type:"apartment",
        details:{
            bed:4,
            bathrooms:2,
            area: '5x7 m',
        }
    },


    {
        id:25,
        name:"Palm Harbour",
        rent:2438,
        location:"San Francisco, USA",
        address:"rsfjwfwnck",
        moveIn:'before 15',
        image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80",
        type:"house",
        details:{
            bed:4,
            bathrooms:2,
            area: '5x7 m',
        }
    },
    {
        id:26,
        name:"ffuwikhfskwf",
        rent:2597,
        location:"San Francisco, USA",
        address:"rsfjwfwnck",
        moveIn:'before 15',
        image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80",
        type:"apartment",
        details:{
            bed:4,
            bathrooms:2,
            area: '5x7 m',
        }
    },
    {
        id:27,
        name:"Palm Harbour",
        rent:2488,
        location:"San Francisco, USA",
        address:"rsfjwfwnck",
        moveIn:'after 15',
        image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80",
        type:"house",
        details:{
            bed:4,
            bathrooms:2,
            area: '5x7 m',
        }
    },
    {
        id:28,
        name:"Palm Harbour",
        rent:3841,
        location:"San Francisco, USA",
        address:"rsfjwfwnck",
        moveIn:'after 15',
        image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80",
        type:"apartment",
        details:{
            bed:4,
            bathrooms:2,
            area: '5x7 m',
        }
    },
    {
        id:29,
        name:"Palm Harbour",
        rent:1753,
        location:"San Francisco, USA",
        address:"rsfjwfwnck",
        moveIn:'before 15',
        image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80",
        type:"house",
        details:{
            bed:4,
            bathrooms:2,
            area: '5x7 m',
        }
    },
    {
        id:30,
        name:"ffuwikhfskwf",
        rent:1843,
        location:"San Francisco, USA",
        address:"rsfjwfwnck",
        moveIn:'before 15',
        image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80",
        type:"apartment",
        details:{
            bed:4,
            bathrooms:2,
            area: '5x7 m',
        }
    },
    {
        id:31,
        name:"Palm Harbour",
        rent:1782,
        location:"San Francisco, USA",
        address:"rsfjwfwnck",
        moveIn:'after 15',
        image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80",
        type:"house",
        details:{
            bed:4,
            bathrooms:2,
            area: '5x7 m',
        }
    },
    {
        id:32,
        name:"Palm Harbour",
        rent:1932,
        location:"San Francisco, USA",
        address:"rsfjwfwnck",
        moveIn:'after 15',
        image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80",
        type:"apartment",
        details:{
            bed:4,
            bathrooms:2,
            area: '5x7 m',
        }
    },
];

export  {location,rentRange,moveDate,propertyType,Properties};