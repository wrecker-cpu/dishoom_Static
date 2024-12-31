import firstImage from "@/public/image 1.png"
import secondImage from "@/public/image 2.png"
import thirdImage from "@/public/image 3.png"
import fourthImage from "@/public/image 4.png"
import contactPageFirst from "@/public/contactpagelist.png";
import permitFirstImage from "@/public/permit 1.png"
import permitSecondImage from "@/public/permit 2.png"
import permitThirdImage from "@/public/permit 3.png"
import FirstFImage from "@/public/FamilyLastSec.png"
import SecondFImage from "@/public/kid.png"
import ThirdFImage from "@/public/oldpic.png"
import FourthFImage from "@/public/familyLast.png"
import LastFImage from "@/public/lastsection/model.png";
import LastSImage from "@/public/lastsection/writing.png";
import LastTImage from "@/public/lastsection/iftar.png";
import LastFoImage from "@/public/lastsection/dates.png";
import LastFiImage from "@/public/lastsection/sikh.png";


import { ClockSvg, FooterDiceSvg, InstagramSvg, LinkedSvg, LocationSvg, PhoneSvg, TiktokSvg, TrainSvg, TwitterSvg, YoutubeSvg } from "@/svg/svgs"


export const ListData={
    items:[
        {id:1,
            name:"Dishoom Battersea",
            description:"Purus quis parturient faucibus a suspendisse eu gravida. Tristique quam pellentesque diam tincidunt rhoncus egestas est etiam dui. Lobortis odio orci facilisi orci eu. Tristique nunc vitae a nulla netus fermentum enim hac. Sed imperdiet quis amet at posuere pretium nulla.",
            image:firstImage,
            button1:"View",
            button2:"Book"
        },
        {id:2,
            name:"Dishoom Canary Wharf",
            description:"Purus quis parturient faucibus a suspendisse eu gravida. Tristique quam pellentesque diam tincidunt rhoncus egestas est etiam dui. Lobortis odio orci facilisi orci eu. Tristique nunc vitae a nulla netus fermentum enim hac. Sed imperdiet quis amet at posuere pretium nulla.",
            image:secondImage,
            button1:"View",
            button2:"Book"
        },
        {id:3,
            name:"Dishoom Battersea",
            description:"Purus quis parturient faucibus a suspendisse eu gravida. Tristique quam pellentesque diam tincidunt rhoncus egestas est etiam dui. Lobortis odio orci facilisi orci eu. Tristique nunc vitae a nulla netus fermentum enim hac. Sed imperdiet quis amet at posuere pretium nulla.",
            image:thirdImage,
            button1:"View",
            button2:"Book"
        },
        {id:4,
            name:"Dishoom Covent Garden",
            description:"Purus quis parturient faucibus a suspendisse eu gravida. Tristique quam pellentesque diam tincidunt rhoncus egestas est etiam dui. Lobortis odio orci facilisi orci eu. Tristique nunc vitae a nulla netus fermentum enim hac. Sed imperdiet quis amet at posuere pretium nulla.",
            image:fourthImage,
            button1:"View",
            button2:"Book"
        },
        {id:5,
            name:"Dishoom Kensington",
            description:"Purus quis parturient faucibus a suspendisse eu gravida. Tristique quam pellentesque diam tincidunt rhoncus egestas est etiam dui. Lobortis odio orci facilisi orci eu. Tristique nunc vitae a nulla netus fermentum enim hac. Sed imperdiet quis amet at posuere pretium nulla.",
            image:firstImage,
            button1:"View",
            button2:"Book"
        }
    ],
}


export const PermitListData={
    items:[
        {id:1,
            name:"Permit Room Brighton",
            description:"Purus quis parturient faucibus a suspendisse eu gravida. Tristique quam pellentesque diam tincidunt rhoncus egestas est etiam dui. Lobortis odio orci facilisi orci eu. Tristique nunc vitae a nulla netus fermentum enim hac. Sed imperdiet quis amet at posuere pretium nulla.",
            image:permitFirstImage,
            button1:"View",
            button2:"Book",
            details:[
                {
                    id:1,
                    svg:<LocationSvg/>,
                    text:"42 Electric Boulevard, London, SW11 8BJ"
                },
                {
                    id:2,
                    svg:<TrainSvg/>,
                    text:"Nearest station"
                },
                {
                    id:3,
                    svg:<ClockSvg/>,
                    text:"Open today, 8am to 11pm"
                }
            ]
        },
        {id:2,
            name:"Permit Room Cambridge",
            description:"Purus quis parturient faucibus a suspendisse eu gravida. Tristique quam pellentesque diam tincidunt rhoncus egestas est etiam dui. Lobortis odio orci facilisi orci eu. Tristique nunc vitae a nulla netus fermentum enim hac. Sed imperdiet quis amet at posuere pretium nulla.",
            image:permitSecondImage,
            button1:"View",
            button2:"Book",
            details:[
                {
                    id:1,
                    svg:<LocationSvg/>,
                    text:"42 Electric Boulevard, London, SW11 8BJ"
                },
                {
                    id:2,
                    svg:<TrainSvg/>,
                    text:"Nearest station"
                },
                {
                    id:3,
                    svg:<ClockSvg/>,
                    text:"Open today, 8am to 11pm"
                }
            ]
        },
        {id:3,
            name:"Permit Room Oxford",
            description:"Purus quis parturient faucibus a suspendisse eu gravida. Tristique quam pellentesque diam tincidunt rhoncus egestas est etiam dui. Lobortis odio orci facilisi orci eu. Tristique nunc vitae a nulla netus fermentum enim hac. Sed imperdiet quis amet at posuere pretium nulla.",
            image:permitThirdImage,
        }
    ],
}


export const FooterData={
    explore:{
        title:"Explore",
        details:[
        {id:1, name:"Our Cafés"},
        {id:2, name:"Permit Room"},
        {id:3, name:"Menu"},
        {id:4, name:"Recipes"},
        {id:5, name:"Founding Myths"},
        {id:6, name:"Events"},
        {id:7, name:"Food & drink"},
        {id:8, name:"Breaking barriers"},
        {id:9, name:"Diwali"},
        {id:10, name:"Ramadan"},
        {id:11, name:"Careers"},
        ]
    },
    Shop:{
        title:"Shop Dishoom",
        details:[
        {id:1, name:"Store home"},
        {id:2, name:"Favourites"},
        {id:3, name:"Most Loved"},
        {id:4, name:"Subscriptions"},
        {id:5, name:"Gifts"},
        {id:6, name:"Meal kits"},
        {id:7, name:"Food and drink"},
        {id:8, name:"Books and music"},
        {id:9, name:"Homeware"},
        ]
    },
    Cafe:{
        title:"Café support",
        details:[
        {id:1, name:"Contact us"},
        {id:2, name:"FAQs"},
        {id:3, name:"Secondary link"},
        
        ]
    },
    Store:{
        title:"Store support",
        details:[
        {id:1, name:"Shipping"},
        {id:2, name:"Returns & refunds"},
        {id:3, name:"Group gifting"},
        ]
    },
    SocioLinks:{
        title:"Follow Us Freely",
        details:[
            {id:1, name:"Instagram" ,href:"#"},
            {id:2, name:"Youtube",href:"#"},
            {id:3,name:"X (formely Twitter)",href:"#"},
            {id:4, name:"TikTok",href:"#"},
            {id:5, name:"LinkedIn",href:"#"},
        ]
    },
    Privacy:{
        svg:<FooterDiceSvg/>,
        details:[
            {id:1, name:"Privacy Policy"},
            {id:2, name:"Cookies"},
            {id:3, name:"Legals Link"},
            {id:4, name:"Legals Link"},
        ]
    },
    SocioSvgs:[
        {
            id:1,
            svg:<InstagramSvg/>,
            href:"#"
        },
        {
            id:2,
            svg:<YoutubeSvg/>,
            href:"#"
        },
        {
            id:3,
            svg:<TwitterSvg/>,
            href:"#"
        },
        {
            id:4,
            svg:<TiktokSvg/>,
            href:"#"
        },
        {
            id:5,
            svg:<LinkedSvg/>,
            href:"#"
        }
    ]

}

export const FilterLocationData={
    type:{
        title:"Location Type",
    options:[
        {id:1, name:"All"},
        {id:2, name:"Cafés"},
        {id:3, name:"Permit Rooms"},
    ]
    },
    showMore:{
        title:"show me...",
        options:[
            {id:1, name:"Wheelchair friendly"},
            {id:2, name:"Outdoor seating"},
            {id:3, name:"Can host events"},
            {id:4, name:"Dog friendly"},
            {id:5, name:"Click and Collect available"},
            
        ]
    }
}


export const ContactPageData={
    sideOptions:{
        title:"Skip To",
    options:[
        {id:1, name:"Enquires"},
        {id:2, name:"Contact a Café"},
        {id:3, name:"Chit-chat"},
        {id:4, name:"Social media"},
    ]
    },
    accordion:[
        {
            id:1,
            place:"Battersea",
            details:[
                {
                    id:1,
                    svg:<LocationSvg/>,
                    text:"42 Electric Boulevard, London, SW11 8BJ"
                },
                {
                    id:2,
                    svg:<PhoneSvg/>,
                    text:"020 7420 9327"
                },
                {
                    id:3,
                    svg:<ClockSvg/>,
                    text:"Opening Times"
                }
            ],
            image:firstImage,
            button1:"Book a table",
            button2:"Plan you visit"
        },
        {
            id:2,
            place:"Canary Wharf",
            details:[
                {
                    id:1,
                    svg:<LocationSvg/>,
                    text:"42 Electric Boulevard, London, SW11 8BJ"
                },
                {
                    id:2,
                    svg:<PhoneSvg/>,
                    text:"020 7420 9327"
                },
                {
                    id:3,
                    svg:<ClockSvg/>,
                    text:"Opening Times"
                }
            ],
            image:firstImage,
            button1:"Book a table",
            button2:"Plan you visit"
        },
        {
            id:3,
            place:"Carnby",
            details:[
                {
                    id:1,
                    svg:<LocationSvg/>,
                    text:"42 Electric Boulevard, London, SW11 8BJ"
                },
                {
                    id:2,
                    svg:<PhoneSvg/>,
                    text:"020 7420 9327"
                },
                {
                    id:3,
                    svg:<ClockSvg/>,
                    text:"Opening Times"
                }
            ],
            image:firstImage,
            button1:"Book a table",
            button2:"Plan you visit"
        },
        {
            id:4,
            place:"Covent Garden",
            details:[
                {
                    id:1,
                    svg:<LocationSvg/>,
                    text:"42 Electric Boulevard, London, SW11 8BJ"
                },
                {
                    id:2,
                    svg:<PhoneSvg/>,
                    text:"020 7420 9327"
                },
                {
                    id:3,
                    svg:<ClockSvg/>,
                    text:"Opening Times"
                }
            ],
            image:firstImage,
            button1:"Book a table",
            button2:"Plan you visit"
        },
        {
            id:5,
            place:"Kensington",
            details:[
                {
                    id:1,
                    svg:<LocationSvg/>,
                    text:"42 Electric Boulevard, London, SW11 8BJ"
                },
                {
                    id:2,
                    svg:<PhoneSvg/>,
                    text:"020 7420 9327"
                },
                {
                    id:3,
                    svg:<ClockSvg/>,
                    text:"Opening Times"
                }
            ],
            image:firstImage,
            button1:"Book a table",
            button2:"Plan you visit"
        },
        {
            id:6,
            place:"King’s Cross",
            details:[
                {
                    id:1,
                    svg:<LocationSvg/>,
                    text:"42 Electric Boulevard, London, SW11 8BJ"
                },
                {
                    id:2,
                    svg:<PhoneSvg/>,
                    text:"020 7420 9327"
                },
                {
                    id:3,
                    svg:<ClockSvg/>,
                    text:"Opening Times"
                }
            ],
            image:firstImage,
            button1:"Book a table",
            button2:"Plan you visit"
        },
        {
            id:7,
            place:"Shoreditch",
            details:[
                {
                    id:1,
                    svg:<LocationSvg/>,
                    text:"42 Electric Boulevard, London, SW11 8BJ"
                },
                {
                    id:2,
                    svg:<PhoneSvg/>,
                    text:"020 7420 9327"
                },
                {
                    id:3,
                    svg:<ClockSvg/>,
                    text:"Opening Times"
                }
            ],
            image:firstImage,
            button1:"Book a table",
            button2:"Plan you visit"
        },
        {
            id:8,
            place:"Birmingham",
            details:[
                {
                    id:1,
                    svg:<LocationSvg/>,
                    text:"42 Electric Boulevard, London, SW11 8BJ"
                },
                {
                    id:2,
                    svg:<PhoneSvg/>,
                    text:"020 7420 9327"
                },
                {
                    id:3,
                    svg:<ClockSvg/>,
                    text:"Opening Times"
                }
            ],
            image:firstImage,
            button1:"Book a table",
            button2:"Plan you visit"
        },
        {
            id:9,
            place:"Edinburgh",
            details:[
                {
                    id:1,
                    svg:<LocationSvg/>,
                    text:"42 Electric Boulevard, London, SW11 8BJ"
                },
                {
                    id:2,
                    svg:<PhoneSvg/>,
                    text:"020 7420 9327"
                },
                {
                    id:3,
                    svg:<ClockSvg/>,
                    text:"Opening Times"
                }
            ],
            image:firstImage,
            button1:"Book a table",
            button2:"Plan you visit"
        },
        {
            id:10,
            place:"Manchester",
            details:[
                {
                    id:1,
                    svg:<LocationSvg/>,
                    text:"42 Electric Boulevard, London, SW11 8BJ"
                },
                {
                    id:2,
                    svg:<PhoneSvg/>,
                    text:"020 7420 9327"
                },
                {
                    id:3,
                    svg:<ClockSvg/>,
                    text:"Opening Times"
                }
            ],
            image:firstImage,
            button1:"Book a table",
            button2:"Plan you visit"
        },
    ],
    SocioLinks:{
        title:"Follow Us Freely",
        details:[
            {id:1, name:"Instagram" ,href:"#"},
            {id:2, name:"Youtube",href:"#"},
            {id:3,name:"X (formely Twitter)",href:"#"},
            {id:4, name:"TikTok",href:"#"},
            {id:5, name:"LinkedIn",href:"#"},
        ]
    },
    SocioSvgs:[
        {
            id:1,
            svg:<InstagramSvg/>,
            href:"#"
        },
        {
            id:2,
            svg:<YoutubeSvg/>,
            href:"#"
        },
        {
            id:3,
            svg:<TwitterSvg/>,
            href:"#"
        },
        {
            id:4,
            svg:<TiktokSvg/>,
            href:"#"
        },
        {
            id:5,
            svg:<LinkedSvg/>,
            href:"#"
        }
    ],
    navOptions:[

        {id:1, name:"Enquires"},
        {id:2, name:"Contact a Café"},
        {id:3, name:"Chat"},
        {id:4, name:"Social"},
        {id:5, name:"For Children"},
        {
            id:6,
            name:"Gluten Intolerance",
        },
        {
            id:7,
            name:"Group Feast",
        },
        {
            id:8,
            name:"Collection",
        }

    ],
    Lookinglist:[
        {id:1,image:contactPageFirst ,title:"Our Menu",quote:"Breakfast, lunch, afternoon chai and dinner"},
        {id:2,image:contactPageFirst ,title:"Reservations",quote:"Calm restless nerves"},
        {id:3,image:contactPageFirst ,title:"Provisions",quote:"Sample gifts and sundries"},
        
    ]
}


export const FaqPageData={
    sideOptions:{
        title:"Skip To",
    options:[
        {id:1, name:"Reservations and walk-Ins"},
        {id:2, name:"In-café"},
        {id:3, name:"Food, drinks and menus"},
        {id:4, name:"Delivery and takeaway"},
        {id:5, name:"Notes on payment"},
        {id:6, name:"Safety and accessibility"},
        {id:7, name:"Getting in touch"},
    ]
    },
    accordion: {
        title:"Reservations and walk-ins",
        details:[
        {
            id: 1,
            question: "Do you take bookings?",
            answer: `We save most of our tables for walk-in guests, but we also <a style="text-decoration: underline; href="#">accept reservations</a>. We welcome bookings for groups of any size until 5.45pm. After this time, we only accept reservations for groups of six or more, except at our Manchester and Birmingham cafés where we continue to take bookings for tables of all sizes. All reservable tables can be viewed and reserved up to four months in advance. For more details, <a class='underline' href="https://your-reservations-link.com">accept invitations</a>.`
        },
        {
            id: 2,
            question: "Do you take large group bookings?",
            answer:`Absolutely. We love hosting big gatherings. Bookings of up to 16 may be made <a style="text-decoration: underline; href="#">here</a>. For larger bookings please take a look at our Group Feasting offering. If you can't find what you're looking for, email <a style="text-decoration: underline; href="#">feasting@dishoom.com</a> , and we'll do our best to help you. `
        },
        {
            id: 3,
            question: "My deposit wasn't taken off my bill, what should I do?",
            answer:`Absolutely. We love hosting big gatherings. Bookings of up to 16 may be made <a style="text-decoration: underline; href="#">here</a>. For larger bookings please take a look at our Group Feasting offering. If you can't find what you're looking for, email <a style="text-decoration: underline; href="#">feasting@dishoom.com</a> , and we'll do our best to help you. `
        },
        {
            id: 4,
            question: "I want to cancel my large party reservation, will my deposit be refunded?",
            answer:`Absolutely. We love hosting big gatherings. Bookings of up to 16 may be made <a style="text-decoration: underline; href="#">here</a>. For larger bookings please take a look at our Group Feasting offering. If you can't find what you're looking for, email <a style="text-decoration: underline; href="#">feasting@dishoom.com</a> , and we'll do our best to help you. `
        },
        {
            id: 5,
            question: "How long is the queue for Dishoom?",
            answer:`Absolutely. We love hosting big gatherings. Bookings of up to 16 may be made <a style="text-decoration: underline; href="#">here</a>. For larger bookings please take a look at our Group Feasting offering. If you can't find what you're looking for, email <a style="text-decoration: underline; href="#">feasting@dishoom.com</a> , and we'll do our best to help you. `
        },
        {
            id: 6,
            question: "Is there a time limit on how long we can stay at the table?",
            answer:`Absolutely. We love hosting big gatherings. Bookings of up to 16 may be made <a style="text-decoration: underline; href="#">here</a>. For larger bookings please take a look at our Group Feasting offering. If you can't find what you're looking for, email <a style="text-decoration: underline; href="#">feasting@dishoom.com</a> , and we'll do our best to help you. `
        },
        {
            id: 7,
            question: "Can I book a table outside?",
            answer:`Absolutely. We love hosting big gatherings. Bookings of up to 16 may be made <a style="text-decoration: underline; href="#">here</a>. For larger bookings please take a look at our Group Feasting offering. If you can't find what you're looking for, email <a style="text-decoration: underline; href="#">feasting@dishoom.com</a> , and we'll do our best to help you. `
        },
        {
            id: 8,
            question: "Can I amend my reservation party size?",
            answer:`Absolutely. We love hosting big gatherings. Bookings of up to 16 may be made <a style="text-decoration: underline; href="#">here</a>. For larger bookings please take a look at our Group Feasting offering. If you can't find what you're looking for, email <a style="text-decoration: underline; href="#">feasting@dishoom.com</a> , and we'll do our best to help you. `
        },
        {
            id: 9,
            question: "Do you have parking?",
            answer:`Absolutely. We love hosting big gatherings. Bookings of up to 16 may be made <a style="text-decoration: underline; href="#">here</a>. For larger bookings please take a look at our Group Feasting offering. If you can't find what you're looking for, email <a style="text-decoration: underline; href="#">feasting@dishoom.com</a> , and we'll do our best to help you. `
        },
    ]
    }
    
,    
    SocioLinks:{
        title:"Follow Us Freely",
        details:[
            {id:1, name:"Instagram" ,href:"#"},
            {id:2, name:"Youtube",href:"#"},
            {id:3,name:"X (formely Twitter)",href:"#"},
            {id:4, name:"TikTok",href:"#"},
            {id:5, name:"LinkedIn",href:"#"},
        ]
    },
    SocioSvgs:[
        {
            id:1,
            svg:<InstagramSvg/>,
            href:"#"
        },
        {
            id:2,
            svg:<YoutubeSvg/>,
            href:"#"
        },
        {
            id:3,
            svg:<TwitterSvg/>,
            href:"#"
        },
        {
            id:4,
            svg:<TiktokSvg/>,
            href:"#"
        },
        {
            id:5,
            svg:<LinkedSvg/>,
            href:"#"
        }
    ],
    navOptions:[

        {id:1, name:"Enquires"},
        {id:2, name:"Contact a Café"},
        {id:3, name:"Chat"},
        {id:4, name:"Social"},
        {id:5, name:"For Children"},
        {
            id:6,
            name:"Gluten Intolerance",
        },
        {
            id:7,
            name:"Group Feast",
        },
        {
            id:8,
            name:"Collection",
        }

    ],
    Lookinglist:[
        {id:1,image:contactPageFirst ,title:"Our Menu",quote:"Breakfast, lunch, afternoon chai and dinner"},
        {id:2,image:contactPageFirst ,title:"Reservations",quote:"Calm restless nerves"},
        {id:3,image:contactPageFirst ,title:"Provisions",quote:"Sample gifts and sundries"},
        
    ]
}



export const FamilyPicData=[
    {id:1,image:FirstFImage},
    {id:2,image:SecondFImage},
    {id:3,image:ThirdFImage},
    {id:4,image:FourthFImage},
]


export const ImageStaticPageData=[
    {id:1,image:FirstFImage},
    {id:2,image:ThirdFImage},
]


export const SecondImageStaticPageData=[
    {id:1,image:FirstFImage},
    {id:2,image:SecondFImage},
    {id:3,image:FourthFImage},
]


export const LastSectionFooterData=[
    {id:1,image:LastFImage,title:"Dishoom loves",desc:"Dishoom Loves. Issue XIV"},
    {id:2,image:LastSImage,title:"Watch",desc:"Artist spotlight with Narili Naik"},
    {id:3,image:LastTImage,title:"Event",desc:"Celebrate Iftar with Dishoom"},
    {id:4,image:LastFoImage,title:"Recipe",desc:"Ayesha Erkin shares one of her delectable date recipes"},
    {id:5,image:LastFiImage,title:"Event",desc:"Vaisakhi - Community and Celebration"},
]