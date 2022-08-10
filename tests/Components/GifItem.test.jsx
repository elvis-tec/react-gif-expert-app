import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/Components/GifItem';

describe('Pruebas en <GifItem />', () => { 
  const title = 'Elvis';
  const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elvis_Presley_promoting_Jailhouse_Rock.jpg/1200px-Elvis_Presley_promoting_Jailhouse_Rock.jpg';
  
  test('Debe hacer match con el snapshot', () => {
    const { container } = render( <GifItem title={ title } url={ url } />);
    expect( container ).toMatchSnapshot();
  });

  test('Debe de mostrar la imagen con la URL y el ALT indicado', () => {
    render( <GifItem title={ title } url={ url } />);
    /* expect( screen.getByRole('img').src ).toBe( url );
    expect( screen.getByRole('img').title ).toBe( title ); */
    const { src, alt } = screen.getByRole('img');
    expect( src ).toBe( url );
    expect( alt ).toBe( title );

  });

  test('Debe de mostrar el titulo en el componente', () => {
    render( <GifItem title={ title } url={ url } />);
    expect( screen.getByText(title) ).toBeTruthy();

  });

})