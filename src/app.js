export default function getAttackTypes(unit) {
  if (unit.hasOwnProperty('special')) {
    const { special } = unit;
    const newSpecial = special.map((item) => {
      const { id, name, icon, description = 'Описание недоступно' } = item;
      if (id && name && icon) {
        return {
          id: id,
          name: name,
          icon: icon,
          description: description
        };
      } else {
        throw new Error('Описание вида атаки должно содержать параметры id, name, icon');
      }
    })
    return newSpecial;
  } else {
    throw new Error('Переданы неверные данные');
  }
}
