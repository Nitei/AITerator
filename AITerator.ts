import { Loader } from './classes/abstract/loader.abstract';
export class AITerator extends Loader {
  constructor(
    public iterable: any[] = [],
    public key: number | string = null
  ) {
    super( iterable, key );
  }

}
