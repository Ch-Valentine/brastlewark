import convertGnomes from './convertGnomes';


export default {
  getGnomes: async () => {
    const list = await fetch(
      'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
    );

    return convertGnomes(list);
  }
}
