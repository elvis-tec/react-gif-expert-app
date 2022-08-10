import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/Components/AddCategory';

describe('Pruebas en <AddCategory />', () => { 
  const search = 'Elvis';

  test('Debe de cambiar el valor de la caja de texto', () => { 
    render( <AddCategory onNewCategory={ ()=> {} } />);
    const input = screen.getByRole('textbox');
    
    fireEvent.input( input, { target: { value: search }} );
    expect( input.value ).toBe( search );
  });

  test('Debe de llamar onNewCategory si el input tiene un valor', () => { 
    const onNewCategory = jest.fn();

    render( <AddCategory onNewCategory={ onNewCategory } />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input( input, { target: { value: search }} );
    fireEvent.submit( form );

    expect( input.value ).toBe('');
    expect( onNewCategory ).toHaveBeenCalledTimes(1);
    expect( onNewCategory ).toHaveBeenCalledWith( search );
  });

  test('No debe de llamar onNewCategory si el input esta vacio', () => { 
    const onNewCategory = jest.fn();

    render( <AddCategory onNewCategory={ onNewCategory } />);
    const form = screen.getByRole('form');

    fireEvent.submit( form );
    expect( onNewCategory ).toHaveBeenCalledTimes(0);
    expect( onNewCategory ).not.toHaveBeenCalled();
  });
})