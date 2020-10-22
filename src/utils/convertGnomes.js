const convertGnomes = json => json.Brastlewark.reduce((acc, gnome) => {
  const firstname = gnome.name.split(' ')[0];
  const gnomeGender = firstname.endsWith('a') ? 'female' : 'male';

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
  const gnomeIdsByProfession = { ...acc.gnomeIdsByProfession };

  gnome.professions.forEach(profName => {
    gnomeIdsByProfession[profName] = [...gnomeIdsByProfession[profName] || [], gnome.id]
  });

  return { gnomeById, gnomeIdByName, gnomeIdsByProfession }
}, { gnomeById: {}, gnomeIdByName: {}, gnomeIdsByProfession: {} });

export default convertGnomes;
