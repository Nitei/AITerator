export abstract class Loader {
  protected iterante: any[] = [];

  constructor(
    public iterable: any[] = [],
    public key: number | string = null
  ) {
    this.fillIterable();
    delete this.iterable;
  }

  private fillIterable() {
    if (
      !Array.isArray( this.iterable ) ||
      this.iterable.length === 0 ||
      !this.key
    )
      throw new Error();
    if ( !this.checkItemHasKey( this.iterable[ 0 ] ) )
      throw new Error( `La key ${ this.key } no exite en el item` );

    this.iterable.forEach( item => {
      if ( this.has( item[ this.key ] ) ) return;
      this.iterante.push( this.createItem( item ) );
    } );
  }

  private checkItemHasKey( item ) {
    return Object.keys( item ).includes( this.key.toString() );
  }

  private createItem( newItem ) {
    return {
      item: newItem,
      key: newItem[ this.key ]
    };
  }
  private putIn( obj: { items: any[], method: 'push' | 'unshift' } ) {
    if ( !obj || !obj.items || obj.items.length === 0 ) return console.error( `El la lista de objetos esta vacia` );
    obj.items.forEach( item => {
      if ( this.has( item[ this.key ] ) ) return console.error( `La key ${ obj.items[ this.key ] } ya existe` );
      this.iterante[ obj.method ]( this.createItem( item ) );
    } )
  }
  private putOut( howMany: number, method: 'pop' | 'shift' ) {
    for ( let index = 0; index < howMany; index++ ) {
      this.iterante[ method ]();
    }
  }
  private seek( key ) {
    const elRef = this.iterante.findIndex( el => el.key === key );
    return {
      idx: elRef,
      value: elRef >= 0 ? this.iterante[ elRef ].item : null
    };
  }

  /** Clear the array */
  clear() {
    this.iterante = [];
  }
  delete( key ) {
    if ( this.has( key ) ) {
      this.iterante.splice( this.seek( key ).idx, 1 );
      return true;
    } else {
      console.error( 'No existe el objeto a borrar' );
    }
  }

  has( key ) {
    return this.seek( key ).idx >= 0;
  }
  get( key ) {
    return this.seek( key ).value;
  }
  unshift( ...item ) {
    this.putIn( { items: item, method: 'unshift' } );
  }
  push( ...item ) {
    this.putIn( { items: item, method: 'push' } );
  }
  shift( howMany: number = 1 ) {
    this.putOut( howMany, 'shift' );
  }
  pop( howMany: number = 1 ) {
    this.putOut( howMany, 'pop' );
  }
  value() {
    return { iterante: this.iterante, key: this.key };
  }
  getIterable() {
    return this.iterante;
  }
  getKey() {
    return this.key;
  }
}
