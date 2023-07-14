type ColorNames = "green" | "red"

type ColorScale =
    | '50'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';

type Color = {
    [Scale in ColorScale]: string;
};
export const green: Color = {
    50: 'rgba(240, 253, 248, 1)',
    100: 'rgba(224, 248, 238, 1)',
    200: 'rgba(192, 242, 221, 1)',
    300: 'rgba(161, 237, 208, 1)',
    400: 'rgba(80, 220, 169, 1)',
    500: 'rgba(35, 196, 140, 1)',
    600: 'rgba(22, 166, 121, 1)',
    700: 'rgba(0, 122, 92, 1)',
    800: 'rgba(18, 84, 67, 1)',
    900: 'rgba(12, 59, 47, 1)',
}

export const red: Color = {
    50: 'rgba(254, 243, 241, 1)',
    100: 'rgba(253, 226, 221, 1)',
    200: 'rgba(251, 197, 188, 1)',
    300: 'rgba(247, 148, 130, 1)',
    400: 'rgba(245, 107, 82, 1)',
    500: 'rgba(242, 65, 34, 1)',
    600: 'rgba(197, 40, 12, 1)',
    700: 'rgba(159, 32, 10, 1)',
    800: 'rgba(115, 24, 7, 1)',
    900: 'rgba(67, 14, 4, 1)',
}

export const colors: Record<ColorNames, Color> = {
    green,
    red
}

