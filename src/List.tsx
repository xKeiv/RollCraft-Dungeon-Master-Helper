import React, { FC } from 'react'

type Colors = "red" | "blue" | "pink"; // co tu masz \/

type TextColor = `text-${Colors}-500`; // co tu masz \/

type TitleUnion = Capitalize<"heyo"> | Uppercase<TextColor> | "vRAY"

type Title = TitleUnion; //Tooo tutaj 

interface ListProps {      
    title: Title; //nie dotykamy typów i interfejsów, sam obiekt i prop title 
    description?: string;    
    color: TextColor;
}



const ITEMS_LIST: ListProps[] = [
    {
        title: 'Heyo',
        description: "dupa",
        color: "text-red-500"
    },
    {
        title:  'TEXT-PINK-500',    // magia, xD
        description: "yoł yoł",
        color: "text-red-500"
    },
    {
        title: "vRAY",
        description: "yoł yoł",
        color: "text-red-500"
    },
] //Teraz wychodzi na to, że musze po prostu popoprawiać te nazwy co są, bo musza byc 

const List: FC<ListProps> = ({title, description, color}) => {
  return (
    <ul>
        {
            ITEMS_LIST.map(({color, description, title}) => {
            return <li className={color}>
                {title}-{description}
                </li>
        })
        }
    </ul>
  )
}

export { List };
