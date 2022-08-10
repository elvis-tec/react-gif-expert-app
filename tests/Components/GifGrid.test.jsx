import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/Components/GifGrid';
import { useFetchGifs } from '../../src/Hooks/useFetchGifs';
jest.mock('../../src/Hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
  const category = 'Elvis';

  test('Debe de mostrar el loading inicialmente', () => { 

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render( <GifGrid category={ category }/>);
    expect( screen.getByText('Cargando...') ).toBeTruthy();
    expect( screen.getByText( category ) ).toBeTruthy();
  });

  test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => { 
    const gifs = [{
      id: 'ABC',
      title: 'Test',
      url: '1234'
    },{
      id: 'ABCD',
      title: 'Test2',
      url: '12345'
    },];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render( <GifGrid category={ category }/>);
    expect( screen.getAllByRole('img').length ).toBe(2);
  });
});
