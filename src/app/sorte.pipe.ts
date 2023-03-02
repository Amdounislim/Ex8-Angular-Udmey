import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sorte",
  pure: false,
})
export class SortePipe implements PipeTransform {
  transform(value: any, name: string): any {
    return value.sort((a, b) => (a[name] > b[name] ? 1 : -1));
  }
}
