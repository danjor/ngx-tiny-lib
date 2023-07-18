import { Pipe, PipeTransform } from '@angular/core';
import { isFunction } from "lodash";

@Pipe({
  name: 'lodash'
})
export class LodashPipe implements PipeTransform {

  transform(value: any, lodashMemberName: any,...args: unknown[]): unknown {
    // @ts-ignore
    // const func = _[lodashMemberName];

    const func = (window as any)._[lodashMemberName];

    if (isFunction(func)) {
      const arrayMutationMembers = [
        'fill',
        'pull',
        'pullAll',
        'pullAllBy',
        'pullAllWith',
        'pullAt', // this function returns the values pulled,
        'remove', // this function returns the values removed,
        'reverse',
        'invokeMap',
      ];
      if (arrayMutationMembers.indexOf(lodashMemberName) > -1) {
        // to avoid ExpressionChangedAfterItHasBeenCheckedError
        // tslint:disable-next-line: prefer-const
        let toBeMutated = [...value];

        func(toBeMutated, ...args);

        return toBeMutated;
      } else {
        return func(value, ...args);
      }
    }

    return value;
  }

}
