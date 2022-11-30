import React from 'react';

export const View = ({books,deleteBook}) => {
    
    return books.map(book=>(
        <div className="flex justify-between profile w-3/4 rounded-xl m-4 p-4 border-[#1eff00] text-black border-2 bg-[#ecf101] ">
            <div>
                <img src={book.image} alt={book.image} className="avatar m-auto rounded-xl"></img>
            </div>
            <div className=" float-right ">
                <h1 className="">Name:- {book.name}</h1>
                <p className="">Email:- {book.email}</p>
                <p className="">Website:- {book.site}</p>
                <p className="">Gender:- {book.gender}</p>
                <p className="">Skills:- {book.skill1} {book.skill2} {book.skill3}</p>
            </div>
        </div>       
    
))
}