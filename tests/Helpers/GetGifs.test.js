import { getGifs } from '../../src/Helpers/GetGifs';

describe('Pruebas en helper GetGifs.js', () => { 
  test('Debe de retornar un arreglo de gifs', async() => { 
    const gifs = await getGifs('NGE');
    expect( gifs.length ).toBeGreaterThan(0);
    expect( gifs[0] ).toEqual({
      id: expect.any( String ),
      title: expect.any( String ),
      url: expect.any( String ),
    });
  });
})