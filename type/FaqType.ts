type FaqItem = {
    id: number;
    question: string;
    answer: string;
    image?: string;
    button1?: string;
    button2?: string;
    details?: { id: number; text: string; svg: JSX.Element }[];
  };
  
 export type AccordionItemProps = {
    item: FaqItem;
    expandedId?: number;
  };
  
  
  export type FaqAccordionDataType = {
    [key: string]: FaqItem[];
  };
  

export const FaqAccordionData: FaqAccordionDataType = {
    "Reservations and walk-ins":[
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

    ],
    "In-Cafe":[
            {
                id: 4,
                question: "Question to sit here?",
                answer: `We save most of our tables for walk-in guests, but we also <a style="text-decoration: underline; href="#">accept reservations</a>. We welcome bookings for groups of any size until 5.45pm. After this time, we only accept reservations for groups of six or more, except at our Manchester and Birmingham cafés where we continue to take bookings for tables of all sizes. All reservable tables can be viewed and reserved up to four months in advance. For more details, <a class='underline' href="https://your-reservations-link.com">accept invitations</a>.`
            },
            {
                id: 5,
                question: "Question to sit here?",
                answer: `We save most of our tables for walk-in guests, but we also <a style="text-decoration: underline; href="#">accept reservations</a>. We welcome bookings for groups of any size until 5.45pm. After this time, we only accept reservations for groups of six or more, except at our Manchester and Birmingham cafés where we continue to take bookings for tables of all sizes. All reservable tables can be viewed and reserved up to four months in advance. For more details, <a class='underline' href="https://your-reservations-link.com">accept invitations</a>.`
            },
            {
                id: 6,
                question: "Question to sit here?",
                answer: `We save most of our tables for walk-in guests, but we also <a style="text-decoration: underline; href="#">accept reservations</a>. We welcome bookings for groups of any size until 5.45pm. After this time, we only accept reservations for groups of six or more, except at our Manchester and Birmingham cafés where we continue to take bookings for tables of all sizes. All reservable tables can be viewed and reserved up to four months in advance. For more details, <a class='underline' href="https://your-reservations-link.com">accept invitations</a>.`
            },
    ],
    "Food, Drinks and Menus":[
        {
            id: 7,
            question: "Question to sit here?",
            answer: `We save most of our tables for walk-in guests, but we also <a style="text-decoration: underline; href="#">accept reservations</a>. We welcome bookings for groups of any size until 5.45pm. After this time, we only accept reservations for groups of six or more, except at our Manchester and Birmingham cafés where we continue to take bookings for tables of all sizes. All reservable tables can be viewed and reserved up to four months in advance. For more details, <a class='underline' href="https://your-reservations-link.com">accept invitations</a>.`
        },
        {
            id: 8,
            question: "Question to sit here?",
            answer: `We save most of our tables for walk-in guests, but we also <a style="text-decoration: underline; href="#">accept reservations</a>. We welcome bookings for groups of any size until 5.45pm. After this time, we only accept reservations for groups of six or more, except at our Manchester and Birmingham cafés where we continue to take bookings for tables of all sizes. All reservable tables can be viewed and reserved up to four months in advance. For more details, <a class='underline' href="https://your-reservations-link.com">accept invitations</a>.`
        },
        {
            id: 9,
            question: "Question to sit here?",
            answer: `We save most of our tables for walk-in guests, but we also <a style="text-decoration: underline; href="#">accept reservations</a>. We welcome bookings for groups of any size until 5.45pm. After this time, we only accept reservations for groups of six or more, except at our Manchester and Birmingham cafés where we continue to take bookings for tables of all sizes. All reservable tables can be viewed and reserved up to four months in advance. For more details, <a class='underline' href="https://your-reservations-link.com">accept invitations</a>.`
        },

    ],
    "Delivery and Takeaway":[
        {
            id: 10,
            question: "Question to sit here?",
            answer: `We save most of our tables for walk-in guests, but we also <a style="text-decoration: underline; href="#">accept reservations</a>. We welcome bookings for groups of any size until 5.45pm. After this time, we only accept reservations for groups of six or more, except at our Manchester and Birmingham cafés where we continue to take bookings for tables of all sizes. All reservable tables can be viewed and reserved up to four months in advance. For more details, <a class='underline' href="https://your-reservations-link.com">accept invitations</a>.`
        },
        {
            id: 11,
            question: "Question to sit here?",
            answer: `We save most of our tables for walk-in guests, but we also <a style="text-decoration: underline; href="#">accept reservations</a>. We welcome bookings for groups of any size until 5.45pm. After this time, we only accept reservations for groups of six or more, except at our Manchester and Birmingham cafés where we continue to take bookings for tables of all sizes. All reservable tables can be viewed and reserved up to four months in advance. For more details, <a class='underline' href="https://your-reservations-link.com">accept invitations</a>.`
        },
        {
            id: 12,
            question: "Question to sit here?",
            answer: `We save most of our tables for walk-in guests, but we also <a style="text-decoration: underline; href="#">accept reservations</a>. We welcome bookings for groups of any size until 5.45pm. After this time, we only accept reservations for groups of six or more, except at our Manchester and Birmingham cafés where we continue to take bookings for tables of all sizes. All reservable tables can be viewed and reserved up to four months in advance. For more details, <a class='underline' href="https://your-reservations-link.com">accept invitations</a>.`
        },

    ],
"Notes On Payment":[
    {
        id: 13,
        question: "Question to sit here?",
        answer: `We save most of our tables for walk-in guests, but we also <a style="text-decoration: underline; href="#">accept reservations</a>. We welcome bookings for groups of any size until 5.45pm. After this time, we only accept reservations for groups of six or more, except at our Manchester and Birmingham cafés where we continue to take bookings for tables of all sizes. All reservable tables can be viewed and reserved up to four months in advance. For more details, <a class='underline' href="https://your-reservations-link.com">accept invitations</a>.`
    },
    {
        id: 14,
        question: "Question to sit here?",
        answer: `We save most of our tables for walk-in guests, but we also <a style="text-decoration: underline; href="#">accept reservations</a>. We welcome bookings for groups of any size until 5.45pm. After this time, we only accept reservations for groups of six or more, except at our Manchester and Birmingham cafés where we continue to take bookings for tables of all sizes. All reservable tables can be viewed and reserved up to four months in advance. For more details, <a class='underline' href="https://your-reservations-link.com">accept invitations</a>.`
    },
    {
        id: 15,
        question: "Question to sit here?",
        answer: `We save most of our tables for walk-in guests, but we also <a style="text-decoration: underline; href="#">accept reservations</a>. We welcome bookings for groups of any size until 5.45pm. After this time, we only accept reservations for groups of six or more, except at our Manchester and Birmingham cafés where we continue to take bookings for tables of all sizes. All reservable tables can be viewed and reserved up to four months in advance. For more details, <a class='underline' href="https://your-reservations-link.com">accept invitations</a>.`
    },

],
"Safety and Accessibility":[
    {
        id: 16,
        question: "Question to sit here?",
        answer: `We save most of our tables for walk-in guests, but we also <a style="text-decoration: underline; href="#">accept reservations</a>. We welcome bookings for groups of any size until 5.45pm. After this time, we only accept reservations for groups of six or more, except at our Manchester and Birmingham cafés where we continue to take bookings for tables of all sizes. All reservable tables can be viewed and reserved up to four months in advance. For more details, <a class='underline' href="https://your-reservations-link.com">accept invitations</a>.`
    },
    {
        id: 17,
        question: "Question to sit here?",
        answer: `We save most of our tables for walk-in guests, but we also <a style="text-decoration: underline; href="#">accept reservations</a>. We welcome bookings for groups of any size until 5.45pm. After this time, we only accept reservations for groups of six or more, except at our Manchester and Birmingham cafés where we continue to take bookings for tables of all sizes. All reservable tables can be viewed and reserved up to four months in advance. For more details, <a class='underline' href="https://your-reservations-link.com">accept invitations</a>.`
    },
    {
        id: 18,
        question: "Question to sit here?",
        answer: `We save most of our tables for walk-in guests, but we also <a style="text-decoration: underline; href="#">accept reservations</a>. We welcome bookings for groups of any size until 5.45pm. After this time, we only accept reservations for groups of six or more, except at our Manchester and Birmingham cafés where we continue to take bookings for tables of all sizes. All reservable tables can be viewed and reserved up to four months in advance. For more details, <a class='underline' href="https://your-reservations-link.com">accept invitations</a>.`
    },

],
"Getting In Touch":[
    {
        id: 19,
        question: "Question to sit here?",
        answer: `We save most of our tables for walk-in guests, but we also <a style="text-decoration: underline; href="#">accept reservations</a>. We welcome bookings for groups of any size until 5.45pm. After this time, we only accept reservations for groups of six or more, except at our Manchester and Birmingham cafés where we continue to take bookings for tables of all sizes. All reservable tables can be viewed and reserved up to four months in advance. For more details, <a class='underline' href="https://your-reservations-link.com">accept invitations</a>.`
    },
    {
        id: 20,
        question: "Question to sit here?",
        answer: `We save most of our tables for walk-in guests, but we also <a style="text-decoration: underline; href="#">accept reservations</a>. We welcome bookings for groups of any size until 5.45pm. After this time, we only accept reservations for groups of six or more, except at our Manchester and Birmingham cafés where we continue to take bookings for tables of all sizes. All reservable tables can be viewed and reserved up to four months in advance. For more details, <a class='underline' href="https://your-reservations-link.com">accept invitations</a>.`
    },
    {
        id: 21,
        question: "Question to sit here?",
        answer: `We save most of our tables for walk-in guests, but we also <a style="text-decoration: underline; href="#">accept reservations</a>. We welcome bookings for groups of any size until 5.45pm. After this time, we only accept reservations for groups of six or more, except at our Manchester and Birmingham cafés where we continue to take bookings for tables of all sizes. All reservable tables can be viewed and reserved up to four months in advance. For more details, <a class='underline' href="https://your-reservations-link.com">accept invitations</a>.`
    },

],
    
  };
  