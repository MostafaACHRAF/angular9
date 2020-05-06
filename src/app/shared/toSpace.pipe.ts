import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'toSpace'
})
export class ToSpace implements PipeTransform {

    transform(value: string, character : string) : string {
        return value.replace(character, " ");
    }

}