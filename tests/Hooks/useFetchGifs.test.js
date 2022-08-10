import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/Hooks/useFetchGifs';

describe('Pruebas en Hook useFetchGifs', () => {
    test('Debe de regresar el estado inicial', () => {
        const { result } = renderHook(()=> useFetchGifs('Elvis'));
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
    });

    test('Debe de regresar un arreglo de images y isLoading en false', async () => {
        const { result } = renderHook(()=> useFetchGifs('Elvis'));
        await waitFor(
            ()=> expect( result.current.images.length ).toBeGreaterThan(0),
            {
                timeout: 1000
            }
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
    });
});