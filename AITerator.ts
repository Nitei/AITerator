export class Iterante {
  private iterante: any[] = [];

  constructor( public iterable: any[] = [], public key: number | string = null ) {
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
  private putIn( item, method: 'push' | 'unshift' ) {
    if ( !this.has( item[ this.key ] ) ) {
      this.iterante[ method ]();
    } else console.error( `La key ${ item[ this.key ] } ya existe` );
  }
  private putOut( method: 'pop' | 'shift' ) {
    this.iterante[ method ]();
  }

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
  seek( key ) {
    const elRef = this.iterante.findIndex( el => el.key === key );
    return {
      idx: elRef,
      value: elRef >= 0 ? this.iterante[ elRef ].item : null
    };
  }
  has( key ) {
    return this.seek( key ).idx >= 0;
  }
  get( key ) {
    return this.seek( key ).value;
  }
  unshift( item ) {
    this.putIn( item, 'unshift' );
  }
  push( item ) {
    this.putIn( item, 'push' );
  }
  shift() {
    this.putOut( 'shift' );
  }
  pop() {
    this.putOut( 'pop' );
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
