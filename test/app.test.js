import getAttackTypes from '../src/app';

test('destructure and make new array', () => {
  const unit = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
    ],
  };
  const expected = [{
    id: 8,
    name: 'Двойной выстрел',
    icon: 'http://...',
    description: 'Двойной выстрел наносит двойной урон',
  },
  {
    id: 9,
    name: 'Нокаутирующий удар',
    icon: 'http://...',
    description: 'Описание недоступно',
  }];
  expect(getAttackTypes(unit)).toEqual(expected);
});

test('incorrect data error 1', () => {
  const wrongData = {
    special: [
      { something: 123 },
    ],
  };
  expect(() => getAttackTypes(wrongData)).toThrow('Описание вида атаки должно содержать параметры id, name, icon');
});

test('incorrect data error 2', () => {
  const wrongData = 'qwerty';
  expect(() => getAttackTypes(wrongData)).toThrow('Переданы неверные данные');
});
