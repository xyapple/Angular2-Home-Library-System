import {PipeTransform, Pipe} from '@angular/core';
import{ IBook} from './book';
@Pipe({
    name: 'bookFilter'
})


export class BookFilterPipe implements PipeTransform{

transform(value: IBook[], filterBy: string): IBook[]{
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((book: IBook) =>
    book.bookTitle.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
}
}

