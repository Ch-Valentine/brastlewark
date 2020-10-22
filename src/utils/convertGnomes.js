const convertGnomes = json => json.Brastlewark.reduce((acc, gnome) => {
  const firstname = gnome.name.split(' ')[0];
  const gnomeGender = firstname.endsWith('a') ? 'Female' : 'Male';

  const gnomeById = {
    ...acc.gnomeById,
    [gnome.id]: {
      ...gnome,
      gender: gnomeGender,
      searchable: `${gnome.name} ${gnome.age} ${gnome.hair_color} ${gnomeGender} ${gnome.professions.join(' ')}`
        .toLowerCase()
    }
  };
  const gnomeIdByName = { ...acc.gnomeIdByName, [gnome.name]: gnome.id };

  return { gnomeById, gnomeIdByName }
}, { gnomeById: {}, gnomeIdByName: {} });

export default convertGnomes;
